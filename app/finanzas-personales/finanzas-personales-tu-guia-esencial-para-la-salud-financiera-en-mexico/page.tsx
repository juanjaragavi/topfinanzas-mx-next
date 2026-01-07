import Image from "next/image";
import Link from "next/link";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  AlertCircle,
  Wallet,
  TrendingUp,
  ShieldCheck,
  Target,
} from "lucide-react";

export const metadata = {
  title:
    "Finanzas Personales: Tu Guía Esencial para la Salud Financiera en México | TopFinanzas",
  description:
    "¿Alguna vez sientes que tu dinero tiene vida propia? Descubre cómo tomar el control de tus finanzas personales con esta guía esencial para México.",
};

export default function FinanzasPersonalesGuiaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6 border border-blue-700">
              <Wallet className="w-4 h-4" />
              <span>Educación Financiera</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Finanzas Personales: Tu Guía Esencial para la Salud Financiera en
              México
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              ¿Alguna vez sientes que tu dinero tiene vida propia? Un momento
              está en tu cuenta bancaria, al siguiente ha desaparecido, y te
              preguntas a dónde se fue. No estás solo.
            </p>

            {/* Ad Unit - Square 01 */}
            <div className="flex justify-center my-8">
              <div
                id="square01"
                data-topads
                data-topads-size="square"
                className="min-h-[250px] w-full max-w-[300px] bg-gray-200/10 rounded-lg flex items-center justify-center"
              ></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
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
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
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
                Julio 23, 2025
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
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
                5 min de lectura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Article Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden">
                  <Image
                    src="https://media.topfinanzas.com/images/finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico.webp"
                    alt="Finanzas Personales Guía Esencial"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="lead text-xl text-gray-600 mb-8">
                    Para muchos, las finanzas personales pueden parecer un
                    laberinto complejo, lleno de términos difíciles y decisiones
                    abrumadoras. Pero, ¿y si no tuviera que ser así? ¿Y si
                    pudieras tomar el control de tu dinero, entender a dónde va
                    y hacer que trabaje para ti, no en tu contra?
                  </p>

                  <p>
                    Esta guía completa está diseñada para desmitificar las
                    finanzas personales, desglosando lo esencial en pasos claros
                    y accionables, adaptados al contexto mexicano. Ya sea que
                    estés comenzando tu viaje financiero o buscando refinar tus
                    hábitos monetarios, cubriremos todo lo que necesitas para
                    construir una base financiera sólida y avanzar hacia una
                    verdadera libertad financiera.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <TrendingUp className="w-6 h-6" />
                    </span>
                    ¿Qué Son las Finanzas Personales y Por Qué Son Cruciales
                    para Ti?
                  </h2>

                  <p>
                    En su esencia, las finanzas personales son simplemente la
                    administración de tu dinero y tus decisiones financieras. Se
                    trata de cómo ganas, ahorras, gastas e inviertes tus
                    recursos financieros a lo largo del tiempo. Piensa en ello
                    como tu ecosistema económico personal. Esto no se limita a
                    llevar un registro de tus gastos; es un enfoque integral que
                    incluye:
                  </p>

                  <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Ingresos:</strong> El
                        dinero que recibes de tu trabajo, inversiones u otras
                        fuentes.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Gastos:</strong> A
                        dónde va tu dinero, desde los gastos diarios hasta el
                        alquiler y las facturas.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Ahorro:</strong>{" "}
                        Apartar dinero para metas futuras, grandes o pequeñas.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">Inversión:</strong>{" "}
                        Hacer crecer tu dinero con el tiempo colocándolo en
                        activos como acciones, bonos o bienes raíces.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Gestión de Deudas:
                        </strong>{" "}
                        Manejar cualquier dinero que debas, como créditos
                        estudiantiles, saldos de tarjetas de crédito o créditos
                        hipotecarios.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Protección Financiera:
                        </strong>{" "}
                        Salvaguardar tus activos e ingresos a través de seguros
                        y <Link
                          href="/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad"
                          className="text-blue-600 hover:underline"
                        >
                          fondos de emergencia
                        </Link>.
                      </div>
                    </li>
                  </ul>

                  <p>
                    Comprender estos componentes es el primer paso para tomar
                    las riendas de tu bienestar financiero. No se trata de ser
                    rico; se trata de ser inteligente con los recursos que
                    tienes y construir un futuro seguro.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                    La Importancia de las Finanzas Personales en México: Tu
                    Camino a la Estabilidad
                  </h2>

                  <p>
                    Puede que te preguntes por qué deberías preocuparte por las
                    finanzas personales cuando la vida ya es bastante ajetreada.
                    La verdad es que dominar tus finanzas personales no se trata
                    solo de tener más dinero; se trata de ganar control, reducir
                    el estrés y abrir un mundo de posibilidades. Aquí te
                    explicamos por qué es tan importante:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                          <Target className="w-5 h-5" /> Alcanza tus Metas
                        </h3>
                        <p className="text-sm text-blue-800">
                          Ya sea comprar una casa, ahorrar para el retiro,
                          viajar por el mundo o iniciar un negocio, las metas
                          financieras requieren una planificación cuidadosa. Las
                          finanzas personales te proporcionan la hoja de ruta
                          para lograrlo.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" /> Reduce el Estrés
                        </h3>
                        <p className="text-sm text-green-800">
                          Las preocupaciones económicas son una de las
                          principales causas de estrés. Cuando comprendes tu
                          situación financiera y tienes un plan, te sentirás más
                          seguro y menos ansioso ante gastos inesperados.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                          <Wallet className="w-5 h-5" /> Construye Patrimonio
                        </h3>
                        <p className="text-sm text-purple-800">
                          No es solo para los más ricos. Cualquiera puede
                          construir patrimonio con el tiempo a través de ahorros
                          constantes e inversiones inteligentes. Cuanto antes
                          empieces, más tiempo tendrá tu dinero para crecer.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 border-orange-100">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5" /> Maneja Emergencias
                        </h3>
                        <p className="text-sm text-orange-800">
                          La vida es impredecible. Un fondo de emergencia
                          robusto puede protegerte de desastres financieros
                          cuando ocurren eventos inesperados como la pérdida de
                          empleo o emergencias médicas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-900 text-white p-6 rounded-xl my-8">
                    <p className="text-lg font-medium italic text-center">
                      "Tomar el control de tus finanzas personales no es solo
                      administrar dinero; es administrar tu vida y construir el
                      futuro que visualizas."
                    </p>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Primeros Pasos para Tomar el Control de tus Finanzas
                    Personales
                  </h2>

                  <p>
                    ¿Listo para tomar el control? Aquí tienes algunos primeros
                    pasos prácticos para iniciar tu viaje en las finanzas
                    personales:
                  </p>

                  <div className="space-y-8 my-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Conoce tu Situación Actual
                        </h3>
                        <p>
                          Antes de poder ir a cualquier parte, necesitas saber
                          dónde estás. Reúne todos tus estados financieros:
                          cuentas bancarias, tarjetas de crédito, préstamos e
                          inversiones. Comprende tu ingreso total, tus gastos
                          totales y lo que debes. Esto te dará una fotografía
                          clara de tu punto de partida.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Crea un Presupuesto Realista
                        </h3>
                        <p>
                          Este es el pilar de las finanzas personales. Un
                          presupuesto te ayuda a rastrear tus ingresos y gastos,
                          permitiéndote ver exactamente a dónde va tu dinero.
                          Hay muchos métodos, desde la regla 50/30/20 hasta el
                          presupuesto de base cero. No te preocupes si al
                          principio te parece abrumador; puedes empezar de forma
                          sencilla.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Establece un Fondo de Emergencia
                        </h3>
                        <p>
                          Esta es tu red de seguridad financiera. Intenta
                          ahorrar al menos de 3 a 6 meses de tus gastos
                          esenciales en una cuenta de ahorro separada y de fácil
                          acceso. Este fondo te protegerá de eventos inesperados
                          sin tener que endeudarte.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Evita Errores Comunes y Construye Hábitos Financieros
                    Saludables
                  </h2>

                  <p>
                    Incluso con las mejores intenciones, es fácil caer en
                    trampas financieras comunes. Reconocer estos errores puede
                    ayudarte a evitarlos y mantenerte en el camino correcto:
                  </p>

                  <ul className="space-y-4 my-6">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Ignorar las Deudas:
                        </strong>{" "}
                        Las deudas con intereses altos, especialmente las de
                        tarjetas de crédito, pueden salirse de control
                        rápidamente, consumiendo tus ingresos y obstaculizando
                        tu progreso financiero. Es crucial tener una estrategia
                        para salir de ellas.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Compras Impulsivas:
                        </strong>{" "}
                        Las compras no planificadas, especialmente de artículos
                        no esenciales, pueden desbaratar tu presupuesto y evitar
                        que alcances tus metas financieras. Aprende a
                        diferenciar entre necesidades y deseos.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Posponer el Ahorro y la Inversión:
                        </strong>{" "}
                        El poder del interés compuesto significa que el dinero
                        ahorrado e invertido temprano crece significativamente
                        más con el tiempo. Esperar demasiado significa perderte
                        este poderoso crecimiento.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          No Revisar tus Finanzas Regularmente:
                        </strong>{" "}
                        Tu situación financiera cambia, y también debería
                        hacerlo tu plan. No revisar tu presupuesto, inversiones
                        y metas puede llevar a oportunidades perdidas o
                        problemas no abordados.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <strong className="text-gray-900">
                          Falta de Educación Financiera:
                        </strong>{" "}
                        Muchas personas evitan aprender sobre dinero porque
                        parece intimidante. Sin embargo, una comprensión básica
                        de los principios financieros es crucial para tomar
                        decisiones informadas.
                      </div>
                    </li>
                  </ul>

                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Conclusión: Tu Viaje hacia el Empoderamiento Financiero
                  </h2>

                  <p>
                    Las finanzas personales pueden parecer desalentadoras al
                    principio, pero es una habilidad que cualquiera puede
                    aprender y dominar. Al comprender los conceptos básicos,
                    evitar errores comunes y dar pasos consistentes, puedes
                    transformar tu vida financiera. Recuerda, no se trata de
                    privaciones o reglas estrictas; se trata de tomar decisiones
                    informadas que se alineen con tus valores y te ayuden a
                    alcanzar tus sueños.
                  </p>

                  <p className="mt-4">
                    Empieza hoy mismo, aunque sea solo registrando tus gastos
                    durante una semana o configurando una pequeña transferencia
                    automática a una cuenta de ahorro. Cada pequeño paso
                    construye el impulso hacia un futuro más seguro y próspero.
                    Tu libertad financiera está a tu alcance: da el primer paso
                    ahora y empodérate para vivir la vida que deseas.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Newsletter Widget */}
              <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2">
                  Únete a nuestra comunidad
                </h3>
                <p className="text-blue-200 mb-4 text-sm">
                  Recibe los mejores consejos financieros directamente en tu
                  correo.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold">
                    Suscribirme
                  </Button>
                </form>
              </div>

              {/* Popular Articles */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Artículos Populares
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad"
                    className="group flex gap-3"
                  >
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://media.topfinanzas.com/images/que-es-un-fondo-de-emergencia-y-por-que-lo-necesitas.webp"
                        alt="Fondo de Emergencia"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        ¿Qué es un Fondo de Emergencia y por qué lo necesitas?
                      </h4>
                      <span className="text-xs text-gray-500 mt-1 block">
                        5 min de lectura
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante"
                    className="group flex gap-3"
                  >
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://media.topfinanzas.com/images/que-es-el-score-crediticio-y-como-mejorarlo.webp"
                        alt="Score Crediticio"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        ¿Qué es el Score Crediticio y cómo mejorarlo?
                      </h4>
                      <span className="text-xs text-gray-500 mt-1 block">
                        7 min de lectura
                      </span>
                    </div>
                  </Link>

                  <Link
                    href="/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer"
                    className="group flex gap-3"
                  >
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src="https://media.topfinanzas.com/images/la-forma-inteligente-de-salir-de-deudas-metodos-bola-de-nieve-y-avalancha.webp"
                        alt="Salir de Deudas"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        La Forma Inteligente de Salir de Deudas
                      </h4>
                      <span className="text-xs text-gray-500 mt-1 block">
                        6 min de lectura
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CompactFooter />
    </main>
  );
}
