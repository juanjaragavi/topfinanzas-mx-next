import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import { RelatedPosts } from "@/components/blog/related-posts";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-gold-card-american-express-aeromexico",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-gold-card-american-express-aeromexico",
    },
  },
  title:
    "Requisitos para solicitar la Gold Card American Express® Aeroméxico | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la Gold Card American Express Aeroméxico, documentación necesaria, ingresos mínimos y ventajas adicionales.",
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

export default function RequisitosGoldCardAmexAeromexicoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-gold-card-american-express-aeromexico"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Conoce los requisitos Gold Card American Express® Aeroméxico
            </h1>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/gold-card-american-express-aeromexico"
                className="text-blue-600 hover:underline"
              >
                Volver al análisis de Gold Card Amex Aeroméxico
              </Link>
            </div>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás buscando una tarjeta de crédito que combine exclusividad,
              beneficios en viajes y un respaldo confiable, la Gold Card
              American Express Aeroméxico es una opción que merece tu atención.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-4-1.webp"
                alt="Gold Card American Express® Aeroméxico"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              En este artículo te contamos todo lo que necesitas saber sobre los
              requisitos, beneficios y ventajas de esta tarjeta para que puedas
              tomar una decisión informada.
            </p>

            {/* ¿Qué es la Gold Card American Express Aeroméxico? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la Gold Card American Express Aeroméxico?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Gold Card American Express Aeroméxico es una tarjeta de crédito
              diseñada para quienes buscan optimizar sus gastos y disfrutar de
              beneficios exclusivos al viajar. Esta tarjeta es ideal si
              frecuentemente viajas por Aeroméxico, ya que te ofrece
              recompensas, acumulación de puntos y experiencias premium que
              enriquecen cada viaje.
            </p>

            {/* Requisitos para Solicitar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para Solicitar la Gold Card American Express Aeroméxico
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para obtener esta tarjeta, debes cumplir con ciertos criterios
              establecidos por American Express. Aquí te dejamos los principales
              requisitos:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad mínima:</strong> Tener
                  al menos 18 años cumplidos para aplicar.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Residencia:</strong> Ser
                  residente en México.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Contar con un buen{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>
                  . Esto significa que debes haber manejado correctamente
                  créditos previos o actuales, como otras tarjetas de crédito,
                  préstamos o financiamientos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingreso mensual mínimo:
                  </strong>{" "}
                  Demostrar ingresos mensuales de al menos $20,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Documentación requerida:
                  </strong>{" "}
                  Identificación oficial vigente: INE o pasaporte, comprobante
                  de domicilio: Recibo de luz, agua o teléfono no mayor a 3
                  meses y comprobante de ingresos: Recibos de nómina, estados de
                  cuenta o declaraciones fiscales que respalden tu solvencia
                  económica.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Es importante que cumplas con cada uno de estos requisitos para
              agilizar el proceso de aprobación.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Standard ActionBanner 1 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />

            {/* ¿Qué tiene de especial? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué tiene de especial la Gold Card American Express Aeroméxico?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Obtener esta tarjeta no solo te otorga acceso a crédito, sino
              también a una serie de beneficios exclusivos que pueden
              transformar tu experiencia de viaje y manejo de finanzas
              personales. Aquí te mencionamos los más destacados:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos Club Premier:
                  </strong>{" "}
                  Cada vez que utilices tu tarjeta, acumularás Puntos Premier,
                  que puedes canjear por boletos de avión, ascensos de clase,
                  noches de hotel y mucho más.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios en vuelos Aeroméxico:
                  </strong>{" "}
                  Acceso a vuelos preferenciales y promociones exclusivas y
                  acumulación de millas adicionales al reservar con Aeroméxico.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salas Premier:
                  </strong>{" "}
                  Disfruta de salas exclusivas en aeropuertos para mayor
                  comodidad antes de tus vuelos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Coberturas de viaje:
                  </strong>{" "}
                  Incluye seguros como protección de equipaje, accidentes en
                  viajes y asistencia médica de emergencia cuando pagas tus
                  vuelos con esta tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Participa en eventos privados, ofertas especiales y descuentos
                  en comercios asociados a American Express.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Acceso a promociones de meses sin intereses en una amplia gama
                  de establecimientos.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Standard ActionBanner 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            {/* Ventajas Adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas Adicionales
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Reconocimiento global:
                  </strong>{" "}
                  Como parte de la familia American Express, tendrás la
                  seguridad de que tu tarjeta será aceptada en miles de
                  comercios a nivel internacional.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Atención personalizada:
                  </strong>{" "}
                  Servicio al cliente disponible las 24 horas para resolver
                  cualquier duda o problema relacionado con tu tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en pagos:
                  </strong>{" "}
                  Puedes realizar pagos mínimos, diferir compras y manejar tus
                  finanzas con facilidad desde la app de American Express.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Standard ActionBanner 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            {/* ¿Cómo Solicitar? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo Solicitar la Gold Card American Express Aeroméxico?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si ya cuentas con los requisitos necesarios, sigue estos pasos
              para realizar tu solicitud:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accede al sitio web de American Express:
                  </strong>{" "}
                  Dirígete a la página oficial de American Express México y
                  selecciona la Gold Card American Express Aeroméxico.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Llena el formulario en línea:
                  </strong>{" "}
                  Completa los datos personales, financieros y laborales que se
                  te soliciten.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Adjunta la documentación requerida:
                  </strong>{" "}
                  Asegúrate de cargar todos los documentos necesarios en formato
                  digital.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la evaluación:
                  </strong>{" "}
                  Una vez enviada tu solicitud, el equipo de American Express
                  evaluará tu información y se pondrá en contacto contigo para
                  confirmar si eres elegible.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Preguntas Frecuentes */}
            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Preguntas Frecuentes
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    ¿Qué pasa si no cumplo con el ingreso mensual mínimo?:
                  </strong>{" "}
                  Si no alcanzas el ingreso requerido, considera otras tarjetas
                  de crédito con requisitos más accesibles o mejora tu historial
                  crediticio antes de aplicar.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    ¿La tarjeta tiene costo anual?:
                  </strong>{" "}
                  Sí, la Gold Card American Express Aeroméxico tiene una cuota
                  anual, pero los beneficios suelen compensar este costo,
                  especialmente si viajas con frecuencia.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    ¿Qué pasa si pierdo mi tarjeta?:
                  </strong>{" "}
                  American Express ofrece reposición rápida de tarjeta y
                  protección contra cargos no autorizados.
                </span>
              </li>
            </ul>

            {/* Standard ActionBanner 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />

            {/* ¿Es para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la Gold Card American Express Aeroméxico para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Gold Card American Express Aeroméxico es una herramienta
              financiera ideal para quienes buscan maximizar sus beneficios al
              viajar. Desde recompensas en vuelos hasta servicios exclusivos,
              esta tarjeta es mucho más que una línea de crédito: es una
              inversión en experiencias únicas.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y quieres disfrutar de todos estos
              beneficios, no dudes en solicitarla y transformar la forma en la
              que manejas tus finanzas y planeas tus viajes. ¡Tu próxima
              aventura comienza aquí!
            </p>

            {/* CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.americanexpress.com/mx/tarjetas-de-servicio/aeromexico-gold-card"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#00142c] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-900 transition-colors text-lg"
              >
                Solicitar ahora
              </Link>
            </div>

            <RelatedPosts
              currentSlug="requisitos-gold-card-american-express-aeromexico"
              category="soluciones-financieras"
              subCategory="creditCards"
            />
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
