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
      "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-stori-ventajas-desventajas",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-stori-ventajas-desventajas",
    },
  },
  title: "Tarjeta de Crédito Stori: Ideal para estudiantes | Top Finanzas MX",
  description:
    "Conoce las ventajas de la tarjeta Stori para estudiantes: sin anualidad, 100% digital, internacional y con detalles financieros como CAT y tasa anual fija.",
};

function GreenCheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#16a34a" />
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

export default function TarjetaStoriVentajasDesventajasPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-stori-ventajas-desventajas"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Tarjeta de Crédito Stori: Ideal para estudiantes
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-gray-700 mb-6 leading-tight">
              Controla tus gastos con facilidad y aprovecha los beneficios
              diseñados específicamente para tu estilo de vida estudiantil.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-green-600 hover:underline"
                    >
                      Sin anualidad
                    </Link>{" "}
                    y sin buró:
                  </strong>{" "}
                  Solo necesitas tu INE.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">100% Digital:</strong>{" "}
                  Gestiona tu tarjeta desde tu móvil.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Internacional:</strong>{" "}
                  Viaja o compra online gracias a la red Mastercard.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Contactless:</strong>
                  agilidad que va con tu ritmo de vida.
                </span>
              </li>
            </ul>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-stori"
              className="block w-full"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Conocer los requisitos
              </button>
            </Link>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-15.webp"
                alt="Tarjeta de Crédito Stori"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-4 leading-tight">
              Si estás buscando una tarjeta de crédito confiable y fácil de
              manejar que se adapte a un estilo de vida académico activo, Stori
              podría ser tu mejor opción.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              La tarjeta Stori responde a estas necesidades con su estructura
              flexible y sin complicaciones, permitiéndote enfocar en tus
              estudios, viajes y experiencias sin la carga de las finanzas
              complicadas.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué Stori es tu compañero ideal en la universidad?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Stori es más que una tarjeta; es un compañero de estudios que te
              apoya en tu camino educativo. Al eliminar la preocupación por las
              cuotas anuales y sin necesidad de buró de crédito y ofrecer un
              sistema completamente digital, te permite enfocarte plenamente en
              tus estudios y actividades extracurriculares, asegurando que tu
              atención esté donde debe estar: en tu educación y desarrollo
              personal.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              El programa Stori Construye te anima a establecer y mantener un
              crédito responsable desde el inicio de tu carrera universitaria.
              Mediante compras regulares y un manejo prudente de los pagos, este
              programa no solo facilita que puedas ampliar tu línea de crédito,
              sino que también abre puertas a construir un{" "}
              <Link
                href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante"
                title="Historial crediticio"
                className="text-green-600 hover:underline"
              >
                historial crediticio
              </Link>{" "}
              que en el futuro te abrirá nuevas oportunidades financieras como
              un{" "}
              <Link
                href="/soluciones-financieras/cual-es-el-mejor-prestamo-personal"
                title="Crédito personal"
                className="text-green-600 hover:underline"
              >
                crédito personal
              </Link>
              . Incrementar tu línea de crédito bajo estos principios refuerza
              tu responsabilidad financiera y prepara el terreno para un futuro
              económico más sólido.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Acceso ampliado y beneficios exclusivos:
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              La tarjeta Stori está diseñada para facilitar la inclusión
              financiera, ofreciendo aprobación a un amplio 99% de los
              solicitantes y una línea de crédito de hasta $20,000. Este acceso
              democratizado es especialmente valioso para estudiantes y jóvenes
              profesionales que están comenzando a establecer su historial
              crediticio y necesitan recursos financieros para crecer personal y
              profesionalmente.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Gestión sencilla y segura
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              La aplicación Stori transforma tu dispositivo móvil en un centro
              de gestión financiera. Puedes monitorear tus transacciones,
              realizar pagos y administrar transferencias interbancarias con
              total seguridad, lo que te proporciona una herramienta invaluable
              para cualquier estudiante que necesita eficiencia y efectividad en
              su manejo financiero diario.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Detalles financieros que importan:
            </h2>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    CAT (Costo Anual Total) Promedio:
                  </strong>{" "}
                  14
                  <Link
                    href="/finanzas-personales/cat-en-tarjetas-de-credito"
                    title="CAT"
                    className="text-gray-700 hover:text-green-600"
                  >
                    CAT
                  </Link>
                  8% sin IVA.
                </span>
              </li>
              <li className="flex items-start">
                <GreenCheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de Interés Anual Fija:
                  </strong>{" "}
                  100.11% sin IVA.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-8 leading-tight">
              Aunque estos números pueden parecer elevados, están en línea con
              productos diseñados para usuarios sin historial crediticio previo.
              Un manejo responsable y educado sobre el crédito es clave para
              aprovechar al máximo los beneficios de Stori sin incurrir en
              costos adicionales.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Listo para empezar con Stori?
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              Si estás listo para tomar control de tu futuro financiero con una
              solución diseñada para tus necesidades como estudiante, considera
              la tarjeta Stori. Para más información sobre cuáles son los
              requisitos y cómo solicitarla, te invitamos a seguir explorando
              para aprender más sobre ella.
            </p>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-stori"
              className="block w-full mb-12"
            >
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-stori-ventajas-desventajas"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
