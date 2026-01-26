import { google } from "googleapis";
import { NextResponse } from "next/server";

import { BRAND_STATIC_FIELDS } from "@/lib/constants";
import { apiLogger } from "@/lib/logger";

const pickString = (...values: unknown[]) => {
  for (const value of values) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed !== "") {
        return trimmed;
      }
    }
  }

  return "";
};

export async function POST(req: Request) {
  const body = await req.json();

  // Enhanced logging for production debugging
  apiLogger.debug("Sheets API request received", {
    hasEmail: !!body.email,
    hasFirstName: !!body.firstName,
    hasPreferenceText: !!body.preferenceText,
    hasIncomeText: !!body.incomeText,
    hasUTMSource: !!body.utm_source,
    hasUTMMedium: !!body.utm_medium,
    hasUTMCampaign: !!body.utm_campaign,
    hasUTMTerm: !!body.utm_term,
    hasUTMContent: !!body.utm_content,
    hasSource: !!body.source,
    hasMedium: !!body.medium,
    hasCampaign: !!body.campaign,
    hasTerm: !!body.term,
    hasContent: !!body.content,
    hasPais: !!(body.Pais || body.pais),
    hasMarca: !!(body.Marca || body.marca),
    bodyKeys: Object.keys(body),
    bodySize: JSON.stringify(body).length,
    utmValues: {
      source: body.utm_source,
      medium: body.utm_medium,
      campaign: body.utm_campaign,
    },
  });

  try {
    const emailInput =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailInput) {
      apiLogger.warn("Validation failed: Missing email");
      return NextResponse.json(
        {
          error: "Email is required to upsert quiz registration",
        },
        { status: 400 },
      );
    }

    // Environment check logging
    apiLogger.debug("Environment check", {
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
      privateKeyStartsWith: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 30),
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    apiLogger.debug("Google Auth created successfully");

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = "mx-topfinanzas-com";

    // Ensure the sheet exists, create it if it doesn't
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === sheetName,
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: sheetName } } }],
        },
      });
    }

    const headers = [
      "Nombre",
      "Apellido",
      "Email",
      "Telefono",
      "Timestamp",
      "Preference",
      "Income",
      "Pais",
      "Marca",
      "Source",
      "Medium",
      "Campaign",
      "Term",
      "Content",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
      "UTM Term",
      "UTM Content",
    ];

    const sheetRange = `${sheetName}!A:S`;
    const existingValuesResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetRange,
      majorDimension: "ROWS",
    });

    let sheetValues = existingValuesResponse.data.values ?? [];

    if (sheetValues.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });

      sheetValues = [headers];
    }

    const emailColumnIndex = headers.indexOf("Email");
    const headerCell = sheetValues[0]?.[emailColumnIndex];
    const sheetHasHeader =
      typeof headerCell === "string" &&
      headerCell.trim().toLowerCase() === "email";

    const now = new Date();
    // Format Date: DD/MM/YYYY
    const fechaRegistro = now.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "America/Mexico_City",
    });
    // Format Time: HH:mm:ss
    const horaRegistro = now.toLocaleTimeString("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/Mexico_City",
    });

    const rowValues = [
      body.firstName ?? "",
      body.lastName ?? "",
      body.email ?? "",
      body.phone ?? "",
      `${fechaRegistro} ${horaRegistro}`,
      body.preferenceText ?? body.preference ?? "",
      body.incomeText ?? body.income ?? "",
      body.Pais ?? body.pais ?? "",
      body.Marca ?? body.marca ?? "",
      body.source ?? "",
      body.medium ?? "",
      body.campaign ?? "",
      body.term ?? "",
      body.content ?? "",
      body.utm_source ?? "",
      body.utm_medium ?? "",
      body.utm_campaign ?? "",
      body.utm_term ?? "",
      body.utm_content ?? "",
    ];

    const dataStartIndex = sheetHasHeader ? 1 : 0;
    let existingRowIndex = -1;

    for (let i = dataStartIndex; i < sheetValues.length; i += 1) {
      const rowEmail = sheetValues[i]?.[emailColumnIndex];
      if (
        typeof rowEmail === "string" &&
        rowEmail.trim().toLowerCase() === emailInput
      ) {
        existingRowIndex = i;
        break;
      }
    }

    if (existingRowIndex !== -1) {
      return NextResponse.json(
        {
          message: "Registration already exists",
          action: "duplicate",
        },
        { status: 409 },
      );
    }

    // Log the row values before appending
    apiLogger.debug("Appending row to sheet", {
      spreadsheetId,
      sheetName,
      rowValuesLength: rowValues.length,
      email: emailInput,
      firstName: body.firstName,
    });

    const appendResult = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    // Log the result of the append operation
    apiLogger.debug("Append operation completed", {
      updatedRange: appendResult.data.updates?.updatedRange,
      updatedRows: appendResult.data.updates?.updatedRows,
      updatedCells: appendResult.data.updates?.updatedCells,
    });

    // Verify the append was successful
    if (
      !appendResult.data.updates?.updatedRows ||
      appendResult.data.updates.updatedRows === 0
    ) {
      apiLogger.warn("Append returned 0 updated rows", {
        appendResult: JSON.stringify(appendResult.data),
      });
    }

    return NextResponse.json(
      {
        message: "Registration created",
        action: "created",
        debug: {
          updatedRange: appendResult.data.updates?.updatedRange,
          updatedRows: appendResult.data.updates?.updatedRows,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    // Enhanced error logging
    apiLogger.error("Sheets API error occurred", error, {
      hasUTMParams: !!(body.utm_source || body.utm_medium || body.utm_campaign),
      requestBodySize: JSON.stringify(body).length,
      requestFields: Object.keys(body),
    });

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to add data to sheet", details: errorMessage },
      { status: 500 },
    );
  }
}
