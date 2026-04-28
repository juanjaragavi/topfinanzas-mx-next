import type React from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const pathname =
  "/finanzas-personales/5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero";

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
