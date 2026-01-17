import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import { RelatedPosts } from "@/components/blog/related-posts";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-klar",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-klar",
    },
  },
  title: "Requisitos de la tarjeta de Crédito Klar | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la tarjeta de crédito Klar, una opción accesible sin comisiones ocultas y con trámite 100% digital.",
};

// Amber Arrow Icon Component (Approximating #64391f -> Tailwind Amber-900)
function AmberArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-900 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#78350f" />
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

export default function RequisitosTarjetaKlarPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-klar"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de Crédito Klar
            </h1>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-klar"
                className="text-amber-900 hover:underline"
              >
                Volver al análisis de Tarjeta Klar
              </Link>
            </div>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Klar es una opción innovadora en el mercado de las tarjetas de
              crédito en México. Se destaca por su enfoque en la inclusión
              financiera, brindando a más personas la posibilidad de acceder a
              una tarjeta de crédito sin la burocracia habitual. Si deseas
              conocer más, lee nuestra{" "}
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-klar"
                className="text-blue-600 hover:underline"
              >
                reseña completa de la Tarjeta Klar
              </Link>
              .
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              A continuación, te explicamos cuáles son los requisitos y las
              principales características de esta tarjeta.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-amber-900 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 1: KLAR-1-1.webp */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/KLAR-1-1.webp"
                alt="Tarjeta de crédito Klar"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Requisitos Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los requisitos para solicitar la tarjeta de crédito
              Klar?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta de crédito Klar es un proceso simple y
              accesible. Los requisitos son mínimos en comparación con otras
              tarjetas tradicionales, lo que la convierte en una excelente
              opción para personas que buscan una alternativa sin
              complicaciones. A continuación, los requisitos básicos:
            </p>

            {/* Ad Unit: square04 (After 3rd paragraph approx) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Como en cualquier producto financiero, debes tener la mayoría
                  de edad para poder aplicar.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Necesitarás una identificación oficial vigente, como la
                  credencial para votar (INE) o tu pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Klar solicita un comprobante de domicilio que no sea mayor a
                  tres meses, como una factura de servicios o un estado de
                  cuenta bancario.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Cuenta bancaria:</strong> Es
                  necesario contar con una cuenta bancaria para recibir los
                  beneficios de Klar y poder hacer pagos.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Teléfono móvil:</strong>{" "}
                  Como Klar es una tarjeta 100% digital, es fundamental tener un
                  teléfono inteligente con acceso a internet para descargar la
                  aplicación de Klar y realizar la gestión de tu cuenta.
                </span>
              </li>
            </ul>

            {/* Image 2: CTA 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas para estudiantes"
              className="my-8"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Klar no solicita un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              previo, lo que la convierte en una excelente opción para aquellos
              que están construyendo su historial financiero o que han tenido
              dificultades para ser aprobados por otros bancos.
            </p>

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La solicitud de la tarjeta de crédito Klar se realiza
              completamente en línea. A través de la aplicación móvil, puedes
              llenar tus datos y subir los documentos solicitados en cuestión de
              minutos. La plataforma es fácil de usar, y el proceso no requiere
              largas esperas ni papeleo innecesario.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descarga la aplicación Klar:
                  </strong>{" "}
                  Lo primero que debes hacer es descargar la aplicación Klar
                  desde la tienda de aplicaciones de tu dispositivo móvil. Está
                  disponible tanto para Android como para iOS.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Crea tu cuenta:</strong> Una
                  vez descargada la aplicación, deberás crear una cuenta con tu
                  información personal.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sube los documentos:
                  </strong>{" "}
                  A través de la misma aplicación, podrás subir la
                  identificación oficial y el comprobante de domicilio. El
                  proceso es sencillo y rápido.
                </span>
              </li>
              <li className="flex items-start">
                <AmberArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  Klar analizará tu solicitud en un plazo de 24 a 48 horas. Si
                  cumples con los requisitos, recibirás la confirmación y podrás
                  empezar a utilizar tu tarjeta.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-amber-900 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3: CTA 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="CAT en tarjetas de crédito"
              className="my-8"
            />

            {/* Características */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características de la tarjeta de crédito Klar
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Klar se diferencia de otras tarjetas en el
              mercado por sus características innovadoras. A continuación, te
              presentamos algunas de las principales ventajas de esta tarjeta.
            </p>

            {/* Sin comisiones ocultas */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Sin comisiones ocultas
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Una de las mayores ventajas de la tarjeta Klar es que no cobra
              comisiones ocultas. No tendrás que preocuparte por cargos
              inesperados como anualidades, comisiones por reposición de tarjeta
              o gastos administrativos. Klar apuesta por la transparencia total.
            </p>

            {/* Control app */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Control a través de la app
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Con Klar, tienes el control absoluto de tu tarjeta a través de la
              aplicación móvil. Desde la app, puedes monitorear tus gastos en
              tiempo real, pagar tu tarjeta, y recibir notificaciones
              instantáneas sobre cada movimiento. Esta funcionalidad es ideal
              para aquellos que desean llevar un control preciso de sus
              finanzas.
            </p>

            {/* Recompensas */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Recompensas
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Klar también ofrece un programa de recompensas. Cada vez que uses
              tu tarjeta, podrás acumular puntos que luego puedes canjear por
              diferentes beneficios. Esto te permite obtener más valor por cada
              compra que realices.
            </p>

            {/* Tarjeta virtual y física */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Tarjeta virtual y física
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Klar te proporciona tanto una tarjeta virtual como una física. La
              tarjeta virtual puede ser utilizada de inmediato una vez que te
              aprueben la solicitud, lo que te permite realizar compras en línea
              sin esperar a recibir la tarjeta física.
            </p>

            {/* Image 4: CTA 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas de crédito sin anualidad"
              className="my-8"
            />

            {/* Protección */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Protección ante fraudes
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              La seguridad es una prioridad para Klar. En caso de que detectes
              un movimiento no reconocido, puedes bloquear tu tarjeta desde la
              app en cualquier momento. Además, la compañía garantiza una
              protección total ante fraudes, brindándote tranquilidad mientras
              utilizas tu tarjeta.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-amber-900 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Image 5: CTA 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Mejor préstamo personal"
              className="my-8"
            />

            {/* Opiniones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Opiniones de los usuarios
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Los usuarios de Klar destacan principalmente la facilidad del
              proceso de solicitud y la transparencia en los costos. Muchos
              aprecian que no haya comisiones ocultas y que todo el control esté
              en la palma de su mano a través de la aplicación móvil.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Además, para aquellos que tienen dificultades para obtener crédito
              con otros bancos, Klar se presenta como una opción accesible, lo
              que ha generado una respuesta positiva entre aquellos que buscan
              una alternativa sin las barreras tradicionales del crédito.
            </p>

            {/* Final Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es tarjeta de Crédito Klar para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Klar es una excelente opción para quienes
              buscan una tarjeta de crédito sin complicaciones, con un proceso
              de solicitud rápido y fácil. La transparencia en las tarifas y
              comisiones, junto con el control total desde la app, la convierten
              en una opción atractiva para aquellos que desean una herramienta
              financiera moderna y accesible.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si estás buscando una tarjeta de crédito que te brinde control y
              flexibilidad, sin los costos ocultos típicos de otras tarjetas,
              Klar podría ser la opción ideal para ti.
            </p>

            {/* Button CTA */}
            <Link
              href="https://www.klar.mx/credito"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-amber-900 hover:bg-amber-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
              </button>
            </Link>

            <RelatedPosts
              currentSlug="requisitos-tarjeta-de-credito-klar"
              category="soluciones-financieras"
              subCategory="creditCards"
            />
            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
