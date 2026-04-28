import type React from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const pathname =
  "/soluciones-financieras/requisitos-tarjeta-platinum-de-banregio";

export default function SeoRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={createRouteStructuredData(pathname)} />
      {children}
    </>
  );
}
