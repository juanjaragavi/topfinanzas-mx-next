import type { Metadata } from "next";

// Metadata specifically for the /soluciones-financieras landing page
export const metadata: Metadata = {
  title: "Soluciones Financieras: Tarjetas y Préstamos | TopFinanzas MX",
  description:
    "Explora guías completas y comparativas de las mejores tarjetas de crédito y préstamos personales en México. Encuentra requisitos, beneficios y solicita la solución financiera adecuada.",
  keywords:
    "soluciones financieras México, tarjetas de crédito México, préstamos personales México, comparar tarjetas, comparar préstamos, BBVA, Citibanamex, HSBC, Santander, Nu, mejores finanzas México",
  openGraph: {
    title: "Soluciones Financieras: Tarjetas y Préstamos | TopFinanzas MX",
    description:
      "Tu guía de las mejores tarjetas de crédito y préstamos personales disponibles en México. Compara opciones y encuentra la mejor para ti.",
    images: [
      {
        // Using a relevant UK product image
        url: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
        width: 1200, // Adjust if necessary
        height: 630, // Adjust if necessary
        alt: "Soluciones Financieras de TopFinanzas MX",
      },
    ],
    type: "website",
    url: "https://topfinanzas.com/mx/soluciones-financieras", // Assuming this is the correct URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones Financieras: Tarjetas y Préstamos | TopFinanzas MX",
    description:
      "Tu guía de las mejores tarjetas de crédito y préstamos personales disponibles en México. Compara opciones y encuentra la mejor para ti.",
    images: [
      "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
    ],
  },
};
