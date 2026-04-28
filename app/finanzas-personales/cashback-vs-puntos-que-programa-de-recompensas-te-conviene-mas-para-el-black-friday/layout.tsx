import type React from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { createRouteStructuredData } from "@/lib/seo";

const pathname =
  "/finanzas-personales/cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday";

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
