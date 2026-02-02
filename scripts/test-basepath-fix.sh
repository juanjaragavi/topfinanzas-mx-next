#!/bin/bash

# API BasePath Fix Verification Test
# Tests that all API endpoints work with /mx basePath prefix

echo "================================================"
echo "API BasePath Fix Verification"
echo "================================================"
echo ""

API_BASE="http://localhost:3030/mx/api"
TEST_EMAIL="basepath-test-$(date +%s)@example.com"

echo "📧 Test Email: $TEST_EMAIL"
echo "🔍 Testing API endpoints with /mx basePath..."
echo ""

# Test 1: /mx/api/sheets
echo "🧪 Test 1: POST /mx/api/sheets"
SHEETS_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/sheets" \
  -H "Content-Type: application/json" \
  -d "{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"$TEST_EMAIL\",\"phone\":\"1234567890\",\"preference\":\"test\",\"income\":\"test\",\"Pais\":\"Mexico\",\"Marca\":\"TopFinanzas\"}")

SHEETS_CODE=$(echo "$SHEETS_RESPONSE" | tail -n 1)
if [ "$SHEETS_CODE" = "201" ] || [ "$SHEETS_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SHEETS_CODE)"
else
  echo "   ❌ FAILED (HTTP $SHEETS_CODE)"
  echo "$SHEETS_RESPONSE" | head -n -1
fi
echo ""

# Test 2: /mx/api/sheets/short
echo "🧪 Test 2: POST /mx/api/sheets/short"
SHORT_EMAIL="short-basepath-test-$(date +%s)@example.com"
SHORT_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/sheets/short" \
  -H "Content-Type: application/json" \
  -d "{\"firstName\":\"Test\",\"email\":\"$SHORT_EMAIL\",\"preference\":\"test\",\"income\":\"test\",\"Pais\":\"Mexico\",\"Marca\":\"TopFinanzas\"}")

SHORT_CODE=$(echo "$SHORT_RESPONSE" | tail -n 1)
if [ "$SHORT_CODE" = "201" ] || [ "$SHORT_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SHORT_CODE)"
else
  echo "   ❌ FAILED (HTTP $SHORT_CODE)"
  echo "$SHORT_RESPONSE" | head -n -1
fi
echo ""

# Test 3: /mx/api/subscribe
echo "🧪 Test 3: POST /mx/api/subscribe"
SUBSCRIBE_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "$API_BASE/subscribe" \
  -H "Content-Type: application/json" \
  -d "{\"email_address\":\"$TEST_EMAIL\",\"first_name\":\"Test\",\"state\":\"active\",\"fields\":{\"quiz_tarjetas\":\"SI\"}}")

SUBSCRIBE_CODE=$(echo "$SUBSCRIBE_RESPONSE" | tail -n 1)
if [ "$SUBSCRIBE_CODE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $SUBSCRIBE_CODE)"
else
  echo "   ❌ FAILED (HTTP $SUBSCRIBE_CODE)"
  echo "$SUBSCRIBE_RESPONSE" | head -n -1
fi
echo ""

# Test 4: Verify old paths return 404
echo "🧪 Test 4: Verify /api/* (without /mx) returns 404"
OLD_RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "http://localhost:3030/api/sheets" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@test.com\"}" 2>&1)

OLD_CODE=$(echo "$OLD_RESPONSE" | grep -oE '[0-9]{3}$' | tail -n 1)
if [ "$OLD_CODE" = "404" ]; then
  echo "   ✅ CORRECT (HTTP 404 as expected)"
else
  echo "   ⚠️  Unexpected response (HTTP $OLD_CODE)"
fi
echo ""

echo "================================================"
echo "Summary"
echo "================================================"
echo ""

PASSED=0
TOTAL=4

[ "$SHEETS_CODE" = "201" ] || [ "$SHEETS_CODE" = "200" ] && ((PASSED++))
[ "$SHORT_CODE" = "201" ] || [ "$SHORT_CODE" = "200" ] && ((PASSED++))
[ "$SUBSCRIBE_CODE" = "200" ] && ((PASSED++))
[ "$OLD_CODE" = "404" ] && ((PASSED++))

echo "Tests Passed: $PASSED/$TOTAL"
echo ""

if [ $PASSED -eq $TOTAL ]; then
  echo "🎉 ALL TESTS PASSED!"
  echo ""
  echo "✅ API endpoints now correctly use /mx basePath"
  echo "✅ Form submissions will work correctly"
  echo ""
  echo "Next: Test in browser at http://localhost:3030/mx/campana-quiz"
else
  echo "⚠️  SOME TESTS FAILED"
  echo ""
  echo "Check server logs for details"
fi

echo ""
echo "================================================"
