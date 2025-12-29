"use client";

import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming BlogLayout is suitable
import { FeaturedPostCard } from "@/components/ui/featured-post-card"; // Reusing card component
import { useState, useEffect } from "react"; // Keep state hooks for consistency, though filtering is static now

// Define the structure for each post item (can be imported if shared)
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string;
  type?: string; // Keep type if used by FeaturedPostCard
}

export default function TarjetasArchivePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Complete list of credit card content (synchronized with soluciones-financieras/page.tsx)
  const creditCardsContent: PostItem[] = [
    // Latest Products (October 2025)
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
      title: "Tarjeta Barclaycard Avios Plus",
      slug: "barclaycard-avios-plus",
      description:
        "La tarjeta Barclaycard Avios Plus ofrece beneficios de viaje premium y generosos puntos Avios para mejorar tu experiencia.",
      image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
      date: "23 October 2025",
      type: "traditional",
    },
    // Traditional Bank Cards
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
    // Neobank Cards
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
      title: "Tarjeta de Crédito Starling Bank",
      slug: "starling-bank-credit-card",
      description:
        "Descubra la tarjeta Starling Bank con precios transparentes, banca ética y funciones digitales avanzadas para tu dinero.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907598-top_prestamos-y-tarjetas-uk_v1-20.webp",
      date: "2 April 2025",
      type: "neobank",
    },
    // Fintech Cards
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
      title: "Tarjeta de Crédito Curve",
      slug: "curve-credit-card",
      description:
        "Conoce la innovadora tarjeta Curve que consolida todas tus tarjetas en una sola con funciones inteligentes y recompensas.",
      image:
        "https://media.topfinanzas.com/images/uk/credit-cards/719907701-top_prestamos-y-tarjetas-uk_v1-22.webp",
      date: "2 April 2025",
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

  // Sort posts by date (newest first)
  const sortedCreditCards = [...creditCardsContent].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // No filtering needed, just display the sorted credit card content
  const filteredPosts = sortedCreditCards;

  // Avoid rendering until client-side code is running
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* Basic loading skeleton */}
        <div className="animate-pulse bg-gray-200 rounded-sm p-8 w-full max-w-4xl">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const pageContent = (
    <div data-category="tarjetas">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Tarjetas de Crédito
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora guías detalladas y reseñas de las mejores tarjetas de crédito
        disponibles. Encuentra la tarjeta adecuada según las recompensas,
        tarifas y tus necesidades financieras.
      </p>

      {/* Grid of credit card posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post: PostItem) => (
          <div
            key={post.slug}
            className="relative"
            style={{ position: "relative" }} // Needed for FeaturedPostCard image positioning
          >
            <FeaturedPostCard
              title={post.title}
              description={post.description}
              image={post.image}
              // Posts are located under /soluciones-financieras/
              slug={post.slug}
              category="Tarjetas de Crédito" // Static category for this page
              categorySlug="/soluciones-financieras" // Base path for these posts
              date={post.date}
              type={post.type}
              showBadge={true} // Show type badge if desired
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <BlogLayout
      metadata={{
        title: "Tarjetas de Crédito: Reseñas y Guías | TopFinanzas MX",
        description:
          "Compara las mejores tarjetas de crédito. Encuentra reseñas, guías y comparaciones para recompensas, cashback, viajes y tarjetas de bajo interés.",
      }}
    >
      {pageContent}
    </BlogLayout>
  );
}
