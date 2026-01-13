import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos préstamo Soy Claire | Top Finanzas MX",
  description:
    "Simplifica tus pagos en un solo crédito, con plazos flexibles y sin penalizaciones por pagos anticipados. Conoce los requisitos del préstamo Soy Claire.",
};

// Sky Check Icon Component
function SkyCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-600 mt-1 mr-3 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function RequisitosPrestamoSoyClairePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-soy-claire"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos préstamo Soy Claire
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Simplifica tus pagos en un solo crédito, con plazos flexibles y
              sin penalizaciones por pagos anticipados.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si buscas consolidar tus{" "}
              <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                deudas
              </Link>{" "}
              de tarjetas de crédito, los préstamos Claire de INVEX pueden ser
              una opción atractiva. A continuación, te presentamos los
              requisitos básicos para solicitar este crédito:
            </p>

            {/* Image 1 (Hero) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-8.webp"
                alt="Préstamos Soy Claire"
                width={820}
                height={462}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Requisitos básicos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SkyCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Consulta a Buró de Crédito:
                  </strong>{" "}
                  Autorizar la consulta a Buró de Crédito es indispensable para
                  evaluar tu{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  y determinar si eres elegible.
                </span>
              </li>
              <li className="flex items-start">
                <SkyCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Documentos necesarios:
                  </strong>{" "}
                  Identificación oficial (INE o pasaporte vigente), comprobante
                  de domicilio reciente y comprobante de ingresos (recibos de
                  nómina, estados de cuenta).
                </span>
              </li>
              <li className="flex items-start">
                <SkyCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad y montos:</strong>{" "}
                  Tienes que tener entre 18 y 75 años para solicitar el
                  préstamo. Además, tu deuda en tarjetas de crédito debe estar
                  en un rango de $1,000 a $150,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <SkyCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tarjetas aceptadas:</strong>{" "}
                  Solo se aceptan tarjetas de crédito Visa y MasterCard a tu
                  nombre. No aplica para tarjetas de débito, departamentales ni
                  American Express.
                </span>
              </li>
              <li className="flex items-start">
                <SkyCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso en línea y visita a domicilio:
                  </strong>{" "}
                  Todo el proceso de solicitud se realiza en línea, pero Claire
                  requiere una visita a tu domicilio para verificar la
                  documentación, lo que puede tomar hasta 7 días hábiles.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 (Action 1) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas de crédito sin anualidad"
            />

            {/* ¿Para quién es ideal los préstamos Claire? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal los préstamos Claire?
            </h2>

            {/* Subsection 1 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Personas con varias tarjetas de crédito
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si tienes varias tarjetas de crédito con saldo pendiente, Claire
              te permite simplificar la gestión de tus deudas. En lugar de
              lidiar con diferentes fechas de vencimiento, intereses y montos,
              puedes consolidar todas tus deudas en un solo crédito. Esto te
              permitirá hacer un único pago mensual, lo que facilita la
              organización de tus finanzas y te ayuda a evitar retrasos o
              confusiones con los pagos de tus tarjetas.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además, consolidar tus deudas en Claire puede reducir la tasa de
              interés que pagas en tus tarjetas, sobre todo si tu saldo actual
              tiene un interés elevado. Esto se traduce en un ahorro
              significativo a largo plazo, ayudándote a saldar tus deudas de
              manera más eficiente.
            </p>

            {/* Image 3 (Action 3 - per order) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Top tarjetas de neobancos"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-sky-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Subsection 2 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Usuarios que necesitan flexibilidad en los pagos
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Una de las mayores ventajas de Claire es la flexibilidad que
              ofrece en los pagos. Puedes elegir entre plazos de 12, 18 o 24
              meses, dependiendo de tu situación financiera. Esta opción es
              ideal si necesitas ajustar tus pagos mensuales según tu capacidad
              económica. Los plazos más largos permiten cuotas más bajas,
              mientras que los plazos más cortos te permiten liquidar la deuda
              más rápidamente.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además, Claire te ofrece la posibilidad de hacer pagos anticipados
              sin ninguna penalización. Si en algún momento cuentas con un
              ingreso extra y deseas reducir tu deuda, puedes hacer un pago
              parcial o completo antes del plazo establecido, lo que te
              permitirá ahorrar en intereses y reducir el número de
              mensualidades.
            </p>

            {/* Image 4 (Action 2 - per order) */}
            <ActionBanner
              href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Trucos para comprar boletos de avión más económicos"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-sky-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Subsection 3 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Quienes buscan evitar penalizaciones por pagos adelantados
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Muchos créditos imponen penalizaciones por pagos anticipados, lo
              que desincentiva a los usuarios a liquidar sus deudas antes del
              plazo acordado. Con Claire, esto no es un problema. Si tienes la
              posibilidad de liquidar tu deuda antes de tiempo, no tendrás que
              pagar comisiones adicionales ni penalizaciones.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Esto convierte a Claire en una opción ideal para quienes valoran
              la flexibilidad y no quieren quedar atados a un cronograma rígido
              de pagos. Si tus ingresos fluctúan o recibes bonificaciones,
              podrás aprovechar esos recursos adicionales para reducir tu deuda
              sin costos extras.
            </p>

            {/* Image 5 (Action 4 - per order) */}
            <ActionBanner
              href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Cómo saber si estás en buró de crédito?"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-sky-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Claire adecuado para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si buscas consolidar deudas de tarjetas de crédito con
              flexibilidad y condiciones claras, Claire puede ser una opción
              interesante. Revisa los requisitos y evalúa si este producto se
              adapta a tus necesidades.
            </p>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-soy-claire"
                className="text-sky-600 hover:underline"
              >
                Volver al análisis de Préstamos Soy Claire
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-soy-claire"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
