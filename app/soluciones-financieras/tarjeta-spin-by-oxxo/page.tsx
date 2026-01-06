import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarjeta Spin by OXXO: ¿Es una buena opción para ti? | Top Finanzas MX",
  description:
    "Spin by OXXO es una solución financiera integral que ofrece una tarjeta Visa y app para enviar dinero, sin necesidad de cuenta bancaria tradicional.",
};

// Orange Arrow Icon Component (Color #fa8f31 approx Orange-400)
function OrangeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-orange-400 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
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

export default function TarjetaSpinOxxoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-spin-by-oxxo"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Tarjeta Spin by OXXO: ¿Es una buena opción para ti?
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Spin by OXXO se presenta como una solución financiera integral,
              diseñada para facilitar a los usuarios en México el acceso a
              servicios financieros básicos de manera conveniente y accesible.
              Respaldada por Compropago, busca revolucionar la interacción con
              el dinero a través de una aplicación móvil y una tarjeta de débito
              Visa.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta y tarjeta Visa:
                  </strong>{" "}
                  Tarjeta física para compras en establecimientos y en línea,
                  con opción de retiro en OXXO y cajeros.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Envío de dinero simplificado:
                  </strong>{" "}
                  Envía y recibe dinero fácilmente entre cuentas Spin y bancos
                  tradicionales.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa Spin Premia:
                  </strong>{" "}
                  Acumula puntos por tus compras para canjear en la red OXXO y
                  gasolineras asociadas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Depósitos fáciles:</strong>{" "}
                  Añade fondos mediante transferencias o directamente en tiendas
                  OXXO.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-de-la-tarjeta-spin-by-oxxo"
              className="block w-full"
            >
              <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Top_Finanzas_Top_tarjeta_Spin_by_OXXO-1-820x547.webp"
                alt="Tarjeta Spin by OXXO de Top Finanzas"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              En el universo de las finanzas personales, Spin by OXXO emerge
              como una opción diseñada para simplificar la gestión del dinero.
              Es un producto autorizado y regulado que elimina muchas barreras
              de la banca tradicional. A continuación detallamos sus
              características principales.
            </p>

            {/* Section: Características */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características principales de Spin by OXXO
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Spin by OXXO ofrece innovación y accesibilidad para sus usuarios
              con funcionalidades clave:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta y tarjeta Visa:
                  </strong>{" "}
                  Permite realizar compras tanto en establecimientos físicos
                  como digitales. Además, facilita el retiro de dinero sin
                  tarjeta en tiendas OXXO, ideal para quienes no dependen de una
                  cuenta bancaria convencional.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gestión de fondos flexible:
                  </strong>{" "}
                  Se pueden añadir fondos mediante transferencias bancarias o
                  depósitos en caja, ofreciendo versatilidad en el manejo de
                  efectivo.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recompensas Spin Premia:
                  </strong>{" "}
                  Al usar la tarjeta, acumulas puntos canjeables por productos o
                  combustible, incentivando el uso frecuente.
                </span>
              </li>
            </ul>

            {/* Section: Ventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de la Tarjeta Spin OXXO
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Al analizar lo bueno de este producto, destacan varios puntos
              fuertes:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Accesibilidad Inmediata:
                  </strong>{" "}
                  El proceso de contratación es rápido y con requisitos mínimos,
                  disponible en línea o en sucursales.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Respaldo VISA:</strong>{" "}
                  Aceptación internacional asegurada en millones de comercios.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin Saldo Mínimo:</strong>{" "}
                  No te preocupes por mantener montos mínimos en la cuenta para
                  evitar penalizaciones.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tecnología Contactless y CVV dinámico:
                  </strong>{" "}
                  Mayor seguridad para tus transacciones físicas y digitales.
                </span>
              </li>
            </ul>

            {/* Section: Desventajas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Desventajas a considerar
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Es importante también tener en cuenta algunas limitaciones:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Límites de depósito:
                  </strong>{" "}
                  Tiene un tope de $22,000 MXN mensuales, lo que puede ser
                  restrictivo para algunos usuarios.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ausencia de rendimientos:
                  </strong>{" "}
                  No genera ganancias sobre el saldo mantenido.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección del saldo:
                  </strong>{" "}
                  A diferencia de los bancos, no cuenta con el respaldo del
                  seguro IPAB.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisiones:</strong>{" "}
                  Algunas operaciones de depósito y retiro pueden incurrir en
                  costos adicionales.
                </span>
              </li>
            </ul>

            {/* Section: Para quién es ideal */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal Spin by OXXO?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Spin by OXXO es una opción excelente para quienes buscan
              simplicidad y acceso a servicios financieros sin las
              complicaciones de la banca tradicional. Es especialmente adecuada
              para:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  Personas que valoran la conveniencia de operar tanto en línea
                  como en la extensa red de tiendas OXXO.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  Usuarios nuevos en el sistema financiero que buscan una
                  introducción amigable.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  Residentes de áreas donde las sucursales bancarias
                  convencionales son escasas.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Si buscas una alternativa de débito funcional y accesible, Spin by
              OXXO ofrece una combinación atractiva de conveniencia y
              beneficios. Sin embargo, si requieres servicios financieros más
              complejos o herramientas de ahorro con rendimiento, podrías
              considerar otras opciones en el mercado.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
