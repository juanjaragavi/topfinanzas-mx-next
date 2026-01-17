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
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-doopla",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-doopla",
    },
  },
  title: "Requisitos préstamo en Doopla | Top Finanzas MX",
  description:
    "Doopla ofrece préstamos P2P con tasas desde el 12% anual. Conoce los requisitos y beneficios de solicitar tu crédito en línea.",
};

// Doopla Check Icon (Violet-600)
function DooplaCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0"
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

export default function RequisitosPrestamosDooplaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-doopla"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos préstamo en Doopla
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Doopla es una plataforma fintech mexicana que permite acceder a
              préstamos de persona a persona (P2P), con tasas competitivas y un
              proceso 100% en línea. Para aquellos interesados en obtener un
              crédito a través de esta plataforma, aquí te presentamos los
              requisitos principales y un análisis de quién puede beneficiarse
              más de este tipo de préstamo.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                className="text-violet-600 hover:underline"
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
                src="https://media.topfinanzas.com/images/download-5.webp"
                alt="Préstamos Doopla"
                width={820}
                height={462}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>

            {/* Requisitos para solicitar un préstamo en Doopla */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos para solicitar un préstamo en Doopla
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación Oficial Vigente:
                  </strong>{" "}
                  Debes contar con una identificación oficial (INE o pasaporte)
                  en buen estado y vigente.
                </span>
              </li>
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de Ingresos:
                  </strong>{" "}
                  Es necesario proporcionar un documento que demuestre tus
                  ingresos regulares, como recibos de nómina, estados de cuenta
                  bancarios o declaraciones fiscales.
                </span>
              </li>
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de Domicilio:
                  </strong>{" "}
                  Debes contar con un comprobante de domicilio (agua, luz, gas,
                  teléfono) con una antigüedad no mayor a tres meses.
                </span>
              </li>
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen Historial Crediticio:
                  </strong>{" "}
                  Es fundamental tener un{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>{" "}
                  positivo. Doopla evalúa tu perfil financiero a través de Buró
                  de Crédito para determinar la tasa de interés que se te
                  asignará.
                </span>
              </li>
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta Bancaria a tu Nombre:
                  </strong>{" "}
                  Para recibir el préstamo, necesitas tener una cuenta bancaria
                  propia donde se depositarán los fondos.
                </span>
              </li>
              <li className="flex items-start">
                <DooplaCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Solo personas mayores de edad pueden solicitar un crédito en
                  Doopla.
                </span>
              </li>
            </ul>

            {/* Image 2 (Action 1) */}
            <ActionBanner
              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Tarjetas de crédito sin anualidad"
            />

            {/* ¿Para quién es ideal Doopla? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal Doopla?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos de Doopla están diseñados para atender a diferentes
              perfiles de usuarios que buscan una opción de financiamiento más
              accesible, flexible y con menores tasas de interés en comparación
              con los bancos tradicionales. A continuación, detallamos quiénes
              pueden beneficiarse más de este tipo de crédito:
            </p>

            {/* Subsection 1 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Personas que buscan tasas competitivas
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si necesitas un préstamo y buscas pagar menos en intereses que con
              los bancos tradicionales, Doopla es una excelente opción. Con
              tasas de interés que van desde el 12% anual, significativamente
              más bajas que las ofrecidas por muchas instituciones financieras,
              puedes obtener financiamiento sin que los intereses te agobien.
              Esta plataforma es ideal para aquellos que tienen un buen
              historial crediticio, ya que podrán acceder a tasas más bajas
              basadas en su perfil de riesgo.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
                className="text-violet-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* Image 3 (Action 3 - per ordering) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-de-neobancos"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Top tarjetas de neobancos"
            />

            {/* Subsection 2 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Usuarios que prefieren un proceso 100% en línea
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              El proceso de solicitud de un préstamo en Doopla es totalmente
              digital, lo que lo hace perfecto para personas que valoran la
              comodidad y rapidez. Si prefieres evitar trámites presenciales o
              visitas a sucursales, esta plataforma es ideal para ti. Desde la
              solicitud hasta la recepción del dinero, todo se gestiona en
              línea, eliminando la necesidad de desplazamientos y largas
              esperas.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos"
                className="text-violet-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            {/* Subsection 3 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Personas que necesitan flexibilidad
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Doopla ofrece préstamos que van desde $20,000 hasta $350,000 MXN,
              con plazos de pago que oscilan entre 12 y 36 meses. Esto hace que
              sea una opción atractiva para aquellos que necesitan financiar
              proyectos personales, consolidar{" "}
              <Link href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer">
                deudas
              </Link>
              , cubrir gastos médicos o realizar cualquier tipo de inversión
              personal. La flexibilidad en los plazos permite que los pagos se
              adapten a tu capacidad financiera.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito"
                className="text-violet-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* Image 4 (Action 2 - per ordering) */}
            <ActionBanner
              href="/finanzas-personales/cat-en-tarjetas-de-credito"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="CAT en tarjetas de crédito"
            />

            {/* Subsection 4 */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4">
              Quienes buscan transparencia
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si valoras la transparencia en los productos financieros, Doopla
              es una opción ideal. La plataforma deja claro desde el principio
              los costos asociados a los préstamos, sin comisiones ocultas ni
              cargos sorpresa. Por ejemplo, la única comisión aplicada es una
              comisión de apertura del 6%, y una pequeña comisión de
              administración de cuenta, que varía según el monto del crédito.
            </p>

            <p className="text-gray-700 mb-6 font-normal">
              Conoce más:{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores"
                className="text-violet-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            {/* Image 5 (Action 4) */}
            <ActionBanner
              href="/finanzas-personales/tarjetas-de-credito-para-estudiantes"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Tarjetas de crédito para estudiantes"
            />

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es préstamos Doopla para ti?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los préstamos en Doopla son una excelente opción para aquellos que
              buscan financiamiento con tasas de interés competitivas, un
              proceso 100% en línea y flexibilidad en los plazos y montos. Si
              cumples con los requisitos y te identificas con los perfiles
              descritos, Doopla podría ser la solución ideal para tus
              necesidades financieras.
            </p>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-doopla"
                className="text-violet-600 hover:underline"
              >
                Volver al análisis de Préstamos Doopla
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-doopla"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
