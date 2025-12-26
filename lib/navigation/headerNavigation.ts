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

// Custom interface for the new Categories Mega Menu
export interface CategoriesMegaMenu {
  text: string;
  sidebarItems: NavigationItem[];
  featuredPosts: Array<{
    title: string;
    href: string;
    image: string;
    category: string; // e.g. "AHORRO INTELIGENTE"
  }>;
}

// Helper function to clean titles (remove potential pipe and extra text)
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export const headerNavigation = {
  /** Main navigation items - Desktop (Matches Legacy) */
  mainNavItems: [
    {
      text: "PRÉSTAMOS",
      href: "/prestamos",
    },
    {
      text: "TARJETAS DE CRÉDITO",
      href: "/tarjetas",
    },
  ],

  /** Categories Mega Menu - Desktop */
  categoriesMegaMenu: {
    text: "CATEGORÍAS",
    sidebarItems: [
      { text: "Ahorro inteligente", href: "/ahorro" },
      { text: "Deuda cero", href: "/deuda" },
      { text: "Elige tu tarjeta", href: "/tarjetas" },
      { text: "Finanzas para el hogar", href: "/finanzas-hogar" },
      { text: "Finanzas para estudiantes", href: "/estudiantes" },
      { text: "Finanzas para pymes", href: "/pymes" },
      { text: "Finanzas para todos", href: "/finanzas-para-todos" },
    ],
    featuredPosts: [
      {
        title: "Guía para Ahorrar Dinero Rápidamente",
        href: "/ahorro/guia-ahorro-rapido",
        image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
        category: "AHORRO INTELIGENTE",
      },
      {
        title: "Cómo Salir de Deudas: Estrategias Efectivas",
        href: "/deuda/salir-de-deudas",
        image:
          "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
        category: "DEUDA CERO",
      },
      {
        title: "Mejores Tarjetas de Crédito para Viajes",
        href: "/tarjetas/mejores-tarjetas-viajes",
        image:
          "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
        category: "ELIGE TU TARJETA",
      },
      {
        title: "Presupuesto Familiar: Guía Paso a Paso",
        href: "/finanzas-hogar/presupuesto-familiar",
        image:
          "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
        category: "FINANZAS PARA EL HOGAR",
      },
    ],
  },

  /** Blog megamenu - Kept for reference or mobile structure if needed */
  blogMegaMenu: {
    title: "BLOG",
    columns: [
      {
        title: "Finanzas Personales",
        items: [
          {
            text: cleanTitle("Los Mejores Préstamos Personales"),
            href: "/finanzas-personales/best-personal-loans",
          },
          {
            text: cleanTitle("Guía Práctica para Salir de Deudas"),
            href: "/finanzas-personales/getting-out-of-debt",
          },
          {
            text: "Ver más...",
            href: "/finanzas-personales",
            isEmphasis: true,
          },
        ],
      },
      {
        title: "Tarjetas",
        items: [
          {
            text: cleanTitle("Barclaycard Avios Plus"),
            href: "/soluciones-financieras/barclaycard-avios-plus",
          },
          {
            text: "Ver más...",
            href: "/soluciones-financieras",
            isEmphasis: true,
          },
        ],
      },
      {
        title: "Préstamos",
        items: [
          {
            text: cleanTitle("Préstamo Personal HSBC"),
            href: "/soluciones-financieras/hsbc-personal-loan",
          },
          {
            text: "Ver más...",
            href: "/soluciones-financieras",
            isEmphasis: true,
          },
        ],
      },
    ],
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
      ],
    },
  },
  /** Categories dropdown - Kept for Mobile compatibility */
  categoryDropdown: {
    text: "CATEGORÍAS",
    items: [
      {
        text: "Soluciones Financieras",
        href: "/soluciones-financieras",
      },
      {
        text: "Tarjetas",
        href: "/tarjetas",
      },
      {
        text: "Préstamos Personales",
        href: "/prestamos",
      },
      {
        text: "Finanzas Personales",
        href: "/finanzas-personales",
      },
    ],
  },
};
