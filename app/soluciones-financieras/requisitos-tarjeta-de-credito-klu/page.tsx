import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para solicitar la tarjeta de crédito Klu | Top Finanzas MX",
  description:
    "Conoce los requisitos, beneficios y proceso de solicitud de la tarjeta de crédito Klu. Una opción accesible sin anualidad para construir historial crediticio.",
};

// Slate Arrow Icon Component (Color: #5d6f82 approx Slate-500)
function SlateArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-slate-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#64748b" />
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

export default function RequisitosTarjetaKluPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-klu"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta de crédito Klu
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section - ¿Qué es? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito Klu?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Klu está diseñada para quienes buscan una
              herramienta financiera que facilite sus compras y gestión de
              pagos. Esta tarjeta destaca por su enfoque en accesibilidad,
              ofreciendo un proceso de solicitud sencillo y adaptado a personas
              que pueden no tener un historial crediticio sólido o que buscan
              mejorar su crédito.
            </p>

            {/* Image 1: KLU-1.webp */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/KLU-1.webp"
                alt="Tarjeta de crédito Klu"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Requisitos Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos para solicitar la tarjeta de crédito Klu
            </h2>

            {/* 1. Edad mínima */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              1. Edad mínima
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Para poder solicitar la tarjeta de crédito Klu, debes tener al
              menos 18 años de edad. Este es un requisito estándar en la mayoría
              de las instituciones financieras, ya que marca la mayoría de edad
              legal en México, lo que te permite gestionar productos financieros
              de manera independiente.
            </p>

            {/* 2. Identificación oficial */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              2. Identificación oficial
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Como parte del proceso de solicitud, necesitas presentar una
              identificación oficial vigente, como la credencial de elector
              (INE) o el pasaporte mexicano. Asegúrate de que la identificación
              esté actualizada y en buen estado, ya que es un requisito
              indispensable para cualquier trámite financiero.
            </p>

            {/* Ad Unit: square04 (After ~3rd paragraph) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* 3. Comprobante de domicilio */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              3. Comprobante de domicilio
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Deberás presentar un comprobante de domicilio reciente, con no más
              de tres meses de antigüedad. Los documentos aceptados generalmente
              incluyen recibos de servicios como agua, luz, gas, o estados de
              cuenta bancarios. Este requisito es importante para verificar tu
              residencia y asegurar que los extractos de la tarjeta lleguen a la
              dirección correcta.
            </p>

            {/* 4. Historial crediticio */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              4. Historial crediticio (opcional)
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Aunque la tarjeta de crédito Klu está diseñada para personas con
              un historial crediticio limitado, contar con un historial
              crediticio positivo puede agilizar el proceso de aprobación. No
              obstante, esta tarjeta también está disponible para aquellos que
              buscan construir o reparar su crédito.
            </p>

            {/* 5. Comprobante de ingresos */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              5. Comprobante de ingresos
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Es necesario presentar un comprobante de ingresos que demuestre
              estabilidad financiera. Este puede ser un recibo de nómina,
              declaración de impuestos o algún documento que indique un flujo de
              ingresos constante. Este requisito ayuda a la institución a
              evaluar tu capacidad de pago.
            </p>

            {/* Image 2: call-to-ACTION-1.jpg */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Tarjeta de crédito"
              className="my-8"
            />

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso de solicitud de la tarjeta Klu es sencillo y se puede
              realizar en línea. Solo necesitas llenar un formulario con tus
              datos personales, cargar los documentos requeridos y esperar la
              evaluación por parte de la institución. La respuesta suele ser
              rápida y, si cumples con los requisitos, la aprobación puede darse
              en pocos días.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Llenado del formulario en línea:
                  </strong>{" "}
                  Ingresa tus datos personales y de contacto en la plataforma de
                  solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cargado de documentos:
                  </strong>{" "}
                  Adjunta digitalmente tu identificación oficial, comprobante de
                  domicilio y comprobante de ingresos.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Evaluación:</strong> La
                  institución revisará tu perfil y te informará sobre la
                  aprobación de tu tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recepción de la tarjeta:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás la tarjeta en tu
                  domicilio o en una sucursal cercana.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-slate-500 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3: call-to-ACTION-3.jpg */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Estudiantes Tarjetas de Crédito"
              className="my-8"
            />

            {/* Beneficios */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los beneficios de la tarjeta de crédito Klu?
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesibilidad:</strong> La
                  tarjeta Klu es ideal para personas con un historial crediticio
                  limitado o nulo, lo que permite a los usuarios construir un
                  perfil crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Control de gastos:</strong>{" "}
                  La plataforma digital de Klu ofrece herramientas para
                  monitorear y gestionar tus gastos en tiempo real, facilitando
                  el control de tu presupuesto.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong> Uno
                  de los principales atractivos de esta tarjeta es que no cobra
                  comisión por anualidad, lo que la hace accesible y económica.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Los usuarios de la tarjeta Klu pueden acceder a descuentos y
                  promociones especiales en comercios seleccionados, lo que
                  maximiza su poder de compra.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Pago flexible:</strong> Klu
                  ofrece opciones de pago flexible para que los usuarios puedan
                  ajustar sus cuotas según sus posibilidades financieras.
                </span>
              </li>
            </ul>

            {/* Image 4: call-to-ACTION-2.jpg */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas sin anualidad"
              className="my-8"
            />

            {/* Consejos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Consejos para aprovechar al máximo tu tarjeta Klu
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                className="text-slate-500 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Usa la tarjeta de manera responsable:
                  </strong>{" "}
                  Recuerda que una tarjeta de crédito es una herramienta que te
                  permite financiar compras, pero es importante no sobrepasar tu
                  capacidad de pago.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Realiza tus pagos a tiempo:
                  </strong>{" "}
                  Evita intereses adicionales realizando tus pagos antes de la
                  fecha límite. Pagar a tiempo también mejora tu historial
                  crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Monitorea tus gastos:
                  </strong>{" "}
                  Utiliza la plataforma digital de Klu para llevar un control de
                  tus compras y asegurarte de no exceder tu presupuesto mensual.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprovecha los beneficios:
                  </strong>{" "}
                  Participa en promociones y descuentos exclusivos para
                  maximizar el valor de tus compras.
                </span>
              </li>
            </ul>

            {/* Image 5: call-to-ACTION-4.jpg */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Mejor préstamo personal"
              className="my-8"
            />

            {/* Final Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Klu ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Klu es una excelente opción para aquellos
              que buscan un producto financiero accesible, sin complicaciones y
              con beneficios atractivos. Cumplir con los requisitos básicos es
              sencillo, y su proceso de solicitud en línea permite que más
              personas accedan a los beneficios de contar con una tarjeta de
              crédito que les ayude a gestionar sus finanzas de manera
              eficiente. Si estás buscando una tarjeta sin anualidad y con la
              posibilidad de construir o mejorar tu historial crediticio, Klu es
              una opción que deberías considerar.
            </p>

            {/* Button CTA */}
            <Link
              href="https://klu.mx/"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-slate-500 hover:bg-slate-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
