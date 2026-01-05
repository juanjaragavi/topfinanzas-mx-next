import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos de la tarjeta de crédito Vexi Carnet | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la tarjeta de crédito Vexi Carnet, una opción ideal para iniciar tu historial crediticio sin comprobar ingresos.",
};

// Pink Arrow Icon Component
function PinkArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#D9247E] mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#D9247E" />
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

export default function RequisitosTarjetaVexiCarnetPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-vexi-carnet"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito Vexi Carnet
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Vexi Carnet es una opción popular en México
              para personas que buscan iniciar o mejorar su historial
              crediticio.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/vexicarnet-1-1.jpg"
                alt="Tarjeta de Crédito Vexi Carnet"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Diseñada específicamente para quienes aún no tienen un historial
              de crédito sólido, esta tarjeta ofrece un trámite sencillo y
              beneficios atractivos, sin necesidad de comprobar ingresos. A
              continuación, te detallamos los requisitos y el proceso de
              solicitud, así como algunos beneficios y características clave de
              esta tarjeta.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Requisitos básicos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para solicitar la Tarjeta de Crédito Vexi Carnet, solo necesitas
              cumplir con algunos requisitos muy simples, lo que la convierte en
              una opción accesible para muchos usuarios:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Este es un requisito básico para cualquier tarjeta de crédito
                  en México. Si tienes más de 18 años, ya puedes comenzar tu
                  solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con una identificación oficial vigente:
                  </strong>{" "}
                  Puede ser tu INE/IFE o pasaporte. Es importante que esté al
                  día y sea reconocida oficialmente en el país.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tener una cuenta activa en Facebook:
                  </strong>{" "}
                  Aunque puede parecer inusual, Vexi utiliza Facebook como parte
                  de su proceso de verificación. Es necesario que tengas una
                  cuenta para poder completar la solicitud en línea.
                </span>
              </li>
            </ul>

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso para obtener la Vexi Carnet es completamente en línea y
              muy fácil de seguir. Aquí te explicamos los pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Registro en línea:</strong>{" "}
                  Ingresa al sitio web de Vexi y selecciona la opción de
                  solicitar la tarjeta. Se te pedirá que proporciones un correo
                  electrónico para comenzar el proceso.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completa el formulario:
                  </strong>{" "}
                  Llena un formulario en línea con tus datos personales,
                  información de contacto y algunos detalles financieros. Aquí
                  no es necesario que compruebes ingresos, lo que hace que el
                  proceso sea más accesible para estudiantes o personas que no
                  tienen ingresos regulares.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  Una vez que envíes tu solicitud, Vexi revisará tu historial
                  crediticio (en caso de tenerlo) y te dará una respuesta en un
                  máximo de tres días hábiles.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Pago de comisión de apertura:
                  </strong>{" "}
                  Dependiendo del nivel que se te asigne, deberás realizar un
                  pago único por la comisión de apertura, que puede variar entre
                  $250 y $490 pesos, según tu perfil inicial.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recibe tu tarjeta:</strong>{" "}
                  Si tu solicitud es aprobada, recibirás tu tarjeta física en tu
                  domicilio en un plazo de hasta 10 días hábiles.
                </span>
              </li>
            </ul>

            {/* Image 2 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Entiende el CAT en Tarjetas de Crédito"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/trucos-para-comprar-boletos-de-avion-mas-economicos"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Niveles de Vexi */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Niveles de Vexi
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta Vexi Carnet funciona con un sistema de niveles, lo que
              significa que puedes ir avanzando a mejores condiciones conforme
              usas la tarjeta de manera responsable:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Comienzos:</strong> Es
                  el nivel inicial para la mayoría de los solicitantes. Ofrece
                  una línea de crédito de hasta $5,500 pesos y una tasa de
                  interés del 29.10%. En este nivel no obtienes beneficios de
                  VexiCashback.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Avanzado:</strong> Si
                  usas tu tarjeta al menos una vez al mes durante tres meses
                  consecutivos y pagas a tiempo, puedes avanzar a este nivel,
                  que te otorga hasta $12,000 pesos de línea de crédito, una
                  tasa de interés del 25.50% y 1% de VexiCashback en tus
                  compras.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Campeón:</strong> Este
                  nivel es el más alto y solo puedes alcanzarlo por invitación.
                  Con una línea de crédito de hasta $100,000 pesos, una tasa de
                  interés más baja (18.80%) y un 2% de VexiCashback, es ideal
                  para aquellos que usan y pagan la tarjeta de forma regular y
                  responsable.
                </span>
              </li>
            </ul>

            {/* Image 3 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Top tarjetas de crédito sin anualidad"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Consideraciones adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Consideraciones adicionales
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta Vexi Carnet ofrece algunos beneficios atractivos que
              pueden hacerla una buena opción si buscas una tarjeta sin
              complicaciones:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong> No
                  tendrás que pagar una cuota anual por tener la tarjeta, lo que
                  la hace más económica a largo plazo.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">VexiCashback:</strong>{" "}
                  Dependiendo de tu nivel, puedes ganar hasta 5% de cashback en
                  ciertas categorías como streaming y restaurantes.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de referidos:
                  </strong>{" "}
                  Por cada persona que invites y use la tarjeta, puedes recibir
                  un 3% de sus compras durante el primer año.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/5-ideas-de-negocio-para-emprendedores-jovenes"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* A tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              A tener en cuenta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Aunque la tarjeta Vexi Carnet tiene muchas ventajas, también hay
              algunas consideraciones a tener en cuenta:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisiones por apertura:
                  </strong>{" "}
                  Aunque no tiene anualidad, sí tendrás que pagar una comisión
                  de apertura, que puede ir desde $250 hasta $490 pesos,
                  dependiendo de tu nivel inicial.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Limitada al territorio mexicano:
                  </strong>{" "}
                  La tarjeta solo es aceptada en establecimientos dentro de
                  México, lo que podría ser un inconveniente si sueles viajar al
                  extranjero.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasa de interés:</strong>{" "}
                  Las tasas de interés pueden variar dependiendo de tu nivel, y
                  es importante que hagas tus pagos a tiempo para evitar
                  penalizaciones y costos adicionales.
                </span>
              </li>
            </ul>

            {/* Image 4 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Buscando el mejor préstamo personal"
                fill
                className="object-contain"
              />
            </div>

            {/* Final Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Vexi Carnet para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Vexi Carnet es una excelente opción para
              personas que buscan una manera sencilla de empezar su historial
              crediticio o mejorar sus finanzas personales. Su proceso de
              solicitud es rápido y accesible, y aunque tiene algunas
              limitaciones, sus beneficios como el cashback y la falta de
              anualidad la convierten en una tarjeta atractiva dentro del
              mercado mexicano.
            </p>

            {/* Final CTA Button */}
            <Link
              href="https://solicitud.vexi.mx/"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#D9247E] hover:bg-[#be185d] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Ver en sitio oficial
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
