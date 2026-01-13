import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  title: "Requisitos de la tarjeta de crédito HSBC Viva | Top Finanzas MX",
  description:
    "Conoce los requisitos de la tarjeta de crédito HSBC Viva, sus beneficios en viajes y cómo solicitarla fácilmente.",
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

export default function RequisitosTarjetaHSBCVivaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-hsbc-viva"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito HSBC Viva
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              quienes buscan beneficios en compras diarias, entretenimiento y
              descuentos en viajes. Descubre todos sus beneficios en nuestro{" "}
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-hsbc-viva"
                className="text-blue-600 hover:underline"
              >
                análisis detallado
              </Link>
              .
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              A continuación, te presentamos los requisitos clave que debes
              cumplir para obtenerla, así como los pasos para solicitarla,
              basados en el formato de contenido claro y estructurado de
              TopFinanzas.
            </p>

            {/* Image 1 */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-7-1.webp"
                alt="Tarjeta de Crédito HSBC VIVA"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Link 1 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </div>

            {/* Requisitos generales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos generales
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para poder solicitar la tarjeta de crédito HSBC Viva, necesitas
              cumplir con los siguientes requisitos básicos:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad mínima:</strong> Debes
                  tener al menos 18 años para ser elegible para esta tarjeta. Si
                  eres menor de 21 años y no tienes historial crediticio, es
                  posible que te pidan un comprobante adicional, como un aval.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  Es fundamental contar con un ingreso mensual mínimo. Para la
                  Tarjeta HSBC Viva, el banco solicita que tengas ingresos
                  comprobables por al menos $5,000 MXN al mes. Este monto puede
                  variar ligeramente según promociones o condiciones especiales
                  del banco.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen{" "}
                    <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                      historial crediticio
                    </Link>
                    :
                  </strong>{" "}
                  Tener un buen historial crediticio es uno de los aspectos más
                  importantes al momento de solicitar una tarjeta de crédito.
                  HSBC verificará tu historial a través del buró de crédito para
                  asegurarse de que no tengas deudas pendientes o
                  incumplimientos. Un puntaje crediticio saludable mejora tus
                  posibilidades de aprobación.
                </span>
              </li>
            </ul>

            {/* Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Al momento de solicitar la tarjeta de crédito HSBC Viva, deberás
              presentar ciertos documentos que permitirán al banco verificar tu
              identidad y capacidad de pago. Estos documentos incluyen:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Es necesario presentar una identificación oficial como:
                  INE/IFE, pasaporte y cédula profesional.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Se te solicitará un documento que demuestre tu lugar de
                  residencia. Los comprobantes aceptados incluyen: Recibo de
                  luz, agua o teléfono (con una antigüedad menor a tres meses) y
                  estado de cuenta bancaria.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Es necesario presentar documentación que acredite tus
                  ingresos, tales como: Recibos de nómina, declaración anual de
                  impuestos y estados de cuenta bancarios.
                </span>
              </li>
            </ul>

            {/* CTA Banner 1 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Ver ahora
              </Link>
            </div>

            {/* Link 2 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </div>

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso para obtener la tarjeta de crédito HSBC Viva es rápido
              y sencillo. Puedes iniciar tu solicitud de dos maneras: en línea o
              acudiendo a una sucursal.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Si prefieres la comodidad de solicitar tu tarjeta desde casa,
                  puedes hacerlo en el portal web de HSBC. Sigue estos pasos:
                  Primero, Accede al sitio web de HSBC y selecciona la opción
                  para solicitar la tarjeta de crédito Viva. Segundo, llena el
                  formulario en línea proporcionando tus datos personales y
                  financieros. Tercero, sube la documentación requerida en
                  formato digital y cuarto, espera la respuesta: HSBC evaluará
                  tu solicitud y te dará una respuesta en un máximo de 10 días
                  hábiles.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud en sucursal:
                  </strong>{" "}
                  Si prefieres hacer tu solicitud en persona, puedes acudir a
                  cualquiera de las sucursales de HSBC con los documentos
                  necesarios. Un asesor te guiará a través del proceso y
                  resolverá cualquier duda que tengas sobre la tarjeta.
                </span>
              </li>
            </ul>

            {/* Atractivos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los atractivos de la tarjeta de crédito HSBC Viva?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de cumplir con los requisitos para obtener la tarjeta, es
              importante que conozcas algunos de los beneficios que esta tarjeta
              te ofrece:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/sacale-jugo-a-tu-tarjeta-de-credito-con-cashback">
                      Cashback
                    </Link>{" "}
                    en compras:
                  </strong>{" "}
                  Uno de los principales beneficios de la HSBC Viva es su
                  programa de cashback, que te permite ganar un porcentaje de
                  tus compras diarias, especialmente en categorías como
                  entretenimiento y viajes. Dependiendo de las promociones
                  vigentes, podrías obtener un porcentaje de reembolso en
                  efectivo sobre tus compras.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descuentos en viajes:
                  </strong>{" "}
                  HSBC Viva ofrece descuentos exclusivos en boletos de avión y
                  paquetes vacacionales en ciertas agencias de viajes afiliadas,
                  además de promociones de meses sin intereses en compras
                  relacionadas con entretenimiento y turismo.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de recompensas:
                  </strong>{" "}
                  La tarjeta cuenta con un programa de puntos que puedes
                  acumular por cada compra que realices. Estos puntos se pueden
                  canjear por productos, servicios o descuentos especiales en
                  comercios participantes.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Otro gran beneficio de la HSBC Viva es la posibilidad de
                  realizar pagos a meses sin intereses en una amplia red de
                  establecimientos participantes, lo cual puede ser útil para
                  compras de mayor valor, como electrónicos o viajes.
                </span>
              </li>
            </ul>

            {/* CTA Banner 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Ver ahora
              </Link>
            </div>

            {/* Tiempos de respuesta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tiempos de respuesta y entrega
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Después de enviar tu solicitud, HSBC evaluará tu perfil crediticio
              y la documentación que proporcionaste. Este proceso puede tomar
              hasta 10 días hábiles, y una vez aprobada, recibirás tu tarjeta en
              un plazo de 15 días hábiles en la dirección que proporcionaste.
            </p>

            {/* Link 3 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </div>

            {/* CTA Banner 3 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Buscando el mejor préstamo personal"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/prestamos"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Descubre más
              </Link>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito HSBC Viva para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito HSBC Viva es una excelente opción para
              aquellos que buscan maximizar sus beneficios en entretenimiento,
              viajes y compras diarias. Sin embargo, es importante usarla de
              manera responsable, asegurándote de cumplir con los pagos
              mensuales a tiempo para evitar cargos por intereses adicionales y
              mantener un buen historial crediticio.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás interesado en obtener la tarjeta, asegúrate de cumplir
              con los requisitos, revisa los términos y condiciones, y comienza
              a disfrutar de los beneficios que HSBC te ofrece.
            </p>

            {/* Final Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.hsbc.com.mx/tarjetas-de-credito/productos/viva/"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-xl"
              >
                Solicitar ahora
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-tarjeta-de-credito-hsbc-viva"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
