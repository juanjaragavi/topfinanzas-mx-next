import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar la RappiCard | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la RappiCard, una tarjeta sin anualidad y con cashback. Descubre cómo obtenerla y sus beneficios.",
};

// Black Arrow Icon Component
function BlackArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-black mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#000000" />
      <path
        d="M10 17L15 12L10 7"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RequisitosRappiCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-rappicard"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requisitos para solicitar la RappiCard
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Text */}
            <p className="text-lg text-gray-700 mb-6">
              La RappiCard se ha posicionado como una de las opciones más
              atractivas en el mercado financiero mexicano.
            </p>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/rappicard-1.jpg"
                alt="Tarjeta de Crédito RappiCard"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-10">
              Con su propuesta sin anualidad y beneficios como cashback, es una
              herramienta ideal para quienes buscan facilidad y recompensas en
              sus transacciones diarias. En este artículo, te explicaremos
              detalladamente los requisitos y pasos necesarios para obtener esta
              tarjeta de crédito.
            </p>

            {/* Section 1: ¿Cuáles son los requisitos...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Cuáles son los requisitos para solicitar la RappiCard?
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Para solicitar la RappiCard, es importante que cumplas con los
              siguientes requisitos:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Edad y nacionalidad:
                  </strong>{" "}
                  Ser mayor de 18 años, contar con una identificación oficial
                  vigente (INE/IFE o pasaporte) y ser residente en México.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Tener un buen historial crediticio. Si ya cuentas con otros
                  productos financieros, asegúrate de que están al día y si eres
                  nuevo en el mundo crediticio, podrías ser considerado para su
                  versión básica, pero dependerá de una evaluación interna.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobación de Ingresos:
                  </strong>{" "}
                  Presentar comprobantes de ingresos, como: Recibos de nómina,
                  declaraciones fiscales (si eres independiente) y estados de
                  cuenta bancarios. Aunque no se especifica un ingreso mínimo,
                  contar con un ingreso regular puede incrementar tus
                  posibilidades de aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Dispositivos electrónicos:
                  </strong>{" "}
                  Tener un teléfono inteligente compatible con la aplicación de
                  Rappi, ya que todo el proceso se realiza de manera digital.
                </span>
              </li>
            </ul>

            {/* Image: Eres estudiante */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="¿Eres estudiante?"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                  className="text-blue-600 hover:underline"
                >
                  5 ideas de negocio para emprendedores jóvenes
                </Link>
              </p>
            </div>

            {/* Section 2: Documentos necesarios */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Documentos necesarios
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Para completar tu solicitud, necesitarás los siguientes
              documentos:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  INE o IFE y pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Recibo de agua, luz, teléfono o estado de cuenta bancario con
                  una antigüedad no mayor a 3 meses.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de Ingresos:
                  </strong>{" "}
                  Cualquier documento que avale tu capacidad de pago, como:
                  Recibos de nómina, declaraciones fiscales y estados de cuenta.
                </span>
              </li>
            </ul>

            {/* Image: Entiende el CAT */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Entiende el CAT en Tarjetas de Crédito"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                  className="text-blue-600 hover:underline"
                >
                  ¿Cómo saber si estás en buró de crédito y qué significa?
                </Link>
              </p>
            </div>

            {/* Section 3: ¿Cómo es el proceso...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Cómo es el proceso para solicitar la RappiCard?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              El proceso para obtener la RappiCard es 100% en línea y sumamente
              sencillo. A continuación, te guiamos paso a paso:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Descarga la aplicación de Rappi:
                  </strong>{" "}
                  Disponible en Google Play y App Store.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Crea o inicia sesión:
                  </strong>{" "}
                  Si ya tienes una cuenta en Rappi, utiliza tus credenciales
                  para iniciar sesión. De lo contrario, regístrate con tus datos
                  personales.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Accede a la sección de servicios financieros:
                  </strong>{" "}
                  Dentro de la app, busca la opción "RappiCard" en el menú de
                  servicios.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Llena el Formulario de Solicitud:
                  </strong>{" "}
                  Completa los campos requeridos con tu información personal,
                  datos de contacto y detalles laborales.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Sube tus documentos:
                  </strong>{" "}
                  Adjunta las copias digitales de los documentos mencionados
                  anteriormente.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Espera la evaluación de tu solicitud:
                  </strong>{" "}
                  El proceso de evaluación puede tomar algunos días. Recibirás
                  una notificación a través de la app o por correo electrónico.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Recibe tu tarjeta:</strong>{" "}
                  Una vez aprobada, recibirás tu RappiCard directamente en tu
                  domicilio en un plazo aproximado de 5 a 10 días hábiles.
                </span>
              </li>
            </ul>

            {/* Image: Top tarjetas */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Top tarjetas de crédito sin anualidad"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>¿Conoce más:</strong>{" "}
                <Link
                  href="/mx/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                  className="text-blue-600 hover:underline"
                >
                  Top tarjetas de neobancos
                </Link>
              </p>
            </div>

            {/* Section 4: ¿Qué es lo atractivo...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Qué es lo atractivo de la RappiCard?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Solicitar la RappiCard no solo es sencillo, sino que también te
              ofrece ventajas atractivas, como:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  Disfruta de los beneficios sin cargos adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Cashback:</strong> Obtén
                  recompensas en cada compra que realices.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Control desde la app:
                  </strong>{" "}
                  Administra tus gastos, realiza pagos y consulta tu estado de
                  cuenta desde la aplicación.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Aceptación internacional:
                  </strong>{" "}
                  Utilízala en miles de comercios a nivel global.
                </span>
              </li>
            </ul>

            {/* Image: Buscando el mejor préstamo */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="¿Buscando el mejor préstamo personal?"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Section 5: ¿Es la RappiCard para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Es la RappiCard para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Antes de solicitar tu RappiCard, ten en cuenta las siguientes
              recomendaciones:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Revisa tu historial crediticio:
                  </strong>{" "}
                  Asegúrate de estar al corriente con tus compromisos
                  financieros para mejorar tus posibilidades de aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Ten tus documentos a la mano:
                  </strong>{" "}
                  Esto facilitará el proceso de solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Conoce los términos y condiciones:
                  </strong>{" "}
                  Lee detenidamente los detalles sobre tasas de interés, límites
                  de crédito y beneficios.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Con estos pasos claros y los documentos necesarios, estarás listo
              para obtener tu RappiCard y disfrutar de sus beneficios. Si estás
              buscando una tarjeta de crédito que combine practicidad y
              recompensas, la RappiCard es una opción que vale la pena
              considerar.
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="https://rappicard.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white text-center font-bold py-4 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg"
              >
                Ver en sitio oficial
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
