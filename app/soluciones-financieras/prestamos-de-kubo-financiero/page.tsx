import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de los préstamos con Kubo Financiero | Top Finanzas MX",
  description:
    "Kubo Financiero facilita préstamos en línea con tasas competitivas, flexibilidad de pago y seguridad total. Conoce sus beneficios aquí.",
};

// Custom Check Icon Component to replace BlueArrowIcon
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#16a34a" />
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

export default function KuboFinancieroPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-de-kubo-financiero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de los préstamos con Kubo Financiero
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6">
              Kubo Financiero es una plataforma en línea que facilita el acceso a
              préstamos personales en México, ofreciendo opciones de financiamiento
              flexibles y accesibles.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas de interés competitivas:
                  </strong>{" "}
                  Acceso a condiciones favorables adaptadas a cada usuario.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso completamente en línea:
                  </strong>{" "}
                  Solicitud y aprobación rápida sin necesidad de acudir a
                  sucursales.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en plazos y montos:
                  </strong>{" "}
                  Elige los términos de acuerdo a tus necesidades.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia y seguridad:
                  </strong>{" "}
                  Condiciones claras y protección avanzada de datos.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamo-personal-kubo-financiero"
              className="block w-full"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/kubo-2.jpg"
                alt="Préstamos Kubo Financiero"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Tasas de interés competitivas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés competitivas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los beneficios clave de Kubo Financiero es la oferta de tasas
              de interés competitivas. Al operar en línea, la plataforma reduce
              costos operativos y puede ofrecer condiciones favorables a sus
              solicitantes. Los usuarios tienen acceso a tasas ajustadas a su
              perfil, lo que permite condiciones de financiamiento accesibles y
              adaptadas a cada caso.
            </p>

            {/* Section: Flexibilidad en montos y plazos de pago */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en montos y plazos de pago
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Kubo Financiero permite a los usuarios elegir tanto el monto como el
              plazo de pago del préstamo, adaptándose a las necesidades
              específicas de cada solicitante. Esta flexibilidad brinda a los
              usuarios la posibilidad de ajustar los términos del préstamo a sus
              posibilidades y objetivos financieros, ya sea para cubrir un gasto
              imprevisto o realizar una compra importante.
            </p>

            {/* Section: Proceso de solicitud 100% digital */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud 100% digital
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Kubo Financiero ofrece un proceso de solicitud completamente en
              línea, lo que significa que los usuarios pueden realizar todo el
              trámite desde cualquier lugar. Esta digitalización facilita la
              solicitud de financiamiento y permite recibir los fondos sin visitas
              presenciales, reduciendo el tiempo y esfuerzo necesarios para
              acceder a un préstamo.
            </p>

            {/* Section: Transparencia en condiciones y seguridad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Transparencia en condiciones y seguridad
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La transparencia es uno de los pilares de Kubo Financiero, ya que
              los usuarios pueden conocer todos los detalles de su préstamo desde
              el inicio. Esto incluye las tasas de interés, los plazos de pago y
              cualquier costo asociado, lo que permite a los solicitantes tomar
              decisiones informadas sin preocuparse por cargos ocultos.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Además, Kubo Financiero cuenta con medidas avanzadas de seguridad
              para proteger la información financiera y personal de los usuarios,
              brindando un entorno confiable para el manejo de sus datos.
            </p>

            {/* Section: Evaluación de crédito accesible */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Evaluación de crédito accesible
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Kubo Financiero realiza una evaluación de crédito accesible, que
              permite a más personas tener acceso al financiamiento. A diferencia
              de las instituciones financieras tradicionales, Kubo Financiero toma
              en cuenta diferentes factores para evaluar la solicitud, lo que
              facilita el acceso a quienes pueden tener un historial crediticio
              moderado o limitado. Esto hace que Kubo Financiero sea una opción
              ideal para aquellos que buscan una alternativa de financiamiento
              flexible y justa.
            </p>

            {/* Section: Ventajas adicionales de Kubo Financiero */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Ventajas adicionales de Kubo Financiero
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios clave ya mencionados, Kubo Financiero se
              destaca por características que mejoran la experiencia del usuario y
              su acceso a financiamiento personal:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Control sobre pagos:</strong>{" "}
                  La plataforma permite realizar pagos anticipados sin
                  penalización, lo que brinda a los usuarios mayor control sobre
                  la gestión de su préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Atención personalizada:</strong>{" "}
                  Kubo Financiero cuenta con un equipo de soporte que está
                  disponible para resolver dudas y orientar a los usuarios durante
                  todo el proceso.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aprobación rápida:</strong>{" "}
                  Al realizar el proceso en línea, los usuarios reciben una
                  respuesta en poco tiempo, facilitando el acceso a los fondos de
                  manera ágil y sin contratiempos.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es Kubo Financiero ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Kubo Financiero ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Kubo Financiero representa una excelente opción para quienes buscan
              financiamiento seguro, rápido y sin complicaciones. Desde tasas de
              interés competitivas hasta un proceso de solicitud digital, esta
              plataforma se posiciona como una alternativa moderna y confiable en
              el sector de préstamos personales en México.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Si buscas una opción de financiamiento que se adapte a tus
              necesidades y te permita alcanzar tus objetivos, Kubo Financiero es
              una alternativa ideal para explorar.
            </p>

            {/* Second CTA Button */}
            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-prestamo-personal-kubo-financiero"
                className="block w-full"
              >
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
