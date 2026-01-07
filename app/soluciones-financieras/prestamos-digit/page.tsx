import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de los préstamos con Digitt | Top Finanzas MX",
  description:
    "Digitt es una plataforma digital que ofrece préstamos personales rápidos, seguros y con tasas competitivas. Conoce todos sus beneficios aquí.",
};

// Custom Check Icon Component using Cyan-950
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-cyan-950 mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosDigitPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-digit"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de los préstamos con Digitt
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6">
              Digitt es una plataforma digital en México diseñada para facilitar
              el acceso a préstamos personales de manera ágil y segura.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasas competitivas:</strong>{" "}
                  Ofrecen tasas accesibles gracias a su modelo digital.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso completamente digital:
                  </strong>{" "}
                  Solicitud y aprobación rápidas sin necesidad de visitas
                  presenciales.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en montos y plazos:
                  </strong>{" "}
                  Opciones adaptables a la capacidad de pago del usuario.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia y seguridad:
                  </strong>{" "}
                  Condiciones claras y protección avanzada de datos para mayor
                  confianza.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-digitt"
              className="block w-full"
            >
              <button className="w-full bg-cyan-950 hover:bg-cyan-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-7.webp"
                alt="Préstamos Digitt"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              A continuación, exploramos las ventajas más destacadas que Digitt
              ofrece a quienes buscan una alternativa de financiamiento
              confiable y sin complicaciones.
            </p>

            {/* Section: Tasas de interés competitivas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés competitivas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los beneficios principales que distingue a Digitt es su
              enfoque en ofrecer tasas de interés accesibles. Gracias a su
              modelo digital, Digitt logra mantener costos operativos bajos, lo
              que permite ofrecer condiciones competitivas a los solicitantes.
              Estas tasas se ajustan a las necesidades y capacidad de pago del
              usuario, lo que facilita el acceso al financiamiento sin
              comprometer la estabilidad financiera.
            </p>

            {/* Section: Proceso 100% digital y rápido */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso 100% digital y rápido
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso de solicitud y aprobación de un préstamo en Digitt es
              completamente digital, lo que significa que los usuarios pueden
              gestionar su préstamo desde la comodidad de su hogar. A través de
              su plataforma, el solicitante puede completar la solicitud y
              recibir una respuesta en poco tiempo, sin necesidad de acudir a
              una sucursal o realizar trámites presenciales. Este enfoque
              digital no solo acelera el proceso, sino que también permite mayor
              comodidad y control.
            </p>

            {/* Section: Flexibilidad en montos y plazos de pago */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en montos y plazos de pago
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Digitt se adapta a las necesidades específicas de cada usuario al
              ofrecer flexibilidad en montos y plazos de pago. Esto significa
              que los solicitantes pueden elegir la cantidad que realmente
              necesitan y seleccionar un plazo que les permita realizar pagos
              cómodos, de acuerdo a su flujo de ingresos. Esta flexibilidad es
              especialmente beneficiosa para quienes buscan cubrir gastos
              imprevistos o realizar una compra importante sin afectar su{" "}
              <Link href="/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona">
                presupuesto
              </Link>
              .
            </p>

            {/* Section: Transparencia y seguridad en el proceso */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Transparencia y seguridad en el proceso
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los aspectos más valorados de Digitt es su transparencia en
              términos y condiciones. Los solicitantes pueden ver todos los
              costos asociados al préstamo, incluyendo tasas de interés y
              comisiones, desde el inicio. Esta claridad en la información
              permite que el usuario tome decisiones informadas sin preocuparse
              por cargos ocultos o sorpresas desagradables al momento de pagar.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Además, Digitt garantiza la seguridad de los datos personales y
              financieros de sus usuarios mediante el uso de tecnología avanzada
              en protección de información. Este enfoque garantiza que los
              solicitantes puedan confiar en la plataforma al momento de manejar
              información confidencial.
            </p>

            {/* Section: Evaluación de crédito accesible */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Evaluación de crédito accesible
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Digitt se enfoca en facilitar el acceso a financiamiento, por lo
              que ofrece una evaluación de crédito accesible. Esto significa que
              las personas con historiales crediticios moderados pueden tener
              mayores oportunidades de obtener un préstamo, en comparación con
              los requisitos tradicionales de bancos y entidades financieras. La
              plataforma utiliza una evaluación integral que considera varios
              aspectos financieros del solicitante, permitiendo una oportunidad
              justa para todos.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Los usuarios que mantienen un buen historial dentro de Digitt
              pueden acceder a mejores condiciones en futuros préstamos, creando
              así una relación de confianza con la plataforma.
            </p>

            {/* Section: ¿Es Digitt ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Digitt ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Los préstamos de Digitt son una excelente opción para quienes
              buscan financiamiento rápido, seguro y con condiciones
              competitivas. Con un proceso digital, transparencia en condiciones
              y flexibilidad en pagos, Digitt se posiciona como una alternativa
              moderna y conveniente en el mercado de préstamos personales.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Si estás considerando un préstamo, Digitt puede ser la solución
              ideal para tus necesidades financieras.
            </p>

            {/* Second CTA Button */}
            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-digitt"
                className="block w-full"
              >
                <button className="w-full bg-cyan-950 hover:bg-cyan-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
