export interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Finanzas Personales" | "Soluciones Financieras" | "guide";
  categoryPath: string;
  date?: string;
  type?: string;
  subCategory?: "creditCards" | "loans";
}

export const ALL_POSTS: PostItem[] = [
  // New Post
  {
    title:
      "Finanzas Personales: Tu Guía Esencial para la Salud Financiera en México | Top Finanzas MX",
    slug: "finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico",
    description:
      "¿Alguna vez sientes que tu dinero tiene vida propia? Descubre cómo tomar el control de tus finanzas personales con esta guía esencial para México.",
    image:
      "https://media.topfinanzas.com/images/finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "23 July 2025",
  },
  {
    title:
      "Guía para Principiantes: Cómo Crear un Presupuesto que Sí Funciona | Top Finanzas MX",
    slug: "guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona",
    description:
      "Aprende a crear tu primer presupuesto paso a paso con esta guía para principiantes. Toma el control de tu dinero y construye un futuro financiero sólido.",
    image:
      "https://media.topfinanzas.com/images/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona.jpeg",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "13 August 2025",
  },
  {
    title:
      "Los 5 Errores Financieros Más Comunes que Debes Evitar a tus 20s | Top Finanzas MX",
    slug: "los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s",
    description:
      "Descubre los errores financieros más comunes en los 20s y aprende cómo evitarlos para construir un futuro financiero sólido desde joven.",
    image:
      "https://media.topfinanzas.com/images/los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s.jpeg",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "15 August 2025",
  },
  {
    title:
      "¿Recibiste un Aumento? Movimientos Inteligentes para tus Finanzas Personales | Top Finanzas MX",
    slug: "recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales",
    description:
      "Recibir un aumento es un gran logro. Descubre cómo evitar la inflación del estilo de vida y hacer que tu dinero extra trabaje para ti a largo plazo.",
    image:
      "https://media.topfinanzas.com/images/recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales.jpeg",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "22 August 2025",
  },
  {
    title:
      "La Forma Inteligente de Salir de Deudas (y no Volver a Caer) | Top Finanzas MX",
    slug: "la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer",
    description:
      "Salir de deudas no se trata de trucos mágicos, sino de tener un plan claro. Descubre cómo tomar el control de tu dinero y construir un futuro libre de deudas.",
    image:
      "https://media.topfinanzas.com/images/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer.jpeg",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "27 August 2025",
  },
  {
    title:
      "¿Qué es el score crediticio y por qué es tan importante? | Top Finanzas MX",
    slug: "que-es-el-score-crediticio-y-por-que-es-tan-importante",
    description:
      "Escucharás hablar mucho sobre un número clave de tres dígitos: tu score crediticio. Entenderlo es uno de los pilares más importantes de tus finanzas personales.",
    image:
      "https://media.topfinanzas.com/images/que-es-el-score-crediticio-y-por-que-es-tan-importante.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 August 2025",
  },
  {
    title:
      "¿Qué es un Fondo de Emergencia y Por Qué es Clave para tu Tranquilidad? | Top Finanzas MX",
    slug: "que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad",
    description:
      "El Fondo de Emergencia es una de las primeras y más importantes lecciones de finanzas. Descubre qué es, por qué es importante y cómo construirlo.",
    image:
      "https://media.topfinanzas.com/images/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "03 September 2025",
  },
  {
    title:
      "La magia del interés compuesto: Cómo hacer que tu dinero crezca solo | Top Finanzas MX",
    slug: "la-magia-del-interes-compuesto-como-hacer-que-tu-dinero-crezca-solo",
    description:
      "Esta guía está pensada para ti, que estás dando tus primeros pasos en el mundo laboral, para que entiendas los conceptos básicos de las finanzas personales y uses esta «magia» a tu favor desde el primer día.",
    image:
      "https://media.topfinanzas.com/images/la-magia-del-interes-compuesto-como-hacer-que-tu-dinero-crezca-solo.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "5 tipos de apps que te ayudarán a administrar mejor tu dinero | Top Finanzas MX",
    slug: "5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero",
    description:
      "La tecnología es tu mejor aliada para iniciar tu vida financiera con el pie derecho. En este artículo, te mostraremos 5 tipos de apps que te ayudarán a tomar el control de tu dinero.",
    image:
      "https://media.topfinanzas.com/images/5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "Las Mejores Tarjetas de Crédito con Cashback en México: Guía Definitiva | Top Finanzas MX",
    slug: "las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva",
    description:
      "Las tarjetas con cashback se han convertido en una herramienta de finanzas personales increíblemente popular. No son puntos, no son millas, es dinero real que regresa a tu bolsillo.",
    image:
      "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "3 Tarjetas de Crédito sin Anualidad, Populares en México | Top Finanzas MX",
    slug: "3-tarjetas-de-credito-sin-anualidad-populares-en-mexico",
    description:
      "La idea de pagar una cuota anual solo por tener la Tarjeta de crédito puede ser un gran desmotivante. ¡La buena noticia es que no tienes que hacerlo! en esta guía te decimos cómo.",
    image:
      "https://media.topfinanzas.com/images/3-tarjetas-de-credito-sin-anualidad-populares-en-mexico.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday? | Top Finanzas MX",
    slug: "cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday",
    description:
      "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
    image:
      "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "Deuda Buena vs. Deuda Mala: Aprende a Diferenciarlas | Top Finanzas MX",
    slug: "deuda-buena-vs-deuda-mala-aprende-a-diferenciarlas",
    description:
      "Entender la diferencia entre deuda «buena» y deuda «mala» es una de las lecciones más valiosas para tomar el control de tu dinero.",
    image:
      "https://media.topfinanzas.com/images/deuda-buena-vs-deuda-mala-aprende-a-diferenciarlas.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "¿Tuyo, Mío o Nuestro? Cómo Unir Finanzas Estratégicamente Después de Casarse (o Mudarse Juntos) | Top Finanzas MX",
    slug: "tuyo-mio-o-nuestro-como-unir-finanzas-estrategicamente-despues-de-casarse-o-mudarse-juntos",
    description:
      "Irse a vivir con tu pareja o casarse es un paso gigante y emocionante. Están uniendo sus vidas, sus muebles y hasta sus playlists. Pero, ¿qué pasa con el dinero? Para muchos, sobre todo si apenas están empezando su carrera con su primer trabajo, hablar de finanzas puede parecer un campo minado.",
    image:
      "https://media.topfinanzas.com/images/tuyo-mio-o-nuestro-como-unir-finanzas-estrategicamente-despues-de-casarse-o-mudarse-juntos.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "Las Mejores Tarjetas de Crédito para Aprovechar el Black Friday en México | Top Finanzas MX",
    slug: "las-mejores-tarjetas-de-credito-para-aprovechar-el-black-friday-en-mexico",
    description:
      "Es clave saber cómo usar la tarjeta de crédito en Black Friday para que se convierta en tu mejor aliada y no en un dolor de cabeza financiero.",
    image:
      "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-aprovechar-el-black-friday-en-mexico.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  // Personal Finance - Latest Articles
  {
    title:
      "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday? | Top Finanzas MX",
    slug: "cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday",
    description:
      "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
    image:
      "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "29 December 2025",
  },
  {
    title:
      "Cómo Rasterar tus Gastos por 30 Días y Saber a Dónde Va tu Dinero | Top Finanzas MX",
    slug: "how-to-track-your-spending-for-30-days",
    description:
      "Deja de adivinar sobre tus finanzas. Aprende un método sencillo de seguimiento de gastos de 30 días para descubrir a dónde va realmente tu dinero y crear hábitos duraderos.",
    image:
      "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "2 December 2025",
  },
  {
    title:
      "La Psicología del Gasto: Cómo Detener las Compras Impulsivas | Top Finanzas MX",
    slug: "the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
    description:
      "Descubra por qué compramos por impulso y aprenda estrategias prácticas para dominar su mentalidad de dinero. Empiece a ahorrar de forma consciente hoy mismo.",
    image:
      "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "25 November 2025",
  },
  {
    title:
      'Automatiza tu Riqueza: Sistema de Finanzas "Configúralo y Olvídalo" | Top Finanzas MX',
    slug: "automate-your-wealth",
    description:
      'Aprenda cómo automatizar sus finanzas con nuestro sistema "Configúralo y olvídalo". Ahorre tiempo, reduzca el estrés y genere riqueza sin esfuerzo con consejos prácticos.',
    image: "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "19 November 2025",
  },
  {
    title:
      "Deja de Vivir de Quincena en Quincena: 3 Cambios para Romper el Ciclo | Top Finanzas MX",
    slug: "stop-living-paycheck-to-paycheck",
    description:
      "Escapa del ciclo de vivir al día con tres cambios prácticos en el flujo de caja. Aprende cómo las familias están construyendo un respiro sin sacrificios dramáticos.",
    image:
      "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "13 November 2025",
  },
  {
    title:
      "Chequeo de Salud Financiera: ¿A Dónde se Va tu Dinero? | Top Finanzas MX",
    slug: "financial-health-check-where-does-your-money-go",
    description:
      "Descubra a dónde va realmente su dinero con nuestro rápido chequeo de salud financiera. Aprenda métodos sencillos de seguimiento que revelan patrones de gasto.",
    image:
      "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "5 November 2025",
  },
  {
    title:
      "Los Costos Ocultos de Ser Propietario de una Vivienda que Nadie te Cuenta | Top Finanzas MX",
    slug: "hidden-costs-of-homeownership",
    description:
      "Descubra los gastos inesperados que sorprenden a los propietarios de viviendas. Desde el mantenimiento hasta los seguros, aprenda a presupuestar los costos ocultos.",
    image:
      "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
    date: "28 October 2025",
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
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    title: "¿Qué es la Salud Financiera? Una Guía Rápida | Top Finanzas MX",
    slug: "what-is-financial-health",
    description:
      "Una guía sencilla para revisar tus signos vitales de dinero: flujo de caja, ahorros, préstamos y hábitos. Pasos para mejorar tu salud financiera.",
    image:
      "https://media.topfinanzas.com/images/uk/what-is-financial-health.webp",
    date: "13 August 2025",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
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
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
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
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    title:
      "¿Side Hustle o Segundo Trabajo? Cómo Elegir el Impulsor de Ingresos Adecuado",
    slug: "side-hustle-or-second-job",
    description:
      "Con el aumento del costo de vida, muchos buscan formas de aumentar sus ingresos. Ya sea un segundo trabajo tradicional o un emprendimiento paralelo, elegir correctamente es clave.",
    image: "https://media.topfinanzas.com/images/side-hustle-second-job.webp",
    date: "27 August 2025",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  {
    title:
      "Crea un Presupuesto de Finanzas Personales que Realmente Funcione | Top Finanzas MX",
    slug: "creating-a-budget-youll-actually-stick-to",
    description:
      "Una guía de presupuesto moderna que cubre la regla 50/30/20, presupuesto base cero y herramientas digitales para ayudarte a mantenerlo.",
    image: "https://media.topfinanzas.com/images/uk/modern-budget-guide.webp",
    date: "4 September 2025",
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
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
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
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
    category: "Finanzas Personales",
    categoryPath: "/finanzas-personales",
  },
  // Financial Solutions - Credit Cards
  {
    title: "Beneficios de la tarjeta de crédito HSBC Viva",
    slug: "tarjeta-de-credito-hsbc-viva",
    description:
      "Conoce la Tarjeta de Crédito HSBC Viva: sin anualidad, cashback en compras, meses sin intereses y acceso a promociones exclusivas.",
    image: "https://media.topfinanzas.com/images/TC_HSBC_VIVA_requisitos.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la Tarjeta de Crédito Joy Banamex",
    slug: "tarjeta-simplicity-citibanamex",
    description:
      "Conoce todo sobre la tarjeta Joy Banamex (antes Simplicity): sin anualidad, seguridad sin números impresos y gestión total desde la app.",
    image: "https://media.topfinanzas.com/images/foto2-1024x536.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción",
    slug: "tarjeta-de-credito-azul-bbva",
    description:
      "La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos usuarios del crédito como para compradores y viajeros frecuentes.",
    image: "https://media.topfinanzas.com/images/download-5-2.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "NuBank: La tarjeta de crédito ideal para ti",
    slug: "guia-tarjeta-de-credito-nu-bank",
    description:
      "La Tarjeta de Crédito NuBank, conocida por su accesibilidad y transparencia, se adapta a cualquier estilo de vida.",
    image: "https://media.topfinanzas.com/images/download-9-1.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "neobank",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la tarjeta de crédito BBVA Oro",
    slug: "analisis-tarjeta-de-credito-bbva-oro",
    description:
      "La tarjeta de crédito BBVA Oro es una opción de alto nivel que ofrece múltiples beneficios a los usuarios que buscan maximizar sus compras y disfrutar de ventajas exclusivas.",
    image: "https://media.topfinanzas.com/images/bbva-oro.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la Tarjeta de Crédito Banregio Platinum",
    slug: "banregio-platinum-analisis",
    description:
      "Conoce en esta guía un análisis de la tarjeta de crédito Banregio Platinum y aprende si es la ideal para tu estilo de vida.",
    image: "https://media.topfinanzas.com/images/download-1-1024x536.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la Gold Card American Express® Aeroméxico",
    slug: "gold-card-american-express-aeromexico",
    description:
      "Descubre los beneficios de la Gold Card American Express Aeroméxico: acumula Puntos Premier, acceso a Salas Premier y seguros de viaje exclusivos.",
    image: "https://media.topfinanzas.com/images/download-4-1.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la RappiCard",
    slug: "rappicard",
    description:
      "Descubre los beneficios de la RappiCard: sin anualidad, cashback en todas tus compras y gestión 100% digital. ¡Solicítala hoy mismo!",
    image: "https://media.topfinanzas.com/images/rappicard-1.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "neobank",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la tarjeta Aeroméxico Santander",
    slug: "tarjeta-de-credito-aeromexico-santander",
    description:
      "Las tarjetas de crédito Aeroméxico Santander son una excelente opción para los viajeros frecuentes. Conoce sus beneficios, requisitos y características.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la tarjeta de crédito Crecy",
    slug: "tarjeta-de-credito-crecy",
    description:
      "Descubre los beneficios de la tarjeta Crecy: crédito con criptomonedas, sin buró y liquidez sin vender tus activos.",
    image: "https://media.topfinanzas.com/images/crecy-1-1.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "fintech",
    subCategory: "creditCards",
  },
  {
    title: "LikeU de Santander: innovación en tus manos",
    slug: "tarjeta-de-credito-likeu-de-santander",
    description:
      "Descubre la tarjeta de crédito LikeU de Santander: personalizable, sin anualidad, con cashback y seguridad avanzada. ¡Solicítala hoy!",
    image: "https://media.topfinanzas.com/images/download-1-3.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la tarjeta de Crédito Platinum American Express",
    slug: "tarjeta-de-credito-platinum-american-express",
    description:
      "La Tarjeta Platinum American Express ofrece acceso a salones VIP, concierge 24/7, puntos Membership Rewards y seguros de viaje completos.",
    image: "https://media.topfinanzas.com/images/download-7-min.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios de la Tarjeta de Crédito Tigres Afirme",
    slug: "tarjeta-de-credito-tigres-afirme",
    description:
      "Descubre los beneficios, requisitos y costos de la Tarjeta de Crédito Tigres Afirme: puntos Bonus, meses sin intereses, anualidad y tasa de interés.",
    image: "https://media.topfinanzas.com/images/download-6-1.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Beneficios y características de la Tarjeta HSBC Air",
    slug: "tarjeta-hsbc-air",
    description:
      "Descubre los beneficios de la Tarjeta HSBC Air: tasa de interés baja, meses sin intereses automáticos y transferencia de saldos.",
    image: "https://media.topfinanzas.com/images/HSBC-Air-1.jpg",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "HSBC Zero: Ahorra en comisiones y maximiza tus recompensas",
    slug: "tarjeta-hsbc-zero",
    description:
      "La Tarjeta HSBC Zero ofrece libertad financiera con cero comisiones anuales, programa de recompensas y promociones exclusivas. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/download-4-2.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "traditional",
    subCategory: "creditCards",
  },
  {
    title: "Tarjeta Plata Card: maximiza cada compra",
    slug: "tarjeta-plata-card",
    description:
      "La Tarjeta de Crédito Plata ofrece hasta 15% de cashback, límite de crédito de hasta $200,000 y meses sin intereses. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/download-1-2.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "fintech",
    subCategory: "creditCards",
  },
  {
    title: "Tarjeta de Crédito Stori: Ideal para estudiantes",
    slug: "tarjeta-stori-ventajas-desventajas",
    description:
      "Conoce las ventajas de la tarjeta Stori para estudiantes: sin anualidad, 100% digital, internacional y con detalles financieros como CAT y tasa anual fija.",
    image: "https://media.topfinanzas.com/images/download-15.webp",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "fintech",
    subCategory: "creditCards",
  },
  // Financial Solutions - Loans
  {
    title: "Préstamos Personales Kueski",
    slug: "kueski-prestamos-personales",
    description:
      "Préstamos personales rápidos y seguros con Kueski. Sin aval y 100% en línea.",
    image: "https://media.topfinanzas.com/images/kueski-logo.png",
    category: "Soluciones Financieras",
    categoryPath: "/soluciones-financieras",
    date: "29 December 2025",
    type: "fintech",
    subCategory: "loans",
  },
];
