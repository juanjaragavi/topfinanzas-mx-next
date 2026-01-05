import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moneyman: tu préstamo ideal | Top Finanzas MX",
  description:
    "La solución rápida y sin complicaciones que necesitas para acceder a fondos de manera inmediata con Moneyman.",
};

// Lime Arrow Icon Component
function LimeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-lime-500 mt-1 mr-3 flex-shrink-0"
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

export default function MoneymanPrestamosGuiaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="moneyman-prestamos-guia"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Moneyman: tu préstamo ideal
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La solución rápida y sin complicaciones que necesitas para acceder a
              fondos de manera inmediata.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Proceso 100% digital:</strong>{" "}
                  Recibe el dinero sin salir de casa.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Acceso inmediato:</strong>{" "}
                  Dinero en tu cuenta en minutos.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Primer préstamo sin intereses:
                  </strong>{" "}
                  Hasta 4,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Pagos Flexibles:</strong>{" "}
                  Plazos que se ajustan a tus necesidades.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-moneyman-prestamos"
              className="block w-full"
            >
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/moneyman-1-1.jpg"
                alt="Moneyman Préstamos"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: ¿Por qué elegir? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir el préstamo personal de Moneyman?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Optar por un préstamo de Moneyman significa acceder a
              financiamiento de manera eficiente y transparente. Este servicio se
              destaca por su proceso de solicitud simplificado y rápida
              respuesta, lo que lo hace ideal para situaciones de urgencia
              financiera o cuando necesitas liquidez inmediata sin las demoras
              de la banca tradicional.
            </p>

            {/* Section: Acceso rápido */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Acceso rápido y pagos flexibles:
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Moneyman te ofrece la capacidad de acceder a tu dinero en minutos
              tras la aprobación, lo cual es esencial para situaciones urgentes.
              Puedes elegir el plazo de pago que mejor se adapte a tus
              necesidades financieras, proporcionando una flexibilidad
              considerable para manejar tus deudas de manera efectiva.
            </p>

            {/* Section: Características destacadas */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Características destacadas de los préstamos Moneyman:
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Moneyman ofrece una experiencia libre de las complicaciones
              habituales de las entidades bancarias tradicionales,
              proporcionando un servicio que es tanto rápido como transparente.
              Aquí te explicamos lo que necesitas saber sobre los términos y
              condiciones:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia en las tasas de interés:
                  </strong>{" "}
                  No habrá sorpresas durante el período del préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en los términos del préstamo:
                  </strong>{" "}
                  Permite a los clientes adaptar los plazos y montos según sus
                  necesidades específicas.
                </span>
              </li>
            </ul>

            <div className="w-full my-8">
              <Link
                href="/soluciones-financieras/requisitos-moneyman-prestamos"
                className="block w-full"
              >
                <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                  Conocer los requisitos
                </button>
              </Link>
            </div>

            {/* Section: Proceso simplificado */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Proceso simplificado para obtener tu préstamo:
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso es extremadamente ágil. Solo necesitas acceder a la
              plataforma de Moneyman, completar tu solicitud en línea, y una vez
              aprobada, recibirás el dinero directamente en tu cuenta bancaria.
              Este método elimina la necesidad de visitar sucursales bancarias y
              esperar largas horas para la aprobación de tu préstamo.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accede a la plataforma en línea:
                  </strong>{" "}
                  Elige la cantidad y el plazo que mejor se adapte a tus
                  necesidades.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Verificación rápida:</strong>{" "}
                  El sistema de Moneyman verifica tu información de manera
                  eficiente para asegurar una respuesta rápida.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recepción de fondos:
                  </strong>{" "}
                  Los fondos se depositan directamente en tu cuenta bancaria
                  poco después de la aprobación.
                </span>
              </li>
            </ul>

            {/* Section: Pros y contras */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              Pros y contras de Moneyman:
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Al considerar Moneyman como tu proveedor de préstamos personales,
              es importante comprender tanto las ventajas como los posibles
              desafíos asociados con su servicio. A continuación, detallamos los
              principales beneficios y limitaciones para ayudarte a tomar una
              decisión informada sobre si esta opción se adapta a tus
              necesidades financieras.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-lime-500 mb-4">Pros:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <LimeArrowIcon />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">
                        Acceso rápido a fondos:
                      </strong>{" "}
                      Ideal para emergencias cuando necesitas liquidez
                      inmediata.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <LimeArrowIcon />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">
                        Sin garantías requeridas:
                      </strong>{" "}
                      Accesible para una mayor variedad de solicitantes, incluso
                      sin garantías ni avales.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <LimeArrowIcon />
                    <span className="text-gray-700">
                      <strong className="text-gray-900">
                        Servicio continuo:
                      </strong>{" "}
                      Solicita fondos en cualquier momento gracias a su
                      plataforma disponible 24/7.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-500 mb-4">
                  Contras:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <circle cx="10" cy="10" r="10" fill="currentColor" />
                      <line
                        x1="5"
                        y1="10"
                        x2="15"
                        y2="10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">
                        Altos costos por mora:
                      </strong>{" "}
                      Las penalizaciones y costos por retraso pueden ser
                      significativos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <circle cx="10" cy="10" r="10" fill="currentColor" />
                      <line
                        x1="5"
                        y1="10"
                        x2="15"
                        y2="10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">
                        Limitaciones de servicio:
                      </strong>{" "}
                      Verifica la disponibilidad de Moneyman en tu región antes
                      de aplicar.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: ¿Cómo solicitar? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cómo solicitar un préstamo con Moneyman?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Para iniciar tu solicitud con Moneyman, simplemente visita su
              página web, completa el formulario de solicitud y sigue los pasos
              para verificar tu identidad y proporcionar la información
              financiera necesaria. El proceso es rápido, fácil y completamente
              digital, permitiéndote obtener los fondos que necesitas sin
              demoras.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-moneyman-prestamos"
              className="block w-full mb-12"
            >
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
