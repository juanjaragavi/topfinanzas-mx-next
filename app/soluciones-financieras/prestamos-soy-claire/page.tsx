import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Préstamos Soy Claire: Consolida tus deudas de tarjetas de crédito | Top Finanzas MX",
  description:
    "Consolida tus deudas de tarjetas Visa y MasterCard con Soy Claire. Préstamos hasta $150,000 MXN, plazos flexibles y sin penalización por pago anticipado.",
};

// Sky Arrow Icon Component (Matches #0f89d3 -> sky-600)
function SkyArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-600 mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosSoyClairePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-soy-claire"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Préstamos Soy Claire: Consolida tus deudas de tarjetas de crédito
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Consolida tus deudas de tarjetas de crédito Visa y MasterCard con
              montos flexibles desde $1,000 hasta $150,000 MXN.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos:</strong> Solicita
                  desde $1,000 hasta $150,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos de pago:</strong>{" "}
                  Flexibles, de 12, 18 o 24 meses.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin penalizaciones:</strong>{" "}
                  Realiza pagos anticipados sin comisiones adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <SkyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tarjetas aceptadas:</strong>{" "}
                  Visa y MasterCard.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-soy-claire"
              className="block w-full"
            >
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-8.webp"
                alt="Préstamos Soy Claire"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Continued */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Claire de INVEX es una plataforma diseñada para ayudar a las
              personas a consolidar las deudas de sus tarjetas de crédito
              mediante una línea de crédito flexible y accesible. Si tienes
              saldo pendiente en tus tarjetas de crédito y estás buscando una
              forma más eficiente de manejar tu deuda, Claire podría ser la
              solución que necesitas.
            </p>

            {/* Section: 6 claves */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-8 leading-tight">
              6 claves de los préstamos Claire
            </h2>

            {/* Point 1 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              1. Montos flexibles: Desde $1,000 MXN hasta $150,000 MXN
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las ventajas principales de Claire es que puedes solicitar
              desde $1,000 MXN, lo que lo convierte en una opción ideal para
              personas con pequeñas deudas, así como para quienes necesitan
              consolidar deudas más grandes, hasta un máximo de $150,000 MXN.
              Este rango de montos es flexible y se ajusta a diferentes
              necesidades financieras.
            </p>

            {/* Point 2 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              2. Limitaciones de tarjetas aceptadas
            </h3>
            <div className="bg-sky-50 border-l-4 border-sky-600 p-4 mb-6 rounded-r">
              <p className="text-gray-800 font-medium">
                Es importante señalar que Claire solo permite consolidar deudas
                de tarjetas de crédito Visa y MasterCard de las cuales seas el
                titular. No acepta tarjetas de crédito departamentales ni
                American Express, lo que puede ser una limitación para algunas
                personas.
              </p>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si tienes deudas en tarjetas de crédito de tiendas departamentales
              o American Express, este producto no será adecuado para ti. Sin
              embargo, si tus deudas están principalmente en tarjetas Visa o
              MasterCard, Claire te ofrece una manera eficiente de pagar esas
              deudas en plazos más manejables.
            </p>

            {/* Point 3 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              3. Consolidación de deudas con flexibilidad en pagos
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Claire permite transferir fondos directamente a tus tarjetas de
              crédito para pagar parcial o totalmente el saldo pendiente, sin
              necesidad de cancelar las tarjetas. Esto te ofrece flexibilidad en
              cómo gestionar tus deudas, ya que puedes seguir utilizando tus
              tarjetas mientras liquidas el saldo de manera ordenada.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Además, puedes elegir plazos de 12, 18 o 24 meses para pagar el
              préstamo, lo que te da la capacidad de ajustar los pagos a tu
              presupuesto mensual. Esto es ideal si prefieres un esquema de
              pagos manejable y quieres evitar las tasas de interés altas que
              suelen tener las tarjetas de crédito.
            </p>

            {/* Point 4 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              4. Sin penalización por pagos anticipados
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Uno de los mayores beneficios de Claire es que no aplica
              comisiones ni penalizaciones por realizar pagos anticipados. Si
              logras reunir el dinero para liquidar tu préstamo antes de tiempo,
              podrás hacerlo sin pagar cargos adicionales, lo que te permitirá
              reducir el costo total del crédito.
            </p>

            {/* Point 5 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              5. Costos claros y transparentes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Claire ofrece tasas de interés que van desde 24% hasta 36% anual
              con un CAT promedio de hasta 52% cuando se incluye el IVA. Aunque
              estas tasas pueden parecer competitivas a primera vista, es
              importante tener en cuenta que los porcentajes no incluyen IVA en
              la presentación inicial, lo que puede llevar a confusión si no
              estás completamente informado.
            </p>

            {/* Point 6 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              6. Proceso 100% en línea, pero con visita a domicilio
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El proceso de solicitud en Claire es completamente en línea, lo
              que facilita el acceso desde cualquier lugar. Sin embargo, tras
              completar la solicitud, se requiere una visita a tu domicilio para
              recoger la documentación y verificar los datos proporcionados.
              Esta visita puede extender el tiempo de aprobación hasta 10 días
              hábiles, lo que puede no ser ideal si necesitas el préstamo de
              manera urgente.
            </p>

            {/* Section: ¿Es Claire la opción ideal? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Claire la opción ideal para consolidar tus deudas?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Claire de INVEX es una buena opción para personas que buscan
              consolidar las deudas de tarjetas de crédito con montos desde
              $1,000 hasta $150,000 MXN, y que quieren hacerlo de manera
              flexible y ordenada. Es ideal para aquellos que prefieren un
              proceso en línea y desean evitar comisiones por pagos anticipados.
              Sin embargo, si tus deudas están en tarjetas departamentales o
              American Express, o si necesitas el dinero de manera urgente,
              puede que este producto no sea el más adecuado para ti.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Si te interesa conocer los requisitos para solicitar un préstamo
              en Claire, haz clic en el botón a continuación para más detalles.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-soy-claire"
                className="block w-full"
              >
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
                  Quiero conocer los requisitos
                </button>
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
