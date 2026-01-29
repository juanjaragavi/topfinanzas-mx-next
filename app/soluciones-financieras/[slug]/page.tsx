import { notFound } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Página no encontrada - TopFinanzas.com",
    description: "La página solicitada no existe.",
  };
}

export default async function FinancialSolutionsDynamicPage() {
  // Catch-all route for unhandled slugs should return 404
  notFound();
}
