import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuBank: La tarjeta de crédito ideal para ti | Top Finanzas MX",
  description:
    "La Tarjeta de Crédito NuBank, conocida por su accesibilidad y transparencia, se adapta a cualquier estilo de vida.",
};

function PurpleArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill="#7c3aed" />
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

export default function GuiaTarjetaDeCreditoNuBankPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="guia-tarjeta-de-credito-nu-bank"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              NuBank: La tarjeta de crédito ideal para ti
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito NuBank, conocida por su accesibilidad y
              transparencia, se adapta a cualquier estilo de vida.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  tarjeta completamente libre de cuotas anuales.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">App Intuitiva:</strong>{" "}
                  control total de tus finanzas desde la comodidad de tu móvil.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasas competitivas:</strong>{" "}
                  tasa anual del 89,78% sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">CAT promedio:</strong>{" "}
                  139,5% sin IVA.
                </span>
              </li>
            </ul>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-nu/"
              className="block w-full"
            >
              <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-9-1.webp"
                alt="Tarjeta de crédito Nubank"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir la tarjeta de crédito NuBank?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Optar por NuBank significa elegir simplicidad y eficacia en la
              gestión de tus finanzas. La tarjeta se destaca por su aplicación
              fácil de usar que permite un control total sobre gastos y límites
              de crédito, simplificando enormemente la administración de tus
              recursos financieros. Esta conveniencia se extiende a todos los
              aspectos de la experiencia del usuario, desde la configuración
              inicial hasta el uso diario, asegurando que cada interacción con
              NuBank sea intuitiva y enriquecedora.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Una mirada profunda a NuBank
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Comparada con otras opciones en el mercado, NuBank elimina las
              complicaciones y costos innecesarios que suelen acompañar a las
              tarjetas de crédito tradicionales. Este enfoque centrado en la
              experiencia del usuario y la transparencia convierte a NuBank en
              una opción superior para el consumidor moderno. Además de
              simplificar la gestión financiera, NuBank está respaldada por
              Mastercard®, lo que garantiza una aceptación global y acceso a
              una serie de beneficios exclusivos en una amplia gama de comercios
              afiliados alrededor del mundo.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Respaldada por Mastercard®:
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La alianza con Mastercard® no solo asegura la aceptación global
              de NuBank sino que también enriquece la oferta con seguridad
              adicional en transacciones y promociones exclusivas. Esta
              colaboración brinda a los titulares de la tarjeta tranquilidad al
              viajar y comprar, con protecciones integradas y ofertas especiales
              a nivel internacional.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Innovación en beneficios:
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              NuBank va más allá de las funciones estándar de una tarjeta de
              crédito:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin penalizaciones por uso mínimo:
                  </strong>{" "}
                  Puedes usar tu tarjeta según tus necesidades, sin la presión
                  de cumplir con un mínimo de gastos.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin cobros por reposición:
                  </strong>{" "}
                  En caso de pérdida o robo, la reposición es totalmente
                  gratuita, lo que reduce la preocupación en situaciones de
                  estrés.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Además de estos beneficios, NuBank se esfuerza por mantener una
              política de cero costos ocultos, reforzando su compromiso con la
              claridad y la honestidad en todas sus operaciones financieras.
              Esta política asegura que siempre sabrás exactamente lo que estás
              pagando, sin sorpresas desagradables.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Adicionalmente, la tarjeta ofrece una plataforma robusta de
              seguridad que protege tus datos y transacciones en todo momento,
              dándote la tranquilidad que necesitas en cada uso.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar la Tarjeta de Crédito NuBank?
            </h2>
            <p className="text-gray-700 mb-8 font-normal">
              No esperes más para disfrutar de todas las ventajas y beneficios
              que NuBank tiene para ofrecer. Solicitar tu Tarjeta de Crédito
              NuBank es rápido y fácil: simplemente visita el link y conoce los
              requisitos. ¡Empieza hoy mismo y experimenta la libertad
              financiera que solo tu tarjeta de crédito NuBank puede ofrecerte!
            </p>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-nu/"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
