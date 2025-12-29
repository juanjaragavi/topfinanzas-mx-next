import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la Tarjeta de Crédito Tigres Afirme | Top Finanzas MX",
  description:
    "Descubre los beneficios, requisitos y costos de la Tarjeta de Crédito Tigres Afirme: puntos Bonus, meses sin intereses, anualidad y tasa de interés.",
};

function GreenCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#16a34a" />
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

export default function TarjetaDeCreditoTigresAfirmePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-tigres-afirme"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la Tarjeta de Crédito Tigres Afirme
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Tigres Afirme es más que un simple
              instrumento financiero; es una extensión de la pasión por el
              equipo de fútbol Tigres UANL, diseñada para enriquecer la
              experiencia de los aficionados y ofrecer ventajas financieras
              significativas.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios exclusivos:
                  </strong>{" "}
                  Acumula Puntos Bonus, disfruta de meses sin intereses y accede
                  a descuentos relacionados con el Club Tigres.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad financiera:
                  </strong>{" "}
                  Realiza pagos automáticos, dispone de efectivo desde AfirmeNet
                  y programa pagos recurrentes de servicios.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Requisitos accesibles:
                  </strong>{" "}
                  Edad de 18 a 69 años, ingresos mínimos de $8,500 y antigüedad
                  laboral de al menos 6 meses.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Costos claros:</strong>{" "}
                  Anualidad de $700 más IVA y tasa de interés promedio ponderado
                  de 59.8% anual.
                </span>
              </li>
            </ul>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-tigres-afirme"
              className="block w-full"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-6-1.webp"
                alt="Tarjeta de Crédito Tigres Afirme"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal la Tarjeta de Crédito Tigres Afirme?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Esta tarjeta está especialmente dirigida a los seguidores
              fervientes de los Tigres UANL que desean combinar su amor por el
              equipo con beneficios financieros exclusivos. Es ideal para
              quienes buscan una herramienta que les permita gestionar sus
              finanzas personales mientras disfrutan de ventajas relacionadas
              con su equipo favorito.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Beneficios destacados
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Tigres Afirme ofrece una serie de beneficios
              que la distinguen en el mercado:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Domiciliación de pagos:
                  </strong>{" "}
                  Permite vincular automáticamente el pago de la tarjeta a una
                  cuenta de cheques o depósitos de Afirme, facilitando la
                  gestión de pagos y evitando retrasos.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Pago recurrente de servicios:
                  </strong>{" "}
                  Posibilita programar pagos automáticos de servicios como luz,
                  agua, teléfono, entre otros, asegurando que las obligaciones
                  mensuales se cumplan puntualmente.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Puntos Bonus por compras:
                  </strong>{" "}
                  Cada compra realizada con la tarjeta acumula Puntos Bonus, que
                  pueden canjearse por una amplia gama de productos y servicios,
                  así como por descuentos en tiendas departamentales y otros
                  establecimientos.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Meses sin intereses:
                  </strong>{" "}
                  Ofrece la posibilidad de diferir compras a meses sin intereses
                  en establecimientos participantes, facilitando la adquisición
                  de bienes y servicios de mayor valor.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Disposición de efectivo:
                  </strong>{" "}
                  A través de AfirmeNet, los usuarios pueden disponer de
                  efectivo, brindando flexibilidad financiera en momentos de
                  necesidad.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cómo obtener la Tarjeta de Crédito Tigres Afirme?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Para solicitar esta tarjeta, es necesario cumplir con los
              siguientes requisitos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Tener entre
                  18 y 69 años y 11 meses.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Contar con un buen historial crediticio, demostrando
                  responsabilidad en el manejo de finanzas previas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Documentación:</strong>{" "}
                  Identificación oficial vigente (INE para ciudadanos mexicanos,
                  FM2 o Pasaporte para extranjeros) y comprobante de domicilio
                  reciente (no mayor a 3 meses), como recibos de luz, agua o
                  gas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos:</strong> Ingreso
                  mínimo mensual de $8,500.00 pesos y comprobante de ingresos,
                  como los últimos recibos de nómina o una constancia laboral.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Antigüedad laboral:</strong>{" "}
                  Mínimo 6 meses en el empleo actual, indicando estabilidad
                  laboral.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud de crédito:
                  </strong>{" "}
                  Completar y firmar la solicitud correspondiente.
                </span>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Costos asociados
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Es importante considerar los siguientes costos al evaluar esta
              tarjeta:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de interés promedio ponderado:
                  </strong>{" "}
                  59.8% anual.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Anualidad:</strong> $700.00
                  pesos más IVA.
                </span>
              </li>
            </ul>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Consideraciones finales
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Tigres Afirme es más que un instrumento
              financiero; es una extensión de la pasión por el equipo. Sin
              embargo, es crucial evaluar los costos y beneficios asociados para
              determinar si se ajusta a tus necesidades financieras.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              Para más información o para iniciar el proceso de solicitud,
              visita el sitio oficial de Afirme o acércate a una sucursal
              cercana.
            </p>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-tigres-afirme"
              className="block w-full mb-12"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
