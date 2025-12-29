"use client";

import { BlogLayout } from "@/components/mdx/blog-layout";
import { LatestPosts } from "@/components/blog/latest-posts";
import { useState, useEffect } from "react";

// Define the structure for each post item
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  date?: string; // Optional date
  category: string; // Add category for filtering
}

// Define filter categories
const categories = {
  all: "Todos",
  creditCards: "Tarjetas",
  loans: "Préstamos",
  debt: "Deuda",
  guide: "Guías",
};

export default function PersonalFinanceArchivePage() {
  // State for active category filter - with client-side initialization via useEffect
  const [activeCategory, setActiveCategory] = useState("all");

  // Force client-side state initialization to ensure React hydration
  useEffect(() => {
    // Keep the default value but force client-side initialization
    setActiveCategory("all");
  }, []);
  // Array of all posts in this category
  const allPosts: PostItem[] = [
    {
      title:
        "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday? | Top Finanzas MX",
      slug: "cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday",
      description:
        "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
      image:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
      date: "29 December 2025",
      category: "guide",
    },
    {
      title:
        "Cómo Rasterar tus Gastos por 30 Días y Saber a Dónde Va tu Dinero | Top Finanzas MX",
      slug: "how-to-track-your-spending-for-30-days",
      description:
        "Deja de adivinar sobre tus finanzas. Aprende un método sencillo de seguimiento de gastos de 30 días para descubrir a dónde va realmente tu dinero y crear hábitos duraderos.",
      image:
        "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
      date: "2 December 2025",
      category: "guide",
    },
    {
      title:
        "La Psicología del Gasto: Cómo Detener las Compras Impulsivas | Top Finanzas MX",
      slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
      description:
        "Descubra por qué compramos por impulso y aprenda estrategias prácticas para dominar su mentalidad de dinero. Empiece a ahorrar de forma consciente hoy mismo.",
      image:
        "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
      date: "25 November 2025",
      category: "guide",
    },
    {
      title:
        'Automatiza tu Riqueza: Sistema de Finanzas "Configúralo y Olvídalo" | Top Finanzas MX',
      slug: "automate-your-wealth",
      description:
        'Aprenda cómo automatizar sus finanzas con nuestro sistema "Configúralo y olvídalo". Ahorre tiempo, reduzca el estrés y genere riqueza sin esfuerzo.',
      image:
        "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
      date: "19 November 2025",
      category: "guide",
    },
    {
      title:
        "Deja de Vivir de Quincena en Quincena: 3 Cambios para Romper el Ciclo | Top Finanzas MX",
      slug: "stop-living-paycheck-to-paycheck",
      description:
        "Escapa del ciclo de vivir al día con tres cambios prácticos en el flujo de caja. Aprende cómo las familias están construyendo un respiro sin sacrificios dramáticos.",
      image:
        "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
      date: "13 November 2025",
      category: "guide",
    },
    {
      title:
        "Chequeo de Salud Financiera: ¿A Dónde se Va tu Dinero? | Top Finanzas MX",
      slug: "financial-health-check-where-does-your-money-go",
      description:
        "Descubra a dónde va realmente su dinero con nuestro rápido chequeo de salud financiera. Aprenda métodos sencillos de seguimiento que revelan patrones de gasto.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
      date: "5 November 2025",
      category: "guide",
    },
    {
      title:
        "Los Costos Ocultos de Ser Propietario de una Casa | Top Finanzas MX",
      slug: "hidden-costs-of-homeownership",
      description:
        "Descubra los gastos inesperados que sorprenden a los propietarios de viviendas. Desde el mantenimiento hasta los seguros, aprenda a presupuestar los costos ocultos.",
      image:
        "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
      date: "28 October 2025",
      category: "guide",
    },
    {
      title:
        "Protege tu Vida de la Inflación: 7 Movimientos de Dinero Inteligentes | Top Finanzas MX",
      slug: "inflation-proof-your-life",
      description:
        "Descubra siete estrategias prácticas para proteger su poder adquisitivo durante la alta inflación. Aprenda a eliminar fugas de gastos y construir fondos de emergencia.",
      image:
        "https://media.topfinanzas.com/images/inflation-proof-your-life-7-smart-money-moves.webp",
      date: "15 October 2025",
      category: "guide",
    },

    {
      title: "¿Qué es la Salud Financiera? Una Guía Rápida | Top Finanzas MX",
      slug: "what-is-financial-health",
      description:
        "Una guía sencilla para revisar tus signos vitales de dinero: flujo de caja, ahorros, préstamos y hábitos. Pasos para mejorar tu salud financiera.",
      image:
        "https://media.topfinanzas.com/images/uk/what-is-financial-health.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Gestión de Dinero para Principiantes: ¿Dónde Empiezo? | Top Finanzas MX",
      slug: "money-management-for-beginners",
      description:
        "¿Nuevo en finanzas personales? Aprende pasos sencillos para presupuestar, ahorrar, gestionar deudas y crear hábitos de dinero duraderos.",
      image:
        "https://media.topfinanzas.com/images/uk/money-management-for-beginners.webp",
      date: "13 August 2025",
      category: "guide",
    },
    {
      title:
        "Estableciendo Metas Financieras: Guía para Principiantes | Top Finanzas MX",
      slug: "setting-financial-goals",
      description:
        "Aprende cómo establecer metas financieras SMART, alinear tu presupuesto y crear hábitos que funcionen. Guía sencilla de finanzas personales.",
      image:
        "https://media.topfinanzas.com/images/uk/setting-financial-goals.webp",
      date: "15 August 2025",
      category: "guide",
    },
    {
      title:
        "¿Side Hustle o Segundo Trabajo? Cómo Elegir el Impulsor de Ingresos Adecuado",
      slug: "side-hustle-or-second-job",
      description:
        "Con el aumento del costo de vida, muchos buscan formas de aumentar sus ingresos. Ya sea un segundo trabajo tradicional o un emprendimiento paralelo, elegir correctamente es clave.",
      image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
      date: "27 August 2025",
      category: "guide",
    },
    {
      title:
        "Crea un Presupuesto de Finanzas Personales que Realmente Funcione | Top Finanzas MX",
      slug: "creating-a-budget-youll-actually-stick-to",
      description:
        "Una guía de presupuesto moderna que cubre la regla 50/30/20, presupuesto base cero y herramientas digitales para ayudarte a mantenerlo.",
      image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
      date: "4 September 2025",
      category: "guide",
    },
    {
      title:
        "¿Qué es la 'Inflación del Estilo de Vida' y Cómo está Drenando tu Cartera en Silencio? | Top Finanzas MX",
      slug: "what-is-lifestyle-creep",
      description:
        "Descubra cómo el aumento gradual de sus gastos al ganar más dinero puede sabotear sus metas financieras y aprenda estrategias para evitarlo.",
      image:
        "https://media.topfinanzas.com/images/lifestyle-creep-finanzas-personales.webp",
      date: "9 October 2025",
      category: "guide",
    },
    {
      title:
        "Desvinculación Financiera: Una Guía Compasiva para Separar Finanzas durante una Ruptura | Top Finanzas MX",
      slug: "financial-uncoupling-separating-finances-during-breakup",
      description:
        "Guía práctica sobre cómo separar cuentas conjuntas, gestionar deudas compartidas y proteger su crédito después de una relación.",
      image:
        "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
      date: "23 October 2025",
      category: "guide",
    },
    // Add other posts here as needed
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
  const sortedPosts = [...allPosts].sort(
    (a, b) => parseDate(b.date || "") - parseDate(a.date || ""),
  );

  // Filter posts based on the selected category
  const filteredPosts =
    activeCategory === "all"
      ? sortedPosts
      : sortedPosts.filter((post) => post.category === activeCategory);

  const content = (
    <div data-category="finanzas-personales">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Guías de Finanzas Personales
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Explora nuestras guías sobre tarjetas de crédito, préstamos, gestión de
        deudas y otros temas de finanzas personales para ayudarte a tomar
        decisiones informadas.
      </p>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of filtered posts */}
      <LatestPosts
        posts={filteredPosts.map((post) => ({
          ...post,
          excerpt: post.description,
          category: "finanzas-personales",
        }))}
        title=""
      />
    </div>
  );

  // Metadata for the archive page itself
  const pageMetadata = {
    title: "Guías de Finanzas Personales | TopFinanzas MX",
    description:
      "Explora guías sobre tarjetas de crédito, préstamos, gestión de deudas y otros temas de finanzas personales en México.",
  };

  return <BlogLayout metadata={pageMetadata}>{content}</BlogLayout>;
}
