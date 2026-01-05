import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para solicitar la tarjeta de Crédito Platinum American Express | Top Finanzas MX",
  description:
    "Conoce los requisitos, beneficios exclusivos y cómo solicitar la tarjeta de Crédito Platinum American Express.",
};

// Blue Arrow Icon Component
function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#2563eb" />
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

export default function RequisitosTarjetaPlatinumAmexPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-platinum-american-express"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta de Crédito Platinum American
              Express
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Platinum American Express es una opción
              premium diseñada para quienes buscan exclusividad, privilegios y
              un servicio personalizado.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-7-min.webp"
                alt="Tarjeta de Crédito Platinum American Express"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              A diferencia de otras tarjetas de crédito, la Platinum ofrece una
              amplia gama de beneficios que van más allá de lo financiero,
              incluyendo acceso a experiencias únicas y servicios de lujo en
              todo el mundo. En este artículo, te detallamos los requisitos
              clave para solicitarla y los principales beneficios que ofrece.
            </p>

            {/* Link 1 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </div>

            {/* CTA Banner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Conoce más
              </Link>
            </div>

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué debo hacer para solicitar la Tarjeta de Crédito Platinum
              American Express?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar la Tarjeta de Crédito Platinum American
              Express, es importante cumplir con ciertos requisitos que
              demuestran una estabilidad financiera sólida. A continuación,
              enumeramos los requisitos más importantes.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Platinum American Express requiere cumplir
              con varios criterios clave antes de poder ser solicitada. En
              primer lugar, es necesario tener al menos 18 años cumplidos para
              poder aplicar. Este es un requisito estándar en la mayoría de las
              tarjetas de crédito, aunque generalmente los usuarios de esta
              tarjeta suelen tener una carrera profesional o empresarial
              avanzada, dado el perfil de ingresos exigido.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              En cuanto a los ingresos, se requiere que el solicitante cuente
              con ingresos mensuales mínimos de entre $100,000 y $150,000 MXN.
              Este es uno de los requisitos más importantes, ya que la tarjeta
              está dirigida a personas con un alto nivel de ingresos, asegurando
              que puedan hacer frente a los pagos y disfrutar de los beneficios
              sin comprometer su estabilidad financiera.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Otro factor fundamental es el historial crediticio. Para poder
              obtener la Platinum, es necesario contar con un historial
              crediticio excelente, lo cual implica haber manejado
              responsablemente productos financieros como otras tarjetas de
              crédito o préstamos en el pasado. Un buen historial crediticio
              aumenta significativamente las posibilidades de ser aprobado.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Adicionalmente, se requiere presentar una identificación oficial
              vigente al momento de la solicitud. Esto puede ser el INE o el
              pasaporte, documentos válidos en México. También se debe
              proporcionar un comprobante de domicilio reciente, con una
              antigüedad no mayor a tres meses, el cual puede ser una factura de
              servicios como agua, luz o teléfono.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Finalmente, el solicitante debe completar la solicitud de la
              tarjeta ya sea en línea a través del sitio web oficial de American
              Express o acudiendo a una de sus sucursales. Es importante cumplir
              con todos los requisitos antes de enviar la solicitud para evitar
              retrasos en el proceso de aprobación.
            </p>

            {/* Link 2 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </div>

            {/* Benefits Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué se destaca de la tarjeta Platinum American Express?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos, es importante conocer los beneficios
              exclusivos que esta tarjeta ofrece, lo que la convierte en una de
              las más codiciadas en el mercado.
            </p>

            {/* CTA Banner 2 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Ver ahora
              </Link>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a salones VIP:
                  </strong>{" "}
                  Uno de los principales atractivos de la Platinum es el acceso
                  a más de 1,200 salones VIP en aeropuertos de todo el mundo.
                  Esto incluye la famosa red de salones Centurion de American
                  Express y otras alianzas con aerolíneas y servicios de lujo.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Servicios de concierge:
                  </strong>{" "}
                  La tarjeta ofrece un servicio de concierge 24/7 que se puede
                  utilizar para realizar reservas en restaurantes exclusivos,
                  planificar viajes personalizados o conseguir entradas a
                  eventos que suelen estar agotados. Este beneficio añade un
                  toque de comodidad y exclusividad a la vida diaria de los
                  titulares.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Puntos Membership Rewards:
                  </strong>{" "}
                  Con cada compra realizada con la tarjeta Platinum, los
                  usuarios acumulan puntos Membership Rewards, que pueden
                  canjear por productos, viajes o experiencias exclusivas. Estos
                  puntos no caducan, lo que significa que se pueden acumular a
                  lo largo del tiempo para obtener recompensas más valiosas.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguro de viaje:</strong> La
                  Platinum American Express ofrece un seguro de viaje que cubre
                  accidentes, retrasos y pérdida de equipaje. Este seguro es
                  útil para aquellos que viajan con frecuencia y desean estar
                  protegidos ante imprevistos mientras están fuera de casa.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ofertas y experiencias exclusivas:
                  </strong>{" "}
                  Los titulares de la tarjeta tienen acceso a ofertas especiales
                  y experiencias únicas que no están disponibles para el público
                  general. Esto puede incluir desde cenas privadas con chefs
                  reconocidos hasta acceso prioritario a eventos deportivos y
                  culturales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de recompensas en viajes:
                  </strong>{" "}
                  American Express tiene alianzas con cadenas hoteleras,
                  aerolíneas y servicios de renta de autos. Esto permite a los
                  titulares de la Platinum disfrutar de mejoras gratuitas de
                  habitación, descuentos en vuelos y otros beneficios exclusivos
                  durante sus viajes.
                </span>
              </li>
            </ul>

            {/* CTA Banner 3 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Ver ahora
              </Link>
            </div>

            {/* Link 3 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </div>

            {/* Other Topics */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué otros temas debería tener en cuenta?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Platinum American Express tiene una cuota
              anual considerablemente alta en comparación con otras tarjetas de
              crédito. Sin embargo, esta cuota se justifica por la gran cantidad
              de beneficios exclusivos que ofrece, especialmente para quienes
              buscan lujo, comodidad y servicios personalizados. Antes de
              solicitarla, es importante evaluar si los beneficios son acordes a
              tus hábitos de consumo y estilo de vida.
            </p>

            {/* CTA Banner 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Buscando el mejor préstamo personal"
            />
            <div className="flex justify-center mb-8">
              <Link
                href="/prestamos"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Descubre más
              </Link>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de Crédito Platinum American Express para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Platinum American Express es una opción
              ideal para personas con altos ingresos que desean acceder a
              experiencias exclusivas, servicios personalizados y beneficios
              premium. Si cumples con los requisitos y valoras los privilegios
              que ofrece, puede ser una excelente herramienta para mejorar tu
              experiencia financiera y de estilo de vida.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              ¿Estás listo para solicitarla? Si cumples con los requisitos
              mencionados y estás interesado en disfrutar de los beneficios que
              esta tarjeta ofrece, visita el sitio web de American Express y
              comienza tu proceso de solicitud hoy mismo.
            </p>

            {/* Final Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.americanexpress.com/mx/tarjetas-de-servicio/the-platinum-card/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-xl"
              >
                Ver en sitio oficial
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
