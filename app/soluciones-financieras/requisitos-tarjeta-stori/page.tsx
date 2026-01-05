import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar la Tarjeta Stori | Top Finanzas MX",
  description:
    "Conoce los requisitos, proceso de solicitud y ventajas de la Tarjeta Stori. Ideal para estudiantes y personas sin historial crediticio.",
};

// Green Arrow Icon Component
function GreenArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#22c55e" />
      <path
        d="M10 17L15 12L10 7"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RequisitosTarjetaStoriPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-stori"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requisitos para solicitar la Tarjeta Stori
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta Stori ofrece una entrada accesible y digital al crédito
              en México, ideal para estudiantes que inician su historial
              financiero.
            </p>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/stori-1.jpg"
                alt="Tarjeta Stori"
                width={800}
                height={450}
                className="w-full h-auto rounded-sm shadow-lg"
                priority
              />
            </div>

            {/* Section 1: Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Para aplicar a la Tarjeta Stori, necesitarás cumplir con los
              siguientes requisitos básicos:
            </h2>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Identificación Oficial (INE o IFE):
                  </strong>{" "}
                  Es crucial contar con una identificación oficial vigente. Este
                  documento es necesario para verificar tu identidad durante el
                  proceso de solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de Domicilio Reciente:
                  </strong>{" "}
                  Proporciona un comprobante de domicilio que no sea mayor a
                  tres meses para confirmar tu lugar de residencia actual.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Selfie:</strong> Importante
                  para verificar tu identidad. Asegúrate de tomar la foto sin
                  flash y en condiciones de buena iluminación.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Dispositivo Móvil con Capacidad de Internet:
                  </strong>{" "}
                  Deberás tener un smartphone con sistema operativo Android o
                  iOS. La gestión completa de tu tarjeta se realiza a través de
                  la aplicación Stori, que te permite controlar tus finanzas
                  desde cualquier lugar.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image: Eres estudiante */}
            <div className="mb-6">
              <Link href="/finanzas-personales/tarjetas-de-credito-para-estudiantes">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                  alt="¿Eres estudiante?"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm shadow-md"
                />
              </Link>
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
                  className="text-blue-600 hover:underline"
                >
                  Tarjetas de crédito para estudiantes
                </Link>
              </p>
            </div>

            {/* Section 2: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              El proceso para obtener tu Tarjeta Stori es rápido y sin
              complicaciones, permitiéndote manejar todo desde tu celular:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Descarga la aplicación Stori:
                  </strong>{" "}
                  Disponible tanto en Google Play como en Apple Store.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Registra tus Datos Personales:
                  </strong>{" "}
                  Sigue las instrucciones para ingresar tu información personal
                  y sube los documentos requeridos directamente a través de la
                  aplicación.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Espera la Aprobación:
                  </strong>{" "}
                  Stori evaluará tu solicitud basándose en los documentos
                  proporcionados. Recibirás una notificación sobre el estado de
                  tu solicitud por correo electrónico.
                </span>
              </li>
            </ul>

            {/* Image: Buscando el mejor préstamo */}
            <div className="mb-6">
              <Link href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                  alt="¿Buscando el mejor préstamo personal?"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm shadow-md"
                />
              </Link>
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                  className="text-blue-600 hover:underline"
                >
                  ¿Cuál es el mejor préstamo personal?
                </Link>
              </p>
            </div>

            {/* Section 3: Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ventajas de la Tarjeta Stori para Estudiantes
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta Stori ofrece varias características beneficiosas para
              estudiantes, como la ausencia de una anualidad y la posibilidad de
              ser aprobada incluso sin un historial crediticio. Esto la hace
              ideal para estudiantes que están empezando a construir su crédito.
              Además, el manejo completo a través de la aplicación móvil
              facilita el seguimiento de tus gastos y la gestión de tu cuenta
              desde cualquier lugar.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Acceso Sin Buró de Crédito:
                  </strong>{" "}
                  Aprobación posible incluso sin historial crediticio o con
                  historial negativo previo.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Aprobación del 99%:</strong>{" "}
                  Una alta tasa de aceptación facilita el acceso a la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Línea de Crédito de hasta $20,000:
                  </strong>{" "}
                  Suficiente para cubrir necesidades estudiantiles.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Sin Anualidad de por Vida:
                  </strong>{" "}
                  Reduce los costos recurrentes, ideal para presupuestos
                  estudiantiles.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Aceptación Internacional y Red de Cajeros:
                  </strong>{" "}
                  Usable globalmente gracias a Mastercard y una amplia red de
                  cajeros en México.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Tecnología Contactless:
                  </strong>{" "}
                  Realiza pagos rápidos y seguros simplemente acercando la
                  tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">App Stori Card:</strong>{" "}
                  Control total sobre tus movimientos financieros, disponible en
                  tu celular.
                </span>
              </li>
            </ul>

            {/* Image: Top tarjetas */}
            <div className="mb-6">
              <Link href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                  alt="Top tarjetas de crédito sin anualidad"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm shadow-md"
                />
              </Link>
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                  className="text-blue-600 hover:underline"
                >
                  Top tarjetas de crédito sin anualidad
                </Link>
              </p>
            </div>

            {/* Section 4: Aspectos a considerar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Aspectos a considerar
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              A pesar de sus beneficios, la Tarjeta Stori tiene algunas
              limitaciones, como una tasa de interés anual alta de hasta 99.9%.
              Esto subraya la importancia de pagar el balance completo cada mes
              para evitar intereses significativos. Además, la tarjeta no ofrece
              recompensas ni promociones de meses sin intereses, aspectos que
              pueden ser importantes para algunos usuarios.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Tasa de Interés y CAT:
                  </strong>{" "}
                  La tasa de interés anual es de 99.9% con un CAT de 147.38% sin
                  IVA, que es relevante al planificar tus gastos.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Sin Recompensas:</strong>{" "}
                  Mientras la tarjeta facilita el manejo del crédito, no ofrece
                  recompensas por las compras.
                </span>
              </li>
            </ul>

            {/* Image: Entiende el CAT */}
            <div className="mb-6">
              <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                  alt="Entiende el CAT en Tarjetas de Crédito"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-sm shadow-md"
                />
              </Link>
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/finanzas-personales/cat-en-tarjetas-de-credito"
                  className="text-blue-600 hover:underline"
                >
                  Entiende el CAT en Tarjetas de Crédito
                </Link>
              </p>
            </div>

            {/* Section 5: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Empieza tu viaje financiero con Stori
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              La Tarjeta Stori representa una excelente oportunidad para
              estudiantes que desean iniciar su historial crediticio con un
              producto que ofrece flexibilidad y control digital. Al entender
              completamente los requisitos y el proceso de solicitud, así como
              las ventajas y desventajas de la tarjeta, puedes tomar una
              decisión informada que alinee con tus necesidades y objetivos
              financieros.
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="https://www.storicard.com/stori-card"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-orange-600 transition-colors text-lg"
              >
                Ver ahora
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
