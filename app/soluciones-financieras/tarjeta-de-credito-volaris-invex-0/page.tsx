import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la tarjeta de crédito Volaris INVEX 0 | Top Finanzas MX",
  description:
    "Ideal para viajeros frecuentes, especialmente usuarios de Volaris, con beneficios que facilitan y mejoran cada viaje.",
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

export default function TarjetaVolarisInvex0Page() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-volaris-invex-0"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Volaris INVEX 0
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Ideal para viajeros frecuentes, especialmente usuarios de Volaris,
              con beneficios que facilitan y mejoran cada viaje.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Gana puntos por cada compra.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Descuentos:</strong> Accede
                  a promociones y tarifas especiales en Volaris.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  En Volaris y comercios participantes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin anualidad de por vida:
                  </strong>{" "}
                  Solo usa tu Tarjeta una vez al mes.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-volaris-invex-0"
              className="block w-full"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Volaris-INVEX-0-1-1.jpg"
                alt="Tarjeta de Crédito Volaris INVEX 0"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              Desde la acumulación de puntos hasta descuentos exclusivos, esta
              tarjeta promete optimizar tu experiencia al volar. A continuación,
              te detallamos los principales beneficios que puedes obtener con la
              Tarjeta de Crédito Volaris INVEX.
            </p>

            {/* Section: Acumulación de puntos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Acumulación de puntos para volar con Volaris
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los beneficios más destacados de la Tarjeta de Crédito
              Volaris INVEX es la posibilidad de acumular puntos por cada compra
              que realices. Estos puntos se suman a tu cuenta y puedes
              canjearlos por boletos de avión, servicios adicionales o mejoras
              en tus vuelos con Volaris. A medida que utilizas tu tarjeta, irás
              acumulando puntos, lo que significa que, cuanto más la utilices,
              más rápido podrás obtener recompensas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación acelerada de puntos:
                  </strong>{" "}
                  Por cada dólar gastado en Volaris, recibirás puntos que podrás
                  usar para adquirir boletos de avión. Además, las compras
                  realizadas en categorías generales también te permitirán
                  acumular puntos, aunque a un ritmo ligeramente menor. Esta es
                  una excelente oportunidad para quienes desean maximizar sus
                  recompensas.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Canje de puntos:</strong>{" "}
                  Una vez que hayas acumulado suficientes puntos, podrás
                  canjearlos de manera sencilla en el portal de Volaris o
                  mediante la aplicación móvil. Puedes utilizarlos para pagar
                  vuelos, elegir asientos preferenciales, acceder a más equipaje
                  o disfrutar de otros servicios adicionales que ofrece la
                  aerolínea.
                </span>
              </li>
            </ul>

            {/* Section: Promociones y descuentos */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Promociones y descuentos exclusivos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Volaris INVEX también te brinda acceso a
              promociones exclusivas. Estas ofertas incluyen descuentos
              especiales en boletos de avión, tarifas preferenciales y
              promociones periódicas que Volaris ofrece únicamente a los
              tarjetahabientes de INVEX.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descuentos en boletos de avión:
                  </strong>{" "}
                  Como titular de esta tarjeta, tendrás acceso a descuentos en
                  boletos seleccionados en rutas nacionales e internacionales
                  operadas por Volaris. Estas promociones suelen estar
                  disponibles en determinadas épocas del año o para ciertos
                  destinos, lo que te permite planificar viajes a precios más
                  accesibles.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso anticipado a promociones:
                  </strong>{" "}
                  Otro beneficio clave es que tendrás acceso anticipado a las
                  promociones de Volaris antes de que se hagan públicas al resto
                  de los clientes. Esto te da una ventaja al momento de comprar
                  boletos y aprovechar tarifas más bajas antes de que se agoten.
                </span>
              </li>
            </ul>

            {/* Section: Financiamiento */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Financiamiento y pagos a meses sin intereses
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El financiamiento es una característica importante para aquellos
              que buscan gestionar sus finanzas de manera inteligente. Con la
              Tarjeta de Crédito Volaris INVEX, podrás diferir tus compras a
              meses sin intereses en varias categorías, incluyendo viajes y
              compras en comercios afiliados.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Este beneficio te permite dividir el pago de tus compras en
                  cuotas mensuales sin que se generen intereses adicionales.
                  Podrás utilizar este beneficio tanto para la compra de boletos
                  de avión con Volaris como para adquisiciones en otros
                  comercios participantes. Es ideal si planeas realizar compras
                  grandes y quieres mantener un control estricto sobre tus
                  gastos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Financiamiento para viajes:
                  </strong>{" "}
                  Además de los meses sin intereses, la tarjeta te ofrece
                  opciones de financiamiento específicas para viajes,
                  permitiéndote pagar en plazos convenientes. Esto es
                  especialmente útil si estás planeando un viaje grande o si
                  necesitas un poco más de flexibilidad en tu presupuesto.
                </span>
              </li>
            </ul>

            {/* Section: Bonificaciones */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Bonificaciones y recompensas por uso
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Volaris INVEX también ofrece bonificaciones
              atractivas por uso. Esto incluye recompensas al realizar ciertas
              transacciones o al alcanzar ciertos niveles de gasto con la
              tarjeta.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonificación de bienvenida:
                  </strong>{" "}
                  Al activar y comenzar a utilizar tu tarjeta, recibirás una
                  bonificación de bienvenida en puntos, que podrás utilizar para
                  comprar boletos de avión o servicios adicionales en Volaris.
                  Esta bonificación suele estar disponible si realizas una
                  compra dentro de los primeros tres meses de uso.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonificaciones por gasto:
                  </strong>{" "}
                  A lo largo del año, INVEX ofrece programas de bonificación
                  para premiar a los usuarios que cumplan con ciertos niveles de
                  gasto. Estas bonificaciones pueden incluir puntos adicionales,
                  descuentos en vuelos o promociones especiales en fechas clave.
                </span>
              </li>
            </ul>

            {/* Section: Asistencia */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Asistencia en viajes y protección
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Volaris INVEX no solo te brinda beneficios
              relacionados con las compras y los viajes, sino que también ofrece
              servicios de protección y asistencia para que puedas viajar con
              mayor tranquilidad.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguro de accidentes en viajes:
                  </strong>{" "}
                  Como parte de sus servicios de protección, la tarjeta incluye
                  un seguro de accidentes en viajes que te cubre en caso de
                  imprevistos mientras estás en ruta. Esta cobertura es válida
                  tanto en vuelos nacionales como internacionales, y proporciona
                  un nivel adicional de seguridad para ti y tus seres queridos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Asistencia en el extranjero:
                  </strong>{" "}
                  Si estás de viaje fuera del país, la tarjeta también te ofrece
                  asistencia en situaciones de emergencia. Esto puede incluir
                  desde orientación médica hasta ayuda en caso de extravío de
                  documentos importantes, lo que te permite viajar con mayor
                  tranquilidad.
                </span>
              </li>
            </ul>

            {/* Section: Programa de lealtad */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Programa de lealtad y acceso a experiencias exclusivas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios mencionados, la Tarjeta de Crédito
              Volaris INVEX ofrece acceso a un programa de lealtad con
              experiencias exclusivas para los usuarios más frecuentes.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Eventos y experiencias especiales:
                  </strong>{" "}
                  Como tarjetahabiente, tendrás la oportunidad de asistir a
                  eventos exclusivos organizados por Volaris e INVEX. Esto puede
                  incluir desde fiestas de lanzamiento hasta viajes especiales y
                  eventos VIP en aeropuertos seleccionados.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Prioridad en el embarque:
                  </strong>{" "}
                  Otro beneficio exclusivo es que tendrás prioridad en el
                  embarque en tus vuelos con Volaris, lo que te permitirá
                  abordar primero y asegurarte de tener espacio para tu equipaje
                  de mano.
                </span>
              </li>
            </ul>

            {/* Final Section: ¿Es ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es ideal para ti?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              La Tarjeta de Crédito Volaris INVEX es una excelente herramienta
              para quienes disfrutan de viajar con frecuencia, ya que ofrece una
              gran cantidad de beneficios orientados a mejorar la experiencia de
              vuelo. Desde la acumulación de puntos hasta los descuentos
              exclusivos y las opciones de financiamiento, esta tarjeta te
              permite optimizar tus viajes y obtener más por cada peso gastado.
              Si eres un viajero asiduo de Volaris, esta tarjeta es una opción
              que deberías considerar para maximizar tus beneficios en cada
              vuelo.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-volaris-invex-0"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
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
