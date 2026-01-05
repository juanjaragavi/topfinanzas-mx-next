import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos tarjeta de crédito Nu | Top Finanzas MX",
  description:
    "Descubre los pasos y requisitos esenciales para obtener tu Tarjeta de Crédito NuBank en México, con información sobre costos, CAT y proceso de solicitud.",
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

export default function RequisitosTarjetaCreditoNuPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-nu"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos tarjeta de crédito Nu
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Descubre los pasos y requisitos esenciales para obtener tu Tarjeta
              de Crédito NuBank, diseñada para ofrecer simplicidad y
              transparencia, eliminando las complicaciones típicas de las
              tarjetas tradicionales.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué necesitas para solicitar tu Tarjeta NuBank?
            </h2>

            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-2-1.webp"
                alt="Tarjeta de crédito Nu"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              Obtener tu Tarjeta de Crédito NuBank es un proceso directo y
              sencillo, diseñado para que puedas comenzar a disfrutar de sus
              beneficios rápidamente. A continuación, detallamos todo lo que
              necesitas preparar:
            </p>

            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Tarjetas de crédito para estudiantes"
            />

            <p className="text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
                className="text-blue-600 hover:underline"
              >
                Tarjetas de crédito para estudiantes
              </Link>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Información Financiera Importante:
            </h2>

            <p className="text-gray-700 mb-6 font-normal">
              Disfruta de total claridad en los costos, ya que no se aplican las
              comisiones ocultas que suelen encontrarse en otros bancos. Este
              enfoque transparente es revolucionario en un sector frecuentemente
              criticado por sus cargos inesperados.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de edad y residente en México:
                  </strong>{" "}
                  Debes ser legalmente adulto y residir en México.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Documentación Básica:
                  </strong>{" "}
                  Es necesario tener una identificación oficial vigente como el
                  INE, pasaporte o tarjeta de residencia.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Una Selfie:</strong> Para
                  verificar tu identidad durante el proceso de solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Datos Personales:</strong>{" "}
                  Deberás proporcionar información básica necesaria para
                  calcular tu CURP y RFC.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de Domicilio:
                  </strong>{" "}
                  En ciertos casos, podrías necesitar presentar un comprobante
                  de domicilio reciente.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Consulta de Historial Crediticio:
                  </strong>{" "}
                  Se requerirá tu autorización para realizar una verificación de
                  crédito, un paso estándar en la evaluación de las solicitudes.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas y CAT:
            </h2>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de Interés Anual Fija Promedio:
                  </strong>{" "}
                  89.76% sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">CAT Promedio:</strong>{" "}
                  139.5% sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisión Anual:</strong> $0.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito"
                className="text-blue-600 hover:underline"
              >
                Entiende el CAT en Tarjetas de Crédito
              </Link>
            </p>

            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Entiende el CAT en Tarjetas de Crédito"
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud en línea:
            </h2>

            <p className="text-gray-700 mb-6 font-normal">
              Puedes aplicar fácilmente desde la comodidad de tu hogar a través
              del sitio web de NuBank o utilizando su aplicación móvil. Este
              proceso te permite manejar tu solicitud con rapidez y eficiencia.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es la Tarjeta de Crédito Nu?
            </h2>

            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Nu no es una talla única para todos, pero
              ciertamente tiene un atractivo distintivo para varios perfiles de
              consumidores. Aquí te detallo quiénes podrían considerar esta
              tarjeta como su compañera ideal de finanzas:
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-3 leading-tight">
              Los amantes de lo digital
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Si te sientes cómodo gestionando tu vida desde tu smartphone y
              prefieres las soluciones digitales sobre las tradicionales, Nu es
              tu tarjeta. Todo, desde la aplicación hasta el pago, está diseñado
              para aquellos que viven conectados.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-3 leading-tight">
              Buscadores de transparencia
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Para aquellos que están cansados de leer la letra pequeña y
              preocuparse por comisiones ocultas, Nu ofrece una bocanada de aire
              fresco. Con su política de cero comisiones por anualidad, retiro
              de efectivo, reposición y uso internacional, Nu pone todas las
              cartas sobre la mesa desde el inicio.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Top tarjetas de crédito sin anualidad"
            />

            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-3 leading-tight">
              Innovadores financieros
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Si te gusta estar a la vanguardia de las soluciones financieras y
              valoras las características innovadoras como los MSI con opción de
              adelanto y descuento, y la seguridad avanzada que incluye una
              tarjeta virtual, entonces Nu podría ser la elección perfecta para
              ti.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-3 leading-tight">
              Quienes están construyendo o mejorando su crédito
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Con opciones como la Tarjeta Garantizada Nu, aquellos que buscan
              entrar al mundo del crédito o mejorar su historial existente
              tienen una puerta abierta. Nu no solo te ofrece una herramienta
              financiera, sino una oportunidad para crecer y mejorar
              financieramente.
            </p>

            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Opciones de préstamo personal"
            />

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Nu la tarjeta para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si valoras la simplicidad, la transparencia y el control sobre tus
              finanzas personales, la Tarjeta de Crédito Nu podría ser
              exactamente lo que estabas buscando. Ideal para el consumidor
              digital que prefiere la gestión financiera en la palma de su mano,
              Nu se destaca como una opción sólida en el creciente mar de
              productos financieros digitales. Con su enfoque en eliminar
              comisiones innecesarias y proporcionar una experiencia de usuario
              excepcional, Nu no solo promete cambiar cómo interactuamos con el
              dinero, sino que realmente entrega esa promesa.
            </p>

            <Link
              href="https://nu.com.mx/credito/"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
