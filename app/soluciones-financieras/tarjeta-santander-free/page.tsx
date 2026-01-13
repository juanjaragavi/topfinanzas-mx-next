import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  title: "Beneficios destacados de la tarjeta Santander Free | Top Finanzas MX",
  description:
    "La Tarjeta Santander Free es una excelente opción sin anualidad si cumples el gasto mínimo. Conoce sus beneficios, seguros y promociones.",
};

// Red Arrow Icon Component (Color #d92d21 approx Red-600)
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
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

export default function TarjetaSantanderFreePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-santander-free"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios destacados de la tarjeta Santander Free
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta Santander Free es una excelente opción para quienes
              buscan una tarjeta sin anualidad, con múltiples ventajas y
              condiciones flexibles.
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
                  No pagas anualidad si realizas compras por al menos $200 MXN
                  al mes.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección Mastercard Oro:
                  </strong>{" "}
                  Seguro de compras, garantía extendida y protección en viajes.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Acceso a{" "}
                  <Link
                    href="/soluciones-financieras/meses-sin-intereses"
                    title="Meses sin intereses"
                    className="text-red-600 hover:underline"
                  >
                    meses sin intereses
                  </Link>{" "}
                  en comercios afiliados y descuentos especiales.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recompensas por compras:
                  </strong>{" "}
                  <Link
                    href="/soluciones-financieras/puntos"
                    title="Puntos"
                    className="text-red-600 hover:underline"
                  >
                    Acumula puntos
                  </Link>{" "}
                  con cada compra que puedes canjear por productos o servicios.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-santander-free"
              className="block w-full"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Santander-Free-1-1.webp"
                alt="Tarjeta Santander Free"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: ¿Por qué más elegir...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué más elegir la tarjeta Santander Free?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Uno de los principales atractivos de la Tarjeta Santander Free es
              la eliminación de la cuota anual si realizas compras por al menos
              $200 MXN mensuales. Esto la convierte en una opción flexible para
              quienes desean una tarjeta sin costos recurrentes, pero con
              beneficios adicionales. Entre los principales beneficios se
              incluyen:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transferencia de saldos a bajo interés:
                  </strong>{" "}
                  La tarjeta ofrece la posibilidad de transferir saldos de otras
                  tarjetas de crédito a una tasa de interés preferencial del 3%,
                  lo que facilita la consolidación de deudas con un costo
                  financiero más bajo.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Retiros de efectivo sin comisiones:
                  </strong>{" "}
                  Santander ofrece la posibilidad de retirar efectivo sin
                  comisión en sus cajeros automáticos dentro de México. Esto
                  puede ser especialmente útil para aquellos que necesitan
                  acceso rápido a efectivo.
                </span>
              </li>
            </ul>

            {/* Section: Consideraciones adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Consideraciones adicionales
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Si bien la tarjeta tiene muchos beneficios, es importante cumplir
              con el requisito de gasto mensual para evitar costos adicionales.
              En caso de no alcanzar el mínimo de $200 MXN, se aplicará una
              comisión mensual de mantenimiento de $150 MXN. También es
              relevante señalar que la tasa de interés de la tarjeta puede
              variar según el perfil del cliente, con un promedio de 65.91%.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Por otro lado, aunque ofrece promociones de meses sin intereses,
              la inscripción a este programa puede tener un costo de hasta $999
              MXN por evento, lo que podría ser un factor a considerar antes de
              optar por esta opción.
            </p>

            {/* Section: ¿Es la tarjeta para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Santander Free para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Tarjeta Santander Free es ideal para usuarios que prefieren
              evitar pagos de anualidades y que puedan cumplir con el requisito
              mensual de compras. También es una excelente herramienta para
              personas que desean acceder a promociones de meses sin intereses y
              consolidar deudas con una tasa preferencial.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si eres alguien que realiza compras regulares de bajo monto y
              busca una tarjeta flexible, esta puede ser la opción adecuada para
              ti. Además, si estás buscando construir o mejorar tu{" "}
              <Link
                href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante"
                title="Historial crediticio"
                className="text-red-600 hover:underline"
              >
                historial crediticio
              </Link>
              , la Tarjeta Santander Free te ofrece la posibilidad de hacerlo
              sin preocuparte por costosas comisiones.
            </p>

            {/* Section: ¿Qué más debo tener en cuenta? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué más debo tener en cuenta?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Tarjeta Santander Free es una opción sólida para quienes desean
              una tarjeta de crédito sin complicaciones, con la ventaja de no
              pagar anualidad y acceder a múltiples beneficios. Al evaluar si
              esta tarjeta es la adecuada para ti, considera tus hábitos de
              consumo y si puedes cumplir con el gasto mínimo requerido para
              evitar comisiones adicionales.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si deseas conocer más detalles o iniciar tu solicitud, visita el
              sitio oficial de Santander o acude a una sucursal cercana.
            </p>

            {/* Section: ¿Para quién es? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es la tarjeta Santander Free?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Tarjeta Santander Free es ideal para quienes buscan beneficios
              sin complicaciones y sin pagar comisiones adicionales. Además de
              no tener anualidad si cumples con el mínimo de compras mensuales,
              esta tarjeta te brinda acceso a las protecciones y asistencias de
              Mastercard Oro, como seguro de viaje, cobertura de accidentes y
              protección de compras. Si viajas frecuentemente o haces compras
              online, contar con este nivel de respaldo te permitirá sentirte
              seguro en cada transacción.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Otra ventaja importante es el acceso a meses sin intereses en una
              amplia variedad de comercios afiliados, lo que te permite
              financiar tus compras sin pagar intereses adicionales. Además, al
              utilizar la tarjeta, acumulas puntos en el programa de recompensas
              de Santander, que puedes canjear por productos, descuentos o
              experiencias exclusivas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Esta tarjeta es una excelente opción si deseas aprovechar
              promociones exclusivas y simplificar tus finanzas. Además, los
              beneficios adicionales como la transferencia de saldo a una tasa
              de interés preferencial del 3% pueden ayudarte a consolidar deudas
              y reducir costos financieros.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si buscas una tarjeta versátil, con protección extra y sin pagos
              recurrentes, la Tarjeta Santander Free te ofrece una excelente
              opción para gestionar tus gastos de manera flexible y sin
              complicaciones financieras.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-santander-free"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
