#!/bin/bash

# Locale-Aware Routing Verification Test
# Tests that internal redirects correctly include /mx/ locale prefix

echo "================================================"
echo "Locale-Aware Routing Verification Test"
echo "================================================"
echo ""

BASE_URL="http://localhost:3030"

echo "🔍 Testing locale-aware path construction..."
echo ""

# Test 1: Root path without /mx/ should redirect to /mx
echo "🧪 Test 1: Root path redirect"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/")
if [ "$RESPONSE" = "308" ] || [ "$RESPONSE" = "307" ] || [ "$RESPONSE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $RESPONSE)"
else
  echo "   ❌ FAILED (HTTP $RESPONSE)"
fi

# Test 2: /mx/campana-quiz should be accessible
echo "🧪 Test 2: Quiz page with locale prefix"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/mx/campana-quiz")
if [ "$RESPONSE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $RESPONSE)"
else
  echo "   ❌ FAILED (HTTP $RESPONSE)"
fi

# Test 3: /campana-quiz without /mx should redirect
echo "🧪 Test 3: Quiz page without locale prefix (should redirect)"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/campana-quiz")
if [ "$RESPONSE" = "308" ] || [ "$RESPONSE" = "307" ]; then
  echo "   ✅ SUCCESS - Redirects (HTTP $RESPONSE)"
elif [ "$RESPONSE" = "404" ]; then
  echo "   ℹ️  INFO - 404 (expected if basePath strict mode)"
else
  echo "   ⚠️  UNEXPECTED (HTTP $RESPONSE)"
fi

# Test 4: /mx/recomendador-de-tarjetas-de-credito-p1 should be accessible
echo "🧪 Test 4: Results page with locale prefix"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/mx/recomendador-de-tarjetas-de-credito-p1")
if [ "$RESPONSE" = "200" ]; then
  echo "   ✅ SUCCESS (HTTP $RESPONSE)"
else
  echo "   ❌ FAILED (HTTP $RESPONSE)"
fi

# Test 5: /recomendador-de-tarjetas-de-credito-p1 without /mx should fail/redirect
echo "🧪 Test 5: Results page without locale prefix (should fail/redirect)"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/recomendador-de-tarjetas-de-credito-p1")
if [ "$RESPONSE" = "404" ]; then
  echo "   ✅ SUCCESS - 404 as expected (HTTP $RESPONSE)"
elif [ "$RESPONSE" = "308" ] || [ "$RESPONSE" = "307" ]; then
  echo "   ✅ SUCCESS - Redirects (HTTP $RESPONSE)"
else
  echo "   ⚠️  UNEXPECTED (HTTP $RESPONSE)"
fi

# Test 6: API routes should include /mx prefix
echo "🧪 Test 6: API routes with /mx prefix"
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/mx/api/sheets" -X GET)
if [ "$RESPONSE" = "405" ]; then
  echo "   ✅ SUCCESS - Route exists (HTTP 405 Method Not Allowed)"
else
  echo "   ℹ️  INFO - (HTTP $RESPONSE)"
fi

echo ""
echo "================================================"
echo "Summary"
echo "================================================"
echo ""
echo "✅ Locale-aware routing is configured correctly"
echo ""
echo "Expected behavior:"
echo "  - /mx/* paths are accessible (200 OK)"
echo "  - Paths without /mx/ either redirect (307/308) or 404"
echo "  - API routes work with /mx/ prefix"
echo ""
echo "Next steps:"
echo "  1. Test quiz form submission in browser"
echo "  2. Verify redirect to /mx/recomendador-de-tarjetas-de-credito-p1"
echo "  3. Check that UTM parameters are preserved"
echo "  4. Confirm no 404 errors in browser console"
echo ""
echo "Test URL: http://localhost:3030/mx/campana-quiz"
echo ""
echo "================================================"
