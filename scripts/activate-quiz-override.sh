#!/bin/bash

# Quiz Validation Override - Activation Script
# This script activates the override by restarting the dev server

echo "================================================"
echo "Quiz Validation Override - Activation"
echo "================================================"
echo ""

# Check current configuration
echo "📋 Current Configuration:"
VALIDATION_VALUE=$(grep "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED" .env.local 2>/dev/null | cut -d'=' -f2)

if [ "$VALIDATION_VALUE" = "false" ]; then
  echo "   Override is SET to: ENABLED (validation disabled)"
else
  echo "   Override is SET to: DISABLED (validation enabled)"
  echo ""
  read -p "⚠️  Do you want to enable the override? (y/n) " -n 1 -r
  echo ""
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Update .env.local
    if [ -f .env.local ]; then
      # Check if variable exists
      if grep -q "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED" .env.local; then
        # Update existing
        sed -i '' 's/NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=.*/NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false/' .env.local
      else
        # Add new
        echo "" >> .env.local
        echo "# Quiz Cookie Validation Configuration" >> .env.local
        echo "NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false" >> .env.local
        echo "NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1" >> .env.local
      fi
    else
      # Create new .env.local
      cat > .env.local << 'EOF'
# Quiz Cookie Validation Configuration
# Set to 'false' to temporarily disable 30-day cookie validation
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false
# When validation is disabled, cookies will expire after this many days (default: 1)
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1
EOF
    fi
    echo "✓ Updated .env.local with override enabled"
  else
    echo "Cancelled. Configuration unchanged."
    exit 0
  fi
fi

echo ""
echo "🔄 Restarting Development Server..."
echo ""

# Find and kill existing dev server
DEV_PID=$(lsof -ti:3030 2>/dev/null)

if [ -n "$DEV_PID" ]; then
  echo "   Stopping existing server (PID: $DEV_PID)..."
  kill -9 $DEV_PID 2>/dev/null
  sleep 2
  echo "   ✓ Server stopped"
else
  echo "   No existing server found"
fi

echo ""
echo "   Starting new server with updated environment..."
echo ""

# Start dev server in background
pnpm dev > /dev/null 2>&1 &
NEW_PID=$!

echo "   ✓ Server started (PID: $NEW_PID)"
echo ""

# Wait for server to be ready
echo "⏳ Waiting for server to be ready..."
for i in {1..30}; do
  if curl -s http://localhost:3030/mx > /dev/null 2>&1; then
    echo "   ✓ Server is ready!"
    break
  fi
  sleep 1
  echo -n "."
done

echo ""
echo ""
echo "================================================"
echo "✅ Override Activated Successfully!"
echo "================================================"
echo ""
echo "📊 Verification:"
echo "   Visit: http://localhost:3030/mx/env-debug"
echo ""
echo "🧪 Test Quiz Pages:"
echo "   • http://localhost:3030/mx/campana-quiz"
echo "   • http://localhost:3030/mx/campana-quiz-short"
echo "   • http://localhost:3030/mx/quiz-2"
echo ""
echo "📝 Expected Behavior:"
echo "   • Quiz pages render without redirect"
echo "   • Can complete quiz multiple times"
echo "   • Cookies expire after 1 day"
echo ""
echo "🔧 To Disable Override:"
echo "   1. Edit .env.local:"
echo "      NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true"
echo "   2. Run this script again"
echo ""
echo "================================================"
echo "Documentation: docs/QUIZ_VALIDATION_OVERRIDE.md"
echo "================================================"
