import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/prestamos-coppel",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/prestamos-coppel",
    },
  },
  title:
    "Préstamo Coppel: Solución flexible para lo que necesitas | Top Finanzas MX",
  description:
    "Descubre los Préstamos Personales Coppel: montos flexibles, plazos a tu medida y solicitud 100% digital.",
};

// Custom Icon Component with color #0266ae (approx Tailwind text-blue-700 / custom)
// Using inline style for exact color match or closest native class "text-[#0266ae]"
function CoppelArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#0266ae] mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosCoppelPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-coppel"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Préstamo Coppel: Solución flexible para lo que necesitas
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La solución para cubrir gastos personales sin complicaciones.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos ajustables:</strong>{" "}
                  Solicita desde $1,000 hasta $50,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos de pago:</strong>{" "}
                  Elige entre 12, 18 o 24 meses según tu capacidad.
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Depósito instantáneo:
                  </strong>{" "}
                  Recibe el dinero en tu Tarjeta BanCoppel.
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Fácil solicitud:</strong>{" "}
                  Hazlo desde Coppel.com, la App Coppel o WhatsApp.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-coppel"
              className="block w-full"
            >
              <button className="w-full bg-[#0266ae] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-4.webp"
                alt="Préstamos Coppel"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-4 leading-tight">
              Los Préstamos Personales Coppel son una opción ideal para quienes
              necesitan acceso rápido y flexible a financiamiento, con montos
              que van desde $1,000 hasta $50,000 MXN. Ya sea para cubrir gastos
              como el regreso a clases, imprevistos o cualquier necesidad
              personal, este producto ofrece condiciones accesibles y cómodas
              para los usuarios en México. A continuación, te explicamos los
              principales beneficios de este préstamo.
            </p>

            {/* Section: Montos Flexibles */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Montos Flexibles
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Una de las mayores ventajas de los Préstamos Personales Coppel es
              la flexibilidad en los montos que puedes solicitar. Dependiendo de
              tus necesidades, puedes acceder a un préstamo desde $1,000 hasta
              $50,000 MXN, lo que te permite adaptar el crédito a situaciones
              pequeñas o más grandes, como gastos escolares, reparaciones en el
              hogar o emergencias.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta flexibilidad es ideal para quienes necesitan un préstamo
              ajustado a sus circunstancias, sin tener que solicitar más dinero
              del que realmente necesitan, evitando así endeudamientos
              innecesarios.
            </p>

            {/* Section: Plazos de pago flexibles */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Plazos de pago flexibles
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otra gran ventaja es la flexibilidad en los plazos de pago. Coppel
              te permite elegir entre tres opciones: 12, 18 o 24 meses para
              pagar el préstamo. Esto significa que puedes seleccionar el plazo
              que mejor se ajuste a tu capacidad de pago, de manera que las
              cuotas mensuales sean manejables y no afecten tus finanzas
              personales.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, el hecho de que puedas elegir el plazo más conveniente te
              da control sobre el tiempo que necesitas para{" "}
              <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                liquidar tu deuda
              </Link>
              , lo que lo hace una opción adaptable a diferentes perfiles
              económicos.
            </p>

            {/* Section: Facilidad en el proceso de solicitud */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Facilidad en el proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso para solicitar un Préstamo Personal Coppel es simple y
              accesible. Tienes varias opciones para hacerlo:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    A través de Coppel.com:
                  </strong>{" "}
                  Inicia sesión, revisa si tienes un préstamo autorizado y
                  selecciona el monto y plazo.
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">App Coppel:</strong>{" "}
                  Descarga la aplicación, entra al menú de préstamos y realiza
                  la solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">WhatsApp:</strong> Ahora
                  puedes solicitar un préstamo tan fácilmente como enviar un
                  mensaje de WhatsApp. La atención es rápida y te confirman si
                  tienes un préstamo autorizado en minutos.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Este proceso completamente digital es ideal para quienes buscan
              evitar visitas a sucursales y desean realizar todo desde la
              comodidad de su hogar, ahorrando tiempo y simplificando la gestión
              financiera.
            </p>

            {/* Section: Depósito instantáneo */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Depósito instantáneo en tu Tarjeta BanCoppel
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Una vez aprobado el préstamo, el dinero es depositado de inmediato
              en tu Tarjeta de Débito BanCoppel. Esto significa que puedes
              acceder al dinero rápidamente para cubrir cualquier emergencia o
              gasto urgente. Además, si no tienes la tarjeta, puedes tramitarla
              de forma sencilla para recibir el préstamo.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este depósito instantáneo es uno de los grandes atractivos del
              Préstamo Personal Coppel, ya que ofrece una solución rápida a
              quienes necesitan dinero de manera urgente sin esperar largos
              procesos de aprobación y desembolso.
            </p>

            {/* Section: Opciones de pago cómodas */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Opciones de pago cómodas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Una vez que obtienes tu préstamo, Coppel te ofrece múltiples
              formas de hacer los abonos mensuales, facilitando el proceso de
              pago. Puedes realizar los pagos a través de:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">Coppel.com</span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">App Coppel</span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">WhatsApp</span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">Tiendas Coppel</span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">
                  Cajeros Automáticos BanCoppel
                </span>
              </li>
              <li className="flex items-start">
                <CoppelArrowIcon />
                <span className="text-gray-700">Telecomm y OXXO</span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta variedad de opciones permite a los usuarios elegir el método
              que les resulte más conveniente, asegurando que siempre puedan
              cumplir con sus pagos de manera cómoda y sin complicaciones.
            </p>

            {/* Section: Beneficios para Clientes Puntuales */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Beneficios para Clientes Puntuales
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Si ya eres cliente de Crédito Coppel y tienes un buen historial de
              pago, puedes acceder a condiciones aún más favorables. Los
              clientes puntuales son recompensados con montos más altos y
              mejores condiciones de préstamo, lo que incentiva un manejo
              responsable de las finanzas.
            </p>

            {/* Section: ¿Es el préstamo personal Coppel para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es el préstamo personal Coppel para ti?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              El Préstamo Personal Coppel ofrece una solución rápida, flexible y
              accesible para quienes necesitan financiamiento en México. Con
              montos ajustables, plazos flexibles y múltiples formas de
              solicitar y abonar, este producto es ideal para cubrir gastos
              personales, emergencias o situaciones puntuales. Si estás
              interesado en conocer los requisitos para obtener este préstamo,
              haz clic en el botón a continuación.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-coppel"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#0266ae] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="prestamos-coppel"
        category="soluciones-financieras"
        subCategory="loans"
      />

      <CompactFooter />
    </main>
  );
}
