import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // TODO: Fetch metadata based on params.slug
  return {
    title: `Soluciones Financieras - ${slug} | Top Finanzas MX`,
    description:
      "Encuentra las mejores soluciones financieras adaptadas a tus necesidades en México.",
  };
}

export default async function FinancialSolutionsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // This is a template that will eventually be populated by the injected content based on params.slug
  // For now, it mirrors the structure of the 118-118-money-credit-card template

  return (
    <main
      className="bg-white min-h-screen flex flex-col"
      data-category="soluciones-financieras"
      data-slug={slug}
    >
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Dynamic Title Placeholder */}
            <h1 className="text-3xl text-left sm:text-left md:text-4xl font-bold text-gray-800 mb-8 leading-8 capitalize">
              {slug.replace(/-/g, " ")}
            </h1>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left text-lg text-gray-800 font-medium mb-8 leading-5">
                [Content for {slug} will be injected here. This is the dynamic
                template container.]
              </p>

              <div id="square02" data-topads data-topads-size="square"></div>

              <hr className="my-8" />

              <div className="text-left my-8">
                {/* Example CTA */}
                <Button className="bg-[#ec2028] hover:bg-red-800 text-white font-medium text-md py-2 px-8 rounded-full w-full">
                  Solicitar Información
                </Button>
              </div>

              <div className="my-8 text-left sm:text-left">
                {/* Placeholder Image - In real implementation, this would be dynamic */}
                <div className="bg-gray-200 w-full h-64 rounded-sm flex items-center justify-center text-gray-500">
                  Featured Image Placeholder
                </div>
              </div>

              <div className="my-6">
                <p className="text-left text-gray-800 mb-4 text-md leading-5 font-light">
                  Contenido dinámico para la entrada: {slug}.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
                  <p className="text-sm text-gray-700">
                    <strong>Nota:</strong> Este contenido es informativo y está
                    en proceso de migración.
                  </p>
                </div>
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
