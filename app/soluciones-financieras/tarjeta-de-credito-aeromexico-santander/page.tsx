import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la tarjeta Aeroméxico Santander | Top Finanzas MX",
  description:
    "Las tarjetas de crédito Aeroméxico Santander son una excelente opción para los viajeros frecuentes. Conoce sus beneficios, requisitos y características.",
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

export default function TarjetaAeromexicoSantanderPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-aeromexico-santander"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta Aeroméxico Santander
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Aeroméxico Santander son una excelente
              opción para los viajeros frecuentes que buscan aprovechar al
              máximo sus compras y acumular millas para futuras aventuras.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tres versiones:</strong>{" "}
                  Blanca, Platinum e Infinite, con distintos requisitos y
                  beneficios.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Todas suman Puntos Aeroméxico Rewards, con bonos al activarse.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios exclusivos:
                  </strong>{" "}
                  Salones Premier, meses sin intereses en Aeroméxico y seguros
                  de viaje.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud sencilla:</strong>{" "}
                  En línea o sucursales, con revisión de crédito e ingresos
                  comprobables.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="flex justify-center my-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander/"
                className="inline-block bg-[#ec0000] text-white font-bold py-3 px-8 rounded-full hover:bg-[#c00000] transition-colors text-lg"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg"
                alt="Tarjeta de Crédito Aeroméxico Santander"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Esta tarjeta ofrece una amplia gama de beneficios y ventajas que
              se adaptan a diferentes niveles de ingresos, brindando comodidad y
              acceso exclusivo a servicios adicionales en Aeroméxico. En este
              artículo, te explicamos los requisitos, las características y los
              beneficios de esta tarjeta, así como el proceso para solicitarla.
            </p>

            {/* ¿Qué requieres para solicitar la tarjeta de crédito Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué requieres para solicitar la tarjeta de crédito Aeroméxico
              Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar la tarjeta de crédito Aeroméxico Santander, es
              importante cumplir con algunos requisitos básicos. A continuación,
              te detallamos lo que necesitas:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad mínima:</strong> Debes
                  tener entre 20 y 69 años para solicitar la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Dependiendo de la versión de la tarjeta que elijas, se te
                  pedirá un ingreso mínimo que puede oscilar entre $7,500 MXN y
                  $100,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Un recibo de servicios o un estado de cuenta bancario que no
                  tenga más de tres meses de antigüedad.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Es necesario contar con un buen historial en el Buró de
                  Crédito para ser elegible.
                </span>
              </li>
            </ul>

            {/* Características de la tarjeta de crédito Aeroméxico Santander */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características de la tarjeta de crédito Aeroméxico Santander
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Existen tres versiones de la tarjeta de crédito Aeroméxico
              Santander, cada una con características únicas que se ajustan a
              diferentes perfiles financieros. A continuación, te las
              describimos:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aeroméxico Santander Blanca:
                  </strong>{" "}
                  es la opción más accesible para quienes buscan acumular puntos
                  Aeroméxico Rewards y disfrutar de beneficios exclusivos. Sin
                  cuota anual y con un ingreso mínimo de $7,500 MXN, permite
                  acumular 1 Punto Aeroméxico Rewards por cada USD gastado y 1.5
                  Puntos por cada USD en Aeroméxico y Aeroméxico Rewards. Al
                  activar la tarjeta y gastar USD $250 en los primeros 3 meses,
                  obtienes un Bono de Bienvenida de 5,000 Puntos, además de un
                  Bono por Gasto Anual de 5,000 Puntos al alcanzar $50,000 MXN
                  en compras cada 12 meses. También ofrece la posibilidad de
                  diferir compras en Aeroméxico a 12 meses sin intereses, así
                  como beneficios exclusivos de Visa, incluyendo asistencia en
                  viajes, Visa Concierge y protección de compras de hasta USD
                  $200 al año.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aeroméxico Santander Platinum:
                  </strong>{" "}
                  Para aquellos que buscan un nivel superior de beneficios, la
                  Aeroméxico Santander Platinum ofrece exclusividad y más puntos
                  Aeroméxico Rewards. Con un ingreso mínimo de $50,000 MXN y una
                  cuota anual de $4,000 MXN sin IVA, acumula 1.6 Puntos por USD
                  gastado y 2 Puntos en Aeroméxico. Al gastar USD $500 en 3
                  meses, recibes un Bono de 16,000 Puntos, y otro igual por
                  $150,000 MXN anuales. Disfruta Salones Premier, certificado
                  2×1 en vuelos nacionales, Sky Priority y beneficios Visa, como
                  Luxury Hotel Collection, Concierge y seguros con cobertura de
                  hasta USD $10,000 al año.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aeroméxico Santander Infinite:
                  </strong>{" "}
                  Es la opción más exclusiva, con beneficios premium para
                  viajeros frecuentes. Con un ingreso mínimo de $100,000 MXN y
                  una cuota anual de $6,000 MXN sin IVA, acumula 2 Puntos
                  Aeroméxico Rewards por USD gastado y 3 Puntos en Aeroméxico.
                  Al gastar USD $1,000 en 3 meses, obtienes un Bono de 32,000
                  Puntos, más 24,000 Puntos por $300,000 MXN anuales. Ofrece
                  acceso ilimitado a Salones Premier y Priority Pass,
                  certificado 2×1 en vuelos nacionales, ascensos a Clase
                  Premier, equipaje adicional sin costo, y beneficios Visa, como
                  Luxury Hotel Collection, Concierge y seguros de viaje con
                  cobertura de hasta USD $200,000.
                </span>
              </li>
            </ul>

            {/* ¿Qué es lo atractivo de la tarjeta Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es lo atractivo de la tarjeta Aeroméxico Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Aeroméxico Santander ofrece múltiples
              beneficios para los viajeros frecuentes. Aquí te enumeramos
              algunos de los más destacados:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de puntos:
                  </strong>{" "}
                  Dependiendo de la versión de la tarjeta que elijas, podrás
                  acumular Puntos Aeroméxico Rewards por cada compra. Estos
                  puntos pueden ser canjeados por boletos de avión, upgrades de
                  clase y otros beneficios exclusivos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonos de bienvenida:
                  </strong>{" "}
                  Al activar tu tarjeta y cumplir con los requisitos de gasto en
                  los primeros meses, recibirás un bono de Puntos Aeroméxico
                  Rewards que varía según la versión elegida.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Con las tarjetas Platinum e Infinite, puedes disfrutar de
                  acceso sin costo a los Salones Premier de Aeroméxico para
                  mayor comodidad antes de tus vuelos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Las tarjetas permiten diferir tus compras en Aeroméxico a
                  meses sin intereses.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguros de viaje:</strong>{" "}
                  Las tarjetas Infinite y Platinum incluyen seguros de viaje que
                  cubren emergencias médicas, pérdida de equipaje y otros
                  imprevistos.
                </span>
              </li>
            </ul>

            {/* ¿Cuál es el siguiente paso para tener una tarjeta de crédito Aeroméxico Santander? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuál es el siguiente paso para tener una tarjeta de crédito
              Aeroméxico Santander?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si deseas solicitar la tarjeta de crédito Aeroméxico Santander, el
              proceso es rápido y sencillo. Puedes hacerlo a través del sitio
              web de Santander o visitando una de sus sucursales. Solo necesitas
              tener a la mano tu identificación oficial, comprobante de ingresos
              y comprobante de domicilio. Después de enviar tu solicitud,
              Santander revisará tu historial crediticio y te notificará sobre
              la aprobación. Una vez aprobada, recibirás tu tarjeta y podrás
              activarla para empezar a disfrutar de todos los beneficios de
              viaje y acumulación de puntos.
            </p>

            {/* ¿Es tarjeta de crédito Aeroméxico Santander ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es tarjeta de crédito Aeroméxico Santander ideal para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Aeroméxico Santander es una excelente opción
              para quienes viajan con frecuencia y desean acumular Puntos
              Aeroméxico Rewards para canjear en vuelos y otros servicios.
              Dependiendo de la versión que elijas, podrás disfrutar de
              beneficios adicionales como acceso a Salones Premier, meses sin
              intereses en Aeroméxico y seguros de viaje. Si cumples con los
              requisitos, esta tarjeta puede ser una herramienta valiosa para
              optimizar tus viajes y obtener recompensas en cada compra.
            </p>

            {/* CTA Button 2 */}
            <div className="flex justify-center my-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander/"
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
