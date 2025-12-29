import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjeta de Crédito Nubank | Top Finanzas MX",
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

export default function TarjetaDeCreditoNubankVCortaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-nubank-vcorta"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Tarjeta de Crédito Nubank
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

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
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
              La Tarjeta de Crédito NuBank es ideal para quienes buscan
              simplicidad y eficacia en la gestión de sus finanzas. Se destaca
              por su aplicación fácil de usar, que permite un control completo
              sobre gastos y límites de crédito, simplificando la administración
              de tus recursos financieros.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Una mirada profunda a Nubank
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Comparado con otras opciones en el mercado, NuBank se distingue
              por eliminar las complicaciones y costos innecesarios que a menudo
              acompañan a las tarjetas de crédito tradicionales. Su enfoque
              centrado en la experiencia del usuario y la transparencia hace de
              NuBank una opción superior para el consumidor moderno.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar tu tarjeta de crédito?
            </h2>
            <p className="text-gray-700 mb-8 font-normal">
              ¡No esperes más! Haz clic aquí para descubrir cómo puedes
              solicitar tu Tarjeta de Crédito NuBank de manera rápida y fácil.
              ¡Consigue la tuya hoy mismo y comienza a disfrutar de todos sus
              beneficios!
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
