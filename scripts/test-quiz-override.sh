#!/bin/bash

# Quiz Validation Override - Quick Test Script
# This script verifies the environment configuration and provides test URLs

echo "================================================"
echo "Quiz Validation Override - Environment Check"
echo "================================================"
echo ""

# Check .env.local file
echo "📋 Checking .env.local configuration..."
if [ -f .env.local ]; then
  VALIDATION_VALUE=$(grep "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED" .env.local | cut -d'=' -f2)
  EXPIRATION_VALUE=$(grep "NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION" .env.local | cut -d'=' -f2)
  
  echo "✓ .env.local exists"
  echo "  NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED = $VALIDATION_VALUE"
  echo "  NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION = $EXPIRATION_VALUE"
  echo ""
  
  if [ "$VALIDATION_VALUE" = "false" ]; then
    echo "✅ Override ENABLED - Validation is DISABLED"
    echo "   Users can access quiz pages multiple times"
  else
    echo "⚠️  Override DISABLED - Validation is ENABLED"
    echo "   Standard redirect behavior active"
  fi
else
  echo "❌ .env.local not found"
  echo "   Creating default configuration..."
  cat > .env.local << 'EOF'
# Quiz Cookie Validation Configuration
# Set to 'false' to temporarily disable 30-day cookie validation
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false
# When validation is disabled, cookies will expire after this many days (default: 1)
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1
EOF
  echo "✓ Created .env.local with override enabled"
fi

echo ""
echo "================================================"
echo "Next Steps"
echo "================================================"
echo ""
echo "1. Restart development server:"
echo "   npm run dev"
echo ""
echo "2. Test quiz pages:"
echo "   http://localhost:3030/mx/campana-quiz"
echo "   http://localhost:3030/mx/campana-quiz-short"
echo "   http://localhost:3030/mx/quiz-2"
echo ""
echo "3. Verify in browser console:"
echo "   Open DevTools → Console → Run:"
echo "   console.log('Validation:', process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED)"
echo ""
echo "4. To re-enable validation:"
echo "   Edit .env.local and set:"
echo "   NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true"
echo "   Then restart server"
echo ""
echo "================================================"
echo "Documentation: docs/QUIZ_VALIDATION_OVERRIDE.md"
echo "================================================"
