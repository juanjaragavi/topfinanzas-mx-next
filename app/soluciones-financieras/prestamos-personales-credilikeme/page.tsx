import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credilikeme: Préstamos rápidos y flexibles | Top Finanzas MX",
  description:
    "¿Necesitas un préstamo rápido y flexible? Credilikeme te ofrece créditos accesibles incluso sin historial. Conoce sus beneficios, montos y programa de recompensas.",
};

// Indigo Arrow Icon Component (Matches #605dec / indigo-500)
function IndigoArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
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

export default function CredilikemePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-personales-credilikeme"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Credilikeme: Préstamos rápidos y flexibles
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              ¿Necesitas un préstamo rápido y accesible, incluso si tu historial crediticio no
              es ideal? Credilikeme es la solución que necesitas.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesibilidad:</strong>{" "}
                  Préstamos incluso con mal historial crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos escalables:</strong>{" "}
                  Paga a tiempo y accede a montos mayores.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recompensas:</strong>{" "}
                  Sube de nivel y paga menos intereses.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Flexibilidad:</strong>{" "}
                  Pausa tus pagos en situaciones complicadas.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-credilikeme"
              className="block w-full"
            >
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/banner-credilikeme.jpg"
                alt="Banner Credilikeme"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: ¿Qué es Credilikeme? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Credilikeme?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Credilikeme es una plataforma tecnológica mexicana que ofrece préstamos
              personales de manera totalmente digital. Fundada en 2011, opera como una Sociedad
              Financiera de Objeto Múltiple (Sofom) y está debidamente registrada ante la Comisión
              Nacional Bancaria y de Valores (CNBV) y la Condusef. Esto garantiza que
              Credilikeme sea una opción legal y regulada para aquellos que necesitan acceder a
              financiamiento, especialmente quienes tienen un historial crediticio negativo o carecen
              de uno.
            </p>

            {/* Section: Préstamos accesibles */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Préstamos accesibles
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las principales características de Credilikeme es su accesibilidad. La
              plataforma está diseñada para ofrecer préstamos a personas que, debido a un
              historial crediticio desfavorable, encuentran dificultades para obtener financiamiento
              en instituciones tradicionales.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Monto del préstamo:</strong>{" "}
                  Si es la primera vez que solicitas un préstamo con Credilikeme, puedes acceder a
                  montos que varían entre $1,000 y $1,500 MXN. A medida que construyes un
                  historial positivo con la empresa, puedes solicitar montos mayores, llegando hasta los
                  $12,000 MXN en futuros préstamos.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos de pago:</strong>{" "}
                  En el primer préstamo, los plazos de pago son relativamente cortos, entre 1 y 4
                  quincenas. Sin embargo, si pagas puntualmente, en tus siguientes préstamos
                  podrás elegir plazos más amplios, de hasta 14 quincenas. Esta estructura permite a
                  los usuarios acceder a mejores condiciones a medida que demuestran su capacidad de
                  pago.
                </span>
              </li>
            </ul>

            {/* Section: Tasas de interés y costos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés y costos
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Es importante tener en cuenta que los préstamos de Credilikeme tienen tasas de
              interés relativamente altas, especialmente para nuevos clientes:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasa de interés:</strong>{" "}
                  La tasa de interés para un primer préstamo puede ser tan alta como 456% anual,
                  lo que refleja el riesgo percibido por la empresa al prestar a personas con
                  historial crediticio negativo. Sin embargo, si demuestras ser un buen pagador, la
                  tasa de interés puede reducirse hasta un 72% anual en futuros préstamos.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisión por apertura:</strong>{" "}
                  Credilikeme cobra una comisión de $150 MXN más IVA por cada nuevo préstamo. Este
                  costo adicional incrementa el monto total que deberás pagar al final del plazo.
                </span>
              </li>
            </ul>

            {/* Section: Programa de recompensas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Programa de recompensas
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Credilikeme también ofrece un programa de recompensas que busca incentivar el
              buen comportamiento financiero de sus usuarios. Este programa funciona de manera
              similar a un videojuego, donde los usuarios pueden subir de nivel y acceder a
              mejores condiciones de crédito a medida que cumplen con sus pagos puntualmente:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Gemas y Credis:</strong>{" "}
                  Por cada pago puntual, los usuarios reciben "Gemas" y "Credis". Las "Gemas"
                  permiten subir de nivel, lo que a su vez ofrece acceso a mejores tasas de interés y
                  plazos más largos. Los "Credis" pueden usarse para abonar a la deuda o para
                  realizar recargas telefónicas.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Pausar pagos:</strong>{" "}
                  Una característica interesante del programa es la opción de pausar los pagos. Si
                  te encuentras en una situación financiera complicada, puedes pausar tu pago por
                  2 quincenas. Sin embargo, es importante tener en cuenta que esta opción tiene
                  un costo del 12.5% del saldo insoluto, lo que puede incrementar
                  significativamente el costo total del préstamo.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es Credilikeme la opción que necesitas? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Credilikeme la opción que necesitas?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Credilikeme es una herramienta financiera diseñada para personas que necesitan
              acceder a un crédito rápido y accesible, especialmente aquellas con un historial
              crediticio negativo o sin historial. Su estructura flexible permite a los
              usuarios construir una mejor reputación financiera a través del cumplimiento puntual
              de sus pagos, lo que a su vez abre la puerta a condiciones de crédito más
              favorables en el futuro.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Sin embargo, debido a las altas tasas de interés y las comisiones asociadas, es
              crucial que los usuarios utilicen esta plataforma con responsabilidad,
              planificando cuidadosamente sus pagos para evitar incurrir en costos adicionales.
              Credilikeme puede ser una excelente opción para quienes buscan una segunda oportunidad
              en el sistema financiero, pero siempre debe ser usado con un enfoque consciente
              y estratégico.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-credilikeme"
                className="block w-full"
              >
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
                  Quiero conocer los requisitos
                </button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
