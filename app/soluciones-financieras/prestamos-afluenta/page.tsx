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
      "https://topfinanzas.com/mx/soluciones-financieras/prestamos-afluenta",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/prestamos-afluenta",
    },
  },
  title: "Beneficios de los préstamos de Afluenta | Top Finanzas MX",
  description:
    "Descubre los beneficios de los préstamos P2P de Afluenta: tasas competitivas, 100% digital y sin bancos.",
};

// Slate Arrow Icon Component
function SlateArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-slate-900 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
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

export default function PrestamosAfluentaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-afluenta"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de los préstamos de Afluenta
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Afluenta es una plataforma de préstamos P2P (persona a persona)
              que permite a los usuarios acceder a financiamiento directo entre
              personas, ofreciendo una alternativa accesible y flexible en
              comparación con los préstamos bancarios tradicionales.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Tasas competitivas:</strong>{" "}
                  Afluenta ofrece tasas de interés accesibles, gracias a su
                  modelo peer-to-peer (P2P).
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en montos y plazos:
                  </strong>{" "}
                  Diseñado para adaptarse a diferentes necesidades financieras.
                </span>
              </li>
              <li className="flex items-start">
                <SlateArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso digital simplificado:
                  </strong>{" "}
                  Toda la gestión se realiza en línea, sin necesidad de acudir a
                  sucursales.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-afluenta"
              className="block w-full"
            >
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-6.webp"
                alt="Préstamos Afluenta"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              A continuación, te presentamos los beneficios principales de los
              préstamos de Afluenta en un formato detallado.
            </p>

            {/* Section: Tasas de interés competitivas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Tasas de interés competitivas
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Gracias a su modelo de préstamos P2P, Afluenta puede ofrecer tasas
              de interés más competitivas que muchas instituciones financieras
              tradicionales. En lugar de depender de un banco para obtener
              financiamiento, Afluenta conecta a los solicitantes de crédito
              directamente con inversionistas, lo que reduce costos y permite
              obtener tasas de interés más bajas. Esto hace que los préstamos
              sean más accesibles para quienes buscan financiar proyectos
              personales o cubrir necesidades de liquidez.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, Afluenta permite a los usuarios comparar las tasas de
              distintos inversionistas, dándoles la oportunidad de elegir la
              opción que mejor se ajuste a su situación financiera. Esto crea un
              entorno de competencia saludable que beneficia tanto a los
              prestatarios como a los inversionistas.
            </p>

            {/* Section: Flexibilidad en montos y plazos */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Flexibilidad en montos y plazos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Afluenta ofrece una gran variedad de opciones en cuanto a montos y
              plazos de pago, adaptándose a las necesidades y posibilidades de
              cada usuario. Los solicitantes pueden elegir el plazo que mejor
              les convenga, con opciones de pagos mensuales que se ajustan a su
              capacidad económica.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este nivel de flexibilidad permite a los usuarios manejar sus
              deudas de manera más controlada, ya sea que necesiten financiar
              una compra importante o consolidar deudas existentes. La
              flexibilidad también se extiende a la posibilidad de realizar
              pagos anticipados sin penalización, lo que da aún más control
              sobre el pago del préstamo.
            </p>

            {/* Section: Proceso de solicitud 100% digital */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Proceso de solicitud 100% digital
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La experiencia de Afluenta es completamente digital, permitiendo a
              los usuarios solicitar, gestionar y pagar sus préstamos sin
              necesidad de acudir a una sucursal bancaria. Desde el registro
              hasta la aprobación, todo el proceso se realiza en línea, lo que
              resulta en una experiencia rápida y conveniente.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              El proceso de solicitud es ágil y requiere únicamente los
              documentos básicos, como identificación oficial y comprobante de
              ingresos. Una vez enviado, Afluenta revisa el perfil del
              solicitante y, en caso de aprobación, el préstamo se financia
              mediante la plataforma, sin largos tiempos de espera.
            </p>

            {/* Section: Transparencia y seguridad */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Transparencia y seguridad
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los aspectos más valorados de Afluenta es su transparencia
              en las condiciones de los préstamos. Los solicitantes pueden ver
              de manera clara las tasas de interés, el costo total del crédito y
              los plazos de pago desde el inicio, lo que evita sorpresas
              desagradables o cargos ocultos.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Afluenta se compromete a proteger la información financiera de sus
              usuarios mediante el uso de tecnología avanzada en seguridad,
              asegurando que los datos personales y financieros estén siempre
              protegidos. Esta transparencia y compromiso con la seguridad le
              brindan a los usuarios la confianza de que están obteniendo un
              producto financiero seguro y confiable.
            </p>

            {/* Section: Alternativa innovadora */}
            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Alternativa innovadora a los préstamos bancarios
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Para aquellos que buscan una alternativa a los métodos de
              financiamiento convencionales, Afluenta representa una opción
              innovadora en el mercado financiero. Al permitir que las personas
              se financien entre sí, se crean comunidades de apoyo financiero,
              donde los usuarios pueden encontrar oportunidades que se ajusten
              mejor a sus necesidades y presupuesto.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              Los inversionistas, por su parte, encuentran en Afluenta una
              opción atractiva para diversificar sus inversiones, lo que a su
              vez incrementa las opciones de financiamiento para los
              prestatarios. Este modelo alternativo ofrece tanto a los
              solicitantes como a los inversionistas una plataforma accesible,
              confiable y transparente.
            </p>

            {/* Section: ¿Es el préstamo de Afluenta ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es el préstamo de Afluenta ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Los préstamos de Afluenta son ideales para quienes buscan
              financiamiento flexible, accesible y con condiciones competitivas.
              Desde tasas de interés más bajas hasta un proceso completamente
              digital, esta plataforma se posiciona como una alternativa moderna
              y confiable frente a los bancos tradicionales.
            </p>
            <p className="text-gray-700 mb-8 leading-tight">
              Si estás considerando solicitar un préstamo, Afluenta podría ser
              la solución ideal para obtener los fondos que necesitas mientras
              aprovechas las ventajas de un modelo de financiamiento P2P.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-afluenta"
              className="block w-full mb-12"
            >
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="prestamos-afluenta"
        category="soluciones-financieras"
        subCategory="loans"
      />

      <CompactFooter />
    </main>
  );
}
