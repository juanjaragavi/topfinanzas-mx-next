import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo en Kubo Financiero | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo en Kubo Financiero. Proceso 100% en línea, tasas competitivas y flexibilidad en pagos.",
};

// Custom Icon for Bullet Points (Color matched: #2e9f30 -> Tailwind green-600)
function GreenCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosKuboPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-personal-kubo-financiero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo en Kubo Financiero
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Content */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Kubo Financiero es una plataforma de préstamos personales en línea
              que permite a los usuarios obtener financiamiento de manera fácil
              y segura.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Aquí te presentamos los requisitos principales que debes cumplir
              para acceder a un préstamo en Kubo Financiero.
            </p>

            {/* Featured Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/kubo-2.webp"
                alt="Requisitos Préstamos Kubo Financiero"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section: Edad y residencia */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Edad y residencia
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar un préstamo en Kubo Financiero, es necesario ser
              mayor de 18 años y tener residencia en México. La plataforma
              permite el acceso a personas con residencia legal y documentación
              en regla.
            </p>

            {/* Ad Unit: square04 (After 3rd paragraph approx) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA 1 */}
            <ActionBanner
              href="https://www.kubofinanciero.com/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Kubo Financiero"
            />

            {/* Section: Ingresos comprobables */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ingresos comprobables
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Uno de los requisitos clave es contar con ingresos comprobables,
              lo cual asegura que los solicitantes tengan la capacidad de cubrir
              los pagos del préstamo. A continuación, se detallan algunos
              documentos válidos como comprobantes de ingresos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  Recibos de nómina recientes.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  Estados de cuenta bancarios.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">Declaraciones fiscales.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estos documentos permiten a Kubo Financiero evaluar la estabilidad
              financiera del solicitante y asegurar el cumplimiento del
              préstamo.
            </p>

            {/* Section: Buen historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Buen historial crediticio
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Kubo Financiero requiere que los solicitantes cuenten con un
              historial crediticio positivo. Esto significa que, al momento de
              evaluar la solicitud, la plataforma revisará el puntaje de crédito
              para verificar que el solicitante tenga un buen comportamiento
              financiero. Un historial limpio ayuda a acceder a mejores
              condiciones en los términos del préstamo.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Un historial crediticio positivo es esencial, ya que los
              solicitantes con antecedentes crediticios favorables pueden
              acceder a condiciones de financiamiento más competitivas.
            </p>

            {/* CTA 2 */}
            <ActionBanner
              href="https://www.kubofinanciero.com/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Aplica ahora"
            />

            {/* Section: Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos previos, Kubo Financiero solicita
              documentos básicos para validar la identidad y situación
              financiera del solicitante. A continuación, se presenta la
              documentación requerida.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  El solicitante debe presentar una identificación oficial
                  vigente. Los documentos comúnmente aceptados incluyen: INE o
                  IFE (México) y pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es necesario presentar un comprobante de domicilio que
                  confirme la residencia actual del solicitante. Entre los
                  documentos aceptados se encuentran: Recibo de luz, agua o
                  teléfono (con antigüedad no mayor a tres meses) y estado de
                  cuenta bancario.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobantes de ingresos:
                  </strong>{" "}
                  Para verificar la capacidad de pago, Kubo Financiero solicita
                  comprobantes de ingresos. Los documentos generalmente
                  aceptados son: Recibos de nómina, declaraciones fiscales y
                  estados de cuenta bancarios.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estos documentos permiten a la plataforma verificar que el
              solicitante tiene ingresos suficientes para cubrir el préstamo.
            </p>

            {/* Section: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso de solicitud de préstamo en Kubo Financiero es sencillo
              y se realiza en línea. A continuación, se detallan los pasos
              básicos para completar la solicitud.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro y solicitud en línea:
                  </strong>{" "}
                  Para comenzar, el solicitante debe registrarse en la
                  plataforma de Kubo Financiero y completar un formulario en
                  línea con sus datos personales, situación financiera y otros
                  detalles requeridos.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de la solicitud:
                  </strong>{" "}
                  Una vez enviada la solicitud, Kubo Financiero realiza una
                  evaluación del perfil financiero del solicitante. Este proceso
                  puede tardar solo unos días.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y desembolso:
                  </strong>{" "}
                  Si la solicitud es aprobada, los fondos se depositarán
                  directamente en la cuenta bancaria del solicitante, de forma
                  rápida y sin necesidad de visitas presenciales.
                </span>
              </li>
            </ul>

            {/* CTA 3 */}
            <ActionBanner
              href="https://www.kubofinanciero.com/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicita tu crédito"
            />

            {/* Section: Ventajas adicionales de Kubo Financiero */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas adicionales de Kubo Financiero
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos básicos, Kubo Financiero ofrece
              beneficios atractivos para los solicitantes, los cuales son
              ideales para quienes buscan una opción de financiamiento moderna y
              accesible.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso rápido al financiamiento:
                  </strong>{" "}
                  Kubo Financiero permite realizar todo el proceso en línea,
                  facilitando un acceso rápido y conveniente.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas de interés competitivas:
                  </strong>{" "}
                  Como plataforma digital, ofrece tasas de interés que se
                  adaptan a las condiciones de cada solicitante, permitiendo un
                  financiamiento más accesible.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en pagos:
                  </strong>{" "}
                  Kubo Financiero permite realizar pagos anticipados sin
                  penalización, lo que da al usuario mayor control sobre el pago
                  de su préstamo.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es Kubo Financiero ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Kubo Financiero ideal para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos personales de Kubo Financiero son una excelente
              opción para quienes buscan financiamiento seguro, rápido y sin
              complicaciones. Desde requisitos accesibles hasta un proceso 100%
              en línea, Kubo Financiero se posiciona como una alternativa
              confiable y conveniente.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y buscas una forma de financiamiento
              con condiciones competitivas, Kubo Financiero puede ser la
              solución ideal para alcanzar tus objetivos financieros.
            </p>

            {/* CTA 4 */}
            <ActionBanner
              href="https://www.kubofinanciero.com/"
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
