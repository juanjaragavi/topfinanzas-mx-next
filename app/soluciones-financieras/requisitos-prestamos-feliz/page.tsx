import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos y proceso de solicitud de Préstamos Feliz | Top Finanzas MX",
  description:
    "Descubre los requisitos y el proceso para solicitar un préstamo con Préstamos Feliz. Aprobación en 15 minutos, sin largos trámites.",
};

// Custom Icon for Bullet Points (Color matched: #1640e5 -> Tailwind blue-700)
function BlueCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-700 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosPrestamosFelizPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-feliz"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos y proceso de solicitud de Préstamos Feliz
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
              Préstamos Feliz ofrece una opción rápida de financiamiento en
              México, pero es fundamental cumplir con ciertos requisitos para
              acceder a sus créditos. A continuación, te explicamos los
              requisitos, la documentación necesaria y el proceso de solicitud
              paso a paso.
            </p>

            {/* Featured Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-11.webp"
                alt="Requisitos Préstamos Feliz"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section: Requisitos básicos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para ser elegible para un préstamo con Préstamos Feliz, necesitas:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Tener entre
                  18 y 83 años.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Contar con un documento válido, como el INE, pasaporte o
                  cédula profesional.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Poseer un buen historial crediticio, lo que demuestra tu
                  responsabilidad financiera previa.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Presentar documentos que demuestren tu capacidad de pago, como
                  recibos de nómina o estados de cuenta bancarios.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Entregar un recibo reciente de servicios, como agua, luz o
                  teléfono, que confirme tu dirección.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Antigüedad laboral:</strong>{" "}
                  Tener al menos un año de antigüedad en tu empleo actual.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estos requisitos son similares a los de otras instituciones
              financieras que ofrecen créditos personales, pero es importante
              que revises tus ingresos y capacidad de pago para asegurarte de
              que puedes cumplir con las obligaciones de este préstamo.
            </p>

            {/* Ad Unit: square04 (After Requisitos text, effectively 3rd/4th paragraph block) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA 1 */}
            <ActionBanner
              href="https://www.prestamofeliz.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Feliz"
            />

            {/* Section: Documentación necesaria */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación necesaria
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Cuando inicies el proceso de solicitud, deberás tener lista la
              siguiente documentación:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Ya sea INE, pasaporte o cédula profesional.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Los recibos de nómina o los estados de cuenta bancarios son
                  las opciones más comunes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Un recibo de servicios reciente (no mayor a tres meses) será
                  suficiente para este propósito.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Tener toda la documentación al día no solo te ayudará a agilizar
              el proceso de solicitud, sino que también garantizará que tu
              solicitud sea evaluada de manera correcta y rápida.
            </p>

            {/* CTA 2 (ACTION-3) */}
            <ActionBanner
              href="https://www.prestamofeliz.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Aplica ahora"
            />

            {/* Section: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Solicitar un Préstamo Feliz es sencillo y rápido gracias a su
              proceso en línea. Sigue estos pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a la plataforma:
                  </strong>{" "}
                  Ingresa al sitio web de Préstamo Feliz y selecciona la opción
                  de solicitud de crédito.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Formulario de solicitud:
                  </strong>{" "}
                  Completa el formulario con tus datos personales, laborales y
                  financieros.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Adjuntar la documentación:
                  </strong>{" "}
                  Sube de manera digital los documentos requeridos, como
                  identificación, comprobantes de ingresos y de domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <BlueCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  Una vez enviada tu solicitud, recibirás la respuesta en tan
                  solo 15 minutos si cumples con todos los requisitos.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Este proceso rápido lo convierte en una opción ideal para quienes
              necesitan financiamiento inmediato, sin la complicación de
              trámites presenciales o largos periodos de espera.
            </p>

            {/* CTA 3 (ACTION-2) */}
            <ActionBanner
              href="https://www.prestamofeliz.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicita tu crédito"
            />

            {/* Section: Consideraciones adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Consideraciones adicionales
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Es importante tener en cuenta algunos aspectos antes de solicitar
              el crédito con Préstamos Feliz. Al ser un préstamo con aprobación
              rápida, los costos asociados, como las tasas de interés, pueden
              ser más altos que en opciones tradicionales. Por eso, es crucial
              analizar la estructura de comisiones y tasas para asegurarte de
              que puedes manejar el pago del préstamo sin afectar tu estabilidad
              financiera.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además, aunque la solicitud y aprobación son muy rápidas, la
              responsabilidad de cumplir con los pagos puntuales recae
              completamente en el solicitante. Incumplir los plazos puede
              afectar tu historial crediticio, lo cual tendría repercusiones en
              futuras solicitudes de financiamiento.
            </p>

            {/* Subsection: Atención al cliente y soporte */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Atención al cliente y soporte
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Préstamos Feliz también ofrece atención al cliente para quienes
              tengan dudas sobre el proceso de solicitud o necesiten más
              información sobre los términos del préstamo. Puedes contactarlos a
              través de su línea telefónica (800 33549 15), disponible de lunes
              a viernes de 9:00 a 18:00 horas.
            </p>

            {/* Section: ¿Qué debo tener en cuenta antes de decidirme? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué debo tener en cuenta antes de decidirme?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Préstamos Feliz es una solución rápida y accesible para quienes
              necesitan financiamiento inmediato en México. Sin embargo, es
              fundamental cumplir con los requisitos establecidos y tener en
              cuenta que las tasas de interés pueden ser más elevadas debido a
              la rapidez y flexibilidad del servicio. Si decides que este
              crédito es la opción adecuada para ti, asegúrate de tener la
              documentación al día y de seguir todos los pasos del proceso de
              solicitud para obtener una aprobación rápida.
            </p>

            {/* CTA 4 (ACTION-4) */}
            <ActionBanner
              href="https://www.prestamofeliz.com.mx/"
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
