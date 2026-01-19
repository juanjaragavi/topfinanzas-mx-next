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
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu",
    },
  },
  title:
    "Requisitos de la tarjeta de crédito Santander LikeU | Top Finanzas MX",
  description:
    "Conoce los requisitos, costos y beneficios de la tarjeta de crédito Santander LikeU. Una opción socialmente responsable y personalizable.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#dc2626" />
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

export default function RequisitosTarjetaLikeUSantanderPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-santander-likeu"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito Santander LikeU
            </h1>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-likeu-de-santander"
                className="text-red-600 hover:underline"
              >
                Volver al análisis de Tarjeta LikeU Santander
              </Link>
            </div>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si buscas más que beneficios económicos en una tarjeta de crédito,
              LikeU de Santander ofrece ventajas tangibles tanto en el ámbito
              financiero como en el social.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-3-1.webp"
                alt="LikeU de Santander"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito LikeU de Santander no es solo un instrumento
              financiero; es una expresión de responsabilidad social y
              compromiso con el desarrollo sostenible. Especialmente diseñada
              para aquellos que buscan no solo gestionar eficazmente sus
              finanzas personales, sino también hacer una diferencia positiva en
              la sociedad, LikeU se destaca como una opción ideal en el mercado
              de tarjetas de crédito.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Tarjetas de crédito sin anualidad
              </Link>
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Requisitos para solicitar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar la tarjeta LikeU:
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para calificar para la Tarjeta LikeU, los solicitantes deben
              cumplir con varios criterios básicos que aseguran su capacidad
              para manejar este producto financiero de manera responsable:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad y residencia:</strong>{" "}
                  Es necesario tener entre 20 y 69 años y residir
                  permanentemente en México. Esto garantiza que los titulares de
                  la tarjeta posean la madurez y la estabilidad requeridas para
                  compromisos financieros serios.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingreso mínimo:</strong> Se
                  requiere un ingreso mensual de al menos $7,500 MXN,
                  permitiendo que personas de diversos niveles económicos
                  accedan a esta tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Documentación requerida:
                  </strong>{" "}
                  Los solicitantes deben presentar una identificación oficial
                  vigente, un comprobante de domicilio reciente (no mayor a dos
                  meses) y los últimos tres comprobantes de ingresos. Estos
                  documentos son esenciales para verificar la identidad y la
                  solvencia económica del solicitante.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
                className="text-blue-600 hover:underline"
              >
                Tarjetas de crédito para estudiantes
              </Link>
            </p>

            {/* Standard ActionBanner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud:
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso para solicitar la tarjeta es directo pero meticuloso,
              garantizando que todos los potenciales titulares cumplan con los
              estándares de Santander:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Debes llenar y firmar la solicitud de la tarjeta,
                  seleccionando específicamente la opción LikeU.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  La verificación del cumplimiento de los requisitos y la
                  revisión de la documentación promueven un proceso de
                  aprobación transparente y equitativo.
                </span>
              </li>
            </ul>

            {/* Costos y tasas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Costos y tasas:
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                      CAT
                    </Link>{" "}
                    Promedio:
                  </strong>{" "}
                  90.9% sin IVA, reflejando el costo anual total del crédito.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasa de Interés:</strong> Se
                  aplica una tasa de interés promedio ponderada por saldo del
                  66.48% anual.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Qué es el CAT en tarjetas de crédito?
              </Link>
            </p>

            {/* Standard ActionBanner 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            {/* ¿Para quién es la Tarjeta LikeU? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es la Tarjeta LikeU?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Santander LikeU está especialmente diseñada
              para:
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Personas socialmente conscientes:
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Si deseas que tus gastos diarios contribuyan a causas benéficas,
              LikeU te permite hacer exactamente eso. Cada compra se transforma
              en un acto de apoyo continuo a diversas iniciativas sociales.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Standard ActionBanner 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Profesionales con estabilidad financiera:
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Con requisitos de ingreso accesibles y una amplia gama de
              beneficios, LikeU es ideal para quienes están forjando su camino
              profesional o aquellos que ya disfrutan de una solidez financiera
              y buscan una tarjeta que complemente su estilo de vida activo.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales"
                className="text-blue-600 hover:underline"
              >
                ¿Qué es un crédito hipotecario?
              </Link>
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Usuarios frecuentes de tarjetas:
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Para aquellos que maximizan los{" "}
              <Link href="/soluciones-financieras/cashback">cashbacks</Link> y
              valoran las protecciones en sus compras diarias, LikeU ofrece un
              conjunto atractivo de recompensas y seguridades que enriquecen
              cada transacción.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                className="text-blue-600 hover:underline"
              >
                ¿Cuál es el mejor préstamo personal?
              </Link>
            </p>

            {/* Standard ActionBanner 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />

            {/* Más que una simple tarjeta de crédito */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Más que una simple tarjeta de crédito
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Optar por LikeU de Santander significa elegir una tarjeta que
              alinea beneficios financieros con acciones de impacto social. Es
              una excelente opción para quienes no solo buscan eficiencia en sus
              gastos, sino que también están comprometidos con el apoyo a causas
              significativas. Al elegir LikeU, cada transacción no solo favorece
              tus finanzas, sino que también respalda tus principios éticos,
              haciendo de cada compra una inversión en un futuro mejor.
            </p>

            {/* Final CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.santander.com.mx/personas/tarjetas-de-credito/likeu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ec0000] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c00000] transition-colors text-lg"
              >
                Solicitar ahora
              </Link>
            </div>

            <RelatedPosts
              currentSlug="requisitos-tarjeta-de-credito-santander-likeu"
              category="soluciones-financieras"
              subCategory="creditCards"
            />
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
