import Image from "next/image";
import Link from "next/link";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Wallet,
  TrendingUp,
  PiggyBank,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title:
    "¿Recibiste un Aumento? Movimientos Inteligentes para tus Finanzas Personales | TopFinanzas",
  description:
    "Recibir un aumento es un gran logro. Descubre cómo evitar la inflación del estilo de vida y hacer que tu dinero extra trabaje para ti a largo plazo.",
};

export default function AumentoSueldoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://media.topfinanzas.com/images/pattern-money.png')] repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-700">
              <TrendingUp className="w-4 h-4" />
              <span>Crecimiento Financiero</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ¿Recibiste un Aumento? Movimientos Inteligentes para tus Finanzas
              Personales
            </h1>

            {/* Ad Unit - Square01 */}
            <div className="flex justify-center my-8">
              <div
                id="square01"
                data-topads
                data-topads-size="square"
                className="min-h-[250px] bg-gray-100/10 rounded-lg flex items-center justify-center"
              ></div>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Primero que nada, ¡muchas felicidades! Recibir un aumento es un
              gran logro que refleja tu esfuerzo y dedicación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 text-lg shadow-lg shadow-green-900/20 transition-all hover:scale-105">
                Ver Estrategias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <Image
                    src="https://media.topfinanzas.com/images/recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales.jpeg"
                    alt="Movimientos inteligentes tras recibir un aumento"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-8 md:p-12 space-y-8">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="lead text-xl text-gray-600 mb-8">
                      La primera tentación suele ser pensar en todas las cosas
                      nuevas en las que puedes gastar: un mejor coche, un depa
                      más grande, más salidas a cenar. Y aunque está perfecto
                      que celebres, un incremento de sueldo es una de las
                      mejores oportunidades para mejorar drásticamente tus
                      finanzas personales a largo plazo. Antes de que subas tu
                      nivel de vida, veamos cómo puedes subir primero tu nivel
                      de salud financiera.
                    </p>

                    <p>
                      Hacer un plan para tu nuevo ingreso puede evitar la famosa
                      «inflación del estilo de vida», ese fenómeno en el que tus
                      gastos crecen al mismo ritmo que tu sueldo, dejándote con
                      la misma sensación de estar apretado de dinero. Con un
                      poco de estrategia, puedes hacer que este aumento trabaje
                      para ti durante años.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                      <AlertTriangle className="w-8 h-8 text-yellow-500" />
                      Resiste la Tentación de Gastar de Inmediato
                    </h2>

                    <p>
                      Esta es la parte más difícil, pero también la más
                      importante. Antes de hacer cualquier cambio en tus hábitos
                      de consumo, espera a que te lleguen al menos una o dos
                      quincenas nuevas a tu cuenta de banco. Esto tiene dos
                      propósitos clave. Primero, te permite ver exactamente
                      cuánto aumentó tu sueldo neto (lo que te queda después de
                      ISR y otras deducciones). La cifra en tu nueva oferta no
                      es la que verás en tu cuenta, y es fundamental basar tu
                      nuevo presupuesto en la realidad.
                    </p>

                    <p>
                      Segundo, este periodo de espera te da tiempo para que se
                      enfríe la emoción inicial y pienses con más calma sobre
                      tus metas. Actuar por impulso es la forma más segura de
                      desperdiciar la oportunidad que te da tu aumento. Usa este
                      tiempo para reflexionar sobre qué es lo que realmente
                      quieres que tu dinero haga por ti. ¿Buscas seguridad?
                      ¿Pagar deudas? ¿Financiar un sueño a futuro? Esta pausa es
                      tu primer paso hacia una planeación financiera
                      intencional.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                      Crea un Nuevo Plan para tu Nuevo Ingreso
                    </h2>

                    <p>
                      Tu presupuesto anterior ya quedó obsoleto. La base de unas
                      finanzas personales sanas es saber a dónde se va tu
                      dinero. Ahora que está entrando más, necesitas darle un
                      propósito a cada peso nuevo. Aquí es donde puedes lograr
                      el mayor impacto en tu futuro financiero.
                    </p>

                    <div className="space-y-8 mt-8">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            1
                          </span>
                          Actualiza tu Presupuesto
                        </h3>
                        <p className="text-gray-700">
                          Empieza por definir tu nuevo ingreso y tus gastos
                          fijos actuales. Con el dinero extra, ahora tienes más
                          flexibilidad. El objetivo es asignar el dinero nuevo
                          de forma deliberada, en lugar de dejar que se evapore
                          en gastos hormiga. Si nunca has tenido un presupuesto
                          formal, este es el momento perfecto para empezar. Un
                          plan claro es tu mapa hacia el éxito financiero y hay
                          muchos métodos sencillos para comenzar. Para una guía
                          detallada, puede ser muy útil aprender{" "}
                          <Link
                            href="/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona"
                            className="text-blue-600 hover:underline font-medium"
                          >
                            cómo hacer un presupuesto personal
                          </Link>{" "}
                          que se ajuste a tu vida.
                        </p>
                      </div>

                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h3 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
                          <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            2
                          </span>
                          Ataca las Deudas Caras
                        </h3>
                        <p className="text-gray-700">
                          Si tienes deudas con intereses altos, como el saldo de
                          <Link href="/tarjetas" className="text-blue-600 hover:underline">tarjetas de crédito</Link> o <Link href="/recomendador-de-prestamos-personales-p1" className="text-blue-600 hover:underline">préstamos personales</Link>, tu aumento
                          es un arma poderosa. Cada peso extra que destines al
                          capital te ahorra dinero en intereses y te ayuda a
                          salir de deudas más rápido. Considera asignar una
                          buena parte de tu nuevo ingreso a la deuda más cara
                          que tengas. La satisfacción de liquidar un préstamo o
                          limpiar el saldo de una tarjeta es una recompensa que
                          dura mucho más que cualquier compra.
                        </p>
                      </div>

                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                          <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            3
                          </span>
                          Dale un Impulso a tu Ahorro e Inversión
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Un aumento es tu boleto dorado para construir una red
                          de seguridad financiera y asegurar tu futuro. Enfócate
                          en estas áreas clave:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <PiggyBank className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">
                              <strong><Link href="/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad" className="text-blue-600 hover:underline">Fondo de Emergencia:</Link></strong> Si no tienes
                              un fondo que cubra de 3 a 6 meses de tus gastos
                              esenciales, empieza aquí. Tu aumento te ayudará a
                              alcanzar esta meta mucho más rápido, dándote una
                              tranquilidad invaluable ante imprevistos como una
                              emergencia médica o la pérdida del empleo.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">
                              <strong>Ahorro para el Retiro:</strong> El mejor
                              momento para pensar en tu retiro es ahora.
                              Considera aumentar las aportaciones voluntarias a
                              tu AFORE. Incluso un pequeño porcentaje adicional
                              puede convertirse en una suma considerable con el
                              tiempo gracias al interés compuesto.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                      Date Permiso de Mejorar tu Vida (con Inteligencia)
                    </h2>

                    <p>
                      Administrar bien tu dinero no significa que no puedas
                      disfrutar de tu aumento. La clave es hacerlo de manera
                      consciente. Después de haber asignado dinero a tus deudas
                      y ahorros, claro que puedes destinar una parte para tus
                      «gustitos». Una buena idea es, por ejemplo, destinar el
                      50% de tu aumento a metas financieras (ahorro, inversión,
                      deudas) y el otro 50% a mejorar tu calidad de vida de
                      forma planeada.
                    </p>

                    <p>
                      Este enfoque te permite disfrutar los frutos de tu
                      esfuerzo sin poner en riesgo tus objetivos financieros. Te
                      ayuda a encontrar un equilibrio saludable, algo esencial
                      para construir hábitos sostenibles. Aprender a{" "}
                      <Link
                        href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        cómo evitar deudas y vivir tranquilo
                      </Link>{" "}
                      no se trata de sacrificios extremos, sino de tomar
                      decisiones inteligentes que se alineen con tus
                      prioridades.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 mt-8">
                      <p className="text-gray-800 italic font-medium">
                        "Un aumento de sueldo es más que una quincena más
                        grande; es un punto de inflexión. Si eres proactivo y
                        creas un plan, puedes aprovechar este momento para
                        construir una seguridad financiera duradera y acercarte
                        a la vida que realmente deseas. Tómate un momento para
                        celebrar tu éxito y luego, haz un plan para poner a
                        trabajar tu nuevo ingreso para ti."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* CTA Card */}
              <Card className="bg-blue-900 text-white border-none shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-bl-full opacity-50"></div>
                <CardContent className="p-8 relative z-10">
                  <Wallet className="w-12 h-12 mb-6 text-green-400" />
                  <h3 className="text-2xl font-bold mb-4">
                    Maximiza tu Dinero
                  </h3>
                  <p className="text-blue-100 mb-6">
                    ¿Quieres que tu aumento rinda más? Descubre las mejores
                    cuentas de ahorro e inversión para hacer crecer tu
                    patrimonio.
                  </p>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-lg shadow-lg transition-all">
                    Ver Opciones de Inversión
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="bg-white shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Artículos Relacionados
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona"
                        className="group flex gap-3 items-start"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:bg-green-500 transition-colors"></div>
                        <span className="text-gray-600 group-hover:text-blue-700 transition-colors text-sm">
                          Cómo hacer un presupuesto personal paso a paso
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer"
                        className="group flex gap-3 items-start"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:bg-green-500 transition-colors"></div>
                        <span className="text-gray-600 group-hover:text-blue-700 transition-colors text-sm">
                          Cómo evitar deudas y vivir tranquilo
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer"
                        className="group flex gap-3 items-start"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:bg-green-500 transition-colors"></div>
                        <span className="text-gray-600 group-hover:text-blue-700 transition-colors text-sm">
                          La Forma Inteligente de Salir de Deudas
                        </span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <CompactFooter />
    </main>
  );
}
