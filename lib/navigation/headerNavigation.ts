/**
 * Navigation items for the header component
 * Localized for the UK market
 * Easily modifiable by LLM agents to update site navigation
 */

export interface NavigationItem {
  text: string;
  href: string;
  isEmphasis?: boolean; // Optional flag for "Show more..."
}

export interface DropdownItem {
  text: string;
  items: NavigationItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenu {
  title: string;
  columns: MegaMenuColumn[];
  featuredPosts?: {
    title: string;
    posts: Array<{
      title: string;
      href: string;
      image: string;
      category: string;
      categoryHref: string;
    }>;
  };
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items */
  mainNavItems: [
    {
      text: "RECOMENDADOR DE TARJETAS",
      href: "/recomendador-de-tarjetas-de-credito-p1",
    },
    {
      text: "BLOG",
      href: "/blog",
    },
    {
      text: "NOSOTROS",
      href: "/nosotros",
    },
    {
      text: "CONTÁCTANOS",
      href: "/contactanos",
    },
  ],

  /** Categories dropdown */
  categoryDropdown: {
    text: "CATEGORÍAS",
    items: [
      {
        text: "Soluciones Financieras", // Main MOFU category
        href: "/soluciones-financieras",
      },
      {
        text: "Tarjetas", // Specific MOFU sub-category
        href: "/tarjetas", // Link to new dedicated page
      },
      {
        text: "Préstamos Personales", // Specific MOFU sub-category
        href: "/prestamos", // Link to new dedicated page
      },
      {
        text: "Finanzas Personales", // TOFU category
        href: "/finanzas-personales",
      },
      {
        text: "Recomendador de Tarjetas", // Tool
        href: "/recomendador-de-tarjetas-de-credito-p1",
      },
    ],
  },

  /** Blog megamenu - Updated with limited items and "Show more..." */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      // Column 1: Personal Finance Guides (Top 5 + Show more)
      {
        title: "Finanzas Personales",
        items: [
          {
            text: cleanTitle("Los Mejores Préstamos Personales"),
            href: "/finanzas-personales/best-personal-loans",
          },
          {
            text: cleanTitle("Tarjetas de Crédito con Recompensas"),
            href: "/finanzas-personales/best-rewards-credit-cards",
          },
          {
            text: cleanTitle("Las Mejores Tarjetas con Cashback"),
            href: "/finanzas-personales/cashback-credit-cards",
          },
          {
            text: cleanTitle("Tarjetas de Crédito: Tipos y Beneficios"),
            href: "/finanzas-personales/credit-card-types-benefits",
          },
          {
            text: cleanTitle("Guía Práctica para Salir de Deudas"),
            href: "/finanzas-personales/getting-out-of-debt",
          },
          {
            text: "Ver más...",
            href: "/finanzas-personales",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 2: Financial Solutions - Credit Cards (Top 5 + Show more)
      {
        title: "Tarjetas",
        items: [
          {
            text: cleanTitle("Barclaycard Avios Plus"),
            href: "/soluciones-financieras/barclaycard-avios-plus",
          },
          {
            text: cleanTitle("Curve Credit Card"),
            href: "/soluciones-financieras/curve-credit-card",
          },
          {
            text: cleanTitle("Halifax World Elite Mastercard"),
            href: "/soluciones-financieras/halifax-world-elite-mastercard",
          },
          {
            text: cleanTitle("Lloyds Bank Credit Card"),
            href: "/soluciones-financieras/lloyds-bank-credit-card",
          },
          {
            text: cleanTitle("Monzo Credit Card"),
            href: "/soluciones-financieras/monzo-credit-card",
          },
          {
            text: "Ver más...",
            href: "/soluciones-financieras",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
      // Column 3: Financial Solutions - Loans (Top 5 + Show more)
      {
        title: "Préstamos",
        items: [
          {
            text: cleanTitle("Barclays Personal Loan"),
            href: "/soluciones-financieras/barclays-personal-loan",
          },
          {
            text: cleanTitle("Capify Business Finance"),
            href: "/soluciones-financieras/capify-personal-loan",
          },
          {
            text: cleanTitle("Fleximize Business Loans"),
            href: "/soluciones-financieras/fleximize-personal-loan",
          },
          {
            text: cleanTitle("Funding Circle Business Loan"),
            href: "/soluciones-financieras/funding-circle-personal-loan",
          },
          {
            text: cleanTitle("Funding Options Marketplace"),
            href: "/soluciones-financieras/funding-options-personal-loan",
          },
          {
            text: "Ver más...",
            href: "/soluciones-financieras",
            isEmphasis: true,
          }, // Link to category archive
        ],
      },
    ],
    // Featured Posts Section - Remains the same
    featuredPosts: {
      title: "Artículos Destacados",
      posts: [
        {
          title: cleanTitle("Los Mejores Préstamos Personales"),
          href: "/finanzas-personales/best-personal-loans",
          image:
            "https://media.topfinanzas.com/images/best-personal-loans.webp",
          category: "Finanzas Personales",
          categoryHref: "/finanzas-personales",
        },
        {
          title: cleanTitle("Guía Práctica para Salir de Deudas"),
          href: "/finanzas-personales/getting-out-of-debt",
          image:
            "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
          category: "Finanzas Personales",
          categoryHref: "/finanzas-personales",
        },
        {
          title: cleanTitle("Tarjeta Barclaycard Avios Plus"),
          href: "/soluciones-financieras/barclaycard-avios-plus",
          image:
            "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
          category: "Tarjetas",
          categoryHref: "/soluciones-financieras",
        },
        {
          title: cleanTitle("Préstamo Personal HSBC"),
          href: "/soluciones-financieras/hsbc-personal-loan",
          image:
            "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
          category: "Préstamos",
          categoryHref: "/soluciones-financieras",
        },
      ],
    },
  },
};
