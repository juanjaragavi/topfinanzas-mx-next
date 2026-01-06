import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de la tarjeta Bsmart U de Banamex | Top Finanzas MX",
  description:
    "La tarjeta Bsmart U de Banamex es ideal para universitarios: sin historial previo, sin anualidad el primer año y beneficios exclusivos.",
};

// Navy/Sky Arrow Icon Component (Color #014785 approx Sky-800)
function NavyArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-sky-800 mt-1 mr-3 flex-shrink-0"
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

export default function TarjetaBSmartUPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-bsmart-u-de-banamex"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta Bsmart U de Banamex
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta Bsmart U de Banamex es una excelente opción para
              estudiantes universitarios que buscan comenzar a construir su
              historial crediticio mientras disfrutan de beneficios adaptados a
              sus necesidades.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Diseñada para estudiantes universitarios:
                  </strong>{" "}
                  Ideal para quienes buscan su primera tarjeta de crédito.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin historial crediticio previo:
                  </strong>{" "}
                  No necesitas historial crediticio para solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas y descuentos:
                  </strong>{" "}
                  Ofrece múltiples beneficios para jóvenes.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin cuota anual el primer año:
                  </strong>{" "}
                  Y la posibilidad de evitarla en los años siguientes.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-bsmart-u-de-banamex"
              className="block w-full"
            >
              <button className="w-full bg-sky-800 hover:bg-sky-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Citibanamex-B%E2%80%A2Smart-U-1.webp"
                alt="Tarjeta Bsmart U de Banamex"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg text-gray-700 mb-6">
              A continuación, te presentamos una guía detallada sobre los
              beneficios de esta tarjeta y por qué puede ser la opción perfecta
              para ti.
            </p>

            {/* Section: ¿Qué es la tarjeta? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta Bsmart U de Banamex?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La tarjeta Bsmart U de Banamex está dirigida específicamente a
              estudiantes universitarios que desean iniciar su vida financiera.
              Este producto está diseñado para proporcionarles herramientas de
              administración financiera, así como acceso a beneficios exclusivos
              como descuentos en entretenimiento, restaurantes y más. Lo mejor
              de todo es que no necesitas un historial crediticio previo para
              obtenerla, lo que la convierte en una excelente opción para
              quienes buscan comenzar a construir su historial desde cero.
            </p>

            {/* Section: Beneficios principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios principales de la tarjeta Bsmart U
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  1. Sin cuota anual el primer año
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Uno de los principales atractivos de la tarjeta Bsmart U de
                  Banamex es que el primer año no pagarás cuota anual. Esta es
                  una gran ventaja para estudiantes que están comenzando y
                  prefieren ahorrar en costos adicionales. Además, si utilizas
                  la tarjeta al menos una vez al mes después del primer año,
                  podrás seguir disfrutando de la exoneración de la cuota anual.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  2. Descuentos y promociones exclusivas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La tarjeta Bsmart U ofrece una amplia gama de promociones y
                  descuentos exclusivos en una variedad de establecimientos,
                  incluyendo entretenimiento, restaurantes y tiendas. Estos
                  beneficios están diseñados pensando en el estilo de vida de
                  los estudiantes, brindando la posibilidad de disfrutar de sus
                  compras con descuentos atractivos. Es una forma excelente de
                  ahorrar en actividades que suelen formar parte de la vida
                  diaria de los universitarios.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  3. Programa de recompensas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Con cada compra que realices con la tarjeta Bsmart U, podrás
                  acumular puntos a través del programa de recompensas de
                  Banamex. Estos puntos pueden canjearse por una amplia variedad
                  de productos, descuentos y servicios, permitiéndote aprovechar
                  aún más cada una de tus compras. El programa de recompensas es
                  una excelente manera de maximizar el valor de tus gastos
                  diarios.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  4. Herramientas de administración financiera
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Otra ventaja de la tarjeta Bsmart U es el acceso a
                  herramientas de administración financiera que te permiten
                  gestionar tus gastos de manera eficiente. A través de la
                  aplicación móvil de Banamex, podrás monitorear tus
                  movimientos, recibir alertas de pago y gestionar tus finanzas
                  de manera más fácil y accesible. Esto es particularmente útil
                  para jóvenes que están comenzando a familiarizarse con el
                  manejo de crédito y finanzas personales.
                </p>
              </div>
            </div>

            {/* Section: ¿Qué pasos debo seguir? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Qué pasos debo seguir?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Solicitar la tarjeta Bsmart U es un proceso simple y accesible. A
              continuación, te mostramos los requisitos básicos que necesitas
              cumplir para aplicar:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser estudiante universitario:
                  </strong>{" "}
                  Este es un requisito clave para obtener la tarjeta, ya que
                  está diseñada específicamente para estudiantes activos de
                  universidades en México. Deberás presentar una constancia de
                  estudios o una credencial universitaria vigente.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Edad entre 18 y 24 años:
                  </strong>{" "}
                  La tarjeta está destinada a jóvenes estudiantes, por lo que
                  debes estar dentro de este rango de edad al momento de la
                  solicitud.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    No necesitas historial crediticio previo:
                  </strong>{" "}
                  Esta es una de las mayores ventajas de la tarjeta Bsmart U, ya
                  que te permite comenzar a construir tu historial crediticio
                  desde cero.
                </span>
              </li>
              <li className="flex items-start">
                <NavyArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Comprobante de ingresos o recomendación de tus padres:
                  </strong>{" "}
                  Aunque no es estrictamente necesario que tengas ingresos
                  propios, Banamex puede solicitarte una carta de recomendación
                  de tus padres o tutores que respalde tu capacidad de pago.
                </span>
              </li>
            </ul>

            {/* Section: ¿Cómo solicitarla? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Cómo solicitar la tarjeta Bsmart U de Banamex?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Solicitar la tarjeta Bsmart U es un proceso rápido y sencillo.
              Puedes hacerlo en línea a través del portal de Banamex, donde
              deberás completar un formulario con tus datos personales,
              información académica y adjuntar los documentos solicitados.
              También puedes acudir a una sucursal de Banamex y realizar el
              proceso de forma presencial.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Una vez que hayas enviado tu solicitud, Banamex evaluará tu perfil
              y te notificará si tu tarjeta ha sido aprobada. Si tu solicitud es
              aprobada, recibirás tu tarjeta en pocos días, y podrás comenzar a
              disfrutar de todos los beneficios que ofrece.
            </p>

            {/* Section: ¿Por qué elegirla? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Por qué elegir la tarjeta Bsmart U?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La tarjeta Bsmart U de Banamex es una opción ideal para
              estudiantes que buscan comenzar su historial crediticio y
              disfrutar de beneficios diseñados para su estilo de vida. Con
              promociones exclusivas, un programa de recompensas y herramientas
              de administración financiera, esta tarjeta te ofrece la
              flexibilidad que necesitas como joven universitario.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Además, al no requerir historial crediticio previo, es una
              oportunidad perfecta para aprender a manejar tus finanzas de
              manera responsable y obtener acceso a productos financieros que te
              ayudarán a crecer económicamente en el futuro.
            </p>

            {/* Section: Conclusion */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4">
              ¿Qué debo tener en cuenta?
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              La tarjeta de crédito Bsmart U de Banamex es mucho más que una
              simple herramienta financiera; es una oportunidad para que los
              estudiantes universitarios comiencen a construir su futuro
              crediticio de manera responsable. Con su enfoque en los jóvenes,
              ofrece beneficios atractivos como promociones exclusivas,
              recompensas por cada compra y la exención de la cuota anual si
              mantienes un uso activo. Si estás buscando tu primera tarjeta de
              crédito, la Bsmart U de Banamex puede ser tu mejor opción.
            </p>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
