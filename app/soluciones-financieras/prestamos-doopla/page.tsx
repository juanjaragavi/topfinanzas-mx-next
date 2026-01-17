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
      "https://topfinanzas.com/mx/soluciones-financieras/prestamos-doopla",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/prestamos-doopla",
    },
  },
  title: "Beneficios de los Préstamos Doopla | Top Finanzas MX",
  description:
    "Doopla ofrece préstamos personales P2P con tasas desde 12% anual, montos hasta $350,000 MXN y trámite 100% en línea. Conoce sus beneficios.",
};

// Custom Check Icon Component using Violet-600 (closest to #7760db)
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-violet-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10l3 3 6-6"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PrestamosDooplaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-doopla"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Préstamos Doopla: La revolución del financiamiento colectivo
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6">
              Doopla es una plataforma de financiamiento pionera en México,
              especializada en préstamos de persona a persona (P2P). Este modelo
              de préstamos permite conectar a personas que necesitan crédito con
              inversionistas que están dispuestos a prestar su dinero,
              eliminando a los intermediarios tradicionales como los bancos.
              Este enfoque ofrece múltiples beneficios tanto para los
              solicitantes de préstamos como para los inversionistas, lo que
              resulta en tasas de interés más bajas para quienes solicitan
              crédito y mayores rendimientos para quienes invierten.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasas desde el 12% anual:
                  </strong>{" "}
                  Más bajas que los bancos tradicionales.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Montos flexibles:</strong>{" "}
                  Solicita desde $20,000 hasta $350,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Plazos de pago:</strong>{" "}
                  Elige entre 12 y 36 meses según tu capacidad de pago.
                </span>
              </li>
              <li className="flex items-start">
                <CheckIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Trámite 100% digital:
                  </strong>{" "}
                  Solicita y recibe tu préstamo sin salir de casa.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-doopla"
              className="block w-full"
            >
              <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-5.webp"
                alt="Préstamos Doopla"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Tasas de interés: Desde el 12% */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés: Desde el 12%
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El principal atractivo de los préstamos P2P en Doopla es que las
              tasas de interés comienzan desde el 12% anual, significativamente
              más bajas que las que ofrecen los bancos tradicionales, que pueden
              superar el 60%. Las tasas en Doopla se asignan con base en la
              calificación de riesgo del solicitante, lo que significa que
              aquellos con un mejor{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              pueden acceder a tasas más bajas.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              El sistema de clasificación de riesgo utiliza un modelo de
              “scoring” que categoriza a los solicitantes en diferentes niveles:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong className="text-gray-900">Riesgo bajo:</strong> Tasas
                entre 12% y 18% anual.
              </li>
              <li>
                <strong className="text-gray-900">Riesgo medio:</strong> Tasas
                entre 20% y 26% anual.
              </li>
              <li>
                <strong className="text-gray-900">Riesgo alto:</strong> Tasas
                entre 28% y 34% anual.
              </li>
            </ul>
            <p className="text-gray-700 mb-4 leading-tight">
              Esta estructura asegura que las personas puedan obtener préstamos
              con tasas ajustadas a su perfil, evitando pagar intereses
              excesivos.
            </p>

            {/* Section: Préstamos de persona a persona */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Préstamos de persona a persona
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El modelo P2P de Doopla elimina la intermediación bancaria,
              permitiendo que el dinero provenga directamente de otros usuarios
              que desean invertir. Este sistema de financiación directa reduce
              los costos operativos y permite que tanto los solicitantes como
              los prestamistas se beneficien de mejores condiciones.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong className="text-gray-900">
                  Para los solicitantes:
                </strong>{" "}
                Pueden acceder a créditos a tasas mucho más competitivas, sin
                las comisiones elevadas que suelen cobrar los bancos.
              </li>
              <li>
                <strong className="text-gray-900">
                  Para los prestamistas:
                </strong>{" "}
                Obtienen rendimientos significativamente más altos al prestar su
                dinero, en comparación con las tasas de interés ofrecidas por
                los instrumentos de ahorro tradicionales.
              </li>
            </ul>
            <p className="text-gray-700 mb-4 leading-tight">
              Este modelo ha tenido éxito en países como Estados Unidos, Reino
              Unido y España durante más de 10 años, y ahora en México, Doopla
              es una de las plataformas pioneras en esta área, ofreciendo
              seguridad y transparencia en cada transacción.
            </p>

            {/* Section: Flexibilidad en montos y plazos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en montos y plazos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Con Doopla, puedes solicitar préstamos desde $20,000 hasta
              $350,000 MXN, lo que te brinda la flexibilidad de elegir el monto
              que mejor se ajuste a tus necesidades financieras. Ya sea que
              necesites consolidar deudas, financiar un proyecto personal o
              cubrir gastos médicos, Doopla te ofrece una opción ajustada a tu
              situación.
            </p>
            <p className="text-gray-700 mb-4 leading-tight">
              Además, puedes seleccionar plazos de pago que van desde 12 hasta
              36 meses, lo que te permite planificar tus pagos de manera cómoda
              y manejable. Esta flexibilidad de plazo es ideal para ajustar el
              crédito a tu capacidad de pago, sin presión innecesaria.
            </p>

            {/* Section: Trámite 100% en línea y sin costo oculto */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Trámite 100% en línea y sin costo oculto
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otro de los grandes beneficios de Doopla es que todo el proceso de
              solicitud de crédito se realiza completamente en línea. Desde la
              creación de tu cuenta hasta la recepción del dinero, no es
              necesario que realices trámites presenciales ni que gastes tiempo
              en largas gestiones bancarias. Además, Doopla no cobra comisiones
              ocultas o costos adicionales por la solicitud del préstamo.
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <strong className="text-gray-900">Comisión de apertura:</strong>{" "}
                El único cargo que se realiza es una comisión del 6%, que se
                descuenta del monto total del crédito una vez que se ha fondeado
                al 100% y has firmado el contrato.
              </li>
              <li>
                <strong className="text-gray-900">
                  Comisión por administración de cuenta:
                </strong>{" "}
                Varía según el monto del préstamo, entre $102 MXN para créditos
                pequeños y $279 MXN para montos superiores a $150,000 MXN.
              </li>
            </ul>

            {/* Section: Rapidez en la aprobación y fondeo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Rapidez en la aprobación y fondeo
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los grandes atractivos de Doopla es la rapidez con la que
              puedes acceder a tu préstamo. Después de que tu solicitud es
              aprobada, el crédito puede ser fondeado por la comunidad de
              inversionistas en un promedio de 24 horas hábiles. Esto es ideal
              si necesitas dinero de manera urgente, ya que podrás recibir los
              fondos en tu cuenta bancaria casi de inmediato.
            </p>

            {/* Section: ¿Es Doopla la mejor opción para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es Doopla la mejor opción para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Si estás buscando un préstamo con tasas de interés más bajas y un
              proceso totalmente digital, Doopla es una opción que deberías
              considerar. Gracias a su modelo de préstamos de persona a persona,
              los solicitantes pueden beneficiarse de condiciones más justas y
              sin costos ocultos. Además, la rapidez en el proceso y la
              flexibilidad en los montos y plazos hacen que Doopla sea una
              alternativa ideal para quienes necesitan un financiamiento
              confiable.
            </p>

            {/* Second CTA Button */}
            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-doopla"
                className="block w-full"
              >
                <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                  Quiero conocer los requisitos
                </button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="prestamos-doopla"
        category="soluciones-financieras"
        subCategory="loans"
      />

      <CompactFooter />
    </main>
  );
}
