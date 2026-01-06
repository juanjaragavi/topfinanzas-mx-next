"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CreditCardItem {
  title: string;
  image: string;
  idealFor: string[];
  description: string;
  features: string[];
  learnMoreLink: string;
  learnMoreText: string;
  infoLink?: {
    text: string;
    href: string;
  };
}

const creditCards: CreditCardItem[] = [
  {
    title: "Tarjeta de crédito Nubank",
    image:
      "https://media.topfinanzas.com/images/tarjetas/TC_Nu_requisitos.webp",
    idealFor: ["Estudiantes", "Empleados", "Administración del hogar"],
    description:
      "La Tarjeta de Crédito Nubank se destaca como una solución ideal para personas que buscan eficiencia, transparencia e innovación en sus productos financieros. Se maneja completamente a través de una aplicación móvil, brindando control total sobre las finanzas. Sus características incluyen:",
    features: [
      "Sin cuotas anuales ni costos ocultos.",
      "Ausencia de penalizaciones por uso mínimo.",
      "CAT Promedio de 127.3% sin IVA.",
      "Promociones exclusivas y beneficios Mastercard.",
    ],
    learnMoreLink: "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank",
    learnMoreText: "Conoce más de la tarjeta Nu",
    infoLink: {
      text: "Conoce más tarjetas de Neobancos en México.",
      href: "/finanzas-personales/tarjetas-de-credito-de-neobancos",
    },
  },
  {
    title: "Tarjeta de Crédito HSBC VIVA",
    image:
      "https://media.topfinanzas.com/images/tarjetas/TC_HSBC_VIVA_requisitos.webp",
    idealFor: ["Estudiantes", "Empleados", "Administración del hogar"],
    description:
      "La Tarjeta de Crédito HSBC VIVA, fruto de la colaboración entre HSBC y VIVA Aerobus, se presenta como la aliada perfecta para quienes sueñan con viajar más por menos. Diseñada para maximizar tus viajes con costos reducidos, esta tarjeta te abre las puertas a un mundo de posibilidades, permitiéndote disfrutar de los viajes que siempre has querido realizar sin comprometer tu economía.",
    features: [
      "Acumulación de puntos Doters con cada compra, canjeables por viajes y más.",
      "Sin cuota anual, manteniendo tus finanzas tan libres como tus viajes.",
      "Beneficios exclusivos al viajar, incluyendo equipaje documentado sin costo y abordaje prioritario.",
    ],
    learnMoreLink: "/soluciones-financieras/tarjeta-de-credito-hsbc-viva",
    learnMoreText: "Más sobre la Tarjeta HSBC VIVA",
    infoLink: {
      text: "¿Quieres aprender a viajar más por menos?: conoce los mejores trucos financieros.",
      href: "/finanzas-personales/comprar-boletos-de-avion-mas-economicos",
    },
  },
  {
    title: "Tarjeta de Crédito Azul de BBVA",
    image: "https://media.topfinanzas.com/images/tarjetas/TC_bbva-azul.webp",
    idealFor: ["Retirado", "Empleados", "Trabajador Independiente"],
    description:
      "La Tarjeta de Crédito Azul de BBVA emerge como una solución financiera integral, fusionando accesibilidad con una sólida oferta de seguridad y beneficios. Especialmente diseñada para adaptarse a una amplia gama de necesidades, esta tarjeta se convierte en tu compañera ideal para maximizar tus finanzas personales con cada transacción.",
    features: [
      "Un CAT promedio ponderado del 70.4% sin IVA.",
      "Comisión anual bonificada en la primera anualidad al contratar en línea.",
      "Beneficios exclusivos como seguros de viaje y protección de compras.",
    ],
    learnMoreLink: "/soluciones-financieras/tarjeta-de-credito-azul-bbva",
    learnMoreText: "Ver más sobre la Tarjeta Azul de BBVA",
    infoLink: {
      text: "Aprende más sobre tarjetas de crédito: beneficios, tipos y secretos para que mantengas unas finanzas saludables.",
      href: "/finanzas-personales/tarjetas-de-credito",
    },
  },
  {
    title: "Tarjeta de crédito HSBC Zero",
    image: "https://media.topfinanzas.com/images/tarjetas/HSBC-Zero-1.webp",
    idealFor: [
      "Estudiantes",
      "Jóvenes profesionales",
      "Quienes buscan iniciar su historial crediticio",
    ],
    description:
      "La Tarjeta HSBC Zero destaca en el mercado de tarjetas de crédito por eliminar anualidades y comisiones ocultas, ofreciendo una experiencia financiera sin cargos adicionales. Es una opción excelente para quienes valoran la simplicidad y la economía en sus productos financieros.",
    features: [
      "Sin Anualidad ni Comisiones Extras: Cero costos fijos con una transacción mínima mensual de $1 M.N.",
      "Transferencia de Saldos con Tasa Preferencial: Gestiona deudas de otras tarjetas con una tasa competitiva de 22.90%.",
      "Bonificaciones por Compras: Disfruta de un 3% de bonificación en compras durante los primeros 30 días y opciones de financiamiento sin intereses.",
      "Programa de Recompensas Más HSBC: Acumula puntos por cada compra, canjeables por una variedad de premios y servicios.",
    ],
    learnMoreLink: "/soluciones-financieras/tarjeta-hsbc-zero",
    learnMoreText: "Conoce más de la Tarjeta HSBC Zero",
    infoLink: {
      text: "¿Eres estudiante?: Conoce las tarjetas ideales para ti.",
      href: "/finanzas-personales/tarjetas-de-credito-para-estudiantes",
    },
  },
  {
    title: "Tarjeta de Crédito Platinum American Express",
    image:
      "https://media.topfinanzas.com/images/tarjetas/Platinum-American-Express.webp",
    idealFor: ["Retirado", "Empleados", "Sector Público"],
    description:
      "La Tarjeta de Crédito Platinum American Express simboliza más que estatus; es una llave maestra para acceder a un espectro de experiencias y servicios inigualables. Diseñada para los que no se conforman con menos, esta tarjeta eleva cada aspecto de tu vida, desde viajes hasta entretenimiento y más allá.",
    features: [
      "Acceso a Los Salones The Centurion® Lounge, proporcionando un oasis de lujo en aeropuertos seleccionados.",
      "Membership Rewards®, un programa que transforma tus gastos cotidianos en recompensas excepcionales.",
      "Protección integral en viajes, asegurando una experiencia sin preocupaciones.",
    ],
    learnMoreLink:
      "/soluciones-financieras/tarjeta-de-credito-platinum-american-express",
    learnMoreText: "Ver más sobre la Tarjeta American Express",
    infoLink: {
      text: "Aprende cómo hacer un presupuesto familiar exitoso para tener estabilidad financiera.",
      href: "/finanzas-personales/pasos-para-un-presupuesto-familiar",
    },
  },
];

export default function TarjetasDeCreditoCampanaPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow">
        {/* Hero Banner */}
        <div className="w-full bg-gradient-to-r from-[#1a4a8a] to-[#2d6cb5]">
          <div className="container mx-auto px-4">
            <Image
              src="https://media.topfinanzas.com/images/franja.webp"
              alt="Top Finanzas Banner"
              width={1200}
              height={80}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a3a5c] mb-6 leading-tight">
              Tus tarjetas de crédito recomendadas están aquí
            </h1>

            <div className="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
              <p className="font-medium">¡Bienvenido a Top Finanzas!</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#1a4a8a] font-bold">•</span>
                  <span>Acá escogimos 5 tarjetas para ti…</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a4a8a] font-bold">•</span>
                  <span>
                    Pero tenemos más de{" "}
                    <Link
                      href="/soluciones-financieras/mejores-tarjetas-de-credito"
                      className="text-[#1a4a8a] hover:underline font-medium"
                    >
                      60 productos financieros
                    </Link>{" "}
                    que pueden servirte…
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1a4a8a] font-bold">•</span>
                  <span>
                    Te ayudamos a tomar una decisión financiera informada.
                  </span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                Sigue leyendo abajo para ver las 5 tarjetas iniciales para ti:
              </p>
            </div>
          </div>

          {/* Credit Cards List */}
          <div className="space-y-12">
            {creditCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative w-full h-48 md:h-64 bg-gray-50">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-4">
                    {card.title}
                  </h2>

                  {/* Ideal For */}
                  <div className="mb-4">
                    <p className="font-semibold text-gray-800 mb-2">
                      Ideal para:
                    </p>
                    <ul className="space-y-1">
                      {card.idealFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="text-[#1a4a8a]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Info Link */}
                  {card.infoLink && (
                    <p className="mb-4">
                      <Link
                        href={card.infoLink.href}
                        className="text-[#1a4a8a] hover:underline text-sm"
                      >
                        {card.infoLink.text}
                      </Link>
                    </p>
                  )}

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <span className="text-[#1a4a8a] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href={card.learnMoreLink}>
                    <Button className="bg-[#1a4a8a] hover:bg-[#0d3a6e] text-white font-bold px-8 py-3 rounded-sm">
                      {card.learnMoreText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef] rounded-lg p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#1a3a5c] mb-4">
              ¿Listo para descubrir tu tarjeta ideal?
            </h2>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Si aún te preguntas cuál es la mejor opción para ti, no te
              preocupes. En Top Finanzas, hemos analizado diferentes productos
              financieros para ofrecerte recomendaciones que se adaptan a tus
              necesidades y estilo de vida.
            </p>
            <Link href="/soluciones-financieras/mejores-tarjetas-de-credito">
              <Button className="bg-[#2d6cb5] hover:bg-[#1a4a8a] text-white font-bold px-8 py-4 rounded-sm text-lg">
                Explora más opciones ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <CompactFooter />
    </main>
  );
}
