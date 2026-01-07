import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción | Top Finanzas MX",
  description:
    "La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos usuarios del crédito como para compradores y viajeros frecuentes.",
};

function BlueArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#1e40af" />
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

export default function TarjetaDeCreditoAzulBBVAPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-azul-bbva"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            <p className="text-lg text-gray-700 mb-6">
              La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos
              usuarios del crédito como para compradores y viajeros frecuentes.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Accesibilidad:</strong>{" "}
                  Requisito de ingreso mínimo de solo $6,000 mensuales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recompensas:</strong>{" "}
                  Acumula el 9% de tus compras en puntos BBVA.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad:</strong>{" "}
                  Incorpora un CVV dinámico para transacciones en línea.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Compromiso ambiental:
                  </strong>{" "}
                  Fabricada con más del 85% de plástico reciclado.
                </span>
              </li>
            </ul>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva"
              className="block w-full"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-5-2.webp"
                alt="tarjeta de crédito BBVA"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              La Tarjeta de Crédito Azul de BBVA se destaca por su fácil acceso,
              con un umbral de ingresos bajos que la hace accesible para una
              amplia gama de consumidores. Esta tarjeta es especialmente
              atractiva para aquellos que buscan una entrada sin complicaciones
              al mundo del crédito, ofreciendo un camino sencillo hacia la
              construcción de un{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              saludable.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Maximiza tus recompensas
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Con la Tarjeta Azul, cada compra se convierte en una oportunidad
              para acumular puntos valiosos. Estos puntos se ganan a una tasa
              generosa del 9% del total de tus compras, asegurando que cada
              gasto se traduzca en beneficios tangibles. Los puntos pueden ser
              canjeados por una variedad de productos y servicios, desde
              artículos para el hogar hasta experiencias únicas, lo que te
              permite personalizar cómo deseas disfrutar de tus recompensas.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Seguridad innovadora
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              BBVA ha incorporado medidas de seguridad de vanguardia en la
              Tarjeta Azul, incluyendo el CVV dinámico que cambia con cada
              transacción en línea. Este enfoque no solo combate el fraude
              efectivamente, sino que también tranquiliza a los usuarios que
              realizan compras en internet regularmente, asegurando que sus
              datos financieros están protegidos en todo momento.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Responsabilidad ambiental
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              En línea con una creciente conciencia ecológica, la Tarjeta Azul
              de BBVA no solo ayuda a gestionar tus finanzas sino que también
              cuida el planeta. Hecha de plástico reciclado, esta tarjeta es una
              de las pocas en el mercado que combina beneficios financieros con
              responsabilidad ambiental, haciendo que sea una opción preferida
              para consumidores conscientes del impacto ecológico de sus
              decisiones.
            </p>

            <h2 className="text-xl font-bold text-gray-700 mt-10 mb-4">
              Características adicionales:
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Experiencia segura sin datos visibles:
                  </strong>{" "}
                  Tu tarjeta Azul de BBVA no muestra datos sensibles en físico,
                  solo puedes verlos al iniciar sesión en la app o escaneando el
                  QR reverso.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control completo en un QR:
                  </strong>{" "}
                  Activa tu tarjeta, consulta tu NIP, o cambia contraseñas
                  directamente desde tu app BBVA mediante el código QR.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Pagos sin contacto:</strong>{" "}
                  Realiza compras de hasta $1,000 sin necesidad de introducir tu
                  tarjeta o ingresar tu NIP.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Gestión de emergencias:
                  </strong>{" "}
                  Si pierdes tu tarjeta o te la roban, puedes bloquearla
                  rápidamente desde la app BBVA.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios extendidos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La Tarjeta Azul va más allá del crédito tradicional al ofrecer
              ventajas adicionales que responden a las necesidades de los
              usuarios modernos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Respaldo en el extranjero:
                  </strong>{" "}
                  Reemplazo rápido de tarjeta o disposición de efectivo de
                  emergencia en el extranjero.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección en compras y viajes:
                  </strong>{" "}
                  Seguros que cubren desde la demora o pérdida de equipaje hasta
                  protección de precios y compra protegida para artículos
                  adquiridos con la tarjeta.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Más que una herramienta financiera
            </h2>
            <p className="text-gray-700 mb-8 leading-tight">
              La Tarjeta de Crédito Azul de BBVA no solo facilita tus compras y
              viajes, sino que también ofrece una plataforma robusta para
              manejar tus finanzas de manera segura y responsable. Con un
              enfoque en recompensas sustanciales, seguridad de vanguardia y
              sostenibilidad, esta tarjeta es una elección excelente para
              cualquier persona que valore un estilo de vida financiero
              consciente y eficiente.
            </p>

            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva"
              className="block w-full mb-12"
            >
              <button className="w-full bg-[#1e40af] hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
