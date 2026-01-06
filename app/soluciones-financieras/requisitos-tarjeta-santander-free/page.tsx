import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar la tarjeta Santander Free | Top Finanzas MX",
  description:
    "Conoce los requisitos, beneficios y proceso de solicitud de la Tarjeta Santander Free. Una opción ideal sin anualidad bajo un consumo mínimo mensual.",
};

// Red Arrow Icon Component (Color: #d92d21 approx Red-600)
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#dc2626" />
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

export default function RequisitosTarjetaSantanderFreePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-santander-free"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta Santander Free
            </h1>

            {/* Ad Unit: square03 */}
            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              ¿Estás buscando una tarjeta de crédito sin anualidad y con
              múltiples beneficios? La Tarjeta Santander Free es una excelente
              opción si estás interesado en acceder a servicios financieros sin
              complicaciones y obtener ventajas exclusivas.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              En este artículo, te explicaremos los requisitos, características
              y beneficios clave de esta tarjeta.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-red-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 1: Santander-Free-1-1.webp */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/Santander-Free-1-1.webp"
                alt="Tarjeta Santander Free"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* ¿Qué es la Tarjeta Santander Free? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la Tarjeta Santander Free?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta Santander Free es una de las más populares en México
              debido a su atractivo principal: no cobra anualidad si cumples con
              un mínimo de compras mensuales. Además, te brinda acceso a un
              paquete de beneficios que la hacen ideal para quienes desean
              ahorrar en comisiones y disfrutar de servicios premium como
              protecciones y promociones exclusivas de Mastercard.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sin anualidad:</strong>{" "}
                  Mantén tu tarjeta sin pagar anualidad realizando compras
                  mensuales de al menos $200 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios Mastercard Nivel Oro:
                  </strong>{" "}
                  Incluye asistencia y protecciones como seguro de viaje y
                  compras.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Accede a meses sin intereses y descuentos en establecimientos
                  afiliados a Santander.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de recompensas:
                  </strong>{" "}
                  Gana puntos por cada compra que realices y canjéalos por
                  diferentes productos o experiencias.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                className="text-red-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Ad Unit: square04 (Placed reasonably mid-content) */}
            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cuáles son los requisitos para solicitar la Tarjeta Santander
              Free?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Antes de solicitar la tarjeta, es importante que cumplas con los
              requisitos establecidos por el banco. A continuación, te
              detallamos lo que necesitas:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad:</strong> Debes tener
                  entre 20 y 69 años para ser elegible.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  Se requiere que tengas un ingreso mensual mínimo de $7,500
                  MXN.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisión Anual:</strong> $0.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial:
                  </strong>{" "}
                  Necesitarás una identificación vigente, como la credencial de
                  elector (INE) o tu pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos:
                  </strong>{" "}
                  Presenta tus recibos de nómina o declaraciones de impuestos
                  recientes que verifiquen tus ingresos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es necesario presentar un recibo de servicios (agua, luz,
                  teléfono) con una antigüedad no mayor a tres meses.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Aunque no es necesario tener un historial extenso, es
                  preferible contar con un buen historial crediticio que
                  demuestre tu capacidad de pago.
                </span>
              </li>
            </ul>

            {/* Image 2: CTA 1 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas sin anualidad"
              className="my-8"
            />

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-red-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Cómo solicitar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo solicitar la tarjeta Santander Free?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El proceso de solicitud es sencillo y puedes realizarlo de
              diferentes maneras, tanto en línea como en sucursales físicas.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Dirígete al sitio web oficial de Santander, donde podrás
                  completar la solicitud con tus datos personales y financieros.
                  La ventaja de este método es que no tendrás que salir de casa
                  y el proceso es rápido.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud en sucursal:
                  </strong>{" "}
                  Si prefieres la atención personalizada, puedes acudir a una
                  sucursal Santander con los documentos mencionados y realizar
                  tu solicitud directamente con un asesor.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-red-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3: CTA 3 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Estudiantes Tarjetas"
              className="my-8"
            />

            {/* Proceso de aprobación */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de aprobación y entrega
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Una vez que envíes tu solicitud, Santander evaluará tus documentos
              y comprobará tu capacidad de pago. El tiempo de respuesta varía,
              pero generalmente recibirás una respuesta en un lapso de 3 a 5
              días hábiles. Si tu solicitud es aprobada, recibirás la tarjeta en
              la dirección que proporcionaste en un plazo de 5 a 7 días.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              En cuanto a las comisiones, los retiros de efectivo tienen un
              costo de $60 MXN en cajeros automáticos Santander y hasta $150 MXN
              en cajeros de otros bancos. Las tasas de interés pueden variar
              dependiendo de tu perfil crediticio y del uso que hagas de la
              tarjeta.
            </p>

            {/* Adicionales */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Adicionales a tener en cuenta
            </h3>
            <p className="text-gray-700 mb-4 font-normal">
              Además de los ya mencionados, la Tarjeta Santander Free ofrece
              otros beneficios que vale la pena destacar:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Compra protegida:</strong>{" "}
                  Las compras realizadas con esta tarjeta están protegidas por
                  un seguro que cubre daños o robos de productos adquiridos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Asistencia en viajes:
                  </strong>{" "}
                  Al pagar tus boletos de avión con la tarjeta, accedes a
                  asistencia en viajes, como servicios médicos, legales y de
                  emergencia.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Meses sin intereses:</strong>{" "}
                  Accede a promociones de meses sin intereses en comercios
                  afiliados, lo que te permitirá planificar tus compras de forma
                  más cómoda y sin sobrecostos.
                </span>
              </li>
            </ul>

            {/* Image 4: CTA 2 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Tarjetas sin anualidad"
              className="my-8"
            />

            {/* Opiniones */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
              Opiniones y recomendaciones
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta Santander Free es recomendada para personas que buscan
              evitar el pago de anualidades y disfrutar de beneficios
              adicionales. Es importante que mantengas un control adecuado de
              tus gastos para aprovechar las ventajas de la tarjeta sin incurrir
              en costos adicionales. Además, es ideal para aquellos que buscan
              construir o mejorar su historial crediticio.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Sin embargo, si no cumples con el requisito de compras mensuales,
              la anualidad puede representar un costo que deberías evaluar.
              También es recomendable tener en cuenta las tasas de interés, que
              pueden variar según tu perfil crediticio y uso de la tarjeta.
            </p>

            {/* Image 5: CTA 4 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Mejor préstamo personal"
              className="my-8"
            />

            {/* Final Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta Santander Free ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta Santander Free es una excelente opción para quienes
              buscan una tarjeta de crédito con beneficios y sin anualidad,
              siempre que se cumpla con el mínimo de compras mensuales. Ofrece
              un paquete de servicios robusto, que incluye seguros y
              promociones, lo que la convierte en una opción competitiva en el
              mercado mexicano. Si estás interesado en solicitarla, asegúrate de
              cumplir con los requisitos y de gestionar tus finanzas de manera
              responsable para sacarle el máximo provecho.
            </p>

            {/* Button CTA */}
            <Link
              href="https://www.santander.com.mx/personas/tarjetas-de-credito.html"
              className="block w-full mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
