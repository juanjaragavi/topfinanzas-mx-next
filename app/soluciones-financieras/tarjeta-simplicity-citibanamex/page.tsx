import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la Tarjeta de Crédito Joy Banamex | Top Finanzas MX",
  description:
    "Conoce todo sobre la tarjeta Joy Banamex (antes Simplicity): sin anualidad, seguridad sin números impresos y gestión total desde la app.",
};

// Blue Arrow Icon Component
function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#1e40af" />
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

export default function TarjetaSimplicityPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-simplicity-citibanamex"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la Tarjeta de Crédito Joy Banamex
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta de crédito Joy Banamex ofrece seguridad y flexibilidad
              sin costos ocultos.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  Disponible con ingresos desde $7,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Meses sin intereses y 2x1 en Cinépolis.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Segura:</strong> Sin números
                  impresos, CVV digital y bloqueo desde la app.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gestión desde la app:
                  </strong>{" "}
                  Consulta y administra tu tarjeta fácilmente.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-joy-banamex"
              className="block w-full"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/foto2-1024x536.jpg"
                alt="Tarjeta de Crédito Joy Banamex"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: ¿Qué es la tarjeta? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito Simplicity de Citibanamex?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta Joy Banamex es un producto financiero diseñado para
              ofrecer una experiencia segura y sin costos innecesarios. Destaca
              por su ausencia de cuota anual y la posibilidad de elegir la fecha
              de corte, brindando flexibilidad a los usuarios.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Pensada para quienes buscan comodidad en compras físicas y
              digitales, Joy Banamex ofrece promociones exclusivas, como meses
              sin intereses y descuentos en comercios aliados.
            </p>

            {/* Section: Beneficios */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Beneficios de la tarjeta Joy Banamex
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  Solicítala con un ingreso mensual mínimo de $7,000 MXN.
                  Además, evita la comisión por inactividad realizando al menos
                  una compra al mes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones y descuentos exclusivos:
                  </strong>{" "}
                  Disfruta de beneficios como 2x1 en Cinépolis y meses sin
                  intereses en establecimientos participantes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguridad en compras físicas y digitales:
                  </strong>{" "}
                  Tu tarjeta no tiene números impresos ni CVV visible,
                  aumentando la protección. Además, puedes generar un CVV
                  dinámico en cada compra y bloquearla desde la app Banamex en
                  caso de extravío.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control total desde la app Banamex:
                  </strong>{" "}
                  Desde la aplicación puedes consultar tu saldo, revisar
                  movimientos, pagar tu tarjeta y recibir alertas de
                  vencimiento, asegurando un mejor control de tus finanzas.
                </span>
              </li>
            </ul>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Section: ¿Qué debo hacer para solicitarla? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Qué debo hacer para solicitarla?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Solicitar la tarjeta Joy Banamex es sencillo, pero debes cumplir
              con ciertos requisitos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Como con cualquier tarjeta de crédito, debes ser mayor de edad
                  para poder solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ingresos mínimos de $7,000 pesos mensuales:
                  </strong>{" "}
                  Para poder aplicar a esta tarjeta, debes tener ingresos
                  mensuales comprobables de al menos $7,000 pesos. Este
                  requisito asegura que los solicitantes tengan la capacidad de
                  manejar el crédito de manera responsable.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen historial crediticio:
                  </strong>{" "}
                  Citibanamex revisará tu historial crediticio para determinar
                  si cumples con los criterios necesarios. Un buen historial
                  aumenta tus posibilidades de ser aprobado.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial y comprobante de domicilio:
                  </strong>{" "}
                  Deberás presentar una identificación oficial vigente (INE o
                  pasaporte) y un comprobante de domicilio reciente (no mayor a
                  tres meses).
                </span>
              </li>
            </ul>

            {/* Section: ¿Cuál es el proceso de solicitud? */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cuál es el proceso de solicitud de la tarjeta Joy de Banamex?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso para solicitar la tarjeta es bastante sencillo. Puedes
              hacerlo en línea o visitando. A continuación, te explicamos los
              pasos básicos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Completar el formulario de solicitud:
                  </strong>{" "}
                  Inicia el proceso ingresando al sitio web de Citibanamex o
                  acudiendo a una de sus sucursales. Te solicitarán que
                  completes un formulario con tus datos personales, ingresos y
                  empleo actual.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Enviar los documentos requeridos:
                  </strong>{" "}
                  Una vez completado el formulario, deberás adjuntar tus
                  documentos, como la identificación oficial y comprobante de
                  domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Revisión del historial crediticio:
                  </strong>{" "}
                  Banamex realizará una revisión de tu historial crediticio para
                  evaluar tu elegibilidad. Este proceso puede tardar algunos
                  días.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega de la tarjeta:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás la tarjeta en tu
                  domicilio en pocos días. Luego podrás activarla y empezar a
                  disfrutar de sus beneficios.
                </span>
              </li>
            </ul>

            {/* Section: ¿Por qué elegir? */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              ¿Por qué elegir la tarjeta Joy de Banamex?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Joy Banamex es ideal para quienes buscan seguridad y comodidad en
              una tarjeta de crédito sin costos adicionales. Su ausencia de
              anualidad, protección avanzada y beneficios exclusivos la
              convierten en una excelente opción para administrar tus finanzas
              sin complicaciones.
            </p>

            {/* Final Section: ¿Es la opción ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es la opción ideal para ti?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Si buscas una tarjeta sin costos ocultos y con máxima seguridad,
              la Joy Banamex es una opción a considerar. Con beneficios como CVV
              digital, 2×1 en Cinépolis y control total desde la app, esta
              tarjeta se adapta a las necesidades de usuarios que valoran la
              tranquilidad y el acceso a promociones exclusivas.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-simplicity-citibanamex"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
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
