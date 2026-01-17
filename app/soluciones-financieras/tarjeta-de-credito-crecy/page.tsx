import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-crecy",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-crecy",
    },
  },
  title: "Beneficios de la tarjeta de crédito Crecy | Top Finanzas MX",
  description:
    "Descubre los beneficios de la tarjeta Crecy: crédito con criptomonedas, sin buró y liquidez sin vender tus activos.",
};

// Purple Arrow Icon Component
function PurpleArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-purple-900 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#581c87" />
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

export default function TarjetaCrecyPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-crecy"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Crecy
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Crecy es una solución innovadora diseñada
              para quienes buscan aprovechar sus activos digitales de forma
              inteligente.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Crédito con criptomonedas:
                  </strong>{" "}
                  Usa tus criptomonedas como garantía para obtener crédito sin
                  venderlas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Límites altos y sin buró:
                  </strong>{" "}
                  Obtén hasta $700,000 MXN de crédito sin revisión en buró de
                  crédito.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ideal para inversionistas:
                  </strong>{" "}
                  Perfecta para quienes buscan aprovechar el valor a largo plazo
                  de sus criptomonedas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Riesgo de volatilidad:
                  </strong>{" "}
                  Si tus cripto pierden valor, Crecy podría liquidar tus activos
                  para cubrir el crédito.
                </span>
              </li>
            </ul>

            {/* CTA Button 1 */}
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-crecy/"
                className="bg-purple-900 hover:bg-purple-950 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/crecy-1-1.jpg"
                alt="Tarjeta de Crédito Crecy"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              A continuación, exploraremos sus requisitos, cómo funciona y por
              qué podría ser la opción ideal para usuarios interesados en
              criptomonedas.
            </p>

            {/* ¿Qué es la tarjeta de crédito Crecy? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito Crecy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Crecy es una tarjeta que se apoya en la tecnología blockchain y el
              mundo de las criptomonedas, permitiendo a los usuarios acceder a
              líneas de crédito respaldadas por sus activos digitales. Su
              principal atractivo es que no necesitas vender tus criptomonedas
              para obtener liquidez; en su lugar, las utilizas como garantía.
            </p>

            {/* ¿Qué necesito para tener la tarjeta de Crédito Crecy? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué necesito para tener la tarjeta de Crédito Crecy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Obtener la tarjeta de crédito Crecy es un proceso bastante
              sencillo y directo. Aquí te presentamos los principales
              requisitos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Es necesario cumplir con la mayoría de edad legal para
                  solicitar cualquier producto financiero en México.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tener una cuenta de criptomonedas:
                  </strong>{" "}
                  Uno de los principales requisitos es tener activos digitales,
                  ya que son los que actúan como respaldo para la línea de
                  crédito que ofrece Crecy.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Un documento de identidad como el INE o pasaporte será
                  requerido para verificar tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Correo electrónico y número de teléfono:
                  </strong>{" "}
                  Necesitas tener un medio de contacto válido para recibir
                  notificaciones y completar el proceso de solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Monto mínimo de garantía en criptomonedas:
                  </strong>{" "}
                  La cantidad mínima requerida para respaldar tu línea de
                  crédito dependerá del valor de las criptomonedas que tengas.
                  Generalmente, se requiere un porcentaje considerable del
                  crédito que solicitas.
                </span>
              </li>
            </ul>

            {/* ¿Cómo funciona la tarjeta de crédito Crecy? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo funciona la tarjeta de crédito Crecy?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El funcionamiento de la tarjeta Crecy se basa en un modelo de
              crédito colateralizado con criptomonedas. Aquí te explicamos el
              paso a paso:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Depósito de garantía en criptomonedas:
                  </strong>{" "}
                  Para acceder a una línea de crédito con Crecy, primero debes
                  depositar tus criptomonedas en una billetera digital que ellos
                  proporcionan. Estas monedas actuarán como garantía de tu
                  crédito.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Acceso a crédito:</strong>{" "}
                  Una vez que tus criptomonedas están depositadas, puedes
                  acceder a una línea de crédito en pesos mexicanos. El monto
                  dependerá del valor de tus criptoactivos y la política de
                  garantía de Crecy.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Pagos flexibles:</strong>{" "}
                  Crecy permite realizar pagos parciales o totales del crédito a
                  lo largo del tiempo. Durante este periodo, las criptomonedas
                  que has depositado como garantía estarán congeladas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Retiro de garantía:</strong>{" "}
                  Una vez que hayas pagado todo el crédito, puedes retirar tus
                  criptomonedas sin penalización.
                </span>
              </li>
            </ul>

            {/* Ventajas de la tarjeta de crédito Crecy */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de la tarjeta de crédito Crecy
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Liquidez sin vender criptomonedas:
                  </strong>{" "}
                  Una de las principales ventajas es que no necesitas vender tus
                  criptomonedas para obtener liquidez, lo cual te permite seguir
                  beneficiándote del potencial de apreciación de tus activos
                  digitales.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en pagos:
                  </strong>{" "}
                  Puedes elegir pagar en su totalidad o en partes, según tu
                  capacidad financiera, sin la presión de perder tus
                  criptomonedas.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recompensas:</strong>{" "}
                  Dependiendo del tipo de criptomonedas que uses como garantía,
                  Crecy puede ofrecer recompensas en forma de devolución en
                  cripto, lo que lo hace atractivo para los inversionistas de
                  largo plazo.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso sin buró de crédito:
                  </strong>{" "}
                  No necesitas tener un historial crediticio en buró para
                  acceder a la tarjeta, lo que la convierte en una excelente
                  opción para aquellos que no cumplen con los requisitos de
                  crédito tradicionales.
                </span>
              </li>
            </ul>

            {/* Oportunidades de mejora de la tarjeta de crédito Crecy */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Oportunidades de mejora de la tarjeta de crédito Crecy
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Aunque la tarjeta de crédito Crecy ofrece grandes beneficios,
              también es importante tener en cuenta algunos aspectos que podrían
              no ser tan favorables:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Volatilidad de las criptomonedas:
                  </strong>{" "}
                  Como las criptomonedas son activos volátiles, el valor de tu
                  garantía podría disminuir drásticamente, lo que afectaría tu
                  línea de crédito o podría requerir que deposites más activos
                  como respaldo.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Riesgo de liquidación:
                  </strong>{" "}
                  Si el valor de tus criptomonedas cae por debajo de un umbral
                  específico, Crecy podría liquidar parte o la totalidad de tus
                  activos para cubrir el crédito.
                </span>
              </li>
              <li className="flex items-start">
                <PurpleArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Exclusividad para usuarios de criptomonedas:
                  </strong>{" "}
                  Si no tienes experiencia con criptomonedas o no tienes acceso
                  a ellas, la tarjeta Crecy no sería una opción viable para ti.
                </span>
              </li>
            </ul>

            {/* ¿Es la tarjeta de crédito Crecy para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Crecy para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si eres un inversionista en criptomonedas que busca obtener
              liquidez sin vender tus activos digitales, la Tarjeta de Crédito
              Crecy puede ser una opción ideal. La capacidad de usar tus
              criptomonedas como garantía mientras sigues aprovechando su
              potencial de apreciación es una ventaja considerable.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Sin embargo, si no estás familiarizado con el mundo de las
              criptomonedas o no te sientes cómodo con la volatilidad de estos
              activos, esta tarjeta podría no ser la opción más segura para ti.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Crecy es una solución financiera innovadora
              que ofrece flexibilidad y acceso a crédito para usuarios de
              criptomonedas. Con ventajas como la obtención de liquidez sin
              vender tus criptoactivos y la ausencia de una revisión de buró de
              crédito, es una herramienta potente para quienes buscan aprovechar
              sus activos digitales.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              No obstante, debido a la volatilidad inherente de las
              criptomonedas, es importante que los usuarios sean conscientes de
              los riesgos antes de comprometerse con este tipo de producto. Si
              estás listo para asumir estos riesgos, Crecy podría brindarte una
              ventaja competitiva en el mundo financiero digital.
            </p>

            {/* Final CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="/soluciones-financieras/requisitos-tarjeta-de-credito-crecy/"
                className="bg-purple-900 hover:bg-purple-950 text-white font-bold py-4 px-8 rounded-full transition-colors text-xl"
              >
                Quiero conocer los requisitos
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-de-credito-crecy"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
