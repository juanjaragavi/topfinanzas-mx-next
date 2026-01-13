import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { RelatedPosts } from "@/components/blog/related-posts";
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjeta Plata Card: maximiza cada compra | Top Finanzas MX",
  description:
    "La Tarjeta de Crédito Plata ofrece hasta 15% de cashback, límite de crédito de hasta $200,000 y meses sin intereses. Conoce sus beneficios.",
};

// Orange Arrow Icon Component
function OrangeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#F97316" />
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

export default function TarjetaPlataCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-plata-card"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Tarjeta Plata Card: maximiza cada compra
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Plata te ayuda a maximizar tus compras con
              beneficios únicos y flexibles.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/cashback"
                      title="Cashback"
                      className="text-orange-500 hover:underline"
                    >
                      Cashback atractivo
                    </Link>
                    :
                  </strong>{" "}
                  Hasta 15% en categorías seleccionadas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Límite de crédito alto:
                  </strong>{" "}
                  Hasta $200,000.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/meses-sin-intereses"
                      title="Sin intereses"
                      className="text-orange-500 hover:underline"
                    >
                      Sin intereses
                    </Link>
                    :
                  </strong>{" "}
                  Durante los primeros 2 meses.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                      CAT
                    </Link>{" "}
                    y tasas de interés:
                  </strong>{" "}
                  Conoce todos los detalles dando clic Requisitos.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-plata-card"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/download-1-2.webp"
                alt="Tarjeta de crédito Plata Card"
                className="rounded-sm shadow-md aspect-video w-full object-cover"
              />
            </div>

            {/* Body Content */}
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                La Tarjeta de Crédito Plata es una opción diseñada para quienes
                buscan maximizar el valor de cada compra. Uno de los aspectos
                más destacados de esta tarjeta es su atractivo programa de{" "}
                <Link href="/finanzas-personales/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva">
                  cashback
                </Link>
                , que permite a los usuarios recibir hasta un 15% de reembolso
                en efectivo en las categorías que elijan cada mes. Respaldada
                por Mastercard, la Tarjeta de Crédito Plata combina
                flexibilidad, recompensas y seguridad, lo que la convierte en
                una opción ideal para quienes desean sacar el máximo provecho de
                su dinero.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ¿Qué hace especial a la Tarjeta de Crédito Plata?
              </h2>

              <ul className="space-y-3 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      <Link
                        href="/soluciones-financieras/cashback"
                        title="Cashback"
                        className="text-orange-500 hover:underline"
                      >
                        Cashback
                      </Link>{" "}
                      de hasta 15%:
                    </strong>{" "}
                    La Tarjeta de Crédito Plata destaca por su programa de
                    recompensas, que ofrece hasta un 15% de reembolso en
                    efectivo en compras realizadas en categorías seleccionadas.
                    Cada mes, los usuarios pueden elegir hasta cuatro categorías
                    diferentes en la aplicación móvil para optimizar sus
                    recompensas. Este cashback se refleja en el saldo de la
                    tarjeta el primer día de cada mes, convirtiéndose en un
                    incentivo real para un manejo inteligente de las finanzas.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      1% de cashback en todas tus compras:
                    </strong>{" "}
                    Además del cashback en categorías específicas, la tarjeta te
                    permite obtener un 1% de cashback en todas tus compras, sin
                    importar la categoría, lo que significa que siempre estás
                    ganando algo con cada gasto.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Límite de crédito de hasta $200,000:
                    </strong>{" "}
                    La Tarjeta de Crédito Plata ofrece un generoso límite de
                    crédito que puede alcanzar hasta $200,000, dependiendo del
                    perfil crediticio del solicitante. Esto permite a los
                    usuarios contar con un margen considerable para hacer frente
                    a gastos imprevistos o para realizar compras importantes,
                    siempre dentro de un marco de responsabilidad financiera.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      2 meses sin intereses:
                    </strong>{" "}
                    Disfruta de la flexibilidad de realizar compras y pagarlas
                    sin intereses durante los primeros dos meses. Este beneficio
                    es ideal para planificar grandes adquisiciones sin
                    preocuparte por los costos adicionales.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Difiere tus compras a{" "}
                      <Link
                        href="/soluciones-financieras/meses-sin-intereses"
                        title="Meses sin intereses"
                        className="text-orange-500 hover:underline"
                      >
                        meses sin intereses
                      </Link>
                      :
                    </strong>{" "}
                    Si realizas una compra grande, puedes optar por diferir el
                    pago a meses sin intereses directamente desde la app de
                    Plata. Esta flexibilidad te permite ajustar los pagos a tu
                    capacidad financiera, eligiendo plazos de 3 a 12 meses.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Más que una tarjeta: una experiencia completa
              </h2>
              <p className="mb-6">
                La Tarjeta de Crédito Plata no solo te ofrece beneficios
                financieros, sino que también está diseñada para hacerte la vida
                más fácil y segura:
              </p>

              <ul className="space-y-3 mb-8 list-none pl-0">
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Entrega rápida:</strong>{" "}
                    Una vez aprobada tu solicitud, recibirás tu tarjeta en menos
                    de 24 horas sin costo adicional. Esta rapidez en la entrega
                    te permite comenzar a disfrutar de los beneficios casi de
                    inmediato.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Gestión desde la app:
                    </strong>{" "}
                    La aplicación móvil de Plata es una herramienta poderosa que
                    te permite manejar todos los aspectos de tu tarjeta desde la
                    comodidad de tu teléfono. Ya sea que necesites diferir una
                    compra, verificar tu saldo o recibir notificaciones en
                    tiempo real de tus transacciones, la app está diseñada para
                    que tengas un control total de tus finanzas.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">Seguridad 24/7:</strong>{" "}
                    La seguridad es una prioridad para Plata. Con un sistema
                    antifraude que monitorea tus transacciones en tiempo real y
                    te notifica inmediatamente sobre cualquier actividad
                    sospechosa, puedes estar tranquilo sabiendo que tu dinero
                    está protegido. Además, si llegas a perder tu tarjeta,
                    puedes congelarla al instante desde la app, evitando así
                    cualquier uso no autorizado.
                  </span>
                </li>
                <li className="flex items-start">
                  <OrangeArrowIcon />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">
                      Tarjeta digital y control total:
                    </strong>{" "}
                    Desde el primer día, tienes acceso a una tarjeta digital
                    para realizar compras en línea de forma segura. Además,
                    puedes personalizar los límites de gasto y controlar el uso
                    de la tarjeta, como activar o desactivar las compras online
                    o los retiros de efectivo, todo desde la app.
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ¿Es la Tarjeta de Crédito Plata para ti?
              </h2>
              <p className="mb-6">
                Si buscas una tarjeta que te permita maximizar cada peso que
                gastas, la Tarjeta de Crédito Plata es para ti. Con su atractivo
                programa de cashback y las ventajas adicionales que ofrece, esta
                tarjeta es más que un simple medio de pago: es una herramienta
                para potenciar tu poder adquisitivo.
              </p>
              <p className="mb-6">
                <Link
                  href="/soluciones-financieras/requisitos-tarjeta-plata-card"
                  className="text-blue-600 hover:underline"
                >
                  Si deseas conocer más sobre los costos, tasas de interés y
                  comisiones asociados con esta tarjeta, haz clic aquí para
                  obtener todos los detalles.
                </Link>{" "}
                Evaluar estos aspectos te ayudará a tomar una decisión informada
                y a gestionar tu tarjeta de manera responsable.
              </p>
            </div>

            {/* CTA Button 2 */}
            <div className="flex justify-center mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-plata-card"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            <RelatedPosts
              currentSlug="tarjeta-plata-card"
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
