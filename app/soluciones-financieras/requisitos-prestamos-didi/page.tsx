import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo con DiDi | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo con DiDi, una opción financiera rápida y segura para conductores y usuarios de la plataforma.",
};

// Custom Orange Arrow Icon Component (Matches #fc4c00 -> orange-600)
function OrangeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" className="fill-orange-600" />
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

export default function RequisitosPrestamosDidiPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-didi"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo con DiDi
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              En México, DiDi no solo se ha convertido en una plataforma popular
              de movilidad, sino que también ofrece una solución financiera a
              través de sus préstamos personales.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Esta opción es especialmente atractiva para conductores y socios
              que buscan obtener liquidez de manera rápida y segura. A
              continuación, te explicamos los requisitos para solicitar un
              préstamo con DiDi, así como el proceso paso a paso para que puedas
              aprovechar esta oportunidad financiera.
            </p>

            {/* Image 1 (Featured) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/didi-1-1-1.webp"
                alt="Préstamos DiDi"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Qué es el préstamo DiDi */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es el préstamo DiDi?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Los préstamos personales de DiDi son un producto financiero
              dirigido a conductores y usuarios de la plataforma, diseñado para
              ofrecer acceso a financiamiento con tasas competitivas y plazos
              flexibles. El objetivo de este servicio es brindar liquidez
              rápida, ya sea para afrontar gastos inesperados, mejorar el
              vehículo para los conductores o cubrir otras necesidades
              personales.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              A través de su aplicación, DiDi ofrece una experiencia de
              solicitud sencilla y sin complicaciones, permitiendo a los
              usuarios acceder a préstamos sin necesidad de acudir a una
              sucursal bancaria o realizar trámites extensos. Sin embargo, antes
              de iniciar el proceso de solicitud, es esencial cumplir con
              ciertos requisitos.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-orange-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 2 (Call to Action 1) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo DiDi"
            />

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo DiDi
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Antes de iniciar el proceso, es necesario que el solicitante
              cumpla con una serie de requisitos básicos que garantizan la
              elegibilidad para el préstamo. Estos requisitos aseguran que tanto
              la plataforma como el usuario tengan una experiencia confiable y
              segura. A continuación, se detallan los requisitos para solicitar
              un préstamo con DiDi:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser usuario activo de DiDi:
                  </strong>{" "}
                  Ya sea conductor o usuario frecuente, DiDi exige que los
                  solicitantes sean miembros activos de su plataforma. Esto
                  significa que debes tener una cuenta registrada y utilizar
                  regularmente los servicios de DiDi, ya sea para movilidad o
                  entrega de alimentos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con una identificación oficial vigente:
                  </strong>{" "}
                  Como en cualquier producto financiero, es imprescindible
                  contar con una identificación oficial vigente, como el INE o
                  pasaporte, que permita validar la identidad del solicitante.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Los solicitantes deben ser mayores de edad para poder acceder
                  al préstamo. En México, la mayoría de edad es a los 18 años.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tener una cuenta bancaria activa:
                  </strong>{" "}
                  DiDi requiere que los solicitantes cuenten con una cuenta
                  bancaria a su nombre, ya que el desembolso del préstamo se
                  realiza de forma electrónica. Es importante que la cuenta esté
                  a nombre del solicitante para evitar contratiempos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Aunque DiDi ofrece préstamos a usuarios con diferentes
                  perfiles crediticios, contar con un{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  favorable puede mejorar las condiciones del préstamo, como una
                  tasa de interés más baja o mayores montos de crédito.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 3 (Call to Action 3) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Requisitos Préstamos DiDi"
            />

            {/* Proceso */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso para solicitar el préstamo DiDi
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Una vez que cumplas con los requisitos anteriores, el siguiente
              paso es realizar la solicitud a través de la plataforma de DiDi.
              Aquí te explicamos el proceso paso a paso para obtener tu
              préstamo:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accede a la aplicación:
                  </strong>{" "}
                  Ingresa a la app de DiDi y busca la sección de "DiDi
                  Préstamos" o "DiDi Pay" en el menú principal.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completa la solicitud:
                  </strong>{" "}
                  Llena el formulario con tus datos personales y financieros.
                  Asegúrate de proporcionar información veraz para facilitar el
                  proceso de aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sube tus documentos:
                  </strong>{" "}
                  Adjunta una foto de tu identificación oficial y cualquier otro
                  documento que la plataforma te solicite para verificar tu
                  identidad.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  El sistema analizará tu perfil y te notificará en pocos
                  minutos si tu solicitud ha sido aprobada.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recibe tu dinero:</strong>{" "}
                  Una vez aprobado, el monto del préstamo será transferido a tu
                  cuenta bancaria registrada, generalmente en un plazo muy
                  corto.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-orange-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 4 (Call to Action 2) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Proceso Préstamo DiDi"
            />

            {/* Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de los préstamos DiDi
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Los préstamos DiDi ofrecen un atractivo distintivo para varios
              perfiles de consumidores. Aquí te detallo quiénes podrían
              considerar esta opción como su aliada ideal de finanzas:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Facilidad de acceso:
                  </strong>{" "}
                  Al ser una plataforma digital, el proceso de solicitud es
                  rápido y sencillo, sin necesidad de realizar visitas a
                  sucursales físicas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Transparencia:</strong> DiDi
                  ofrece condiciones claras desde el inicio, permitiéndote
                  conocer de antemano los costos y tasas aplicables antes de
                  aceptar el préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos flexibles:</strong>{" "}
                  Dependiendo de tu perfil, puedes obtener diferentes montos de
                  préstamo que se ajusten a tus necesidades.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Conveniencia:</strong> Los
                  conductores de DiDi pueden utilizar los préstamos para mejorar
                  su vehículo o cubrir otros gastos relacionados con su
                  actividad en la plataforma.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-orange-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Image 5 (Call to Action 4) */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Ventajas Préstamo DiDi"
            />

            {/* A tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              A tener en cuenta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar un préstamo con DiDi es una opción atractiva para
              usuarios activos de la plataforma que necesitan liquidez rápida y
              segura. Cumpliendo con los requisitos básicos y siguiendo el
              proceso de solicitud, podrás acceder a un préstamo que te permita
              cubrir tus necesidades financieras sin complicaciones.
            </p>

            <div className="mt-8 pt-8 border-t">
              <Link
                href="https://web.didiglobal.com/mx/prestamos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4 py-2 w-full md:w-auto"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/didi-prestamos"
                className="text-orange-600 hover:underline"
              >
                Volver al análisis de Préstamos DiDi
              </Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-didi"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
