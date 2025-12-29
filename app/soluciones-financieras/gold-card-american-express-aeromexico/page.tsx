import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beneficios de la Gold Card American Express® Aeroméxico | Top Finanzas MX",
  description:
    "Descubre los beneficios de la Gold Card American Express Aeroméxico: acumula Puntos Premier, acceso a Salas Premier y seguros de viaje exclusivos.",
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

export default function GoldCardAmexAeromexicoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-slug="gold-card-american-express-aeromexico"
        data-category="soluciones-financieras"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-6 leading-8">
              Beneficios de la Gold Card American Express® Aeroméxico
            </h1>

            <div
              id="square02"
              data-topads
              data-topads-size="square"
              className="my-8"
            ></div>

            {/* Introduction Summary */}
            <p className="text-lg text-gray-700 mb-6">
              La Gold Card American Express Aeroméxico es una tarjeta de crédito
              diseñada para quienes buscan optimizar sus viajes y disfrutar de
              beneficios exclusivos.
            </p>

            {/* Quick Benefits Summary */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumula puntos Club Premier:
                  </strong>{" "}
                  Canjea por boletos de avión, hoteles y más con cada compra.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios exclusivos con Aeroméxico:
                  </strong>{" "}
                  Acceso a Salas Premier, promociones y embarque preferente.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Coberturas de viaje:
                  </strong>{" "}
                  Seguros de equipaje, accidentes y asistencia médica al pagar
                  tus vuelos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Respaldo American Express:
                  </strong>{" "}
                  Atención 24/7 y aceptación global para mayor confianza.
                </span>
              </li>
            </ul>

            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-[400px] my-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://media.topfinanzas.com/images/download-4-1.webp"
                alt="Gold Card American Express® Aeroméxico"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* First CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-gold-card-american-express-aeromexico"
              className="block w-full mb-8"
            >
              <button className="w-full bg-[#00142c] hover:bg-blue-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>

            <p className="text-gray-700 mb-6 font-normal">
              Si eres un viajero frecuente o alguien que aprecia el acceso a
              servicios premium, esta tarjeta puede ser ideal para ti. Aquí te
              contamos todo lo que necesitas saber sobre sus características,
              beneficios y cómo puedes aprovecharla al máximo.
            </p>

            {/* Section: Características Principales */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Características Principales de la Gold Card American Express
              Aeroméxico
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Acumulación de Puntos Club Premier:
                  </strong>{" "}
                  Con cada compra que realices, acumularás puntos que podrás
                  canjear por boletos de avión, ascensos de clase, noches de
                  hotel y más.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Bonificaciones por Uso Inicial:
                  </strong>{" "}
                  Al activar tu tarjeta y cumplir con los requisitos de gasto
                  inicial, recibirás una bonificación de puntos Club Premier
                  para empezar a disfrutar sus beneficios desde el primer
                  momento.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Beneficios en Vuelos Aeroméxico:
                  </strong>{" "}
                  Acceso preferencial a promociones exclusivas de Aeroméxico y
                  acumulación acelerada de puntos al reservar directamente con
                  Aeroméxico.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Coberturas de Viaje:
                  </strong>{" "}
                  Incluye seguros de protección como cobertura de equipaje,
                  accidentes en viajes y asistencia médica de emergencia.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Promociones y Meses Sin Intereses:
                  </strong>{" "}
                  Disfruta de meses sin intereses en compras seleccionadas,
                  además de descuentos y ofertas exclusivas con socios
                  comerciales.
                </span>
              </li>
            </ul>

            {/* Section: ¿Qué tiene de especial? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Qué tiene de especial la Gold Card American Express Aeroméxico?
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Ideal para Viajeros Frecuentes:
                  </strong>{" "}
                  Esta tarjeta está diseñada para maximizar los beneficios de
                  quienes viajan regularmente, especialmente con Aeroméxico. Los
                  puntos Club Premier te permitirán ahorrar en boletos y
                  servicios adicionales.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Experiencia de Viaje Premium:
                  </strong>{" "}
                  Acceso a Salas Premier en aeropuertos, donde podrás relajarte
                  antes de tus vuelos y embarque preferente y promociones
                  exclusivas en vuelos seleccionados.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Respaldo de American Express:
                  </strong>{" "}
                  Con una red global de aceptación y atención al cliente 24/7,
                  esta tarjeta te ofrece la seguridad y confianza que necesitas
                  al realizar compras dentro y fuera del país.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Flexibilidad en el Uso de Puntos:
                  </strong>{" "}
                  Además de boletos de avión, puedes canjear tus puntos por una
                  variedad de productos y servicios, como hospedajes,
                  experiencias únicas y más.
                </span>
              </li>
            </ul>

            {/* Section: Costos y Tarifas */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              Costos y Tarifas
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Es importante conocer los costos asociados a esta tarjeta para
              evaluar si se ajusta a tu perfil financiero. Aquí algunos de los
              costos principales:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Cuota anual:</strong> $450
                  USD + IVA, diferidos a 3 meses. (Este monto puede cambiar en
                  el momento del cobro).
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tarjetas adicionales:
                  </strong>{" "}
                  Hasta 3 sin costo; a partir de la 4ª, $125 USD + IVA por cada
                  una, también diferido a 3 meses.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Tasa de interés anual:
                  </strong>{" "}
                  Puede alcanzar hasta 115.20% en caso de saldos insolutos.
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mb-6 font-normal">
              Esta tarjeta no tiene un límite preestablecido de crédito, ya que
              funciona como una tarjeta de servicio. Esto significa que el monto
              de los cargos se basa en el perfil financiero del titular y su
              historial con American Express.
            </p>

            {/* Section: ¿Cómo Solicitar? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Cómo Solicitar la Gold Card American Express Aeroméxico?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Si deseas solicitar esta tarjeta, sigue estos pasos:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Verifica los requisitos:
                  </strong>{" "}
                  Edad mínima: 18 años, ingreso mensual mínimo: $20,000 MXN y
                  buen historial crediticio.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Reúne los documentos necesarios:
                  </strong>{" "}
                  Identificación oficial (INE o pasaporte), comprobante de
                  domicilio y comprobante de ingresos.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">
                    Realiza la solicitud:
                  </strong>{" "}
                  Accede al sitio oficial de American Express y completa el
                  formulario en línea. Adjunta los documentos requeridos y
                  espera la respuesta de aprobación.
                </span>
              </li>
              <li className="flex items-start">
                <BlueArrowIcon />
                <span className="text-gray-700">
                  <strong className="text-gray-900">Recibe tu tarjeta:</strong>{" "}
                  Una vez aprobada, recibirás tu tarjeta en el domicilio
                  registrado. Actívala y comienza a disfrutar de sus beneficios.
                </span>
              </li>
            </ul>

            {/* Section: ¿Es para ti? */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-10 mb-4 leading-tight">
              ¿Es la Gold Card American Express Aeroméxico para ti?
            </h2>
            <p className="text-gray-700 mb-6 font-normal">
              Esta tarjeta es ideal si: eres un viajero frecuente que utiliza
              Aeroméxico como principal aerolínea. Buscas acumular puntos para
              canjear en viajes y servicios premium. Valoras el acceso a
              experiencias exclusivas como Salas Premier y embarque preferente.
              Si no viajas frecuentemente o prefieres una tarjeta sin cuota
              anual, considera otras opciones que se adapten mejor a tu estilo
              de vida.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              La Gold Card American Express Aeroméxico no es solo una tarjeta de
              crédito, sino una herramienta para mejorar tus experiencias de
              viaje. Desde la acumulación de puntos hasta los beneficios
              exclusivos en vuelos, esta tarjeta ofrece un valor agregado que
              puede marcar la diferencia para quienes buscan comodidad y
              recompensas al viajar.
            </p>
            <p className="text-gray-700 mb-6 font-normal">
              Si cumples con los requisitos y te interesa aprovechar sus
              ventajas, solicita tu Gold Card American Express Aeroméxico hoy
              mismo y comienza a disfrutar de una experiencia de viaje única.
              ¡Tu próxima aventura está a solo un clic de distancia!
            </p>

            {/* Final CTA Button */}
            <Link
              href="/soluciones-financieras/requisitos-gold-card-american-express-aeromexico"
              className="block w-full"
            >
              <button className="w-full bg-[#00142c] hover:bg-blue-900 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors">
                Quiero conocer los requisitos
              </button>
            </Link>
          </div>
        </div>
      </article>

      <AIContentDisclaimer />
      <CompactFooter />
    </main>
  );
}
