import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-likeu-de-santander",
    languages: {
      "es-MX":
        "https://topfinanzas.com/mx/soluciones-financieras/tarjeta-de-credito-likeu-de-santander",
    },
  },
  title: "LikeU de Santander: innovación en tus manos | Top Finanzas MX",
  description:
    "Descubre la tarjeta de crédito LikeU de Santander: personalizable, sin anualidad, con cashback y seguridad avanzada. ¡Solicítala hoy!",
};

// Red Arrow Icon Component
function RedArrowIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <circle cx="10" cy="10" r="10" fill="#dc2626" />
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

export default function TarjetaLikeUSantanderPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="tarjeta-de-credito-likeu-de-santander"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              LikeU de Santander: innovación en tus manos
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito LikeU combina flexibilidad, seguridad y
              beneficios exclusivos.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Diseños personalizables:
                  </strong>{" "}
                  Apoya una causa con el color de tu tarjeta.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Gestión flexible:</strong>{" "}
                  Personaliza tus alertas a través de la app de Santander.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    <Link
                      href="/soluciones-financieras/cashback"
                      title="Cashback"
                      className="text-blue-600 hover:underline"
                    >
                      Cashback
                    </Link>
                    :
                  </strong>{" "}
                  Acumula puntos y cámbialos por productos y experiencias.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
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
                  solo debes gastar $200.00 M.N. mensuales con tu tarjeta
                </span>
              </li>
            </ul>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu"
              className="block w-full"
            >
              <button className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-sm overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-1-3.webp"
                alt="Tarjeta de crédito Like U Santander"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Section: Experiencia personalizada al máximo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Experiencia personalizada al máximo
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              La tarjeta LikeU de Santander no es solo un medio de pago, sino
              una extensión de tu individualidad y preferencias. Esta tarjeta
              ofrece una experiencia totalmente personalizable que va desde la
              elección del diseño hasta la configuración de la aplicación móvil,
              permitiendo que cada aspecto de LikeU se alinee con tu modo de
              vida personal.
            </p>

            {/* Section: Personalización: tu estilo, tu tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Personalización: tu estilo, tu tarjeta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              LikeU te permite personalizar profundamente tu experiencia
              financiera, desde el diseño físico de la tarjeta hasta la
              interacción con la aplicación móvil, haciendo que cada aspecto se
              alinee perfectamente con tu vida. Escoge entre varios diseños cada
              uno dedicado a apoyar diferentes causas:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU Red:</strong>{" "}
                  Contribuye a la educación de niños en zonas marginadas, tanto
                  urbanas como rurales.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU Blue:</strong> Apoya
                  en la limpieza y preservación de nuestros mares, protegiendo
                  los ecosistemas marinos.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU Green:</strong>{" "}
                  Contribuye a proteger y restaurar los ecosistemas terrestres
                  de nuestro país, enfocado en la sostenibilidad ambiental.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU Pink:</strong>{" "}
                  Participa en la lucha contra el cáncer de mama, apoyando a
                  quienes enfrentan esta dura batalla.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU Star:</strong> Mejora
                  la vida de niños con discapacidades como parálisis cerebral y
                  autismo, proporcionando recursos esenciales para su
                  desarrollo.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">LikeU White:</strong>{" "}
                  Contribuye a la nutrición y salud infantil, asegurando
                  bienestar y seguridad alimentaria para los niños.
                </span>
              </li>
            </ul>

            {/* Section: Una aplicación que entiende tus necesidades */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Una aplicación que entiende tus necesidades
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Con la app de Santander, personaliza aún más tu experiencia
              ajustando la configuración según tus hábitos de gasto,
              preferencias de notificación y gestión de seguridad. La aplicación
              te permite:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Controlar Gastos:</strong>{" "}
                  Visualiza y gestiona tus gastos en tiempo real, estableciendo
                  límites que se adecuen a tu presupuesto.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Alertas Personalizadas:
                  </strong>{" "}
                  Configura alertas para mantener un seguimiento proactivo de la
                  actividad de tu tarjeta, garantizando que estás siempre
                  informado.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ajustes de Seguridad:
                  </strong>{" "}
                  Optimiza los protocolos de seguridad según tus movimientos,
                  asegurando que tu tarjeta y tu información financiera estén
                  protegidos en todo momento.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Esta capacidad de personalización no solo hace que LikeU sea una
              herramienta financiera versátil y adaptativa, sino que también
              transforma tu tarjeta en un símbolo de tus valores y un vehículo
              para el cambio social, permitiéndote mostrar con orgullo lo que
              apoyas cada vez que realizas una compra.
            </p>

            {/* Section: Programas de asistencias que se adaptan a ti */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Programas de asistencias que se adaptan a ti
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Personaliza los beneficios de tu tarjeta de acuerdo a tu estilo de
              vida y necesidades, y paga solo por lo que uses cuando lo uses.
              Elige uno o varios programas de asistencias y contrátalos con
              costo desde Super Wallet. Elige entre una variedad de programas
              como:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Programa Médico:</strong>{" "}
                  Incluye consultas médicas y psicológicas online 24/7, acceso a
                  una plataforma wellness, check up básico, entrega de
                  medicamentos bajo prescripción, y más.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Programa Viajes:</strong>{" "}
                  Ofrece asistencia durante tus viajes como traslado por
                  accidente o enfermedad, hotel por convalecencia, asesoría
                  legal en emergencias, y descuentos significativos en hoteles a
                  nivel mundial.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Programa Mascotas:</strong>{" "}
                  Proporciona orientación veterinaria, descuentos en clínicas, y
                  coordinación de servicios en caso de emergencia.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Estos programas reflejan el compromiso de Santander con
              proporcionar no solo beneficios financieros, sino también apoyo en
              diversas áreas de tu vida.
            </p>

            {/* Section: Seguridad avanzada con LikeU */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Seguridad avanzada con LikeU
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Con la seguridad como prioridad, LikeU incorpora tecnología
              avanzada para proteger a los usuarios contra el fraude y otros
              riesgos financieros.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Protección Integral
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              La Tarjeta de Crédito LikeU de Santander está diseñada con
              tecnologías avanzadas para asegurar cada una de tus operaciones.
              Equipada con tecnología contactless, LikeU permite realizar pagos
              rápidos y seguros, reduciendo el contacto físico y minimizando los
              riesgos de fraude.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Compatibilidad con plataformas de pago
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Además de la tecnología contactless, LikeU es compatible con
              sistemas de pago digital como Apple Pay, proporcionando un nivel
              adicional de seguridad. Esto te permite realizar transacciones sin
              exponer directamente tu tarjeta, lo que disminuye aún más la
              posibilidad de robo de datos y fraude.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Diseño seguro de la tarjeta
            </h3>
            <p className="text-gray-700 mb-6 font-normal">
              Un aspecto distintivo de LikeU es su diseño «sin números», una
              característica de seguridad que elimina los números impresos en la
              tarjeta, protegiendo tus datos financieros. Solo necesitas
              introducir tu PIN en las terminales para realizar tus compras,
              manteniendo tu información segura y privada.
            </p>

            <h3 className="text-xl font-bold text-gray-700 mt-8 mb-4 leading-tight">
              Protecciones adicionales:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Protección de compras:
                  </strong>{" "}
                  En caso de robo o daño accidental de productos comprados con
                  tu LikeU durante los primeros 45 días después de la compra,
                  recibirás cobertura de hasta $200.00 USD por evento, con un
                  máximo de $400 USD al año.
                </span>
              </li>
              <li className="flex items-start">
                <RedArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Garantía extendida:</strong>{" "}
                  LikeU extiende la garantía original del fabricante por hasta
                  un año adicional en tus compras cubiertas, proporcionando una
                  seguridad adicional para tus adquisiciones importantes.
                </span>
              </li>
            </ul>

            <p className="text-gray-700 mb-6 font-normal">
              Con LikeU, no solo disfrutas de beneficios y personalización, sino
              que también cuentas con un robusto sistema de protecciones que
              aseguran tu tranquilidad financiera en cada momento.
            </p>

            {/* Section: Recompensas que resuenan contigo */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Recompensas que resuenan contigo
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              El programa de recompensas de LikeU no es estático; se adapta a lo
              que más valoras. Ya sea que prefieras canjear tus puntos por
              viajes, tecnología o experiencias gastronómicas, LikeU te permite
              personalizar cómo y en qué deseas gastar tus recompensas. Esta
              flexibilidad convierte cada compra en una oportunidad para
              acercarte a lo que realmente quieres. Recibe hasta 6% de CashBack
              por las compras que realices en distintos comercios.
            </p>

            {/* Section: LikeU de Santander, más que una tarjeta */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              LikeU de Santander, más que una tarjeta
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              LikeU no es simplemente una tarjeta de crédito; es un compañero en
              tu viaje financiero, ofreciendo personalización, seguridad, y una
              flexibilidad que se ajusta a tu estilo de vida. Santander invita a
              los usuarios a disfrutar de una experiencia financiera que
              realmente se siente personalizada y enriquecedora, haciendo que
              cada interacción con tu tarjeta sea única y valiosa.
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu"
              className="block w-full mt-8"
            >
              <button className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>
          </div>
        </div>
      </article>

      <RelatedPosts
        currentSlug="tarjeta-de-credito-likeu-de-santander"
        category="soluciones-financieras"
        subCategory="creditCards"
      />

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
