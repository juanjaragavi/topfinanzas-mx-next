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
