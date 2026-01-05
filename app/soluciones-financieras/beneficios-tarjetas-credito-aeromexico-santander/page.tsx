import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios de las tarjetas de crédito Aeroméxico Santander | Top Finanzas MX",
  description:
    "Descubre los beneficios exclusivos de las tarjetas Aeroméxico Santander: Puntos Rewards, acceso a Salones Premier y meses sin intereses.",
};

// Red Arrow Icon Component for Santander
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#dc2626" />
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

export default function BeneficiosAeromexicoSantanderPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="beneficios-tarjetas-credito-aeromexico-santander"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de las tarjetas de crédito Aeroméxico Santander
            </h1>

            <div
              id="square01"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si eres un viajero frecuente o planeas serlo, las tarjetas de
              crédito Aeroméxico Santander son una excelente opción para
              maximizar tus experiencias. Gracias a la alianza entre estas dos
              grandes empresas, puedes acceder a beneficios exclusivos.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Desde la acumulación de Puntos Aeroméxico Rewards hasta el acceso
              a Salones Premier, estas tarjetas están diseñadas para recompensar
              tus compras y mejorar tus viajes.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Main Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg"
                alt="Beneficios Tarjetas Aeroméxico Santander"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Principales Beneficios */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Principales beneficios de las tarjetas Aeroméxico Santander
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Al adquirir una de estas tarjetas, obtienes acceso a una serie de
              ventajas competitivas en el mercado de viajes y estilo de vida:
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Beneficios Exclusivos"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Puntos Aeroméxico Rewards:
                  </strong>{" "}
                  Acumula puntos por cada dólar gastado (o su equivalente en
                  pesos) en todas tus compras. Estos puntos pueden canjearse por
                  vuelos, noches de hotel y más.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonos de bienvenida:
                  </strong>{" "}
                  Recibe un bono de puntos al ser aprobado y cumplir con la meta
                  de facturación en los primeros meses.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Disfruta de meses sin intereses en compras directamente con
                  Aeroméxico y en establecimientos participantes.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Con las versiones Platinum e Infinite, tú y tus acompañantes
                  pueden esperar sus vuelos con comodidad en los Salones
                  Premier.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Prioridad en abordaje:
                  </strong>{" "}
                  Aborda antes que el resto de los pasajeros y asegura espacio
                  para tu equipaje de mano (según la tarjeta).
                </span>
              </li>
            </ul>

            {/* Características por tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características por nivel de tarjeta
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Santander ofrece tres niveles de tarjetas Aeroméxico para
              adaptarse a tus necesidades financieras y de viaje:
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Características"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aeroméxico Blanca:</strong>{" "}
                  Ideal para iniciar. Ingreso mínimo de $7,500 MXN. Sin
                  anualidad el primer año si se solicita en línea (sujeto a
                  promociones).
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aeroméxico Platinum:
                  </strong>{" "}
                  Para viajeros frecuentes. Ingreso mínimo de $50,000 MXN.
                  Incluye accesos a Salones Premier y seguros de viaje.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aeroméxico Infinite:
                  </strong>{" "}
                  La máxima exclusividad. Ingreso mínimo de $100,000 MXN. Acceso
                  ilimitado a Salones Premier, ascensos de clase y transporte al
                  aeropuerto.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito?
              </Link>
            </p>

            {/* Requisitos Básicos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitarlas
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para acceder a estos beneficios, debes cumplir con los siguientes
              requisitos generales:
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Requisitos"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Tener entre 20 y 69 años de edad.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Comprobante de ingresos (mínimo $7,500 MXN para la versión
                  Blanca).
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Comprobante de domicilio reciente (no mayor a 3 meses).
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Identificación oficial vigente (INE/IFE o pasaporte).
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  Buen historial crediticio.
                </span>
              </li>
            </ul>

            {/* Cómo solicitar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar tu tarjeta?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso es rápido y seguro. Puedes iniciar tu solicitud en
              línea o acudir a una sucursal.
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="Solicitud"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Simplemente completa el formulario con tus datos personales y
              financieros, espera la evaluación de crédito y, si eres aprobado,
              recibirás tu tarjeta en tu domicilio o podrás recogerla en
              sucursal.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander"
                className="inline-block bg-[#ec0000] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c00000] transition-colors text-lg"
              >
                Quiero conocer los requisitos
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
