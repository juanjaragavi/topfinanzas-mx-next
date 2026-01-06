import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso Restringido | Top Finanzas",
  description: "Esta página no está disponible públicamente.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdministrarEnrutadorPage() {
  // Redirect to home page since this is an admin/internal route
  redirect("/");
}
