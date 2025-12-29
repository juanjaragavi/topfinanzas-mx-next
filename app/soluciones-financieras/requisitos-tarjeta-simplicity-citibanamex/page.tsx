import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos Tarjeta de Crédito Joy Banamex | Top Finanzas MX",
  description:
    "Conoce los Requisitos Tarjeta Joy Banamex y conoce si se ajusta a tu estilo de vida y a tus finanzas personales",
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

export default function RequisitosTarjetaSimplicityPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-simplicity-citibanamex"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos Tarjeta de crédito Joy Banamex
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tarjeta de crédito Joy de Banamex?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta Joy Banamex está diseñada para brindar comodidad y
              seguridad. No tiene números impresos, permite generar un CVV
              dinámico y ofrece promociones exclusivas como 2×1 en Cinépolis. Su
              aceptación global facilita su uso en compras físicas y digitales.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/foto1-1180x618.jpg"
                alt="Tarjeta de Crédito Joy Banamex"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Beneficios Principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios principales de la tarjeta Simplicity de Citibanamex
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin cuota anual:</strong>{" "}
                  Disponible con ingresos mínimos de $7,000 MXN. Evita la
                  comisión por inactividad realizando al menos una compra al
                  mes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones y descuentos exclusivos:
                  </strong>{" "}
                  Beneficios como 2x1 en Cinépolis, bonificaciones de hasta $500
                  por cargos recurrentes y meses sin intereses en comercios
                  participantes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad mejorada:</strong>{" "}
                  Tarjeta sin números impresos, CVV digital único para cada
                  compra y bloqueo desde la app para mayor protección.
                  Protección contra cargos no reconocidos hasta 48 horas previas
                  al reporte de robo o extravío.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gestión desde la app Banamex:
                  </strong>{" "}
                  Consulta saldo, paga tu tarjeta, bloquea o desbloquea tu
                  plástico y descarga estados de cuenta en cualquier momento.
                  También permite registrar pagos recurrentes y recibir
                  notificaciones de movimientos.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Solicitar Tarjeta Joy Banamex"
                fill
                className="object-contain"
              />
            </div>

            {/* Tasa de interés */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasa de interés y costos
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">CAT promedio:</strong> 84.4%
                  sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de interés promedio ponderada anual:
                  </strong>{" "}
                  62.76%.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisión por administración:
                  </strong>{" "}
                  $0.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisión por inactividad:
                  </strong>{" "}
                  $149 MXN sin IVA al mes (se exenta con compras de al menos $1
                  MXN al mes).
                </span>
              </li>
            </ul>

            {/* Tarjeta de crédito Joy de Banamex Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tarjeta de crédito Joy de Banamex?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta Joy Banamex está diseñada para brindar comodidad y
              seguridad. No tiene números impresos, permite generar un CVV
              dinámico y ofrece promociones exclusivas como 2×1 en Cinépolis. Su
              aceptación global facilita su uso en compras físicas y digitales.
            </p>

            {/* Joy Card Image */}
            <div className="relative w-full my-8 flex justify-center">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Tarjeta de crédito Joy de Banamex"
                width={400}
                height={250}
                className="rounded-xl shadow-lg"
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores-jovenes"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes.
              </Link>
            </p>

            {/* Image 3 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Beneficios Tarjeta Joy"
                fill
                className="object-contain"
              />
            </div>

            {/* Que debo hacer para tenerla */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué debo hacer para tenerla?
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Como con cualquier tarjeta de crédito, debes ser mayor de edad
                  para poder solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos mínimos de $7,000 pesos mensuales:
                  </strong>{" "}
                  Para ser elegible, debes contar con un ingreso mínimo mensual
                  de $7,000 pesos. Esto asegura que tienes la capacidad de
                  manejar el crédito de manera responsable.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Banamex evaluará tu historial crediticio para asegurarse de
                  que puedes manejar una línea de crédito. Tener un buen
                  historial aumentará tus posibilidades de ser aprobado.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial y comprobante de domicilio:
                  </strong>{" "}
                  Deberás presentar una identificación oficial vigente, como el
                  INE o el pasaporte, y un comprobante de domicilio reciente (no
                  mayor a tres meses).
                </span>
              </li>
            </ul>

            {/* Image 4 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Requisitos Tarjeta Joy"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Pasos a seguir */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué pasos debería seguir ahora?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta Joy Banamex es un proceso sencillo que puedes
              hacer tanto en línea como en una sucursal del banco. A
              continuación, te explicamos los pasos básicos que debes seguir:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completar la solicitud en línea o en sucursal:
                  </strong>{" "}
                  Puedes iniciar el proceso visitando el sitio web de
                  Citibanamex o acudiendo a una de sus sucursales. El banco te
                  pedirá que completes un formulario con tus datos personales,
                  como nombre, dirección, ingresos y empleo actual.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Envío de documentos:
                  </strong>{" "}
                  Una vez que hayas completado el formulario, deberás adjuntar
                  los documentos requeridos, como tu identificación oficial y
                  comprobante de domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Revisión del historial crediticio:
                  </strong>{" "}
                  Banamex llevará a cabo una revisión de tu historial crediticio
                  para evaluar tu capacidad de pago. Este proceso puede tardar
                  algunos días.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás tu tarjeta en pocos
                  días. Luego, podrás activarla y empezar a disfrutar de sus
                  beneficios.
                </span>
              </li>
            </ul>

            {/* Por que elegir */}
            {/* Image 5 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="Pasos para solicitar Tarjeta Joy"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir la tarjeta Joy Banamex?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Joy Banamex es una excelente opción para
              quienes buscan un producto financiero seguro y sin costos
              adicionales. Su combinación de sin cuota anual, sin comisión por
              administración y múltiples beneficios exclusivos la hace una
              alternativa atractiva para quienes desean controlar sus finanzas
              sin cargos innecesarios.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Además, permite acceder a promociones especiales, como 2×1 en
              Cinépolis y bonificaciones por pagos recurrentes, y cuenta con una
              plataforma digital avanzada que brinda seguridad adicional con su
              CVV digital y opciones de bloqueo desde la app. Su amplia
              aceptación en comercios nacionales e internacionales la convierte
              en una tarjeta versátil y confiable.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Ideal para ti */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la opción ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y buscas una tarjeta de crédito
              accesible, flexible y con beneficios exclusivos, la Joy Banamex es
              una opción ideal para gestionar tus compras de manera segura y
              eficiente.
            </p>

            {/* Final CTA */}
            <Link
              href="https://www.banamex.com/es/personas/tarjetas-credito/tarjeta-de-credito-sin-anualidad-simplicity.html"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
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
