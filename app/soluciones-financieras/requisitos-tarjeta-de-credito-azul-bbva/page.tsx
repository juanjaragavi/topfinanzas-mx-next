import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ResponsiveImage from "@/components/ui/responsive-image";

export const metadata: Metadata = {
  title: "Requisitos Tarjeta de Crédito Azul BBVA | Top Finanzas MX",
  description:
    "Conoce los Requisitos Tarjeta de Crédito Azul BBVA y descubre si es la opción ideal para ti.",
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

export default function RequisitosTarjetaAzulBBVAPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-azul-bbva"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para la Tarjeta de Crédito Azul BBVA
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Azul de BBVA es una opción ideal para los
              que están empezando a construir su crédito o aquellos que buscan
              maximizar las recompensas por sus gastos cotidianos.
            </p>

            {/* Image 1 */}
            <div className="my-8">
              <ResponsiveImage
                src="https://media.topfinanzas.com/images/TC_bbva-azul.jpg"
                alt="Tarjeta de Crédito Azul de BBVA"
              />
            </div>

            {/* Section 1 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo calificar para la Tarjeta de Crédito Azul de BBVA?
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad y residencia:</strong>{" "}
                  Debes ser mayor de 18 años y residir en México. Esto asegura
                  que los solicitantes tengan la capacidad legal para
                  compromisos financieros y que el banco pueda operar dentro de
                  las leyes locales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  Se requiere un ingreso mínimo mensual de $6,000, lo que hace
                  que esta tarjeta sea accesible para un amplio rango de
                  ingresos, incluidos los jóvenes profesionales y personas con
                  ingresos moderados.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* CTA Image 1 */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Tarjeta"
            />

            {/* Section 2 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación necesaria:
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación Oficial:
                  </strong>{" "}
                  Una INE/IFE, pasaporte mexicano o FM2 vigente.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de Domicilio:
                  </strong>{" "}
                  Documentos recientes (no mayores a 3 meses) como facturas de
                  servicios o estados de cuenta bancarios.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial Crediticio:
                  </strong>{" "}
                  Debes autorizar a BBVA a realizar una consulta de tu historial
                  en el Buró de Crédito.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Estado de Cuenta Bancario:
                  </strong>{" "}
                  Necesitas presentar un estado de cuenta bancario que confirme
                  tus ingresos, lo cual es fundamental para evaluar tu capacidad
                  de pago.
                </span>
              </li>
            </ul>

            {/* CTA Image 2 */}
            <ActionBanner
              href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Solicitar Tarjeta"
            />

            {/* Section 3 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Evaluando los costos
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Es fundamental entender los costos asociados con la Tarjeta de
              Crédito Azul de BBVA para tomar una decisión informada:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Comisión Anual:</strong>{" "}
                  $748.00 más IVA, con posibilidad de bonificación si cumples
                  con ciertos criterios.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    CAT (Costo Anual Total):
                  </strong>{" "}
                  El CAT de 97.3% más IVA es considerable y debe ser evaluado
                  frente a los beneficios ofrecidos por la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Disposición de Efectivo:
                  </strong>{" "}
                  Se aplica una comisión del 6.5% sobre el monto retirado, una
                  opción a considerar solo para emergencias debido al costo
                  asociado.
                </span>
              </li>
            </ul>

            {/* CTA Image 3 */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicitar Tarjeta"
            />

            {/* Section 4 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios y características
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Puntos BBVA:</strong> Gana
                  el 9% de tus compras en puntos BBVA, que pueden ser canjeados
                  en una amplia variedad de comercios. Esto convierte cada gasto
                  en una oportunidad para ahorrar y obtener recompensas.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad Avanzada:</strong>{" "}
                  Incluye un CVV dinámico para transacciones en línea, que
                  cambia con cada operación, minimizando el riesgo de fraude en
                  compras por internet.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Sostenibilidad:</strong> La
                  tarjeta está fabricada con más del 85% de plástico reciclado,
                  lo que responde a una creciente demanda de productos
                  financieros sostenibles.
                </span>
              </li>
            </ul>

            {/* CTA Image 4 */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Solicitar Tarjeta"
            />

            {/* Section 5 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Optimiza tu experiencia financiera con la Tarjeta de Crédito Azul
              de BBVA
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito Azul de BBVA es particularmente ideal para
              varios perfiles de consumidores, gracias a sus características
              accesibles y sus múltiples beneficios:
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
              Profesionales jóvenes y primeros usuarios de tarjetas de crédito:
            </h3>
            <p className="text-lg text-gray-700 mb-4 font-normal">
              Con un requisito de ingreso mínimo mensual de $6,000, esta tarjeta
              es perfecta para jóvenes profesionales o personas que recién
              inician su carrera y están comenzando a construir su historial
              crediticio. Es una excelente opción para quienes necesitan una
              herramienta financiera confiable que facilite la gestión de gastos
              cotidianos mientras desarrollan un crédito sólido.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
              Consumidores conscientes del presupuesto:
            </h3>
            <p className="text-lg text-gray-700 mb-4 font-normal">
              Ideal para quienes están atentos a maximizar cada peso que gastan.
              Con la posibilidad de acumular puntos BBVA por compras, que luego
              pueden usarse en una diversidad de establecimientos, esta tarjeta
              ofrece un retorno efectivo sobre los gastos cotidianos.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona"
                className="text-blue-600 hover:underline"
              >
                5 pasos para un presupuesto familiar exitoso
              </Link>
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">
              Viajeros frecuentes y compradores en línea:
            </h3>
            <p className="text-lg text-gray-700 mb-4 font-normal">
              El CVV dinámico y las protecciones adicionales como el seguro de
              pérdida y demora de equipaje, hacen de esta tarjeta una opción
              segura para quienes viajan regularmente o realizan muchas compras
              en línea. Estas características aseguran tranquilidad al proteger
              contra el fraude y otros riesgos asociados con el uso de la
              tarjeta en el extranjero y en comercio electrónico.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la Tarjeta de Crédito Azul de BBVA para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Al considerar la Tarjeta de Crédito Azul de BBVA, es importante
              evaluar cómo sus características específicas se alinean con tus
              necesidades y estilo de vida, asegurando que eliges una
              herramienta financiera que no solo maneje tus gastos de manera
              eficiente, sino que también enriquezca tu vida financiera con
              beneficios adicionales.
            </p>

            <div className="flex justify-center my-8">
              <Link
                href="https://www.bbva.mx/personas/productos/tarjetas-de-credito/tarjeta-de-credito-azul.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition hover:scale-105 inline-block"
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
