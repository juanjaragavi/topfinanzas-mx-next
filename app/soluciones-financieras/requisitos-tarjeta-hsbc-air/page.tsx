import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-hsbc-air",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-hsbc-air",
    },
  },
  title: "Conoce los requisitos Tarjeta HSBC Air | Top Finanzas MX",
  description:
    "Conoce los requisitos, documentación necesaria y proceso de solicitud para obtener la Tarjeta HSBC Air. Descubre sus costos y comisiones.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#dc2626" />
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

export default function RequisitosTarjetaHSBCAirPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-hsbc-air"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Conoce los requisitos Tarjeta HSBC Air
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Air se destaca por su atractiva tasa de interés y
              su facilidad de solicitud. A continuación, te presentamos los
              principales requisitos y pasos a seguir para obtener esta tarjeta
              de crédito.
            </p>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/HSBC-Air-1.jpg"
                alt="Tarjeta HSBC Air"
                width={800}
                height={450}
                className="w-full h-auto rounded-sm shadow-lg"
                priority
              />
            </div>

            {/* Section 1: Requisitos básicos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Requisitos básicos para solicitar la Tarjeta HSBC Air
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Antes de solicitar la tarjeta, asegúrate de cumplir con los
              siguientes requisitos:
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. Perfil del solicitante
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta HSBC Air está dirigida a personas mayores de edad con
              ingresos mínimos de $5,000 MXN mensuales. Para ser considerado, es
              crucial contar con un{" "}
              <Link href="/soluciones-financieras/historial-crediticio">
                historial crediticio
              </Link>{" "}
              limpio, sin atrasos ni sobregiros. Este perfil asegura que los
              solicitantes sean financieramente responsables y capaces de
              manejar sus compromisos crediticios.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. Documentación necesaria
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Para procesar la solicitud de la tarjeta, es esencial contar con
              los siguientes documentos:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Si eres mexicano, puedes presentar tu credencial de elector
                  (INE) o pasaporte vigente. En el caso de extranjeros, se
                  requiere el pasaporte vigente y una copia del FM2.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Para demostrar tu capacidad de pago, es necesario presentar un
                  comprobante de ingresos, como recibos de nómina o estados de
                  cuenta. Este documento valida que tus ingresos mensuales
                  cumplen con el mínimo requerido.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Para confirmar tu lugar de residencia, se solicita un recibo
                  de servicio o cualquier otro documento que acredite tu
                  domicilio actual.
                </span>
              </li>
            </ul>

            {/* Image: Eres estudiante */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
                  className="text-blue-600 hover:underline"
                >
                  Tarjetas de crédito para estudiantes
                </Link>
              </p>
            </div>

            {/* Section 2: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Proceso de solicitud de la Tarjeta HSBC Air
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Obtener la Tarjeta HSBC Air es un proceso sencillo y flexible.
              Existen dos formas principales de realizar la solicitud:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">En sucursal:</strong> Puedes
                  acudir directamente a cualquier sucursal de HSBC, donde serás
                  atendido por un asesor que te guiará en el proceso de
                  solicitud. Solo necesitas llevar los documentos mencionados y,
                  en caso de cumplir con los requisitos, el proceso de
                  aprobación se iniciará.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">En línea:</strong> Si
                  prefieres evitar el desplazamiento, HSBC también ofrece la
                  opción de solicitar la tarjeta a través de su plataforma en
                  línea. Este método te permite cargar los documentos requeridos
                  de manera digital, facilitando el proceso desde la comodidad
                  de tu hogar.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              Una vez aprobada tu solicitud, recibirás la tarjeta en tu
              domicilio sin costo adicional. El tiempo estimado de entrega es de
              7 a 15 días hábiles, lo que te permite comenzar a disfrutar de sus
              beneficios en poco tiempo.
            </p>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales/cat-en-tarjetas-de-credito"
                  className="text-blue-600 hover:underline"
                >
                  ¿Cómo saber si estás en buró de crédito y qué significa?
                </Link>
              </p>
            </div>

            {/* Section 3: Costos y comisiones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Costos y comisiones de la Tarjeta HSBC Air
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Es importante conocer los costos asociados antes de solicitar
              cualquier tarjeta de crédito. A continuación, te mostramos los
              detalles de la Tarjeta HSBC Air:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Anualidad:</strong> La
                  tarjeta tiene una anualidad de $879 MXN, que puede ser pagada
                  en seis{" "}
                  <Link href="/soluciones-financieras/meses-sin-intereses">
                    mensualidades sin intereses
                  </Link>
                  . Este costo es competitivo en comparación con otras tarjetas
                  de crédito del mercado.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Tasa de interés:</strong>{" "}
                  HSBC Air ofrece una tasa de interés variable del 39.90% anual
                  para compras y disposiciones de efectivo, con un{" "}
                  <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                    CAT
                  </Link>{" "}
                  (Costo Anual Total) promedio de 44.9%. Esta tasa es atractiva,
                  especialmente si se considera que permite financiar compras de
                  manera accesible.
                </span>
              </li>
            </ul>

            {/* Image: Entiende el CAT */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales/cat-en-tarjetas-de-credito"
                  className="text-blue-600 hover:underline"
                >
                  Entiende el CAT en Tarjetas de Crédito
                </Link>
              </p>
            </div>

            {/* Section 4: Detalles a tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Detalles a tener en cuenta
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Además de sus condiciones financieras competitivas, la Tarjeta
              HSBC Air ofrece varios beneficios adicionales que la hacen
              atractiva para diferentes tipos de usuarios.
            </p>
            <div className="mb-6">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                  className="text-blue-600 hover:underline"
                >
                  Top tarjetas de neobancos
                </Link>
              </p>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Tecnología Contactless y Apple Pay:
                  </strong>{" "}
                  La tarjeta cuenta con tecnología de pagos sin contacto, lo que
                  permite realizar transacciones de manera rápida y segura.
                  También es compatible con Apple Pay, una opción conveniente
                  para aquellos que prefieren pagar con su dispositivo móvil.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Seguridad y manejo digital:
                  </strong>{" "}
                  HSBC ofrece dos aplicaciones complementarias para gestionar tu
                  tarjeta de crédito: HSBC México y HSBC Control Total. A través
                  de estas plataformas, puedes monitorear tus movimientos,
                  realizar pagos, consultar tu saldo y recibir asistencia en
                  caso de pérdida o robo de la tarjeta. Aunque puede resultar
                  inconveniente utilizar dos aplicaciones distintas, ambas están
                  diseñadas para ofrecer un manejo seguro y completo de tu
                  tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Transacciones seguras:
                  </strong>{" "}
                  Además de la tecnología sin contacto, la tarjeta HSBC Air
                  incluye protección para compras, lo que brinda mayor seguridad
                  en tus transacciones, tanto en línea como en establecimientos
                  físicos.
                </span>
              </li>
            </ul>

            {/* Image: Top tarjetas */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                  className="text-blue-600 hover:underline"
                >
                  Top tarjetas de crédito sin anualidad
                </Link>
              </p>
            </div>

            {/* Section 5: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Qué debo tener en cuenta?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La Tarjeta HSBC Air es una excelente opción para personas con
              experiencia crediticia que buscan una tarjeta con tasas de interés
              competitivas y múltiples beneficios. Su proceso de solicitud es
              sencillo, y los requisitos, aunque específicos, son accesibles
              para aquellos que cumplen con el perfil adecuado. Con la
              posibilidad de gestionar deudas de manera eficiente y disfrutar de
              tecnología moderna para pagos, la tarjeta HSBC Air se presenta
              como una solución financiera atractiva.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Si cumples con los requisitos y estás buscando una tarjeta de
              crédito que combine flexibilidad y seguridad, la HSBC Air podría
              ser la opción perfecta para ti. Para más información sobre la
              solicitud y otros beneficios, visita el sitio web oficial de HSBC
              o acude a tu sucursal más cercana.
            </p>

            {/* Final CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.hsbc.com.mx/tarjetas-de-credito/productos/air/"
                className="inline-block bg-[#db0011] text-white font-bold py-3 px-8 rounded-full hover:bg-[#b0000e] transition-colors text-lg"
              >
                Solicitar ahora
              </Link>
            </div>

            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales"
                  className="text-blue-600 hover:underline"
                >
                  5 ideas de negocio para emprendedores jóvenes
                </Link>
              </p>
            </div>

            {/* Image: Buscando el mejor préstamo */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                  className="text-blue-600 hover:underline"
                >
                  ¿Cuál es el mejor préstamo personal?
                </Link>
              </p>
            </div>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="https://www.hsbc.com.mx/tarjetas-de-credito/productos/air/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-red-700 transition-colors text-lg"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-hsbc-air"
                className="text-red-600 hover:underline"
              >
                Volver al análisis de Tarjeta HSBC Air
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-tarjeta-hsbc-air"
        category="soluciones-financieras"
        subCategory="creditCards"
      />
      <CompactFooter />
    </main>
  );
}
