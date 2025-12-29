import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos Tarjeta HSBC Zero | Top Finanzas MX",
  description:
    "Conoce los requisitos para solicitar la Tarjeta HSBC Zero, una opción sin anualidad y con múltiples beneficios. Descubre si es ideal para ti.",
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

export default function RequisitosHSBCZeroPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-hsbc-zero"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Conoce los requisitos Tarjeta HSBC Zero
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Zero es una opción ideal para quienes buscan una herramienta
              financiera sin comisiones anuales y con múltiples beneficios.
            </p>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/HSBC-Zero-1.jpg"
                alt="Tarjeta HSBC Zero"
                width={800}
                height={450}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>

            {/* Section 1: ¿Qué necesitas...? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Qué necesitas para solicitar tu Tarjeta HSBC Zero?
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Para solicitar la Tarjeta HSBC Zero, debes cumplir con los siguientes criterios:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Edad:</strong>{" "}
                  Tener entre 18 y 74 años 11 meses.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  Contar con un ingreso mensual de al menos $5,000 M.N.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Historial crediticio:</strong>{" "}
                  Es necesario tener un buen historial crediticio en el Buró de Crédito. Además,
                  es recomendable contar con al menos 6 meses de antigüedad en este historial.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Estabilidad laboral:</strong>{" "}
                  Debes tener una antigüedad mínima de 1 año en tu empleo actual.
                </span>
              </li>
            </ul>

            {/* Image: Top tarjetas */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Top tarjetas de crédito sin anualidad"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Section 2: Documentación necesaria */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Documentación necesaria
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Al momento de solicitar tu tarjeta, asegúrate de tener listos los siguientes
              documentos:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Identificación oficial:</strong>{" "}
                  Credencial de elector o, en caso de ser extranjero, FM2 y pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Comprobante de ingresos:</strong>{" "}
                  Puedes presentar tus dos últimos recibos de nómina, una tarjeta de crédito de
                  otra institución, o un estado de cuenta de inversiones o a la vista.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Comprobante de domicilio:</strong>{" "}
                  Recibo de luz o predial con una antigüedad no mayor a dos meses.
                </span>
              </li>
            </ul>

            {/* Image: Eres estudiante */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="¿Eres estudiante?"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mb-10">
               <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link href="/mx/finanzas-personales/ideas-de-negocio-para-emprendedores/" className="text-blue-600 hover:underline">
                  5 ideas de negocio para emprendedores jóvenes
                </Link>
              </p>
            </div>

            {/* Section 3: Pasos para solicitar la tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Pasos para solicitar la tarjeta
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              El proceso de solicitud es sencillo y puede realizarse tanto en línea como en
              una sucursal de HSBC. Aquí te explicamos cómo:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Solicitud en Línea:</strong>{" "}
                  Puedes aplicar directamente desde tu celular. Solo necesitas ingresar tus datos
                  personales y financieros tal como están registrados en Buró de Crédito, y
                  completar la información adicional requerida.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Solicitud en Sucursal:</strong>{" "}
                  Si prefieres hacerlo en persona, puedes acudir a cualquier sucursal de HSBC.
                  Llevando contigo la documentación necesaria, podrás recibir tu tarjeta el mismo
                  día.
                </span>
              </li>
            </ul>

            {/* Section 4: Tasas y CAT */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Tasas y CAT:
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Es fundamental que conozcas las condiciones financieras antes de aplicar.{" "}
              <strong className="text-gray-900">La Tarjeta HSBC Zero tiene una tasa de interés fija anual promedio
              ponderada por saldo de 41.42%, con un CAT promedio de 94.3% sin IVA.</strong>{" "}
              Recuerda que, para mantener tu tarjeta sin comisiones, debes realizar al menos
              una transacción mensual de $1 M.N. o más.
            </p>

            {/* Image: Entiende el CAT */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Entiende el CAT en Tarjetas de Crédito"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Section 5: ¿Para quién es la Tarjeta HSBC Zero? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Para quién es la Tarjeta HSBC Zero?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta HSBC Zero es más que una simple tarjeta de crédito; es la solución
              ideal para quienes buscan tomar el control de sus finanzas sin complicaciones. Si
              te identificas con alguno de estos perfiles, esta tarjeta está hecha para ti:
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Jóvenes profesionales
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Si estás comenzando a construir tu futuro financiero, la HSBC Zero es tu mejor
              aliada. Te permite crear un historial crediticio sólido sin las preocupaciones de
              comisiones anuales que suelen afectar a quienes recién empiezan. Es perfecta
              para quienes desean establecer una base financiera fuerte desde el principio.
            </p>
            <div className="mb-8">
               <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link href="/mx/finanzas-personales/ideas-de-negocio-para-emprendedores/" className="text-blue-600 hover:underline">
                  5 ideas de negocio para emprendedores jóvenes
                </Link>
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Planificadores
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Si realizas compras regulares pero prefieres mantener tus finanzas simples y
              claras, esta tarjeta es ideal para ti. No necesitas gastar de más para evitar
              comisiones; con una sola transacción al mes, mantienes tu tarjeta sin costos
              adicionales, lo que te da la libertad de gastar solo cuando lo necesites.
            </p>
            <div className="mb-8">
               <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link href="/mx/finanzas-personales/pasos-para-un-presupuesto-familiar/" className="text-blue-600 hover:underline">
                  5 pasos para un presupuesto familiar exitoso
                </Link>
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Amantes de la simplicidad
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              ¿Buscas una tarjeta que sea tan directa como tus decisiones financieras? La HSBC
              Zero elimina las sorpresas desagradables, ofreciendo un producto transparente
              donde tú decides cuándo y cómo utilizarla. Perfecta para aquellos que valoran la
              claridad y desean evitar la letra pequeña.
            </p>
            <div className="mb-10">
               <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link href="/mx/finanzas-personales/tarjetas-de-credito-de-neobancos/" className="text-blue-600 hover:underline">
                  Top tarjetas de neobancos
                </Link>
              </p>
            </div>

            {/* Image: Buscando el mejor préstamo */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="¿Buscando el mejor préstamo personal?"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Section 6: ¿Es la tarjeta HSBC Zero para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Es la tarjeta HSBC Zero para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              La Tarjeta HSBC Zero se posiciona como una opción inteligente para quienes
              buscan simplicidad, eficiencia y beneficios tangibles sin las complicaciones de
              comisiones anuales. Si cumples con los requisitos y te identificas con alguno de los
              perfiles descritos, esta tarjeta puede ser la herramienta financiera perfecta
              para acompañarte en cada paso de tu camino. Aprovecha la oportunidad de tomar el
              control de tus finanzas con una tarjeta diseñada para adaptarse a tu estilo de
              vida, sin sorpresas ni costos inesperados.
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="https://www.hsbc.com.mx/tarjetas-de-credito/productos/zero/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-red-600 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-red-700 transition-colors text-lg"
              >
                Ver en sitio oficial
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
