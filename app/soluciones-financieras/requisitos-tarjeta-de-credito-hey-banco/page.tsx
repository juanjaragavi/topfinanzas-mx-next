import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos de la tarjeta de crédito Hey Banco | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la tarjeta de crédito Hey Banco. Proceso 100% digital, sin anualidad y con beneficios exclusivos.",
};

// Dark Arrow Icon Component
function DarkArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#333333" />
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

export default function RequisitosTarjetaHeyBancoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-hey-banco"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de la tarjeta de crédito Hey Banco
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar la tarjeta de crédito Hey Banco, debes cumplir con
              ciertos requisitos básicos que te permitirán acceder a los
              beneficios de este producto financiero.
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Hey-Banco-1-1.jpg"
                alt="Tarjeta de Crédito Hey Banco"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Ser mayor de edad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ser mayor de edad
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Es necesario tener al menos 18 años para ser elegible para la
              tarjeta de crédito Hey Banco. No es necesario contar con una edad
              máxima, por lo que cualquier persona mayor de edad puede
              solicitarla.
            </p>

            {/* Section: Ingresos mínimos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ingresos mínimos
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Hey Banco no exige un ingreso mínimo estricto, lo que hace que
              esta tarjeta sea accesible para una gran variedad de personas,
              incluidos estudiantes o trabajadores independientes. Sin embargo,
              es recomendable contar con algún tipo de ingreso para poder cubrir
              los pagos mensuales de la tarjeta.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Section: Buen historial crediticio (opcional) */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Buen historial crediticio (opcional)
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              No es necesario contar con un historial crediticio para solicitar
              la tarjeta Hey Banco, lo que la convierte en una opción atractiva
              para quienes desean iniciar su historial financiero. No obstante,
              si ya cuentas con un historial, esto puede aumentar tus
              posibilidades de obtener una línea de crédito más alta.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image CTA 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Solicitar Tarjeta Hey Banco"
                fill
                className="object-contain"
              />
            </div>

            {/* Section: Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              A pesar de que el proceso es completamente digital, necesitarás
              proporcionar algunos documentos básicos que permitan verificar tu
              identidad y situación financiera. Estos son los requisitos de
              documentación para obtener la tarjeta de crédito Hey Banco:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Para verificar tu identidad, necesitarás una identificación
                  oficial vigente. Hey Banco acepta los siguientes documentos:
                  INE/IFE, pasaporte y cédula profesional.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es importante proporcionar un documento que acredite tu lugar
                  de residencia. Los comprobantes aceptados incluyen: Recibo de
                  luz, agua o teléfono, estado de cuenta bancario que no tenga
                  más de tres meses de antigüedad.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos (opcional):
                  </strong>{" "}
                  Aunque no es obligatorio proporcionar un comprobante de
                  ingresos, si tienes recibos de nómina o estados de cuenta
                  bancarios, puedes utilizarlos para respaldar tu capacidad de
                  pago y mejorar tus posibilidades de obtener una línea de
                  crédito mayo.
                </span>
              </li>
            </ul>

            {/* Image CTA 2 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Documentación Hey Banco"
                fill
                className="object-contain"
              />
            </div>

            {/* Section: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso de solicitud de la tarjeta de crédito Hey Banco es 100%
              digital, lo que significa que no necesitas acudir a una sucursal
              física ni enviar documentos por correo. Todo se realiza de manera
              rápida y segura a través de la aplicación móvil de Hey Banco.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Descarga la app:</strong> El
                  primer paso es descargar la aplicación de Hey Banco en tu
                  dispositivo móvil, disponible tanto para iOS como para
                  Android.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Crea una cuenta:</strong>{" "}
                  Una vez descargada la app, deberás registrarte y crear una
                  cuenta. Para esto, se te solicitará tu correo electrónico y
                  algunos datos básicos de contacto.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Llena el formulario de solicitud:
                  </strong>{" "}
                  Dentro de la aplicación, encontrarás un formulario que deberás
                  completar con información personal y financiera. Asegúrate de
                  proporcionar todos los datos requeridos de manera precisa para
                  evitar retrasos en la evaluación de tu solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Enviar documentación:
                  </strong>{" "}
                  Adjunta los documentos solicitados, como tu identificación
                  oficial y comprobante de domicilio. Si tienes comprobante de
                  ingresos, también puedes subirlo en este paso.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación y aprobación:
                  </strong>{" "}
                  Una vez enviada la solicitud, Hey Banco evaluará tu perfil
                  financiero. Recibirás una notificación sobre la aprobación de
                  tu tarjeta en un plazo de 24 a 48 horas.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Activación de la tarjeta:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás la tarjeta física en tu
                  domicilio en los días posteriores. Para empezar a utilizarla,
                  deberás activarla desde la aplicación móvil.
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
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Proceso Hey Banco"
                fill
                className="object-contain"
              />
            </div>

            {/* Section: ¿Qué trae adicional la tarjeta de crédito Hey Banco? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué trae adicional la tarjeta de crédito Hey Banco?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Además de sus requisitos accesibles y su proceso simplificado, la
              tarjeta de crédito Hey Banco ofrece una serie de beneficios que la
              hacen atractiva para una amplia gama de usuarios.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong> Uno
                  de los principales atractivos de esta tarjeta es que no tiene
                  anualidad. Esto significa que no tendrás que pagar una cuota
                  fija cada año por el uso de la tarjeta, lo que la convierte en
                  una opción económica para quienes buscan evitar cargos
                  adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cashback en todas tus compras:
                  </strong>{" "}
                  La tarjeta de crédito Hey Banco ofrece un programa de cashback
                  que te permite ganar un porcentaje de tus compras en dinero de
                  vuelta. Esto aplica para todo tipo de compras, lo que te
                  permite obtener recompensas por tus gastos diarios.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en pagos:
                  </strong>{" "}
                  La tarjeta también permite pagos flexibles, por lo que puedes
                  elegir si deseas realizar el pago mínimo, parcial o total cada
                  mes, de acuerdo con tu situación financiera.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control total desde la app:
                  </strong>{" "}
                  Desde la aplicación de Hey Banco, puedes controlar todos los
                  aspectos de tu tarjeta, desde consultar tu saldo y realizar
                  pagos hasta recibir notificaciones sobre tus movimientos en
                  tiempo real.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Image CTA 4 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="Beneficios Adicionales Hey Banco"
                fill
                className="object-contain"
              />
            </div>

            {/* Section: ¿Es la tarjeta de crédito Hey Banco para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Hey Banco para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta de crédito Hey Banco es una excelente opción para
              quienes buscan una tarjeta fácil de obtener, sin complicaciones y
              con beneficios como el cashback y la ausencia de anualidad. Su
              proceso de solicitud completamente digital la hace ideal para
              quienes prefieren manejar sus finanzas desde su celular, sin la
              necesidad de acudir a una sucursal bancaria.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si estás buscando una manera accesible de comenzar a construir tu
              historial crediticio o simplemente deseas una tarjeta con
              beneficios atractivos y sin costos ocultos, Hey Banco puede ser la
              opción ideal para ti. ¡Descarga la app y solicita tu tarjeta hoy
              mismo!
            </p>

            {/* Final CTA Button */}
            <Link
              href="https://banco.hey.inc/universo-hey/para-ti-o-tu-negocio/tarjetas-de-credito-hey"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mb-12"
            >
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
