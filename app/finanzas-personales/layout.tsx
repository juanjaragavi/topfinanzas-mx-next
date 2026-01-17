import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finanzas Personales en México | Top Finanzas MX",
  description:
    "Guías expertas para mejorar tu economía personal, tarjetas de crédito y préstamos.",
  alternates: {
    canonical: "https://topfinanzas.com/mx/finanzas-personales",
    languages: {
      "es-MX": "https://topfinanzas.com/mx/finanzas-personales",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
