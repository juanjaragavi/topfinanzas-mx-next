import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos de la tarjeta de crédito Volaris INVEX | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la Tarjeta de Crédito Volaris INVEX y descubre si es la opción ideal para tus viajes.",
};

// Blue Arrow Icon Component
function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#1e40af" />
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

export default function RequisitosTarjetaVolarisInvex0Page() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-volaris-invex-0"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito Volaris INVEX
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar la Tarjeta de Crédito Volaris INVEX, es necesario
              cumplir con ciertos requisitos básicos. Estos requisitos son
              similares a los de otras tarjetas de crédito, pero con algunas
              particularidades que deberás considerar si deseas disfrutar de los
              beneficios de esta tarjeta enfocada en viajes.
            </p>

            {/* Image 1 */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/Volaris-INVEX-0-1-1.jpg"
                alt="Tarjeta de Crédito Volaris INVEX"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Requisitos Generales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos generales
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de edad:</strong>{" "}
                  Debes tener al menos 18 años para poder solicitar esta
                  tarjeta. En algunos casos, dependiendo de tu situación
                  crediticia y de ingresos, podrías requerir un aval si eres
                  menor de 21 años.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos mínimos:
                  </strong>{" "}
                  Es fundamental contar con un ingreso mensual mínimo. Aunque
                  Invex no establece públicamente una cifra específica, se
                  recomienda contar con un ingreso de al menos $10,000 MXN
                  mensuales para incrementar tus posibilidades de aprobación.
                  Este ingreso se puede comprobar mediante: Recibos de nómina,
                  declaración anual de impuestos y estados de cuenta bancarios.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Tu{" "}
                  <Link href="/soluciones-financieras/historial-crediticio">
                    historial crediticio
                  </Link>{" "}
                  será uno de los factores determinantes para la aprobación de
                  esta tarjeta. Es recomendable tener un puntaje crediticio
                  saludable y no presentar atrasos en pagos de créditos previos.
                  Invex verificará tu historial a través de buró de crédito.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Tarjeta Volaris INVEX"
            />

            {/* Documentación Requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Al momento de solicitar la Tarjeta de Crédito Volaris INVEX,
              deberás presentar los siguientes documentos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Este documento es necesario para verificar tu identidad. Las
                  identificaciones aceptadas incluyen: INE/IFE y pasaporte
                  mexicano.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Debes proporcionar un documento que demuestre tu lugar de
                  residencia actual. El comprobante de domicilio puede ser:
                  Recibo de luz, agua, o teléfono fijo y estado de cuenta
                  bancario (debe tener menos de tres meses de antigüedad).
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Como mencionamos anteriormente, deberás presentar
                  documentación que acredite tu nivel de ingresos. Este
                  comprobante es fundamental para evaluar tu capacidad de pago y
                  será revisado con detalle por Invex.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Documentación Tarjeta Volaris INVEX"
            />

            {/* Atractivo de la tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué tiene de atractivo la tarjeta de crédito Volaris INVEX?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de cumplir con los requisitos para obtener la tarjeta, es
              importante que conozcas algunos de los beneficios más atractivos
              que esta tarjeta ofrece, especialmente si eres un viajero
              frecuente de Volaris.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Con cada compra que realices con la tarjeta, acumulas{" "}
                  <Link href="/soluciones-financieras/puntos">puntos</Link> que
                  puedes canjear por boletos de avión, upgrades en tus vuelos o
                  servicios adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas en Volaris:
                  </strong>{" "}
                  Obtendrás acceso prioritario a promociones de Volaris, lo que
                  te permitirá disfrutar de descuentos en vuelos y paquetes
                  especiales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonos de bienvenida:
                  </strong>{" "}
                  Al solicitar y ser aprobado para la Tarjeta de Crédito Volaris
                  INVEX, podrás acceder a bonos de bienvenida, como puntos
                  adicionales o descuentos en tu primer vuelo con Volaris.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Pagos a meses sin intereses:
                  </strong>{" "}
                  Esta tarjeta te permite realizar pagos en{" "}
                  <Link href="/soluciones-financieras/meses-sin-intereses">
                    meses sin intereses
                  </Link>{" "}
                  en compras selectas, tanto en Volaris como en otros
                  establecimientos afiliados.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad">
                      Sin anualidad
                    </Link>{" "}
                    de por vida:
                  </strong>{" "}
                  solo deberás usar tu Tarjeta de Crédito una vez al mes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                      CAT
                    </Link>
                    :
                  </strong>{" "}
                  23.8% sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de interés promedio ponderada por saldo en términos
                    anuales:
                  </strong>{" "}
                  32.3%
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Image 4 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Beneficios Volaris INVEX"
            />

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso para solicitar la Tarjeta de Crédito Volaris INVEX es
              bastante sencillo y se puede hacer tanto de manera física como en
              línea. A continuación, te explicamos los pasos principales.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Para mayor comodidad, puedes completar tu solicitud
                  directamente en la página web de INVEX. Solo necesitas seguir
                  estos pasos: Primero, visita la página web de INVEX o Volaris.
                  Segundo, llena el formulario de solicitud, proporcionando tus
                  datos personales, información financiera y contacto y tercero,
                  adjunta la documentación solicitada (identificación oficial,
                  comprobante de domicilio y comprobante de ingresos). Una vez
                  enviada tu solicitud, el equipo de INVEX revisará la
                  información y, en un plazo máximo de 10 días hábiles,
                  recibirás una respuesta sobre la aprobación de tu tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud física:</strong>{" "}
                  Si prefieres un trato más personalizado, puedes acudir a una
                  sucursal de INVEX o Volaris para realizar tu solicitud de
                  manera presencial. El asesor te guiará a lo largo del proceso
                  y te indicará qué documentos debes llevar.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-4">
              Tiempos de respuesta y entrega de la tarjeta
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Después de enviar tu solicitud, INVEX evaluará tu perfil
              crediticio y la documentación proporcionada. Este proceso puede
              tardar entre 7 y 10 días hábiles. Si tu solicitud es aprobada,
              recibirás tu tarjeta física en tu domicilio en un plazo de hasta
              15 días hábiles adicionales.
            </p>

            {/* Image 5 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Proceso de solicitud"
            />

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Volaris INVEX para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Obtener la Tarjeta de Crédito Volaris INVEX es una excelente
              opción si disfrutas de viajar con frecuencia y quieres aprovechar
              al máximo los beneficios que Volaris e INVEX te ofrecen. Sin
              embargo, es crucial que revises cuidadosamente los términos y
              condiciones de esta tarjeta, incluyendo las tasas de interés y
              comisiones asociadas, para asegurarte de que se adapta a tus
              necesidades financieras.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Recuerda que, como en cualquier tarjeta de crédito, la clave está
              en utilizarla de manera responsable. Cumple con los pagos a
              tiempo, evita endeudarte más allá de tus capacidades, y podrás
              disfrutar de las ventajas de esta tarjeta sin preocupaciones.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si estás listo para dar el siguiente paso, revisa los requisitos,
              completa tu solicitud, y comienza a disfrutar de los beneficios
              que te ofrece la Tarjeta de Crédito Volaris INVEX.
            </p>

            {/* Final CTA */}
            <Link
              href="https://appmovil.invextarjetas.com.mx/solicitud-digital/1tVtEzPApmSHuJ7tW-I4lg/6iSidJkoCb3FYZQ0JoP6rA/ORG_V0_CON_SEO_VOLARIS0-MC_PND"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
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
