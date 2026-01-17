import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { RelatedPosts } from "@/components/blog/related-posts";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-afluenta",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-afluenta",
    },
  },
  title: "Requisitos de los préstamos de Afluenta | Top Finanzas MX",
  description:
    "Afluenta permite acceder a financiamiento P2P sin bancos tradicionales. Conoce los requisitos, documentación y proceso de solicitud.",
};

// Afluenta Check Icon (Blue-950)
function AfluentaCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-950 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosPrestamosAfluentaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-afluenta"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos de los préstamos de Afluenta
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Afluenta, una plataforma de préstamos entre personas
              (peer-to-peer), permite a los usuarios acceder a financiamiento
              sin recurrir a instituciones bancarias tradicionales.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Aquí te explicamos los requisitos necesarios para solicitar un
              préstamo en Afluenta, organizados en un formato claro y fácil de
              seguir.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-blue-950 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
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
                src="https://media.topfinanzas.com/images/download-6.webp"
                alt="Préstamos Afluenta"
                width={820}
                height={462}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Edad y residencia */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Edad y residencia
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar un préstamo en Afluenta, debes ser mayor de 18 años
              y residir en el país donde operan sus servicios. Afluenta exige
              que sus solicitantes sean personas con residencia establecida y
              documentación válida.
            </p>

            {/* Ingresos mínimos comprobables */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ingresos mínimos comprobables
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Uno de los principales requisitos es demostrar ingresos mínimos
              comprobables. Afluenta no especifica una cantidad mínima para
              todos los solicitantes, pero verifica que el solicitante tenga un
              flujo de ingresos regular, lo que brinda confianza en su capacidad
              de pago. Los documentos que suelen aceptarse para esta
              comprobación son:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">Recibos de nómina.</span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">Declaraciones fiscales.</span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  Estados de cuenta bancarios.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La plataforma se asegura de que los solicitantes tengan la
              solvencia necesaria para cubrir el préstamo dentro de los términos
              establecidos.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-blue-950 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 2 (Action 1) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas de crédito sin anualidad"
            />

            {/* Buen historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Buen historial crediticio
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Es importante contar con un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              positivo. Afluenta revisa el puntaje de crédito de sus
              solicitantes para evaluar su comportamiento financiero,
              asegurándose de que no existan{" "}
              <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                deudas
              </Link>{" "}
              pendientes significativas o historial de pagos atrasados.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Un historial limpio aumenta las probabilidades de aprobación,
              mientras que un puntaje de crédito bajo puede limitar el monto del
              préstamo o afectar los términos ofrecidos.
            </p>

            {/* Image 3 (Action 3 - per ordering requirements) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Top tarjetas de neobancos"
            />

            {/* Documentación requerida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Documentación requerida
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos previos, Afluenta solicita una serie de
              documentos que validen la identidad y situación financiera del
              solicitante. Aquí te detallamos los documentos requeridos.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes presentar una identificación oficial válida. Los
                  documentos aceptados incluyen: INE/IFE (México), pasaporte,
                  licencia de conducir.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Afluenta exige un comprobante que confirme tu residencia
                  actual. Se aceptan los siguientes documentos: Recibo de luz,
                  agua o teléfono (con antigüedad máxima de tres meses) y estado
                  de cuenta bancario.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobantes de ingresos:
                  </strong>{" "}
                  Para validar tu capacidad de pago, deberás proporcionar
                  documentos que demuestren tus ingresos. Entre los más
                  aceptados están: Recibos de nómina recientes, declaraciones de
                  impuestos y estados de cuenta bancarios.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estos documentos ayudarán a la plataforma a confirmar la
              estabilidad financiera del solicitante y su capacidad para
              devolver el préstamo.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-blue-950 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 4 (Action 2 - per ordering requirements) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="CAT en tarjetas de crédito"
            />

            {/* Proceso de solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso de solicitud de un préstamo en Afluenta es sencillo y
              se realiza completamente en línea. A continuación, te explicamos
              los pasos básicos para completar tu solicitud.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro y llenado de solicitud:
                  </strong>{" "}
                  Para iniciar el proceso, debes registrarte en la plataforma de
                  Afluenta y completar un formulario en línea con tus datos
                  personales, financieros y de contacto.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de la solicitud:
                  </strong>{" "}
                  Una vez enviada la solicitud, Afluenta revisará tu perfil
                  financiero y tu historial de crédito para determinar la
                  viabilidad del préstamo. Este proceso suele completarse en
                  pocos días.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y financiación:
                  </strong>{" "}
                  Si tu solicitud es aprobada, Afluenta buscará inversores que
                  financien tu préstamo a través de su plataforma. Los fondos se
                  depositarán en tu cuenta bancaria una vez que se haya
                  completado el financiamiento.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-blue-950 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Ventajas de los préstamos en Afluenta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ventajas de los préstamos en Afluenta
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos básicos, es importante que conozcas las
              ventajas que ofrece Afluenta como una plataforma de financiamiento
              alternativo:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en los montos:
                  </strong>{" "}
                  Afluenta ofrece distintos montos de préstamos, adaptados a las
                  necesidades específicas de cada usuario.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasas competitivas:</strong>{" "}
                  Las tasas de interés suelen ser más bajas que las de los
                  bancos tradicionales, ya que el modelo P2P permite que los
                  inversores decidan los términos de cada préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <AfluentaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso completamente digital:
                  </strong>{" "}
                  La solicitud y el seguimiento de tu préstamo pueden
                  gestionarse en línea, sin necesidad de acudir a una sucursal.
                </span>
              </li>
            </ul>

            {/* Image 5 (Action 4) */}
            <ActionBanner
              href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="¿Cómo saber si estás en buró de crédito?"
            />

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es el préstamo de Afluenta ideal para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos en Afluenta son una alternativa viable para personas
              que buscan financiamiento flexible sin recurrir a bancos
              tradicionales. Desde requisitos accesibles hasta un proceso
              digital ágil, Afluenta ofrece una opción innovadora en el sector
              financiero.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos mencionados y estás buscando un
              préstamo con condiciones competitivas, Afluenta puede ser la
              opción ideal para ti.
            </p>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-afluenta"
                className="text-blue-950 hover:underline"
              >
                Volver al análisis de Préstamos Afluenta
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-afluenta"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
