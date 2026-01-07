import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de los préstamos personales rápidos de Creditea México",
  description:
    "Descubre los beneficios de los préstamos rápidos de Creditea: montos hasta $70,000 MXN, plazos flexibles y aprobación en menos de 24 horas. Todo 100% en línea.",
};

// Cyan Arrow Icon Component (Matches #11465B / cyan-900)
function CyanArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-cyan-900 mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosCrediteaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-personales-rapidos-creditea"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Beneficios de los préstamos personales rápidos de Creditea México
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              En la actualidad, cada vez más personas buscan soluciones rápidas
              y accesibles para cubrir gastos imprevistos o llevar a cabo
              proyectos personales.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% en línea:
                  </strong>{" "}
                  Creditea permite solicitar préstamos personales de forma
                  rápida y sencilla.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Montos y plazos flexibles:
                  </strong>{" "}
                  Ofrecen préstamos desde $1,000 hasta $70,000 pesos con plazos
                  de 4 a 36 meses.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Requisitos accesibles:
                  </strong>{" "}
                  Solo se necesita ser mayor de edad, contar con una
                  identificación oficial, comprobante de domicilio, cuenta
                  bancaria e ingresos comprobables.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Beneficios clave:</strong>{" "}
                  Aprobación rápida, depósito en pocas horas, sin penalización
                  por pago anticipado y términos transparentes.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-creditea"
              className="block w-full"
            >
              <button className="w-full bg-cyan-900 hover:bg-cyan-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/creditea-1-1-1.jpg"
                alt="Banner Creditea"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Continued */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las opciones más populares para acceder a financiamiento
              rápido en México son los préstamos personales rápidos ofrecidos
              por Creditea. A continuación, te explicamos en detalle cómo
              funcionan, los requisitos para solicitarlos y las principales
              ventajas de utilizar este servicio.
            </p>

            {/* Section: ¿Qué es Creditea? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Creditea y cómo funciona?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Creditea es una plataforma digital que ofrece préstamos personales
              rápidos y flexibles a los usuarios en México. A diferencia de las
              instituciones bancarias tradicionales, Creditea se enfoca en
              brindar soluciones financieras en línea, lo que significa que todo
              el proceso de solicitud y aprobación se lleva a cabo de manera
              digital, sin necesidad de acudir a una sucursal física.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los préstamos personales de Creditea son una excelente opción para
              quienes buscan resolver situaciones financieras de manera rápida.
              Los montos disponibles van desde los $1,000 hasta $70,000 pesos,
              lo que permite a los solicitantes elegir el importe que mejor se
              ajuste a sus necesidades. Además, los plazos de pago son
              flexibles, con la posibilidad de devolver el préstamo en un
              periodo que va de 4 a 36 meses.
            </p>

            {/* Section: Características principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características principales de los préstamos rápidos de Creditea
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Creditea se distingue de otros prestamistas por su enfoque en
              ofrecer un servicio rápido, accesible y transparente. Entre las
              principales características de sus préstamos personales, destacan:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitudes 100% en línea:
                  </strong>{" "}
                  Todo el proceso se realiza de forma digital, desde la
                  solicitud hasta la firma del contrato, lo que facilita el
                  acceso a los préstamos sin necesidad de desplazarse.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos ajustables:</strong>{" "}
                  Los préstamos van desde $1,000 hasta $70,000 pesos, lo que
                  permite a los usuarios ajustar el monto según sus necesidades.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Plazos de pago flexibles:
                  </strong>{" "}
                  Los solicitantes pueden elegir un plazo de pago que mejor se
                  adapte a su capacidad financiera, con opciones que van de 4 a
                  36 meses.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación crediticia rápida:
                  </strong>{" "}
                  Creditea revisa tu{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  de manera rápida y, en la mayoría de los casos, ofrece una
                  respuesta en menos de 24 horas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Depósito rápido:</strong>{" "}
                  Una vez aprobado el préstamo, el dinero es depositado
                  directamente en la cuenta bancaria del solicitante en un plazo
                  de pocas horas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin comisiones ocultas:
                  </strong>{" "}
                  Creditea se caracteriza por ofrecer términos claros y
                  transparentes, sin cargos sorpresa ni comisiones adicionales.
                </span>
              </li>
            </ul>

            {/* Section: Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de los préstamos personales rápidos de Creditea
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Solicitar un préstamo en Creditea ofrece varias ventajas que lo
              convierten en una opción atractiva para quienes necesitan
              financiamiento rápido. Algunas de las principales ventajas
              incluyen:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Rapidez en el proceso:
                  </strong>{" "}
                  Desde la solicitud hasta la aprobación y desembolso, el
                  proceso en Creditea es ágil. Los solicitantes pueden obtener
                  una respuesta en menos de 24 horas y recibir el dinero en su
                  cuenta el mismo día o al siguiente.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en los pagos:
                  </strong>{" "}
                  La opción de elegir entre plazos de 4 a 36 meses permite a los
                  usuarios ajustar el pago de acuerdo con su capacidad
                  financiera, evitando cargas excesivas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Facilidad de acceso:
                  </strong>{" "}
                  Al ser un servicio completamente en línea, los usuarios pueden
                  realizar todo el proceso desde la comodidad de su hogar, sin
                  necesidad de acudir a una oficina o sucursal.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin penalizaciones por pago anticipado:
                  </strong>{" "}
                  Si decides liquidar tu préstamo antes del plazo acordado,
                  Creditea no te cobrará ninguna penalización. Esto te brinda la
                  libertad de pagar más rápido si así lo deseas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia en las condiciones:
                  </strong>{" "}
                  Los términos y condiciones de los préstamos de Creditea son
                  claros y transparentes, lo que te permite saber exactamente
                  cuánto pagarás sin sorpresas desagradables.
                </span>
              </li>
            </ul>

            {/* Section: A tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              A tener en cuenta
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los préstamos personales rápidos de Creditea son una excelente
              solución para quienes necesitan financiamiento inmediato y
              accesible. La flexibilidad en los montos y plazos, así como la
              rapidez en la aprobación y desembolso, hacen de esta opción una de
              las mejores alternativas para manejar situaciones financieras
              inesperadas.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Sin embargo, es importante recordar que, como cualquier préstamo,
              debe tomarse con responsabilidad. Asegúrate de evaluar tu
              capacidad de pago antes de solicitar un crédito y lee
              detenidamente los términos y condiciones para evitar
              inconvenientes en el futuro.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              En resumen, si estás buscando una opción confiable y rápida para
              obtener financiamiento, Creditea puede ser la solución ideal para
              ti.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-creditea"
                className="block w-full"
              >
                <button className="w-full bg-cyan-900 hover:bg-cyan-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
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
