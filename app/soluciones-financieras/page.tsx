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
    // Personal Loans (Traditional Banks)
    {
      title: "Préstamo Personal HSBC",
      slug: "hsbc-personal-loan",
      description:
        "Descubra los préstamos personales de HSBC con tasas competitivas, plazos de pago flexibles y un proceso de solicitud rápido.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Barclays",
      slug: "barclays-personal-loan",
      description:
        "Explore los préstamos personales de Barclays con tasas competitivas, plazos flexibles y un proceso de solicitud optimizado.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136012-fotosprestamo-barclays2uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Lloyds Bank",
      slug: "lloyds-bank-personal-loan",
      description:
        "Explore los préstamos personales de Lloyds Bank con tasas competitivas, opciones de pago flexibles y servicio confiable.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136057-fotosprestamo-lloyds1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal NatWest",
      slug: "natwest-personal-loan",
      description:
        "Explore los préstamos personales de NatWest con tasas competitivas, plazos de pago flexibles y un proceso sencillo.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136156-fotosprestamo-nawest1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Santander UK",
      slug: "santander-uk-personal-loan",
      description:
        "Explore los préstamos personales de Santander UK con tasas competitivas, plazos flexibles y beneficios potenciales.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136214-fotosprestamo-santander1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal TSB",
      slug: "tsb-personal-loan",
      description:
        "Explore los préstamos personales de TSB con tasas competitivas, opciones de pago flexibles y banca sencilla.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136271-fotosprestamo-tbs1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Virgin Money",
      slug: "virgin-money-personal-loan",
      description:
        "Explore los préstamos personales de Virgin Money con tasas competitivas, plazos flexibles y beneficios exclusivos.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136330-fotosprestamo-virginmoney1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Halifax",
      slug: "halifax-personal-loan",
      description:
        "Explore los préstamos personales de Halifax con tasas competitivas, opciones de pago flexibles y servicio confiable.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136403-fotosprestamo-halifax1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    {
      title: "Préstamo Personal Nationwide",
      slug: "nationwide-personal-loan",
      description:
        "Explore los préstamos personales de Nationwide con tasas competitivas, plazos flexibles y beneficios para miembros.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136476-fotosprestamo-nationwide1uk.webp",
      date: "4 April 2025",
      type: "personal",
    },
    // Personal Loans (Fintech/Neobank)
    {
      title: "Préstamo Personal Revolut",
      slug: "revolut-personal-loan",
      description:
        "Explore los préstamos personales de Revolut que ofrecen decisiones rápidas, plazos flexibles y gestión desde la app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136529-fotosprestamo-revoult1uk.webp",
      date: "4 April 2025",
      type: "fintech", // Could also be 'personal' depending on desired filter logic
    },
    {
      title: "Préstamo Personal Monzo",
      slug: "monzo-personal-loan",
      description:
        "Explore los préstamos personales de Monzo que ofrecen decisiones rápidas, términos claros y gestión desde la app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136607-fotosprestamo-monzo2uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    {
      title: "Préstamo Personal Starling Bank",
      slug: "starling-bank-personal-loan",
      description:
        "Explore los préstamos personales de Starling Bank con tasas competitivas, términos claros y gestión vía app.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136704-fotosprestamo-starlinkbanck1uk.webp",
      date: "4 April 2025",
      type: "neobank", // Could also be 'personal'
    },
    // SME Fintech Loans
    {
      title: "Préstamo para Negocios Funding Circle",
      slug: "funding-circle-personal-loan", // Keep slug as created
      description:
        "Explore los préstamos para negocios de Funding Circle que ofrecen soluciones de financiamiento rápidas y flexibles.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Marketplace Funding Options",
      slug: "funding-options-personal-loan", // Keep slug as created
      description:
        "Explore Funding Options, una plataforma líder que conecta a PyMEs con diversas soluciones de financiamiento.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718138018-fotosprestamo-fundingoption1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "Flexi-Loan de iwoca",
      slug: "iwoca-personal-loan", // Keep slug as created
      description:
        "Explore el Flexi-Loan de iwoca, que ofrece soluciones de capital de trabajo rápidas para PyMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137033-fotosprestamo-iwoca1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Crédito para Negocios MarketFinance",
      slug: "marketfinance-personal-loan", // Keep slug as created
      description:
        "Explore las soluciones de MarketFinance para PyMEs, incluyendo préstamos rápidos y factoraje de facturas.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137315-fotosprestamo-fundingchange2uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Plataforma Funding Xchange",
      slug: "funding-xchange-personal-loan", // Keep slug as created
      description:
        "Explore Funding Xchange, una plataforma inteligente que ayuda a PyMEs a comparar opciones de financiamiento.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718136896-fotosprestamo-fundingchange1uk.webp",
      date: "4 April 2025",
      type: "marketplace", // Specific type for marketplaces
    },
    {
      title: "Financiamiento Capify",
      slug: "capify-personal-loan", // Keep slug as created
      description:
        "Explore las soluciones de financiamiento de Capify para PyMEs, incluyendo adelantos de efectivo y préstamos.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137374-fotosprestamo-capify1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
    {
      title: "Préstamos Fleximize",
      slug: "fleximize-personal-loan", // Keep slug as created
      description:
        "Explore los préstamos flexibles de Fleximize que ofrecen opciones de pago personalizadas para PyMEs.",
      image:
        "https://media.topfinanzas.com/images/uk/loans/718137416-fotosprestamo-fleximize1uk.webp",
      date: "4 April 2025",
      type: "sme_fintech",
    },
  ];

  // List of credit card content with types
  const creditCardsContent = [
    {
      title: "Tarjeta RBS Purchase & Balance Transfer",
      slug: "rbs-purchase-balance-transfer-card",
      description:
        "La tarjeta RBS Purchase & Balance Transfer ofrece 0% de interés en compras hasta por 20 meses y 0% en transferencias de saldo por hasta 18 meses. Sin anualidad.",
      image:
        "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjetas de Crédito Bank of Scotland",
      slug: "bank-of-scotland-credit-cards",
      description:
        "Bank of Scotland ofrece tarjetas para gastos diarios, transferencias de saldo y construcción de crédito. Verifica tu elegibilidad sin afectar tu historial.",
      image:
        "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito First Direct",
      slug: "first-direct-credit-card",
      description:
        "La tarjeta First Direct 1st ofrece 0% de interés en compras por 12 meses, tasas competitivas sin anualidad y servicio al cliente galardonado 24/7.",
      image:
        "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito The Co-operative Bank",
      slug: "the-co-operative-bank-credit-card",
      description:
        "La tarjeta Members de The Co-operative ofrece 0.5% de cashback en tiendas Co-op y 0.3% en todos los demás lugares, sin comisión anual.",
      image:
        "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito M&S Rewards",
      slug: "ms-rewards-credit-card",
      description:
        "La tarjeta M&S Rewards ofrece puntos en todos tus gastos en M&S y más allá, beneficios exclusivos para miembros y tasas competitivas.",
      image:
        "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjetas de Crédito Tesco Bank Clubcard",
      slug: "tesco-bank-clubcard-credit-cards",
      description:
        "Descubra las tarjetas Tesco Bank Clubcard con tasas del 0%, opciones de CAT bajo y puntos Clubcard en tus gastos diarios.",
      image:
        "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "American Express Preferred Rewards Gold",
      slug: "american-express-preferred-rewards-gold-credit-card",
      description:
        "La tarjeta American Express Gold ofrece puntos Membership Rewards premium, seguro de viaje integral y beneficios de estilo de vida exclusivos.",
      image:
        "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Nationwide Building Society",
      slug: "nationwide-building-society-credit-card",
      description:
        "La tarjeta Member de Nationwide ofrece dos opciones al 0%: hasta 24 meses en transferencias de saldo o 15 meses en compras.",
      image:
        "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito HSBC Rewards",
      slug: "hsbc-rewards-credit-card",
      description:
        "La tarjeta HSBC Rewards ofrece puntos en tus gastos diarios, 0% de interés en compras por 6 meses y un bono de bienvenida.",
      image:
        "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
      date: "24 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Ocean",
      slug: "ocean-credit-card",
      description:
        "La tarjeta Ocean ofrece límites de crédito flexibles sin anualidad. Verifica tu elegibilidad rápido sin afectar tu historial crediticio.",
      image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Fluid",
      slug: "fluid-credit-card",
      description:
        "La tarjeta Fluid ofrece 0% de interés en transferencias de saldo por 9 meses, ayudándote a ahorrar y liquidar deudas más rápido.",
      image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta John Lewis Partnership",
      slug: "john-lewis-partnership-card",
      description:
        "La tarjeta John Lewis Partnership te permite ganar puntos valiosos en tus compras diarias en John Lewis, Waitrose y más allá.",
      image:
        "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito 118 118 Money",
      slug: "118-118-money-credit-card",
      description:
        "La tarjeta 118 118 Money ofrece límites personalizados y términos claros para ayudarte a construir o mejorar tu historial crediticio.",
      image:
        "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Vanquis",
      slug: "vanquis-credit-card",
      description:
        "Las tarjetas Vanquis ofrecen límites personalizados y funciones galardonadas para construir crédito, ideales para mejorar tu perfil.",
      image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta Capital One UK Classic",
      slug: "capital-one-uk-credit-card",
      description:
        "La tarjeta Capital One Classic te ayuda a mejorar tu crédito con un límite inicial manejable, pagos flexibles y sin comisión anual.",
      image:
        "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Marbles",
      slug: "marbles-credit-card",
      description:
        "La tarjeta Marbles te ayuda a gestionar tus finanzas con un límite manejable, verificador rápido y herramientas flexibles.",
      image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Aqua",
      slug: "aqua-credit-card",
      description:
        "La tarjeta Aqua ofrece límites personalizados y protección contra fraude 24/7 para ayudarte a construir crédito con total confianza.",
      image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Bip",
      slug: "bip-credit-card",
      description:
        "Descubra la tarjeta Bip: una solución de crédito digital sin tarjeta física, sin comisiones ocultas y con control total desde tu celular.",
      image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Lloyds Bank",
      slug: "lloyds-bank-credit-card",
      description:
        "Explore la tarjeta Lloyds Bank con tasas competitivas, sin anualidad y programa de ofertas diarias de cashback.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906900-top_prestamos-y-tarjetas-uk_v1-16.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito NatWest",
      slug: "natwest-credit-card",
      description:
        "Descubra la tarjeta NatWest con programa MyRewards, integración móvil y opciones de pago flexibles para tus gastos.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644866-top_prestamos-y-tarjetas-uk_v1_mesa-de-trabajo-1-copia.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Santander UK",
      slug: "santander-uk-credit-card",
      description:
        "Conozca la tarjeta Santander UK con cashback All in One, sin comisiones en el extranjero y opciones de transferencia de saldo.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718644935-top_prestamos-y-tarjetas-uk_v1-03.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito TSB",
      slug: "tsb-credit-card",
      description:
        "Explore la tarjeta TSB con valor diario, comisiones bajas e integración total con las plataformas de banca TSB.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645155-top_prestamos-y-tarjetas-uk_v1-06.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Virgin Money",
      slug: "virgin-money-credit-card",
      description:
        "Descubra la tarjeta Virgin Money con recompensas exclusivas, puntos Virgin y ofertas en todo el ecosistema Virgin.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645561-top_prestamos-y-tarjetas-uk_v1-08.webp",
      date: "2 April 2025",
      type: "traditional",
    },
    {
      title: "Halifax World Elite MasterCard",
      slug: "halifax-world-elite-mastercard",
      description:
        "Explore la Halifax World Elite MasterCard, que ofrece beneficios de viaje premium, seguro integral y recompensas exclusivas.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719906760-top_prestamos-y-tarjetas-uk_v1-14.webp",
      date: "4 April 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Monzo",
      slug: "monzo-credit-card",
      description:
        "Conozca la tarjeta Monzo con notificaciones de gasto en tiempo real, herramientas de presupuesto y gestión 100% digital.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907302-top_prestamos-y-tarjetas-uk_v1-18.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Tarjeta de Crédito Revolut",
      slug: "revolut-credit-card",
      description:
        "Explore la tarjeta Revolut con capacidades multimoneda, tasas competitivas y control total para estilos de vida internacionales.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/718645626-top_prestamos-y-tarjetas-uk_v1-10.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Starling Bank",
      slug: "starling-bank-credit-card",
      description:
        "Descubra la tarjeta Starling Bank con precios transparentes, banca ética y funciones digitales avanzadas para tu dinero.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    {
      title: "Tarjeta de Crédito Curve",
      slug: "curve-credit-card",
      description:
        "Conoce la innovadora tarjeta Curve que consolida todas tus tarjetas en una sola con funciones inteligentes y recompensas.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta Barclaycard Avios Plus",
      slug: "barclaycard-avios-plus",
      description:
        "La tarjeta Barclaycard Avios Plus ofrece beneficios de viaje premium y generosos puntos Avios para mejorar tu experiencia.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    {
      title: "Tarjeta de Crédito Yonder",
      slug: "yonder-credit-card",
      description:
        "La tarjeta gratuita Yonder otorga 1 punto por cada £1 gastada sin comisiones en el extranjero y bonos exclusivos por consumo.",
      image:
        "https://cdn.prod.website-files.com/6209512878b45f39119ebfb5/6839943447d06a3292522ecd_head-p-800.webp",
      date: "23 October 2025",
      type: "fintech",
    },
    {
      title: "Tarjeta de Crédito Zopa",
      slug: "zopa-credit-card",
      description:
        "La tarjeta Zopa te da el control total con una app intuitiva, notificaciones al instante y funciones innovadoras como Credit Cushion.",
      image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
      date: "23 October 2025",
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
