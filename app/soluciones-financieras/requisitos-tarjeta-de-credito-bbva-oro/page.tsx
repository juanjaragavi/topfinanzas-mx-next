import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Requisitos para solicitar la tarjeta de crédito BBVA Oro | Top Finanzas MX",
  description:
    "La tarjeta de crédito BBVA Oro es una de las opciones más populares y versátiles que ofrece el banco BBVA en México. Conoce sus requisitos y beneficios.",
};

// Blue Arrow Icon Component
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

export default function RequisitosTarjetaBBVAOroPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="requisitos-tarjeta-de-credito-bbva-oro"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Requisitos para solicitar la tarjeta de crédito BBVA Oro
            </h1>

            <div
              id="square03"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Intro Section */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito BBVA Oro es una de las opciones más
              populares y versátiles que ofrece el banco BBVA en México. Está
              diseñada para usuarios que buscan obtener mayores beneficios, como
              recompensas, seguros de protección, y acceso a promociones
              exclusivas.
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás considerando solicitar la tarjeta BBVA Oro, es importante
              conocer sus requisitos, beneficios y el proceso de solicitud.
            </p>

            {/* Main Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/bbva-oro.jpg"
                alt="Tarjeta de Crédito BBVA Oro"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Puntos clave */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Puntos clave
            </h2>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-1.jpg"
                alt="Puntos clave"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Sin cuota anual el primer año:
                  </strong>{" "}
                  Disfruta del primer año sin pagar cuota anual y condiciones
                  para exonerarla en años posteriores.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Programa de recompensas:
                  </strong>{" "}
                  Acumula puntos con cada compra y canjéalos por productos,
                  servicios o viajes.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Cobertura de seguros:
                  </strong>{" "}
                  Viajes protegidos, compras aseguradas y asistencia médica en
                  emergencias.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones exclusivas:
                  </strong>{" "}
                  Meses sin intereses y descuentos en una amplia red de
                  comercios.
                </span>
              </li>
            </ul>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/como-saber-si-estas-en-buro-de-credito/"
                className="text-blue-600 hover:underline"
              >
                ¿Cómo saber si estás en buró de crédito y qué significa?
              </Link>
            </p>

            {/* ¿Qué es la tarjeta de crédito BBVA Oro? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué es la tarjeta de crédito BBVA Oro?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito BBVA Oro es un producto financiero que
              ofrece múltiples beneficios, desde acumulación de puntos hasta
              seguros de protección, diseñada para usuarios que desean una
              tarjeta con acceso a servicios y promociones adicionales. Los
              titulares de esta tarjeta pueden disfrutar de beneficios
              exclusivos en una amplia variedad de categorías, como viajes,
              entretenimiento y compras, lo que la convierte en una excelente
              opción para quienes buscan maximizar el valor de sus gastos
              diarios.
            </p>

            <div
              id="square04"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Beneficios principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Beneficios principales de la tarjeta BBVA Oro
            </h2>

            {/* 1. Sin cuota anual */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              1. Sin cuota anual el primer año
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Una de las ventajas más destacadas de la tarjeta BBVA Oro es que
              durante el primer año no tendrás que pagar ninguna cuota anual.
              Este beneficio es ideal para quienes desean probar la tarjeta sin
              incurrir en costos adicionales. Posteriormente, BBVA ofrece la
              posibilidad de seguir exonerando la cuota anual si realizas
              compras de al menos una vez al mes, lo que facilita el
              mantenimiento de la tarjeta sin cargos innecesarios.
            </p>

            {/* 2. Programa de recompensas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              2. Programa de recompensas
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Con cada compra que realices con la tarjeta BBVA Oro, acumularás
              puntos que puedes canjear por productos, servicios, descuentos e
              incluso experiencias de viaje. Este programa de recompensas está
              diseñado para brindarte más por tu dinero, permitiéndote
              aprovechar al máximo tus compras cotidianas. Además, este programa
              tiene flexibilidad en la acumulación y el uso de puntos, lo que se
              ajusta a diversas necesidades y estilos de vida.
            </p>

            {/* 3. Seguro de protección */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              3. Seguro de protección
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Otro de los grandes beneficios de la tarjeta BBVA Oro es su amplio
              seguro de protección, el cual incluye:
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-3.jpg"
                alt="Seguro de protección"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguro de accidentes en viajes:
                  </strong>{" "}
                  Si pagas tus boletos de avión con la tarjeta, estarás cubierto
                  en caso de accidentes durante tus viajes, brindando asistencia
                  médica y hospitalaria cuando sea necesario.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Seguro de compras protegidas:
                  </strong>{" "}
                  Si un producto que compraste con la tarjeta es robado o sufre
                  daños dentro de un período determinado, este seguro te cubre
                  para que puedas hacer una reclamación.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Asistencia médica y legal:
                  </strong>{" "}
                  Tanto dentro como fuera de México, tendrás acceso a asistencia
                  médica y legal en caso de emergencias, lo que ofrece
                  tranquilidad al viajar o al realizar compras de gran valor.
                </span>
              </li>
            </ul>

            {/* 4. Acceso a promociones exclusivas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              4. Acceso a promociones exclusivas
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta BBVA Oro ofrece acceso a una serie de promociones
              exclusivas, como meses sin intereses en una amplia red de
              establecimientos comerciales. Esto es ideal para quienes planean
              realizar compras grandes o desean financiar sus compras de manera
              más cómoda, distribuyendo los pagos sin la presión de intereses
              adicionales. Además, los titulares de la tarjeta también pueden
              disfrutar de descuentos especiales en sectores como
              entretenimiento, moda y viajes.
            </p>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-2.jpg"
                alt="Promociones exclusivas"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/tarjetas-de-credito-de-neobancos/"
                className="text-blue-600 hover:underline"
              >
                Top tarjetas de neobancos
              </Link>
            </p>

            {/* ¿Qué pasos debo seguir? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué pasos debo seguir?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Si estás interesado en solicitar la tarjeta BBVA Oro, debes
              cumplir con ciertos requisitos que aseguran que eres elegible para
              manejar este tipo de crédito. A continuación, te detallamos los
              requisitos básicos:
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/comprar-boletos-de-avion-mas-economicos/"
                className="text-blue-600 hover:underline"
              >
                Trucos para comprar boletos de avión más económicos
              </Link>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ser mayor de 18 años:
                  </strong>{" "}
                  Como con cualquier tarjeta de crédito, es necesario ser mayor
                  de edad para solicitarla.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Ingresos mínimos:</strong>{" "}
                  BBVA establece que los solicitantes de la tarjeta Oro deben
                  contar con un ingreso mínimo de $20,000 pesos mensuales. Esto
                  asegura que el solicitante tiene la capacidad financiera de
                  cumplir con los pagos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Historial crediticio positivo:
                  </strong>{" "}
                  Para poder acceder a la tarjeta BBVA Oro, es importante contar
                  con un buen historial crediticio. BBVA revisará tu
                  comportamiento previo con otros productos financieros para
                  asegurarse de que manejas tus créditos de manera responsable.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Identificación oficial vigente y comprobante de domicilio:
                  </strong>{" "}
                  Deberás presentar tu identificación oficial vigente (INE o
                  pasaporte) y un comprobante de domicilio reciente para
                  completar tu solicitud.
                </span>
              </li>
            </ul>

            {/* Proceso de solicitud */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Proceso de solicitud
            </h3>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              Solicitar la tarjeta BBVA Oro es un proceso rápido y sencillo.
              Puedes hacerlo tanto en línea como en una sucursal del banco. Aquí
              te explicamos los pasos para llevar a cabo la solicitud:
            </p>

            <p className="text-lg text-gray-700 mb-6 font-normal">
              <strong>Conoce más:</strong>{" "}
              <Link
                href="/finanzas-personales/ideas-de-negocio-para-emprendedores/"
                className="text-blue-600 hover:underline"
              >
                5 ideas de negocio para emprendedores jóvenes
              </Link>
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Solicitud en línea o en sucursal:
                  </strong>{" "}
                  Puedes comenzar el proceso de solicitud en la página web de
                  BBVA o acudiendo a una de sus sucursales. Deberás llenar un
                  formulario con tu información personal, ingresos y otros datos
                  financieros.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Envío de documentos:
                  </strong>{" "}
                  Una vez que hayas completado el formulario, deberás enviar los
                  documentos necesarios, como tu identificación oficial y
                  comprobante de domicilio.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Evaluación del historial crediticio:
                  </strong>{" "}
                  BBVA evaluará tu historial crediticio para verificar si
                  cumples con los requisitos de la tarjeta Oro. Este proceso
                  puede tardar unos días.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Aprobación y entrega:
                  </strong>{" "}
                  Si tu solicitud es aprobada, recibirás tu tarjeta BBVA Oro en
                  pocos días. Una vez que la tengas, podrás activarla y comenzar
                  a disfrutar de sus beneficios.
                </span>
              </li>
            </ul>

            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/call-to-ACTION-4.jpg"
                alt="Proceso de solicitud"
                fill
                className="object-cover"
              />
            </div>

            {/* ¿Por qué elegir la tarjeta BBVA Oro? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Por qué elegir la tarjeta BBVA Oro?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito BBVA Oro es ideal para usuarios que buscan
              un producto financiero que les ofrezca mayores beneficios y
              recompensas. Su programa de puntos, promociones exclusivas y
              seguros de protección hacen de esta tarjeta una excelente opción
              para quienes realizan compras frecuentes y buscan maximizar su
              valor. Además, su límite de crédito es superior al de otras
              tarjetas, lo que brinda flexibilidad financiera para compras más
              grandes o viajes.
            </p>

            {/* ¿Es la opción ideal para mí? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la opción ideal para mí?
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La tarjeta de crédito BBVA Oro es una opción sólida para quienes
              desean obtener más por su dinero, con beneficios que incluyen un
              atractivo programa de recompensas, promociones exclusivas y una
              amplia gama de seguros de protección. Si cumples con los
              requisitos y estás buscando una tarjeta que te ofrezca
              flexibilidad y seguridad, la tarjeta BBVA Oro es una excelente
              opción.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center my-8">
              <Link
                href="https://www.bbva.mx/personas/productos/tarjetas-de-credito/tarjeta-de-credito-oro.html"
                className="inline-block bg-[#004481] text-white font-bold py-3 px-8 rounded-full hover:bg-[#003366] transition-colors text-lg"
              >
                Ver en sitio oficial
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
