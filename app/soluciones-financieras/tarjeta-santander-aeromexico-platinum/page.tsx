import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios de la tarjeta de crédito Santander Aeroméxico Platinum | Top Finanzas MX",
  description:
    "Descubre los beneficios de la tarjeta Santander Aeroméxico Platinum: vuelos con acompañante, Puntos Premier, acceso a Salones Premier y primer año sin anualidad.",
};

// Red Arrow Icon Component
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

export default function TarjetaSantanderAeromexicoPlatinumPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-santander-aeromexico-platinum"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Santander Aeroméxico Platinum
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Santander Aeroméxico Platinum está diseñada
              para viajeros frecuentes que buscan aprovechar al máximo sus
              experiencias de vuelo, así como para aquellos que quieren acumular
              puntos y disfrutar de beneficios exclusivos relacionados con el
              turismo y el entretenimiento.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Vuelos con acompañante:
                  </strong>{" "}
                  Hasta 2 boletos de acompañante por año.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/puntos"
                      title="Puntos"
                      className="text-red-600 hover:underline"
                    >
                      Puntos Premier
                    </Link>
                    :
                  </strong>{" "}
                  Gana puntos en cada compra y canjéalos por vuelos o mejoras.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Acceso VIP:</strong>{" "}
                  Disfruta de Salones Premier en aeropuertos seleccionados.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-red-600 hover:underline"
                    >
                      Primer año sin anualidad
                    </Link>
                    :
                  </strong>{" "}
                  Ahorra en costos el primer año con esta tarjeta.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-platinum/"
              className="block w-full"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Platinum-Santander-1-1.jpg"
                alt="Tarjeta Santander Aeroméxico Platinum"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              A continuación, te presentamos los beneficios más destacados de
              esta tarjeta en un formato claro y estructurado, basado en el
              modelo UX de TopFinanzas.
            </p>

            {/* Section: Primer año sin anualidad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Primer año sin anualidad
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los principales atractivos de la tarjeta Santander
              Aeroméxico Platinum es que no pagarás cuota anual durante el
              primer año. Esto te permite disfrutar de sus múltiples ventajas
              sin preocuparte por este cargo inicial. Después del primer año,
              aplica una cuota anual que puede ser de aproximadamente $5,300
              MXN, pero dependiendo de tu perfil crediticio o promociones
              vigentes, podrías recibir descuentos en esta cuota.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este beneficio de no anualidad inicial facilita la prueba de la
              tarjeta y sus servicios sin incurrir en gastos innecesarios, lo
              que es ideal si eres un viajero ocasional que quiere disfrutar de
              beneficios exclusivos sin compromiso financiero desde el
              principio.
            </p>

            {/* Section: Acumulación de Puntos Premier */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Acumulación de Puntos Premier
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El programa de Puntos Premier es uno de los beneficios más
              valorados de esta tarjeta. Por cada compra que realices, acumulas
              puntos que puedes canjear por boletos de avión, mejoras en vuelos,
              noches de hotel y otros servicios de viaje dentro del programa
              Club Premier Aeroméxico. El esquema de acumulación es:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">1.6 Puntos Premier:</strong>{" "}
                  Por cada dólar gastado en compras generales.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">2 Puntos Premier:</strong>{" "}
                  Por cada dólar gastado en compras realizadas en Aeroméxico.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Esto significa que, cuanto más utilices la tarjeta para tus
              compras diarias y viajes, más rápido podrás acceder a recompensas
              y experiencias de lujo. Los puntos acumulados pueden ser
              utilizados tanto en vuelos nacionales como internacionales, lo que
              la convierte en una excelente opción para quienes desean maximizar
              sus recompensas de viaje.
            </p>

            {/* Section: Boletos de acompañante */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Boletos de acompañante
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otro beneficio importante es la posibilidad de obtener hasta 2
              boletos de acompañante al año. Este privilegio te permite llevar a
              alguien contigo en tus viajes, pagando solo el boleto principal.
              Es una ventaja ideal para quienes suelen viajar en pareja o con
              familia y desean reducir el costo de los boletos de avión.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta oferta se aplica a los vuelos realizados con Aeroméxico y
              está sujeta a disponibilidad, pero representa una gran oportunidad
              de ahorro para los viajeros frecuentes.
            </p>

            {/* Section: Acceso a Salones Premier */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Acceso a Salones Premier
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Los titulares de la tarjeta Santander Aeroméxico Platinum tienen
              acceso gratuito a los Salones Premier de Aeroméxico, ubicados en
              varios aeropuertos del país. Estos espacios exclusivos brindan
              comodidad y un ambiente relajado mientras esperas tu vuelo,
              ofreciendo servicios como bebidas, snacks, Wi-Fi, y áreas de
              trabajo.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este acceso es especialmente valioso para quienes suelen pasar
              mucho tiempo en aeropuertos y buscan una experiencia más cómoda y
              placentera antes de sus vuelos.
            </p>

            {/* Section: Seguros de viaje */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Seguros de viaje
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Al pagar tus boletos de avión con la tarjeta Santander Aeroméxico
              Platinum, obtienes acceso a una variedad de seguros de viaje sin
              costo adicional. Estos seguros incluyen cobertura por accidentes
              en viajes, pérdida de equipaje, cancelación de vuelos, y otros
              incidentes que podrían afectar tus planes de viaje.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Tener estos seguros te proporciona tranquilidad y respaldo
              financiero en caso de que ocurra un imprevisto durante tu viaje,
              lo que reduce el riesgo y las preocupaciones relacionadas con
              problemas de transporte o equipaje.
            </p>

            {/* Section: Meses sin intereses */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              <Link
                href="/soluciones-financieras/meses-sin-intereses"
                title="Meses sin intereses"
                className="text-red-600 hover:underline"
              >
                Meses sin intereses
              </Link>
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              La tarjeta Santander Aeroméxico Platinum te permite aprovechar la
              opción de pagar a meses sin intereses en una amplia variedad de
              establecimientos participantes. Esta característica es
              particularmente útil para compras de alto valor, como boletos de
              avión, hospedaje o gadgets electrónicos. Pagar en plazos cómodos
              te permite gestionar mejor tus finanzas y hacer compras
              importantes sin generar intereses adicionales.
            </p>

            {/* Section: Descuentos exclusivos y promociones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Descuentos exclusivos y promociones
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Además de los beneficios ya mencionados, los usuarios de la
              tarjeta pueden acceder a descuentos y promociones exclusivas en
              categorías como entretenimiento, restaurantes y tiendas asociadas
              a Santander y Aeroméxico. Estas promociones pueden variar según la
              temporada, pero siempre proporcionan un valor añadido para los
              titulares de la tarjeta.
            </p>

            {/* Section: ¿Es la tarjeta de crédito Santander Aeroméxico Platinum ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Santander Aeroméxico Platinum ideal para
              ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Santander Aeroméxico Platinum es una
              excelente opción para viajeros frecuentes que buscan aprovechar al
              máximo sus experiencias de viaje a través de beneficios como
              acumulación de Puntos Premier, boletos de acompañante, y acceso a
              Salones Premier. Además, la posibilidad de no pagar anualidad el
              primer año y disfrutar de seguros de viaje y meses sin intereses
              la convierte en una herramienta financiera versátil y valiosa para
              quienes viajan regularmente por placer o por trabajo.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Si cumples con los requisitos y deseas optimizar tus viajes con
              recompensas y beneficios exclusivos, esta tarjeta puede ser una
              gran aliada para maximizar tu experiencia de vuelo. ¡Solicítala
              hoy y empieza a acumular puntos para tu próximo destino!
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-platinum/"
              className="block w-full mb-12"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
