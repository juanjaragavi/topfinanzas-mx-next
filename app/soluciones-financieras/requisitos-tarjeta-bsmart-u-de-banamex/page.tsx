import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos Tarjeta Bsmart U Banamex | Top Finanzas MX",
  description:
    "Conoce los requisitos de la Tarjeta Bsmart U de Banamex para estudiantes universitarios. Inicia tu historial crediticio con beneficios exclusivos.",
};

// Sky Arrow Icon Component matched to #014785 equivalent (sky-800)
function SkyArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#075985" />
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

export default function RequisitosTarjetaBsmartUBanamexPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-bsmart-u-de-banamex"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta Bsmart U de Banamex
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Bsmart U de Banamex es una excelente opción
              para jóvenes universitarios que buscan tener su primera tarjeta de
              crédito, con beneficios pensados para su estilo de vida. A
              continuación, te presentamos los requisitos clave y el proceso de
              solicitud para obtener esta tarjeta, siguiendo un formato claro y
              accesible, que te permitirá conocer cómo puedes acceder a este
              producto financiero.
            </p>

            {/* Image 1: Main */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/Citibanamex-B•Smart-U-1.webp"
                alt="Tarjeta Bsmart U de Banamex"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section 1: Qué es */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta Bsmart U de Banamex?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Bsmart U de Banamex está diseñada específicamente para
              estudiantes universitarios que desean comenzar a construir su
              historial crediticio mientras disfrutan de beneficios adaptados a
              sus necesidades. Ofrece promociones exclusivas, recompensas por
              tus compras y acceso a diversas herramientas de administración
              financiera, facilitando el manejo de los gastos y ayudando a
              adquirir buenos hábitos financieros desde una etapa temprana.
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
              alt="Tarjetas para estudiantes"
            />

            {/* Section 2: Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué se necesita?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar esta tarjeta de crédito, es necesario cumplir con
              una serie de requisitos básicos que aseguran que el solicitante
              esté preparado para manejar un crédito. A continuación, te
              presentamos los principales requisitos:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser estudiante universitario activo:
                  </strong>{" "}
                  Uno de los requisitos fundamentales para acceder a la tarjeta
                  Bsmart U es estar inscrito en una institución educativa de
                  nivel superior. Deberás presentar una constancia de estudios o
                  credencial universitaria que acredite tu estatus de estudiante
                  activo.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Edad entre 18 y 24 años:
                  </strong>{" "}
                  Esta tarjeta está pensada para jóvenes entre los 18 y 24 años,
                  por lo que es importante que te encuentres dentro de este
                  rango de edad al momento de hacer la solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos o referencia de tus padres:
                  </strong>{" "}
                  Aunque no es obligatorio que el solicitante tenga ingresos
                  propios, Banamex puede pedir una carta de recomendación de los
                  padres o tutores que respalde la solicitud. Si tienes
                  ingresos, aunque sean bajos, es recomendable presentarlos para
                  facilitar la aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Como en toda solicitud de crédito, necesitarás presentar una
                  copia de tu identificación oficial, ya sea INE o pasaporte,
                  para comprobar tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es fundamental entregar un comprobante de domicilio reciente
                  (no mayor a tres meses), que puede ser un recibo de luz, agua,
                  teléfono o cualquier otro servicio que verifique tu lugar de
                  residencia.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio no requerido:
                  </strong>{" "}
                  Una de las grandes ventajas de la tarjeta Bsmart U es que no
                  necesitas tener un historial crediticio previo. Esto la
                  convierte en una excelente opción para jóvenes que buscan
                  comenzar a construir su historial financiero.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-sky-800 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Image 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="CAT en tarjetas de crédito"
            />

            {/* Section 3: Proceso */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud de la tarjeta Bsmart U
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso de solicitud para la tarjeta Bsmart U es sencillo y
              está diseñado para facilitar el acceso a los estudiantes. Sigue
              estos pasos para obtenerla:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Registro en línea:</strong>{" "}
                  El primer paso para solicitar tu tarjeta es ingresar al sitio
                  web de Banamex y buscar la opción de la tarjeta Bsmart U. Aquí
                  podrás iniciar tu proceso de solicitud llenando un formulario
                  en línea con tus datos personales y académicos.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Envío de documentos:
                  </strong>{" "}
                  Una vez completado el formulario, deberás enviar tus
                  documentos de identificación, comprobante de domicilio y, si
                  es necesario, la carta de recomendación de tus padres o
                  tutores.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de la solicitud:
                  </strong>{" "}
                  Banamex evaluará tu solicitud, considerando tu estatus de
                  estudiante y la información proporcionada. En caso de que
                  necesiten información adicional, el banco se pondrá en
                  contacto contigo.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega:
                  </strong>{" "}
                  Si tu solicitud es aprobada, Banamex te notificará y recibirás
                  tu tarjeta en la dirección registrada. Una vez que tengas tu
                  tarjeta, podrás activarla y comenzar a usarla para hacer tus
                  compras y aprovechar los beneficios que ofrece.
                </span>
              </li>
            </ul>

            {/* Image 4 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas sin anualidad"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-sky-800 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Section 4: Lo bueno */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Lo bueno de la tarjeta Bsmart U de Banamex
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Bsmart U de Banamex no solo es una herramienta para
              iniciar tu historial crediticio, sino que también cuenta con
              múltiples beneficios diseñados para jóvenes estudiantes. A
              continuación, te presentamos algunos de los más destacados:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descuentos y promociones exclusivas:
                  </strong>{" "}
                  Como titular de la tarjeta Bsmart U, tendrás acceso a
                  promociones exclusivas en diversas tiendas y servicios,
                  incluyendo descuentos en compras en línea, restaurantes,
                  entretenimiento y más.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Cada compra que realices con la tarjeta Bsmart U te permitirá
                  acumular puntos, que luego podrás canjear por productos,
                  descuentos o recompensas en el programa de puntos de Banamex.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección contra fraudes:
                  </strong>{" "}
                  La tarjeta cuenta con tecnología de chip y con un robusto
                  sistema de protección que monitorea y alerta de cualquier
                  actividad inusual en tu cuenta, brindándote tranquilidad al
                  realizar tus compras.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Herramientas de administración financiera:
                  </strong>{" "}
                  Banamex ofrece diversas herramientas digitales para que puedas
                  administrar y controlar tus gastos desde la comodidad de tu
                  celular, con alertas de pago y recordatorios para evitar
                  atrasos en tus facturas.
                </span>
              </li>
            </ul>

            {/* Image 5 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Mejor préstamo personal"
            />

            {/* Section 5: Es para ti */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Bsmart U de Banamex para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Bsmart U de Banamex es una excelente opción
              para los jóvenes universitarios que buscan iniciar su vida
              financiera de manera responsable. Con requisitos accesibles y un
              proceso de solicitud sencillo, esta tarjeta ofrece beneficios
              pensados para estudiantes, como promociones exclusivas,
              acumulación de puntos y herramientas para gestionar tus finanzas.
              Si estás buscando una tarjeta de crédito para empezar a construir
              tu historial crediticio y aprovechar ventajas exclusivas, la
              tarjeta Bsmart U de Banamex es una gran opción.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
