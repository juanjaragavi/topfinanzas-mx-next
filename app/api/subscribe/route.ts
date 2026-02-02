import { NextResponse } from "next/server";

import {
  subscribeToConvertKit,
  type ConvertKitSubscriberPayload,
} from "@/lib/kit/convertkit-client";
import { apiLogger } from "@/lib/logger";

type KitFields = Record<string, string | null | undefined>;

interface ActiveCampaignPayload {
  contact: {
    email: string;
    firstName: string;
    lastName?: string;
    phone?: string;
    fieldValues: Array<{
      field: string;
      value: string;
    }>;
  };
}

interface ActiveCampaignResult {
  success: boolean;
  status: number;
  data?: unknown;
  error?: {
    message: string;
    details?: unknown;
  };
  durationMs: number;
  duplicate?: boolean;
}

const buildActiveCampaignFieldValues = (fields: KitFields) => {
  const fieldValues: Array<{ field: string; value: string }> = [];

  const addField = (fieldId: string, value?: string | null) => {
    if (typeof value === "string" && value.trim() !== "") {
      fieldValues.push({ field: fieldId, value: value.trim() });
    }
  };

  // Map quiz fields to ActiveCampaign custom fields
  addField("1", fields.cual_es_tu_ingreso_mensual ?? ""); // Income
  addField(
    "2",
    fields.que_es_lo_que_mas_importante_en_una_tarjeta_de_credito ?? "",
  ); // Card Preference
  addField("3", fields.pais ?? fields.Pais ?? "Mexico"); // Country
  addField("4", fields.marca ?? fields.Marca ?? "TopFinanzas"); // Brand
  addField("5", fields.quiz_tarjetas ?? ""); // Quiz Type
  addField("6", fields.utm_source ?? fields.source ?? ""); // UTM Source
  addField("7", fields.utm_medium ?? fields.medium ?? ""); // UTM Medium
  addField("8", fields.utm_campaign ?? fields.campaign ?? ""); // UTM Campaign
  addField("9", fields.utm_term ?? fields.term ?? ""); // UTM Term
  addField("10", fields.utm_content ?? fields.content ?? ""); // UTM Content
  addField(
    "11",
    fields.acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones ??
      "",
  ); // Consent

  return fieldValues;
};

const parseJson = async (response: Response) => {
  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    apiLogger.warn("ActiveCampaign API: Failed to parse JSON response", {
      error,
    });
    return text;
  }
};

const sendToActiveCampaign = async (
  payload: ActiveCampaignPayload,
  apiUrl: string,
  apiKey: string,
  metadata: { email: string },
): Promise<ActiveCampaignResult> => {
  const startedAt = performance.now();

  try {
    const response = await fetch(`${apiUrl}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Api-Token": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await parseJson(response);
    const durationMs = performance.now() - startedAt;

    if (!response.ok) {
      apiLogger.error("ActiveCampaign API: Error response", undefined, {
        status: response.status,
        body: responseBody,
      });

      return {
        success: false,
        status: response.status,
        durationMs,
        error: {
          message:
            (responseBody as { message?: string })?.message ??
            "Failed to create contact in ActiveCampaign",
          details: responseBody,
        },
      };
    }

    const contactData = (responseBody as { contact?: { id?: string } })
      ?.contact;
    const isExisting = !!(responseBody as { contact?: { id?: string } })
      ?.contact?.id;

    apiLogger.info("ActiveCampaign API: Contact processed", {
      email: metadata.email,
      status: response.status,
      contactId: contactData?.id,
      isExisting,
    });

    return {
      success: true,
      status: response.status,
      data: responseBody,
      durationMs,
      duplicate: isExisting,
    };
  } catch (error) {
    const durationMs = performance.now() - startedAt;
    apiLogger.error("ActiveCampaign API: Network or unexpected error", error);

    return {
      success: false,
      status: 0,
      durationMs,
      error: {
        message:
          error instanceof Error
            ? error.message
            : "Unexpected ActiveCampaign error",
        details: error,
      },
    };
  }
};

export async function POST(request: Request) {
  const kitPayload = (await request.json()) as ConvertKitSubscriberPayload;
  const { email_address, first_name } = kitPayload;
  const kitFields = (kitPayload.fields ?? {}) as KitFields;

  if (!email_address || !first_name) {
    return NextResponse.json(
      { error: "Email and first name are required" },
      { status: 400 },
    );
  }

  const activeCampaignApiUrl = process.env.ACTIVECAMPAIGN_API_URL;
  const activeCampaignApiKey = process.env.ACTIVECAMPAIGN_API_KEY;

  if (!activeCampaignApiUrl || !activeCampaignApiKey) {
    apiLogger.error("ActiveCampaign API credentials not configured");
    return NextResponse.json(
      { error: "ActiveCampaign API is not configured" },
      { status: 500 },
    );
  }

  const lastName = kitFields.last_name ?? "";
  const phone = kitFields.phone_number ?? "";

  const activeCampaignPayload: ActiveCampaignPayload = {
    contact: {
      email: email_address,
      firstName: first_name,
      lastName: typeof lastName === "string" ? lastName : "",
      phone: typeof phone === "string" ? phone : "",
      fieldValues: buildActiveCampaignFieldValues(kitFields),
    },
  };

  const [activeCampaignResult, convertKitResult] = await Promise.all([
    sendToActiveCampaign(
      activeCampaignPayload,
      activeCampaignApiUrl,
      activeCampaignApiKey,
      { email: email_address },
    ),
    subscribeToConvertKit({
      ...kitPayload,
      state: kitPayload.state ?? "active",
    }),
  ]);

  if (!activeCampaignResult.success) {
    return NextResponse.json(
      {
        error:
          activeCampaignResult.error?.message ??
          "Failed to create contact in ActiveCampaign",
        details: {
          activecampaign: activeCampaignResult,
          convertkit: convertKitResult,
        },
      },
      { status: activeCampaignResult.status || 500 },
    );
  }

  if (!convertKitResult.success) {
    apiLogger.error(
      "ConvertKit API: Subscription failed but ActiveCampaign succeeded",
      undefined,
      { convertKitResult },
    );
  }

  return NextResponse.json(
    {
      message: activeCampaignResult.duplicate
        ? "Subscription processed (existing ActiveCampaign contact)"
        : "Subscription processed",
      activecampaign: activeCampaignResult,
      convertkit: convertKitResult,
    },
    { status: 200 },
  );
}
