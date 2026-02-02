#!/bin/bash

# Quiz Form Submission Test Script
# Tests ActiveCampaign and Google Sheets integration

echo "================================================"
echo "Quiz Form Submission Test"
echo "================================================"
echo ""

API_BASE="http://localhost:3030/mx/api"
TEST_EMAIL="test-$(date +%s)@example.com"
TEST_TIMESTAMP=$(date +%s)

echo "📧 Test Email: $TEST_EMAIL"
echo "⏰ Timestamp: $TEST_TIMESTAMP"
echo ""

# Test 1: Google Sheets API (Full Form)
echo "🧪 Test 1: Google Sheets API (Full Form)"
echo "   Endpoint: /api/sheets"
echo ""

SHEETS_PAYLOAD=$(cat <<EOF
{
  "firstName": "Juan",
  "lastName": "Jaramillo",
  "email": "$TEST_EMAIL",
  "phone": "3054206139",
  "preference": "option1",
  "preferenceText": "Alto cupo de crédito",
  "income": "option2",
  "incomeText": "\$10,000 - \$20,000 MXN",
  "Pais": "Mexico",
  "pais": "Mexico",
  "Marca": "TopFinanzas",
  "marca": "TopFinanzas",
  "source": "google",
  "medium": "cpc",
  "campaign": "quiz-test",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "quiz-test"
}
EOF
)

SHEETS_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/sheets" \
  -H "Content-Type: application/json" \
  -d "$SHEETS_PAYLOAD")

SHEETS_HTTP_CODE=$(echo "$SHEETS_RESPONSE" | tail -n 1)
SHEETS_BODY=$(echo "$SHEETS_RESPONSE" | head -n -1)

if [ "$SHEETS_HTTP_CODE" = "201" ] || [ "$SHEETS_HTTP_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SHEETS_HTTP_CODE)"
  echo "   Response: $SHEETS_BODY"
else
  echo "   ❌ FAILED (HTTP $SHEETS_HTTP_CODE)"
  echo "   Response: $SHEETS_BODY"
fi

echo ""
echo "---"
echo ""

# Test 2: ActiveCampaign Subscribe API
echo "🧪 Test 2: ActiveCampaign Subscribe API"
echo "   Endpoint: /api/subscribe"
echo ""

SUBSCRIBE_PAYLOAD=$(cat <<EOF
{
  "email_address": "$TEST_EMAIL",
  "first_name": "Juan",
  "state": "active",
  "fields": {
    "last_name": "Jaramillo",
    "phone_number": "3054206139",
    "cual_es_tu_ingreso_mensual": "\$10,000 - \$20,000 MXN",
    "que_es_lo_que_mas_importante_en_una_tarjeta_de_credito": "Alto cupo de crédito",
    "pais": "Mexico",
    "marca": "TopFinanzas",
    "quiz_tarjetas": "SI",
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "quiz-test",
    "source": "google",
    "medium": "cpc",
    "campaign": "quiz-test",
    "acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones": "1",
    "date_created": "$(date -u +%Y-%m-%dT%H:%M:%S.000Z)"
  }
}
EOF
)

SUBSCRIBE_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/subscribe" \
  -H "Content-Type: application/json" \
  -d "$SUBSCRIBE_PAYLOAD")

SUBSCRIBE_HTTP_CODE=$(echo "$SUBSCRIBE_RESPONSE" | tail -n 1)
SUBSCRIBE_BODY=$(echo "$SUBSCRIBE_RESPONSE" | head -n -1)

if [ "$SUBSCRIBE_HTTP_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SUBSCRIBE_HTTP_CODE)"
  echo "   Response: $SUBSCRIBE_BODY" | jq '.' 2>/dev/null || echo "   Response: $SUBSCRIBE_BODY"
else
  echo "   ❌ FAILED (HTTP $SUBSCRIBE_HTTP_CODE)"
  echo "   Response: $SUBSCRIBE_BODY"
fi

echo ""
echo "---"
echo ""

# Test 3: Short Form Google Sheets
echo "🧪 Test 3: Google Sheets API (Short Form)"
echo "   Endpoint: /api/sheets/short"
echo ""

SHORT_EMAIL="short-test-$(date +%s)@example.com"

SHORT_PAYLOAD=$(cat <<EOF
{
  "firstName": "María",
  "email": "$SHORT_EMAIL",
  "preference": "option1",
  "preferenceText": "Alto cupo de crédito",
  "income": "option2",
  "incomeText": "\$10,000 - \$20,000 MXN",
  "Pais": "Mexico",
  "pais": "Mexico",
  "Marca": "TopFinanzas",
  "marca": "TopFinanzas",
  "source": "google",
  "medium": "cpc",
  "utm_source": "google",
  "utm_medium": "cpc"
}
EOF
)

SHORT_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/sheets/short" \
  -H "Content-Type: application/json" \
  -d "$SHORT_PAYLOAD")

SHORT_HTTP_CODE=$(echo "$SHORT_RESPONSE" | tail -n 1)
SHORT_BODY=$(echo "$SHORT_RESPONSE" | head -n -1)

if [ "$SHORT_HTTP_CODE" = "201" ] || [ "$SHORT_HTTP_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SHORT_HTTP_CODE)"
  echo "   Response: $SHORT_BODY"
else
  echo "   ❌ FAILED (HTTP $SHORT_HTTP_CODE)"
  echo "   Response: $SHORT_BODY"
fi

echo ""
echo "================================================"
echo "Test Summary"
echo "================================================"
echo ""

TOTAL_TESTS=3
PASSED_TESTS=0

if [ "$SHEETS_HTTP_CODE" = "201" ] || [ "$SHEETS_HTTP_CODE" = "200" ]; then
  ((PASSED_TESTS++))
fi

if [ "$SUBSCRIBE_HTTP_CODE" = "200" ]; then
  ((PASSED_TESTS++))
fi

if [ "$SHORT_HTTP_CODE" = "201" ] || [ "$SHORT_HTTP_CODE" = "200" ]; then
  ((PASSED_TESTS++))
fi

echo "Tests Passed: $PASSED_TESTS/$TOTAL_TESTS"
echo ""

if [ $PASSED_TESTS -eq $TOTAL_TESTS ]; then
  echo "🎉 ALL TESTS PASSED!"
  echo ""
  echo "Next Steps:"
  echo "1. Check Google Sheets for new rows:"
  echo "   https://docs.google.com/spreadsheets/d/1HGOeXznk0sjsr7NbESsvAi-HI5JC5t7hTs1SROkuDWs"
  echo ""
  echo "2. Check ActiveCampaign for new contact:"
  echo "   Search for: $TEST_EMAIL"
  echo "   URL: https://topfinanceus.api-us1.com/admin/main.php?action=contacts"
  echo ""
  echo "3. Test in browser:"
  echo "   http://localhost:3030/mx/campana-quiz"
else
  echo "⚠️  SOME TESTS FAILED"
  echo ""
  echo "Troubleshooting:"
  echo "1. Check server logs for errors"
  echo "2. Verify environment variables:"
  echo "   - ACTIVECAMPAIGN_API_KEY"
  echo "   - ACTIVECAMPAIGN_API_URL"
  echo "   - GOOGLE_SERVICE_ACCOUNT_EMAIL"
  echo "   - GOOGLE_PRIVATE_KEY"
  echo "   - GOOGLE_SHEET_ID"
  echo ""
  echo "3. Restart dev server: npm run dev"
fi

echo ""
echo "================================================"
