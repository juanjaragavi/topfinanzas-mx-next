import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { ActionBanner } from "@/components/ui/action-banner";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requisitos para solicitar un préstamo con Digitt | Top Finanzas MX",
  description:
    "Digitt ofrece préstamos personales rápidos y flexibles. Conoce los requisitos y el proceso de solicitud.",
};

// Digitt Check Icon (Midnight Blue / Cyan-950)
function DigittCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-cyan-950 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosPrestamosDigittPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-digitt"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar un préstamo con Digitt
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Digitt es una plataforma digital de préstamos personales en México
              que ofrece acceso rápido y conveniente a financiamiento.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Aquí te explicamos los requisitos necesarios para solicitar un
              préstamo con Digitt.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-cyan-950 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 1 (Hero) */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/download-7.webp"
                alt="Préstamos Digitt"
                width={820}
                height={462}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Edad y nacionalidad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Edad y nacionalidad
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Para solicitar un préstamo en Digitt, debes tener al menos 18 años
              y ser ciudadano mexicano. La plataforma permite el acceso a
              financiamiento a personas mayores de edad con residencia
              establecida en México, cumpliendo con los requerimientos legales
              de edad y documentación.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-cyan-950 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 2 (Action 1) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas de crédito sin anualidad"
            />

            {/* Ingresos comprobables */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Ingresos comprobables
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Uno de los principales requisitos es contar con ingresos
              comprobables. Digitt exige que los solicitantes demuestren un
              flujo de ingresos estable, ya que esto es fundamental para la
              aprobación. A continuación, los documentos que pueden servir como
              comprobantes de ingresos:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  Recibos de nómina recientes.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">Declaraciones fiscales.</span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  Estados de cuenta bancarios.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Esta comprobación es necesaria para asegurar que el solicitante
              pueda cumplir con los pagos del préstamo.
            </p>

            {/* Buen historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Buen historial crediticio
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Tener un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              positivo facilita la aprobación del préstamo en Digitt. La
              plataforma revisa el historial del solicitante para evaluar su
              comportamiento financiero previo y su capacidad de pago. Un buen
              historial crediticio brinda mayores probabilidades de obtener un
              préstamo y, en algunos casos, puede mejorar las condiciones de la
              tasa de interés.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Es importante mantener un historial limpio, ya que un puntaje bajo
              puede afectar las posibilidades de aprobación o cambiar los
              términos del préstamo.
            </p>

            {/* Image 3 (Action 3) */}
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
              Además de los requisitos previos, Digitt solicita ciertos
              documentos básicos que validan la identidad y situación financiera
              del solicitante. Aquí te detallamos la documentación necesaria.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Para iniciar el proceso, es necesario presentar una
                  identificación oficial válida. Los documentos que suelen
                  aceptarse incluyen: INE o IFE (México) y pasaporte.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de domicilio:
                  </strong>{" "}
                  Es necesario presentar un comprobante que confirme la
                  residencia actual del solicitante. Se pueden utilizar
                  documentos como: Recibos de luz, agua o teléfono con
                  antigüedad no mayor a tres meses y estado de cuenta bancario
                  reciente.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobantes de ingresos:
                  </strong>{" "}
                  Para verificar la capacidad de pago, Digitt exige documentos
                  que demuestren ingresos. Los documentos comúnmente aceptados
                  incluyen: Recibos de nómina, declaraciones fiscales y estados
                  de cuenta bancarios.
                </span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Estos documentos ayudan a la plataforma a confirmar la estabilidad
              financiera del solicitante y su habilidad para cubrir el préstamo.
            </p>

            {/* Image 4 (Action 2) */}
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
              El proceso de solicitud de un préstamo en Digitt es completamente
              en línea. A continuación, se detallan los pasos básicos para
              completar la solicitud.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-cyan-950 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Registro y solicitud en línea:
                  </strong>{" "}
                  Para iniciar el proceso, el solicitante debe registrarse en la
                  plataforma de Digitt y completar un formulario en línea con
                  sus datos personales, ingresos y otros detalles necesarios.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación de la solicitud:
                  </strong>{" "}
                  Una vez completada la solicitud, Digitt revisará el perfil del
                  solicitante y evaluará su capacidad de pago. Este proceso
                  suele realizarse en un corto período de tiempo.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y desembolso:
                  </strong>{" "}
                  Si la solicitud es aprobada, los fondos se depositarán
                  directamente en la cuenta bancaria del solicitante. El
                  préstamo estará disponible para uso inmediato, sin necesidad
                  de largas esperas.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-cyan-950 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* ¿Qué adicionales trae Digitt? */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              ¿Qué adicionales trae Digitt?
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Además de los requisitos y el proceso de solicitud, es importante
              que los solicitantes conozcan los beneficios que Digitt ofrece
              como plataforma de financiamiento:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso rápido al financiamiento:
                  </strong>{" "}
                  El proceso en línea de Digitt facilita la obtención de un
                  préstamo en un tiempo reducido, sin la necesidad de visitar
                  una sucursal.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas de interés competitivas:
                  </strong>{" "}
                  Como plataforma digital, Digitt puede ofrecer tasas de interés
                  atractivas que se adaptan a las posibilidades de cada
                  solicitante.
                </span>
              </li>
              <li className="flex items-start">
                <DigittCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad de pagos:
                  </strong>{" "}
                  La plataforma permite a los usuarios realizar pagos
                  anticipados sin penalización, lo cual ofrece mayor control
                  sobre la gestión del préstamo.
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
              ¿Es Digitt la opción ideal para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos de Digitt son una excelente opción para quienes
              buscan financiamiento rápido y flexible. Con un proceso digital,
              requisitos accesibles y tasas competitivas, Digitt ofrece una
              alternativa moderna para aquellos que necesitan cubrir gastos
              imprevistos o consolidar{" "}
              <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                deudas
              </Link>
              .
            </p>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y buscas un préstamo conveniente,
              Digitt podría ser la solución que necesitas para alcanzar tus
              metas financieras.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
