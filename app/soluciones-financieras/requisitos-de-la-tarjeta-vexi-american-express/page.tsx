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
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-de-la-tarjeta-vexi-american-express",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-de-la-tarjeta-vexi-american-express",
    },
  },
  title: "Requisitos Tarjeta Vexi American Express | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la Tarjeta Vexi American Express. Ideal para iniciar o reconstruir tu historial crediticio con beneficios exclusivos.",
};

// Sky Arrow Icon Component matched to #0eb2e3 equivalent (sky-500)
function SkyArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-500 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosTarjetaVexiAmexPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-de-la-tarjeta-vexi-american-express"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta Vexi American Express
            </h1>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/tarjeta-vexi-american-express"
                className="text-sky-500 hover:underline"
              >
                Volver al análisis de Tarjeta Vexi Amex
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
              Descubre los pasos y requisitos esenciales para obtener tu Tarjeta
              de Crédito Vexi American Express, diseñada para ofrecer
              simplicidad y transparencia, eliminando las complicaciones típicas
              de las tarjetas tradicionales.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Esta tarjeta ofrece una combinación de beneficios exclusivos de la
              red American Express y las ventajas de la plataforma Vexi,
              enfocada en personas con poca o nula experiencia crediticia, así
              como aquellos que buscan mejorar su historial crediticio. A
              continuación, detallamos los requisitos necesarios para solicitar
              esta tarjeta y cómo puedes obtenerla.
            </p>

            {/* Image 1: Main */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/VEXI-1-1.webp"
                alt="Tarjeta Vexi American Express"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-sky-500 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Section 1: Qué es */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta Vexi American Express?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Vexi American Express es una solución financiera
              accesible que tiene como objetivo ayudar a los usuarios a mejorar
              su{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>
              , a la vez que ofrece beneficios y recompensas de American
              Express. Con una solicitud en línea sencilla y sin necesidad de
              tener un historial crediticio perfecto, esta tarjeta es ideal para
              quienes están comenzando su viaje financiero o quieren reconstruir
              su crédito.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="¿Eres estudiante?"
            />

            {/* Section 2: Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar la tarjeta Vexi American Express
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar la tarjeta Vexi American Express, es importante
              que conozcas los requisitos y documentos necesarios para facilitar
              el proceso y aumentar tus posibilidades de aprobación.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Para solicitar esta tarjeta, debes tener al menos 18 años de
                  edad y ser residente en México.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con identificación oficial vigente:
                  </strong>{" "}
                  Como parte del proceso de solicitud, se debe presentar una
                  identificación oficial vigente como el INE o pasaporte para
                  confirmar tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio reciente:
                  </strong>{" "}
                  Es necesario proporcionar un comprobante de domicilio con una
                  antigüedad no mayor a tres meses. Esto puede ser un recibo de
                  luz, agua, teléfono, entre otros servicios.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos comprobables mínimos de $2,000 MXN mensuales:
                  </strong>{" "}
                  La tarjeta Vexi American Express requiere que el solicitante
                  cuente con ingresos mínimos comprobables de $2,000 pesos
                  mexicanos al mes. Para ello, puedes proporcionar recibos de
                  nómina o estados de cuenta bancarios.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    No es necesario contar con historial crediticio:
                  </strong>{" "}
                  A diferencia de muchas tarjetas de crédito tradicionales, la
                  Vexi American Express no exige un historial crediticio previo,
                  lo que la convierte en una opción atractiva para personas que
                  buscan empezar a construir su crédito.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud 100% en línea:
                  </strong>{" "}
                  Todo el proceso de solicitud se realiza de manera digital, lo
                  que facilita el acceso desde cualquier lugar y reduce los
                  tiempos de espera.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-sky-500 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            {/* Section 3: Proceso */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso para solicitar la tarjeta Vexi American Express es
              sencillo y está diseñado para ser accesible, incluso para quienes
              no tienen experiencia previa con tarjetas de crédito. A
              continuación, te explicamos los pasos a seguir para completar tu
              solicitud.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en la plataforma Vexi:
                  </strong>{" "}
                  El primer paso es ingresar al sitio web oficial de Vexi y
                  crear una cuenta. Para ello, deberás proporcionar tu nombre
                  completo, correo electrónico y número de teléfono.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completa el formulario de solicitud:
                  </strong>{" "}
                  Una vez registrado, deberás llenar un formulario en línea
                  donde se te solicitará información personal, como tu
                  dirección, datos de empleo e ingresos.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Verificación de documentos:
                  </strong>{" "}
                  Durante este paso, deberás cargar una copia de tu
                  identificación oficial, así como un comprobante de domicilio
                  reciente. Estos documentos serán revisados por el equipo de
                  Vexi para validar tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Análisis de la solicitud:
                  </strong>{" "}
                  Vexi evaluará tu información y determinará tu capacidad de
                  pago. Si cumples con los requisitos, recibirás una respuesta
                  en poco tiempo indicando si tu solicitud ha sido aprobada.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega:
                  </strong>{" "}
                  Si tu solicitud es aprobada, Vexi te enviará la tarjeta a la
                  dirección que proporcionaste. El envío suele tomar algunos
                  días hábiles, y una vez que la recibas, podrás activarla a
                  través de la plataforma para comenzar a usarla.
                </span>
              </li>
            </ul>

            {/* Image 4 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-sky-500 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Section 4: Aspectos atractivos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Aspectos atractivos de la tarjeta Vexi American Express
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Vexi American Express no solo es accesible para
              personas con ingresos bajos o sin historial crediticio, sino que
              también ofrece una serie de beneficios adicionales que la hacen
              atractiva. Aquí te mencionamos algunos de los más destacados:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Red de aceptación American Express:
                  </strong>{" "}
                  Al estar respaldada por American Express, esta tarjeta es
                  aceptada en millones de establecimientos a nivel global, lo
                  que la convierte en una excelente opción para quienes buscan
                  viajar o realizar compras internacionales.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones y descuentos exclusivos:
                  </strong>{" "}
                  Como parte de la red American Express, los usuarios de la
                  tarjeta Vexi pueden acceder a promociones y descuentos
                  especiales en una amplia gama de categorías, como
                  entretenimiento, restaurantes y viajes.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cashback en compras:
                  </strong>{" "}
                  La tarjeta Vexi American Express ofrece recompensas en
                  efectivo por tus compras, lo que te permite obtener un
                  porcentaje de devolución en ciertos consumos.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Herramientas para mejorar tu historial crediticio:
                  </strong>{" "}
                  La plataforma Vexi está diseñada para ayudar a los usuarios a
                  construir un historial crediticio positivo. Si realizas tus
                  pagos a tiempo y manejas tu línea de crédito de manera
                  responsable, verás una mejora en tu calificación crediticia
                  con el tiempo.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin anualidad el primer año:
                  </strong>{" "}
                  Durante el primer año, no pagarás cuota anual, lo que te
                  permite probar la tarjeta y disfrutar de sus beneficios sin
                  costos adicionales. A partir del segundo año, la cuota anual
                  será de $499 MXN, una tarifa competitiva para el mercado.
                </span>
              </li>
            </ul>

            {/* Image 5 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Buscando el mejor préstamo personal?"
            />

            {/* Section 5: Es para ti */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Vexi American Express para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Vexi American Express es una excelente opción para
              quienes buscan acceso a crédito con un proceso de solicitud
              sencillo y sin la necesidad de tener un historial crediticio
              previo. Con beneficios como recompensas en efectivo, promociones
              exclusivas y aceptación global gracias a la red American Express,
              esta tarjeta se posiciona como una herramienta financiera flexible
              y accesible.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás buscando una tarjeta de crédito para comenzar a construir
              tu historial crediticio o mejorar tu situación financiera actual,
              la tarjeta Vexi American Express podría ser la solución que
              necesitas. No pierdas la oportunidad de aprovechar esta opción y
              comienza tu camino hacia una mejor salud financiera.
            </p>

            {/* External CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://solicitud.vexi.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full hover:bg-sky-600 transition-colors text-lg"
              >
                Solicitar ahora
              </Link>
            </div>

            <RelatedPosts
              currentSlug="requisitos-de-la-tarjeta-vexi-american-express"
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
