"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";

function PersonalLoanRecommenderPageContent() {
  useRecommenderPageGuard();
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="text-left bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              El préstamo personal perfecto para tus necesidades
            </h1>

            <div id="square01" data-topads data-topads-size="square"></div>

            <p className="text-left text-sm leading-6 text-gray-800 my-8">
              En <strong>TopFinanzas</strong>, te ayudamos a tomar el control de
              tus finanzas. Te ofrecemos el mejor análisis de préstamos
              personales y las mejores recomendaciones para que encuentres
              fácilmente el ideal para ti, ya sea para consolidar deudas,
              imprevistos o proyectos personales. Explora nuestras
              recomendaciones y encuentra el préstamo que mejor se adapta a ti.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/kueski-prestamos-personales">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Aceptar recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6 mt-12">
              ¿Por qué elegir nuestro recomendador de préstamos?
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Opciones personalizadas
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Completamente gratuito
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Asesoría experta
                </span>
              </div>
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-4">
              Nuestras recomendaciones están diseñadas para conectar tus metas
              financieras con los préstamos que mejor se adaptan a tus
              necesidades. Desde tasas bajas hasta aprobaciones rápidas, te
              damos opciones claras y fáciles de entender para que tomes
              decisiones informadas.
            </p>

            <p className="text-left text-sm leading-6 text-gray-800 mb-10">
              Con nuestra guía, encontrarás el financiamiento que necesitas para
              simplificar tus finanzas y alcanzar tus objetivos sin
              complicaciones.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/kueski-prestamos-personales">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Nuestra mejor recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm mb-12">
              <Link
                className="text-[#2E74B5] font-medium"
                href="/soluciones-financieras/kueski-prestamos-personales"
              >
                Aprende cómo solicitarlo
              </Link>
            </p>

            <div className="mt-8 mb-6 border rounded-sm overflow-hidden">
              {/* FAQ Item 1: Advantages */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("advantages")}
                aria-expanded={openFaq === "advantages"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "advantages" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "advantages" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Qué ventajas tiene un préstamo de bajo interés?
                  </h3>
                </div>
              </button>
              {openFaq === "advantages" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-advantages-content"
                >
                  <p className="text-left text-sm">
                    Un préstamo con bajo interés reduce tus pagos mensuales,
                    ayudándote a ahorrar dinero a lo largo del tiempo mientras
                    mantienes tus finanzas bajo control.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Prepayment */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("prepayment")}
                aria-expanded={openFaq === "prepayment"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "prepayment" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "prepayment" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Por qué elegir un préstamo sin penalización por pagos
                    anticipados?
                  </h3>
                </div>
              </button>
              {openFaq === "prepayment" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-prepayment-content"
                >
                  <p className="text-left text-sm">
                    Un préstamo sin penalización te permite liquidarlo antes de
                    tiempo, reduciendo intereses y facilitándote salir de deudas
                    rápidamente.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Selection */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("selection")}
                aria-expanded={openFaq === "selection"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "selection" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "selection" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Cómo seleccionar el mejor préstamo personal?
                  </h3>
                </div>
              </button>
              {openFaq === "selection" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-selection-content"
                >
                  <p className="text-left text-sm">
                    Considera tus objetivos financieros y evalúa factores como
                    tasas de interés, comisiones y plazos para elegir el
                    préstamo que se ajuste mejor a tus necesidades.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: Debt Consolidation */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("debt")}
                aria-expanded={openFaq === "debt"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "debt" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "debt" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Puedo usar un préstamo personal para consolidar deudas?
                  </h3>
                </div>
              </button>
              {openFaq === "debt" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-debt-content"
                >
                  <p className="text-left text-sm">
                    Claro que sí! Consolidar tus deudas en un solo préstamo
                    simplifica los pagos y te puede ahorrar dinero en intereses
                    a largo plazo.
                  </p>
                </div>
              )}
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-12">
              Haz de tu préstamo personal un aliado para alcanzar tus metas
              financieras. Elige una opción que simplifique tu vida y maximice
              tus beneficios. Explora nuestras recomendaciones y encuentra el
              préstamo que mejor se adapta a ti.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Beneficios a tu alcance
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Sin buró de crédito:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Solicita sin importar tu historial crediticio. Ideal para
                  quienes inician en el mundo financiero.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">100% en Línea:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Rápido y seguro, recibe tu préstamo sin salir de casa.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Términos Flexibles:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Elige montos y plazos que se ajusten a tu capacidad de pago y
                  necesidades financieras.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Regulación y confianza:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Avalado por la CNBV y registrado ante la CONDUSEF para
                  garantizar tu seguridad financiera.
                </p>
              </div>
            </div>

            <div className="my-10">
              <Link href="/soluciones-financieras/kueski-prestamos-personales">
                <div className="relative w-full h-auto rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="https://media.topfinanzas.com/images/Tobanner-04-2.webp"
                    alt="Kueski Préstamos Personales"
                    width={800}
                    height={450}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}

export default function PersonalLoanRecommenderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PersonalLoanRecommenderPageContent />
    </Suspense>
  );
}
