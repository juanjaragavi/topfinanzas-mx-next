import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-hsbc-viva",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-hsbc-viva",
    },
  },
  title: "Beneficios de la Tarjeta de Crédito HSBC Viva | Top Finanzas MX",
  description:
    "Conoce la Tarjeta de Crédito HSBC Viva: sin anualidad, cashback en compras, meses sin intereses y acceso a promociones exclusivas.",
};

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

export default function TarjetaHSBCVivaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-hsbc-viva"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito HSBC Viva
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito HSBC Viva está diseñada para ofrecer una
              serie de ventajas tanto a nivel de compras cotidianas como en
              experiencias exclusivas, proporcionando beneficios financieros y
              recompensas atractivas para los usuarios.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-blue-600 hover:underline"
                    >
                      Sin anualidad
                    </Link>
                    :
                  </strong>{" "}
                  Mantén tu tarjeta sin preocuparte por cargos anuales.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cashback en compras:
                  </strong>{" "}
                  Obtén recompensas en efectivo por cada compra realizada.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Disfruta de compras a plazos en establecimientos
                  participantes.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a experiencias y promociones exclusivas:
                  </strong>{" "}
                  Obtén descuentos y acceso preferencial a eventos y servicios.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-hsbc-viva"
                className="block w-full bg-red-600 text-white text-center font-bold py-3 px-4 rounded-full hover:bg-red-700 transition-colors"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Image */}
            <div className="mb-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/TC_HSBC_VIVA_requisitos.jpg"
                alt="Tarjeta de Crédito HSBC Viva"
                width={800}
                height={450}
                className="rounded-sm w-full h-auto"
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Sin anualidad
                </h2>
                <p className="mb-4">
                  Uno de los principales atractivos de la tarjeta HSBC Viva es
                  que no tiene cargos por anualidad. Esto significa que puedes
                  disfrutar de todas las ventajas que ofrece la tarjeta sin
                  tener que pagar una cuota anual por mantenerla activa. Es
                  ideal para quienes buscan una tarjeta que ofrezca valor sin
                  generar costos recurrentes.
                </p>
                <p>
                  Este beneficio no solo es práctico, sino que también te
                  permite administrar mejor tus finanzas personales, evitando
                  gastos innecesarios. Puedes usar la tarjeta de manera
                  ocasional o regular, sin preocuparte por la acumulación de
                  costos a lo largo del tiempo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  <Link
                    href="/soluciones-financieras/cashback"
                    title="Cashback"
                    className="text-blue-600 hover:underline"
                  >
                    Cashback
                  </Link>{" "}
                  en compras
                </h2>
                <p className="mb-4">
                  Otra ventaja atractiva de la HSBC Viva es su programa de
                  cashback, que te permite obtener un porcentaje de devolución
                  en efectivo sobre tus compras. Dependiendo de las promociones
                  activas, puedes obtener reembolsos en diferentes categorías,
                  lo que te permite ahorrar en compras que haces habitualmente.
                </p>
                <p>
                  El cashback acumulado puede ser utilizado para reducir tu
                  saldo o aplicarse en futuras compras. Este programa es
                  especialmente útil para aquellos que utilizan la tarjeta de
                  manera frecuente y buscan maximizar los beneficios a largo
                  plazo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  <Link
                    href="/soluciones-financieras/meses-sin-intereses"
                    title="Meses sin intereses"
                    className="text-blue-600 hover:underline"
                  >
                    Meses sin intereses
                  </Link>
                </h2>
                <p className="mb-4">
                  La tarjeta HSBC Viva también te brinda la opción de pagar a
                  meses sin intereses en una amplia red de establecimientos
                  afiliados. Esta característica es muy útil para realizar
                  compras importantes, como electrodomésticos, tecnología o
                  viajes, permitiéndote distribuir el pago en plazos cómodos sin
                  generar intereses adicionales.
                </p>
                <p>
                  Los meses sin intereses te ayudan a controlar mejor tu
                  presupuesto, facilitando la compra de productos o servicios de
                  mayor valor sin impactar de inmediato tu liquidez.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Acceso a promociones y descuentos exclusivos
                </h2>
                <p className="mb-4">
                  Con la HSBC Viva, puedes acceder a descuentos y promociones en
                  diversas categorías, como entretenimiento, restaurantes y
                  viajes. HSBC suele ofrecer alianzas con comercios para
                  proporcionar ofertas especiales y oportunidades únicas a los
                  titulares de la tarjeta. Estas promociones pueden incluir
                  descuentos en boletos de avión, eventos, o en la compra de
                  productos de alta demanda.
                </p>
                <p>
                  Además, los usuarios de la tarjeta pueden disfrutar de
                  beneficios exclusivos en eventos y experiencias seleccionadas,
                  lo que mejora aún más el valor que puedes obtener como cliente
                  de HSBC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Programa de recompensas
                </h2>
                <p className="mb-4">
                  El programa de recompensas de la tarjeta HSBC Viva es otro de
                  sus grandes atractivos. A través de este programa, puedes
                  acumular puntos por cada compra realizada, que luego podrás
                  canjear por productos, servicios o descuentos especiales en
                  comercios participantes. Este tipo de beneficio es
                  especialmente útil si realizas compras frecuentes con la
                  tarjeta, ya que te permite acumular puntos rápidamente y
                  aprovechar al máximo las recompensas disponibles.
                </p>
                <p>
                  Además, estos puntos se pueden utilizar en una amplia variedad
                  de categorías, lo que te brinda flexibilidad para elegir los
                  productos o servicios que más te interesen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Flexibilidad en pagos
                </h2>
                <p>
                  Con la tarjeta HSBC Viva, tienes varias opciones para realizar
                  tus pagos. Además de poder liquidar tu saldo a meses sin
                  intereses, puedes optar por realizar pagos mínimos o abonar el
                  saldo total cada mes para evitar cargos por intereses. HSBC
                  también ofrece la opción de realizar pagos anticipados sin
                  penalización, lo que te da control total sobre cómo gestionar
                  tus finanzas y la deuda asociada a la tarjeta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Asistencia y seguros
                </h2>
                <p>
                  La tarjeta HSBC Viva también incluye varios seguros, como la
                  protección en caso de accidentes de viaje y compras
                  protegidas. Estos seguros te brindan tranquilidad al hacer
                  compras importantes o al viajar, sabiendo que cuentas con una
                  cobertura adicional ante imprevistos. La seguridad y respaldo
                  que ofrece este tipo de beneficios es una característica muy
                  valorada por los usuarios de tarjetas de crédito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Facilidad de gestión
                </h2>
                <p>
                  Finalmente, HSBC pone a tu disposición una aplicación móvil
                  con la que puedes gestionar todos los aspectos relacionados
                  con tu tarjeta de crédito. A través de la app, puedes
                  verificar tu saldo, revisar tus movimientos y realizar pagos
                  de manera rápida y sencilla, lo que facilita el control de tus
                  finanzas diarias desde la palma de tu mano.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  ¿Es la tarjeta de crédito HSBC Viva ideal para ti?
                </h2>
                <p className="mb-4">
                  La Tarjeta de Crédito HSBC Viva es una excelente opción para
                  quienes buscan una tarjeta que ofrezca beneficios tangibles
                  como el cashback, la posibilidad de pagos a meses sin
                  intereses y acceso a promociones exclusivas. Además, su
                  característica de no cobrar anualidad la convierte en una
                  opción atractiva para usuarios que desean obtener valor sin
                  asumir costos adicionales.
                </p>
                <p>
                  Si estás buscando una tarjeta de crédito flexible, con
                  recompensas y beneficios diseñados para mejorar tu experiencia
                  de compra, la HSBC Viva podría ser la elección ideal para ti.
                  ¡Empieza a disfrutar de sus ventajas hoy mismo y optimiza tu
                  vida financiera con HSBC!
                </p>
              </section>
            </div>

            {/* CTA Button 2 */}
            <div className="mt-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-hsbc-viva"
                className="block w-full bg-red-600 text-white text-center font-bold py-3 px-4 rounded-full hover:bg-red-700 transition-colors"
              >
                Quiero conocer los requisitos
              </Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-de-credito-hsbc-viva"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
