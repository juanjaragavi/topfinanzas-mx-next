import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Finanzas Personales | Top Finanzas MX",
  description: "Artículos, guías y consejos sobre finanzas en México.",
  alternates: {
    canonical: "https://topfinanzas.com/mx/blog",
    languages: {
      "es-MX": "https://topfinanzas.com/mx/blog",
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
