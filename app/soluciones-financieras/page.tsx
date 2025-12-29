"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { useState, useEffect } from "react";

export default function FinancialSolutionsPage() {
  // Category definitions
  const categories = {
    creditCards: "Tarjetas",
    loans: "Préstamos",
  };

  // Content type definitions
  const creditCardTypes = {
    all: "Todas",
    traditional: "Bancos Tradicionales",
    neobank: "Neobancos",
    fintech: "Soluciones Fintech",
  };

  // Loan type definitions
  const loanTypes = {
    all: "Todos",
    personal: "Préstamos Personales",
    sme_fintech: "Fintech para PyMEs",
    neobank: "Préstamos de Neobancos",
    marketplace: "Plataformas (Marketplaces)",
    guide: "Guías",
  };

  // State for active category and filters with more reliable client-side initialization
  const [isClient, setIsClient] = useState(false);
  const [activeCategory, setActiveCategory] = useState("creditCards");
  const [activeCreditCardType, setActiveCreditCardType] = useState("all");
  const [activeLoanType, setActiveLoanType] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Mark as client-side rendered
    setIsClient(true);

    // Force re-render after mount to ensure hydration issues are resolved
    const timer = setTimeout(() => {
      setActiveCategory("creditCards");
      setActiveCreditCardType("all");
      setActiveLoanType("all");
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Avoid any rendering until client-side code is running
  // This prevents hydration issues in production
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-xl p-8">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  // List of all loan content with types
  const allLoansContent = [
    {
      title: "Préstamos Personales Kueski",
      slug: "kueski-prestamos-personales",
      description:
        "Préstamos personales rápidos y seguros con Kueski. Sin aval y 100% en línea.",
      image: "https://media.topfinanzas.com/images/kueski-logo.png",
      date: "29 December 2025",
      type: "fintech",
    },
  ];

  // List of credit card content with types
  const creditCardsContent = [
    {
      title: "Beneficios de la tarjeta de crédito HSBC Viva",
      slug: "tarjeta-de-credito-hsbc-viva",
      description:
        "Conoce la Tarjeta de Crédito HSBC Viva: sin anualidad, cashback en compras, meses sin intereses y acceso a promociones exclusivas.",
      image: "https://media.topfinanzas.com/images/TC_HSBC_VIVA_requisitos.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la Tarjeta de Crédito Joy Banamex",
      slug: "tarjeta-simplicity-citibanamex",
      description:
        "Conoce todo sobre la tarjeta Joy Banamex (antes Simplicity): sin anualidad, seguridad sin números impresos y gestión total desde la app.",
      image: "https://media.topfinanzas.com/images/foto2-1024x536.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción",
      slug: "tarjeta-de-credito-azul-bbva",
      description:
        "La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos usuarios del crédito como para compradores y viajeros frecuentes.",
      image: "https://media.topfinanzas.com/images/download-5-2.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "NuBank: La tarjeta de crédito ideal para ti",
      slug: "guia-tarjeta-de-credito-nu-bank",
      description:
        "La Tarjeta de Crédito NuBank, conocida por su accesibilidad y transparencia, se adapta a cualquier estilo de vida.",
      image: "https://media.topfinanzas.com/images/download-9-1.webp",
      date: "29 December 2025",
      type: "neobank",
    },
    {
      title: "Beneficios de la tarjeta de crédito BBVA Oro",
      slug: "analisis-tarjeta-de-credito-bbva-oro",
      description:
        "La tarjeta de crédito BBVA Oro es una opción de alto nivel que ofrece múltiples beneficios a los usuarios que buscan maximizar sus compras y disfrutar de ventajas exclusivas.",
      image: "https://media.topfinanzas.com/images/bbva-oro.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la Tarjeta de Crédito Banregio Platinum",
      slug: "banregio-platinum-analisis",
      description:
        "Conoce en esta guía un análisis de la tarjeta de crédito Banregio Platinum y aprende si es la ideal para tu estilo de vida.",
      image: "https://media.topfinanzas.com/images/download-1-1024x536.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la Gold Card American Express® Aeroméxico",
      slug: "gold-card-american-express-aeromexico",
      description:
        "Descubre los beneficios de la Gold Card American Express Aeroméxico: acumula Puntos Premier, acceso a Salas Premier y seguros de viaje exclusivos.",
      image: "https://media.topfinanzas.com/images/download-4-1.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la RappiCard",
      slug: "rappicard",
      description:
        "Descubre los beneficios de la RappiCard: sin anualidad, cashback en todas tus compras y gestión 100% digital. ¡Solicítala hoy mismo!",
      image: "https://media.topfinanzas.com/images/rappicard-1.jpg",
      date: "29 December 2025",
      type: "neobank",
    },
    {
      title: "Beneficios de la tarjeta Aeroméxico Santander",
      slug: "tarjeta-de-credito-aeromexico-santander",
      description:
        "Las tarjetas de crédito Aeroméxico Santander son una excelente opción para los viajeros frecuentes. Conoce sus beneficios, requisitos y características.",
      image:
        "https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la tarjeta de crédito Crecy",
      slug: "tarjeta-de-credito-crecy",
      description:
        "Descubre los beneficios de la tarjeta Crecy: crédito con criptomonedas, sin buró y liquidez sin vender tus activos.",
      image: "https://media.topfinanzas.com/images/crecy-1-1.jpg",
      date: "29 December 2025",
      type: "fintech",
    },
    {
      title: "LikeU de Santander: innovación en tus manos",
      slug: "tarjeta-de-credito-likeu-de-santander",
      description:
        "Descubre la tarjeta de crédito LikeU de Santander: personalizable, sin anualidad, con cashback y seguridad avanzada. ¡Solicítala hoy!",
      image: "https://media.topfinanzas.com/images/download-1-3.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la tarjeta de Crédito Platinum American Express",
      slug: "tarjeta-de-credito-platinum-american-express",
      description:
        "La Tarjeta Platinum American Express ofrece acceso a salones VIP, concierge 24/7, puntos Membership Rewards y seguros de viaje completos.",
      image: "https://media.topfinanzas.com/images/download-7-min.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios de la Tarjeta de Crédito Tigres Afirme",
      slug: "tarjeta-de-credito-tigres-afirme",
      description:
        "Descubre los beneficios, requisitos y costos de la Tarjeta de Crédito Tigres Afirme: puntos Bonus, meses sin intereses, anualidad y tasa de interés.",
      image: "https://media.topfinanzas.com/images/download-6-1.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Beneficios y características de la Tarjeta HSBC Air",
      slug: "tarjeta-hsbc-air",
      description:
        "Descubre los beneficios de la Tarjeta HSBC Air: tasa de interés baja, meses sin intereses automáticos y transferencia de saldos.",
      image: "https://media.topfinanzas.com/images/HSBC-Air-1.jpg",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "HSBC Zero: Ahorra en comisiones y maximiza tus recompensas",
      slug: "tarjeta-hsbc-zero",
      description:
        "La Tarjeta HSBC Zero ofrece libertad financiera con cero comisiones anuales, programa de recompensas y promociones exclusivas. Conoce sus beneficios.",
      image: "https://media.topfinanzas.com/images/download-4-2.webp",
      date: "29 December 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta Plata Card: maximiza cada compra",
      slug: "tarjeta-plata-card",
      description:
        "La Tarjeta de Crédito Plata ofrece hasta 15% de cashback, límite de crédito de hasta $200,000 y meses sin intereses. Conoce sus beneficios.",
      image: "https://media.topfinanzas.com/images/download-1-2.webp",
      date: "29 December 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Stori: Ideal para estudiantes",
      slug: "tarjeta-stori-ventajas-desventajas",
      description:
        "Conoce las ventajas de la tarjeta Stori para estudiantes: sin anualidad, 100% digital, internacional y con detalles financieros como CAT y tasa anual fija.",
      image: "https://media.topfinanzas.com/images/download-15.webp",
      date: "29 December 2025",
      type: "fintech",
    },
  ];

  // Date parsing utility function
  const parseDate = (dateString: string): number => {
    if (!dateString) return 0;
    const value = dateString.trim();
    const patterns = [
      /^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/,
      /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/,
      /^(\d{4})-(\d{2})-(\d{2})$/,
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match) {
        let day: number, month: number, year: number;
        if (pattern === patterns[0]) {
          day = parseInt(match[1], 10);
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[2].toLowerCase(),
          );
          year = parseInt(match[3], 10);
        } else if (pattern === patterns[1]) {
          month = monthNames.findIndex(
            (m) => m.toLowerCase() === match[1].toLowerCase(),
          );
          day = parseInt(match[2], 10);
          year = parseInt(match[3], 10);
        } else {
          year = parseInt(match[1], 10);
          month = parseInt(match[2], 10) - 1;
          day = parseInt(match[3], 10);
        }
        if (month !== -1 && !isNaN(day) && !isNaN(year)) {
          return Date.UTC(year, month, day);
        }
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  // Sort and filter content based on selected category and type
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  const sortedLoans = [...allLoansContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  const filteredCreditCards =
    activeCreditCardType === "all"
      ? sortedCreditCards
      : sortedCreditCards.filter((card) => card.type === activeCreditCardType);

  const filteredLoans =
    activeLoanType === "all"
      ? sortedLoans
      : sortedLoans.filter((loan) => loan.type === activeLoanType);

  // Custom content for this category page
  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-left sm:text-left">
        Soluciones Financieras
      </h1>

      <p className="text-lg text-gray-700 mb-8 leading-tight text-left sm:text-left">
        Encuentra información detallada sobre las mejores tarjetas de crédito
        disponibles, los requisitos para solicitarlas y guías completas para
        ayudarte a elegir la mejor opción según tus necesidades financieras.
      </p>

      {/* Main category selector */}
      <div className="flex mb-8 border-b border-gray-200">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => {
              setActiveCategory(key);
              // Reset filters when changing main categories
              setActiveCreditCardType("all");
              setActiveLoanType("all");
            }}
            className={`px-6 py-3 font-medium text-md transition-colors focus:outline-none ${
              activeCategory === key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {activeCategory === "creditCards" && (
        <div className="mb-8">
          {/* Subcategory filter for credit cards */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(creditCardTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveCreditCardType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCreditCardType === key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Credit cards grid with fixed positioning to accommodate Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCreditCards.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Soluciones Financieras"
                  categorySlug="/soluciones-financieras"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={
                    post.type === "traditional" &&
                    activeCreditCardType === "traditional"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {activeCategory === "loans" && (
        <div className="mb-8">
          {/* Subcategory filter for loans */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(loanTypes).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveLoanType(key)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeLoanType === key
                    ? "bg-green-600 text-white" // Use a different color for loan filters
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          {/* Loans grid with fixed positioning for Image components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLoans.map((post) => (
              <div
                key={post.slug}
                className="relative"
                style={{ position: "relative" }}
              >
                <FeaturedPostCard
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  slug={post.slug}
                  category="Soluciones Financieras"
                  categorySlug="/soluciones-financieras"
                  date={post.date}
                  type={post.type}
                  showBadge={true}
                  priority={post.type === "guide" && activeLoanType === "guide"}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4 text-left sm:text-left">
          ¿Buscas la tarjeta ideal para ti?
        </h2>
        <p className="text-gray-700 mb-6 text-left sm:text-left">
          Utiliza nuestro recomendador de tarjetas de crédito y encuentra la
          opción que mejor se adapte a tu perfil financiero y necesidades
          específicas.
        </p>
        <Link
          href="/recomendador-de-tarjetas-de-credito-p1"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 inline-block transition-colors rounded-full"
        >
          Ir al Recomendador
        </Link>
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Soluciones Financieras - TopFinanzas MX",
        description:
          "Descubre información sobre las mejores tarjetas de crédito, requisitos y guías completas para elegir la opción adecuada para tus necesidades financieras.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
