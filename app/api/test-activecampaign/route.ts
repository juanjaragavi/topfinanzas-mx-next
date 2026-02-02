import { NextResponse } from "next/server";

/**
 * Test endpoint for ActiveCampaign API connection
 * Tests credentials and connectivity by attempting to create a test contact
 */
export async function GET() {
  const apiUrl = process.env.ACTIVECAMPAIGN_API_URL;
  const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;

  // Validate environment variables
  if (!apiUrl || !apiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing credentials",
        details: {
          hasApiUrl: !!apiUrl,
          hasApiKey: !!apiKey,
          apiUrl: apiUrl || "NOT SET",
        },
      },
      { status: 500 },
    );
  }

  try {
    // Test 1: Verify API connection with a simple ping
    const timestamp = new Date().toISOString();
    const testEmail = `test-${Date.now()}@topfinanzas-test.com`;

    const payload = {
      contact: {
        email: testEmail,
        firstName: "Test",
        lastName: "Connection",
        fieldValues: [
          {
            field: "3", // Country field
            value: "Mexico",
          },
          {
            field: "4", // Brand field
            value: "TopFinanzas",
          },
        ],
      },
    };

    const startTime = performance.now();

    const response = await fetch(`${apiUrl}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "Api-Token": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const duration = performance.now() - startTime;
    const responseBody = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "ActiveCampaign API returned error",
          details: {
            status: response.status,
            statusText: response.statusText,
            response: responseBody,
            apiUrl,
            duration: `${duration.toFixed(2)}ms`,
          },
        },
        { status: response.status },
      );
    }

    // Success!
    return NextResponse.json({
      success: true,
      message: "✅ ActiveCampaign connection successful!",
      details: {
        status: response.status,
        apiUrl,
        testEmail,
        contactId: responseBody?.contact?.id,
        duration: `${duration.toFixed(2)}ms`,
        timestamp,
        response: responseBody,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Connection failed",
        details: {
          message: error instanceof Error ? error.message : "Unknown error",
          apiUrl,
          error: String(error),
        },
      },
      { status: 500 },
    );
  }
}
