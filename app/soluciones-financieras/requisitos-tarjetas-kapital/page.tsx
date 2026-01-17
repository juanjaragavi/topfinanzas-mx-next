import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjetas-kapital",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-tarjetas-kapital",
    },
  },
  title: "Requisitos de las tarjetas de crédito Kapital | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar las tarjetas de crédito Kapital. Proceso 100% en línea, sin historial crediticio y con beneficios exclusivos.",
};

// Lime Arrow Icon Component
function LimeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-lime-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M7 10l2.5 2.5L14 8"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RequisitosTarjetasKapitalPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjetas-kapital"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de las tarjetas de crédito Kapital
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Kapital son una opción innovadora para
              quienes buscan construir o mejorar su historial crediticio, con
              requisitos simples y un proceso totalmente en línea.
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/kapital-1-1.jpg"
                alt="Tarjetas de Crédito Kapital"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 font-normal">
              En este artículo, te detallamos los requisitos para solicitar las
              tarjetas de Kapital, siguiendo el formato claro y amigable de
              TopFinanzas.
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

            {/* Section: Edad mínima */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Edad mínima
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Para solicitar una tarjeta de crédito Kapital, necesitas ser mayor
              de 18 años. No hay requisitos de edad superior, por lo que
              cualquier persona mayor de edad puede acceder a los productos
              financieros de Kapital, siempre que cumpla con las condiciones de
              evaluación.
            </p>

            {/* Section: Ingresos mínimos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ingresos mínimos
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Kapital no exige un ingreso mínimo para sus tarjetas, lo que la
              convierte en una opción atractiva para personas que no cuentan con
              ingresos fijos, como estudiantes o trabajadores autónomos. Sin
              embargo, deberás tener la capacidad de realizar tus pagos
              mensuales. Kapital se reserva el derecho de evaluar tus ingresos y
              otros factores financieros durante el proceso de solicitud.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Section: Historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Historial crediticio
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              A diferencia de muchas otras instituciones financieras, Kapital no
              requiere un historial crediticio para que puedas acceder a sus
              productos. Esto es ideal para quienes buscan su primera tarjeta de
              crédito o desean reconstruir su historial después de haber
              enfrentado dificultades crediticias previas.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Esta característica es uno de los principales atractivos de las
              tarjetas de crédito Kapital, ya que brinda la oportunidad de
              empezar a generar historial sin necesidad de haber tenido crédito
              anteriormente.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image CTA 1 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Tarjeta Kapital"
            />

            {/* Section: Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Aunque el proceso de solicitud es completamente en línea,
              necesitarás algunos documentos básicos para validar tu identidad y
              capacidad de pago. A continuación, te detallamos los requisitos de
              documentación para solicitar una tarjeta de crédito Kapital:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Es fundamental presentar una identificación oficial vigente.
                  Los documentos aceptados incluyen: INE/IFE, pasaporte y cédula
                  profesional.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Para verificar tu lugar de residencia, se te pedirá un
                  comprobante de domicilio que no tenga más de tres meses de
                  antigüedad. Algunos ejemplos aceptables son: Recibo de luz,
                  agua o teléfono y estado de cuenta bancario.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos (opcional):
                  </strong>{" "}
                  Aunque no es obligatorio tener ingresos fijos, si los tienes,
                  puedes proporcionar un comprobante de ingresos como recibos de
                  nómina o estados de cuenta bancarios. Esto puede mejorar tus
                  probabilidades de obtener una línea de crédito más alta desde
                  el principio.
                </span>
              </li>
            </ul>

            {/* Image CTA 2 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Documentación Kapital"
            />

            {/* Section: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Una de las mayores ventajas de las tarjetas de crédito Kapital es
              su proceso de solicitud 100% en línea. No necesitas acudir a una
              sucursal ni enviar documentación física. Todo el proceso se
              realiza a través de la plataforma de Kapital, donde podrás
              completar tu solicitud en pocos minutos. A continuación, te
              detallamos los pasos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en la plataforma:
                  </strong>{" "}
                  El primer paso es registrarte en la página web de Kapital.
                  Solo necesitas crear una cuenta con tu correo electrónico y
                  proporcionar algunos datos básicos de contacto.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completa el formulario:
                  </strong>{" "}
                  Una vez registrado, se te pedirá que llenes un formulario con
                  tu información personal, incluyendo tus ingresos (si los
                  tienes), y adjuntar los documentos mencionados anteriormente.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación y respuesta:
                  </strong>{" "}
                  Kapital evaluará tu solicitud y te notificará en un plazo de
                  24 a 48 horas sobre el resultado. Si tu solicitud es aprobada,
                  recibirás una notificación y podrás comenzar a utilizar tu
                  tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Activación de la tarjeta:
                  </strong>{" "}
                  Una vez aprobada, recibirás la tarjeta física en tu domicilio.
                  Para comenzar a usarla, deberás activarla desde la aplicación
                  móvil de Kapital, donde también podrás gestionar todos los
                  aspectos relacionados con tu tarjeta, como consultar tu saldo,
                  realizar pagos y revisar movimientos.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Image CTA 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Proceso Kapital"
            />

            {/* Section: ¿Qué aspectos adicionales tiene la tarjeta de crédito Kapital? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué aspectos adicionales tiene la tarjeta de crédito Kapital?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Además de sus requisitos accesibles y su proceso simplificado, las
              tarjetas de crédito Kapital ofrecen una serie de beneficios que
              las hacen atractivas para diversos perfiles de usuarios:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin comisiones ocultas:
                  </strong>{" "}
                  Kapital se caracteriza por su transparencia en cuanto a
                  tarifas y comisiones. No tendrás que preocuparte por cargos
                  sorpresivos, ya que toda la información sobre costos está
                  disponible desde el principio.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cashback y recompensas:
                  </strong>{" "}
                  Dependiendo del tipo de tarjeta Kapital que elijas, podrás
                  acceder a programas de cashback y recompensas. Esto significa
                  que ganarás dinero por cada compra que realices, lo que te
                  permite ahorrar a largo plazo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad de pagos:
                  </strong>{" "}
                  Las tarjetas Kapital también ofrecen opciones flexibles de
                  pago, permitiendo realizar pagos mínimos o totales según tu
                  conveniencia. Además, puedes configurar pagos automáticos para
                  evitar retrasos y mejorar tu historial crediticio.
                </span>
              </li>
            </ul>

            {/* Image CTA 4 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Beneficios Adicionales Kapital"
            />

            {/* Section: ¿Es la tarjeta de crédito Kapital para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Kapital para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Las tarjetas de crédito Kapital son una excelente opción para
              quienes buscan una tarjeta sin complicaciones, con un proceso de
              solicitud sencillo y sin la necesidad de contar con un historial
              crediticio previo. Además, su política de transparencia en
              comisiones y beneficios como el cashback las hacen atractivas para
              un amplio rango de usuarios.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si estás buscando una forma de empezar a construir tu historial
              crediticio o simplemente deseas una tarjeta que se ajuste a tus
              necesidades, las tarjetas de Kapital pueden ser la opción ideal.
              ¡Solicítala hoy y comienza a disfrutar de sus ventajas!
            </p>

            {/* Final CTA Button */}
            <Link
              href="https://www.bancoautofin.mx/personas"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-12"
            >
              <button className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
