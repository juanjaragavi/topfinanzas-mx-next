import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar la tarjeta de crédito HSBC 2Now | Top Finanzas MX",
  description:
    "Conoce los requisitos, beneficios y proceso de solicitud de la tarjeta HSBC 2Now. Disfruta de beneficios exclusivos y sin anualidad el primer año.",
};

// Red Arrow Icon Component (Approximating #ff0903 -> Tailwind Red-600)
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

export default function RequisitosTarjetaHsbc2NowPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-hsbc-2now"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta de crédito HSBC 2Now
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito HSBC 2Now es una excelente opción para
              quienes buscan una tarjeta con beneficios flexibles y prácticos,
              ideal para realizar compras en línea, aprovechar promociones
              exclusivas y gestionar de manera sencilla sus finanzas personales.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              A continuación, te presentamos los requisitos y características
              más importantes para obtenerla, así como el proceso de solicitud
              basado en un análisis de su funcionamiento y beneficios.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-red-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 1: HSBC-2Now-1-1.webp */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/HSBC-2Now-1-1.webp"
                alt="Tarjeta de crédito HSBC 2Now"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* ¿Qué es? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito HSBC 2Now?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito HSBC 2Now es una opción diseñada para
              aquellos que desean una tarjeta de crédito flexible, con
              beneficios que se adaptan a las necesidades de los usuarios que
              buscan ahorrar y aprovechar promociones exclusivas. Esta tarjeta
              está dirigida tanto a quienes realizan compras frecuentes en línea
              como a quienes buscan acceder a descuentos y promociones
              especiales en comercios físicos.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Uno de los aspectos más atractivos de la tarjeta es que no cobra
              cuota anual durante el primer año, lo que te permite usarla sin
              preocuparte por costos adicionales. Además, el programa de
              recompensas te permite acumular puntos por cada compra que
              realices, mismos que puedes canjear por una amplia gama de
              productos, servicios o experiencias.
            </p>

            {/* Ad Unit: square04 (After ~3rd paragraph section) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Atractivos Principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los atractivos principales de la tarjeta HSBC 2Now?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Disfruta de total claridad en los costos, ya que no se aplican las
              comisiones ocultas que suelen encontrarse en otros bancos. Este
              enfoque transparente es revolucionario en un sector frecuentemente
              criticado por sus cargos inesperados.
            </p>

            {/* 1. Sin cuota anual */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              1. Sin cuota anual el primer año
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Una de las principales ventajas de la tarjeta HSBC 2Now es que no
              tiene cuota anual durante el primer año, lo que representa un
              ahorro significativo para los nuevos tarjetahabientes.
              Posteriormente, podrás evitar la cuota anual cumpliendo con
              ciertos requisitos de gasto, lo que convierte a esta tarjeta en
              una opción atractiva si deseas evitar los costos de mantenimiento
              comunes en otras tarjetas de crédito.
            </p>

            {/* 2. Programa de recompensas */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              2. Programa de recompensas
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              El programa de recompensas de la tarjeta HSBC 2Now es uno de sus
              mayores atractivos. Con cada compra que realices, ya sea en línea
              o en comercios físicos, acumulas puntos que puedes canjear por una
              gran variedad de productos, servicios y experiencias, tales como
              boletos de avión, electrónicos, moda, o incluso descuentos en
              restaurantes. Este programa de recompensas te permite maximizar el
              valor de cada compra, brindándote la posibilidad de disfrutar de
              beneficios adicionales mientras realizas tus transacciones
              cotidianas.
            </p>

            {/* Image 2: CTA 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas para estudiantes"
              className="my-8"
            />

            {/* 3. Promociones exclusivas */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              3. Promociones exclusivas y meses sin intereses
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Otro de los grandes beneficios de la tarjeta HSBC 2Now es el
              acceso a promociones exclusivas en una amplia red de comercios,
              que incluye descuentos y meses sin intereses. Esta ventaja es
              particularmente útil si planeas realizar compras grandes y deseas
              distribuir tus pagos sin generar intereses adicionales. La
              posibilidad de acceder a promociones exclusivas en tiendas
              afiliadas también te permite obtener ahorros considerables en
              productos seleccionados.
            </p>

            {/* 4. Control total */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              4. Control total desde la app HSBC
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              La tarjeta HSBC 2Now te ofrece gestión completa desde la app HSBC,
              lo que te permite monitorear tus gastos, consultar tu saldo y
              realizar pagos de manera sencilla y rápida. A través de la
              aplicación, puedes acceder a herramientas que te ayudan a
              organizar tus finanzas, configurar alertas de pago y recibir
              notificaciones en tiempo real sobre tus transacciones. Esta
              funcionalidad es ideal para quienes desean tener un control
              detallado de sus gastos y mantener sus finanzas en orden sin
              complicaciones.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-red-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3: CTA 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="CAT en tarjetas"
              className="my-8"
            />

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué debo hacer para solicitar la tarjeta de crédito HSBC 2Now?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta HSBC 2Now es un proceso accesible, y los
              requisitos son razonables para la mayoría de los usuarios. A
              continuación, te presentamos los principales requisitos que debes
              cumplir para obtenerla:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de 18 años:</strong>{" "}
                  Al igual que con cualquier tarjeta de crédito, es necesario
                  ser mayor de edad para solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos mínimos de $5,000 pesos mensuales:
                  </strong>{" "}
                  HSBC requiere que los solicitantes cuenten con un ingreso
                  mínimo mensual de $5,000 pesos para ser elegibles. Este
                  requisito asegura que el solicitante tenga la capacidad de
                  manejar sus pagos de manera responsable.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Para ser aprobado para la tarjeta, es necesario tener un buen
                  historial crediticio. HSBC revisará tu comportamiento
                  crediticio previo a través de burós de crédito para asegurarse
                  de que puedes manejar el crédito de manera adecuada.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial y comprobante de domicilio:
                  </strong>{" "}
                  Deberás presentar una identificación oficial vigente (como INE
                  o pasaporte) y un comprobante de domicilio reciente que no
                  tenga más de tres meses de antigüedad.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                className="text-red-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Image 4: CTA 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas sin anualidad"
              className="my-8"
            />

            {/* Proceso */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuál es el proceso para solicitar la tarjeta HSBC 2Now?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta HSBC 2Now es un proceso sencillo y se puede
              hacer tanto en línea como en una sucursal de HSBC. A continuación,
              te explicamos los pasos para solicitarla:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitar en línea o en sucursal:
                  </strong>{" "}
                  El primer paso es ingresar al sitio web de HSBC o acudir a una
                  sucursal para iniciar la solicitud. Deberás completar un
                  formulario con tus datos personales, como nombre, dirección,
                  ingresos y ocupación.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Enviar los documentos requeridos:
                  </strong>{" "}
                  Después de completar el formulario, deberás enviar la
                  documentación necesaria, incluyendo tu identificación oficial
                  y comprobante de domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación del historial crediticio:
                  </strong>{" "}
                  HSBC revisará tu historial crediticio para evaluar tu
                  capacidad de pago. Este proceso puede tardar algunos días,
                  pero es esencial para determinar si eres elegible para la
                  tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega de la tarjeta:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás tu tarjeta HSBC 2Now en
                  pocos días. Una vez que la recibas, podrás activarla y empezar
                  a disfrutar de sus beneficios de inmediato.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-red-600 hover:underline"
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

            {/* Por qué elegir / Es para ti */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir la tarjeta HSBC 2Now?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito HSBC 2Now es una excelente opción para
              quienes buscan una tarjeta flexible y con beneficios claros. Desde
              la exención de cuota anual el primer año hasta su programa de
              recompensas y promociones exclusivas, esta tarjeta te ofrece una
              serie de ventajas que se adaptan a las necesidades de los usuarios
              modernos.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Además, la facilidad para gestionar tus finanzas a través de la
              app de HSBC te permite mantener el control total de tus gastos, lo
              que es ideal para quienes desean una herramienta financiera fácil
              de usar y sin complicaciones. Si cumples con los requisitos y
              buscas una tarjeta de crédito con beneficios adicionales y sin
              costos ocultos, la tarjeta HSBC 2Now es una excelente opción a
              considerar.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta HSBC 2Now para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito HSBC 2Now es una opción sólida para aquellos
              que buscan un producto financiero con beneficios atractivos y sin
              complicaciones. Con su primer año sin cuota anual, acceso a
              promociones exclusivas y programa de recompensas, es ideal para
              usuarios que buscan maximizar sus compras sin tener que
              preocuparse por cargos adicionales.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si estás buscando una tarjeta de crédito con una amplia gama de
              beneficios y facilidad de uso, la tarjeta HSBC 2Now puede ser la
              opción perfecta para ti.
            </p>

            {/* Button CTA */}
            <Link
              href="https://www.hsbc.com.mx/tarjetas-de-credito/productos/2now/"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
