import Image from "next/image";
import Link from "next/link";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Calculator,
  PieChart,
  Wallet,
  Target,
} from "lucide-react";

export const metadata = {
  title:
    "Guía para Principiantes: Cómo Crear un Presupuesto que Sí Funciona | TopFinanzas",
  description:
    "Aprende a crear tu primer presupuesto paso a paso con esta guía para principiantes. Toma el control de tu dinero y construye un futuro financiero sólido.",
};

export default function PresupuestoPrincipiantesPage() {
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
              Finanzas Personales
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Guía para Principiantes: Cómo Crear un Presupuesto que Sí Funciona
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
              ¡Felicidades por tu primer empleo! Recibir ese primer sueldo es
              una sensación increíble de independencia y logro. Pero con ese
              nuevo ingreso, también llega una gran pregunta: ¿ahora qué hago
              con mi dinero?
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
                Agosto 13, 2025
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
                src="https://media.topfinanzas.com/images/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona.jpeg"
                alt="Guía para crear un presupuesto personal"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-xl leading-relaxed mb-6">
                Organizar tus finanzas personales desde el inicio es la clave
                para construir un futuro sólido y sin estrés. Y la herramienta
                más poderosa para lograrlo es un presupuesto.
              </p>
              <p className="leading-relaxed">
                Si la palabra «presupuesto» te suena a restricción y a tener que
                renunciar a todo lo divertido, es hora de cambiar esa idea. Un
                presupuesto no es una camisa de fuerza; es un plan que te da la
                libertad de decirle a tu dinero a dónde ir, en lugar de
                preguntarte a dónde se fue. Esta guía está diseñada para
                ayudarte a crear tu primer presupuesto de una forma sencilla y
                realista, para que puedas tomar el control de tu dinero desde el
                día uno.
              </p>
            </div>

            {/* Why is it important? */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                ¿Por Qué Es Tan Importante Hacer un Presupuesto?
              </h2>
              <p className="text-gray-600 mb-6">
                Antes de poner manos a la obra, es fundamental entender por qué
                un presupuesto es tu mejor aliado financiero. No se trata solo
                de pagar las cuentas a tiempo. Un buen presupuesto te permite:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">
                    Tener el control total
                  </h3>
                  <p className="text-sm text-blue-800">
                    Sabrás exactamente cuánto dinero recibes y en qué lo gastas.
                    Esa claridad es el primer paso para tomar decisiones
                    financieras inteligentes.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">
                    Evitar deudas innecesarias
                  </h3>
                  <p className="text-sm text-blue-800">
                    Al planificar tus gastos, es mucho más difícil caer en la
                    tentación de usar la{" "}
                    <Link
                      href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                      className="text-blue-600 hover:underline"
                    >
                      tarjeta de crédito
                    </Link>{" "}
                    para compras que no puedes permitirte.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">
                    Alcanzar tus metas
                  </h3>
                  <p className="text-sm text-blue-800">
                    ¿Quieres ahorrar para el enganche de un auto o unas
                    vacaciones? Un presupuesto te ayuda a asignar dinero a esas
                    metas.
                  </p>
                </div>
              </div>
            </div>

            {/* Step by Step */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Paso a Paso: Creando Tu Primer Presupuesto
            </h2>

            <div className="space-y-8 mb-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-green-100 p-4 rounded-full h-fit shrink-0 flex items-center justify-center w-16 ">
                  <Calculator className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Calcula tus Ingresos Netos
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lo primero es saber con cuánto dinero cuentas realmente cada
                    mes. Tu ingreso neto es el dinero que recibes en tu cuenta
                    bancaria después de las deducciones de ley. No te confundas
                    con el sueldo «bruto». Revisa tu recibo de nómina y localiza
                    el monto total después de que te hayan descontado impuestos
                    como el ISR y tu cuota del IMSS. Esa cifra es tu punto de
                    partida.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-purple-100 p-4 rounded-full h-fit shrink-0 flex items-center justify-center w-16 ">
                  <Wallet className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Registra Todos tus Gastos
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Para saber a dónde se va tu dinero, tienes que rastrearlo.
                    Durante un mes, anota absolutamente todo lo que gastes.
                    Desde la renta hasta el café de la mañana. Esto te ayudará a
                    identificar patrones y, sobre todo, a detectar los famosos
                    «gastos hormiga».
                  </p>
                  <Link
                    href="/finanzas-personales/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo"
                    className="text-purple-600 font-semibold hover:text-purple-800 flex items-center text-sm"
                  >
                    Aprende más sobre los gastos hormiga{" "}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-orange-100 p-4 rounded-full h-fit shrink-0 flex items-center justify-center w-16 ">
                  <PieChart className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Categoriza tus Gastos: Fijos y Variables
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Una vez que tengas tu lista de gastos del mes, es hora de
                    organizarlos. Divídelos en dos grandes categorías:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Gastos Fijos:</strong> Son aquellos que pagas
                        cada mes y cuyo monto casi no cambia (renta, celular,
                        streaming, deudas).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-orange-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Gastos Variables:</strong> Estos cambian de un
                        mes a otro y tienes más control sobre ellos (despensa,
                        transporte, salidas, ropa).
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full shrink-0 flex items-center justify-center w-16 h-16">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Elige un Método y Asigna tu Dinero
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Con tus ingresos y gastos claros, es momento de estructurar
                    tu presupuesto. Un método muy popular y fácil para
                    principiantes es la regla 50/30/20:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-blue-600 mb-1">
                        50%
                      </span>
                      <span className="text-sm font-semibold text-blue-900 block mb-1">
                        Necesidades
                      </span>
                      <span className="text-xs text-blue-700">
                        Gastos fijos y esenciales
                      </span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-blue-600 mb-1">
                        30%
                      </span>
                      <span className="text-sm font-semibold text-blue-900 block mb-1">
                        Deseos
                      </span>
                      <span className="text-xs text-blue-700">
                        Gastos variables y diversión
                      </span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="block text-2xl font-bold text-blue-600 mb-1">
                        20%
                      </span>
                      <span className="text-sm font-semibold text-blue-900 block mb-1">
                        Ahorro
                      </span>
                      <span className="text-xs text-blue-700">
                        Futuro y pago de deudas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Section */}
            <div className="bg-indigo-50 rounded-2xl p-8 mb-12 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                Consejos para que tu Presupuesto No Falle
              </h2>
              <p className="text-indigo-800 mb-6">
                Crear el presupuesto es solo el primer paso; el verdadero reto
                es mantenerlo. Aquí tienes algunos consejos para no abandonar tu
                plan a mitad del camino:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                    1
                  </span>
                  <span className="text-gray-700">
                    <strong>Sé realista:</strong> No crees un presupuesto tan
                    estricto que sea imposible de seguir. Permítete algo de
                    flexibilidad, sobre todo en la categoría de «deseos».
                  </span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                    2
                  </span>
                  <span className="text-gray-700">
                    <strong>Automatiza tus ahorros:</strong> Configura una
                    transferencia automática de tu cuenta de nómina a una cuenta
                    de ahorros cada día de pago. Así, «pagarte a ti primero» se
                    vuelve un hábito.
                  </span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                    3
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-700 block mb-2">
                      <strong>Usa la tecnología a tu favor:</strong> Existen
                      muchas apps que te ayudan a registrar gastos y visualizar
                      tu presupuesto de forma automática y sencilla.
                    </span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <span className="bg-indigo-100 text-indigo-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 shrink-0">
                    4
                  </span>
                  <div className="flex-1">
                    <span className="text-gray-700 block mb-2">
                      <strong>Revisa y ajusta:</strong> Tu vida y tus ingresos
                      cambiarán. Revisa tu presupuesto cada mes o cada dos meses
                      para asegurarte de que sigue funcionando para ti.
                    </span>
                    <Link
                      href="/finanzas-personales/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero"
                      className="text-indigo-600 font-semibold hover:text-indigo-800 text-sm flex items-center"
                    >
                      Explora métodos de ahorro para jóvenes{" "}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Empieza Hoy Mismo
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Manejar tus finanzas personales es una habilidad que se aprende
                y se perfecciona con el tiempo. Tu primer presupuesto no tiene
                que ser perfecto, pero es el paso más importante para construir
                una relación sana con tu dinero. Empieza hoy, sé constante y
                verás cómo poco a poco tomas las riendas de tu futuro
                financiero.
              </p>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                <Link href="/finanzas-personales">
                  Ver más guías financieras
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <CompactFooter />
    </main>
  );
}
