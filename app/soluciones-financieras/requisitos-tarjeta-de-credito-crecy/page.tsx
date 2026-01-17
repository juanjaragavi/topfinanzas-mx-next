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
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-crecy",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjeta-de-credito-crecy",
    },
  },
  title:
    "Requisitos para solicitar la tarjeta de crédito Crecy | Top Finanzas MX",
  description:
    "Conoce los requisitos, ventajas y cómo solicitar la tarjeta de crédito Crecy, una opción flexible y sin anualidad.",
};

// Purple Arrow Icon Component
function PurpleArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-purple-900 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#581c87" />
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

export default function RequisitosTarjetaCrecyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-crecy"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta de crédito Crecy
            </h1>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-crecy"
                className="text-purple-900 hover:underline"
              >
                Volver al análisis de Tarjeta de Crédito Crecy
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
              La tarjeta de crédito Crecy ha sido diseñada para ofrecer
              soluciones financieras a personas que buscan acceso a crédito de
              manera ágil y confiable.
            </p>

            {/* Image 1 */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download.webp"
                alt="Tarjeta de Crédito Crecy"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si te encuentras en busca de una tarjeta que te ofrezca
              flexibilidad y beneficios, es importante que conozcas los
              requisitos que necesitas cumplir para poder solicitarla. A
              continuación, te detallamos cada uno de los requisitos necesarios
              para poder aplicar.
            </p>

            {/* Link 1 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </div>

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los requisitos de la tarjeta de crédito Crecy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Al igual que otras tarjetas de crédito, Crecy establece ciertos
              requisitos básicos para garantizar que los solicitantes tengan la
              capacidad de cumplir con los pagos y mantener un historial
              crediticio saludable. A continuación, te presentamos los
              principales requisitos:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de edad:</strong>{" "}
                  El primer y más importante requisito es ser mayor de 18 años.
                  Crecy requiere que los solicitantes sean mayores de edad, dado
                  que solo las personas con capacidad legal pueden adquirir
                  compromisos financieros como una tarjeta de crédito.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingreso mínimo mensual:
                  </strong>{" "}
                  Crecy pide a los solicitantes tener un ingreso mensual mínimo
                  de $7,000 MXN. Este requisito garantiza que los usuarios
                  puedan cumplir con los pagos mínimos mensuales y utilizar la
                  tarjeta de manera responsable.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                      Historial crediticio
                    </Link>
                    :
                  </strong>{" "}
                  Aunque no es necesario tener un historial crediticio amplio,
                  Crecy toma en cuenta tu comportamiento financiero anterior
                  para determinar tu capacidad de pago. Si ya has tenido una
                  tarjeta de crédito o algún otro producto financiero, es
                  importante que tu historial sea positivo. En caso de no tener
                  historial, Crecy puede otorgarte una oportunidad, pero
                  evaluará otros aspectos de tu perfil.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes presentar una identificación oficial vigente, ya sea tu
                  INE o pasaporte, para verificar tu identidad. Esto es un paso
                  necesario para cumplir con los protocolos de seguridad y
                  evitar fraudes.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Se te pedirá un comprobante de domicilio no mayor a tres
                  meses. Pueden aceptar facturas de servicios como luz, agua,
                  teléfono o gas. Este documento sirve para validar que tienes
                  una residencia fija.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  También es necesario que proporciones un comprobante de
                  ingresos, como recibos de nómina o declaraciones de impuestos,
                  para demostrar que cumples con el ingreso mínimo requerido por
                  Crecy.
                </span>
              </li>
            </ul>

            {/* Link 2 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </div>

            {/* CTA Banner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Conoce más
              </Link>
            </div>

            {/* Cómo solicitar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar la tarjeta de crédito Crecy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso para solicitar la tarjeta de crédito Crecy es rápido y
              sencillo. Puedes hacerlo completamente en línea y seguir estos
              pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accede a la página web oficial de Crecy:
                  </strong>{" "}
                  Ingresa a la página oficial de Crecy desde cualquier
                  dispositivo con conexión a internet. Encontrarás toda la
                  información relacionada con los productos financieros que
                  ofrecen, incluida la tarjeta de crédito.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Rellena el formulario de solicitud:
                  </strong>{" "}
                  Crecy cuenta con un formulario de solicitud digital. En este
                  formulario te pedirán algunos datos personales, como tu
                  nombre, edad, domicilio y comprobantes de ingresos. Asegúrate
                  de llenar todos los campos correctamente para evitar errores o
                  retrasos en el proceso.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la validación de tus datos:
                  </strong>{" "}
                  Una vez enviado el formulario, Crecy procederá a validar la
                  información que has proporcionado. Este proceso puede tardar
                  unos días, pero generalmente es rápido si tus datos cumplen
                  con los requisitos establecidos.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recibe tu tarjeta en casa:
                  </strong>{" "}
                  Tras la aprobación de tu solicitud, recibirás tu tarjeta de
                  crédito Crecy en el domicilio que proporcionaste en el
                  formulario. Esta llegará junto con las instrucciones para
                  activarla y empezar a utilizarla.
                </span>
              </li>
            </ul>

            {/* CTA Banner 2 */}
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

            {/* Link 3 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </div>

            {/* Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de la tarjeta de crédito Crecy
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Crecy no solo es fácil de solicitar, sino
              que también ofrece una serie de beneficios que la hacen atractiva
              para muchos usuarios. Algunos de estos beneficios son:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad">
                      Sin anualidad
                    </Link>
                    :
                  </strong>{" "}
                  Crecy ofrece la posibilidad de disfrutar de una tarjeta de
                  crédito sin preocuparte por el pago de una anualidad, lo que
                  te permite ahorrar dinero en cargos adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de recompensas:
                  </strong>{" "}
                  Puedes acumular puntos por cada compra que realices, los
                  cuales puedes canjear por productos o servicios en tiendas
                  afiliadas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Control de gastos:</strong>{" "}
                  La plataforma digital de Crecy te permite monitorear en tiempo
                  real tus movimientos, pagos y saldos, facilitando el control
                  de tus finanzas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aceptación internacional:
                  </strong>{" "}
                  La tarjeta es aceptada en miles de establecimientos a nivel
                  nacional e internacional, por lo que puedes utilizarla en
                  viajes o compras en el extranjero.
                </span>
              </li>
            </ul>

            {/* CTA Banner 3 */}
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

            {/* Preguntas frecuentes */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si no cumples con todos los requisitos, como el ingreso mínimo o
              tener un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              sólido, es posible que tu solicitud sea rechazada. Sin embargo,
              Crecy entiende que no todos los usuarios tienen las mismas
              circunstancias financieras, por lo que también ofrece productos
              alternativos que podrían adaptarse mejor a tu perfil. En este
              caso, te recomendamos revisar las otras opciones que la empresa
              tiene disponibles, ya que podrían ser una solución más adecuada
              para ti.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              En cuanto al tiempo de entrega, una vez que tu solicitud ha sido
              aprobada, recibirás tu tarjeta de crédito Crecy en tu domicilio en
              un plazo aproximado de 7 a 10 días hábiles. Este plazo puede
              variar dependiendo de la región en la que te encuentres, pero
              Crecy se esfuerza por asegurar que la tarjeta llegue lo más rápido
              posible para que puedas comenzar a disfrutar de sus beneficios.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si en algún momento decides que ya no necesitas o no deseas
              utilizar tu tarjeta de crédito Crecy, el proceso para cancelarla
              es bastante sencillo. Solo necesitas contactar al servicio al
              cliente de Crecy para solicitar la cancelación. Es importante que
              antes de realizar este trámite, te asegures de no tener ningún
              saldo pendiente en tu cuenta, ya que la tarjeta debe estar
              completamente liquidada para proceder con la cancelación.
            </p>

            {/* Link 4 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </div>

            {/* CTA Banner 4 */}
            <div className="relative w-full h-32 md:h-48 my-8 rounded-sm overflow-hidden shadow-lg">
              <Link href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                  alt="Buscando el mejor préstamo personal"
                  fill
                  className="object-cover"
                />
              </Link>
            </div>
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
              ¿Es tarjeta de crédito Crecy para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Crecy es una excelente opción para quienes
              buscan una tarjeta flexible, sin anualidad y con beneficios
              atractivos. Cumplir con los requisitos mencionados te permitirá
              acceder a esta herramienta financiera que, bien utilizada, puede
              brindarte comodidad y apoyo en tus gastos diarios.
            </p>

            {/* Final Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.crecy.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900 hover:bg-purple-950 text-white font-bold py-4 px-8 rounded-full transition-colors text-xl"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <RelatedPosts
              currentSlug="requisitos-tarjeta-de-credito-crecy"
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
