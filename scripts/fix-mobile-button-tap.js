#!/usr/bin/env node

/**
 * Fix Mobile Button Double-Tap Issue
 *
 * This script replaces problematic hover classes that cause double-tap issues on mobile
 * with touch-friendly CSS utility classes that use @media (hover: hover) queries.
 *
 * Issue: Buttons with hover transforms require two taps on mobile:
 * - First tap activates hover state
 * - Second tap triggers the click
 *
 * Solution: Use CSS utility classes that only apply hover effects on true hover devices
 */

const fs = require("fs");
const path = require("path");

// Files to update (all finanzas-personales articles with CTAs)
const filesToUpdate = [
  "app/finanzas-personales/cashback-credit-cards/page.tsx",
  "app/finanzas-personales/creating-a-budget-youll-actually-stick-to/page.tsx",
  "app/finanzas-personales/what-is-financial-health/page.tsx",
  "app/finanzas-personales/best-rewards-credit-cards/page.tsx",
  "app/finanzas-personales/no-annual-fee-credit-cards/page.tsx",
  "app/finanzas-personales/money-management-for-beginners/page.tsx",
  "app/finanzas-personales/setting-financial-goals/page.tsx",
  "app/finanzas-personales/top-credit-cards-0-intro-apr/page.tsx",
  "app/finanzas-personales/understanding-credit-card-interest-rates/page.tsx",
  "app/finanzas-personales/best-personal-loans/page.tsx",
  "app/finanzas-personales/side-hustle-or-second-job/page.tsx",
  "app/finanzas-personales/inflation-proof-your-life/page.tsx",
  "app/finanzas-personales/credit-card-types-benefits/page.tsx",
  "app/finanzas-personales/travel-credit-cards/page.tsx",
  "app/finanzas-personales/getting-out-of-debt/page.tsx",
  "app/finanzas-personales/tips-for-choosing-an-online-loan/page.tsx",
  "app/finanzas-personales/combine-finances-after-marriage-or-moving-in/page.tsx",
  "app/finanzas-personales/personal-loans-debt-strategy/page.tsx",
];

// Pattern to match and replace
const orangeButtonPattern =
  /className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full inline-block transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0\.5"/g;
const blueButtonPattern =
  /className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full inline-block transition-colors text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0\.5"/g;

// Replacements
const orangeButtonReplacement = 'className="cta-button-orange"';
const blueButtonReplacement = 'className="cta-button-blue"';

let totalReplacements = 0;
let filesModified = 0;

console.log("🔧 Fixing mobile button double-tap issue...\n");

filesToUpdate.forEach((file) => {
  const filePath = path.join(process.cwd(), file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");
  let fileReplacements = 0;

  // Replace orange buttons
  const orangeMatches = content.match(orangeButtonPattern);
  if (orangeMatches) {
    content = content.replace(orangeButtonPattern, orangeButtonReplacement);
    fileReplacements += orangeMatches.length;
  }

  // Replace blue buttons
  const blueMatches = content.match(blueButtonPattern);
  if (blueMatches) {
    content = content.replace(blueButtonPattern, blueButtonReplacement);
    fileReplacements += blueMatches.length;
  }

  if (fileReplacements > 0) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ ${file}: ${fileReplacements} button(s) fixed`);
    filesModified++;
    totalReplacements += fileReplacements;
  }
});

console.log(
  `\n✨ Complete! Modified ${filesModified} files with ${totalReplacements} total replacements.`,
);
console.log("\n📱 Mobile buttons now work with single tap!");
console.log(
  "🖥️  Desktop hover effects are preserved using @media (hover: hover)",
);
