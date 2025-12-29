import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios y características de la Tarjeta HSBC Air | Top Finanzas MX",
  description:
    "Descubre los beneficios de la Tarjeta HSBC Air: tasa de interés baja, meses sin intereses automáticos y transferencia de saldos.",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#dc2626" />
      <path
        d="M10 17L15 12L10 7"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TarjetaHSBCAirPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-hsbc-air"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Beneficios y características de la Tarjeta HSBC Air
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Air es una solución pensada para aquellos que
              buscan flexibilidad financiera y tasas de interés competitivas.
            </p>

            {/* Intro List */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Tasa de interés competitiva:
                  </strong>{" "}
                  Ahorra con una tasa anual del 39.90%.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Automáticos en compras mayores a $3,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Transferencia de saldos:
                  </strong>{" "}
                  Consolida deudas con una tasa fija anual del 21.90%.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">App móvil:</strong> Facilita
                  la gestión de pagos, consulta de saldos y más.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="mb-10">
              <Link
                href="/mx/soluciones-financieras/requisitos-tarjeta-hsbc-air/"
                className="block w-full bg-red-600 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-red-700 transition-colors text-lg"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/HSBC-Air-1.jpg"
                alt="Tarjeta HSBC Air"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Section 1: Ventajas principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ventajas principales de la Tarjeta HSBC Air
            </h2>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              1. Beneficios exclusivos
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Además de sus atractivas tasas, la tarjeta ofrece acceso a eventos
              exclusivos como la Gran Venta HSBC, en donde puedes acceder a
              boletos de conciertos en preventa y otras promociones, incluyendo
              hasta 10 meses sin intereses.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              2. Tasa de interés competitiva
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta ofrece una tasa variable anual del 39.90%,
              considerablemente baja en comparación con otras tarjetas de
              crédito del mercado. Esto se traduce en un ahorro significativo en
              intereses.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              3. Transferencia de saldos
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Los nuevos clientes, o aquellos que hayan tenido la tarjeta por
              menos de 6 meses, pueden transferir saldos de otras tarjetas a una
              tasa fija anual del 21.90%. Esta ventaja es excelente para quienes
              buscan consolidar deudas y simplificar sus pagos.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              4. Meses sin intereses automáticos
            </h3>
            <p className="text-lg text-gray-700 mb-10">
              En compras superiores a $3,000 MXN, la tarjeta aplica
              automáticamente hasta 3 meses sin intereses. Esta opción es ideal
              para quienes buscan financiar compras importantes sin preocuparse
              por intereses adicionales.
            </p>

            {/* Section 2: Detalles a considerar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Detalles a considerar
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Anualidad:</strong> La
                  tarjeta HSBC Air tiene una anualidad de $879 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Falta de programa de recompensas:
                  </strong>{" "}
                  A diferencia de otras tarjetas, HSBC Air no cuenta con un
                  programa de recompensas, como cashback o puntos por uso.
                </span>
              </li>
            </ul>

            {/* Section 3: ¿Quién debería considerar...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Quién debería considerar la Tarjeta HSBC Air?
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              Esta tarjeta es ideal para usuarios que buscan financiamiento a
              plazos, tasas de interés bajas y la posibilidad de gestionar
              deudas de manera más eficiente. Si frecuentemente realizas compras
              grandes o deseas consolidar saldos de otras tarjetas, HSBC Air
              puede ser la tarjeta indicada.
            </p>

            {/* Section 4: Beneficios adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Beneficios adicionales
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Soporte digital avanzado:
                  </strong>{" "}
                  Con la app de HSBC México, puedes gestionar tu tarjeta,
                  revisar tus saldos y realizar pagos de manera rápida y
                  sencilla. También puedes recibir asistencia en vivo, lo que
                  facilita una experiencia bancaria moderna y accesible.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Seguridad y protección:
                  </strong>{" "}
                  La tarjeta incluye protección de compras y cobertura en caso
                  de robo o pérdida. Además, se ofrece condonación del saldo en
                  caso de fallecimiento del titular, brindando mayor
                  tranquilidad a sus usuarios.
                </span>
              </li>
            </ul>

            {/* Section 5: ¿A qué debo prestarle especial atención? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿A qué debo prestarle especial atención?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Air se distingue por sus bajas tasas de interés y
              la facilidad para financiar compras grandes. Aunque tiene algunas
              limitaciones como la ausencia de recompensas y un costo de
              anualidad, sus ventajas la hacen una excelente opción para quienes
              valoran la flexibilidad financiera y el manejo eficiente de
              deudas. Si estás en busca de una tarjeta que combine tasas
              competitivas y soporte digital moderno, HSBC Air podría ser ideal
              para ti.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              Para más detalles y para conocer los requisitos de la Tarjeta HSBC
              Air, visita el sitio oficial de HSBC o consulta más información en
              la página de Top Finanzas.
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-hsbc-air/"
                className="block w-full bg-red-600 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-red-700 transition-colors text-lg"
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
