import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo en Kueski | Top Finanzas MX",
  description:
    "Solicitar un préstamo en Kueski es sencillo. Conoce los requisitos básicos, para quién es ideal y cómo empezar tu solicitud en minutos.",
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

export default function RequisitosPrestamosKueskiPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-personales-kueski"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo en Kueski
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Solicitar un préstamo en Kueski es sencillo y transparente, con
              requisitos mínimos que permiten a más personas acceder a
              financiamiento sin las barreras tradicionales. A continuación, te
              presentamos los requisitos básicos que debes cumplir:
            </p>

            {/* Image 1 */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-2.webp"
                alt="Requisitos Préstamo Kueski"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Requisitos List */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de edad y de nacionalidad mexicana:
                  </strong>{" "}
                  Debes tener al menos 18 años y ser ciudadano mexicano para
                  poder solicitar un préstamo en Kueski.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente (INE/IFE):
                  </strong>{" "}
                  Se requiere una identificación oficial vigente para verificar
                  tu identidad y asegurar la legitimidad de la solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Número de celular mexicano y cuenta bancaria propia:
                  </strong>{" "}
                  Estos elementos son indispensables para el trámite del
                  préstamo. El número de celular se utiliza para mantener la
                  comunicación y la cuenta bancaria es donde se depositará el
                  dinero.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Perfil en el Buró de Crédito:
                  </strong>{" "}
                  Aunque Kueski revisa tu perfil en el Buró de Crédito, no es
                  necesario tener un historial crediticio perfecto. Esto lo hace
                  accesible para personas con un historial negativo o sin
                  historial crediticio.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 - Call to Action 1 */}
            <ActionBanner
              href="https://www.kueski.com/prestamos-sin-buro"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Kueski"
            />

            {/* Para quién es ideal Kueski */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal Kueski?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Kueski es una opción particularmente atractiva para ciertos
              perfiles y situaciones. Aquí te mostramos algunos ejemplos de
              cuándo Kueski podría ser la mejor opción para ti:
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-2">
              Personas sin historial crediticio
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Si nunca has tenido un crédito o tarjeta de crédito, es probable
              que no tengas un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>
              . Kueski permite que accedas a un préstamo sin necesidad de tener
              un historial previo, lo que es ideal para jóvenes que están
              comenzando a construir su perfil financiero.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/manejo-primer-salario/"
                className="text-blue-600 hover:underline"
              >
                Tu primer salario: manéjalo con inteligencia
              </Link>
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-2">
              Personas con historial crediticio negativo
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Aquellos que han tenido problemas con su crédito en el pasado y
              tienen un historial negativo en el Buró de Crédito, pueden
              encontrar en Kueski una segunda oportunidad para acceder a
              financiamiento. Kueski no descarta a los solicitantes por un mal
              historial, siempre y cuando cumplan con los otros requisitos.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 3 - Call to Action 3 */}
            <ActionBanner
              href="https://www.kueski.com/prestamos-sin-buro"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Kueski para todos"
            />

            <h3 className="text-xl font-bold text-gray-700 mt-6 mb-2">
              Necesidad de financiamiento rápido
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Kueski es ideal si necesitas dinero de manera urgente para cubrir
              gastos imprevistos. Su proceso 100% en línea permite obtener un
              préstamo en cuestión de minutos, sin la necesidad de trámites
              largos o complicados. Este tipo de financiamiento puede ser
              particularmente útil en situaciones como:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gastos Médicos de emergencia:
                  </strong>{" "}
                  Cuando enfrentas una emergencia médica y necesitas dinero
                  rápidamente, Kueski puede proporcionar los fondos necesarios
                  sin demoras.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Reparaciones de hogar:
                  </strong>{" "}
                  Si tu casa requiere reparaciones urgentes y no tienes
                  suficiente dinero en efectivo, un préstamo rápido de Kueski
                  puede ser la solución.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Imprevistos de última hora:
                  </strong>{" "}
                  Desde un viaje inesperado hasta el reemplazo urgente de un
                  electrodoméstico, Kueski te permite acceder a crédito
                  rápidamente para cubrir estos gastos.
                </span>
              </li>
            </ul>

            {/* Image 4 - Call to Action 2 */}
            <ActionBanner
              href="https://www.kueski.com/prestamos-sin-buro"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Financiamiento rápido Kueski"
            />

            {/* Evalúa tus necesidades */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Evalúa tus necesidades
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Aunque Kueski facilita el acceso a crédito, es crucial que los
              solicitantes evalúen su capacidad de pago antes de solicitar un
              préstamo. Considera los siguientes consejos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evalúa tu capacidad de pago:
                  </strong>{" "}
                  Asegúrate de que puedes cumplir con los pagos mensuales antes
                  de solicitar un préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicita solo lo necesario:
                  </strong>{" "}
                  Pide solo la cantidad que realmente necesitas para evitar
                  problemas financieros.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Compara opciones:</strong>{" "}
                  Aunque Kueski es una opción viable, compara con otras
                  alternativas en el mercado para asegurarte de que estás
                  tomando la mejor decisión.
                </span>
              </li>
            </ul>

            {/* Image 5 - Call to Action 4 */}
            <ActionBanner
              href="https://www.kueski.com/prestamos-sin-buro"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Consejos Préstamos Kueski"
            />

            {/* Listo para comenzar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Listo para comenzar?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y has evaluado tu situación
              financiera, solicitar un préstamo en Kueski es un paso sencillo y
              seguro hacia la obtención del financiamiento que necesitas. Haz
              clic aquí para conocer más detalles y comenzar tu solicitud.
            </p>

            {/* Final CTA */}
            <Link
              href="https://www.kueski.com/prestamos-sin-buro"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
              </button>
            </Link>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/kueski-prestamos"
                className="text-blue-600 hover:underline"
              >
                Volver al análisis de Préstamos Kueski
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts currentSlug="requisitos-prestamos-personales-kueski" />
      <CompactFooter />
    </main>
  );
}
