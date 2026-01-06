import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Header } from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios de solicitar un préstamo con DiDi Préstamos | Top Finanzas",
  description:
    "Descubre los beneficios de DiDi Préstamos: financiamiento rápido, digital, seguro y accesible para todos, con la confianza de una plataforma global.",
};

const OrangeArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function DiDiPrestamosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <Link href="/soluciones-financieras" className="hover:text-gray-900">
            Soluciones Financieras
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-gray-900">
            Beneficios de solicitar un préstamo con DiDi Préstamos
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Beneficios de solicitar un préstamo con DiDi Préstamos
        </h1>

        {/* Ad Unit - Square */}
        <div className="mb-8 flex justify-center">
          <div
            id="square02"
            className="min-h-[250px] min-w-[300px] bg-slate-100"
            data-topads
            data-topads-size="square"
          />
        </div>

        {/* Hero Image */}
        <div className="mb-8 overflow-hidden rounded-xl">
          <Image
            src="https://media.topfinanzas.com/images/didi-1-1-1.jpg"
            alt="DiDi Préstamos"
            width={800}
            height={400}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Intro */}
        <div className="mb-8 space-y-6 text-lg text-gray-700">
          <p>
            En el mundo actual, tener acceso a financiamiento rápido y sencillo
            se ha convertido en una prioridad para muchas personas. Con el
            aumento de la digitalización y la aparición de plataformas
            financieras innovadoras, obtener un préstamo se ha vuelto mucho más
            accesible.
          </p>
          <p>
            Una de estas soluciones es DiDi Préstamos, una plataforma que ofrece
            préstamos personales con una serie de beneficios diseñados para
            hacer que el proceso de solicitud sea lo más simple y eficiente
            posible. A continuación, te detallamos los principales beneficios de
            solicitar un préstamo con DiDi Préstamos y cómo esta plataforma se
            destaca frente a otras opciones en el mercado.
          </p>
        </div>

        {/* Benefits Box */}
        <div className="mb-12 rounded-2xl bg-gray-50 p-6 md:p-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <OrangeArrowIcon />
              <span className="text-gray-700">
                <strong className="text-gray-900">
                  Proceso rápido y digital:
                </strong>{" "}
                Solicita un préstamo en minutos, sin salir de casa, con un
                proceso 100% online.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <OrangeArrowIcon />
              <span className="text-gray-700">
                <strong className="text-gray-900">
                  Préstamos personalizados:
                </strong>{" "}
                Ajusta la cantidad y plazo de pago según tus necesidades, con
                flexibilidad en opciones.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <OrangeArrowIcon />
              <span className="text-gray-700">
                <strong className="text-gray-900">
                  Tasas competitivas y sin sorpresas:
                </strong>{" "}
                Ofrece intereses claros y accesibles, sin costos ocultos.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <OrangeArrowIcon />
              <span className="text-gray-700">
                <strong className="text-gray-900">
                  Accesibilidad para todos:
                </strong>{" "}
                No se requiere historial crediticio perfecto, permitiendo acceso
                a más personas.
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/soluciones-financieras/requisitos-prestamos-didi"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-orange-700"
            >
              Quiero conocer los requisitos
            </Link>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Proceso de solicitud rápido y 100% digital
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Uno de los principales beneficios de utilizar DiDi Préstamos es la
              rapidez y simplicidad del proceso de solicitud. A diferencia de
              los métodos tradicionales de solicitud de crédito, que pueden
              implicar visitas a sucursales y largos tiempos de espera, DiDi
              Préstamos permite a los usuarios completar todo el proceso de
              manera 100% digital, desde la solicitud hasta la aprobación. Esto
              significa que no tienes que salir de casa ni perder tiempo en
              trámites burocráticos.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              La plataforma está diseñada para que el proceso sea lo más ágil
              posible, permitiendo que los solicitantes puedan recibir una
              respuesta en cuestión de minutos tras haber completado su
              solicitud. Esta rapidez es especialmente beneficiosa para aquellos
              que necesitan financiamiento inmediato para cubrir gastos
              urgentes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Préstamos personalizados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Uno de los mayores temores al solicitar un préstamo es enfrentarse
              a tasas de interés exorbitantes que incrementan de manera
              significativa el monto total a pagar. DiDi Préstamos se destaca
              por ofrecer tasas de interés competitivas y transparentes, lo que
              ayuda a que los usuarios no se enfrenten a costos ocultos o
              inesperados.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              La claridad en las condiciones del préstamo es fundamental para
              que los solicitantes puedan tomar decisiones informadas y evitar
              sorpresas desagradables al momento de pagar. Con DiDi Préstamos,
              los usuarios saben desde el inicio cuánto deberán pagar, lo que
              genera mayor confianza en la plataforma.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Sin necesidad de historial crediticio perfecto
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Otro beneficio importante de DiDi Préstamos es que no requiere un
              historial crediticio impecable para aprobar un préstamo. Muchas
              personas en México encuentran dificultades para acceder a
              financiamiento debido a un historial crediticio limitado o a
              problemas financieros previos. DiDi Préstamos busca ofrecer
              soluciones accesibles para una mayor cantidad de personas, lo que
              permite a los usuarios con un historial crediticio imperfecto
              tener la oportunidad de acceder a un crédito.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Este enfoque inclusivo es un gran alivio para aquellos que
              necesitan financiamiento pero han sido rechazados en otras
              instituciones financieras por no cumplir con requisitos estrictos
              de crédito.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Seguridad y confianza
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cuando se trata de realizar transacciones financieras en línea, la
              seguridad es una preocupación legítima. DiDi Préstamos garantiza
              la protección de la información personal y financiera de los
              usuarios mediante sistemas de encriptación avanzados. La
              plataforma sigue estrictos protocolos de seguridad para asegurar
              que tus datos estén protegidos en todo momento, lo que genera un
              alto nivel de confianza entre los usuarios.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Además, al ser parte de la reconocida marca DiDi, que tiene una
              presencia internacional y una reputación sólida, los usuarios
              pueden estar tranquilos al utilizar esta plataforma de préstamos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Plazos de pago flexibles
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DiDi Préstamos ofrece plazos de pago flexibles, lo que significa
              que los usuarios pueden seleccionar la duración del préstamo según
              sus necesidades y capacidad de pago. Esta flexibilidad es un gran
              beneficio, ya que permite a los solicitantes ajustar los pagos a
              su flujo de ingresos y evitar la presión de tener que cumplir con
              plazos estrictos que podrían generar problemas financieros.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Al ofrecer opciones de plazos de pago ajustables, DiDi Préstamos
              se adapta a diferentes perfiles de usuarios, desde aquellos que
              buscan un préstamo a corto plazo hasta aquellos que prefieren
              devolverlo en un plazo más largo.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Compatibilidad con la plataforma DiDi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Para los usuarios de la aplicación DiDi, la integración de DiDi
              Préstamos dentro de su ecosistema es una ventaja adicional. Los
              conductores y usuarios frecuentes de DiDi pueden acceder
              fácilmente a la plataforma de préstamos, lo que facilita aún más
              la gestión de sus finanzas personales desde una sola aplicación.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Este nivel de integración hace que DiDi Préstamos sea una opción
              conveniente para aquellos que ya forman parte de la comunidad
              DiDi, simplificando el acceso al financiamiento sin necesidad de
              utilizar múltiples plataformas.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              A tener en cuenta
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DiDi Préstamos ofrece una solución de financiamiento accesible,
              flexible y segura para quienes buscan un préstamo personal en
              México. Con un proceso digital rápido, opciones de personalización
              y tasas de interés competitivas, la plataforma se posiciona como
              una excelente opción para aquellos que necesitan financiamiento
              inmediato sin las complicaciones asociadas a los préstamos
              tradicionales. Además, su enfoque en la inclusión financiera,
              permitiendo el acceso a personas con un historial crediticio
              imperfecto, lo convierte en una opción atractiva para una amplia
              variedad de usuarios.
            </p>
          </section>
        </div>

        {/* Disclaimer */}
        <AIContentDisclaimer />
      </main>
      <CompactFooter />
    </div>
  );
}
