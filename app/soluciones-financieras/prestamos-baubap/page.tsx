import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de los préstamos con Baubap | Top Finanzas MX",
  description:
    "Descubre los beneficios de los préstamos Baubap: 100% digital, rápido y sin historial crediticio riguroso.",
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/prestamos-baubap",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/prestamos-baubap",
    },
  },
};

// Purple Arrow Icon Component
function PurpleArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-purple-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#9333ea" />
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

export default function PrestamosBaubapPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-baubap"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de los préstamos con Baubap
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Baubap es una plataforma de préstamos en línea que ofrece a los
              usuarios una experiencia sencilla y accesible para obtener
              financiamiento personal.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% digital:
                  </strong>{" "}
                  Solicita tu préstamo sin salir de casa.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accessible para diferentes perfiles crediticios:
                  </strong>{" "}
                  Opciones para usuarios con distintos historiales financieros.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Desembolso rápido:</strong>{" "}
                  Recibe los fondos en poco tiempo.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-baubap"
              className="block w-full"
            >
              <button className="w-full bg-[#9333ea] hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/baubap-1-1-1.jpg"
                alt="Préstamos Baubap"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              Sus beneficios están diseñados para facilitar el acceso a
              créditos, incluso para personas con un historial crediticio
              moderado. A continuación, exploramos las ventajas clave de los
              préstamos en Baubap.
            </p>

            {/* Section: Proceso 100% digital */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud 100% digital
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Una de las grandes ventajas de Baubap es su proceso de solicitud
              completamente digital. Esto significa que puedes solicitar un
              préstamo desde la comodidad de tu hogar, sin necesidad de visitas
              a sucursales ni trámites en papel. Todo el proceso, desde la
              solicitud hasta la aprobación, se realiza en línea, lo que permite
              una experiencia rápida y cómoda para los usuarios.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta digitalización no solo agiliza el acceso al préstamo, sino
              que también permite a los solicitantes administrar sus finanzas de
              forma remota, adaptándose a su estilo de vida.
            </p>

            {/* Section: Accesibilidad */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Accesibilidad para distintos historiales crediticios
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Baubap es ideal para personas con historial crediticio limitado o
              moderado, ya que considera cada solicitud de manera integral. A
              diferencia de muchas instituciones financieras tradicionales,
              Baubap ofrece oportunidades a personas que están construyendo su
              historial o que han tenido dificultades en el pasado. Esto brinda
              un acceso inclusivo a financiamiento personal, ayudando a más
              personas a mejorar su situación financiera sin las barreras
              convencionales.
            </p>

            {/* Section: Tasas de interés */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Tasas de interés competitivas y condiciones personalizadas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otro beneficio importante de Baubap son sus tasas de interés
              accesibles y condiciones personalizadas que se ajustan al perfil
              del solicitante. Esto permite a los usuarios obtener
              financiamiento en condiciones justas y adaptadas a sus necesidades
              y capacidad de pago. Además, Baubap garantiza transparencia en sus
              términos, asegurando que los solicitantes conozcan las tasas y
              costos asociados desde el inicio, sin cargos ocultos.
            </p>

            {/* Section: Desembolso rápido */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Desembolso rápido y acceso a fondos inmediatos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Baubap entiende la importancia de contar con financiamiento cuando
              se necesita. Por ello, su proceso de aprobación es rápido, y el
              desembolso se realiza en poco tiempo tras la aprobación. Los
              fondos se depositan directamente en la cuenta bancaria del
              solicitante, permitiendo acceso inmediato al dinero para cubrir
              cualquier gasto urgente.
            </p>

            {/* Section: Flexibilidad en pagos */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Flexibilidad en pagos y opciones de amortización
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Baubap ofrece flexibilidad en plazos de pago, permitiendo que los
              solicitantes elijan un periodo que se adapte a sus necesidades y
              capacidad de pago. Esta flexibilidad se extiende a la posibilidad
              de realizar pagos anticipados sin penalización, lo cual da mayor
              control sobre la deuda. Así, los usuarios pueden administrar sus
              pagos de acuerdo con su flujo de ingresos, ayudando a mantener su
              estabilidad financiera.
            </p>

            {/* Section: Ventajas adicionales */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Ventajas adicionales de Baubap
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios principales, Baubap ofrece otras ventajas
              atractivas que mejoran la experiencia del usuario:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia en el proceso:
                  </strong>{" "}
                  Los usuarios conocen todos los términos desde el inicio,
                  evitando sorpresas en el costo del préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin requisitos complejos:
                  </strong>{" "}
                  Baubap simplifica la documentación requerida, limitándose a
                  los documentos básicos para facilitar el proceso.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Soporte y atención personalizada:
                  </strong>{" "}
                  La plataforma cuenta con un equipo de soporte disponible para
                  resolver cualquier duda o problema durante el proceso, lo que
                  facilita la experiencia y genera confianza en los usuarios.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es Baubap ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es Baubap ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Los préstamos en Baubap ofrecen una solución rápida y accesible
              para quienes necesitan financiamiento personal sin complicaciones.
              Desde un proceso digital hasta opciones flexibles de pago, Baubap
              es una alternativa confiable y conveniente en el mercado de
              préstamos en línea.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              Si buscas un financiamiento que se adapte a tus necesidades con
              condiciones justas y un servicio accesible, Baubap es la opción
              ideal para ayudarte a cumplir tus metas financieras.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-baubap"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#9333ea] hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
