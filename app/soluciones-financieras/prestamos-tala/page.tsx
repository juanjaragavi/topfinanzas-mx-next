import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Préstamos Tala: Una solución financiera a tu alcance | Top Finanzas MX",
  description:
    "Descubre Tala, la app de préstamos rápidos en México. Desde $500 hasta $10,000 pesos, sin aval ni historial crediticio. ¡Solicita en 5 minutos!",
};

// Teal Arrow Icon Component (Matches close to #21bec6 -> teal-400 or cyan-500)
// Using teal-400 for a vibrant teal look.
function TealArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosTalaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-tala"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Préstamos Tala: Una solución financiera a tu alcance
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Accede a préstamos personales de forma sencilla y sin trámites
              complicados.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">En 5 minutos:</strong> Obtén
                  préstamos de $500 a $10,000 pesos desde tu celular.
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Flexibilidad:</strong> Elige
                  fechas de pago que se ajusten a tus necesidades.
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Límite de Crédito:</strong>{" "}
                  Aumenta tu límite de crédito sin solicitudes adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Seguridad:</strong>{" "}
                  Registrada ante CONDUSEF y certificada en ISO 27001.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-tala"
              className="block w-full"
            >
              <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-9.webp"
                alt="Préstamos Tala"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Continued */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ya sea para cubrir una emergencia, invertir en un negocio o
              manejar gastos inesperados, contar con una solución financiera
              adecuada es esencial. Aquí es donde Tala se convierte en un aliado
              estratégico para tus finanzas personales.
            </p>

            {/* Section: ¿Qué es Tala? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es Tala y cómo puede ayudarte?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tala es una aplicación móvil que te permite acceder a
              micropréstamos de forma rápida y sencilla, con montos que van
              desde $500 hasta $10,000 pesos. Con más de 9 millones de clientes
              en todo el mundo y 2 millones en México, Tala se ha posicionado
              como una plataforma confiable que entiende las necesidades de
              nuestra comunidad.
            </p>

            {/* Section: Acceso instantáneo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Acceso instantáneo y sin complicaciones
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Olvídate del papeleo y los procesos engorrosos. Con Tala, puedes
              solicitar un préstamo en tan solo 5 minutos, sin necesidad de
              aval,{" "}
              <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                historial crediticio
              </Link>{" "}
              ni comprobante de ingresos. Todo se realiza desde tu teléfono
              móvil, brindándote comodidad y rapidez.
            </p>

            {/* Section: Flexibilidad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en tus manos
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las ventajas de Tala es la flexibilidad en la selección de
              la fecha de pago. Puedes elegir un plazo que se ajuste a tus
              necesidades, desde 15 hasta 61 días. Esto te permite organizar tus
              finanzas de manera eficiente y sin estrés.
            </p>

            {/* Section: Préstamos que crecen */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Préstamos que crecen contigo
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tala valora tu compromiso y puntualidad. Al pagar tus préstamos a
              tiempo y utilizarlos regularmente, tu límite de crédito aumenta
              gradualmente sin necesidad de solicitarlo. Esto significa que
              puedes acceder a montos mayores a medida que construyes tu
              historial con Tala, alcanzando hasta $10,000 pesos.
            </p>

            {/* Section: ¿Cómo aumentar tu límite? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo aumentar tu límite de crédito?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Paga a tiempo:</strong>{" "}
                  Realiza tus pagos puntualmente para demostrar responsabilidad
                  y capacidad de pago.
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Usa tu crédito regularmente:
                  </strong>{" "}
                  Utilizar tu crédito con frecuencia muestra tu compromiso con
                  la gestión financiera y aumenta tus posibilidades de recibir
                  un incremento.
                </span>
              </li>
            </ul>

            {/* Section: Transparencia */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Transparencia y confianza
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tala ofrece préstamos con una tasa de interés fija desde el 11%,
              eliminando sorpresas de intereses variables o cargos ocultos.
              Siempre sabrás cuánto debes pagar y cuándo, sin letra pequeña ni
              condiciones inesperadas.
            </p>

            {/* Section: Seguridad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Seguridad de tus datos
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tala está registrada ante la CONDUSEF y cuenta con la
              certificación ISO 27001, garantizando que tu información personal
              está protegida con los más altos estándares de seguridad. Utiliza
              encriptación SSL para mantener tus datos privados y nunca comparte
              tu información con terceros sin tu autorización.
            </p>

            {/* Section: ¿Cómo aprovechar al máximo Tala? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-8 leading-tight">
              ¿Cómo aprovechar al máximo Tala?
            </h2>

            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Paga a tiempo y utiliza tu crédito regularmente
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Al realizar tus pagos puntualmente y usar tu crédito de manera
              habitual, demuestras responsabilidad financiera. Esto mejora tu
              perfil y aumenta tus posibilidades de incrementar tu límite de
              crédito, permitiéndote acceder a mayores oportunidades.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mb-3">
              Participa en el programa de referidos
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Puedes invitar a amigos y familiares a unirse a Tala y obtener
              recompensas. Comparte tu código de referencia y, cuando ellos
              paguen su primer préstamo a tiempo, recibirás $100 de descuento en
              tu próximo crédito. Es una forma de ayudar a otros mientras
              mejoras tus propias finanzas.
            </p>

            {/* Section: Fácil proceso de pago */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Fácil proceso de pago
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Tala ofrece múltiples opciones para pagar tu crédito de forma
              cómoda:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  Transferencia bancaria desde la app de tu banco utilizando tu
                  número de CLABE.
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  Tiendas OXXO y establecimientos afiliados a Paynet, como
                  Wal-Mart, 7 Eleven y Farmacias del Ahorro, entre otros (con
                  una comisión adicional de $15 pesos).
                </span>
              </li>
              <li className="flex items-start">
                <TealArrowIcon />
                <span className="text-gray-700">
                  Pago en sucursal bancaria, aunque puede implicar comisiones
                  más altas y procesos más largos.
                </span>
              </li>
            </ul>

            {/* Section: ¡Empodera tus finanzas! */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¡Empodera tus finanzas con Tala!
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              En un entorno donde el acceso al crédito puede ser limitado, Tala
              se presenta como una alternativa confiable y adaptada a las
              necesidades de nuestra comunidad en México. Ofrece flexibilidad,
              transparencia y seguridad, permitiéndote tomar el control de tus
              finanzas personales. Si buscas una herramienta que te acompañe en
              tu camino financiero, Tala es una opción que vale la pena
              considerar.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-tala"
                className="block w-full"
              >
                <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
                  Quiero conocer los requisitos
                </button>
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
