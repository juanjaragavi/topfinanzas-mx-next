import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  PiggyBank,
  CreditCard,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title:
    "Los 5 Errores Financieros Más Comunes que Debes Evitar a tus 20s | TopFinanzas",
  description:
    "Descubre los errores financieros más comunes en los 20s y aprende cómo evitarlos para construir un futuro financiero sólido desde joven.",
};

export default function ErroresFinancieros20sPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] repeat"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full text-blue-200 font-medium text-sm mb-6 border border-blue-700">
              Finanzas para el Hogar
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Los 5 Errores Financieros Más Comunes que Debes Evitar a tus 20s
            </h1>

            {/* Ad Unit - square01 */}
            <div className="flex justify-center my-8">
              <div
                id="square01"
                data-topads
                data-topads-size="square"
                className="min-h-[250px] min-w-[300px] bg-gray-200/10 rounded-lg flex items-center justify-center text-white/30 text-sm"
              >
                {/* Ad Placeholder */}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              ¡Felicidades! Estás en tus veintes, probablemente recibiendo tus
              primeros sueldos y sintiendo esa increíble libertad que da tener
              tu propio dinero. Es una etapa emocionante llena de posibilidades,
              pero también es el momento perfecto para sentar las bases de tu
              futuro financiero.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Juan Jaramillo
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Agosto 15, 2025
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                4 min de lectura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
              <Image
                src="https://media.topfinanzas.com/images/los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s.jpeg"
                alt="Errores financieros comunes en los 20s"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed">
                Tomar buenas decisiones ahora puede marcar una gran diferencia
                en tu vida. Sin embargo, es muy fácil tropezar con algunos
                errores comunes. Entender cómo manejar tus finanzas personales
                desde el principio te ahorrará muchos dolores de cabeza y te
                pondrá en el camino hacia la estabilidad.
              </p>
            </div>

            {/* Error 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-100 p-3 rounded-full shrink-0 mt-1">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    1. No Tener un Presupuesto: El Dinero que Desaparece
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    ¿Sientes que tu quincena se esfuma y no sabes bien en qué?
                    Este es el error más clásico. No tener un presupuesto es
                    como intentar llegar a un lugar nuevo sin un mapa. Gastas
                    por inercia, cediendo a impulsos y a los famosos «gastos
                    hormiga» (ese cafecito diario, el postre, las suscripciones
                    que no usas) que, aunque pequeños, suman una cantidad
                    considerable a fin de mes.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-blue-600" />
                  ¿Cómo puedes evitarlo?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                      1
                    </span>
                    <span className="text-gray-700">
                      <strong>Analiza tus ingresos y gastos:</strong> Durante un
                      mes, anota absolutamente todo lo que ganas y todo lo que
                      gastas. Puedes usar una libreta o una app de finanzas. El
                      objetivo es tener una imagen clara de a dónde se va tu
                      dinero.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                      2
                    </span>
                    <span className="text-gray-700">
                      <strong>Crea categorías:</strong> Agrupa tus gastos en
                      categorías como vivienda, transporte, comida,
                      entretenimiento y ahorro. Esto te ayudará a ver en qué
                      áreas puedes recortar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-200 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                      3
                    </span>
                    <span className="text-gray-700">
                      <strong>Usa una regla simple:</strong> Si eres
                      principiante, la regla 50/30/20 es un buen punto de
                      partida. Destina el 50% de tus ingresos a tus necesidades
                      (renta, servicios), el 30% a tus deseos (salidas,
                      shopping) y, lo más importante, el 20% al ahorro y pago de
                      deudas.
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/blog/como-hacer-un-presupuesto-personal-guia-paso-a-paso"
                    className="text-blue-600 font-semibold hover:text-blue-800 flex items-center"
                  >
                    Aprende a crear un presupuesto personal desde cero{" "}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Error 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-full shrink-0 mt-1">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    2. Abusar de las Tarjetas de Crédito
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    El primer plástico que te ofrecen en el banco puede sentirse
                    como dinero extra, ¡pero no lo es! Usar la tarjeta de
                    crédito para todo sin tener un plan para pagarla es una
                    trampa muy peligrosa. Las tasas de interés en México pueden
                    ser muy altas y una pequeña deuda puede convertirse
                    rápidamente en una bola de nieve inmanejable gracias a los
                    intereses acumulados. Caer en el juego de solo hacer el
                    «pago mínimo» es el camino más rápido al sobreendeudamiento.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-orange-600" />
                  ¿Cómo usarlas a tu favor?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Piensa en tu tarjeta de crédito como una herramienta, no como
                  una extensión de tu sueldo. Úsala para construir un buen
                  historial crediticio, lo que te ayudará en el futuro a obtener
                  créditos más grandes, como un hipotecario. La clave es ser
                  «totalero», es decir, pagar el total de tu deuda cada mes en
                  la fecha de pago para no generar intereses. Aprovecha los
                  beneficios como meses sin intereses solo para compras
                  planeadas y que realmente necesites.
                </p>
              </div>
            </div>

            {/* Error 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full shrink-0 mt-1">
                  <PiggyBank className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    3. Pensar que «Aún es muy pronto para Ahorrar»
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    «Empezaré a ahorrar cuando gane más». Esta es una de las
                    mentiras más costosas que puedes decirte. Dejar el ahorro
                    para después significa perder tu mejor aliado: el tiempo y
                    el interés compuesto. El dinero que ahorras e inviertes hoy,
                    por poco que sea, crecerá mucho más que una cantidad mayor
                    que ahorres en 10 años. Además, no solo se trata de ahorrar
                    para el retiro (tu Afore es un inicio, pero no es
                    suficiente), sino de tener un fondo para emergencias. Un
                    imprevisto, como una enfermedad o la pérdida del trabajo,
                    puede desestabilizar por completo tus finanzas si no tienes
                    un colchón de seguridad.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                  ¿Cómo empezar a ahorrar ahora?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La forma más sencilla es automatizarlo. Programa una
                  transferencia automática de un porcentaje de tu sueldo
                  (¡empieza con un 5% o 10%!) a una cuenta de ahorro separada en
                  cuanto recibas tu pago. De esta forma, ni siquiera verás ese
                  dinero y no te sentirás tentado a gastarlo.
                </p>
                <Link
                  href="/blog/metodos-de-ahorro-efectivos"
                  className="text-green-700 font-semibold hover:text-green-900 flex items-center"
                >
                  Explora métodos de ahorro efectivos{" "}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Error 4 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full shrink-0 mt-1">
                  <AlertCircle className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    4. No Diferenciar entre Necesidades y Deseos
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    En la era de las redes sociales, la presión por tener el
                    último gadget, viajar al destino de moda o vestir ciertas
                    marcas es enorme. Es muy fácil confundir lo que realmente
                    necesitas para vivir con lo que deseas para aparentar un
                    estilo de vida. Este error te lleva a gastar dinero que no
                    tienes en cosas que no son prioritarias, sacrificando tu
                    ahorro y tu estabilidad por una satisfacción momentánea.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-purple-600" />
                  ¿Cómo tomar decisiones inteligentes?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Antes de una compra importante, pregúntate: ¿Realmente lo
                  necesito? ¿Puedo vivir sin esto? ¿Afectará mis metas de
                  ahorro? Aplica la regla de las 24 horas: si después de un día
                  sigues pensando que es una buena compra, adelante, pero muchas
                  veces te darás cuenta de que solo era un impulso. Entender
                  esta diferencia es clave para controlar tus gastos.
                </p>
              </div>
            </div>

            {/* Error 5 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full shrink-0 mt-1">
                  <BookOpen className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    5. Ignorar tu Educación Financiera
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Nadie nace sabiendo sobre finanzas. No entender conceptos
                    básicos como la inflación, el interés compuesto o cómo
                    funciona el Buró de Crédito te pone en desventaja. Tomar
                    decisiones basadas en lo que hacen tus amigos o en consejos
                    familiares bien intencionados pero poco informados puede ser
                    contraproducente. Tu futuro financiero es tu
                    responsabilidad.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-indigo-600" />
                  ¿Cómo puedes aprender más?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dedica un poco de tiempo a leer blogs de finanzas, escuchar
                  podcasts o ver videos sobre el tema. Instituciones como la
                  CONDUSEF en México ofrecen información muy valiosa y neutral
                  para los consumidores. Ver la educación financiera como una
                  inversión en ti mismo es el primer paso para tomar el control
                  total de tu dinero.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tu Futuro Empieza Hoy
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Evitar estos cinco errores en tus veintes no se trata de no
                disfrutar tu dinero, sino de usarlo de forma inteligente.
                Construir hábitos saludables desde ahora te dará la tranquilidad
                y la libertad para cumplir tus metas, ya sea viajar por el
                mundo, comprar una casa o simplemente vivir sin estrés
                financiero. Tomar las riendas de tus finanzas personales hoy es
                el mejor regalo que puedes hacerle a tu «yo» del futuro.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                <Link href="/finanzas-personales">
                  Explorar más consejos financieros
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
