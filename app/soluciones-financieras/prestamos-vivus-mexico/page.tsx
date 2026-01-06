import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Préstamos personales Vivus: Rápidos y seguros | Top Finanzas MX",
  description:
    "Solicita préstamos rápidos con Vivus: hasta $3,000 MXN al instante, 100% online y sin papeleo. Dinero en tu cuenta en menos de 1 hora.",
};

// Lime Arrow Icon Component (Matches #a3cd3a/lime-500)
function LimeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-lime-500 mt-1 mr-3 flex-shrink-0"
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

export default function PrestamosVivusPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="prestamos-vivus-mexico"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6 leading-tight">
              Préstamos personales Vivus: Rápidos y seguros
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Summary */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Obtén hasta $3,000 MXN en minutos, sin papeleo ni trámites
              complicados.
            </p>

            {/* Quick Benefits Summary (Top Bullets) */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Monto:</strong> Hasta $3,000
                  MXN en el primer préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Aprobación rápida:</strong>{" "}
                  Dinero en tu cuenta en menos de 1 hora.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Proceso digital:</strong>{" "}
                  100% en línea, sin papeleo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Interés competitivo:
                  </strong>{" "}
                  Préstamos con tasas ajustadas a tus necesidades.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-prestamos-vivus-mexico"
              className="block w-full"
            >
              <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-md">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/vivus.jpg"
                alt="Préstamos Vivus"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro Continued */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los Préstamos Personales Vivus son una solución confiable para
              quienes buscan financiamiento rápido y sin complicaciones. Con un
              proceso 100% en línea, estos préstamos permiten a los usuarios
              acceder hasta $3,000 MXN en su primer crédito, con la posibilidad
              de obtener hasta $10,000 MXN si ya eres cliente. Vivus se enfoca
              en brindar transparencia y seguridad en cada paso, asegurando que
              puedas recibir tu dinero de manera ágil y sin papeleo innecesario.
            </p>

            {/* Section: Beneficios */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-8 leading-tight">
              Beneficios de los Préstamos Vivus
            </h2>

            {/* Point 1 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              1. Proceso 100% en línea y sin papeleo
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Uno de los mayores beneficios de Vivus es la facilidad del proceso
              de solicitud. No es necesario acudir a una sucursal física o
              enviar montones de documentos. Todo se realiza en línea desde la
              comodidad de tu hogar, lo que ahorra tiempo y esfuerzo. Solo
              necesitas completar la solicitud en línea y cargar tu
              identificación oficial (INE), lo que te permitirá solicitar el
              préstamo en cuestión de minutos.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Este proceso es ideal para quienes necesitan dinero rápido y
              desean evitar los trámites largos y engorrosos que suelen requerir
              los bancos tradicionales.
            </p>

            {/* Point 2 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              2. Aprobación rápida y depósito en menos de 1 hora
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una vez que completes tu solicitud y confirmes tu identidad, el
              préstamo puede ser aprobado en minutos. Vivus deposita el dinero
              en tu cuenta bancaria en menos de una hora, lo que lo convierte en
              una excelente opción para emergencias o situaciones en las que
              necesitas liquidez inmediata.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Este beneficio es clave para aquellos que no pueden esperar días
              para la aprobación de un crédito y requieren una solución
              financiera rápida.
            </p>

            {/* Point 3 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              3. Transparencia total en costos
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Desde el inicio, Vivus te muestra claramente cuánto deberás pagar
              por tu préstamo. Esto incluye los intereses, las comisiones y el
              monto total a devolver. No hay sorpresas ni cargos ocultos. El CAT
              promedio para estos préstamos es de 40,984.2%, lo que puede
              parecer elevado, pero Vivus se asegura de que cada solicitante
              esté completamente informado de los costos desde el principio,
              garantizando una total transparencia.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si bien las tasas de interés son más altas en comparación con los
              créditos tradicionales, la rapidez y la accesibilidad de los
              préstamos Vivus hacen que sean útiles en momentos de urgencia.
            </p>

            {/* Point 4 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              4. Flexibilidad para clientes recurrentes
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Si ya eres cliente de Vivus y has pagado tus préstamos a tiempo,
              tienes la oportunidad de acceder a montos mayores, de hasta
              $10,000 MXN. Además, Vivus te permite solicitar flexibilidad en
              los pagos, lo que significa que puedes extender el plazo si lo
              necesitas o incluso pedir dinero adicional sobre el mismo préstamo
              en ciertas ocasiones.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Esta flexibilidad es especialmente beneficiosa para aquellos que
              manejan bien sus pagos y necesitan recurrir al crédito en más de
              una ocasión.
            </p>

            {/* Point 5 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              5. Seguridad y confianza
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Vivus se toma muy en serio la seguridad de sus usuarios. Utiliza
              tecnología de encriptación de última generación para proteger tu
              información personal y garantizar que cada transacción sea segura.
              Además, la plataforma está regulada por la CONDUSEF, lo que brinda
              mayor tranquilidad a los usuarios sobre la confiabilidad y
              respaldo de la empresa.
            </p>

            {/* Point 6 */}
            <h3 className="text-xl font-bold text-gray-700 mb-3">
              6. Sin trámites presenciales
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una de las mayores ventajas de Vivus es que todo se realiza de
              forma digital. Esto es ideal para personas que no quieren pasar
              por largos trámites presenciales o que prefieren evitar
              desplazamientos innecesarios. Vivus elimina la burocracia
              tradicional, lo que te permite acceder al dinero que necesitas en
              el momento en que lo necesitas, sin tener que salir de casa.
            </p>

            {/* Section: ¿Por qué elegir Vivus? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir un préstamo Vivus?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Los Préstamos Personales Vivus son una opción ideal para quienes
              buscan una solución rápida y transparente para acceder a
              financiamiento. Con aprobación en minutos, depósito en menos de 1
              hora y un proceso completamente en línea, es una opción perfecta
              para situaciones de emergencia o para cubrir gastos imprevistos.
              Además, si ya eres cliente, puedes acceder a montos mayores y
              disfrutar de mayor flexibilidad en los pagos.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Si estás interesado en conocer los requisitos para solicitar un
              préstamo con Vivus, haz clic en el botón a continuación para más
              información.
            </p>

            {/* Final CTA Button */}
            <div className="mt-8 mb-12">
              <Link
                href="/soluciones-financieras/requisitos-prestamos-vivus-mexico"
                className="block w-full"
              >
                <button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors shadow-lg transform hover:scale-105 duration-200">
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
