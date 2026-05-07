import type React from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import { logger } from "@/lib/logger";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import GoogleAds, {
  GoogleAdsNoScript,
} from "@/components/analytics/google-ads";
import GoogleAdManager from "@/components/analytics/gam";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmLinkInjector from "@/components/analytics/utm-link-injector";
import UtmMonitor from "@/components/analytics/utm-monitor";
import AdZep from "@/components/analytics/adzep";
import AdZepTest from "@/components/analytics/adzep-test";
import AdZepSPABridge from "@/components/analytics/adzep-spa-bridge";
import AdZepInterstitialBlocker from "@/components/analytics/adzep-interstitial-blocker";
import AdZepAccessibilityFix from "@/components/analytics/adzep-accessibility-fix";
import AdZepBackdropCleaner from "@/components/analytics/adzep-backdrop-cleaner";
import AnalyticsValidationPanel from "@/components/analytics/validation-panel";
import ResourceHints from "@/components/resource-hints";
import NavigationProvider from "@/components/providers/navigation-provider";
import { MobileMenuProvider } from "@/components/providers/mobile-menu-context";
import SiteWrapper from "@/components/layout/site-wrapper";
import { JsonLd } from "@/components/seo/json-ld";
{
  /*import PreloaderProvider from "@/components/providers/preloader-provider";*/
}
import ClientOnly from "@/components/ClientOnly";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  SEO_SITE,
} from "@/lib/seo";

// Use local font to avoid external requests during build
// This improves build time and eliminates network dependency
// preload: false prevents browser warnings about unused preloaded fonts
const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-poppins",
  preload: false, // Disable preloading to prevent "unused preload" warnings
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Define base URL for metadata
const baseUrl = SEO_SITE.baseUrl;

// Temporarily disable AdZep script to isolate TopAds testing
const ENABLE_ADZEP = false;

// Read critical CSS at build time to inline it
let criticalCSS = "";
try {
  // Read the critical CSS file
  criticalCSS = fs.readFileSync(
    path.join(process.cwd(), "app/critical.css"),
    "utf8",
  );
} catch (e) {
  logger.error("Failed to read critical CSS", e);
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: SEO_SITE.titleTemplate,
    default: SEO_SITE.defaultTitle,
  },
  description: SEO_SITE.description,
  keywords:
    "tarjetas de crédito méxico, préstamos personales, comparar tarjetas, educación financiera, Top Finanzas México", // Updated keywords
  // Removed generator tag

  // Added Open Graph Metadata
  openGraph: {
    title: SEO_SITE.defaultTitle,
    description: SEO_SITE.description,
    url: baseUrl,
    siteName: SEO_SITE.name,
    images: [
      {
        url: SEO_SITE.defaultImage,
        width: 1200,
        height: 630,
        alt: "Top Finanzas MX - Guía Financiera", // Updated Alt Text
      },
    ],
    locale: SEO_SITE.locale,
    type: "website",
  },

  // Added Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: SEO_SITE.defaultTitle,
    description: SEO_SITE.description,
    // siteId: "[Optional Twitter ID]",
    // creator: "[Optional Twitter Handle]",
    // creatorId: "[Optional Twitter ID]",
    images: [SEO_SITE.defaultImage],
  },

  // Use CDN URLs for icons to avoid basePath issues
  icons: {
    icon: "https://media.topfinanzas.com/images/favicon.png",
    apple: "https://media.topfinanzas.com/images/favicon.png",
  },
  // Explicitly include basePath since Next.js metadata doesn't auto-prepend it
  manifest: "/mx/api/webmanifest",
  alternates: {
    canonical: baseUrl,
    languages: {
      "es-MX": baseUrl,
      "en-US": "https://us.topfinanzas.com",
      "en-GB": "https://uk.topfinanzas.com",
    },
  },
  authors: [{ name: SEO_SITE.name, url: baseUrl }],
  creator: SEO_SITE.name,
  publisher: SEO_SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-mx">
      <head>
        <link
          rel="preload"
          as="script"
          href="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <script async src="https://scr.actview.net/topfinanza.js"></script>
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        {/* Preconnect to Analytics Domains for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect to media domain to establish early connection */}
        <link
          rel="preconnect"
          href="https://media.topfinanzas.com"
          crossOrigin="anonymous"
        />

        <JsonLd
          data={[generateOrganizationSchema(), generateWebSiteSchema()]}
        />

        <ClientOnly>
          <GoogleTagManager />
          <GoogleAds />
          <GoogleAdManager />
          {ENABLE_ADZEP && <AdZep />}
        </ClientOnly>

        <ResourceHints />

        {/* Use CDN URLs for icons to avoid basePath issues */}
        <link
          rel="icon"
          href="https://media.topfinanzas.com/images/favicon.png"
          type="image/png"
        />
        <link
          rel="icon"
          href="https://media.topfinanzas.com/images/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="https://media.topfinanzas.com/images/favicon.png"
          type="image/png"
        />
        {/* Manifest is served via metadata.manifest using API route */}
      </head>
      <body className={`${poppins.variable} font-sans text-left sm:text-left`}>
        <GoogleTagManagerNoScript />
        <GoogleAdsNoScript />
        <MobileMenuProvider>
          {/*<PreloaderProvider
            defaultConfig={{
              duration: 4000,
              primaryColor: "#1e40af",
              secondaryColor: "#3b82f6",
              backgroundColor: "#ffffff",
              showLogo: true,
              showProgress: true,
            }}
            showOnNavigation={true}
          >*/}
          <NavigationProvider>
            <SiteWrapper>
              <Suspense fallback={null}>
                <UtmPersister />
                <UtmLinkInjector />
                {ENABLE_ADZEP && <AdZepSPABridge />}
                {ENABLE_ADZEP && <AdZepInterstitialBlocker />}
                <AdZepAccessibilityFix />{" "}
                {/* Always run - Google Ads vignette also sets aria-hidden on body */}
                {ENABLE_ADZEP && <AdZepBackdropCleaner />}
                {process.env.NODE_ENV === "development" && <UtmMonitor />}
                {process.env.NODE_ENV === "development" && ENABLE_ADZEP && (
                  <AdZepTest />
                )}
                {process.env.NODE_ENV === "development" && (
                  <AnalyticsValidationPanel />
                )}
              </Suspense>
              {children}
            </SiteWrapper>
          </NavigationProvider>
          {/*</PreloaderProvider>*/}
        </MobileMenuProvider>
      </body>
    </html>
  );
}
