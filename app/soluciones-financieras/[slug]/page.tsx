import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: "Página no encontrada - TopFinanzas.com",
    description: "La página solicitada no existe.",
  };
}

export default async function FinancialSolutionsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Catch-all route for unhandled slugs should return 404
  notFound();
}
