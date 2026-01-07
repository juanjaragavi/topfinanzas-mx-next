import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para solicitar un préstamo con Prestadero | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo en Prestadero, una plataforma P2P con tasas competitivas y proceso 100% online.",
};

// Custom Lime Arrow Icon Component (Matches #a2bd42 approx to lime-600/500)
function LimeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-lime-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" className="fill-lime-600" />
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

export default function RequisitosPrestamosPrestaderoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-prestadero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo con Prestadero
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Obtener un préstamo personal en México puede ser una excelente
              solución para resolver imprevistos financieros, consolidar deudas
              o realizar una inversión importante.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              En este sentido, Prestadero se presenta como una plataforma
              confiable y accesible que permite solicitar préstamos personales
              con condiciones competitivas. A continuación, te detallamos los
              requisitos y los pasos necesarios para solicitar un préstamo con
              Prestadero.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-lime-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 1 (Featured) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/prestadero-1-2-1-1.webp"
                alt="Banner Prestadero"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Que es Prestadero */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Prestadero?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Prestadero es una plataforma mexicana de préstamos entre
              particulares (peer-to-peer), que conecta directamente a los
              solicitantes de préstamos con inversionistas. Esta modalidad
              permite obtener mejores condiciones de financiamiento en
              comparación con instituciones tradicionales, y a los
              inversionistas les ofrece una opción atractiva para hacer crecer
              su dinero.
            </p>

            {/* Image 2 (Call to Action 1) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Prestamo"
            />

            {/* Requisitos Generales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos generales para solicitar un préstamo
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Antes de solicitar un préstamo en Prestadero, es fundamental que
              verifiques si cumples con los siguientes requisitos generales:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  El solicitante debe tener al menos 18 años y ser residente
                  mexicano.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con un historial crediticio:
                  </strong>{" "}
                  Prestadero realiza una revisión exhaustiva del{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  de los solicitantes para evaluar su capacidad de pago. No es
                  necesario tener un historial impecable, pero es fundamental
                  contar con un nivel aceptable de cumplimiento con créditos
                  anteriores.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos comprobables:
                  </strong>{" "}
                  Uno de los requisitos más importantes es tener ingresos
                  estables y comprobables. Esto se puede demostrar a través de
                  recibos de nómina o estados de cuenta bancarios que acrediten
                  la capacidad de pago del solicitante.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes presentar una copia de tu identificación oficial, ya sea
                  INE o pasaporte, como parte del proceso de solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es necesario entregar un comprobante de domicilio reciente (no
                  mayor a tres meses), como un recibo de luz, agua, teléfono o
                  cualquier otro servicio.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  El proceso de solicitud de préstamo se realiza completamente
                  en línea. Deberás ingresar a la plataforma de Prestadero,
                  registrarte y llenar un formulario con tus datos personales y
                  financieros.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Capacidad de pago:</strong>{" "}
                  Prestadero se asegura de que los solicitantes tengan la
                  capacidad financiera para cumplir con los pagos mensuales.
                  Este aspecto se evalúa con base en los ingresos y el nivel de
                  endeudamiento actual del solicitante.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 3 (Call to Action 3) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Requisitos Prestadero"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-lime-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso para solicitar un préstamo en Prestadero es sencillo y
              rápido, siempre que cumplas con los requisitos mencionados. Aquí
              te explicamos cada paso detalladamente:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en la plataforma:
                  </strong>{" "}
                  El primer paso para solicitar un préstamo es registrarte en la
                  plataforma de Prestadero. Esto implica crear una cuenta
                  proporcionando tu información personal básica, como nombre,
                  correo electrónico y número de teléfono.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Llenado del formulario:
                  </strong>{" "}
                  Una vez registrado, deberás llenar un formulario en línea con
                  detalles sobre tus ingresos, egresos,{" "}
                  <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                    deudas
                  </Link>{" "}
                  actuales y el monto del préstamo que deseas solicitar. Es
                  importante ser lo más preciso posible para que la evaluación
                  sea rápida y efectiva.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Verificación del historial crediticio:
                  </strong>{" "}
                  Prestadero revisará tu historial crediticio para determinar tu
                  elegibilidad para el préstamo. Este proceso es esencial, ya
                  que le da confianza a los inversionistas sobre la capacidad de
                  pago del solicitante.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Oferta de préstamo:</strong>{" "}
                  Si cumples con los requisitos, Prestadero te ofrecerá un monto
                  y una tasa de interés basados en tu perfil financiero. Esta
                  oferta se ajusta a tu capacidad de pago y se te presentarán
                  los términos y condiciones del préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aceptación de la oferta:
                  </strong>{" "}
                  Si estás de acuerdo con los términos del préstamo, podrás
                  aceptarlo y proceder a la firma del contrato en línea.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Desembolso del préstamo:
                  </strong>{" "}
                  Una vez que el contrato esté firmado, el dinero se depositará
                  directamente en tu cuenta bancaria. El tiempo de procesamiento
                  puede variar, pero generalmente toma unos pocos días.
                </span>
              </li>
            </ul>

            {/* Image 4 (Call to Action 2) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Proceso Solicitud"
            />

            {/* Aspectos a tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Aspectos a tener en cuenta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Además de ofrecer un proceso 100% en línea y accesible, solicitar
              un préstamo con Prestadero tiene varios beneficios que lo
              distinguen de otras instituciones financieras:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasas competitivas:</strong>{" "}
                  Al ser una plataforma de préstamos entre personas, Prestadero
                  puede ofrecer tasas de interés más bajas que los bancos
                  tradicionales, lo que representa un ahorro significativo para
                  los solicitantes.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en los montos:
                  </strong>{" "}
                  Los préstamos en Prestadero pueden ir desde $10,000 hasta
                  $300,000 pesos, lo que permite cubrir una amplia gama de
                  necesidades financieras.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos cómodos:</strong>{" "}
                  Prestadero ofrece plazos de pago flexibles, que van desde los
                  12 hasta los 36 meses, adaptándose a las posibilidades de cada
                  solicitante.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia en el proceso:
                  </strong>{" "}
                  Uno de los pilares de Prestadero es la transparencia. Desde el
                  inicio, los solicitantes conocen las tasas de interés, plazos
                  y montos a pagar sin cargos ocultos ni sorpresas.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin penalización por pagos anticipados:
                  </strong>{" "}
                  A diferencia de muchas instituciones financieras, Prestadero
                  no cobra penalizaciones si decides adelantar pagos o liquidar
                  el préstamo antes del plazo pactado.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-lime-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Image 5 (Call to Action 4) */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Beneficios Prestadero"
            />

            {/* Ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Esta opción es ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar un préstamo con Prestadero es una opción segura,
              transparente y accesible para quienes buscan financiamiento en
              México. Cumpliendo con los requisitos y siguiendo el proceso
              sencillo, podrás acceder a montos significativos con tasas de
              interés competitivas y plazos flexibles, todo desde la comodidad
              de tu hogar. Si necesitas un préstamo, considera a Prestadero como
              una alternativa confiable para lograr tus metas financieras.
            </p>

            <div className="mt-8 pt-8 border-t">
              <Link
                href="https://prestadero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-white hover:bg-lime-700 h-10 px-4 py-2 w-full md:w-auto"
              >
                Ver en sitio oficial
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
