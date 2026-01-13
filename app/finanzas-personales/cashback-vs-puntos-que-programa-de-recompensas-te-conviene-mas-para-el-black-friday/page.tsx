import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { AIContentDisclaimer } from "@/components/ui/ai-content-disclaimer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday? | Top Finanzas MX",
  description:
    "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
  keywords:
    "cashback vs puntos, recompensas tarjetas de crédito, black friday méxico, beneficios tarjetas de crédito, finanzas personales, ahorro inteligente",
};

export default function CashbackVsPuntosBlackFridayPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article
        className="bg-white py-8 md:py-12"
        data-category="finanzas-personales"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl text-left sm:text-left md:text-3xl font-bold text-gray-800 mb-4 leading-8">
              Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más
              para el Black Friday?
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <div className="my-8 text-left sm:text-left">
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                Tu tarjeta de crédito es mucho más que un simple método de pago;
                es una herramienta financiera que, bien utilizada, puede darte
                grandes beneficios. En ninguna época del año es esto más cierto
                que durante el Black Friday, cuando cada compra puede
                convertirse en una recompensa.
              </p>
              <p className="text-left sm:text-left text-lg text-gray-800 mb-4 leading-6">
                El dilema para muchos surge al revisar los beneficios: ¿conviene
                más recibir dinero de vuelta (cashback) o acumular puntos para
                el futuro? Elegir las tarjetas de crédito para Black Friday
                adecuadas depende de entender a fondo estos dos sistemas. En
                esta guía, desglosamos cada opción para que tomes la mejor
                decisión para tu bolsillo.
              </p>

              <div className="my-8 text-left sm:text-left">
                <Image
                  src="https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png"
                  alt="Cashback vs. Puntos para Black Friday"
                  width={800}
                  height={450}
                  className="w-full h-auto rounded-sm"
                  priority={true}
                  fetchPriority="high"
                  quality={85}
                  loading="eager"
                />
              </div>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  ¿Qué es el Cashback y cómo funciona?
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Imagina que por cada compra que haces, el banco te devolviera
                  un pequeño porcentaje de tu dinero. Eso es, en esencia, el
                  cashback o «dinero de vuelta». Es el programa de recompensas
                  más sencillo y directo que existe.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  ¿Cómo funciona? Muy fácil. Usas tu tarjeta de crédito para
                  pagar y, al final del mes o del periodo de corte, el banco te
                  reembolsa un porcentaje de tus gastos, generalmente entre el
                  1% y el 5%. Este{" "}
                  <Link
                    href="/soluciones-financieras/cashback"
                    title="Cashback"
                    className="text-blue-600 hover:underline"
                  >
                    dinero (cashback)
                  </Link>{" "}
                  puede depositarse directamente en tu cuenta, aplicarse como
                  crédito a tu estado de cuenta o incluso dártelo en efectivo.
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Ventajas:</strong> Su principal beneficio es la
                    simplicidad. No tienes que preocuparte por catálogos,
                    vencimientos complicados o tasas de conversión. Es dinero
                    real que puedes usar para lo que quieras, desde pagar parte
                    de la misma tarjeta hasta darte un gusto extra.
                  </li>
                  <li className="mb-2">
                    <strong>Desventajas:</strong> El valor de la recompensa
                    suele ser fijo y, en ocasiones, puede ser menor en
                    comparación con el valor que podrías obtener al canjear
                    puntos de manera estratégica, especialmente en viajes.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Entonces, ¿qué son los Puntos?
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Los programas de{" "}
                  <Link
                    href="/soluciones-financieras/puntos"
                    title="Puntos"
                    className="text-blue-600 hover:underline"
                  >
                    puntos
                  </Link>{" "}
                  son como un juego de lealtad. Por cada peso que gastas,
                  acumulas una cierta cantidad de puntos que funcionan como una
                  «moneda» dentro del ecosistema del banco o de una marca
                  asociada (como una aerolínea o una cadena de hoteles).
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  ¿Cómo funcionan? Acumulas puntos con tus compras y luego los
                  canjeas por productos o servicios de un catálogo específico.
                  Las opciones más comunes incluyen boletos de avión, noches de
                  hotel, artículos electrónicos, certificados de regalo y mucho
                  más.
                </p>
                <ul className="list-disc pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-2">
                    <strong>Ventajas:</strong> El potencial de valor. Si eres un
                    viajero frecuente o sabes cómo aprovechar las promociones de
                    transferencia, puedes multiplicar el valor de tus puntos y
                    conseguir experiencias que valdrían mucho más que el
                    equivalente en cashback.
                  </li>
                  <li className="mb-2">
                    <strong>Desventajas:</strong> Son más complejos. Requieren
                    que entiendas su valor, estés pendiente de las fechas de
                    vencimiento y estudies cómo canjearlos para maximizar su
                    beneficio. Además, estás limitado a lo que ofrece el
                    catálogo del programa.
                  </li>
                </ul>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Cashback vs. Puntos: Las diferencias clave
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-800 border-collapse border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-200 px-4 py-2 font-bold">
                          Característica
                        </th>
                        <th className="border border-gray-200 px-4 py-2 font-bold">
                          Cashback
                        </th>
                        <th className="border border-gray-200 px-4 py-2 font-bold">
                          Puntos
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-medium">
                          Flexibilidad
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Total. Es dinero que puedes usar en lo que quieras.
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Limitada. Solo puedes canjearlos por lo que ofrece el
                          catálogo del programa.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-medium">
                          Simplicidad
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Muy alta. No requiere gestión, el reembolso es
                          automático.
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Baja. Requiere planeación para acumular y canjear de
                          forma óptima.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-medium">
                          Valor Potencial
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Bueno y constante. Sabes exactamente cuánto recibirás.
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Variable. Puede ser muy alto si se canjea de forma
                          inteligente (viajes), o bajo si se usa para productos
                          con sobreprecio.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2 font-medium">
                          Ideal para…
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Quienes buscan una recompensa sencilla, rápida y que
                          ayude a reducir sus gastos mensuales.
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          Quienes tienen un objetivo claro (como un viaje) y
                          disfrutan planificar para maximizar el valor de sus
                          recompensas.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  ¿Cómo elegir las mejores tarjetas de crédito para Black
                  Friday?
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  La elección ideal depende 100% de tu perfil y tus metas
                  financieras. Hazte estas preguntas:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-sm leading-6 font-light text-gray-800">
                  <li className="mb-4">
                    <strong>¿Qué buscas con tus recompensas?</strong> Si tu
                    objetivo es sentir un alivio inmediato en tu cartera después
                    de las compras fuertes de Black Friday, el cashback es tu
                    mejor aliado. Si, por otro lado, ves estas compras como una
                    inversión para pagar las vacaciones del próximo año, los
                    puntos son el camino.
                  </li>
                  <li className="mb-4">
                    <strong>¿Qué tan involucrado quieres estar?</strong> Si
                    prefieres un sistema de «configurar y olvidar», el cashback
                    es perfecto. Si te gusta investigar, comparar y planificar
                    para sacarle el máximo jugo a cada peso, te divertirás más
                    con un programa de puntos.
                  </li>
                  <li className="mb-4">
                    <strong>¿Dónde planeas comprar?</strong> Algunas tarjetas
                    ofrecen porcentajes de cashback más altos o multiplicadores
                    de puntos en ciertas categorías (tiendas departamentales,
                    tecnología, etc.). Revisa los beneficios de tus tarjetas
                    actuales y ve si alguna se alinea con tus planes de compra
                    para el Black Friday.
                  </li>
                </ol>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Antes de lanzarte a comprar, es clave diferenciar entre lo que
                  realmente necesitas y lo que es un simple deseo; dominar esto
                  te ayudará a aprovechar al máximo tus recompensas.
                </p>
              </section>

              <section className="my-6">
                <h2 className="text-left sm:text-left text-xl font-bold text-gray-800 mb-4">
                  Conclusión: ¿Cuál es el veredicto?
                </h2>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  No hay un ganador absoluto en la batalla de cashback vs.
                  puntos. La mejor tarjeta de crédito para Black Friday será la
                  que se adapte a tu estilo de vida y tus objetivos financieros.
                </p>
                <p className="text-left sm:text-left text-gray-800 mb-4 text-sm leading-6 font-light">
                  Si prefieres la simplicidad y la liquidez, elige una tarjeta
                  con un buen porcentaje de cashback. Si eres un estratega y
                  sueñas con viajar, un programa de puntos bien administrado te
                  dará más valor. Lo más importante es que revises las
                  condiciones de tus tarjetas, compares las opciones y tomes una
                  decisión informada antes de que empiecen las ofertas.
                </p>
              </section>
            </div>

            <AIContentDisclaimer />
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
