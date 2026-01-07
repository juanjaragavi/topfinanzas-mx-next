import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios y características clave de Préstamos Feliz | Top Finanzas MX",
  description:
    "Préstamos Feliz ofrece créditos de hasta $500,000 MXN con aprobación en 15 minutos. Conoce sus tasas, ventajas y si es la opción ideal para ti.",
};

// Custom Check Icon Component using Blue-700 (closest to #1640e5)
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-700 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10l3 3 6-6"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PrestamosFelizPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-feliz"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios y características clave de Préstamos Feliz
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6">
              Préstamos Feliz es una solución financiera diseñada para ofrecer
              acceso rápido a créditos personales en México. Este préstamo se
              caracteriza por un proceso de aprobación en línea que promete
              otorgar fondos en tan solo 15 minutos, con montos que van desde
              $3,000 hasta $500,000 MXN y plazos de 3 a 48 meses.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación rápida y sencilla:
                  </strong>{" "}
                  Solicitud en línea con aprobación en 15 minutos.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Montos y plazos flexibles:
                  </strong>{" "}
                  Créditos desde $3,000 hasta $500,000 MXN con plazos de 3 a 48
                  meses.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Altas tasas de interés:
                  </strong>{" "}
                  Tasa fija anual del 90% y{" "}
                  <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                    CAT
                  </Link>{" "}
                  promedio de 138.2%.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesible sin aval:</strong>{" "}
                  No se requiere garantía, ideal para quienes no cuentan con
                  respaldo financiero.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-feliz"
              className="block w-full"
            >
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-11.webp"
                alt="Préstamos Feliz"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              Aunque es una opción atractiva para quienes buscan liquidez
              inmediata, especialmente en situaciones de emergencia, también
              presenta desventajas importantes, como una tasa de interés fija
              anual del 90% y un Costo Anual Total (
              <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                CAT
              </Link>
              ) promedio de 138.2%, lo que lo convierte en un producto
              financiero caro en comparación con otras opciones en el mercado.
            </p>

            {/* Section: ¿Para quién es ideal Préstamos Feliz? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal Préstamos Feliz?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Este crédito está pensado para personas que necesiten fondos de
              manera urgente y no cuenten con otras alternativas rápidas de
              financiamiento. Los principales usuarios que pueden beneficiarse
              de este préstamo son aquellos que requieren liquidez inmediata
              para cubrir gastos imprevistos, como emergencias médicas o
              reparaciones del hogar. También es útil para jubilados o
              pensionados que podrían enfrentar dificultades para obtener
              préstamos en instituciones tradicionales debido a sus ingresos
              fijos.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              No obstante, Préstamos Feliz está destinado a usuarios que sean
              conscientes de las condiciones de pago, ya que las tasas de
              interés son elevadas. Por ello, es crucial tener un plan sólido
              para el manejo de las deudas y, si es posible, anticipar el pago
              para reducir los costos adicionales derivados de las altas tasas
              de interés.
            </p>

            {/* Section: Tasas y comisiones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas y comisiones
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Un aspecto importante de este producto es la estructura de sus
              comisiones y tasas. Préstamos Feliz cobra una comisión por
              apertura del 2% sobre el monto solicitado, una comisión por
              disposición del crédito del 3% y gastos de investigación del 2%.
              Estas comisiones, junto con la elevada tasa de interés del 90%,
              pueden encarecer significativamente el crédito, lo que lo hace
              poco competitivo frente a otros productos financieros en el
              mercado.
            </p>

            {/* Section: Ventajas de Préstamos Feliz */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Ventajas de Préstamos Feliz
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aprobación rápida:</strong>{" "}
                  El proceso de solicitud y aprobación es completamente en línea
                  y puede tardar tan solo 15 minutos.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesibilidad:</strong> No
                  requiere aval, lo que facilita el acceso al crédito para
                  personas sin garantías.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos flexibles:</strong>{" "}
                  Ofrece plazos de pago que van desde 3 hasta 48 meses, lo que
                  puede adaptarse a distintas necesidades.
                </span>
              </li>
            </ul>

            {/* Section: Detalles a tener en cuenta */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Detalles a tener en cuenta
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Altas tasas de interés:
                  </strong>{" "}
                  La tasa de interés fija anual del 90% y el CAT promedio del
                  138.2% representan un costo considerable.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisiones elevadas:
                  </strong>{" "}
                  Además de las tasas, las comisiones por apertura, disposición
                  del crédito y otros cargos aumentan el costo total del
                  préstamo.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es confiable Préstamos Feliz? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es confiable Préstamos Feliz?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              A pesar de sus altas tasas de interés, Préstamos Feliz es una
              opción legal y está debidamente regulada por la CNBV y la
              CONDUSEF. No obstante, su confiabilidad ha sido cuestionada por la
              cantidad de quejas registradas, lo que indica que la experiencia
              del usuario es mixta. Si bien es una opción segura en términos
              legales, es fundamental que los solicitantes estén bien informados
              sobre los costos asociados antes de firmar un contrato.
            </p>

            {/* Section: Recomendaciones antes de solicitar Préstamos Feliz */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Recomendaciones antes de solicitar Préstamos Feliz
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluar la capacidad de pago:
                  </strong>{" "}
                  Antes de solicitar este crédito, es esencial realizar un
                  análisis exhaustivo de tu capacidad de pago para evitar caer
                  en mora o comprometer tu estabilidad financiera.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comparar alternativas:
                  </strong>{" "}
                  Siempre es recomendable revisar otras opciones de crédito en
                  el mercado que puedan ofrecer tasas más competitivas y
                  condiciones más favorables.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Planificación financiera:
                  </strong>{" "}
                  Dado el alto costo del préstamo, es crucial tener un plan
                  detallado sobre cómo manejar los pagos mensuales y considerar
                  la posibilidad de liquidar el préstamo de manera anticipada
                  para reducir los intereses acumulados.
                </span>
              </li>
            </ul>

            {/* Section: ¿Vale la pena optar por Préstamos Feliz? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Vale la pena optar por Préstamos Feliz?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La decisión de solicitar un Préstamo Feliz depende en gran medida
              de tu situación financiera y de la urgencia de tus necesidades. Si
              bien es una opción viable para quienes necesitan fondos de manera
              inmediata, las altas tasas de interés y las comisiones lo
              convierten en una opción costosa a largo plazo. Es ideal para
              aquellos que están dispuestos a asumir estos costos a cambio de
              una aprobación rápida y sin complicaciones.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              En resumen, Préstamos Feliz es una solución financiera para
              quienes requieren dinero con urgencia y no tienen tiempo para
              esperar la aprobación de un préstamo tradicional. Sin embargo, los
              solicitantes deben estar dispuestos a enfrentar las altas tasas de
              interés y las comisiones asociadas. Para evitar complicaciones, es
              fundamental tener una planificación financiera sólida y considerar
              la posibilidad de liquidar el crédito antes de tiempo.
            </p>

            {/* Section: ¿Es Préstamos Feliz la mejor opción para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Préstamos Feliz la mejor opción para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Préstamos Feliz puede ser una solución eficiente para acceder a
              liquidez inmediata en situaciones de emergencia, pero sus altos
              costos requieren una gestión cuidadosa. Antes de tomar una
              decisión, asegúrate de haber considerado otras alternativas en el
              mercado que puedan ofrecerte condiciones más favorables y
              ajustadas a tus necesidades.
            </p>

            {/* Second CTA Button */}
            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-feliz"
                className="block w-full"
              >
                <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
