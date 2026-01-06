import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la tarjeta Klar | Top Finanzas MX",
  description:
    "La tarjeta de crédito Klar es una opción innovadora sin comisiones, ideal para quienes buscan construir historial crediticio. Conoce sus beneficios.",
};

// Amber Arrow Icon Component (Color similar to #64391f - approximates to amber-900/yellow-900)
function BrownArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-900 mt-1 mr-3 flex-shrink-0"
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

export default function TarjetaKlarPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-klar"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta Klar
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta de crédito Klar es una opción financiera innovadora en
              México, ideal para quienes buscan una alternativa sencilla y sin
              comisiones ocultas.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tarjeta sin comisiones:
                  </strong>{" "}
                  Klar ofrece una tarjeta de crédito sin anualidad ni cargos
                  ocultos, proporcionando transparencia total.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso sin historial crediticio:
                  </strong>{" "}
                  Ideal para quienes buscan iniciar o mejorar su historial
                  crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control desde la app:
                  </strong>{" "}
                  Gestiona tu tarjeta, movimientos y seguridad directamente
                  desde la aplicación móvil de Klar.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recompensas:</strong> Klar
                  tiene un programa de puntos que puedes acumular con tus
                  compras y canjear por beneficios adicionales.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-klar"
              className="block w-full"
            >
              <button className="w-full bg-yellow-900 hover:bg-yellow-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/KLAR-1-1.webp"
                alt="Tarjeta de Crédito Klar"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Klar se destaca por su enfoque digital, accesibilidad y beneficios
              para usuarios con o sin historial crediticio. A continuación,
              exploramos sus principales características, beneficios y cómo
              solicitarla.
            </p>

            {/* Section: ¿Qué es la tarjeta? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito Klar?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La tarjeta de crédito Klar es un producto financiero digital que
              ofrece la posibilidad de tener un control total de tus finanzas a
              través de su aplicación móvil. A diferencia de las tarjetas
              tradicionales, Klar se enfoca en eliminar las barreras para
              obtener crédito, proporcionando una alternativa para quienes están
              buscando crear o mejorar su historial crediticio.
            </p>

            {/* Section: Características principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características principales
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La tarjeta de crédito Klar tiene varias características que la
              hacen destacar en el mercado:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin anualidad ni comisiones ocultas:
                  </strong>{" "}
                  Klar ofrece transparencia absoluta en sus costos, lo que
                  significa que no cobra comisiones por manejo, anualidad,
                  reposición de tarjeta, entre otros.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control total desde la app:
                  </strong>{" "}
                  Todos los movimientos de tu tarjeta pueden ser gestionados
                  desde la aplicación móvil de Klar. Esto incluye bloquear o
                  desbloquear tu tarjeta, revisar tu saldo, y realizar pagos.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tarjeta física y virtual:
                  </strong>{" "}
                  Klar te ofrece la opción de utilizar tanto una tarjeta física
                  como una virtual, que puedes activar de inmediato para compras
                  en línea mientras esperas la llegada de tu tarjeta física.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad:</strong> Klar
                  ofrece medidas de protección contra fraudes. En caso de
                  detectar movimientos sospechosos, puedes bloquear tu tarjeta
                  desde la app.
                </span>
              </li>
            </ul>

            {/* Section: ¿Qué te ofrece? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué te ofrece de la Tarjeta Klar?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  1. Sin Historial Crediticio Previo
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Uno de los principales atractivos de Klar es que no necesitas
                  tener un historial crediticio para solicitarla. Esto la
                  convierte en una excelente opción para quienes están
                  comenzando a construir su perfil crediticio, ya que Klar se
                  enfoca en proporcionar acceso a crédito sin las restricciones
                  de los bancos tradicionales.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  2. Sin comisiones
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A diferencia de muchas tarjetas de crédito, Klar no tiene
                  comisiones ocultas. No tendrás que pagar por la anualidad, por
                  el manejo de la cuenta ni por la reposición de la tarjeta.
                  Este enfoque en la transparencia ayuda a que los usuarios
                  mantengan sus finanzas bajo control y sin sorpresas
                  desagradables.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  3. Control total en tiempo real
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La tarjeta Klar te permite gestionar todos los aspectos de tu
                  cuenta desde la app. Esto incluye la posibilidad de revisar
                  tus movimientos, pagar tu saldo, y establecer límites de
                  gasto. Tener este nivel de control a la mano permite una mejor
                  planificación financiera
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  4. Programa de recompensas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Klar cuenta con un sistema de recompensas en el que puedes
                  acumular puntos con cada compra que realices. Estos puntos
                  pueden ser canjeados por beneficios adicionales, brindándote
                  aún más valor por cada compra que hagas.
                </p>
              </div>
            </div>

            {/* Section: ¿Cómo solicitarla? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cómo solicitar la Tarjeta Klar?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Solicitar la tarjeta de crédito Klar es un proceso sencillo y
              rápido que puedes hacer directamente desde la aplicación móvil.
              Aquí te explicamos los pasos a seguir:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Descarga la app:</strong>{" "}
                  Klar está disponible tanto para dispositivos Android como iOS.
                  Descarga la aplicación desde la tienda de aplicaciones de tu
                  dispositivo.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Regístrate:</strong> Crea
                  una cuenta proporcionando tu información personal, como
                  nombre, dirección, y correo electrónico.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Suministra tus documentos:
                  </strong>{" "}
                  Necesitarás una identificación oficial (como la credencial de
                  elector) y un comprobante de domicilio reciente.
                </span>
              </li>
              <li className="flex items-start">
                <BrownArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Espera la aprobación:
                  </strong>{" "}
                  Klar procesa las solicitudes en cuestión de horas. Si cumples
                  con los requisitos, tu tarjeta será aprobada rápidamente y
                  podrás empezar a usar la tarjeta virtual de inmediato.
                </span>
              </li>
            </ul>

            {/* Section: Opiniones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              Opiniones de los usuarios
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los usuarios de Klar han compartido diversas opiniones sobre la
              tarjeta. Muchos destacan la facilidad de uso de la aplicación y la
              transparencia en las tarifas. Además, los usuarios aprecian la
              accesibilidad de Klar, que no requiere un historial crediticio
              previo, lo que ha permitido a muchas personas acceder a crédito
              por primera vez. Por otro lado, algunos usuarios han mencionado
              que Klar ofrece límites de crédito iniciales relativamente bajos,
              lo cual puede no ser ideal para quienes buscan hacer compras
              grandes. Sin embargo, conforme los usuarios van utilizando la
              tarjeta y pagando sus saldos puntualmente, Klar evalúa la
              posibilidad de aumentar los límites de crédito.
            </p>

            {/* Section: ¿Para quién es la tarjeta? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Para quién es la tarjeta Klar?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La tarjeta Klar es ideal para personas que buscan construir su
              historial crediticio o que desean una opción de crédito sin
              comisiones. Su enfoque en la simplicidad, accesibilidad y control
              la convierte en una opción atractiva para usuarios que prefieren
              gestionar sus finanzas de forma digital. Klar también es una
              excelente opción para quienes buscan evitar las comisiones ocultas
              que suelen acompañar a muchas tarjetas de crédito tradicionales.
              Su transparencia en los costos y su fácil manejo a través de la
              app hacen que sea una alternativa cómoda y confiable para usuarios
              de todas las edades.
            </p>

            {/* Section: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Es la tarjeta Klar ideal para ti?
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              La tarjeta de crédito Klar es una alternativa innovadora para
              aquellos que buscan una opción de crédito simple, sin comisiones y
              100% digital. Con su enfoque en la transparencia y facilidad de
              uso, Klar se ha posicionado como una opción sólida en el mercado
              de las tarjetas de crédito en México. Si estás buscando una
              tarjeta que te permita llevar el control total de tus finanzas sin
              complicaciones, Klar es una excelente opción a considerar.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
