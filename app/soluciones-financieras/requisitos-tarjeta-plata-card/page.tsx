import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos de la tarjeta Plata card | Top Finanzas MX",
  description:
    "Conoce los requisitos, proceso de solicitud y beneficios de la Tarjeta de Crédito Plata. Descubre si es la opción ideal para ti.",
};

// Orange Arrow Icon Component
function OrangeArrowIcon() {
  return (
    <svg
      className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="12" r="12" fill="#f97316" />
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

export default function RequisitosTarjetaPlataCardPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-plata-card"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Requisitos de la tarjeta Plata card
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Paragraph */}
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Plata te ofrece flexibilidad y beneficios en
              cada compra.
            </p>

            {/* Main Image */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/plata.jpg"
                alt="Tarjeta de Crédito Plata"
                width={800}
                height={450}
                className="w-full h-auto rounded-sm shadow-lg"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              La Tarjeta de Crédito Plata se destaca por su flexibilidad y los
              beneficios que ofrece, convirtiéndola en una opción inteligente
              para optimizar tus finanzas. Con un alto límite de crédito, un
              atractivo programa de cashback y herramientas avanzadas de
              seguridad, es una tarjeta diseñada para quienes buscan maximizar
              cada peso que gastan. Conoce los requisitos esenciales y los
              costos asociados para aprovechar al máximo esta herramienta
              financiera.
            </p>

            {/* Image: Top tarjetas */}
            <div className="mb-10">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Top tarjetas de crédito sin anualidad"
                width={800}
                height={400}
                className="w-full h-auto rounded-sm shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/soluciones-financieras/tarjetas-de-credito-sin-anualidad/"
                  className="text-blue-600 hover:underline"
                >
                  Top tarjetas de crédito sin anualidad
                </Link>
              </p>
            </div>

            {/* Section 1: Requisitos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Requisitos de la Tarjeta de Crédito Plata
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Para poder solicitar la Tarjeta de Crédito Plata, es necesario
              cumplir con los siguientes requisitos:
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Ser mayor de edad:</strong>{" "}
                  Debes tener al menos 18 años para poder solicitar la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Contar con identificación oficial:
                  </strong>{" "}
                  Se requiere una credencial para votar (INE) vigente, emitida
                  por el Instituto Nacional Electoral.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Tener un RFC:</strong> El
                  Registro Federal de Contribuyentes es necesario para la
                  verificación crediticia.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  Aunque no se especifica un monto exacto, tener ingresos
                  comprobables es esencial para la aprobación de la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Historial crediticio:
                  </strong>{" "}
                  Contar con un historial crediticio activo es fundamental para
                  evaluar la solicitud.
                </span>
              </li>
            </ul>

            {/* Image: Eres estudiante */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="¿Eres estudiante?"
                width={800}
                height={400}
                className="w-full h-auto rounded-sm shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/finanzas-personales/tarjetas-de-credito-para-estudiantes/"
                  className="text-blue-600 hover:underline"
                >
                  Tarjetas de crédito para estudiantes
                </Link>
              </p>
            </div>

            {/* Section 2: Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Solicitar la Tarjeta de Crédito Plata es un proceso sencillo y
              rápido. Una vez que tu solicitud sea aprobada, recibirás tu
              tarjeta en un plazo corto, directamente en tu domicilio, sin costo
              adicional. Puedes hacerlo de las siguientes maneras:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Desde la aplicación móvil:
                  </strong>{" "}
                  Descarga la app de Plata, completa los datos solicitados y
                  envía tu solicitud en pocos minutos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">En línea:</strong> Visita el
                  sitio web de Plata y llena el formulario de solicitud en la
                  sección correspondiente.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Por teléfono:</strong>{" "}
                  Comunícate con el servicio de atención al cliente de Plata
                  para recibir asistencia en el proceso de solicitud.
                </span>
              </li>
            </ul>

            {/* Image: Buscando el mejor préstamo */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="¿Buscando el mejor préstamo personal?"
                width={800}
                height={400}
                className="w-full h-auto rounded-sm shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/soluciones-financieras/cual-es-el-mejor-prestamo-personal/"
                  className="text-blue-600 hover:underline"
                >
                  ¿Cuál es el mejor préstamo personal?
                </Link>
              </p>
            </div>

            {/* Section 3: Consideraciones importantes */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Consideraciones importantes: CAT y Tasas de Interés
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Es esencial entender los costos asociados con la Tarjeta de
              Crédito Plata para tomar una decisión informada. A continuación,
              te explicamos los aspectos más importantes:
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    CAT (Costo Anual Total):
                  </strong>{" "}
                  El CAT promedio de la Tarjeta de Crédito Plata es de 164.22%
                  sin IVA. Este porcentaje refleja el costo total del crédito,
                  incluyendo intereses y comisiones. Este CAT puede parecer alto
                  comparado con otras opciones, por lo que es crucial usar la
                  tarjeta de manera estratégica para aprovechar sus beneficios.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Tasa de interés:</strong> La
                  tasa de interés ordinaria es del 99.9% anual sin IVA. Esta
                  tasa se aplica si no pagas el total de tu saldo antes de la
                  fecha límite de pago. Planificar tus pagos te ayudará a evitar
                  cargos por intereses y a mantener el costo de tus compras bajo
                  control.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Comisiones:</strong> Además
                  del CAT y las tasas de interés, es importante estar al tanto
                  de las comisiones que pueden aplicarse como:{" "}
                  <strong>Disposición de efectivo:</strong> $199 + IVA por cada
                  retiro en cajeros automáticos. <strong>Pago tardío:</strong>{" "}
                  $400 + IVA en caso de no realizar el pago mínimo antes de la
                  fecha límite.
                </span>
              </li>
            </ul>

            {/* Image: Entiende el CAT */}
            <div className="mb-6">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Entiende el CAT en Tarjetas de Crédito"
                width={800}
                height={400}
                className="w-full h-auto rounded-sm shadow-md"
              />
            </div>
            <div className="mb-10">
              <p className="text-gray-700">
                <strong>Conoce más:</strong>{" "}
                <Link
                  href="/mx/finanzas-personales/cat-en-tarjetas-de-credito/"
                  className="text-blue-600 hover:underline"
                >
                  Entiende el CAT en Tarjetas de Crédito
                </Link>
              </p>
            </div>

            {/* Section 4: ¿Para quién es ideal? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Para quién es ideal la Tarjeta de Crédito Plata?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Plata está diseñada para personas que desean
              maximizar sus compras y aprovechar beneficios únicos, como el
              cashback y la flexibilidad en los pagos. Es ideal para:
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Compradores frecuentes
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Si realizas compras regulares en categorías como supermercados,
              entretenimiento o restaurantes, la Tarjeta de Crédito Plata puede
              ser muy beneficiosa para ti. Su programa de cashback te permite
              obtener reembolsos en efectivo en distintas categorías, ayudándote
              a ahorrar en tus gastos cotidianos.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Maximiza tu dinero:</strong>{" "}
                  Obtén hasta un 15% de cashback en categorías seleccionadas
                  cada mes.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Categorías seleccionadas:
                  </strong>{" "}
                  Disfruta de cashback en categorías específicas establecidas
                  por la tarjeta. Es importante revisar las opciones disponibles
                  cada mes para asegurarte de aprovechar al máximo este
                  beneficio.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Planificadores de grandes compras
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Para quienes planean realizar adquisiciones importantes, como
              electrodomésticos o viajes, la Tarjeta de Crédito Plata ofrece la
              opción de diferir pagos a meses con condiciones ventajosas.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Pagos flexibles:</strong>{" "}
                  Elige plazos de 3 a 12 meses, con promociones de meses sin
                  intereses disponibles en comercios seleccionados.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Controla tus gastos:
                  </strong>{" "}
                  Realiza grandes compras y difiere tus pagos de manera que se
                  adapten a tu capacidad financiera, sin sorpresas innecesarias.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Usuarios digitales precavidos
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Si valoras la seguridad y el control digital de tus finanzas, la
              Tarjeta de Crédito Plata ofrece herramientas avanzadas que se
              adaptan a tus necesidades.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">
                    Gestión total desde la app:
                  </strong>{" "}
                  Controla tu tarjeta mediante la aplicación móvil, donde puedes
                  congelar o desbloquear tu tarjeta, establecer límites de gasto
                  y recibir notificaciones en tiempo real de cada transacción.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700 text-lg">
                  <strong className="text-gray-900">Seguridad 24/7:</strong>{" "}
                  Disfruta de un robusto sistema de protección antifraude que
                  monitorea tus transacciones constantemente para detectar y
                  prevenir actividades sospechosas, brindándote tranquilidad y
                  seguridad en cada compra.
                </span>
              </li>
            </ul>

            {/* Section 5: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              ¿Es la tarjeta de crédito Plata adecuada para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              La Tarjeta de Crédito Plata ofrece una combinación de beneficios
              atractivos, como un alto límite de crédito y un programa de
              cashback significativo. Sin embargo, es crucial que los posibles
              usuarios comprendan los requisitos para obtenerla y los costos
              asociados, como el CAT y las tasas de interés.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Si cumples con los requisitos y estás dispuesto a manejar tus
              pagos de manera responsable, la Tarjeta de Crédito Plata puede ser
              una excelente herramienta financiera para maximizar tus compras y
              gestionar tus finanzas de manera inteligente.
            </p>

            {/* Final CTA Button */}
            <div className="mb-10">
              <Link
                href="https://platacard.mx/es/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-500 text-white text-center font-bold py-4 px-6 rounded-full hover:bg-orange-600 transition-colors text-lg"
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
