import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo en Moneyman | Top Finanzas MX",
  description:
    "Moneyman ofrece préstamos rápidos y accesibles en línea. Conoce los requisitos y el proceso de solicitud.",
};

// Moneyman Check Icon (Lime-500)
function MoneymanCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-lime-500 mt-1 mr-3 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export default function RequisitosMoneymanPrestamosPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-moneyman-prestamos"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo en Moneyman
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Moneyman ofrece préstamos personales en línea rápidos y accesibles
              en México, ideales para personas sin historial crediticio o con
              puntajes no perfectos. Regulados por PROFECO, garantizan seguridad
              y legalidad en todas las operaciones.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                className="text-lime-500 hover:underline"
              >
                ¿Cuál es el mejor préstamo personal?
              </Link>
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 1 (Hero) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-3.webp"
                alt="Moneyman requisitos"
                width={820}
                height={462}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Requisitos List */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos principales
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Edad y Residencia:</strong>{" "}
                  Debes ser mayor de 18 años y residir en México.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Documentación Identificativa:
                  </strong>{" "}
                  Es necesario contar con IFE/INE vigente, RFC y CURP.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Cuenta de Débito:</strong>{" "}
                  Se requiere una cuenta de débito con al menos un año de
                  antigüedad para el depósito del préstamo.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si te falta RFC o CURP, puedes obtenerlos en los sitios oficiales
              del SAT y la RENAPO.
            </p>

            {/* Image 2 (Action 1) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas de crédito sin anualidad"
            />

            {/* Proceso de solicitud de préstamo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud de préstamo
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso para obtener un préstamo con Moneyman es completamente
              digital y está diseñado para ser rápido y sencillo:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Registro en la Web:</strong>{" "}
                  Ingresa a la página de Moneyman y crea una cuenta con tu
                  correo electrónico.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud del Préstamo:
                  </strong>{" "}
                  Selecciona el monto y plazo deseados y completa el formulario.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aprobación Rápida:</strong>{" "}
                  Moneyman evalúa tu solicitud casi instantáneamente,
                  comunicándose por correo electrónico o mensaje de texto si
                  eres aprobado.
                </span>
              </li>
            </ul>

            {/* Image 3 (Action 3 - per ordering) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Top tarjetas de neobancos"
            />

            {/* Aspectos clave a considerar */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Aspectos clave a considerar
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Moneyman ofrece préstamos desde $1,000 MXN hasta $18,000 MXN con
              plazos entre 7 y 30 días. La tasa de interés varía entre 365% y
              467.2% anual, con un CAT promedio de 606.8% sin IVA.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Ventajas de los préstamos Moneyman
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos de Moneyman destacan por no requerir avales ni
              garantías, ofreciendo gran flexibilidad para aumentar montos y
              extender plazos de pago en futuras solicitudes. El proceso
              totalmente digital facilita una gestión eficiente desde cualquier
              lugar.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
                className="text-lime-500 hover:underline"
              >
                Top tarjetas de crédito para estudiantes
              </Link>
            </p>

            {/* Image 4 (Action 2 - per ordering) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="CAT en tarjetas de crédito"
            />

            {/* Usos adecuados para los préstamos de Moneyman */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Usos adecuados para los préstamos de Moneyman
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos de Moneyman son especialmente útiles en situaciones
              que requieren una solución financiera rápida y temporal debido a
              su accesibilidad y rápida disposición de fondos. A continuación,
              se detallan algunos escenarios donde un préstamo de Moneyman
              podría ser particularmente apropiado:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Emergencias Inesperadas:
                  </strong>{" "}
                  Los préstamos de Moneyman son ideales para situaciones
                  urgentes donde se necesitan fondos inmediatos, como
                  emergencias médicas o reparaciones críticas en el hogar. La
                  capacidad de obtener un préstamo rápidamente puede ser vital
                  en estos casos.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Consolidación de Deudas de Corto Plazo:
                  </strong>{" "}
                  Si te enfrentas a fechas de pago inminentes que podrían
                  incurrir en penalizaciones o intereses elevados, un préstamo
                  de Moneyman puede servir como un puente financiero para
                  consolidar estas obligaciones hasta que puedas liquidarlas en
                  un plazo más manejable.
                </span>
              </li>
              <li className="flex items-start">
                <MoneymanCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cubrir Déficits Temporales de Flujo de Caja:
                  </strong>{" "}
                  Para individuos o pequeños empresarios que esperan ingresos
                  confirmados en un futuro cercano pero necesitan cubrir gastos
                  inmediatos, los préstamos de Moneyman pueden ofrecer una
                  solución temporal sin comprometer operaciones o necesidades
                  básicas.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-lime-500 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Es importante considerar que debido a las tasas de interés
              elevadas de Moneyman, estos préstamos no deben ser vistos como una
              solución a largo plazo o para gastos discrecionales como viajes de
              lujo o compras no esenciales. Los préstamos deben utilizarse de
              manera estratégica y responsable, asegurándose de que los
              beneficios inmediatos justifiquen el costo.
            </p>

            {/* Image 5 (Action 4) */}
            <ActionBanner
              href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Cómo saber si estás en buró de crédito?"
            />

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tomando decisiones financieras inteligentes con Moneyman
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Antes de solicitar un préstamo con Moneyman, es crucial evaluar tu
              situación financiera para asegurarte de que podrás cumplir con los
              términos del préstamo sin exponerte a dificultades financieras
              futuras. Considera otras opciones de financiamiento y compara las
              condiciones antes de comprometerte, para asegurar que estás
              eligiendo la solución más adecuada y rentable para tus
              necesidades.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
