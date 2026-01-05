import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos de la tarjeta de crédito Santander Aeroméxico Infinite | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la tarjeta Santander Aeroméxico Infinite, sus beneficios exclusivos y el proceso de solicitud.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#D92D21" />
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

export default function RequisitosTarjetaSantanderAeromexicoInfinitePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-santander-aeromexico-infinite"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito Santander Aeroméxico Infinite
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para poder solicitar la tarjeta de crédito Santander Aeroméxico
              Infinite, es importante cumplir con ciertos requisitos que están
              enfocados en personas con un nivel de ingresos alto y con un
              historial financiero sólido. Aquí te detallamos los requisitos más
              importantes.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Infinite-Santander-1-1.jpg"
                alt="Tarjeta Santander Aeroméxico Infinite"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Requisitos generales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos generales
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de edad:</strong>{" "}
                  Debes tener al menos 18 años para poder solicitar esta
                  tarjeta. No existe un límite superior de edad, por lo que
                  cualquier persona mayor de edad puede postularse.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos mínimos:
                  </strong>{" "}
                  Uno de los requisitos más importantes es contar con un ingreso
                  mínimo mensual de $150,000 MXN. Este umbral elevado está
                  alineado con los beneficios exclusivos que la tarjeta ofrece a
                  sus usuarios, quienes suelen hacer compras y viajes frecuentes
                  que requieren un mayor respaldo financiero.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Es fundamental tener un buen historial crediticio para acceder
                  a esta tarjeta. Santander revisará tu puntaje en el buró de
                  crédito para asegurarse de que no tienes deudas pendientes o
                  incumplimientos en tus pagos anteriores. Un historial
                  crediticio limpio aumentará significativamente tus
                  probabilidades de obtener la tarjeta.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Link href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                  alt="Solicitar Tarjeta"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para completar la solicitud de la tarjeta de crédito Santander
              Aeroméxico Infinite, necesitarás algunos documentos clave que
              validen tu identidad y capacidad de pago. A continuación, te
              presentamos la documentación que deberás tener a la mano.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Es necesario presentar una identificación oficial válida. Se
                  aceptan las siguientes opciones: INE/IFE, pasaporte y cédula
                  profesional.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Debes presentar un documento que verifique tu dirección
                  actual. Los documentos aceptados pueden ser: Recibo de luz,
                  agua o teléfono (con menos de tres meses de antigüedad) y
                  estado de cuenta bancario.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Dado que el ingreso mínimo requerido es alto, deberás
                  proporcionar documentación que respalde tus ingresos. Algunos
                  ejemplos incluyen: Recibos de nómina, declaraciones de
                  impuestos y estados de cuenta bancarios.
                </span>
              </li>
            </ul>

            {/* Image 3 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Link href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                  alt="Solicitar Tarjeta"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso para solicitar la tarjeta de crédito Santander
              Aeroméxico Infinite es sencillo y puede completarse tanto de
              manera presencial como en línea. Aquí te explicamos los pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Puedes iniciar la solicitud directamente en el sitio web de
                  Santander. A continuación, te explicamos los pasos a seguir.
                  Primero, accede a la página web de Santander y selecciona la
                  opción para solicitar la tarjeta Aeroméxico Infinite. Segundo,
                  llena el formulario en línea con tus datos personales,
                  financieros y de contacto. Tercero, adjunta los documentos
                  requeridos, como identificación oficial y comprobante de
                  ingresos. Finalmente, espera la evaluación: Santander revisará
                  tu perfil y recibirás una respuesta en un plazo de 5 a 10 días
                  hábiles.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud en sucursal:
                  </strong>{" "}
                  Si prefieres la atención personalizada, puedes acudir a una
                  sucursal de Santander con todos los documentos necesarios. Un
                  asesor te ayudará a completar el proceso y te informará sobre
                  los siguientes pasos.
                </span>
              </li>
            </ul>

            {/* Image 4 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                  alt="Solicitar Tarjeta"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>

            {/* ¿Qué trae adicional la tarjeta Santander Aeroméxico Infinite? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué trae adicional la tarjeta Santander Aeroméxico Infinite?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Además de los requisitos, es importante que conozcas los
              beneficios exclusivos que ofrece la tarjeta de crédito Santander
              Aeroméxico Infinite para que aproveches al máximo tu experiencia
              financiera.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación acelerada de Puntos Premier:
                  </strong>{" "}
                  Con cada compra que realices, acumularás Puntos Premier, que
                  puedes canjear por vuelos, mejoras de clase y otros servicios
                  con Aeroméxico y las aerolíneas de SkyTeam. Los puntos se
                  acumulan de manera acelerada, lo que te permite ganar más
                  rápido.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Boletos de acompañante:
                  </strong>{" "}
                  Uno de los beneficios más destacados es la posibilidad de
                  obtener hasta 2 boletos de acompañante por año, lo que te
                  permite disfrutar de viajes con un acompañante pagando solo
                  por tu boleto.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Con la tarjeta Santander Aeroméxico Infinite, tienes acceso
                  gratuito e ilimitado a los Salones Premier de Aeroméxico,
                  donde puedes relajarte antes de tus vuelos y disfrutar de
                  servicios exclusivos como alimentos, bebidas y Wi-Fi.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguro de viaje:</strong> La
                  tarjeta también incluye seguros de viaje que cubren desde
                  accidentes hasta protección de equipaje, lo que te brinda
                  tranquilidad adicional en cada viaje.
                </span>
              </li>
            </ul>

            {/* Tiempos de respuesta y entrega de la tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tiempos de respuesta y entrega de la tarjeta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Después de completar la solicitud y ser aprobado, Santander
              enviará tu tarjeta a la dirección que proporcionaste. El tiempo
              estimado de entrega es de 5 a 10 días hábiles. Una vez que recibas
              la tarjeta, deberás activarla para empezar a disfrutar de sus
              beneficios.
            </p>

            {/* ¿Es la tarjeta Santander Aeroméxico Infinite ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Santander Aeroméxico Infinite ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Santander Aeroméxico Infinite es ideal para
              viajeros frecuentes que buscan maximizar sus beneficios en vuelos
              y disfrutar de servicios exclusivos. Desde la acumulación de
              Puntos Premier hasta el acceso a Salones Premier, esta tarjeta
              ofrece una experiencia de viaje de lujo.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos de ingresos y buscas una tarjeta que
              ofrezca ventajas exclusivas para viajes internacionales, la
              Santander Aeroméxico Infinite puede ser la opción perfecta para
              ti. ¡Solicítala hoy y comienza a disfrutar de sus beneficios!
            </p>

            {/* Final CTA */}
            <Link
              href="https://santander.aeromexicorewards.com/tarjeta/santander-aeromexico-infinite/"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
              </button>
            </Link>

            {/* Image 5 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Link href="/finanzas-personales/tarjetas-de-credito-para-estudiantes">
                <Image
                  src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                  alt="Solicitar Tarjeta"
                  fill
                  className="object-contain"
                />
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
