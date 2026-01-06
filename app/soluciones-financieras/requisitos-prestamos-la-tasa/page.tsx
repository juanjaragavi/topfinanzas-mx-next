import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo con La Tasa | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo con La Tasa. Proceso sencillo, 100% digital, sin avales y con depósito en menos de 48 horas.",
};

// Custom Orange Icon for Bullet Points (Color: #ffa227 -> Tailwind Orange-400)
function OrangeCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosLaTasaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-la-tasa"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo con La Tasa
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
              Sin avales ni trámites complicados, todo desde la comodidad de tu
              hogar.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tasa es una plataforma que facilita el acceso a préstamos
              personalizados en México. Si estás interesado en obtener un
              crédito, te detallamos los requisitos y el proceso para
              solicitarlo de manera rápida y completamente en línea.
            </p>

            {/* Featured Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/latasa-1-1.webp"
                alt="Requisitos Préstamo La Tasa"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Section: Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes contar con una identificación oficial mexicana válida,
                  como tu INE o pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Necesitarás un comprobante de domicilio con una antigüedad
                  máxima de tres meses. Este puede ser un recibo de agua, luz,
                  teléfono o cualquier otro servicio.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  La Tasa requiere comprobar tus ingresos para evaluar tu
                  capacidad de pago. Puedes usar recibos de nómina, estados de
                  cuenta bancarios o cualquier documento que refleje ingresos
                  constantes en los últimos tres meses.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta bancaria a tu nombre:
                  </strong>{" "}
                  Se necesita una cuenta bancaria en la que se depositará el
                  crédito una vez aprobado.
                </span>
              </li>
            </ul>

            {/* Ad Unit: square04 (After Requisitos list, before Proceso) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA 1 */}
            <ActionBanner
              href="https://latasa.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo La Tasa"
            />

            {/* Section: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso es sencillo y 100% digital:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Completa un formulario con tus datos personales en menos de 5
                  minutos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Preaprobación express:
                  </strong>{" "}
                  Conoce al instante si tu crédito es preaprobado.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Carga de documentos:
                  </strong>{" "}
                  Si calificas, sube los documentos solicitados (identificación,
                  comprobante de domicilio e ingresos).
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aprobación final:</strong>{" "}
                  Una vez revisados tus documentos, recibirás la aprobación
                  final.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Depósito en menos de 48 horas:
                  </strong>{" "}
                  El crédito se depositará directamente en tu cuenta bancaria en
                  un máximo de 48 horas tras la aprobación.
                </span>
              </li>
            </ul>

            {/* CTA 2 */}
            <ActionBanner
              href="https://latasa.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Aplica ahora"
            />

            {/* Section: ¿Para quién es ideal? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal el préstamo de La Tasa?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El crédito de La Tasa está diseñado para adaptarse a diferentes
              tipos de necesidades financieras. Aquí te indicamos para quién es
              especialmente ideal:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas con buen historial crediticio:
                  </strong>{" "}
                  Si tienes un buen historial en Buró de Crédito, puedes acceder
                  a tasas de interés más bajas, recompensando tu buen manejo
                  financiero. Esto lo convierte en una excelente opción si
                  buscas condiciones más favorables que las de los bancos
                  tradicionales.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Quienes buscan flexibilidad en montos y plazos:
                  </strong>{" "}
                  Si necesitas un préstamo que se ajuste a tus circunstancias,
                  La Tasa te permite elegir montos desde $20,000 hasta $350,000
                  MXN, con plazos de pago flexibles entre 12 y 36 meses,
                  adaptándose a tu capacidad de pago.
                </span>
              </li>
            </ul>

            {/* CTA 3 */}
            <ActionBanner
              href="https://latasa.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicita tu crédito"
            />

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas sin aval o garantías:
                  </strong>{" "}
                  Si no puedes presentar un aval o garantía, este producto es
                  ideal, ya que no exige estos requisitos, facilitando el acceso
                  al crédito para quienes normalmente enfrentarían barreras en
                  otras instituciones financieras.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Quienes valoran la rapidez y comodidad:
                  </strong>{" "}
                  Si necesitas un préstamo urgente o prefieres evitar trámites
complicados, La Tasa ofrece un proceso 100% digital, desde la
                  solicitud hasta la entrega del dinero, con un tiempo de
                  aprobación y desembolso menor a 48 horas.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es préstamos La Tasa ideal para Ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El crédito de La Tasa es ideal para personas que buscan una
              solución financiera rápida, flexible y accesible, sin los
              obstáculos habituales como los avales o trámites presenciales. Si
              cumples con los requisitos mencionados y te identificas con las
              características de los usuarios ideales, La Tasa puede ser la
              opción perfecta para tus necesidades de crédito.
            </p>

            {/* Final CTA 4 */}
            <ActionBanner
              href="https://latasa.mx/"
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
