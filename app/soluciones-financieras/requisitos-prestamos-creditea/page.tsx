import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para solicitar un préstamo en Creditea México | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar un préstamo en Creditea México. Una guía completa sobre cómo obtener financiamiento rápido, flexible y 100% en línea.",
};

// Custom Cyan Arrow Icon Component (Matches #11465b -> cyan-900 approx)
function CyanArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-cyan-900 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" className="fill-cyan-900" />
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

export default function RequisitosPrestamosCrediteaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-creditea"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo en Creditea México
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              En un mundo donde la flexibilidad financiera es clave para
              afrontar gastos inesperados o alcanzar metas personales, los
              préstamos personales se han convertido en una herramienta
              fundamental.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Creditea México es una de las plataformas más populares en el país
              para obtener financiamiento de forma rápida y sencilla. A
              continuación, te presentamos una guía detallada sobre los
              requisitos necesarios para solicitar un préstamo en Creditea y
              cómo funciona el proceso.
            </p>

            {/* Image 1 (Featured) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/creditea-1-1-1.webp"
                alt="Préstamos Creditea"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Qué es Creditea */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Creditea?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Creditea es una plataforma financiera digital que ofrece préstamos
              personales a corto plazo, diseñada para ayudar a las personas a
              gestionar gastos imprevistos o proyectos personales. Sus productos
              están orientados a proporcionar soluciones de crédito flexibles,
              con un proceso 100% en línea, lo que significa que no tendrás que
              acudir a una sucursal física para hacer tu solicitud.
            </p>

            {/* Image 2 (Call to Action 1) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Creditea"
            />

            {/* Como funcionan */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo funcionan los préstamos en Creditea?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El servicio de Creditea te permite solicitar préstamos de manera
              rápida, con montos que van desde los $1,000 hasta $70,000 pesos, y
              plazos de pago ajustados a tus necesidades, de entre 4 y 36 meses.
              Dependiendo de tu perfil crediticio y capacidad de pago, el
              interés y el plazo pueden variar, pero lo más importante es que
              puedes manejar todo desde la comodidad de tu hogar.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Creditea se enfoca en proporcionar una experiencia de usuario
              ágil, y parte de esto es su proceso simplificado de solicitud.
              Veamos los requisitos básicos que necesitas cumplir.
            </p>

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo en Creditea
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Uno de los atractivos principales de Creditea es su accesibilidad.
              Los requisitos que debes cumplir son mínimos y están diseñados
              para que el proceso de aprobación sea rápido y sin complicaciones.
              A continuación, te detallamos cada uno de ellos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de edad (18 años en adelante):
                  </strong>{" "}
                  Como en cualquier entidad financiera, uno de los requisitos
                  principales es que seas mayor de edad. Esto garantiza que
                  estás en capacidad de contraer responsabilidades legales.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Para solicitar un préstamo en Creditea, necesitarás presentar
                  una identificación oficial que acredite tu identidad. Puedes
                  utilizar tu credencial del INE o tu pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con un comprobante de domicilio:
                  </strong>{" "}
                  Se te solicitará un comprobante de domicilio reciente, con una
                  antigüedad no mayor a tres meses. Esto puede ser un recibo de
                  luz, agua, gas, o teléfono a tu nombre.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tener una cuenta bancaria activa:
                  </strong>{" "}
                  Deberás tener una cuenta bancaria a tu nombre, ya que el
                  depósito del préstamo se realizará directamente en ella.
                  Además, Creditea utilizará esta cuenta para realizar los
                  cobros automáticos de las mensualidades.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Contar con un historial crediticio:
                  </strong>{" "}
                  Aunque Creditea no requiere un{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  impecable, sí se te evaluará en el Buró de Crédito para
                  determinar tu capacidad de pago.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos comprobables:
                  </strong>{" "}
                  Aunque no es necesario tener un empleo formal, debes contar
                  con ingresos comprobables que te permitan hacer frente al
                  préstamo solicitado.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 3 (Call to Action 3) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Requisitos Creditea"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-cyan-900 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Pasos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Pasos para solicitar un préstamo en Creditea
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso de solicitud de un préstamo en Creditea es muy sencillo
              y completamente en línea. Sigue estos pasos para iniciar tu
              trámite:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro en la plataforma:
                  </strong>{" "}
                  Ingresa a la página web oficial de Creditea y crea tu cuenta
                  con tus datos personales. Esto incluye tu nombre completo,
                  dirección, número de teléfono y correo electrónico.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completar la solicitud:
                  </strong>{" "}
                  Una vez registrado, deberás llenar la solicitud de préstamo,
                  indicando el monto que deseas pedir y el plazo de pago. En
                  esta etapa, también deberás adjuntar tus documentos.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de tu perfil:
                  </strong>{" "}
                  Después de enviar tu solicitud, el equipo de Creditea revisará
                  tu perfil y te dará una respuesta en un plazo corto de tiempo,
                  generalmente en menos de 24 horas.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y desembolso:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás una oferta con las
                  condiciones del préstamo. Si aceptas los términos, el dinero
                  se depositará en tu cuenta bancaria en cuestión de horas.
                </span>
              </li>
            </ul>

            {/* Image 4 (Call to Action 2) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Pasos Préstamo Creditea"
            />

            {/* Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de solicitar un préstamo en Creditea
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Optar por un préstamo con Creditea tiene varias ventajas, entre
              las cuales destacan:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  Rapidez en el proceso de aprobación y desembolso.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  Flexibilidad en los montos y plazos de pago.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  Plataforma 100% en línea, sin necesidad de acudir a una
                  sucursal.
                </span>
              </li>
              <li className="flex items-start">
                <CyanArrowIcon />
                <span className="text-gray-700">
                  Atención al cliente ágil y accesible.
                </span>
              </li>
            </ul>

            {/* Image 5 (Call to Action 4) */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Ventajas Creditea"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-cyan-900 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* A tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué debo tener en cuenta?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Es importante recordar que, aunque Creditea ofrece una alternativa
              accesible y rápida, cualquier préstamo debe tomarse con
              responsabilidad. Evalúa tu capacidad de pago antes de
              comprometerte con un crédito y asegúrate de comprender los
              términos y condiciones.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si necesitas financiamiento rápido y cuentas con los requisitos
              necesarios, Creditea México puede ser una excelente opción para
              ti. Ahora que conoces el proceso, estás listo para dar el
              siguiente paso en tu solicitud.
            </p>

            <div className="mt-8 pt-8 border-t">
              <Link
                href="https://www.creditea.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-cyan-900 text-white hover:bg-cyan-950 h-10 px-4 py-2 w-full md:w-auto"
              >
                Ver en sitio oficial
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-personales-rapidos-creditea"
                className="text-cyan-900 hover:underline"
              >
                Volver al análisis de Préstamos Personales Creditea
              </Link>
            </div>
          </div>
        </div>
      </article>

      <RelatedPosts currentSlug="requisitos-prestamos-creditea" />
      <CompactFooter />
    </main>
  );
}
