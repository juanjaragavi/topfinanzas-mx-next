import type React from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const pathname =
  "/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante";

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
