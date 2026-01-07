import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos de la tarjeta Santander Aeroméxico Platinum | Top Finanzas MX",
  description:
    "Conoce los requisitos, documentación y proceso de solicitud para la tarjeta de crédito Santander Aeroméxico Platinum. Descubre si es la tarjeta ideal para ti.",
};

// Red Arrow Icon Component
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

export default function RequisitosTarjetaSantanderAeromexicoPlatinumPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-santander-aeromexico-platinum"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta Santander Aeroméxico Platinum
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Santander Aeroméxico Platinum está diseñada
              para viajeros frecuentes que buscan obtener mayores recompensas y
              beneficios en sus viajes aéreos.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Ofrece múltiples ventajas, desde la acumulación de puntos hasta
              acceso exclusivo a servicios premium. A continuación, te
              presentamos los requisitos para solicitar esta tarjeta, basándonos
              en un formato claro y estructurado al estilo de TopFinanzas.
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Aeromexico-Platinum-Santander-1-1.jpg"
                alt="Tarjeta Santander Aeroméxico Platinum"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Requisitos generales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos generales
            </h2>
            <p className="text-gray-700 mb-4 font-normal">
              Para solicitar la tarjeta de crédito Santander Aeroméxico
              Platinum, debes cumplir con ciertos requisitos básicos que te
              permitirán acceder a los beneficios de esta tarjeta:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ser mayor de edad:</strong>{" "}
                  Es necesario tener al menos 18 años para solicitar esta
                  tarjeta. Si eres menor de 21 años y no cuentas con historial
                  crediticio, podrías requerir un aval que respalde tu
                  solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Para calificar, necesitas demostrar que tienes un ingreso
                  mínimo mensual de al menos $50,000 MXN. Esto asegura que
                  puedes mantener el nivel de gasto asociado con una tarjeta
                  premium como la Santander Aeroméxico Platinum.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Un buen{" "}
                  <Link
                    href="/soluciones-financieras/historial-crediticio"
                    title="Historial crediticio"
                    className="text-blue-600 hover:underline"
                  >
                    historial crediticio
                  </Link>{" "}
                  es esencial para ser considerado para la aprobación. Santander
                  verificará tu puntaje en buró de crédito para asegurarse de
                  que eres un candidato confiable, sin deudas pendientes o
                  incumplimientos en pagos anteriores.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA Image 1 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Tarjeta Santander Aeroméxico Platinum"
            />

            {/* Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-gray-700 mb-4 font-normal">
              Para completar la solicitud de la tarjeta de crédito Santander
              Aeroméxico Platinum, necesitarás presentar los siguientes
              documentos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes proporcionar una identificación oficial que valide tu
                  identidad. Se aceptan las siguientes: INE/IFE, pasaporte y
                  cédula profesional.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es necesario contar con un documento que acredite tu dirección
                  actual. Los comprobantes aceptados pueden ser: Recibo de luz,
                  agua o teléfono y estado de cuenta bancario con una antigüedad
                  menor a tres meses.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Para demostrar que cumples con el requisito de ingresos,
                  necesitarás entregar alguno de estos documentos: Recibos de
                  nómina, declaración de impuestos y estados de cuenta bancarios
                  donde se refleje tu ingreso mensual.
                </span>
              </li>
            </ul>

            {/* CTA Image 2 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Solicitar Tarjeta Santander Aeroméxico Platinum"
            />

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-4 font-normal">
              El proceso para solicitar la tarjeta Santander Aeroméxico Platinum
              es sencillo y puede realizarse de manera presencial o en línea. A
              continuación, te explicamos los pasos principales:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Para mayor comodidad, puedes solicitar esta tarjeta a través
                  del sitio web de Santander siguiendo estos pasos: Primero,
                  accede al portal de Santander y selecciona la opción de la
                  tarjeta Aeroméxico Platinum. Segundo, llena el formulario en
                  línea con tus datos personales, de contacto y financieros.
                  Tercero, adjunta la documentación requerida y espera la
                  respuesta: el banco evaluará tu solicitud y recibirás una
                  notificación sobre su aprobación en un plazo de 5 a 10 días
                  hábiles.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud presencial:
                  </strong>{" "}
                  Si prefieres una atención más personalizada, puedes acudir a
                  cualquier sucursal de Santander. Un asesor te ayudará a
                  completar la solicitud y te guiará en la entrega de los
                  documentos necesarios.
                </span>
              </li>
            </ul>

            {/* CTA Image 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicitar Tarjeta Santander Aeroméxico Platinum"
            />

            {/* ¿Qué es lo atractivo...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es lo atractivo de la tarjeta de crédito Santander Aeroméxico
              Platinum?
            </h2>
            <p className="text-gray-700 mb-4 font-normal">
              La tarjeta Santander Aeroméxico Platinum no solo te ofrece
              facilidades de pago y acceso a líneas de crédito amplias, sino que
              también cuenta con beneficios exclusivos para los viajeros
              frecuentes.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de Puntos Premier:
                  </strong>{" "}
                  Cada vez que realices una compra con tu tarjeta, acumulas
                  Puntos Premier, los cuales puedes canjear por vuelos, mejoras
                  de clase y otros servicios aéreos con Aeroméxico y otras
                  aerolíneas de SkyTeam.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Boletos de acompañante:
                  </strong>{" "}
                  Este beneficio te permite obtener hasta 2 boletos de
                  acompañante Aeroméxico al año, una excelente oportunidad para
                  viajar con un ser querido pagando solo por un boleto.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a Salones Premier:
                  </strong>{" "}
                  Con la Santander Aeroméxico Platinum, disfrutas de acceso
                  gratuito a los Salones Premier en los aeropuertos donde
                  Aeroméxico tiene presencia, brindándote un espacio cómodo y
                  exclusivo antes de tus vuelos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin anualidad el primer año:
                  </strong>{" "}
                  Otro gran beneficio de esta tarjeta es que no pagarás cuota
                  anual durante el primer año, lo que representa un ahorro
                  significativo para quienes buscan disfrutar de sus ventajas
                  sin costos adicionales al inicio.
                </span>
              </li>
            </ul>

            {/* Tiempos de respuesta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tiempos de respuesta y entrega de la tarjeta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Una vez aprobada tu solicitud, Santander te enviará la tarjeta a
              la dirección proporcionada. El tiempo de entrega suele ser de 5 a
              10 días hábiles. Durante este periodo, recibirás notificaciones
              sobre el estado de tu envío.
            </p>

            {/* CTA Image 4 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Solicitar Tarjeta Santander Aeroméxico Platinum"
            />

            {/* ¿Es ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Santander Aeroméxico Platinum ideal para
              ti?
            </h2>
            <p className="text-gray-700 mb-4 font-normal">
              La Tarjeta de Crédito Santander Aeroméxico Platinum es una
              excelente opción para quienes viajan con frecuencia y desean
              aprovechar al máximo las recompensas y beneficios de volar con
              Aeroméxico. Desde la acumulación de Puntos Premier hasta el acceso
              a Salones Premier y boletos de acompañante, esta tarjeta ofrece
              una experiencia de viaje premium.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos, te recomendamos solicitarla para
              disfrutar de estos beneficios exclusivos y transformar tu manera
              de viajar. ¡Comienza tu solicitud hoy y empieza a acumular puntos
              para tu próximo viaje!
            </p>

            {/* Final CTA Button */}
            <Link
              href="https://www.santander.com.mx/personas/tarjetas-de-credito/Aeromexico-Platinum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-12"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Solicitar tarjeta en Santander
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
