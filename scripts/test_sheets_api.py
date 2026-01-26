import json
import os
import time

import requests

# Configuration
BASE_URL = "http://localhost:3030/mx/api/sheets"


def test_sheets_api():
    """Test the Google Sheets API integration."""
    email = f"test.user.{int(time.time())}@topfinanzas.com"

    payload = {
        "firstName": "Test",
        "lastName": "User",
        "email": email,
        "phone": "5512345678",
        "preferenceText": "Sin anualidad",
        "incomeText": "Between 10k and 20k",
        "Pais": "Mexico",
        "Marca": "Top Finanzas",
        "utm_source": "automated_test",
        "utm_medium": "script",
        "utm_campaign": "api_validation",
    }

    print("=" * 60)
    print("Google Sheets API Test")
    print("=" * 60)
    print(f"URL: {BASE_URL}")
    print(f"Email: {email}")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    print("-" * 60)

    try:
        response = requests.post(BASE_URL, json=payload, timeout=30)
        print(f"Status Code: {response.status_code}")
        print("Response Body:")
        try:
            response_json = response.json()
            print(json.dumps(response_json, indent=2))

            if response.status_code == 201:
                print("\n✅ SUCCESS: Registration created!")
                print("📋 Check your Google Sheet for the new row.")
                print("   Sheet name should be: 'mx-topfinanzas-com'")
                print("\n⚠️  IMPORTANT: Look for a tab named 'mx-topfinanzas-com'")
                print("   at the bottom of your Google Sheet, NOT 'Hoja_1'!")
            elif response.status_code == 409:
                print("\n⚠️ DUPLICATE: Email already exists in sheet.")
            elif response.status_code == 500:
                print("\n❌ ERROR: Server error - check API logs for details.")
                if "details" in response_json:
                    print(f"   Details: {response_json['details']}")
            else:
                print(f"\n❓ UNEXPECTED: Status code {response.status_code}")

        except ValueError as e:
            print(f"Failed to parse JSON: {e}")
            print(f"Raw response: {response.text[:500]}")

    except requests.exceptions.ConnectionError:
        print(f"\n❌ CONNECTION ERROR: Cannot connect to {BASE_URL}")
        print("   Make sure the Next.js dev server is running on port 3030.")
    except requests.exceptions.Timeout:
        print("\n❌ TIMEOUT: Request timed out after 30 seconds.")
    except requests.exceptions.RequestException as e:
        print(f"\n❌ REQUEST FAILED: {e}")


def verify_sheet_directly():
    """Verify the sheet data directly using Google Sheets API."""
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        print("\n📦 Installing google-api-python-client...")
        os.system("pip install google-api-python-client google-auth")
        from google.oauth2 import service_account
        from googleapiclient.discovery import build

    # Load credentials from .env file
    from pathlib import Path

    env_path = Path(__file__).parent.parent / ".env"

    env_vars = {}
    if env_path.exists():
        with open(env_path, encoding="utf-8") as f:
            for line in f:
                if "=" in line and not line.startswith("#"):
                    key, value = line.strip().split("=", 1)
                    # Remove quotes if present
                    value = value.strip('"').strip("'")
                    env_vars[key] = value

    service_email = env_vars.get("GOOGLE_SERVICE_ACCOUNT_EMAIL")
    private_key = env_vars.get("GOOGLE_PRIVATE_KEY", "").replace("\\n", "\n")
    sheet_id = env_vars.get("GOOGLE_SHEET_ID")

    if not all([service_email, private_key, sheet_id]):
        print("\n❌ Missing environment variables for direct sheet verification")
        return

    print("\n" + "=" * 60)
    print("Direct Sheet Verification")
    print("=" * 60)
    print(f"Sheet ID: {sheet_id}")
    print(f"Service Account: {service_email}")

    try:
        credentials = service_account.Credentials.from_service_account_info(
            {
                "type": "service_account",
                "client_email": service_email,
                "private_key": private_key,
                "token_uri": "https://oauth2.googleapis.com/token",
            },
            scopes=["https://www.googleapis.com/auth/spreadsheets"],
        )

        service = build("sheets", "v4", credentials=credentials)

        # Get spreadsheet info
        spreadsheet = (
            service.spreadsheets()  # pylint: disable=no-member
            .get(spreadsheetId=sheet_id)
            .execute()
        )
        sheets = spreadsheet.get("sheets", [])

        print(
            f"\n📋 Spreadsheet: {spreadsheet.get('properties', {}).get('title', 'Unknown')}"
        )
        print("📑 Available sheets:")
        for sheet in sheets:
            title = sheet.get("properties", {}).get("title", "Unknown")
            print(f"   - {title}")

        # Try to read from mx-topfinanzas-com
        target_sheet = "mx-topfinanzas-com"
        try:
            # Read up to row 15 to see if there are gaps
            result = (
                service.spreadsheets()  # pylint: disable=no-member
                .values()
                .get(spreadsheetId=sheet_id, range=f"{target_sheet}!A1:S15")
                .execute()
            )

            values = result.get("values", [])
            print(f"\n✅ Sheet '{target_sheet}' exists!")
            print(f"   Total rows returned: {len(values)}")

            if values:
                print(f"\n   📊 ALL HEADERS: {values[0]}")
                if len(values) > 1:
                    print("\n   📝 ALL ROWS in range A1:S15:")
                    for i, row in enumerate(values, 1):
                        if i == 1:
                            continue  # Skip header
                        # Show email column to identify the row
                        email_val = row[2] if len(row) > 2 else "(empty)"
                        name_val = row[0] if len(row) > 0 else "(empty)"
                        row_empty = len(row) == 0 or all(c == "" for c in row)
                        if row_empty:
                            print(f"      Row {i}: (EMPTY ROW)")
                        else:
                            print(f"      Row {i}: Name={name_val}, Email={email_val}")
                else:
                    print("\n   ⚠️  NO DATA ROWS - only headers exist!")

        except Exception as e:  # pylint: disable=broad-except
            print(f"\n⚠️  Sheet '{target_sheet}' error: {e}")

    except Exception as e:  # pylint: disable=broad-except
        print(f"\n❌ Direct verification failed: {e}")


if __name__ == "__main__":
    test_sheets_api()
    verify_sheet_directly()
