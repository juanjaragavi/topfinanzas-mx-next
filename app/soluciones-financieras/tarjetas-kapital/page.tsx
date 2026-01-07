import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneficios de las tarjetas de crédito Kapital | Top Finanzas MX",
  description:
    "Descubre los beneficios de las tarjetas de crédito Kapital: sin historial crediticio, cashback en compras, transparencia y proceso 100% digital.",
};

// Lime Arrow Icon Component
function LimeArrowIcon() {
  return (
    <svg
      className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-lime-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M7 10l2.5 2.5L14 8"
        stroke="black"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TarjetasKapitalPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjetas-kapital"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de las tarjetas de crédito Kapital
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              Las tarjetas de crédito Kapital se han convertido en una opción
              atractiva para quienes buscan flexibilidad, transparencia y
              beneficios sólidos a la hora de realizar compras y gestionar sus
              finanzas.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acceso sin{" "}
                    <Link href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante">
                      historial crediticio
                    </Link>
                    :
                  </strong>{" "}
                  Ideal para quienes comienzan su vida financiera.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link href="/finanzas-personales/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva">
                      Cashback
                    </Link>{" "}
                    en compras diarias:
                  </strong>{" "}
                  Recupera un porcentaje de tus gastos en efectivo.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Transparencia en comisiones:
                  </strong>{" "}
                  No te preocupes por cargos ocultos o sorpresas.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Proceso de solicitud 100% en línea:
                  </strong>{" "}
                  Gestiona todo desde la comodidad de tu hogar.
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjetas-kapital/"
              className="block w-full"
            >
              <button className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/kapital-1-1.jpg"
                alt="Tarjetas de Crédito Kapital"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-gray-700 mb-6 leading-tight">
              Si estás interesado en maximizar el valor de tus compras y
              disfrutar de recompensas en efectivo, las tarjetas Kapital pueden
              ser una excelente opción. A continuación, te presentamos los
              beneficios clave que estas tarjetas ofrecen, basados en un formato
              claro y amigable como el de TopFinanzas.
            </p>

            {/* Section: Sin necesidad de historial crediticio */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Sin necesidad de historial crediticio
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Uno de los principales beneficios de las tarjetas de crédito
              Kapital es que no requieren un{" "}
              <Link
                href="/soluciones-financieras/historial-crediticio"
                title="Historial crediticio"
                className="text-blue-600 hover:underline"
              >
                historial crediticio
              </Link>{" "}
              previo para ser aprobadas. Esto las convierte en una opción ideal
              para quienes están iniciando su vida financiera o buscan
              reconstruir su crédito. A diferencia de otras tarjetas que
              requieren un historial sólido, Kapital abre las puertas a una
              amplia gama de usuarios, ofreciendo una herramienta accesible para
              empezar a gestionar sus finanzas de manera responsable.
            </p>

            {/* Section: Cashback en compras */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Cashback en compras
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Una característica atractiva de las tarjetas Kapital es su
              programa de{" "}
              <Link
                href="/soluciones-financieras/cashback"
                title="Cashback"
                className="text-blue-600 hover:underline"
              >
                cashback
              </Link>
              , que te permite ganar dinero por cada compra que realices.
              Dependiendo de la tarjeta que elijas, puedes obtener hasta un 1.5%
              de devolución en tus compras, lo que se traduce en ahorro directo
              en tu cuenta. Este beneficio es especialmente útil para quienes
              realizan compras frecuentes y desean aprovechar al máximo cada
              gasto
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              El cashback se aplica en una amplia gama de categorías, como
              compras en supermercados, gasolina y entretenimiento, lo que te
              permite ahorrar dinero en las compras del día a día. Además, el
              dinero acumulado en cashback puede ser utilizado para pagar el
              saldo de tu tarjeta o en futuras compras.
            </p>

            {/* Section: Transparencia en tarifas y comisiones */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Transparencia en tarifas y comisiones
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Uno de los problemas que muchos usuarios enfrentan con las
              tarjetas de crédito tradicionales son las comisiones ocultas y las
              sorpresas desagradables al revisar los estados de cuenta. Con
              Kapital, esto no será un problema. Las tarjetas Kapital se
              caracterizan por su transparencia en las tarifas y comisiones,
              asegurando que no te enfrentarás a cargos inesperados.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, las tarjetas Kapital{" "}
              <Link
                href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                title="Tarjetas sin anualidad"
                className="text-blue-600 hover:underline"
              >
                no cobran anualidad
              </Link>
              , lo que representa un ahorro significativo, especialmente si
              buscas una tarjeta que puedas usar sin preocuparte por costos
              recurrentes. La política de no tener comisiones ocultas es un
              punto a favor que atrae a muchos usuarios que prefieren claridad y
              simplicidad.
            </p>

            {/* Section: Proceso de solicitud 100% en línea */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Proceso de solicitud 100% en línea
            </h2>
            <p className="text-gray-700 mb-6 leading-tight">
              Solicitar una tarjeta de crédito Kapital es un proceso
              completamente digital, lo que significa que puedes gestionar todo
              desde la comodidad de tu hogar. No necesitas acudir a una sucursal
              física ni lidiar con papeleo excesivo. Todo el proceso se realiza
              a través del sitio web de Kapital, donde puedes completar tu
              solicitud en cuestión de minutos.
            </p>

            {/* Section: Control total desde la app */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Control total desde la app
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Kapital pone a tu disposición una aplicación móvil que te permite
              gestionar todos los aspectos de tu tarjeta. A través de la app,
              puedes:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">Ver tu saldo disponible.</span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  Realizar pagos y transferencias.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  Revisar el historial de transacciones.
                </span>
              </li>
              <li className="flex items-start">
                <LimeArrowIcon />
                <span className="text-gray-700">
                  Recibir notificaciones de tus compras y pagos pendientes.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 leading-tight">
              Esta herramienta es especialmente útil para quienes desean
              mantener un control estricto de sus finanzas sin necesidad de
              acudir a sucursales o realizar llamadas telefónicas. Con la app de
              Kapital, tienes acceso instantáneo a toda la información que
              necesitas para gestionar tu tarjeta de manera eficiente.
            </p>

            {/* Section: Flexibilidad en pagos */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Flexibilidad en pagos
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Otra ventaja importante de las tarjetas Kapital es la flexibilidad
              que ofrecen a la hora de realizar pagos. Puedes elegir pagar el
              saldo total al final de cada mes o realizar pagos mínimos,
              dependiendo de tu situación financiera. Además, Kapital te permite
              configurar pagos automáticos para evitar retrasos y mejorar tu
              historial crediticio.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Además, si en algún momento te enfrentas a una situación
              financiera complicada, Kapital ofrece opciones para aplazar pagos
              o establecer plazos de pago más flexibles, lo que te da mayor
              tranquilidad para gestionar tus finanzas personales sin estrés
            </p>

            {/* Section: ¿Son las tarjetas de crédito Kapital ideales para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Son las tarjetas de crédito Kapital ideales para ti?
            </h2>
            <p className="text-gray-700 mb-4 leading-tight">
              Las tarjetas de crédito Kapital ofrecen una excelente combinación
              de accesibilidad, recompensas y transparencia. Con beneficios como
              cashback en compras, transparencia en comisiones y un proceso de
              solicitud 100% en línea, estas tarjetas son ideales para una
              amplia variedad de usuarios, desde quienes comienzan a construir
              su historial crediticio hasta aquellos que buscan maximizar el
              valor de sus compras.
            </p>
            <p className="text-gray-700 mb-6 leading-tight">
              Si estás buscando una tarjeta de crédito que se adapte a tus
              necesidades, sin costos ocultos y con una serie de ventajas, las
              tarjetas Kapital pueden ser la opción ideal. ¡Solicita la tuya hoy
              y empieza a disfrutar de todos estos beneficios!
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjetas-kapital/"
              className="block w-full mb-12"
            >
              <button className="w-full bg-lime-300 hover:bg-lime-400 text-gray-900 font-medium py-4 px-8 rounded-full text-lg transition-colors">
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
