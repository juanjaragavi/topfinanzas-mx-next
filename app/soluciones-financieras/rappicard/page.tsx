import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la RappiCard | Top Finanzas MX",
  description:
    "Descubre los beneficios de la RappiCard: sin anualidad, cashback en todas tus compras y gestión 100% digital. ¡Solicítala hoy mismo!",
};

// Black Arrow Icon Component
function BlackArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-black mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#000000" />
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

export default function RappiCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="rappicard"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Beneficios de la RappiCard
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La RappiCard es una tarjeta de crédito revolucionaria que se
              adapta al estilo de vida moderno.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  Disfruta de una tarjeta completamente libre de cuotas anuales.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Devolución en efectivo:
                  </strong>{" "}
                  Gana cashback en cada compra que realices.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Acceso digital inmediato:
                  </strong>{" "}
                  Solicita y utiliza la tarjeta desde la app de Rappi.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Requisitos accesibles:
                  </strong>{" "}
                  Sin complicaciones para obtenerla, perfecta para nuevos
                  usuarios de tarjetas de crédito.
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mb-10">
              <Link
                href="/mx/soluciones-financieras/requisitos-rappicard/"
                className="block w-full bg-black text-white text-center font-bold py-4 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/rappicard-1.jpg"
                alt="Tarjeta de Crédito RappiCard"
                width={800}
                height={450}
                className="w-full h-auto rounded-sm shadow-lg"
                priority
              />
            </div>

            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Diseñada para usuarios que buscan comodidad, recompensas y
              simplicidad, esta tarjeta destaca por su proceso de solicitud 100%
              digital y sus atractivos beneficios como cashback y cero
              anualidad. En este artículo, te explicaremos los requisitos para
              obtenerla, cómo solicitarla y sus principales ventajas.
            </p>

            {/* Section 1: ¿Cómo obtener para la RappiCard? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Cómo obtener para la RappiCard?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Obtener la RappiCard es un proceso sencillo, diseñado para
              facilitar el acceso al crédito de manera rápida y eficiente. Estos
              son los requisitos básicos:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Debes contar con la mayoría de edad para aplicar.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Contar con una identificación oficial vigente:
                  </strong>{" "}
                  Puede ser tu INE o pasaporte, siempre que esté al día.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Historial crediticio positivo:
                  </strong>{" "}
                  Aunque no es obligatorio tener un amplio historial, una buena
                  reputación en Buró de Crédito es clave.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Este puede ser un recibo de nómina, estado de cuenta bancario
                  o cualquier documento que acredite tu capacidad de pago.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Descargar la app de Rappi:
                  </strong>{" "}
                  La tarjeta solo se puede solicitar a través de la aplicación
                  móvil de Rappi.
                </span>
              </li>
            </ul>

            {/* Section 2: ¿Qué es lo más destacado de la RappiCard? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Qué es lo más destacado de la RappiCard?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Elegir la RappiCard no solo significa tener una tarjeta de crédito
              más; significa disfrutar de beneficios exclusivos que hacen tu
              vida más sencilla y rentable.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Sin costo anual:</strong>{" "}
                  Con la RappiCard no tendrás que preocuparte por pagar una
                  anualidad, lo que la convierte en una opción económica para
                  quienes buscan aprovechar los beneficios de una tarjeta de
                  crédito sin incurrir en costos adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Cashback en todas tus compras:
                  </strong>{" "}
                  Uno de los mayores atractivos de esta tarjeta es la devolución
                  de un porcentaje de tus compras en efectivo. Podrás disfrutar
                  de: 3% de cashback en compras realizadas dentro de Rappi y 1%
                  de cashback en compras realizadas fuera de la plataforma.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Aceptación internacional:
                  </strong>{" "}
                  Puedes usar tu RappiCard en miles de comercios tanto en México
                  como en el extranjero, ya que cuenta con respaldo de
                  Mastercard.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Gestión 100% digital:
                  </strong>{" "}
                  Desde la solicitud hasta la administración de tus gastos, todo
                  se realiza a través de la app de Rappi. Esto incluye: Bloquear
                  y desbloquear tu tarjeta en segundos, consultar tus
                  movimientos en tiempo real y pagar tu saldo pendiente
                  directamente desde la aplicación.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Accede a descuentos y meses sin intereses en compras dentro de
                  la app de Rappi y otros comercios aliados.
                </span>
              </li>
            </ul>

            {/* Section 3: Pasos para solicitar tu RappiCard */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Pasos para solicitar tu RappiCard
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              El proceso para obtener la RappiCard es rápido y completamente
              digital. Sigue estos pasos:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Descarga la app de Rappi:
                  </strong>{" "}
                  Si aún no la tienes, descárgala en tu dispositivo móvil desde
                  Google Play o App Store.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Crea tu cuenta o inicia sesión:
                  </strong>{" "}
                  Asegúrate de ingresar tus datos personales correctamente.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Busca la opción de RappiCard:
                  </strong>{" "}
                  Dentro de la app, encontrarás una sección dedicada a la
                  tarjeta de crédito.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Completa tu solicitud:
                  </strong>{" "}
                  Llena el formulario con tus datos personales, ingresos y
                  cualquier información adicional que te soliciten.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  En la mayoría de los casos, recibirás una respuesta en menos
                  de 24 horas.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Activa tu tarjeta:</strong>{" "}
                  Una vez aprobada, podrás empezar a usar tu tarjeta virtual de
                  inmediato mientras esperas la física.
                </span>
              </li>
            </ul>

            {/* Section 4: ¿Es la RappiCard adecuada para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Es la RappiCard adecuada para ti?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              La RappiCard es ideal para personas que buscan:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  Obtener beneficios inmediatos en sus compras diarias.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  Evitar costos de mantenimiento como anualidades.
                </span>
              </li>
              <li className="flex items-start">
                <BlackArrowIcon />
                <span className="text-gray-700 text-lg">
                  Tener una tarjeta con gestión digital y opciones de cashback.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-10 text-lg">
              Sin embargo, es importante utilizarla de manera responsable,
              asegurándote de cumplir con los pagos a tiempo para evitar
              intereses y mantener un buen historial crediticio.
            </p>

            {/* Section 5: A tener en cuenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              A tener en cuenta
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              La RappiCard es una excelente opción para quienes desean una
              tarjeta de crédito moderna, sin costos adicionales y con
              beneficios como cashback y gestión digital. Su proceso de
              solicitud sencillo y sus múltiples ventajas la convierten en una
              alternativa atractiva para usuarios jóvenes o personas que buscan
              optimizar sus finanzas personales.
            </p>
            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Si estás listo para llevar tus compras al siguiente nivel y
              disfrutar de beneficios únicos, la RappiCard puede ser la opción
              perfecta para ti. ¿Qué esperas para solicitarla?
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="/soluciones-financieras/requisitos-rappicard/"
                className="block w-full bg-black text-white text-center font-bold py-4 px-6 rounded-full hover:bg-gray-800 transition-colors text-lg"
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
