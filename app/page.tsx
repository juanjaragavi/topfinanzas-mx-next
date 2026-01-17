import { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  // Inherits title/desc from layout unless overridden
  alternates: {
    canonical: "https://topfinanzas.com/mx",
    languages: {
      "es-MX": "https://topfinanzas.com/mx",
    },
  },
};

export default function Home() {
  return <HomeContent />;
}
