import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  title: "Beneficios de la tarjeta de crédito Hey Banco | Top Finanzas MX",
  description:
    "Descubre los beneficios de la tarjeta de crédito Hey Banco: sin anualidad, proceso 100% digital, recompensas cashback y control total desde la app.",
};

// Dark Arrow Icon Component
function DarkArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#333333" />
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

export default function TarjetaHeyBancoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-hey-banco"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la tarjeta de crédito Hey Banco
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La tarjeta de crédito Hey Banco ofrece una serie de beneficios
              diseñados para hacer tu experiencia financiera más sencilla y
              económica.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      title="Sin anualidad"
                      className="text-blue-600 hover:underline"
                    >
                      Sin anualidad
                    </Link>
                    :
                  </strong>{" "}
                  Mantén tu tarjeta activa sin preocuparte por cuotas anuales.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso 100% digital:
                  </strong>{" "}
                  Solicita, activa y gestiona tu tarjeta completamente en línea.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Recompensas y{" "}
                    <Link
                      href="/soluciones-financieras/cashback"
                      title="Cashback"
                      className="text-blue-600 hover:underline"
                    >
                      cashback
                    </Link>
                    :
                  </strong>{" "}
                  Obtén dinero de vuelta en tus compras diarias.
                </span>
              </li>
              <li className="flex items-start">
                <DarkArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Control total desde la app:
                  </strong>{" "}
                  Monitorea tus finanzas desde la comodidad de tu celular.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-hey-banco/"
              className="block w-full"
            >
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/Hey-Banco-1-1.jpg"
                alt="Tarjeta de Crédito Hey Banco"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              Ya sea que estés buscando una tarjeta sin costos ocultos o una
              manera conveniente de gestionar tus finanzas desde una app, Hey
              Banco se presenta como una opción destacada. A continuación, te
              explicamos los beneficios clave de esta tarjeta, siguiendo el
              formato claro y amigable de TopFinanzas.
            </p>

            {/* Section: Sin anualidad */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Sin anualidad
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los beneficios más importantes de la tarjeta de crédito Hey
              Banco es que no cobra anualidad. Esto significa que puedes
              mantener tu tarjeta activa sin tener que pagar una cuota fija cada
              año, algo que puede marcar una gran diferencia a largo plazo. Si
              comparas esta tarjeta con otras que cobran anualidades, te das
              cuenta de que este ahorro recurrente es muy atractivo,
              especialmente si eres alguien que busca reducir los costos
              asociados con el uso de tarjetas de crédito.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Al no tener que preocuparte por una cuota anual, puedes
              concentrarte en aprovechar al máximo los otros beneficios de la
              tarjeta sin gastos adicionales.
            </p>

            {/* Section: Proceso completamente digital */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso completamente digital
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otro gran beneficio de Hey Banco es que el proceso de solicitud,
              aprobación y gestión de la tarjeta es 100% digital. No es
              necesario acudir a una sucursal física ni realizar trámites
              engorrosos. Todo lo puedes hacer desde la comodidad de tu hogar a
              través de la aplicación móvil de Hey Banco, disponible para
              dispositivos iOS y Android.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Desde la descarga de la app hasta la activación de la tarjeta, el
              proceso es sencillo y rápido. En menos de 48 horas, puedes tener
              tu tarjeta lista para usar, lo que facilita la vida a quienes
              buscan una experiencia moderna y eficiente.
            </p>

            {/* Section: Recompensas y cashback */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Recompensas y cashback
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              El cashback es uno de los beneficios más atractivos que ofrece la
              tarjeta Hey Banco. Ganas un porcentaje de dinero de vuelta en cada
              compra que realices, lo que significa que, con el tiempo, puedes
              acumular una cantidad considerable de recompensas simplemente por
              usar tu tarjeta para gastos cotidianos.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Este cashback se puede aplicar a todo tipo de compras, lo que te
              permite maximizar el valor de cada transacción. Desde compras en
              supermercados hasta servicios digitales, cada peso que gastes
              puede generar un retorno. Este programa de recompensas convierte a
              la tarjeta en una herramienta financiera poderosa para aquellos
              que quieren sacar el mayor provecho a sus gastos diarios.
            </p>

            {/* Section: Flexibilidad en los pagos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en los pagos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta de crédito Hey Banco te ofrece opciones flexibles para
              gestionar tus pagos. Puedes optar por pagar el saldo total cada
              mes para evitar intereses o realizar pagos mínimos si así lo
              prefieres. Esto te da la libertad de elegir cómo manejar tus
              finanzas en función de tu situación económica en cada momento.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, Hey Banco permite configurar pagos automáticos a través de
              su aplicación, asegurando que nunca te olvides de pagar y así
              mantener un buen{" "}
              <Link
                href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante"
                title="Historial crediticio"
                className="text-blue-600 hover:underline"
              >
                historial crediticio
              </Link>
              .
            </p>

            {/* Section: Control total desde la app */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Control total desde la app
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La gestión financiera es mucho más fácil cuando puedes controlar
              todo desde una sola plataforma. La app de Hey Banco te permite no
              solo monitorear tus transacciones, sino también realizar pagos,
              ver el saldo disponible, revisar el historial de compras, y
              ajustar tus preferencias. Todo esto desde la palma de tu mano.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta característica de control total es ideal para personas que
              valoran la simplicidad y la eficiencia en sus operaciones
              financieras diarias. Además, la app te envía notificaciones en
              tiempo real sobre cada movimiento, lo que ayuda a mantenerte
              siempre informado y al tanto de tu situación financiera.
            </p>

            {/* Section: Sin comisiones ocultas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Sin comisiones ocultas
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Un beneficio adicional es la transparencia en cuanto a tarifas y
              comisiones. Hey Banco no te sorprenderá con cargos inesperados, ya
              que todas las tarifas y costos asociados con la tarjeta se
              presentan claramente desde el inicio. Esta transparencia es
              fundamental para mantener la confianza en el producto y permite a
              los usuarios planificar sus finanzas de manera más eficiente.
            </p>

            {/* Section: Beneficios adicionales de la plataforma Hey Banco */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios adicionales de la plataforma Hey Banco
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Además de los beneficios mencionados anteriormente, Hey Banco
              ofrece características adicionales dentro de su plataforma que
              complementan la experiencia de la tarjeta de crédito. Puedes
              acceder a productos financieros adicionales, como cuentas de
              ahorro o préstamos personales, todo desde la misma app.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Esto convierte a Hey Banco en una solución integral para la
              gestión financiera, permitiendo a los usuarios acceder a una gama
              de servicios que facilitan el ahorro, el crédito y la inversión,
              todo en una sola plataforma.
            </p>

            {/* Section: ¿Es la tarjeta de crédito Hey Banco ideal para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la tarjeta de crédito Hey Banco ideal para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              La tarjeta de crédito Hey Banco se destaca por ser una opción
              moderna y práctica para quienes buscan simplicidad y beneficios
              económicos. Desde la ausencia de anualidad hasta la posibilidad de
              obtener cashback en tus compras diarias, esta tarjeta ofrece una
              serie de ventajas que la hacen atractiva tanto para nuevos
              usuarios de crédito como para quienes buscan optimizar su
              experiencia financiera.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Si estás buscando una tarjeta que te ofrezca flexibilidad,
              transparencia, y un proceso digital sin complicaciones, Hey Banco
              puede ser la opción ideal para ti. Solicítala hoy y comienza a
              disfrutar de todos sus beneficios.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-hey-banco/"
              className="block w-full mb-12"
            >
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-de-credito-hey-banco"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <CompactFooter />
    </main>
  );
}
