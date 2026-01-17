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
      "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-vexi-carnet",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-vexi-carnet",
    },
  },
  title: "Beneficios de la tarjeta de crédito Vexi Carnet | Top Finanzas MX",
  description:
    "Conoce la tarjeta de crédito Vexi Carnet: sin anualidad, con programa de recompensas y ideal para iniciar tu historial crediticio.",
};

// Pink Arrow Icon Component
function PinkArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#D9247E] mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#D9247E" />
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

export default function TarjetaVexiCarnetPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-vexi-carnet"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Vexi Carnet
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta de crédito Vexi Carnet es una opción ideal para quienes
              buscan construir o mejorar su{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>
              , con beneficios atractivos que hacen más fácil administrar tus
              finanzas personales.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-[#D9247E] hover:underline"
                    >
                      Sin anualidad
                    </Link>{" "}
                    de por vida:
                  </strong>{" "}
                  La tarjeta Vexi Carnet no te cobra por mantenerla activa.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso a{" "}
                    <Link href="/finanzas-personales/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva">
                      cashback
                    </Link>
                    :
                  </strong>{" "}
                  Gana hasta un 5% de cashback en tus compras.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de niveles:
                  </strong>{" "}
                  Mejora tu crédito y beneficios conforme usas la tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso de solicitud 100% en línea:
                  </strong>{" "}
                  Fácil de obtener, sin historial crediticio requerido.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link href="/soluciones-financieras" className="block w-full">
              <button className="w-full bg-[#D9247E] hover:bg-[#be185d] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/vexicarnet-1-1.jpg"
                alt="Tarjeta de Crédito Vexi Carnet"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-8 leading-tight">
              A continuación, te explicamos los beneficios clave de esta
              tarjeta, que la hacen una opción a considerar si no tienes
              historial de crédito o si buscas una alternativa sin cargos de
              anualidad.
            </p>

            {/* Section: Sin anualidad de por vida */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Sin anualidad de por vida
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los mayores beneficios de la Vexi Carnet es que no cobra
              anualidad. Esto significa que puedes tener la tarjeta sin
              preocuparte por pagos recurrentes cada año, lo que la convierte en
              una excelente opción para aquellos que están comenzando su vida
              financiera o que simplemente no quieren asumir costos adicionales
              por mantener una tarjeta activa.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, a diferencia de otras tarjetas, no requiere un uso mínimo
              mensual para evitar cargos adicionales, lo que ofrece mayor
              flexibilidad a sus usuarios.
            </p>

            {/* Section: Cashback en compras */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              <Link
                href="/soluciones-financieras/cashback"
                title="Cashback"
                className="text-gray-700 hover:text-[#D9247E]"
              >
                Cashback
              </Link>{" "}
              en compras
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Vexi Carnet ofrece la posibilidad de ganar hasta un 5% de
              VexiCashback en compras realizadas en categorías selectas. Los
              porcentajes varían dependiendo de tu nivel dentro del programa de
              Niveles Vexi, que se estructura de la siguiente manera:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Comienzos:</strong> No
                  ofrece cashback.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Avanzado:</strong> Te
                  permite obtener 1% de cashback en compras generales y hasta 5%
                  en servicios de streaming y restaurantes.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Campeón:</strong>{" "}
                  Ofrece el doble de beneficios con un 2% en compras generales y
                  hasta 5% en categorías especiales como entretenimiento y
                  comida.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Este cashback acumulado puede ser utilizado para reducir el saldo
              de tu tarjeta, brindándote un alivio económico adicional al final
              del mes.
            </p>

            {/* Section: Programa de niveles */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Programa de niveles
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El programa de Niveles Vexi es una característica muy interesante
              de esta tarjeta. A medida que usas tu tarjeta de forma
              responsable, puedes avanzar en los niveles y acceder a mayores
              beneficios:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Comienzos:</strong> Es
                  el punto de partida para todos los nuevos usuarios. Este nivel
                  tiene una línea de crédito limitada (hasta $5,500 MXN) y tasas
                  de interés relativamente altas (29.10%). En este nivel no
                  acumulas cashback.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Avanzado:</strong>{" "}
                  Puedes avanzar a este nivel si usas tu tarjeta al menos una
                  vez al mes y pagas a tiempo durante tres meses consecutivos.
                  Aquí, la línea de crédito puede aumentar hasta $12,000 MXN y
                  la tasa de interés disminuye a 25.50%.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Nivel Campeón:</strong> Este
                  nivel ofrece las mejores condiciones, con una línea de crédito
                  de hasta $100,000 MXN, una tasa de interés más baja (18.80%) y
                  la posibilidad de ganar hasta un 2% de cashback en compras
                  generales.
                </span>
              </li>
            </ul>

            {/* Section: Solicitud fácil y sin historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Solicitud fácil y sin{" "}
              <Link
                href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante"
                title="Historial crediticio"
                className="text-gray-700 hover:text-[#D9247E]"
              >
                historial crediticio
              </Link>
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              A diferencia de muchas otras tarjetas de crédito, la Vexi Carnet
              no requiere que tengas un historial crediticio previo, lo que la
              hace una excelente opción para estudiantes o jóvenes que están
              empezando a construir su vida financiera. Además, el proceso de
              solicitud es completamente en línea, lo que significa que puedes
              obtener tu tarjeta en pocos pasos y sin la necesidad de acudir a
              una sucursal.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Primer paso:</strong>{" "}
                  Ingresa a la página web de Vexi y selecciona
                  &quot;Solicitar&quot;.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Segundo paso:</strong>{" "}
                  Completa el formulario con tus datos personales y financieros.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tercer paso:</strong> Espera
                  la aprobación en un plazo de 3 días hábiles.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Cuarto paso:</strong> Recibe
                  tu tarjeta en casa y actívala desde la aplicación móvil.
                </span>
              </li>
            </ul>

            {/* Section: Otros beneficios */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Otros beneficios
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios principales ya mencionados, la Vexi
              Carnet también incluye:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguros incluidos:</strong>{" "}
                  Protección contra accidentes de viaje y seguro de compra
                  protegida, lo que te brinda tranquilidad en caso de
                  imprevistos.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de referidos:
                  </strong>{" "}
                  Puedes ganar hasta un 3% de cashback por cada persona que
                  refieras a Vexi y que sea aprobada para obtener la tarjeta. El
                  cashback se aplica sobre todas las compras que hagan tus
                  referidos durante su primer año.
                </span>
              </li>
              <li className="flex items-start">
                <PinkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Pagos en meses sin intereses:
                  </strong>{" "}
                  Aunque no es una opción automática como en otras tarjetas,
                  puedes diferir tus compras a meses sin intereses en
                  establecimientos seleccionados, facilitando el pago de
                  artículos de mayor valor.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es la tarjeta de crédito Vexi Carnet ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Vexi Carnet ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta de Crédito Vexi Carnet es una excelente opción si
              buscas una manera accesible de empezar o mejorar tu historial
              crediticio. Su ausencia de anualidad, junto con su programa de
              niveles y la posibilidad de obtener cashback, la convierten en una
              opción atractiva para una amplia gama de usuarios. Sin embargo, es
              importante usar la tarjeta de manera responsable para avanzar en
              los niveles y disfrutar de los mejores beneficios.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              Si estás buscando una tarjeta de crédito sencilla, sin
              complicaciones, y con un buen programa de recompensas, la Vexi
              Carnet podría ser la solución perfecta para ti.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-vexi-carnet"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#D9247E] hover:bg-[#be185d] text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-de-credito-vexi-carnet"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
