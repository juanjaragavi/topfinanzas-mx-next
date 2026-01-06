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
      { text: "Soluciones Financieras", href: "/soluciones-financieras" },
      { text: "Finanzas Personales", href: "/finanzas-personales" },
      { text: "Tarjetas", href: "/tarjetas" },
      { text: "Préstamos", href: "/prestamos" },
    ],
    featuredPosts: [
      {
        title: "Finanzas Personales en Quincena: Qué Hacer y Qué Evitar",
        href: "/finanzas-personales/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo",
        image:
          "https://media.topfinanzas.com/images/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo.webp",
        category: "FINANZAS PERSONALES",
      },
      {
        title: "10 Reglas de Oro Para Una Vida Sin Estrés Financiero",
        href: "/finanzas-personales/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero",
        image:
          "https://media.topfinanzas.com/images/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero.png",
        category: "FINANZAS PERSONALES",
      },
      {
        title: "Ahorro Inteligente: Estrategias para Impulsar tu Dinero",
        href: "/finanzas-personales/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero",
        image:
          "https://media.topfinanzas.com/images/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero.webp",
        category: "AHORRO INTELIGENTE",
      },
      {
        title: "Inversión Inteligente en México: Cómo Hacer Crecer tu Dinero",
        href: "/finanzas-personales/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero",
        image:
          "https://media.topfinanzas.com/images/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero.jpg",
        category: "INVERSIÓN",
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
            text: "Mejores Préstamos Personales",
            href: "/prestamos",
          },
          {
            text: "Guía para Salir de Deudas",
            href: "/finanzas-personales",
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
            text: "Mejores Tarjetas de Crédito",
            href: "/tarjetas",
          },
          {
            text: "Ver más...",
            href: "/tarjetas",
            isEmphasis: true,
          },
        ],
      },
      {
        title: "Préstamos",
        items: [
          {
            text: "Mejores Préstamos Personales",
            href: "/prestamos",
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
          title: "Mejores Préstamos Personales",
          href: "/prestamos",
          image:
            "https://media.topfinanzas.com/images/best-personal-loans.webp",
          category: "Finanzas Personales",
          categoryHref: "/finanzas-personales",
        },
        {
          title: "Guía para Salir de Deudas",
          href: "/finanzas-personales",
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
