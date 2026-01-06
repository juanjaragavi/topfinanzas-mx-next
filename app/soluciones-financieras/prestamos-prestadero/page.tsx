import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de solicitar un préstamo con Prestadero | Top Finanzas MX",
  description:
    "Conoce los beneficios de Prestadero: tasas desde 8.9%, proceso 100% online y sin penalizaciones por pago anticipado. Préstamos de $10k a $300k.",
};

// Lime Arrow Icon Component (Matches close to #a2bd42 -> lime-600 for contrast)
function LimeArrowIcon() {
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

export default function PrestamosPrestaderoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-prestadero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Beneficios de solicitar un préstamo con Prestadero
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Obtener un préstamo personal en México puede ser una gran solución
              para enfrentar emergencias, consolidar deudas o financiar
              proyectos importantes.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas de interés competitivas:
                  </strong>{" "}
                  Prestadero ofrece tasas más bajas que las instituciones
                  tradicionales.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% en línea:
                  </strong>{" "}
                  Solicita y gestiona tu préstamo sin salir de casa.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Montos y plazos flexibles:
                  </strong>{" "}
                  Préstamos desde $10,000 hasta $300,000 pesos con plazos de 12
                  a 36 meses.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin penalización por pagos anticipados:
                  </strong>{" "}
                  Liquida tu préstamo antes sin costos adicionales.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-prestadero"
              className="block w-full"
            >
              <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/prestadero-1-2-1-1.jpg"
                alt="Banner Prestadero"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Continued */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Entre las múltiples opciones de financiamiento disponibles,
              Prestadero se ha posicionado como una plataforma confiable y
              accesible, ofreciendo a los usuarios tasas competitivas y un
              proceso 100% digital. En este artículo, te explicamos los
              principales beneficios de solicitar un préstamo con Prestadero y
              por qué es una excelente opción a considerar si buscas
              financiamiento.
            </p>

            {/* Section: ¿Qué es Prestadero? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Prestadero?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Antes de profundizar en los beneficios, es importante entender qué
              es Prestadero y cómo funciona. Prestadero es una plataforma
              mexicana de préstamos entre personas, también conocida como
              peer-to-peer lending. Esta modalidad conecta a solicitantes de
              préstamos con inversionistas dispuestos a financiar sus
              necesidades. De esta manera, se eliminan intermediarios como los
              bancos, lo que permite ofrecer tasas de interés más bajas y
              condiciones flexibles tanto para el solicitante como para el
              inversionista.
            </p>

            {/* Section: Tasas de interés competitivas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés competitivas
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Uno de los beneficios más destacados de Prestadero es la tasa de
              interés competitiva que ofrece en comparación con otras
              instituciones financieras tradicionales. Al tratarse de una
              plataforma de préstamos entre particulares, no hay costos
              operativos elevados como los que tienen los bancos, lo que se
              traduce en tasas de interés mucho más accesibles. Además,
              Prestadero analiza el perfil crediticio de cada solicitante y
              ofrece una tasa personalizada basada en su capacidad de pago y su
              historial crediticio, lo que garantiza que las condiciones del
              préstamo sean justas para ambas partes.
            </p>

            {/* Section: Proceso 100% en línea */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso 100% en línea
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Otro aspecto que hace de Prestadero una opción conveniente es su
              proceso completamente en línea. Desde la solicitud hasta la firma
              del contrato, todo se puede realizar sin necesidad de visitar una
              sucursal. Esto es especialmente útil para personas con agendas
              ocupadas o que viven en áreas rurales donde el acceso a
              instituciones financieras tradicionales puede ser limitado. El
              proceso digital es sencillo e intuitivo, permitiendo a los
              usuarios registrarse, subir documentos y recibir una respuesta en
              pocos días.
            </p>

            {/* Section: Plazos de pago adaptables */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Plazos de pago adaptables
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Al solicitar un préstamo, uno de los factores más importantes a
              considerar es el plazo de pago. Con Prestadero, los plazos van
              desde 12 hasta 36 meses, lo que ofrece una gran flexibilidad para
              adaptar los pagos mensuales a la capacidad financiera de cada
              solicitante. Esta adaptabilidad es clave para que los usuarios
              puedan cumplir con sus obligaciones de manera cómoda y evitar el
              sobreendeudamiento.
            </p>

            {/* Section: Transparencia y sin costos ocultos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Transparencia y sin costos ocultos
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las mayores preocupaciones al solicitar un préstamo es la
              posibilidad de encontrarse con cargos ocultos o condiciones poco
              claras. Prestadero se destaca por su total transparencia en el
              proceso. Desde el inicio, el solicitante sabe exactamente cuánto
              deberá pagar, cuál es la tasa de interés aplicada y cuál será el
              plazo de pago. No hay sorpresas ni costos inesperados, lo que
              genera confianza y tranquilidad para los usuarios.
            </p>

            {/* Section: No hay penalización por pagos anticipados */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              No hay penalización por pagos anticipados
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A diferencia de muchas instituciones financieras que penalizan los
              pagos anticipados, Prestadero permite que los usuarios adelanten
              pagos o liquiden su deuda antes del plazo acordado sin ningún tipo
              de penalización. Esto es especialmente beneficioso para aquellos
              que logran mejorar su situación financiera y desean reducir el
              tiempo de su deuda o el monto total de los intereses.
            </p>

            {/* Section: Evaluación rápida y sin complicaciones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Evaluación rápida y sin complicaciones
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              El proceso de evaluación de una solicitud en Prestadero es rápido
              y sencillo. Después de llenar el formulario en línea y subir los
              documentos necesarios (comprobante de ingresos, identificación
              oficial, comprobante de domicilio), el sistema revisa el historial
              crediticio del solicitante y, en cuestión de días, se emite una
              respuesta sobre la aprobación del préstamo. Esta agilidad en la
              respuesta es un gran beneficio para quienes necesitan el dinero
              rápidamente para enfrentar una emergencia o aprovechar una
              oportunidad financiera.
            </p>

            {/* Section: ¿A qué debo prestarle especial atención? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿A qué debo prestarle especial atención?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Solicitar un préstamo con Prestadero ofrece una serie de
              beneficios que lo hacen una opción atractiva para quienes buscan
              financiamiento en México. Desde sus tasas competitivas y
              flexibilidad en los montos y plazos, hasta su total transparencia
              y facilidad de uso, esta plataforma proporciona una alternativa
              segura y accesible para resolver necesidades financieras. Además,
              su proceso 100% en línea y sin penalizaciones por pagos
              anticipados la convierten en una solución ideal para aquellos que
              buscan simplicidad y eficiencia en la gestión de su crédito.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Si estás considerando solicitar un préstamo personal, Prestadero
              puede ser la opción adecuada para ti. No solo obtendrás
              condiciones favorables, sino que también tendrás la tranquilidad
              de trabajar con una plataforma confiable que pone a sus usuarios
              en primer lugar.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-prestadero"
                className="block w-full"
              >
                <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
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
