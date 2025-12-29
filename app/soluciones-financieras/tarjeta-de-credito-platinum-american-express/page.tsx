import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import ResponsiveImage from "@/components/ui/responsive-image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios de la tarjeta de Crédito Platinum American Express | Top Finanzas MX",
  description:
    "La Tarjeta Platinum American Express ofrece acceso a salones VIP, concierge 24/7, puntos Membership Rewards y seguros de viaje completos.",
};

// Blue Arrow Icon Component
function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#2563EB" />
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

export default function TarjetaPlatinumAmexPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-platinum-american-express"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de Crédito Platinum American Express
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Platinum American Express es reconocida en
              el mercado financiero por ofrecer una experiencia de lujo y
              exclusividad a sus usuarios.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso VIP en aeropuertos:
                  </strong>{" "}
                  Entrada a más de 1,200 salones VIP en aeropuertos de todo el
                  mundo.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Concierge 24/7:</strong>{" "}
                  Asistencia personalizada para reservas, eventos y viajes en
                  cualquier momento.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Puntos Membership Rewards:
                  </strong>{" "}
                  Acumula puntos con cada compra y canjéalos por productos,
                  viajes y experiencias sin fecha de caducidad.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguro de viaje completo:
                  </strong>{" "}
                  Cobertura ante emergencias médicas, cancelaciones y pérdida de
                  equipaje al viajar.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-platinum-american-express"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/download-7-min.webp"
                alt="Tarjeta de crédito Platinum American Express"
                className="rounded-sm shadow-md aspect-video w-full object-cover"
              />
            </div>

            {/* Body Content */}
            <div className="prose max-w-none text-gray-700">
              <p className="mb-6">
                Con una amplia gama de beneficios que van más allá de las
                compras cotidianas, esta tarjeta se convierte en un recurso
                valioso para aquellos que buscan servicios premium y recompensas
                excepcionales. A continuación, exploraremos en detalle los
                principales beneficios que hacen de la Platinum American Express
                una de las tarjetas más codiciadas en el mercado.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Acceso a salones VIP en aeropuertos
              </h2>
              <p className="mb-6">
                Uno de los beneficios más atractivos de la Tarjeta de Crédito
                Platinum American Express es el acceso a más de 1,200 salones
                VIP en aeropuertos alrededor del mundo. Esto incluye la red
                exclusiva de salones Centurion Lounge, que ofrece un espacio
                cómodo y lujoso para descansar antes de tomar un vuelo. Además,
                los titulares de la tarjeta pueden acceder a otras alianzas con
                aerolíneas que ofrecen servicios VIP. Esta ventaja es ideal para
                quienes viajan con frecuencia y desean evitar las multitudes,
                disfrutar de comida gourmet, conexión a internet de alta
                velocidad y espacios tranquilos para relajarse o trabajar.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Servicio de Concierge personalizado
              </h2>
              <p className="mb-6">
                El servicio de concierge 24/7 es otro de los pilares que
                destacan a la Platinum American Express. Este servicio está
                disponible en cualquier momento del día y puede asistirte en una
                amplia variedad de tareas, como hacer reservaciones en
                restaurantes exclusivos, organizar eventos especiales, planear
                itinerarios de viaje o incluso conseguir entradas para eventos
                agotados. El concierge se convierte en un asistente personal que
                te ayuda a resolver detalles cotidianos o más elaborados, con un
                enfoque completamente personalizado, lo que aporta comodidad y
                eficiencia a tu estilo de vida.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. Puntos Membership Rewards
              </h2>
              <p className="mb-6">
                Cada compra que realizas con la Tarjeta Platinum American
                Express te permite acumular puntos en el programa Membership
                Rewards, uno de los más versátiles del mercado. A diferencia de
                otros programas de recompensas, los puntos que acumulas no
                caducan, lo que te permite ahorrar y acumular puntos durante
                largos períodos para obtener recompensas de mayor valor. Estos
                puntos pueden canjearse por una amplia variedad de productos,
                desde artículos de lujo hasta boletos de avión y estancias en
                hoteles de primera clase. Además, existen promociones frecuentes
                donde puedes obtener puntos adicionales en ciertas categorías de
                gasto, maximizando tus recompensas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Seguros de viaje
              </h2>
              <p className="mb-6">
                Otro gran beneficio que ofrece la Platinum American Express es
                su extenso paquete de seguros de viaje. Al pagar tus boletos de
                avión o paquetes vacacionales con la tarjeta, automáticamente
                activas seguros que cubren desde cancelaciones de viaje hasta
                emergencias médicas. Además, incluye un seguro por pérdida de
                equipaje, demoras en vuelos, accidentes en el extranjero y
                gastos médicos de emergencia. Estos seguros están diseñados para
                darte tranquilidad mientras exploras el mundo, sabiendo que
                estás protegido ante imprevistos que puedan ocurrir en el
                camino.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Experiencias exclusivas y ofertas especiales
              </h2>
              <p className="mb-6">
                Ser titular de la Tarjeta Platinum American Express te abre las
                puertas a una serie de experiencias exclusivas que están fuera
                del alcance del público general. Desde cenas privadas con chefs
                de renombre, hasta entradas VIP para eventos deportivos,
                conciertos y espectáculos de gran demanda, la Platinum te brinda
                acceso prioritario y tratamientos preferenciales en una amplia
                gama de eventos. Además, los titulares pueden disfrutar de
                ofertas especiales en comercios seleccionados y recibir
                descuentos exclusivos en productos y servicios de lujo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Acceso a programas de recompensas en viajes
              </h2>
              <p className="mb-6">
                La Tarjeta Platinum American Express se asocia con diversas
                aerolíneas, hoteles y servicios de renta de autos para ofrecer a
                sus titulares mejoras significativas en sus viajes. Esto incluye
                desde mejoras gratuitas de habitación en hoteles de lujo, hasta
                acumulación acelerada de millas en aerolíneas asociadas.
                Adicionalmente, los usuarios pueden disfrutar de beneficios como
                el check-in prioritario, acceso a salones VIP y hasta noches
                gratuitas en ciertos hoteles cuando reservan a través de los
                programas asociados. Estos beneficios están pensados para
                aquellos que desean viajar con estilo y comodidad, sin
                sacrificar el lujo.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Servicio de Asistencia Global
              </h2>
              <p className="mb-6">
                Para aquellos que viajan frecuentemente o hacen negocios en el
                extranjero, el servicio de asistencia global es una herramienta
                invaluable. Este servicio está disponible para ayudarte con
                emergencias mientras te encuentras en otro país, ya sea que
                necesites asistencia médica, reemplazo de tarjetas de crédito en
                caso de pérdida o robo, o simplemente orientación en situaciones
                imprevistas. El soporte está disponible en múltiples idiomas y
                asegura que, sin importar dónde te encuentres, tendrás acceso a
                ayuda profesional en todo momento.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Programa Fine Hotels & Resorts
              </h2>
              <p className="mb-6">
                El Programa Fine Hotels & Resorts es exclusivo para titulares de
                la Platinum American Express y ofrece beneficios de lujo al
                reservar en más de 1,000 hoteles selectos alrededor del mundo.
                Entre los beneficios de este programa se incluyen mejoras de
                habitación, check-out extendido, desayunos gratuitos para dos
                personas y créditos para ser utilizados en servicios dentro del
                hotel, como restaurantes o spas. Estos beneficios no solo
                mejoran la experiencia de hospedaje, sino que permiten disfrutar
                de servicios adicionales sin costos extra.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Protección en compras
              </h2>
              <p className="mb-6">
                Además de los beneficios relacionados con viajes y experiencias,
                la Tarjeta Platinum American Express ofrece protección en tus
                compras. Con su protección contra fraudes, puedes hacer compras
                de alto valor con la tranquilidad de saber que estás cubierto
                ante cualquier uso no autorizado. Adicionalmente, la tarjeta
                ofrece protección contra daños accidentales o robos durante un
                periodo de tiempo después de la compra, asegurando que tus
                inversiones estén protegidas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ¿Es la opción ideal para ti?
              </h2>
              <p className="mb-6">
                La Tarjeta de Crédito Platinum American Express no es solo una
                tarjeta de crédito, sino una llave que abre puertas a un mundo
                de beneficios exclusivos y experiencias únicas. Ya sea que
                viajes frecuentemente, disfrutes de eventos de lujo o
                simplemente busques una tarjeta con un alto nivel de
                recompensas, la Platinum American Express está diseñada para
                ofrecer lo mejor en cada aspecto. Con su amplia gama de
                servicios y su enfoque en el bienestar y comodidad del titular,
                esta tarjeta es una excelente opción para aquellos que buscan
                una experiencia financiera superior.
              </p>
            </div>

            {/* CTA Button 2 */}
            <div className="flex justify-center mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-platinum-american-express"
                className="w-full md:w-auto"
              >
                <Button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Quiero conocer los requisitos
                </Button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
