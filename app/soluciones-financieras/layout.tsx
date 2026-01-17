import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones Financieras | Top Finanzas MX",
  description: "Comparador de servicios y productos financieros en México.",
  alternates: {
    canonical: "https://topfinanzas.com/mx/soluciones-financieras",
    languages: {
      "es-MX": "https://topfinanzas.com/mx/soluciones-financieras",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
