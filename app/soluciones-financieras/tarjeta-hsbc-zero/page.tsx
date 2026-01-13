import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  title:
    "HSBC Zero: Ahorra en comisiones y maximiza tus recompensas | Top Finanzas MX",
  description:
    "La Tarjeta HSBC Zero ofrece libertad financiera con cero comisiones anuales, programa de recompensas y promociones exclusivas. Conoce sus beneficios.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#DC2626" />
      <path
        d="M8 6l4 4-4 4"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TarjetaHSBCZeroPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-hsbc-zero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              HSBC Zero: Ahorra en comisiones y maximiza tus recompensas
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Zero está diseñada para ofrecerte libertad
              financiera con cero comisiones anuales y múltiples beneficios.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-red-600 hover:underline"
                    >
                      Sin anualidad
                    </Link>
                    :
                  </strong>{" "}
                  Elimina preocupaciones sobre costos fijos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Programa Más HSBC:</strong>{" "}
                  Acumula{" "}
                  <Link
                    href="/soluciones-financieras/puntos"
                    title="Puntos"
                    className="text-red-600 hover:underline"
                  >
                    puntos
                  </Link>{" "}
                  por cada dólar gastado.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisiones:</strong> No
                  existen comisiones si se realiza una transacción mensual.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Accede a promociones como la Gran Venta HSBC.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-hsbc-zero"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/download-4-2.webp"
                alt="Tarjeta de crédito HSBC Zero"
                className="rounded-sm shadow-md aspect-video w-full object-cover"
              />
            </div>

            {/* Body Content */}
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                La Tarjeta HSBC Zero redefine la experiencia bancaria eliminando
                las comisiones anuales, convirtiéndola en la opción ideal para
                quienes desean gestionar sus finanzas de manera eficiente y
                económica. La ausencia de comisiones por administración de la
                tarjeta, condicionada a realizar al menos una transacción
                mensual, permite a los usuarios disfrutar de todas las ventajas
                de su tarjeta sin preocuparse por costos ocultos.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Maximiza Tus Recompensas
              </h2>
              <p className="mb-6">
                Con el Programa de Recompensas Más HSBC, cada compra se traduce
                en puntos que se acumulan rápidamente y se pueden canjear por
                una amplia gama de productos y servicios.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Diversidad de opciones para canjear tus puntos:
              </h2>
              <ul className="space-y-3 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Boletos de avión:</strong>{" "}
                    Elige la aerolínea de tu preferencia sin restricciones, con
                    todos los impuestos incluidos.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Hospedaje:</strong>{" "}
                    Realiza reservaciones en cadenas hoteleras principales,
                    proporcionando comodidad en tus viajes.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Catálogo extenso de productos:
                    </strong>{" "}
                    Canjea tus puntos por artículos variados, desde electrónicos
                    hasta electrodomésticos, sin preocuparte por los gastos de
                    envío.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Flexibilidad en el pago de recompensas:
                    </strong>{" "}
                    Usa puntos para pagar y cubre cualquier diferencia con tu
                    Tarjeta de Crédito HSBC, necesitando al menos el 70% del
                    precio de la recompensa en puntos para artículos y el 50%
                    para viajes.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Accede a promociones y descuentos exclusivos con HSBC Zero
              </h2>
              <p className="mb-6">
                Las promociones exclusivas son una de las características más
                destacadas de la Tarjeta HSBC Zero, ofreciendo acceso a eventos
                especiales y promociones que enriquecen la experiencia del
                titular.
              </p>
              <ul className="space-y-3 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Gran Venta HSBC y eventos especiales:
                    </strong>{" "}
                    Participa en la Gran Venta HSBC para adquirir boletos antes
                    que nadie y disfruta de hasta 10{" "}
                    <Link
                      href="/soluciones-financieras/meses-sin-intereses"
                      title="Meses sin intereses"
                      className="text-red-600 hover:underline"
                    >
                      Meses Sin Intereses
                    </Link>{" "}
                    en comercios participantes.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Promociones durante eventos selectos:
                    </strong>{" "}
                    Aprovecha promociones especiales en eventos como el Festival
                    Hera HSBC y el Festival Arre, incluyendo la posibilidad de
                    ganar boletos gratuitos.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Acceso prioritario a conciertos y festivales:
                    </strong>{" "}
                    Accede a preventas exclusivas para artistas internacionales
                    y eventos deportivos, con opciones de financiamiento
                    flexible.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Beneficios extendidos
              </h2>
              <ul className="space-y-3 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Seguridad mejorada:
                    </strong>{" "}
                    La tarjeta cuenta con tecnología contactless y es compatible
                    con Apple Pay para transacciones seguras.
                  </span>
                </li>
                <li className="flex items-start">
                  <RedArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Flexibilidad en pagos:
                    </strong>{" "}
                    Benefíciate de planes de Meses Sin Intereses y la opción de
                    transferir saldos de otras tarjetas a tasas preferenciales.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tecnología y seguridad en tus manos
              </h2>
              <p className="mb-6">
                La tarjeta también está equipada con la última tecnología
                contactless, permitiendo pagos rápidos y seguros sin necesidad
                de contacto físico. Además, la compatibilidad con Apple Pay
                mejora la experiencia de pago, ofreciendo una alternativa cómoda
                y segura para realizar transacciones desde tus dispositivos
                Apple.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Ventajas de flexibilidad en pagos
              </h2>
              <p className="mb-6">
                Además de las recompensas y promociones, la Tarjeta HSBC Zero te
                ofrece una flexibilidad excepcional en los pagos. Los titulares
                pueden beneficiarse de planes de Meses Sin Intereses en compras
                seleccionadas, lo que facilita la gestión de grandes gastos sin
                incurrir en intereses adicionales. También se ofrece la opción
                de transferir saldos de otras tarjetas a la HSBC Zero con tasas
                preferenciales, lo que te permite consolidar tus deudas y
                gestionar tus finanzas con mayor facilidad.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Empodera tu vida financiera
              </h2>
              <p className="mb-6">
                La Tarjeta HSBC Zero de HSBC ofrece más que solo una herramienta
                financiera; es un pasaporte a una vida libre de preocupaciones
                financieras innecesarias, donde cada transacción trae consigo la
                promesa de valor y seguridad. Con esta tarjeta, HSBC no solo
                promete una experiencia sin comisiones, sino que realmente
                entrega una manera más inteligente y gratificante de manejar tu
                dinero día a día.
              </p>
            </div>

            {/* CTA Button 2 */}
            <div className="flex justify-center mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-hsbc-zero"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-hsbc-zero"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
