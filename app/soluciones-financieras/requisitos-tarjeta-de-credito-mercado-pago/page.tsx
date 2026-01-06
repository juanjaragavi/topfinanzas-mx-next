import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar la tarjeta Mercado Pago | Top Finanzas MX",
  description:
    "Descubre los requisitos y beneficios de la tarjeta de crédito Mercado Pago. Sin anualidad, ideal para compras en línea y con gestión total desde la app.",
};

// Sky Arrow Icon Component (Approximating #077fd7 -> Tailwind Sky-600)
function SkyArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#0284c7" />
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

export default function RequisitosTarjetaMercadoPagoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-mercado-pago"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta Mercado Pago
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
              La tarjeta de crédito Mercado Pago es una excelente opción para
              quienes buscan un producto financiero flexible y sin
              complicaciones, ideal para hacer compras en línea, en tiendas
              físicas y aprovechar los múltiples beneficios que ofrece la
              plataforma de Mercado Libre.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              A continuación, te detallamos los requisitos y el proceso para
              solicitarla, junto con sus principales características.
            </p>

            {/* Image 1: mercadopago-1.webp */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/mercadopago-1.webp"
                alt="Tarjeta de crédito Mercado Pago"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* ¿Qué es? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito Mercado Pago?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Mercado Pago está diseñada para los usuarios
              de Mercado Libre y Mercado Pago que desean contar con una opción
              de pago ágil y sin complicaciones. Ofrece beneficios especiales
              dentro de la plataforma, tales como promociones y descuentos,
              además de ser aceptada en cualquier establecimiento que acepte
              Visa. Es una herramienta financiera que se adapta perfectamente a
              quienes realizan compras en línea y buscan evitar cuotas de manejo
              o costos ocultos.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Uno de sus mayores atractivos es que no requiere de una larga
              lista de requisitos ni trámites complicados, lo que la convierte
              en una opción accesible para una amplia gama de usuarios. Además,
              puedes gestionar todas tus operaciones desde la app de Mercado
              Pago, lo que permite un control total de tus finanzas desde la
              comodidad de tu teléfono móvil.
            </p>

            {/* Ad Unit: square04 (After ~3rd paragraph section) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Beneficios principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios principales de la tarjeta Mercado Pago
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Disfruta de total claridad en los costos, ya que no se aplican las
              comisiones ocultas que suelen encontrarse en otros bancos. Este
              enfoque transparente es revolucionario en un sector frecuentemente
              criticado por sus cargos inesperados.
            </p>

            {/* 1. Sin cuota anual */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              1. Sin cuota anual
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Una de las ventajas más destacadas de la tarjeta de crédito
              Mercado Pago es que no tiene cuota anual. Esto significa que no
              tendrás que preocuparte por cargos adicionales solo por mantener
              la tarjeta activa. Es una opción ideal para quienes desean usar
              una tarjeta de crédito de manera ocasional o quienes buscan evitar
              gastos innecesarios. La ausencia de cuota anual hace que esta
              tarjeta sea una de las más atractivas del mercado, especialmente
              para quienes buscan mantener sus costos bajos.
            </p>

            {/* 2. Compras en línea y físicas */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              2. Compras en línea y en tiendas físicas
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              La tarjeta Mercado Pago es perfecta para realizar compras en
              línea, especialmente en Mercado Libre, donde puedes aprovechar
              promociones exclusivas y meses sin intereses. Además, es aceptada
              en millones de comercios alrededor del mundo que reciban tarjetas
              Visa, por lo que también puedes usarla en tiendas físicas. Esta
              flexibilidad la convierte en una herramienta versátil, que puedes
              utilizar tanto en tus compras cotidianas como en tus adquisiciones
              por internet.
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
              3. Acceso a promociones exclusivas
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Otro de los grandes beneficios de la tarjeta Mercado Pago es que
              te ofrece acceso a promociones exclusivas dentro de la plataforma
              Mercado Libre. Esto incluye desde meses sin intereses hasta
              descuentos en productos seleccionados. También es común encontrar
              promociones especiales en diversos comercios afiliados, lo que te
              permite ahorrar en tus compras diarias. Estos beneficios la hacen
              ideal para los usuarios frecuentes de Mercado Libre y quienes
              buscan maximizar su poder de compra.
            </p>

            {/* 4. Gestión app */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              4. Gestión total desde la app de Mercado Pago
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              La tarjeta Mercado Pago está completamente integrada en la app de
              Mercado Pago, lo que te permite tener un control total de tus
              finanzas desde tu dispositivo móvil. A través de la app, puedes
              consultar tu saldo, revisar tus movimientos, pagar tu tarjeta y
              activar alertas de gastos, todo en un solo lugar. Esta integración
              facilita la gestión financiera y permite a los usuarios tomar
              decisiones informadas sobre sus compras y pagos.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-sky-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 3: CTA 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="CAT en tarjetas"
              className="my-8"
            />

            {/* Puntos clave */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Puntos clave
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong> No
                  pagarás cuota anual por el uso de la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Compras en línea:</strong>{" "}
                  Ideal para realizar compras en Mercado Libre y otros sitios.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Acceso a meses sin intereses y descuentos especiales.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gestión desde la app:
                  </strong>{" "}
                  Control total desde la app de Mercado Pago.
                </span>
              </li>
            </ul>

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué necesito para solicitar la tarjeta Mercado Pago?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta de crédito Mercado Pago es un proceso
              sencillo, y los requisitos son accesibles para la mayoría de los
              usuarios. A continuación, te mostramos los requisitos clave que
              debes cumplir para solicitarla:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de 18 años:</strong>{" "}
                  Al igual que todas las tarjetas de crédito, debes ser mayor de
                  edad para solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con una cuenta activa en Mercado Pago:
                  </strong>{" "}
                  Uno de los requisitos fundamentales es tener una cuenta activa
                  en la plataforma de Mercado Pago, ya que la tarjeta está
                  vinculada a esta aplicación.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Mercado Pago revisará tu historial crediticio para asegurarse
                  de que puedas manejar el crédito de manera responsable. No es
                  necesario tener un historial extenso, pero contar con un buen
                  puntaje crediticio aumentará las posibilidades de aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos comprobables:
                  </strong>{" "}
                  Aunque Mercado Pago no especifica un ingreso mínimo, es
                  recomendable tener ingresos comprobables para que la
                  aprobación de la tarjeta sea más rápida. Puedes demostrar tus
                  ingresos a través de recibos de nómina o estados de cuenta.
                </span>
              </li>
            </ul>

            {/* Image 4: CTA 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas sin anualidad"
              className="my-8"
            />

            {/* Proceso solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud de la tarjeta Mercado Pago
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta de crédito Mercado Pago es un proceso
              completamente en línea y muy sencillo. A continuación, te
              detallamos los pasos que debes seguir para solicitarla:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en Mercado Pago:
                  </strong>{" "}
                  Si aún no tienes una cuenta en Mercado Pago, el primer paso es
                  registrarte. Una vez que tengas una cuenta activa, podrás
                  solicitar la tarjeta directamente desde la app.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Dentro de la app de Mercado Pago, busca la opción de solicitar
                  la tarjeta de crédito. Ahí deberás llenar un formulario con
                  tus datos personales y financieros.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de crédito:
                  </strong>{" "}
                  Mercado Pago revisará tu historial crediticio para determinar
                  si cumples con los requisitos para la tarjeta. Este proceso
                  puede tardar unos días.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás la tarjeta en tu
                  domicilio. Una vez recibida, podrás activarla desde la app de
                  Mercado Pago y comenzar a disfrutar de sus beneficios.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-sky-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Por qué elegir */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              ¿Por qué elegir la tarjeta Mercado Pago?
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Mercado Pago es una excelente opción para
              quienes buscan una tarjeta sin complicaciones y con beneficios
              atractivos, especialmente si eres usuario frecuente de Mercado
              Libre. La combinación de sin cuota anual, promociones exclusivas y
              gestión financiera desde la app la convierte en una opción ideal
              para quienes prefieren mantener el control total de sus finanzas
              desde su teléfono móvil.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Además, la tarjeta es aceptada en cualquier establecimiento que
              acepte Visa, lo que la hace ideal no solo para compras en línea,
              sino también para transacciones en tiendas físicas. Si cumples con
              los requisitos y buscas una tarjeta accesible, flexible y sin
              costos adicionales, la tarjeta Mercado Pago es una excelente
              alternativa.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-sky-600 hover:underline"
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

            {/* Es para ti */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              ¿Es una buena alternativa para ti?
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Si te gusta estar a la vanguardia de las soluciones financieras y
              valoras las características innovadoras como los MSI con opción de
              adelanto y descuento, y la seguridad avanzada que incluye una
              tarjeta virtual, entonces Nu podría ser la elección perfecta para
              ti.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si eres un usuario activo de Mercado Libre o Mercado Pago y deseas
              una tarjeta de crédito sin costos ocultos y con beneficios
              atractivos, la tarjeta Mercado Pago es una excelente opción para
              ti.
            </p>

            {/* Button CTA */}
            <Link
              href="https://www.mercadopago.com.mx/ayuda/preguntas-frecuentes-tarjeta-de-credito-mercado-pago_27576"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
