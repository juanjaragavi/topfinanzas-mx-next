import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  title:
    "Beneficios de la tarjeta de crédito Santander Aeroméxico Infinite | Top Finanzas MX",
  description:
    "La tarjeta de crédito Santander Aeroméxico Infinite ofrece una gama de beneficios exclusivos, ideal para viajeros frecuentes que buscan aprovechar al máximo cada vuelo y cada compra.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#D92D21] mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#D92D21" />
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

export default function TarjetaSantanderAeromexicoInfinitePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-santander-aeromexico-infinite"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Santander Aeroméxico Infinite
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta de crédito Santander Aeroméxico Infinite ofrece una
              gama de beneficios exclusivos, ideal para viajeros frecuentes que
              buscan aprovechar al máximo cada vuelo y cada compra.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación acelerada de{" "}
                    <Link
                      href="/soluciones-financieras/puntos"
                      title="Puntos"
                      className="text-[#D92D21] hover:underline"
                    >
                      Puntos Premier
                    </Link>
                    :
                  </strong>{" "}
                  Gana más puntos con cada compra y canjéalos por vuelos y
                  mejoras de clase.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Disfruta de espacios exclusivos y servicios VIP en
                  aeropuertos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Boletos de acompañante:
                  </strong>{" "}
                  Viaja con un acompañante sin pagar por su boleto, hasta dos
                  veces al año.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguros y protección en viajes:
                  </strong>{" "}
                  Cobertura en caso de accidentes, pérdida de equipaje y más.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-infinite"
              className="block w-full"
            >
              <button
                className="w-full bg-[#D92D21] hover:bg-[#b91c1c] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors"
                style={{ backgroundColor: "#D92D21" }}
              >
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Infinite-Santander-1-1.jpg"
                alt="Tarjeta de Crédito Santander Aeroméxico Infinite"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Acumulación acelerada de Puntos Premier */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Acumulación acelerada de{" "}
              <Link
                href="/soluciones-financieras/puntos"
                title="Puntos"
                className="text-gray-700 hover:text-[#D92D21]"
              >
                Puntos Premier
              </Link>
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los beneficios más atractivos de la tarjeta Santander
              Aeroméxico Infinite es la posibilidad de acumular Puntos Premier
              con cada compra que realices. Estos puntos se pueden utilizar para
              obtener boletos de avión, mejorar la clase en vuelos o acceder a
              otros servicios relacionados con Aeroméxico y las aerolíneas que
              forman parte de la alianza SkyTeam.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta Infinite te permite acumular puntos a una tasa más
              acelerada que otras tarjetas del mismo programa. Por cada dólar
              gastado en compras, puedes acumular hasta 2 Puntos Premier si
              pagas con esta tarjeta. Esto convierte cada compra diaria en una
              oportunidad para acumular puntos rápidamente y canjearlos por
              experiencias de viaje.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, las compras realizadas directamente con Aeroméxico te
              brindan un mayor porcentaje de acumulación, lo que significa que
              puedes ganar más puntos al reservar vuelos, pagar upgrades o
              comprar servicios adicionales.
            </p>

            {/* Section: Acceso a Salones Premier */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Acceso a Salones Premier
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Viajar se vuelve más cómodo cuando tienes acceso a los Salones
              Premier de Aeroméxico. Con la tarjeta Santander Aeroméxico
              Infinite, puedes disfrutar de este acceso exclusivo de manera
              gratuita. Estos salones están ubicados en los principales
              aeropuertos y ofrecen un espacio relajado donde puedes disfrutar
              de bebidas, alimentos y servicios como Wi-Fi gratuito mientras
              esperas tu vuelo.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este beneficio es especialmente valioso para los viajeros
              frecuentes, ya que convierte el tiempo de espera en una
              experiencia más cómoda y placentera. Además, el acceso a los
              Salones Premier te da la oportunidad de relajarte antes de un
              vuelo largo o de reponer energías durante escalas largas.
            </p>

            {/* Section: Boletos de acompañante */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Boletos de acompañante
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los grandes beneficios que diferencia a la Santander
              Aeroméxico Infinite de otras tarjetas es la posibilidad de obtener
              hasta 2 boletos de acompañante al año. Esto significa que al
              comprar un boleto con tu tarjeta, puedes llevar a un acompañante
              sin tener que pagar por su boleto. Este beneficio se aplica tanto
              en vuelos nacionales como internacionales con Aeroméxico, lo que
              te permite disfrutar de viajes en compañía sin incurrir en costos
              adicionales.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este es un beneficio muy atractivo para quienes disfrutan de
              viajar con familia, amigos o colegas, ya que reduce
              significativamente los costos de vuelo y te permite compartir la
              experiencia sin preocuparte por los precios elevados de los
              boletos de avión.
            </p>

            {/* Section: Seguros y protección en viajes */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Seguros y protección en viajes
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta Santander Aeroméxico Infinite también incluye una serie
              de seguros de viaje que te brindan tranquilidad en cada vuelo.
              Algunos de los seguros incluidos son:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguro de accidentes de viaje:
                  </strong>{" "}
                  Cubre gastos en caso de accidentes durante el vuelo.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección de equipaje:
                  </strong>{" "}
                  Cubre la pérdida o daño de tu equipaje.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cobertura de gastos médicos de emergencia:
                  </strong>{" "}
                  Te protege en caso de necesitar atención médica durante tu
                  viaje.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Estos seguros son fundamentales para los viajeros frecuentes, ya
              que ofrecen respaldo ante imprevistos que podrían afectar tus
              planes de viaje o generar costos adicionales. Saber que cuentas
              con este tipo de protección te permite viajar con más confianza.
            </p>

            {/* Section: Recompensas adicionales */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Recompensas adicionales
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios mencionados, la tarjeta Santander
              Aeroméxico Infinite te da acceso a una serie de recompensas y
              promociones exclusivas. A menudo, Santander y Aeroméxico lanzan
              promociones que permiten a los tarjetahabientes ganar puntos
              extra, descuentos en vuelos y upgrades exclusivos en ciertas
              temporadas.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, puedes acceder a{" "}
              <Link
                href="/soluciones-financieras/meses-sin-intereses"
                title="Meses sin intereses"
                className="text-[#D92D21] hover:underline"
              >
                meses sin intereses
              </Link>{" "}
              al hacer compras grandes o pagar servicios de viaje, lo que te
              permite planificar mejor tus gastos y disfrutar de mayor
              flexibilidad financiera.
            </p>

            {/* Section: Servicios VIP y atención preferencial */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Servicios VIP y atención preferencial
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Finalmente, la Santander Aeroméxico Infinite ofrece atención
              preferencial en diversos servicios, desde la gestión de tu cuenta
              hasta el servicio al cliente. Esta tarjeta incluye asistencia
              exclusiva a través de un servicio telefónico especializado para
              resolver dudas, ayudar con reservaciones y solucionar problemas
              relacionados con tu tarjeta.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Adicionalmente, tienes acceso a prioridad de embarque en vuelos de
              Aeroméxico, lo que te permite abordar el avión antes que otros
              pasajeros y asegurarte de que tu equipaje de mano se acomode
              fácilmente.
            </p>

            {/* Section: ¿Es ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta de crédito Santander Aeroméxico Infinite es una opción
              ideal para viajeros frecuentes que buscan aprovechar al máximo sus
              vuelos y disfrutar de una experiencia de viaje más cómoda y
              exclusiva. Desde la acumulación acelerada de Puntos Premier hasta
              el acceso gratuito a Salones Premier y la obtención de boletos de
              acompañante, esta tarjeta ofrece una serie de beneficios que hacen
              que cada viaje sea más placentero.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Si eres un viajero constante y cumples con los requisitos de
              ingreso, esta tarjeta puede convertirse en tu mejor aliada para
              disfrutar de viajes más cómodos y beneficiosos. ¡Solicítala hoy y
              comienza a acumular recompensas con cada vuelo!
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-infinite"
              className="block w-full mt-8"
            >
              <button
                className="w-full bg-[#D92D21] hover:bg-[#b91c1c] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors"
                style={{ backgroundColor: "#D92D21" }}
              >
                Quiero conocer los requisitos
              </button>
            </Link>
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-santander-aeromexico-infinite"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
