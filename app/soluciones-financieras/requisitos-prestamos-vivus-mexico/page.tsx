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
      "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-vivus-mexico",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/requisitos-prestamos-vivus-mexico",
    },
  },
  title: "Requisitos préstamos Vivus México | Top Finanzas MX",
  description:
    "Obtén hasta $3,000 MXN en minutos. Con un proceso 100% en línea y sin papeleo, es ideal para cubrir emergencias o gastos pequeños.",
};

// Custom Arrow Icon Component with #a3cd3a color
function CustomArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#a3cd3a] mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#a3cd3a" />
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

export default function RequisitosPrestamosVivusPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-prestamos-vivus-mexico"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos préstamos Vivus México
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section - Heading inferred from context */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Préstamos Personales Vivus
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Los Préstamos Personales Vivus son una opción rápida y sencilla
              para obtener dinero de forma urgente, con un proceso completamente
              en línea y sin papeleo innecesario. Con la posibilidad de acceder
              hasta $3,000 MXN en tu primer crédito y hasta $10,000 MXN para
              clientes recurrentes, este producto es ideal para quienes buscan
              una solución rápida y segura.
            </p>

            {/* Image 1: Main Image */}
            <div className="w-full my-8">
              <Image
                src="https://media.topfinanzas.com/images/vivus.webp"
                alt="Préstamos Vivus México"
                width={800}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Requisitos Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Requisitos básicos para solicitar un préstamo en vivus
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Para poder solicitar un préstamo con Vivus, es necesario que
                  seas mayor de edad. Este es un requisito básico para acceder a
                  cualquier tipo de financiamiento.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente:
                  </strong>{" "}
                  Debes contar con una Credencial de Elector (INE) válida y en
                  buen estado, ya que este será el documento principal que
                  utilizarás para verificar tu identidad.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cuenta bancaria a tu nombre:
                  </strong>{" "}
                  El préstamo se deposita directamente en tu cuenta bancaria,
                  por lo que es indispensable contar con una cuenta a tu nombre.
                  Vivus no puede depositar el préstamo en cuentas de terceros.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Correo electrónico y número de teléfono activo:
                  </strong>{" "}
                  Para gestionar todo el proceso de solicitud, Vivus requiere
                  que tengas un correo electrónico y un número de teléfono
                  activo para contactarte y confirmar el préstamo.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Buen{" "}
                    <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                      historial crediticio
                    </Link>{" "}
                    (deseable, pero no obligatorio):
                  </strong>{" "}
                  Aunque Vivus ofrece préstamos rápidos sin muchos trámites,
                  tener un buen historial crediticio aumenta tus posibilidades
                  de obtener montos mayores y condiciones más favorables en
                  futuros préstamos. Sin embargo, no es un requisito excluyente.
                </span>
              </li>
            </ul>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Image 2: Action Banner 1 */}
            <ActionBanner
              href="https://www.vivus.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
              alt="Solicitar Préstamo Vivus"
            />

            {/* Proceso de Solicitud */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo funciona el proceso de solicitud?
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Llena tu solicitud:</strong>{" "}
                  Completa el formulario en el sitio web de Vivus con tu
                  información personal y financiera. Este paso toma solo unos
                  minutos.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Verifica tu identidad:
                  </strong>{" "}
                  Deberás enviar una foto de tu INE para confirmar tu identidad.
                  Este es un paso esencial para validar tu información.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recibe tu dinero:</strong>{" "}
                  Si tu solicitud es aprobada, recibirás el dinero en tu cuenta
                  bancaria en menos de 1 hora, ideal para cubrir necesidades
                  inmediatas.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Paga tu préstamo:</strong>{" "}
                  Vivus te enviará recordatorios antes de la fecha de
                  vencimiento para que puedas pagar a tiempo. Además, tienes
                  varias opciones de pago, como transferencias bancarias o pagos
                  en tiendas de conveniencia.
                </span>
              </li>
            </ul>

            {/* Image 3: Action Banner 3 */}
            <ActionBanner
              href="https://www.vivus.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
              alt="Solicitar Préstamo Vivus"
            />

            {/* Para quién es ideal */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Para quién es ideal el préstamo Vivus?
            </h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas que necesitan dinero urgente:
                  </strong>{" "}
                  Si enfrentas una emergencia financiera, como una reparación
                  urgente en casa, gastos médicos imprevistos o cualquier
                  situación que requiera liquidez inmediata, Vivus es una
                  excelente opción. El proceso de solicitud es rápido, y puedes
                  recibir el dinero en tu cuenta en menos de 1 hora, lo que te
                  permite resolver tus problemas sin demora.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas que no desean trámites complicados:
                  </strong>{" "}
                  El hecho de que Vivus ofrezca un proceso completamente en
                  línea, sin papeleo y con la mínima documentación necesaria, lo
                  convierte en una opción perfecta para aquellos que no quieren
                  pasar por largos trámites o visitas a sucursales. Todo lo que
                  necesitas es tu INE, una cuenta bancaria y acceso a internet
                  para realizar la solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Quienes buscan financiamiento para gastos pequeños:
                  </strong>{" "}
                  Los Préstamos Vivus son ideales si necesitas cubrir un gasto
                  pequeño o moderado, como la compra de artículos para el hogar,
                  pagos de servicios o pequeños proyectos. El primer préstamo de
                  hasta $3,000 MXN es perfecto para situaciones puntuales, y si
                  ya eres cliente, puedes acceder a montos de hasta $10,000 MXN.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Personas que buscan flexibilidad en el pago:
                  </strong>{" "}
                  Si bien Vivus ofrece préstamos a corto plazo, con plazos de
                  hasta 30 días, también te permite flexibilidad en la gestión
                  de tus pagos. Puedes solicitar una extensión si necesitas más
                  tiempo para pagar o incluso obtener más dinero sobre el mismo
                  préstamo si cumples con las condiciones.
                </span>
              </li>
              <li className="flex items-start">
                <CustomArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Usuarios que valoran la seguridad y la transparencia:
                  </strong>{" "}
                  Para aquellos que valoran la transparencia total en los costos
                  y la seguridad en las transacciones, Vivus es una excelente
                  opción. El{" "}
                  <Link href="/finanzas-personales/cat-en-tarjetas-de-credito">
                    CAT
                  </Link>{" "}
                  promedio de 40,984.2% y las comisiones se muestran claramente
                  desde el inicio, sin sorpresas ni cargos ocultos. Además, la
                  plataforma está regulada por la CONDUSEF, lo que garantiza un
                  respaldo confiable.
                </span>
              </li>
            </ul>

            {/* Image 4: Action Banner 2 */}
            <ActionBanner
              href="https://www.vivus.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
              alt="Solicitar Préstamo Vivus"
            />

            {/* Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es el Préstamo Vivus para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si buscas un préstamo rápido, seguro y sin complicaciones, los
              Préstamos Personales Vivus son una excelente opción. Ideales para
              emergencias, gastos pequeños o situaciones donde necesitas
              financiamiento inmediato, estos préstamos te ofrecen flexibilidad
              y transparencia.
            </p>

            {/* Image 5: Action Banner 4 */}
            <ActionBanner
              href="https://www.vivus.com.mx/"
              src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
              alt="Solicitar Préstamo Vivus"
            />

            {/* External CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.vivus.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors text-lg"
              >
                Solicitar ahora
              </Link>
            </div>

            <div className="mt-8 mb-8">
              <Link
                href="/soluciones-financieras/prestamos-vivus-mexico"
                className="text-indigo-600 hover:underline"
              >
                Volver al análisis de Préstamos Vivus México
              </Link>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="requisitos-prestamos-vivus-mexico"
        category="soluciones-financieras"
        subCategory="loans"
      />
      <CompactFooter />
    </main>
  );
}
