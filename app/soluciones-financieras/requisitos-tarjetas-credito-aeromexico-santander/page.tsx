import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander",
    },
  },
  title:
    "Requisitos para solicitar las tarjetas de crédito Aeroméxico Santander | Top Finanzas MX",
  description:
    "Las tarjetas de crédito Aeroméxico Santander ofrecen beneficios únicos para viajeros frecuentes. Conoce los requisitos y cómo solicitarlas.",
};

// Red Arrow Icon Component for Santander
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

export default function RequisitosAeromexicoSantanderPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjetas-credito-aeromexico-santander"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar las tarjetas de crédito Aeroméxico
              Santander
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Aeroméxico Santander ofrecen beneficios
              únicos para viajeros frecuentes, gracias a la alianza entre
              Aeroméxico y Santander México.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estas tarjetas están diseñadas para quienes buscan acumular millas
              y disfrutar de ventajas en viajes. A continuación, te presentamos
              los requisitos, características, beneficios y cómo solicitarlas.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Main Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg"
                alt="Tarjetas de Crédito Aeroméxico Santander"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* ¿Qué necesitas para solicitar las tarjetas de crédito Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué necesitas para solicitar las tarjetas de crédito Aeroméxico
              Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar una tarjeta Aeroméxico Santander, es importante
              cumplir con ciertos requisitos básicos. Estos varían según el tipo
              de tarjeta, pero a grandes rasgos, los principales requisitos son
              los siguientes:
            </p>

            {/* Standard ActionBanner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Tener entre
                  20 y 69 años.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Dependiendo de la tarjeta, se requiere un ingreso mínimo
                  mensual que puede variar entre $7,500 MXN a $100,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Recibo de servicios (agua, luz, teléfono) o estado de cuenta
                  bancario con menos de tres meses de antigüedad.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Tener un buen historial en Buró de Crédito es clave para la
                  aprobación. Santander revisa este registro antes de otorgar la
                  tarjeta.
                </span>
              </li>
            </ul>

            {/* Características de las tarjetas Aeroméxico Santander */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características de las tarjetas Aeroméxico Santander
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Aeroméxico Santander están disponibles en
              tres versiones, cada una con características y beneficios
              diseñados para distintos perfiles de ingresos.
            </p>

            {/* Standard ActionBanner 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            <p className="text-lg text-gray-700 mb-6 font-normal">
              La <strong>Aeroméxico Santander Blanca</strong> requiere un
              ingreso mínimo de $7,500 MXN, permite acumular Puntos Aeroméxico
              Rewards en cada compra y ofrece la posibilidad de diferir pagos en
              Aeroméxico a meses sin intereses.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La <strong>Aeroméxico Santander Platinum</strong> exige un ingreso
              mínimo de $50,000 MXN y brinda acceso sin costo a los Salones
              Premier para el titular y dos acompañantes, además de ofrecer una
              mayor acumulación de Puntos Aeroméxico Rewards por cada compra y
              beneficios exclusivos para viajes.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La <strong>Aeroméxico Santander Infinite</strong> es la opción más
              exclusiva, con un ingreso mínimo de $100,000 MXN, acceso ilimitado
              a Salones Premier, hasta 32,000 Puntos Aeroméxico Rewards de
              bienvenida, beneficios adicionales como ascensos a Clase Premier y
              equipaje adicional sin costo, así como seguros de viaje con
              cobertura internacional.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* ¿Qué puedo obtener de las tarjetas Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué puedo obtener de las tarjetas Aeroméxico Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Aeroméxico Santander ofrecen varios
              beneficios que las hacen atractivas para los viajeros frecuentes.
              Estos son algunos de los más destacados:
            </p>

            {/* Standard ActionBanner 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Dependiendo de la versión, acumulas Puntos Aeroméxico Rewards
                  que pueden canjearse por boletos de avión, upgrades y más
                  beneficios.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonos de bienvenida:
                  </strong>{" "}
                  Al activar tu tarjeta y realizar tus primeras compras, puedes
                  obtener una cantidad significativa de millas de regalo.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Permiten diferir pagos a meses sin intereses en Aeroméxico y
                  comercios afiliados.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Las tarjetas Platinum e Infinite ofrecen acceso sin costo a
                  los Salones Premier de Aeroméxico.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguros de viajes y protección:
                  </strong>{" "}
                  Platinum e Infinite incluyen seguros que cubren emergencias
                  médicas, pérdida de equipaje y más.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* ¿Cómo solicitar las tarjetas Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar las tarjetas Aeroméxico Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Solicitar una tarjeta Aeroméxico Santander es un proceso sencillo
              que puedes hacer de manera presencial en cualquier sucursal de
              Santander México o a través de su sitio web. A continuación, te
              explicamos los pasos:
            </p>

            {/* Standard ActionBanner 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Reúne la documentación:
                  </strong>{" "}
                  Asegúrate de tener a la mano tu identificación oficial,
                  comprobante de ingresos y comprobante de domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Llena la solicitud:</strong>{" "}
                  Puedes hacerlo directamente en una sucursal o desde la página
                  web de Santander.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  Una vez enviada tu solicitud, Santander revisará tu historial
                  crediticio y te notificará si fuiste aprobado para la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Activa tu tarjeta:</strong>{" "}
                  Al recibir tu tarjeta, no olvides activarla para comenzar a
                  disfrutar de todos los beneficios.
                </span>
              </li>
            </ul>

            {/* ¿Son las tarjetas de crédito Aeroméxico Santander para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Son las tarjetas de crédito Aeroméxico Santander para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas Aeroméxico Santander son ideales para quienes viajan
              con frecuencia y desean acumular Puntos Aeroméxico Rewards para
              vuelos y otros servicios. Con diferentes versiones adaptadas a
              distintos ingresos, ofrecen beneficios exclusivos como Salones
              Premier, meses sin intereses en Aeroméxico y seguros de viaje.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos, estas tarjetas pueden mejorar tu
              experiencia de viaje y brindarte recompensas en cada compra. Antes
              de solicitar una, revisa cuidadosamente sus beneficios para elegir
              la mejor opción.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              ¡Empieza a acumular puntos y disfruta de tus viajes con más
              comodidad y ventajas!
            </p>

            {/* CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.santander.com.mx/personas/tarjetas-de-credito/aeromexico.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#ec0000] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c00000] transition-colors text-lg"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-de-credito-aeromexico-santander"
                className="text-red-600 hover:underline"
              >
                Volver al análisis de Tarjetas Aeroméxico Santander
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-tarjetas-credito-aeromexico-santander"
        category="soluciones-financieras"
        subCategory="creditCards"
      />
      <CompactFooter />
    </main>
  );
}
