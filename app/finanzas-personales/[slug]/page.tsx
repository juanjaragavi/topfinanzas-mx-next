import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Finanzas Personales - ${slug} | Top Finanzas MX`,
    description:
      "Consejos y guías para mejorar tus finanzas personales en México.",
  };
}

export default async function PersonalFinanceDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // This is a template that will eventually be populated by the injected content based on params.slug
  // For now, it mirrors the structure of the automate-your-wealth template

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="finanzas-personales"
        data-slug={slug}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8 capitalize">
              {slug.replace(/-/g, " ")}
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                [Content for {slug} will be injected here. This is the dynamic
                template container.]
              </p>

              <div className="my-8 text-left sm:text-left">
                <div className="bg-gray-200 w-full h-64 rounded-sm flex items-center justify-center text-gray-500">
                  Featured Image Placeholder
                </div>
              </div>

              <section className="my-6">
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Contenido dinámico para el artículo de finanzas personales:{" "}
                  {slug}.
                </p>
              </section>

              <div id="square02" data-topads data-topads-size="square"></div>

              <div className="mt-8 p-6 bg-gray-50 rounded-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ¿Listo para mejorar tus finanzas?
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Explora más consejos financieros adaptados a ti.
                </p>
                <Link
                  href="/finanzas-personales"
                  className="cta-button-blue inline-block text-center"
                >
                  Ver más consejos
                </Link>
              </div>

              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>
      <CompactFooter />
    </main>
  );
}
