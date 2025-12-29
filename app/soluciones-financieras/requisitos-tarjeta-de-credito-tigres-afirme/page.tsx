import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para la Tarjeta de Crédito Tigres Afirme | Top Finanzas MX",
  description:
    "Conoce los requisitos, costos y beneficios exclusivos de la Tarjeta de Crédito Tigres Afirme para aficionados.",
};

// Green Arrow Icon Component
function GreenArrowIcon() {
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

export default function RequisitosTarjetaTigresAfirmePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-tigres-afirme"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para la Tarjeta de Crédito Tigres Afirme
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Tigres Afirme es una excelente opción para
              los aficionados del Club de Fútbol Tigres que buscan combinar su
              pasión deportiva con beneficios exclusivos.
            </p>

            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-6-1.webp"
                alt="Tarjeta de Crédito Tigres Afirme"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Diseñada para reflejar el orgullo de sus seguidores, esta tarjeta
              no solo les permite llevar su equipo favorito a todas partes, sino
              que también ofrece ventajas significativas que pueden marcar la
              diferencia en su vida financiera. A continuación, te presentamos
              los requisitos necesarios para solicitarla, los costos asociados y
              los beneficios que la hacen única.
            </p>

            {/* Pasos a seguir */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los pasos a seguir?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Solicitar la Tarjeta de Crédito Tigres Afirme es un proceso
              sencillo, siempre y cuando cumplas con los requisitos
              establecidos. Estos son:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Tener entre
                  18 y 69 años y 11 meses.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Mantener un buen historial crediticio, demostrando
                  responsabilidad en el manejo de finanzas previas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Documentación:</strong>{" "}
                  Identificación oficial vigente (INE para ciudadanos mexicanos,
                  FM2 o Pasaporte para extranjeros) y comprobante de domicilio
                  reciente (no mayor a 3 meses), como recibos de luz, agua o
                  gas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos:</strong> Ingreso
                  mínimo mensual de $8,500.00 pesos y comprobante de ingresos,
                  como los últimos recibos de nómina o una constancia laboral.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Antigüedad laboral:</strong>{" "}
                  Mínimo 6 meses en el empleo actual, indicando estabilidad
                  laboral.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud de crédito:
                  </strong>{" "}
                  Completar y firmar la solicitud correspondiente.
                </span>
              </li>
            </ul>

            {/* CTA Banner 1 */}
            <div className="relative w-full h-32 md:h-48 my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="¿Eres estudiante?"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-center mb-8">
              <Link
                href="/finanzas-personales/tarjetas-de-credito-para-estudiantes/"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Conoce más
              </Link>
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Cumplir con estos criterios no solo facilita el proceso de
              aprobación, sino que también garantiza que los solicitantes puedan
              manejar de manera adecuada los compromisos financieros asociados a
              la tarjeta.
            </p>

            {/* Link 1 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </div>

            {/* Beneficios adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios adicionales de la Tarjeta de Crédito Tigres Afirme
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Esta tarjeta no solo cumple una función financiera, sino que
              también otorga acceso a beneficios únicos diseñados para los
              verdaderos fanáticos de Tigres. Entre ellos destacan:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Descuentos exclusivos:
                  </strong>{" "}
                  Obtén ofertas especiales en productos oficiales del Club
                  Tigres y servicios relacionados. Esto incluye entradas a
                  partidos, artículos de merchandising y promociones exclusivas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso prioritario a eventos:
                  </strong>{" "}
                  Como tarjetahabiente, puedes participar en eventos únicos
                  organizados por el Club Tigres, desde encuentros con jugadores
                  hasta experiencias VIP en el estadio.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Facilidades de pago:
                  </strong>{" "}
                  Disfruta de meses sin intereses en establecimientos
                  seleccionados y promociones que te ayudan a manejar mejor tus
                  finanzas.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Reconocimiento como fanático leal:
                  </strong>{" "}
                  Esta tarjeta te identifica como un verdadero seguidor del
                  equipo, permitiéndote portar un símbolo de tu pasión en cada
                  transacción.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además, cuenta con todas las funcionalidades de una tarjeta de
              crédito convencional, como compras en línea, pagos en
              establecimientos afiliados y acceso a servicios de emergencia
              financiera.
            </p>

            {/* Link 2 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </div>

            {/* CTA Banner 2 */}
            <div className="relative w-full h-32 md:h-48 my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Entiende el CAT en Tarjetas de Crédito"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-center mb-8">
              <Link
                href="/finanzas-personales/cat-en-tarjetas-de-credito/"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Ver ahora
              </Link>
            </div>

            {/* Costos asociados */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Costos asociados a la Tarjeta de Crédito Tigres Afirme
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar cualquier tarjeta de crédito, es crucial
              conocer los costos y tarifas asociados. En el caso de la Tarjeta
              de Crédito Tigres Afirme, estos son los principales:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de interés promedio ponderado:
                  </strong>{" "}
                  La tasa de interés es del 59.8% anual. Este porcentaje puede
                  variar según el comportamiento de uso y pago del usuario.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Anualidad:</strong> La
                  tarifa anual es de $700.00 pesos más IVA, una cuota
                  competitiva considerando los beneficios exclusivos que ofrece.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comisiones adicionales:
                  </strong>{" "}
                  Algunas comisiones pueden aplicarse dependiendo de los
                  servicios utilizados, como retiros de efectivo o pagos
                  tardíos. Es importante consultar los términos y condiciones
                  para evitar sorpresas.
                </span>
              </li>
            </ul>

            {/* CTA Banner 3 */}
            <div className="relative w-full h-32 md:h-48 my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="Buscando el mejor préstamo personal"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-center mb-8">
              <Link
                href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal/"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-12 rounded-full transition-colors text-lg"
              >
                Descubre más
              </Link>
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Conocer estos costos te permite planificar mejor el uso de la
              tarjeta y aprovechar sus ventajas sin incurrir en gastos
              innecesarios.
            </p>

            {/* Link 3 */}
            <div className="mb-8">
              <span className="font-bold text-black">Conoce más: </span>
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </div>

            {/* Consejos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Consejos para aprovechar al máximo tu tarjeta
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para obtener el máximo beneficio de la Tarjeta de Crédito Tigres
              Afirme, ten en cuenta los siguientes consejos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Usa la tarjeta de manera responsable:
                  </strong>{" "}
                  Realiza tus pagos a tiempo para evitar cargos por intereses y
                  mantener un buen historial crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprovecha los beneficios exclusivos:
                  </strong>{" "}
                  Participa en las promociones y eventos relacionados con el
                  Club Tigres. Esto no solo optimiza tu inversión, sino que
                  también te conecta más con el equipo.
                </span>
              </li>
              <li className="flex items-start">
                <GreenArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Consulta regularmente tu estado de cuenta:
                  </strong>{" "}
                  Mantente al tanto de tus gastos para evitar sorpresas y
                  asegurarte de que estás dentro de tu presupuesto.
                </span>
              </li>
            </ul>

            {/* Final CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.afirme.com/Personas/TDC/Tarjeta-Tigres.html"
                className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg"
              >
                Solicitar ahora
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
