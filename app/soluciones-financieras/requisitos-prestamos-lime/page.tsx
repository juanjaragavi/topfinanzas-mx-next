import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-lime",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-lime",
    },
  },
  title: "Requisitos de los préstamos con Lime | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo con Lime. Proceso 100% digital, sin avales y con respuesta inmediata para emergencias.",
};

// Custom Icon for Bullet Points (Color matched: #7bb120 -> Tailwind lime-600)
function LimeCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-lime-600 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosLimePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-lime"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de los préstamos con Lime
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
              Con requisitos mínimos y un proceso 100% en línea, puedes obtener
              hasta $14,000 MXN en minutos.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos Lime son una opción de microcrédito en México que
              ofrece soluciones rápidas y accesibles para cubrir gastos
              urgentes. Sin embargo, antes de poder solicitar uno, es necesario
              cumplir con algunos requisitos básicos. En este artículo te
              explicamos qué necesitas para acceder a un préstamo con Lime y
              para quién es ideal este tipo de financiamiento.
            </p>

            {/* Featured Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-10.webp"
                alt="Requisitos Préstamos Lime"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section: ¿Qué necesitas para solicitar un préstamo con lime? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué necesitas para solicitar un préstamo con Lime?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para acceder a un préstamo con Lime, los requisitos son sencillos,
              lo que lo convierte en una opción accesible para una amplia gama
              de personas en México. A continuación, te detallamos los
              requisitos básicos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Debes contar con la mayoría de edad para poder solicitar un
                  préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Necesitas una identificación mexicana válida, como el INE o
                  pasaporte, que certifique tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta bancaria propia:
                  </strong>{" "}
                  Es necesario contar con una cuenta bancaria a tu nombre, ya
                  que es donde recibirás el préstamo una vez aprobado.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Teléfono celular propio:
                  </strong>{" "}
                  Un teléfono celular activo es indispensable, ya que se
                  utilizará tanto para registrar tu información como para
                  recibir notificaciones sobre tu solicitud y pagos.
                </span>
              </li>
            </ul>

            {/* Ad Unit: square04 (After requirements list) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA 1 */}
            <ActionBanner
              href="https://www.lime24.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Lime"
            />

            {/* Section: ¿Cómo solicitar tu préstamo? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar tu préstamo?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso de solicitud en Lime es completamente en línea y sigue
              unos sencillos pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Selecciona el monto y el plazo:
                  </strong>{" "}
                  Utiliza la calculadora disponible en la página web de Lime
                  para elegir el monto que deseas solicitar y el plazo en el que
                  deseas devolverlo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Revisa el total a pagar:
                  </strong>{" "}
                  Antes de continuar con la solicitud, asegúrate de revisar el
                  monto total a pagar y la fecha límite de pago, de acuerdo con
                  la tasa de interés diaria del 2%.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Llena tu solicitud en línea:
                  </strong>{" "}
                  Haz clic en el botón verde para iniciar la solicitud y
                  proporciona los datos necesarios, incluyendo la
                  identificación, cuenta bancaria y teléfono.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Dictamen de la solicitud:
                  </strong>{" "}
                  Una vez enviada la solicitud, recibirás el dictamen,
                  informándote si tu préstamo ha sido aprobado.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Confirmación y depósito:
                  </strong>{" "}
                  Después de que tu solicitud sea aprobada, deberás ingresar
                  nuevamente al portal para confirmar el crédito.
                  Posteriormente, el dinero será transferido a tu cuenta
                  bancaria.
                </span>
              </li>
            </ul>

            {/* CTA 2 */}
            <ActionBanner
              href="https://www.lime24.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Aplica ahora"
            />

            {/* Section: ¿Para quién es ideal un préstamo con lime? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal un préstamo con Lime?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Este tipo de préstamos está diseñado para cubrir necesidades
              urgentes en plazos cortos, por lo que es una opción útil en
              situaciones específicas. A continuación, te explicamos en qué
              casos los préstamos Lime pueden ser una solución ideal:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas que enfrentan emergencias financieras:
                  </strong>{" "}
                  Si te enfrentas a gastos imprevistos, como una reparación
                  urgente en el hogar, una emergencia médica o cualquier
                  situación que requiera dinero rápidamente, un préstamo Lime
                  puede ser una opción eficiente. Con el proceso digital y el
                  desembolso rápido, puedes recibir los fondos en minutos una
                  vez aprobada la solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Usuarios sin acceso a créditos tradicionales:
                  </strong>{" "}
                  Para aquellos que no cumplen con los estrictos requisitos de
                  los bancos tradicionales, los préstamos Lime ofrecen una
                  alternativa más accesible.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Trabajadores que anticipan ingresos a corto plazo:
                  </strong>{" "}
                  Los plazos de hasta 35 días y la posibilidad de pagar antes
                  del vencimiento hacen que Lime sea ideal para personas que
                  esperan un pago en el corto plazo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas que prefieren una experiencia 100% digital:
                  </strong>{" "}
                  Si prefieres manejar todas tus transacciones financieras en
                  línea y evitar trámites en persona, Lime es una excelente
                  opción.
                </span>
              </li>
            </ul>

            {/* CTA 3 */}
            <ActionBanner
              href="https://www.lime24.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicita tu crédito"
            />

            {/* Section: Aspectos clave a tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Aspectos clave a tener en cuenta
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos Lime son una solución rápida y accesible para
              quienes necesitan dinero de forma urgente y tienen la capacidad de
              devolverlo en un plazo corto. Sin embargo, debido a las altas
              tasas de interés diarias, es importante que los solicitantes
              evalúen su capacidad de pago antes de aceptar el crédito. Este
              tipo de préstamos es ideal para personas que pueden hacer frente a
              un préstamo en el corto plazo y que valoran la rapidez y
              conveniencia del proceso digital.
            </p>

            {/* CTA 4 */}
            <ActionBanner
              href="https://www.lime24.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Ver en sitio oficial"
            />

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-lime"
                className="text-lime-600 hover:underline"
              >
                Volver al análisis de Préstamos Lime
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-lime"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
