import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { RelatedPosts } from "@/components/blog/related-posts";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/kueski-prestamos",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/kueski-prestamos",
    },
  },
  title: "Kueski préstamos: crédito fácil y seguro sin buró | Top Finanzas MX",
  description:
    "Kueski ofrece préstamos en línea rápidos y seguros sin necesidad de historial crediticio. Solicita desde $400 hasta $24,500 MXN con respuesta en minutos.",
};

// Blue Arrow Icon Component
function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#2563eb" />
      <path
        d="M7 10l2.5 2.5L14 8"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function KueskiPrestamosPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="kueski-prestamos"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Kueski préstamos: crédito fácil y seguro sin buró
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Featured Image */}
            <div className="mb-8 relative w-full h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://media.topfinanzas.com/images/download-7-2.webp"
                alt="Kueski préstamos"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Kueski ofrece préstamos en línea, brindando una opción flexible y
              confiable especialmente diseñada para quienes buscan inmediatez y
              facilidad de acceso.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900 font-bold">
                    Sin buró de crédito:
                  </strong>{" "}
                  Acepta solicitudes sin importar el{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  o con problemas pasados.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900 font-bold">
                    100% en línea:
                  </strong>{" "}
                  Solicita y recibe tu préstamo de manera rápida, segura y sin
                  papeleos físicos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900 font-bold">
                    Términos flexibles:
                  </strong>{" "}
                  Plazos de pago y montos adaptables a tus necesidades reales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900 font-bold">
                    Seguridad garantizada:
                  </strong>{" "}
                  Plataforma regulada por la CNBV y registrada ante la CONDUSEF.
                </span>
              </li>
            </ul>

            {/* Content Sections */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              ¿Qué es Kueski préstamos y cómo funciona?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kueski es una plataforma de préstamos personales en línea que se
              destaca por su accesibilidad. Acepta solicitudes de personas que,
              por diversas razones, no tienen un historial crediticio o han
              tenido dificultades en el pasado. Kueski no requiere que tengas un
              historial crediticio sólido, lo que la convierte en una opción
              viable para comenzar o mejorar tu historial financiero.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 marker:text-blue-600">
              <li>
                <strong className="text-gray-900">Montos disponibles:</strong>{" "}
                Desde $400 hasta $24,500 MXN.
              </li>
              <li>
                <strong className="text-gray-900">Plazos de pago:</strong> De 7
                a 99 días, según tu perfil crediticio.
              </li>
              <li>
                <strong className="text-gray-900">Proceso de solicitud:</strong>{" "}
                Completamente en línea, con respuesta en minutos.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              ¿Cuánto te puede prestar Kueski y cuáles son los costos?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La primera vez que solicitas un préstamo con Kueski, puedes
              obtener entre $400 y $2,000 MXN. Si mantienes un buen
              comportamiento de pago, podrías acceder hasta $24,500 MXN en
              futuros préstamos.
            </p>
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
              Costos a considerar
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 marker:text-blue-600">
              <li>
                <strong className="text-gray-900">
                  Tasa de interés anual máxima:
                </strong>{" "}
                435.6%.
              </li>
              <li>
                <strong className="text-gray-900">Ejemplo de préstamo:</strong>{" "}
                Por $2,000 MXN a 30 días, la tasa efectiva mensual sería del
                36.3%, pagando $679.46 MXN de interés (Total: $2,679.46 MXN).
              </li>
              <li>
                <strong className="text-gray-900">Intereses moratorios:</strong>{" "}
                En caso de retraso, pueden duplicar tu deuda. Es vital pagar a
                tiempo.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Es importante considerar que sus tasas de interés son más altas
              que los préstamos tradicionales debido al mayor riesgo que asume
              la plataforma al prestar sin historial crediticio.
            </p>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Acceso sin buró de crédito
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Uno de los mayores obstáculos para acceder a crédito es la falta
              de un historial sólido. Kueski no ve esto como un impedimento. La
              plataforma permite que personas sin historial o con puntaje
              negativo en Buró de Crédito puedan ser consideradas, brindando una
              oportunidad real para construir o sanear sus finanzas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              ¿Es Kueski confiable?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La seguridad es crucial en servicios financieros en línea. Kueski
              es una plataforma <strong>legal y segura</strong>, regulada por la
              Comisión Nacional Bancaria y de Valores (CNBV) y registrada ante
              la CONDUSEF.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A diferencia de plataformas con prácticas abusivas, Kueski
              mantiene una buena reputación y alta calificación en atención al
              cliente según el Buró de Entidades Financieras.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              ¿Te conviene solicitar un préstamo con Kueski?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Es una excelente opción para emergencias o si no tienes acceso a
              banca tradicional. Sin embargo, debido a las tasas, no se
              recomienda para financiamientos a largo plazo o grandes
              inversiones.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 marker:text-blue-600">
              <li>
                <strong className="text-gray-900">Necesidad urgente:</strong>{" "}
                Ideal para gastos imprevistos rápidos.
              </li>
              <li>
                <strong className="text-gray-900">Costo del crédito:</strong>{" "}
                Evalúa tu capacidad de pago frente a los intereses.
              </li>
              <li>
                <strong className="text-gray-900">Alternativas:</strong> Busca
                bancos tradicionales si requieres plazos largos.
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                ¿Listo para solicitar tu préstamo?
              </h2>
              <p className="text-blue-800 mb-6">
                Kueski es accesible y seguro. Si decides que es la mejor
                alternativa para ti, conoce los requisitos detallados y comienza
                tu solicitud hoy mismo.
              </p>
              <Link
                href="/soluciones-financieras/requisitos-prestamos-personales-kueski"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Related Posts */}
            <RelatedPosts
              currentSlug="kueski-prestamos"
              category="soluciones-financieras"
              subCategory="loans"
            />

            {/* Disclaimer */}
            <div className="mt-12 border-t pt-8">
              <AIContentDisclaimer />
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
