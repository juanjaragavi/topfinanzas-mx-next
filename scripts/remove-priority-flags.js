#!/usr/bin/env node

/**
 * Script to remove priority={true} from blog posts and add loading="lazy"
 * Priority 2 implementation from Image Optimization Roadmap
 */

const fs = require("fs");
const path = require("path");

// Files to modify (blog posts and financial solutions)
const filesToModify = [
  // Personal Finance posts
  "app/finanzas-personales/getting-out-of-debt/page.tsx",
  "app/finanzas-personales/cashback-credit-cards/page.tsx",
  "app/finanzas-personales/page.tsx",
  "app/finanzas-personales/money-management-for-beginners/page.tsx",
  "app/finanzas-personales/best-rewards-credit-cards/page.tsx",
  "app/finanzas-personales/what-is-financial-health/page.tsx",
  "app/finanzas-personales/creating-a-budget-youll-actually-stick-to/page.tsx",
  "app/finanzas-personales/how-to-ask-for-a-raise/page.tsx",
  "app/finanzas-personales/understanding-credit-card-interest-rates/page.tsx",
  "app/finanzas-personales/setting-financial-goals/page.tsx",
  "app/finanzas-personales/best-personal-loans/page.tsx",
  "app/finanzas-personales/inflation-proof-your-life/page.tsx",
  "app/finanzas-personales/credit-card-types-benefits/page.tsx",
  "app/finanzas-personales/personal-loans-debt-strategy/page.tsx",
  "app/finanzas-personales/top-credit-cards-0-intro-apr/page.tsx",
  "app/finanzas-personales/side-hustle-or-second-job/page.tsx",
  "app/finanzas-personales/ditching-impulse-buys-mindful-spending/page.tsx",
  "app/finanzas-personales/tips-for-choosing-an-online-loan/page.tsx",
  "app/finanzas-personales/no-annual-fee-credit-cards/page.tsx",
  "app/finanzas-personales/combine-finances-after-marriage-or-moving-in/page.tsx",

  // Financial Solutions posts
  "app/soluciones-financieras/nationwide-personal-loan/page.tsx",
  "app/soluciones-financieras/virgin-money-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/natwest-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/iwoca-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/lloyds-bank-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/capify-personal-loan/page.tsx",
  "app/soluciones-financieras/curve-credit-card/page.tsx",
  "app/soluciones-financieras/marketfinance-personal-loan/page.tsx",
  "app/soluciones-financieras/capify-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/funding-options-personal-loan/page.tsx",
  "app/soluciones-financieras/marketfinance-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/santander-uk-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/tsb-personal-loan/page.tsx",
  "app/soluciones-financieras/natwest-personal-loan/page.tsx",
  "app/soluciones-financieras/tsb-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/lloyds-bank-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/barclaycard-avios-plus-requirements/page.tsx",
  "app/soluciones-financieras/fleximize-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/funding-options-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/natwest-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/nationwide-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/funding-circle-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/starling-bank-credit-card/page.tsx",
  "app/soluciones-financieras/virgin-money-personal-loan/page.tsx",
  "app/soluciones-financieras/fleximize-personal-loan/page.tsx",
  "app/soluciones-financieras/funding-xchange-personal-loan/page.tsx",
  "app/soluciones-financieras/tsb-credit-card/page.tsx",
  "app/soluciones-financieras/monzo-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/revolut-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/santander-uk-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/lloyds-bank-personal-loan/page.tsx",
  "app/soluciones-financieras/curve-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/monzo-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/natwest-credit-card/page.tsx",
  "app/soluciones-financieras/barclays-personal-loan/page.tsx",
  "app/soluciones-financieras/starling-bank-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/halifax-world-elite-mastercard/page.tsx",
  "app/soluciones-financieras/monzo-personal-loan/page.tsx",
  "app/soluciones-financieras/funding-xchange-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/hsbc-personal-loan/page.tsx",
  "app/soluciones-financieras/hsbc-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/virgin-money-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/starling-bank-credit-card-requirements/page.tsx",
  "app/soluciones-financieras/halifax-world-elite-mastercard-requirements/page.tsx",
  "app/soluciones-financieras/lloyds-bank-credit-card/page.tsx",
  "app/soluciones-financieras/starling-bank-personal-loan/page.tsx",
  "app/soluciones-financieras/tsb-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/santander-uk-personal-loan/page.tsx",
  "app/soluciones-financieras/virgin-money-credit-card/page.tsx",
  "app/soluciones-financieras/halifax-personal-loan/page.tsx",
  "app/soluciones-financieras/monzo-credit-card/page.tsx",
  "app/soluciones-financieras/barclaycard-avios-plus/page.tsx",
  "app/soluciones-financieras/barclays-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/iwoca-personal-loan/page.tsx",
  "app/soluciones-financieras/halifax-personal-loan-requirements/page.tsx",
  "app/soluciones-financieras/funding-circle-personal-loan/page.tsx",
];

let successCount = 0;
let failCount = 0;
const errors = [];

console.log(
  "🚀 Starting Priority 2 Implementation: Removing excessive priority flags\n",
);
console.log(`📝 Processing ${filesToModify.length} files...\n`);

filesToModify.forEach((relativeFilePath, index) => {
  const filePath = path.join(process.cwd(), relativeFilePath);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(
        `⚠️  [${index + 1}/${filesToModify.length}] File not found: ${relativeFilePath}`,
      );
      failCount++;
      errors.push(`File not found: ${relativeFilePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, "utf8");
    const originalContent = content;

    // Replace priority={true} with priority={false}
    content = content.replace(/priority=\{true\}/g, "priority={false}");

    // Add loading="lazy" if not present and priority was changed
    // This regex looks for Image components that don't have a loading attribute
    if (content !== originalContent) {
      // Find Image components that now have priority={false} but no loading attribute
      const imageComponentRegex = /<Image\s[^>]*>/g;
      content = content.replace(imageComponentRegex, (match) => {
        // If it has priority={false} and no loading attribute, add loading="lazy"
        if (match.includes("priority={false}") && !match.includes("loading=")) {
          // Add loading="lazy" before the closing >
          return match.replace(
            ">",
            '\n                  loading="lazy"\n                >',
          );
        }
        return match;
      });
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(
        `✅ [${index + 1}/${filesToModify.length}] Updated: ${relativeFilePath}`,
      );
      successCount++;
    } else {
      console.log(
        `⏭️  [${index + 1}/${filesToModify.length}] No changes needed: ${relativeFilePath}`,
      );
    }
  } catch (error) {
    console.error(
      `❌ [${index + 1}/${filesToModify.length}] Error processing ${relativeFilePath}:`,
      error.message,
    );
    failCount++;
    errors.push(`${relativeFilePath}: ${error.message}`);
  }
});

console.log("\n" + "=".repeat(60));
console.log("📊 Summary:");
console.log("=".repeat(60));
console.log(`✅ Successfully updated: ${successCount} files`);
console.log(`❌ Failed: ${failCount} files`);
console.log(`📁 Total processed: ${filesToModify.length} files`);

if (errors.length > 0) {
  console.log("\n❌ Errors encountered:");
  errors.forEach((err) => console.log(`  - ${err}`));
}

console.log("\n✨ Priority 2 implementation complete!");
console.log("🔍 Next step: Run build to verify changes");

process.exit(failCount > 0 ? 1 : 0);
