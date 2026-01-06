"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface LoanItem {
  title: string;
  subtitle: string;
  image: string;
  description: string[];
  idealFor: string;
  learnMoreLink: string;
  learnMoreText: string;
}

const loans: LoanItem[] = [
  {
    title: "Moneyman",
    subtitle: "Préstamos ágiles sin intereses",
    image: "https://media.topfinanzas.com/images/download-3.webp",
    description: [
      "Moneyman destaca por ofrecer tu primer préstamo de hasta $4,000 MXN sin intereses, perfecto para quienes buscan una solución rápida y eficiente a sus necesidades financieras sin costos adicionales.",
      "Con un proceso de solicitud en línea que toma menos de 10 minutos, Moneyman es ideal para situaciones de emergencia o para financiar pequeños proyectos. No requiere avales ni comprobantes de ingresos y está disponible 24/7, lo que lo convierte en una opción conveniente para estudiantes, emprendedores, y cualquier persona que necesite acceso rápido a efectivo.",
    ],
    idealFor:
      "Quienes buscan financiamiento inmediato para emergencias o proyectos rápidos sin la carga de intereses, especialmente estudiantes y emprendedores.",
    learnMoreLink: "/soluciones-financieras/moneyman-prestamos-guia",
    learnMoreText: "Obtén tu préstamo con Moneyman",
  },
  {
    title: "Kueski",
    subtitle: "Préstamos sin buró de crédito",
    image: "https://media.topfinanzas.com/images/download-7-2.webp",
    description: [
      "Kueski redefine la accesibilidad financiera permitiendo préstamos personales sin la necesidad de revisar tu historial en el Buró de Crédito.",
      "Su proceso 100% digital facilita el acceso a fondos de manera rápida y sin complicaciones, ideal para quienes enfrentan barreras en sistemas financieros tradicionales. Con flexibilidad en términos y sin penalizaciones por pagos anticipados, Kueski se presenta como una solución inclusiva y confiable.",
    ],
    idealFor:
      "Personas sin historial crediticio o con dificultades previas en el Buró, buscando acceso inmediato a financiamiento.",
    learnMoreLink: "/soluciones-financieras/kueski-prestamos",
    learnMoreText: "Obtén tu préstamo con Kueski",
  },
  {
    title: "Baubap",
    subtitle: "Préstamos para urgencias financieras",
    image: "https://media.topfinanzas.com/images/baubap-1-1-1.webp",
    description: [
      "Baubap se especializa en préstamos rápidos para aquellos momentos de urgencia, ofreciendo un proceso completamente digital.",
      "Si enfrentas un imprevisto financiero y necesitas acceso inmediato a efectivo sin pasar por un largo proceso de aprobación, Baubap puede ser tu aliado, sobre todo si tienes dificultades crediticias o un historial negativo en el Buró, brindando tasas competitivas y un programa de lealtad que recompensa tu puntualidad.",
    ],
    idealFor:
      "Personas que necesitan soluciones financieras rápidas para urgencias, sin requisitos estrictos de historial crediticio.",
    learnMoreLink: "/soluciones-financieras/prestamos-baubap",
    learnMoreText: "Obtén tu préstamo con Baubap",
  },
  {
    title: "Yotepresto",
    subtitle: "Conectando personas",
    image: "https://media.topfinanzas.com/images/yotepretsto-1-1.webp",
    description: [
      "Yotepresto sobresale por su modelo único de créditos entre personas, ofreciendo tasas de interés competitivas desde el 8.9% hasta el 38.9% sin IVA.",
      "Este enfoque directo elimina intermediarios, permitiendo préstamos desde $10,000 hasta $400,000 pesos con flexibilidad en los plazos de pago. Sin costos ocultos, garantías, ni avales, Yotepresto facilita el acceso a financiamiento personal con un proceso ágil y transparente.",
    ],
    idealFor:
      "Quienes buscan tasas de interés más bajas y un proceso de préstamo transparente, especialmente atractivo para inversores y solicitantes que prefieren un enfoque personalizado y directo en sus transacciones financieras.",
    learnMoreLink: "/soluciones-financieras/guia-yotepresto",
    learnMoreText: "Obtén tu préstamo con Yotepresto",
  },
  {
    title: "Credilikeme",
    subtitle: "Préstamos accesibles y rápidos",
    image: "https://media.topfinanzas.com/images/banner-credilikeme2.webp",
    description: [
      "Credilikeme brilla por su accesibilidad a personas con historiales crediticios desafiantes o inexistentes, facilitando la obtención de préstamos personales de manera rápida y digital.",
      "Si necesitas financiamiento sin demoras, esta plataforma asegura una experiencia de usuario gratificante con respuestas en menos de 24 horas y un atractivo programa de recompensas que mejora las condiciones para préstamos futuros. Registrada ante la CNBV y supervisada por la Condusef, Credilikeme promete una operación transparente y segura.",
    ],
    idealFor:
      "Personas que buscan superar barreras financieras tradicionales, especialmente aquellos con poco o ningún historial crediticio, o que buscan mejorar su situación financiera mediante un servicio confiable y reconocido.",
    learnMoreLink: "/soluciones-financieras/prestamos-personales-credilikeme",
    learnMoreText: "Obtén tu préstamo con Credilikeme",
  },
];

export default function PrestamosCampanaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="w-full relative">
          <Image
            src="https://media.topfinanzas.com/images/imagenes-blog-1024x683.jpg"
            alt="Mejores préstamos personales"
            width={1200}
            height={400}
            className="w-full h-48 md:h-64 object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3a5c] mb-4 leading-tight">
              ¡Mira a continuación los mejores préstamos personales recomendados
              para ti!
            </h1>
          </div>

          {/* Loans List */}
          <div className="space-y-12">
            {loans.map((loan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Loan Image */}
                <div className="relative w-full h-48 md:h-56 bg-gray-50">
                  <Image
                    src={loan.image}
                    alt={loan.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Loan Content */}
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-2">
                    {loan.title}: {loan.subtitle}
                  </h2>

                  {/* Description */}
                  <div className="space-y-4 mb-6">
                    {loan.description.map((paragraph, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-800">
                      <span className="font-semibold text-[#1a3a5c]">
                        Ideal para:{" "}
                      </span>
                      {loan.idealFor}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link href={loan.learnMoreLink}>
                    <Button className="bg-[#1a4a8a] hover:bg-[#0d3a6e] text-white font-bold px-8 py-3 rounded-sm w-full md:w-auto">
                      {loan.learnMoreText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CompactFooter />
    </main>
  );
}
