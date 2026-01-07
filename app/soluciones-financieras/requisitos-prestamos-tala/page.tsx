import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo con Tala | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo en Tala. Sin historial crediticio, 100% digital y con depósito rápido en tu cuenta.",
};

// Custom Icon for Bullet Points (Color matched: #21bec6 -> Tailwind cyan-500)
function CyanCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-cyan-500 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosTalaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-tala"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo con Tala
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Content */}
            <p className="text-xl text-gray-700 font-bold mb-4">
              Descarga la app en Google Play y solicita tu crédito en minutos.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás considerando obtener un préstamo en México, Tala se
              presenta como una opción accesible y eficiente. A continuación,
              detallamos los requisitos esenciales para solicitar un crédito con
              Tala, así como las características que hacen de este servicio una
              alternativa atractiva para muchos usuarios.
            </p>

            {/* Featured Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-9.webp"
                alt="Requisitos Préstamos Tala"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section: Requisitos para solicitar un préstamo en Tala */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo en Tala
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para acceder a un préstamo con Tala, es fundamental cumplir con
              ciertos requisitos que garantizan la seguridad y eficacia del
              proceso. A continuación, se enumeran los requisitos necesarios:
            </p>

            {/* Ad Unit: square04 (After 3rd paragraph approx from start of content) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente (INE):
                  </strong>{" "}
                  Debes contar con una credencial del Instituto Nacional
                  Electoral (INE) vigente. Este documento es esencial para
                  verificar tu identidad y asegurar que la transacción se
                  realice de manera segura.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta de débito a tu nombre:
                  </strong>{" "}
                  Es necesario tener una cuenta bancaria de débito a tu nombre
                  para recibir el préstamo. Tala realiza depósitos en todas las
                  instituciones bancarias de México, excepto en Transfer.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Dispositivo móvil con sistema Android:
                  </strong>{" "}
                  Actualmente, la aplicación de Tala está disponible
                  exclusivamente en Google Play Store.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Correo electrónico:</strong>{" "}
                  Debes disponer de un correo electrónico activo.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso de solicitud en la App:
                  </strong>{" "}
                  Una vez descargada la aplicación, deberás completar el proceso
                  de solicitud siguiendo las instrucciones proporcionadas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin necesidad de{" "}
                    <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                      historial crediticio
                    </Link>
                    :
                  </strong>{" "}
                  Tala no revisa el Buró de Crédito para aprobar tu solicitud,
                  aunque sí reporta tu actividad crediticia.
                </span>
              </li>
            </ul>

            {/* CTA 1 */}
            <ActionBanner
              href="https://talamobile.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Tala"
            />

            {/* Section: ¿Cómo descargar y utilizar la app de Tala? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo descargar y utilizar la app de Tala?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso para solicitar un crédito con Tala es sencillo y
              completamente digital. A continuación, se describen los pasos a
              seguir:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descarga la App desde Google Play Store:
                  </strong>{" "}
                  Busca &quot;Tala&quot; en la tienda de aplicaciones y descarga
                  la app oficial desarrollada por Tala Mobile.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro y creación de perfil:
                  </strong>{" "}
                  Abre la aplicación y sigue los pasos para registrarte.
                  Proporciona la información personal requerida para validar tu
                  identidad.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud del crédito:
                  </strong>{" "}
                  Completa el formulario de solicitud dentro de la app. No se
                  requieren pagos por adelantado ni visitas a sucursales
                  físicas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recepción del préstamo:
                  </strong>{" "}
                  Si tu solicitud es aprobada, el dinero será depositado
                  directamente en tu cuenta bancaria registrada en la app.
                </span>
              </li>
            </ul>

            {/* CTA 2 */}
            <ActionBanner
              href="https://talamobile.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Aplica ahora"
            />

            {/* Section: ¿Para quién es ideal Tala? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal Tala?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Tala está diseñada para atender a segmentos específicos de la
              población que requieren financiamiento ágil y sin complicaciones.
              A continuación, se detallan los perfiles ideales para este
              servicio:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas sin historial crediticio:
                  </strong>{" "}
                  Tala es una excelente opción para quienes no cuentan con un
                  historial en el Buró de Crédito. Permite acceder a
                  financiamiento y comenzar a construir un historial crediticio
                  sólido.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Trabajadores informales:
                  </strong>{" "}
                  Aquellos que trabajan de manera informal y no pueden presentar
                  comprobantes de ingresos tradicionales encontrarán en Tala una
                  alternativa accesible para obtener préstamos sin necesidad de
                  avales.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Necesidades de financiamiento inmediato:
                  </strong>{" "}
                  Para quienes requieren dinero de forma urgente para
                  emergencias, gastos médicos, reparaciones u otros imprevistos,
                  Tala ofrece una solución rápida con tiempos de aprobación y
                  entrega de fondos mínimos.
                </span>
              </li>
              <li className="flex items-start">
                <CyanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Emprendedores y pequeños negocios:
                  </strong>{" "}
                  Tala también es ideal para emprendedores que necesitan capital
                  para iniciar o expandir sus negocios, proporcionando los
                  recursos necesarios sin los trámites burocráticos de los
                  bancos tradicionales.
                </span>
              </li>
            </ul>

            {/* CTA 3 */}
            <ActionBanner
              href="https://talamobile.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicita tu crédito"
            />

            {/* Section: ¿Es Tala para Ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Tala para Ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar un crédito, evalúa tu capacidad de pago para
              asegurarte de que puedes cumplir con las fechas establecidas y
              mantener un buen historial crediticio. Analiza detenidamente las
              condiciones del préstamo, incluyendo las tasas de interés y el
              Costo Anual Total (CAT), para comprender completamente el
              compromiso financiero que estás adquiriendo.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Tala te ofrece una solución financiera accesible y flexible para
              manejar tus necesidades económicas de manera eficiente. Si buscas
              un financiamiento rápido y sin complicaciones, descarga la app de
              Tala y comienza a gestionar tus finanzas con mayor control y
              confianza.
            </p>

            {/* CTA 4 */}
            <ActionBanner
              href="https://talamobile.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Ver en sitio oficial"
            />

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
