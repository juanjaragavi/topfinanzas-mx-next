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
      "https://topfinanzas.com/mx/soluciones-financieras/banregio-platinum-analisis",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/banregio-platinum-analisis",
    },
  },
  title:
    "Beneficios de la Tarjeta de Crédito Banregio Platinum | Top Finanzas MX",
  description:
    "Conoce en esta guía un análisis de la tarjeta de crédito Banregio Platinum y aprende si es la ideal para tu estilo de vida.",
};

// Orange Check Icon Component
function OrangeCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#F97316" />
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

export default function BanregioPlatinumAnalisisPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="banregio-platinum-analisis"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Beneficios de la Tarjeta de Crédito Banregio Platinum
            </h1>

            {/* Ad Unit: square02 - Benefits page */}
            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La Tarjeta de Crédito Banregio Platinum destaca en México por sus
              beneficios exclusivos y servicios premium.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Puntos:</strong> Gana puntos
                  ilimitados y redímelos en viajes y experiencias.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Servicios VIP:</strong>{" "}
                  Acceso exclusivo a eventos y beneficios selectos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Bajos costos:</strong>{" "}
                  <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                    CAT
                  </Link>{" "}
                  del 38.6% sin IVA y sin comisión anual.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad:</strong>{" "}
                  Protección antifraude y gestión desde la app.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-platinum-de-banregio"
              className="block w-full"
            >
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-1-1024x536.jpg"
                alt="Tarjeta de Crédito Banregio Platinum"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Continuation paragraph */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              A continuación, exploramos sus características, ventajas y los
              perfiles de usuarios que podrían aprovecharla al máximo.
            </p>

            {/* Section: Beneficios y recompensas */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              Beneficios y recompensas
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de Puntos:
                  </strong>{" "}
                  Con cada compra realizada, los usuarios acumulan puntos sin
                  límite, lo que permite acceder a diversas recompensas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Canje de puntos:</strong>{" "}
                  Los puntos pueden canjearse por una amplia gama de premios,
                  incluyendo viajes, productos de lujo y experiencias únicas,
                  ofreciendo flexibilidad y opciones personalizadas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Servicios VIP:</strong> Los
                  tarjetahabientes disfrutan de tratamiento VIP en diversos
                  establecimientos y acceso a eventos exclusivos, elevando la
                  experiencia de uso de la tarjeta.
                </span>
              </li>
            </ul>

            {/* Section: Costo Anual Total (CAT) y Tasa de Interés */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              Costo Anual Total (CAT) y Tasa de Interés
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">CAT Promedio:</strong> 38,6%
                  sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa Anual de Interés Promedio Ponderada:
                  </strong>{" "}
                  33.1%, con una comisión anual de $0 sin IVA, lo que la hace
                  atractiva para quienes buscan costos razonables sin sacrificar
                  beneficios.
                </span>
              </li>
            </ul>

            {/* Section: Requisitos de elegibilidad */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              Requisitos de elegibilidad
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingreso Mínimo:</strong>{" "}
                  $35,000 mensuales.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Entre 18 y 79
                  años y 11 meses.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Experiencia crediticia:
                  </strong>{" "}
                  Uso previo de una tarjeta con línea de $50,000 pesos.
                </span>
              </li>
            </ul>

            {/* Section: Perfiles ideales para la Tarjeta Banregio Platinum */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              Perfiles ideales para la Tarjeta Banregio Platinum
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Profesionales y empresarios:
                  </strong>{" "}
                  Aquellos con ingresos elevados que buscan reflejar su éxito en
                  sus elecciones financieras encontrarán en esta tarjeta una
                  aliada que ofrece recompensas generosas y servicios premium.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Viajeros frecuentes:
                  </strong>{" "}
                  Los entusiastas de los viajes de lujo apreciarán la
                  acumulación flexible de puntos, que se traduce en vuelos y
                  estadías en hoteles de alta categoría, además del acceso a
                  servicios VIP y eventos exclusivos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Consumidores con estilo de vida dinámico:
                  </strong>{" "}
                  Personas con un estilo de vida activo y exigente, que
                  requieren flexibilidad y altos límites de crédito para
                  gestionar grandes compras o inversiones, encontrarán en la
                  Banregio Platinum una herramienta financiera ideal.
                </span>
              </li>
            </ul>

            {/* Section: Consideraciones adicionales */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              Consideraciones adicionales
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguridad y Protección:
                  </strong>{" "}
                  La tarjeta cuenta con tecnología de chip y PIN, además de
                  protección contra fraudes y robos, garantizando tranquilidad
                  en todas las transacciones.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tecnología y Conveniencia:
                  </strong>{" "}
                  La gestión de la cuenta es sencilla gracias a la banca en
                  línea y móvil de Banregio, permitiendo a los usuarios
                  monitorear gastos y realizar pagos desde cualquier lugar.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es ideal para ti? */}
            <h2 className="text-xl font-bold text-gray-800 mt-10 mb-4">
              ¿Es ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La Tarjeta de Crédito Banregio Platinum es más que un medio de
              pago; es un símbolo de éxito y una puerta a experiencias de lujo.
              Si te identificas con los perfiles mencionados y buscas una
              tarjeta que complemente tu estilo de vida premium, la Banregio
              Platinum podría ser la elección perfecta para ti.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Para obtener más información y conocer los requisitos detallados,
              puedes visitar el sitio oficial de Banregio o consultar fuentes
              especializadas en productos financieros.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-platinum-de-banregio"
              className="block w-full mb-12"
            >
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="banregio-platinum-analisis"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
