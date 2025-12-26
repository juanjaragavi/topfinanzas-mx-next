"use client";

import { useEffect } from "react";
import Script from "next/script";
import { logger } from "@/lib/logger";

/**
 * TopAds Integration Component
 *
 * Loads the TopAds advertising script with proper configuration.
 * This component should be included in the root layout.
 *
 * @see /lib/documents/config.js for configuration options
 */
export default function TopAds() {
  useEffect(() => {
    // Mark when TopAds component mounts
    if (typeof window !== "undefined" && window.performance) {
      window.performance.mark("topads-mount");
      logger.info("[TopAds] Component mounted");
    }
  }, []);

  return (
    <>
      {/* Load TopAds configuration script */}
      <Script
        id="topads-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.topAds = window.topAds || {};

            topAds.config = {
              domain: "TOPFIN_MX",
              networkCode: "23062212598",
              lazyLoad: "soft",
              pageSetting: {
                exclude: [
                  "/terminos-y-condiciones-de-uso",
                  "/politica-privacidad",
                  "/politica-de-cookies",
                  "/nosotros",
                  "/contactanos",
                  "/campana-quiz",
                  "/quiz",
                ],
              },
              formats: {
                interstitial: {
                  status: "active",
                  exclude: ["/recomendador-de-tarjetas-de-credito-p3"],
                },
                offerwall: {
                  status: "active",
                  logoUrl: "https://media.topfinanzas.com/images/logo200px.png",
                  websiteName: "TopFinanzas MX",
                  cooldown: "12",
                  exclude: [
                    "/recomendador-de-tarjetas-de-credito-p2",
                    "/recomendador-de-tarjetas-de-credito-p3",
                  ],
                },
              },
            };

            (function () {
              var w = window.top,
                d = w.document,
                h = d.head || d.getElementsByTagName("head")[0];
              var s = d.createElement("script");
              s.src = "https://topads.topnetworks.co/topAds.min.js";
              s.type = "text/javascript";
              s.defer = true;
              s.async = true;
              s.setAttribute("data-cfasync", "false");
              h.appendChild(s);
            })();
          `,
        }}
        onLoad={() => {
          logger.info("[TopAds] Configuration loaded");
        }}
        onError={(e) => {
          logger.error("[TopAds] Configuration load error:", e);
        }}
      />
    </>
  );
}
