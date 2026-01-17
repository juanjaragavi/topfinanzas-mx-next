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
      "https://topfinanzas.com/mx/soluciones-financieras/prestamos-la-tasa",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/prestamos-la-tasa",
    },
  },
  title:
    "Préstamos La Tasa: Una alternativa innovadora para reducir intereses | Top Finanzas MX",
  description:
    "Descubre los préstamos personales de La Tasa: tasas desde 16.9%, montos hasta $350,000, sin aval y proceso 100% en línea.",
};

// Orange Arrow Icon Component (Replaces BlueArrowIcon with #ffa227 equivalent - amber-500)
function OrangeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-500 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" className="fill-amber-500" />
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

export default function PrestamosLaTasaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-la-tasa"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Préstamos La Tasa: Una alternativa innovadora para reducir
              intereses
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Sin avales y con tasas personalizadas, todo 100% en línea y
              disponible en menos de 48 horas.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas personalizadas:
                  </strong>{" "}
                  desde 16.9% según tu{" "}
                  <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                    historial crediticio
                  </Link>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos flexibles:</strong>{" "}
                  de $20,000 a $350,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin aval ni garantías:
                  </strong>{" "}
                  acceso fácil a crédito.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% digital:
                  </strong>{" "}
                  Desembolso en menos de 48 horas.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-la-tasa"
              className="block w-full"
            >
              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/latasa-1-1.jpg"
                alt="Préstamos La Tasa"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Context / Description */}
            <p className="text-gray-700 mb-4 leading-tight">
              La Tasa es una plataforma financiera diseñada para ofrecer
              préstamos personales accesibles y rápidos en México, con montos
              que van desde $20,000 hasta $350,000 MXN. La propuesta de valor
              principal de La Tasa radica en sus tasas de interés
              personalizadas, que oscilan entre el 16.9% y el 53.9%, dependiendo
              del historial crediticio del solicitante.
            </p>

            {/* Section: Características clave */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características clave de los préstamos de La Tasa
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              A continuación, presentamos las características más importantes
              que hacen de La Tasa una opción atractiva para quienes buscan un
              préstamo en México:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas de interés personalizadas:
                  </strong>{" "}
                  Las tasas de interés en La Tasa se ajustan al perfil
                  crediticio del solicitante. Si tienes un buen historial
                  crediticio, podrías obtener una tasa tan baja como 16.9%, lo
                  que representa una ventaja significativa frente a los bancos
                  tradicionales. Para quienes cuentan con un historial más
                  limitado o negativo, las tasas pueden llegar hasta el 53.9%.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Montos y plazos flexibles:
                  </strong>{" "}
                  Los montos disponibles van desde $20,000 hasta $350,000 MXN,
                  con plazos de pago que oscilan entre los 12 y los 36 meses.
                  Esta flexibilidad permite a los solicitantes adaptar el
                  préstamo a sus necesidades y capacidad de pago. Además, La
                  Tasa no penaliza los pagos anticipados.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin aval ni garantías:
                  </strong>{" "}
                  A diferencia de otras instituciones financieras que requieren
                  un aval o garantía, La Tasa simplifica el acceso al crédito
                  eliminando este tipo de requisitos. Esto hace que los
                  préstamos estén disponibles para una mayor cantidad de
                  personas.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% digital:
                  </strong>{" "}
                  Todo el proceso de solicitud es en línea, desde el llenado de
                  la solicitud hasta la entrega del dinero. No necesitas acudir
                  a una sucursal o hacer trámites presenciales. El tiempo de
                  aprobación es rápido y, una vez aprobado, el préstamo puede
                  ser depositado en tu cuenta en menos de 48 horas.
                </span>
              </li>
            </ul>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Section: ¿Cómo funciona el proceso? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cómo funciona el proceso de solicitud en La Tasa?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El proceso para solicitar un préstamo con La Tasa está diseñado
              para ser simple y rápido. Aquí te explicamos los pasos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Solicitud en línea:</strong>{" "}
                  Solo necesitas proporcionar una identificación oficial,
                  comprobante de domicilio y comprobante de ingresos.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Preaprobación inmediata:
                  </strong>{" "}
                  Después de ingresar tus datos, el sistema evaluará tu
                  solicitud y te informará de inmediato si eres elegible para el
                  préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Carga de documentos:
                  </strong>{" "}
                  Si eres preaprobado, se te pedirá subir los documentos
                  necesarios para la aprobación final.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y desembolso:
                  </strong>{" "}
                  Una vez que se revisen los documentos y se confirme tu
                  elegibilidad, el dinero será depositado en tu cuenta en un
                  plazo de 48 horas.
                </span>
              </li>
            </ul>

            {/* Section: Ejemplo práctico */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              Ejemplo práctico de un préstamo con La Tasa
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Para entender mejor cómo funcionan los préstamos de La Tasa,
              veamos un ejemplo práctico:
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Si solicitas $100,000 MXN a 36 meses con una tasa del 18.9%, tus
              pagos mensuales serían de $4,054 MXN. Al final del plazo, habrías
              pagado un total de $145,928 MXN, incluyendo una comisión de
              apertura del 5%. Esta estructura de pagos te permite planificar y
              gestionar mejor tus finanzas personales, ya que sabes con
              exactitud cuánto deberás pagar mes a mes.
            </p>

            {/* Section: Ventajas adicionales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              Ventajas adicionales de La Tasa
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Transparencia:</strong> No
                  hay cargos ocultos. Todo el costo del préstamo, incluyendo las
                  tasas de interés y las comisiones, está claramente detallado
                  desde el principio.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesibilidad:</strong>{" "}
                  Cualquier persona con un ingreso estable y los documentos
                  requeridos puede aplicar, sin importar su ubicación en México,
                  ya que todo se gestiona en línea.
                </span>
              </li>
              <li className="flex items-start">
                <OrangeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Rapidez:</strong> La
                  posibilidad de recibir el dinero en menos de 48 horas tras la
                  aprobación final hace que La Tasa sea una opción ideal para
                  quienes necesitan liquidez urgente.
                </span>
              </li>
            </ul>

            {/* Section: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es La Tasa la opción correcta para ti?
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              La Tasa ofrece una solución eficiente para quienes necesitan un
              préstamo personal con rapidez y sin complicaciones. Al no requerir
              avales ni trámites largos, la plataforma facilita el acceso al
              crédito para personas que de otra manera tendrían dificultades en
              los bancos tradicionales. Si estás buscando una alternativa
              rápida, confiable y transparente para obtener financiamiento, La
              Tasa podría ser la opción que necesitas.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="prestamos-la-tasa"
        category="soluciones-financieras"
        subCategory="loans"
      />

      <CompactFooter />
    </main>
  );
}
