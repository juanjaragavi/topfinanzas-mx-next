import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { ActionBanner } from "@/components/ui/action-banner";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-credilikeme",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-credilikeme",
    },
  },
  title:
    "Requisitos para solicitar un préstamo en Credilikeme | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo en Credilikeme, una opción accesible para quienes necesitan dinero rápido, incluso sin historial crediticio.",
};

// Custom Indigo Arrow Icon Component (Matches #605dec -> indigo-500)
function IndigoArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-indigo-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" className="fill-indigo-500" />
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

export default function RequisitosPrestamosCredilikemePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-credilikeme"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo en Credilikeme
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Credilikeme es una opción accesible para quienes necesitan un
              préstamo personal rápido, especialmente aquellos con un historial
              crediticio negativo o sin historial.
            </p>

            {/* Image 1 (Featured) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/banner-credilikeme2.webp"
                alt="Banner Credilikeme"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Requisitos Con Credilikeme */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo con Credilikeme
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para poder acceder a un préstamo a través de Credilikeme, es
              necesario cumplir con ciertos requisitos básicos que garantizan
              que eres elegible para este tipo de financiamiento. Estos son:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Debes tener
                  entre 21 y 59 años para ser elegible.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Es obligatorio contar con una credencial de elector (INE) o
                  cualquier identificación oficial vigente.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nacionalidad:</strong> Debes
                  ser mexicano o mexicana.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta bancaria propia:
                  </strong>{" "}
                  Necesitas tener una cuenta bancaria a tu nombre, ya que es
                  allí donde se depositará el préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Correo electrónico:</strong>{" "}
                  Un correo electrónico válido es necesario para recibir
                  información y actualizaciones sobre tu préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Aunque Credilikeme acepta solicitudes de personas con mal{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  o sin historial, se requiere que tengas alguna experiencia
                  previa usando crédito.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Standard ActionBanner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />

            {/* Proceso de Solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de Solicitud del Préstamo
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso para solicitar un préstamo en Credilikeme es sencillo y
              completamente digital, lo que facilita el acceso al crédito desde
              cualquier lugar y en cualquier momento. Aquí te explicamos cómo
              hacerlo:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en la plataforma:
                  </strong>{" "}
                  Ingresa al sitio web oficial de Credilikeme y completa el
                  formulario de solicitud. Deberás proporcionar información
                  básica como tu nombre completo, dirección de correo
                  electrónico, y detalles de tu cuenta bancaria.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Verificación de identidad:
                  </strong>{" "}
                  Una vez que envíes tu solicitud, recibirás una llamada
                  telefónica para verificar tu identidad y validar la
                  información proporcionada. Este paso es crucial para
                  garantizar que los datos sean correctos y que realmente eres
                  tú quien está solicitando el préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descarga de la aplicación:
                  </strong>{" "}
                  Si tu solicitud es preaprobada, deberás descargar la
                  aplicación móvil de Credilikeme e ingresar con tu ID para
                  firmar el contrato de préstamo. La app también te permitirá
                  gestionar tu préstamo, revisar tu saldo, realizar pagos, y
                  acceder a los beneficios del programa de recompensas.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y desembolso:
                  </strong>{" "}
                  Tras la validación de tu información, recibirás una
                  notificación sobre la aprobación final de tu préstamo. Si es
                  aprobado, el dinero será depositado en tu cuenta bancaria el
                  mismo día, lo que te permite acceder rápidamente a los fondos
                  que necesitas.
                </span>
              </li>
            </ul>

            {/* Standard ActionBanner 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            {/* Tasas de interés */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés, costos y plazos de pago
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Es fundamental que, al solicitar un préstamo, tengas claridad
              sobre los costos asociados y los plazos de pago disponibles.
              Credilikeme ofrece varias opciones, pero es importante que estés
              informado para evitar sorpresas.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisión por apertura:
                  </strong>{" "}
                  Cada vez que solicitas un préstamo con Credilikeme, se te
                  cobrará una comisión por apertura de $150 MXN más IVA. Este
                  costo se suma al monto total que deberás pagar.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasa de interés:</strong> La
                  tasa de interés varía según tu historial con Credilikeme. Para
                  nuevos usuarios, la tasa puede ser tan alta como 456% anual,
                  pero si cumples con tus pagos puntualmente, en futuros
                  préstamos podrías acceder a tasas mucho más bajas, incluso
                  hasta 72% anual.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos de pago:</strong>{" "}
                  Para tu primer préstamo, los plazos de pago varían entre 1 y 4
                  quincenas. Sin embargo, conforme construyes un buen historial
                  con Credilikeme, los plazos pueden extenderse hasta 14
                  quincenas en préstamos posteriores. Esto te ofrece la
                  flexibilidad necesaria para ajustar los pagos a tu capacidad
                  financiera.
                </span>
              </li>
            </ul>

            {/* Standard ActionBanner 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            {/* Ideal para quien */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal un préstamo de Credilikeme?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Credilikeme es una solución financiera ideal para personas que:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tienen un mal historial crediticio o carecen de uno:
                  </strong>{" "}
                  Si las instituciones financieras tradicionales te han
                  rechazado, Credilikeme te brinda una oportunidad de acceder a
                  financiamiento.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Necesitan dinero rápido:
                  </strong>{" "}
                  El proceso digital y el desembolso rápido hacen de Credilikeme
                  una opción viable para emergencias financieras.
                </span>
              </li>
              <li className="flex items-start">
                <IndigoArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Están dispuestas a mejorar su historial:
                  </strong>{" "}
                  Si cumples puntualmente con tus pagos, puedes mejorar tu
                  reputación crediticia, lo que te permitirá acceder a mejores
                  condiciones de préstamo en el futuro.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-indigo-500 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Standard ActionBanner 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />

            {/* Es para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Credilikeme para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar un préstamo con Credilikeme es un proceso accesible y
              rápido, ideal para quienes necesitan financiamiento inmediato y no
              tienen acceso a opciones tradicionales debido a un historial
              crediticio desfavorable. Sin embargo, es crucial comprender los
              costos asociados, como la comisión por apertura y las tasas de
              interés, para asegurarte de que puedes manejar los pagos sin
              problemas.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y planeas tus pagos de manera
              responsable, Credilikeme puede ser una herramienta financiera útil
              para superar situaciones económicas difíciles y mejorar tu perfil
              crediticio con el tiempo.
            </p>

            <div className="mt-8 pt-8 border-t">
              <Link
                href="https://www.credilike.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-500 text-white hover:bg-indigo-600 h-10 px-4 py-2 w-full md:w-auto"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-personales-credilikeme"
                className="text-indigo-500 hover:underline"
              >
                Volver al análisis de Préstamos Personales Credilikeme
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-credilikeme"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
