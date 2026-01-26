"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";
import { Check, Bell } from "lucide-react";

function CreditCardRecommenderContent() {
  useRecommenderPageGuard();
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow bg-white py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a8fa3] mb-4 leading-tight">
              Hemos encontrado tarjetas que te abren nuevas oportunidades
            </h1>
            <p className="text-gray-700 text-lg font-medium">
              Selecciona el cupo que mejor se adapte a tus necesidades diarias:
            </p>
            <p className="text-xs text-gray-400 mt-1">Por Top Finance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Option Buttons */}
              <div className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-full">
                {[
                  {
                    text: "Tarjeta con cupo de $5,000 MXN",
                    href: "/soluciones-financieras/tarjeta-de-credito-nubank-vcorta",
                  },
                  {
                    text: "Tarjeta con cupo de $10,000 MXN",
                    href: "/soluciones-financieras/tarjeta-hsbc-zero",
                  },
                  {
                    text: "Tarjeta con cupo de $15,000 MXN",
                    href: "/soluciones-financieras/tarjeta-de-credito-azul-bbva",
                  },
                  {
                    text: "Otras opciones disponibles",
                    href: "/soluciones-financieras/mejores-tarjetas-de-credito",
                  },
                ].map((item, i) => (
                  <Link key={i} href={item.href} className="w-full">
                    <Button className="bg-[#1EA091] hover:bg-[#168579] text-white font-bold text-lg py-3 rounded-sm shadow-sm w-full">
                      {item.text}
                    </Button>
                  </Link>
                ))}
              </div>

              {/* Success Box */}
              <div className="bg-[#F8FBFD] p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-[#2E74B5] text-2xl font-bold mb-4">
                  ¡Bien hecho!
                </h2>
                <p className="text-gray-800 mb-6 font-medium">
                  Tu tarjeta ya está lista. Solo debes elegir el monto ideal
                  para ti y comenzar a disfrutar de beneficios como:
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Tasa de interés del 0%",
                    "Reembolso en efectivo (cashback)",
                    "Puntos por consumo",
                    "Y mucho más",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-[#28C74D] rounded-sm p-0.5">
                        <Check className="text-white w-4 h-4" strokeWidth={4} />
                      </div>
                      <span className="text-gray-800 text-sm md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-800 text-sm">
                  Si estas opciones no se ajustan a lo que buscas, también
                  tenemos otras alternativas para ti.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="mt-8">
                <h2 className="text-[#2E74B5] text-xl md:text-2xl font-bold mb-6">
                  ¿Tienes dudas? Aquí respondemos algunas comunes:
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      id: "cashback",
                      question:
                        "¿Qué es un reembolso en el estado de cuenta (cashback)?",
                      answer:
                        "Es un beneficio que te devuelve dinero como crédito en tu estado de cuenta, reduciendo tu saldo total.",
                    },
                    {
                      id: "travel",
                      question: "¿Cómo elegir la tarjeta ideal para viajes?",
                      answer:
                        "Considera tarjetas sin comisiones por transacciones en el extranjero, con seguro de viaje y recompensas por compras en aerolíneas u hoteles.",
                    },
                    {
                      id: "transfer",
                      question:
                        "¿Puedo transferir el saldo de mi tarjeta a otra persona?",
                      answer:
                        "Las transferencias de saldo normalmente solo están permitidas entre tarjetas del mismo titular de cuenta.",
                    },
                  ].map((item) => (
                    <div key={item.id} className="border-b pb-4">
                      <button
                        onClick={() => toggleFaq(item.id)}
                        className="flex items-start w-full text-left gap-3 group"
                        aria-expanded={openFaq === item.id}
                      >
                        <span className="mt-1.5 text-[0.6rem] leading-4 text-black transform transition-transform duration-200">
                          {openFaq === item.id ? "▼" : "▶"}
                        </span>
                        <span className="font-bold text-gray-900 text-base md:text-lg">
                          {item.question}
                        </span>
                        <span className="ml-auto text-2xl leading-4 font-bold text-black min-w-[20px] text-center">
                          {openFaq === item.id ? "−" : "+"}
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${openFaq === item.id ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"}`}
                      >
                        <div className="overflow-hidden">
                          <div className="pl-6 text-gray-700 text-sm">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offer Card */}
              <div className="bg-white rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-6 md:p-8 border border-gray-100 relative text-center">
                <div className="relative w-64 md:w-80 h-40 md:h-48 mx-auto -mt-4 mb-4">
                  <Image
                    src="https://media.topfinanzas.com/images/credit-card-varity.png"
                    alt="Credit Card Variety"
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-xl transform rotate-3"
                  />
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <Bell className="text-[#D8AA26] w-6 h-6 fill-current" />
                  <h3 className="text-[#DB2A2A] font-bold text-xl md:text-2xl">
                    ¡Oferta por tiempo limitado!
                  </h3>
                </div>

                <h2 className="text-gray-800 font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">
                  TARJETA SIN CUOTA ANUAL
                </h2>

                <p className="text-gray-800 font-medium mb-8">
                  La más solicitada por nuestros lectores. ¡Conócela hoy mismo!
                </p>

                <Link
                  href="/soluciones-financieras/barclaycard-avios-plus"
                  className="block w-full max-w-md mx-auto"
                >
                  <Button className="w-full bg-[#DB2A2A] hover:bg-[#B71C1C] text-white font-bold text-xl py-6 rounded-sm shadow-md uppercase tracking-wide">
                    VER COMO SOLICITARLA
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1">
              <div className="bg-[#ECF0F1] p-6 rounded-sm sticky top-24">
                <h3 className="text-[#2F4050] font-bold text-lg mb-4 border-l-4 border-[#2F4050] pl-3">
                  Mantente informado
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-2 items-start text-sm text-gray-800">
                    <div className="min-w-[4px] h-[4px] bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span>
                      Si buscas mejorar tu historial crediticio o usar tu
                      tarjeta de manera más inteligente sin que los bancos se
                      aprovechen, revisa también esta información adicional.
                      Tenemos recursos valiosos hechos a la medida para ti.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompactFooter />
    </main>
  );
}

export default function CreditCardRecommenderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreditCardRecommenderContent />
    </Suspense>
  );
}
