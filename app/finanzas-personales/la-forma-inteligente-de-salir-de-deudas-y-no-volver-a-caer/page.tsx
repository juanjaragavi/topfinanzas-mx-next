import Image from "next/image";
import Link from "next/link";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wallet,
  TrendingUp,
} from "lucide-react";
import { RelatedPosts } from "@/components/blog/related-posts";

export const metadata = {
  title:
    "La Forma Inteligente de Salir de Deudas (y no Volver a Caer) | TopFinanzas",
  description:
    "Salir de deudas no se trata de trucos mágicos, sino de tener un plan claro. Descubre cómo tomar el control de tu dinero y construir un futuro libre de deudas.",
};

export default function SalirDeDeudasPage() {
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
              <ShieldCheck className="w-4 h-4" />
              <span>Guía de Finanzas Personales</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              La Forma Inteligente de Salir de Deudas (y no Volver a Caer)
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
              Sentir que las deudas te ahogan es una de las peores sensaciones.
              Ya sea la tarjeta de crédito, un préstamo personal o las tarjetas
              departamentales, el estrés que generan puede afectar cada aspecto
              de tu vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-6 text-lg shadow-lg shadow-green-900/20 transition-all hover:scale-105">
                Empezar mi Plan
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
                    src="https://media.topfinanzas.com/images/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer.jpeg"
                    alt="Salir de deudas de forma inteligente"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-8 md:p-12 space-y-8">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="lead text-xl text-gray-600 mb-8">
                      La buena noticia es que siempre hay una salida. Salir de
                      deudas no se trata de trucos mágicos ni de sacrificios
                      extremos, sino de tener un plan claro y dar pasos firmes y
                      constantes. Piénsalo como un proyecto clave para mejorar
                      tus finanzas personales, uno cuya recompensa es libertad,
                      tranquilidad y control sobre tu dinero.
                    </p>

                    <p>
                      Esta guía te llevará paso a paso por un camino lógico y
                      práctico para tomar las riendas de tu dinero, pagar lo que
                      debes y construir un futuro libre de deudas. ¡Manos a la
                      obra!
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                        1
                      </span>
                      Paso 1: Ponle Nombre y Apellido a tus Deudas
                    </h2>

                    <p>
                      No puedes vencer a un enemigo que no conoces. El primer
                      paso, y el más revelador, es tener una radiografía
                      completa de todo lo que debes. Puede que te dé miedo, pero
                      esta claridad es poder puro. Es el momento en que dejas de
                      evitar el problema y empiezas a solucionarlo. Agarra una
                      libreta o abre una hoja de cálculo y haz una lista de cada
                      una de tus deudas. Para cada una, anota:
                    </p>

                    <ul className="space-y-4 my-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span>
                          <strong>Acreedor:</strong> ¿A qué banco o tienda le
                          debes? (Ej. BBVA, Liverpool, etc.)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span>
                          <strong>Saldo Total:</strong> ¿Cuál es el monto exacto
                          que debes hoy?
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span>
                          <strong>Tasa de Interés y CAT:</strong> Fíjate bien en
                          la tasa de interés anual, y sobre todo, en el Costo
                          Anual Total (
                          <Link
                            href="/finanzas-personales/cat-en-tarjetas-de-credito"
                            className="text-blue-600 hover:underline"
                          >
                            CAT
                          </Link>
                          ). Este último es clave, pues te dice el costo real de
                          tu deuda.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span>
                          <strong>Pago Mínimo Mensual:</strong> ¿Cuál es la
                          cantidad mínima que debes pagar cada mes?
                        </span>
                      </li>
                    </ul>

                    <p>
                      Cuando sumes todo, tendrás tu número de deuda total.
                      Respira. Ese número no te define; es simplemente tu punto
                      de partida. Ahora tienes el mapa que necesitas para
                      encontrar la salida.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                        2
                      </span>
                      Paso 2: Elige tu Estrategia de Ataque
                    </h2>

                    <p>
                      Existen métodos probados para liquidar deudas. El «mejor»
                      es simplemente el que se adapte a ti y que puedas seguir
                      con disciplina. Las dos estrategias más famosas son la
                      «Bola de Nieve» y la «Avalancha». Ambas se basan en pagar
                      el mínimo en todas tus deudas y lanzar todo el dinero
                      extra posible a una sola deuda objetivo.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <Card className="bg-blue-50 border-blue-100">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-3">
                            El Método Bola de Nieve
                          </h3>
                          <p className="text-sm text-blue-700 font-medium mb-4">
                            (para la motivación)
                          </p>
                          <p className="text-gray-700">
                            Con este método, te enfocas en pagar primero la
                            deuda con el saldo más pequeño, sin importar la tasa
                            de interés. Una vez que la liquidas, tomas el dinero
                            que pagabas en esa deuda y se lo sumas al pago de la
                            siguiente más pequeña. El efecto «bola de nieve»
                            viene de que cada vez pagas más y más a la siguiente
                            deuda. Su gran ventaja es psicológica: conseguir
                            victorias rápidas te mantiene motivado.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="bg-green-50 border-green-100">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-3">
                            El Método Avalancha
                          </h3>
                          <p className="text-sm text-green-700 font-medium mb-4">
                            (para ahorrar más lana)
                          </p>
                          <p className="text-gray-700">
                            Esta estrategia consiste en atacar primero la deuda
                            con la tasa de interés (o CAT) más alta.
                            Matemáticamente, es el método más eficiente porque
                            te ahorra la mayor cantidad de dinero en intereses a
                            largo plazo. Si te motivan los números y la
                            eficiencia, esta es tu mejor opción. Quizá tardes
                            más en liquidar tu primera deuda, pero el ahorro
                            final puede ser considerable.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                        3
                      </span>
                      Paso 3: Crea un Presupuesto que Sí Puedas Cumplir
                    </h2>

                    <p>
                      Necesitas encontrar dinero extra para abonar a tu deuda
                      objetivo, y ese dinero saldrá de tu presupuesto. Un
                      presupuesto no es una camisa de fuerza, sino una
                      herramienta para decirle a tu dinero a dónde ir. Si no
                      tienes uno, es el momento ideal de aprender{" "}
                      <Link
                        href="/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        cómo hacer un presupuesto personal
                      </Link>
                      . Es el pilar de unas buenas finanzas personales.
                    </p>

                    <p className="mt-4">
                      Revisa tus gastos e identifica de dónde puedes recortar.
                      Esto casi siempre implica tomar decisiones conscientes y
                      diferenciar claramente entre{" "}
                      <Link
                        href="/finanzas-personales/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        tus necesidades y tus deseos
                      </Link>
                      . ¿Puedes cancelar suscripciones que no usas, cocinar más
                      en casa o reducir los «gastos hormiga»? Cada peso que
                      liberes es un paso más rápido hacia tu libertad
                      financiera.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                        4
                      </span>
                      Paso 4: Mantén el Ritmo y la Motivación
                    </h2>

                    <p>
                      Salir de deudas es un maratón, no una carrera de 100
                      metros. Es fundamental tener sistemas que te ayuden a no
                      rendirte. Puedes crear una gráfica donde vayas coloreando
                      tu progreso cada vez que pagas una deuda. Celebra los
                      pequeños logros (cuando liquides tu primera tarjeta, por
                      ejemplo) con una recompensa que no te cueste mucho dinero.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 rounded-r-lg">
                      <div className="flex items-start gap-4">
                        <Wallet className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-yellow-800 mb-2">
                            Consejo Pro
                          </h4>
                          <p className="text-yellow-800">
                            También es muy recomendable crear un pequeño{" "}
                            <Link
                              href="/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad"
                              className="text-blue-600 hover:underline"
                            >
                              fondo de emergencia
                            </Link>{" "}
                            de unos $5,000 a $10,000 pesos. Puede sonar
                            contradictorio, pero tener este colchón evitará que
                            un imprevisto, como una llanta ponchada, te obligue
                            a usar la{" "}
                            <Link
                              href="/soluciones-financieras/tarjetas-de-credito-sin-anualidad"
                              className="text-blue-600 hover:underline"
                            >
                              tarjeta de crédito sin anualidad
                            </Link>{" "}
                            y te haga retroceder.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p>
                      Al enfrentar tus deudas, elegir una estrategia y tomar el
                      control de tus gastos, estás recuperando el poder sobre tu
                      vida financiera. El camino puede ser largo, pero el
                      destino —la tranquilidad y la libertad— vale cada paso.
                      Mantén tus metas a la vista, sé paciente contigo mismo y
                      ten la certeza de que estás construyendo un futuro más
                      seguro y mucho menos estresante.
                    </p>
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
                  <TrendingUp className="w-12 h-12 mb-6 text-green-400" />
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Listo para ser libre?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    No dejes que las deudas controlen tu vida. Empieza hoy mismo
                    a construir tu libertad financiera con nuestras herramientas
                    gratuitas.
                  </p>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-6 text-lg shadow-lg transition-all">
                    Ver Herramientas
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
                        href="/finanzas-personales/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero"
                        className="group flex gap-3 items-start"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:bg-green-500 transition-colors"></div>
                        <span className="text-gray-600 group-hover:text-blue-700 transition-colors text-sm">
                          Necesidades vs Deseos: Cómo tomar mejores decisiones
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad"
                        className="group flex gap-3 items-start"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 group-hover:bg-green-500 transition-colors"></div>
                        <span className="text-gray-600 group-hover:text-blue-700 transition-colors text-sm">
                          Qué es un Fondo de Emergencia y cómo construirlo
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
      <RelatedPosts
        currentSlug="la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer"
        category="finanzas-personales"
      />
      <CompactFooter />
    </main>
  );
}
