export type RouteSeoEntry = {
  pathname: string;
  title: string;
  description: string;
  image: string;
  category: "soluciones-financieras" | "finanzas-personales";
  contentType: "credit-card" | "loan" | "financial-product" | "article";
  date?: string;
};

export const ROUTE_SEO_REGISTRY = {
  "/finanzas-personales/3-tarjetas-de-credito-sin-anualidad-populares-en-mexico":
    {
      pathname:
        "/finanzas-personales/3-tarjetas-de-credito-sin-anualidad-populares-en-mexico",
      title: "3 Tarjetas de Crédito sin Anualidad, Populares en México",
      description:
        "La idea de pagar una cuota anual solo por tener la Tarjeta de crédito puede ser un gran desmotivante. ¡La buena noticia es que no tienes que hacerlo! en esta guía te decimos cómo.",
      image:
        "https://media.topfinanzas.com/images/3-tarjetas-de-credito-sin-anualidad-populares-en-mexico.png",
      category: "finanzas-personales",
      contentType: "credit-card",
      date: "29 December 2025",
    },
  "/finanzas-personales/5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero":
    {
      pathname:
        "/finanzas-personales/5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero",
      title: "5 tipos de apps que te ayudarán a administrar mejor tu dinero",
      description:
        "La tecnología es tu mejor aliada para iniciar tu vida financiera con el pie derecho. En este artículo, te mostraremos 5 tipos de apps que te ayudarán a tomar el control de tu dinero.",
      image:
        "https://media.topfinanzas.com/images/5-tipos-de-apps-que-te-ayudaran-a-administrar-mejor-tu-dinero.png",
      category: "finanzas-personales",
      contentType: "article",
      date: "29 December 2025",
    },
  "/finanzas-personales/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero":
    {
      pathname:
        "/finanzas-personales/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero",
      title:
        "Ahorro Inteligente: Estrategias de Finanzas Personales para Impulsar tu Dinero",
      description:
        "En el panorama financiero actual, simplemente ganar dinero no es suficiente para asegurar tu futuro. Aprender a ahorrar de manera inteligente es una habilidad crucial que fortalece tus finanzas personales.",
      image:
        "https://media.topfinanzas.com/images/ahorro-inteligente-estrategias-de-finanzas-personales-para-impulsar-tu-dinero.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "17 July 2025",
    },
  "/finanzas-personales/aumento-de-sueldo-la-guia-definitiva-de-finanzas-personales-para-no-malgastar-tu-dinero":
    {
      pathname:
        "/finanzas-personales/aumento-de-sueldo-la-guia-definitiva-de-finanzas-personales-para-no-malgastar-tu-dinero",
      title:
        "Aumento de Sueldo: La Guía Definitiva de Finanzas Personales para No Malgastar tu Dinero",
      description:
        "¡Felicidades! Has trabajado duro y finalmente llegó la noticia que esperabas: un aumento de sueldo. Esta guía te ayudará a tomar las mejores decisiones para que tu aumento se traduzca en verdadero bienestar financiero a largo plazo.",
      image:
        "https://media.topfinanzas.com/images/aumento-de-sueldo-la-guia-definitiva-de-finanzas-personales-para-no-malgastar-tu-dinero.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "18 June 2025",
    },
  "/finanzas-personales/cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday":
    {
      pathname:
        "/finanzas-personales/cashback-vs-puntos-que-programa-de-recompensas-te-conviene-mas-para-el-black-friday",
      title:
        "Cashback vs. Puntos: ¿Qué programa de recompensas te conviene más para el Black Friday?",
      description:
        "En esta guía, desglosamos cada opción: Cashback vs. Puntos para que tomes la mejor decisión para tu bolsillo en Black Friday.",
      image:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
      category: "finanzas-personales",
      contentType: "article",
      date: "29 December 2025",
    },
  "/finanzas-personales/cat-en-tarjetas-de-credito": {
    pathname: "/finanzas-personales/cat-en-tarjetas-de-credito",
    title: "¿Qué es el CAT en Tarjetas de Crédito y por qué es importante?",
    description:
      "Entiende qué es el Costo Anual Total (CAT) en tarjetas de crédito, cómo se calcula y por qué es crucial para tus finanzas personales.",
    image: "https://media.topfinanzas.com/images/download-12-1-820x547.webp",
    category: "finanzas-personales",
    contentType: "credit-card",
  },
  "/finanzas-personales/deuda-buena-vs-deuda-mala-aprende-a-diferenciarlas": {
    pathname:
      "/finanzas-personales/deuda-buena-vs-deuda-mala-aprende-a-diferenciarlas",
    title: "Deuda Buena vs. Deuda Mala: Aprende a Diferenciarlas",
    description:
      "Entender la diferencia entre deuda «buena» y deuda «mala» es una de las lecciones más valiosas para tomar el control de tu dinero.",
    image:
      "https://media.topfinanzas.com/images/deuda-buena-vs-deuda-mala-aprende-a-diferenciarlas.png",
    category: "finanzas-personales",
    contentType: "article",
    date: "29 December 2025",
  },
  "/finanzas-personales/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero":
    {
      pathname:
        "/finanzas-personales/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero",
      title:
        "Finanzas Personales en México: 10 Reglas de Oro Para Una Vida Sin Estrés Financiero",
      description:
        "Llevar una vida financiera saludable es clave para nuestro bienestar general. En México, como en cualquier parte del mundo, entender y aplicar principios básicos de finanzas personales puede marcar la diferencia entre la tranquilidad y el estrés constante.",
      image:
        "https://media.topfinanzas.com/images/finanzas-personales-en-mexico-10-reglas-de-oro-para-una-vida-sin-estres-financiero.png",
      category: "finanzas-personales",
      contentType: "article",
      date: "06 June 2025",
    },
  "/finanzas-personales/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo":
    {
      pathname:
        "/finanzas-personales/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo",
      title:
        "Finanzas Personales en Quincena: Qué Hacer y Qué Evitar con tu Sueldo",
      description:
        "Recibir tu pago es una gran sensación, pero lo que haces después con ese dinero puede impactar significativamente tus finanzas personales. Tomar decisiones inteligentes cuando tu ingreso llega a tu cuenta es crucial para construir un futuro financiero sólido.",
      image:
        "https://media.topfinanzas.com/images/finanzas-personales-en-quincena-que-hacer-y-que-evitar-con-tu-sueldo.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "29 May 2025",
    },
  "/finanzas-personales/finanzas-personales-para-recien-casados-construyendo-su-futuro-financiero-juntos":
    {
      pathname:
        "/finanzas-personales/finanzas-personales-para-recien-casados-construyendo-su-futuro-financiero-juntos",
      title:
        "Finanzas Personales para Recién Casados: Construyendo Su Futuro Financiero Juntos",
      description:
        "Iniciar una vida juntos trae innumerables alegrías y desafíos, pero pocos temas son tan cruciales—o potencialmente estresantes—como manejar las finanzas personales como pareja recién casada o familia nueva.",
      image:
        "https://media.topfinanzas.com/images/finanzas-personales-para-recien-casados-construyendo-su-futuro-financiero-juntos.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "11 June 2025",
    },
  "/finanzas-personales/finanzas-personales-para-recien-casados-y-parejas-nuevas-que-hacer-y-que-evitar":
    {
      pathname:
        "/finanzas-personales/finanzas-personales-para-recien-casados-y-parejas-nuevas-que-hacer-y-que-evitar",
      title:
        "Finanzas Personales para Recién Casados y Parejas Nuevas: Qué Hacer y Qué Evitar",
      description:
        "Casarse o empezar una vida juntos como pareja es una etapa emocionante. Están construyendo un futuro compartido, y ese futuro definitivamente incluye las finanzas. Esta guía les mostrará los «qué hacer» y «qué evitar» esenciales en finanzas personales para recién casados y parejas nuevas.",
      image:
        "https://media.topfinanzas.com/images/finanzas-personales-para-recien-casados-y-parejas-nuevas-que-hacer-y-que-evitar.jpg",
      category: "finanzas-personales",
      contentType: "article",
      date: "25 June 2025",
    },
  "/finanzas-personales/finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico":
    {
      pathname:
        "/finanzas-personales/finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico",
      title:
        "Finanzas Personales: Tu Guía Esencial para la Salud Financiera en México",
      description:
        "¿Alguna vez sientes que tu dinero tiene vida propia? Descubre cómo tomar el control de tus finanzas personales con esta guía esencial para México.",
      image:
        "https://media.topfinanzas.com/images/finanzas-personales-tu-guia-esencial-para-la-salud-financiera-en-mexico.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "23 July 2025",
    },
  "/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona":
    {
      pathname:
        "/finanzas-personales/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona",
      title:
        "Guía para Principiantes: Cómo Crear un Presupuesto que Sí Funciona",
      description:
        "Aprende a crear tu primer presupuesto paso a paso con esta guía para principiantes. Toma el control de tu dinero y construye un futuro financiero sólido.",
      image:
        "https://media.topfinanzas.com/images/guia-para-principiantes-como-crear-un-presupuesto-que-si-funciona.jpeg",
      category: "finanzas-personales",
      contentType: "article",
      date: "13 August 2025",
    },
  "/finanzas-personales/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero":
    {
      pathname:
        "/finanzas-personales/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero",
      title: "Inversión Inteligente en México: Cómo Hacer Crecer tu Dinero",
      description:
        "En el mundo de las finanzas personales, hacer que tu dinero trabaje para ti es tan importante como ganarlo. Descubre cómo invertir de manera inteligente en México.",
      image:
        "https://media.topfinanzas.com/images/inversion-inteligente-en-mexico-como-hacer-crecer-tu-dinero.jpg",
      category: "finanzas-personales",
      contentType: "article",
      date: "02 July 2025",
    },
  "/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer":
    {
      pathname:
        "/finanzas-personales/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer",
      title: "La Forma Inteligente de Salir de Deudas (y no Volver a Caer)",
      description:
        "Salir de deudas no se trata de trucos mágicos, sino de tener un plan claro. Descubre cómo tomar el control de tu dinero y construir un futuro libre de deudas.",
      image:
        "https://media.topfinanzas.com/images/la-forma-inteligente-de-salir-de-deudas-y-no-volver-a-caer.jpeg",
      category: "finanzas-personales",
      contentType: "article",
      date: "27 August 2025",
    },
  "/finanzas-personales/la-magia-del-interes-compuesto-como-hacer-que-tu-dinero-crezca-solo":
    {
      pathname:
        "/finanzas-personales/la-magia-del-interes-compuesto-como-hacer-que-tu-dinero-crezca-solo",
      title:
        "La magia del interés compuesto: Cómo hacer que tu dinero crezca solo",
      description:
        "Esta guía está pensada para ti, que estás dando tus primeros pasos en el mundo laboral, para que entiendas los conceptos básicos de las finanzas personales y uses esta «magia» a tu favor desde el primer día.",
      image:
        "https://media.topfinanzas.com/images/la-magia-del-interes-compuesto-como-hacer-que-tu-dinero-crezca-solo.png",
      category: "finanzas-personales",
      contentType: "article",
      date: "29 December 2025",
    },
  "/finanzas-personales/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva":
    {
      pathname:
        "/finanzas-personales/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva",
      title:
        "Las Mejores Tarjetas de Crédito con Cashback en México: Guía Definitiva",
      description:
        "Las tarjetas con cashback se han convertido en una herramienta de finanzas personales increíblemente popular. No son puntos, no son millas, es dinero real que regresa a tu bolsillo.",
      image:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-con-cashback-en-mexico-guia-definitiva.png",
      category: "finanzas-personales",
      contentType: "credit-card",
      date: "29 December 2025",
    },
  "/finanzas-personales/las-mejores-tarjetas-de-credito-para-aprovechar-el-black-friday-en-mexico":
    {
      pathname:
        "/finanzas-personales/las-mejores-tarjetas-de-credito-para-aprovechar-el-black-friday-en-mexico",
      title:
        "Las Mejores Tarjetas de Crédito para Aprovechar el Black Friday en México",
      description:
        "Es clave saber cómo usar la tarjeta de crédito en Black Friday para que se convierta en tu mejor aliada y no en un dolor de cabeza financiero.",
      image:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-aprovechar-el-black-friday-en-mexico.png",
      category: "finanzas-personales",
      contentType: "credit-card",
      date: "29 December 2025",
    },
  "/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes":
    {
      pathname:
        "/finanzas-personales/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes",
      title:
        "Las Mejores Tarjetas de Crédito para Viajar: Guía para Principiantes",
      description:
        "Si viajar es una de tus prioridades, una tarjeta de crédito especializada puede ser tu mejor aliada. En esta guía, analizaremos los beneficios clave, los costos ocultos que debes vigilar y cómo elegir la tarjeta que realmente se alinee con tu estilo de vida.",
      image:
        "https://media.topfinanzas.com/images/las-mejores-tarjetas-de-credito-para-viajar-guia-para-principiantes.png",
      category: "finanzas-personales",
      contentType: "credit-card",
    },
  "/finanzas-personales/los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s":
    {
      pathname:
        "/finanzas-personales/los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s",
      title: "Los 5 Errores Financieros Más Comunes que Debes Evitar a tus 20s",
      description:
        "Descubre los errores financieros más comunes en los 20s y aprende cómo evitarlos para construir un futuro financiero sólido desde joven.",
      image:
        "https://media.topfinanzas.com/images/los-5-errores-financieros-mas-comunes-que-debes-evitar-a-tus-20s.jpeg",
      category: "finanzas-personales",
      contentType: "article",
      date: "15 August 2025",
    },
  "/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante":
    {
      pathname:
        "/finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante",
      title: "¿Qué es el score crediticio y por qué es tan importante?",
      description:
        "Escucharás hablar mucho sobre un número clave de tres dígitos: tu score crediticio. Entenderlo es uno de los pilares más importantes de tus finanzas personales.",
      image:
        "https://media.topfinanzas.com/images/que-es-el-score-crediticio-y-por-que-es-tan-importante.png",
      category: "finanzas-personales",
      contentType: "credit-card",
      date: "29 August 2025",
    },
  "/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad":
    {
      pathname:
        "/finanzas-personales/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad",
      title:
        "¿Qué es un Fondo de Emergencia y Por Qué es Clave para tu Tranquilidad?",
      description:
        "El Fondo de Emergencia es una de las primeras y más importantes lecciones de finanzas. Descubre qué es, por qué es importante y cómo construirlo.",
      image:
        "https://media.topfinanzas.com/images/que-es-un-fondo-de-emergencia-y-por-que-es-clave-para-tu-tranquilidad.png",
      category: "finanzas-personales",
      contentType: "article",
      date: "03 September 2025",
    },
  "/finanzas-personales/recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales":
    {
      pathname:
        "/finanzas-personales/recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales",
      title:
        "¿Recibiste un Aumento? Movimientos Inteligentes para tus Finanzas Personales",
      description:
        "Recibir un aumento es un gran logro. Descubre cómo evitar la inflación del estilo de vida y hacer que tu dinero extra trabaje para ti a largo plazo.",
      image:
        "https://media.topfinanzas.com/images/recibiste-un-aumento-movimientos-inteligentes-para-tus-finanzas-personales.jpeg",
      category: "finanzas-personales",
      contentType: "article",
      date: "22 August 2025",
    },
  "/finanzas-personales/tarjetas-de-credito-para-estudiantes": {
    pathname: "/finanzas-personales/tarjetas-de-credito-para-estudiantes",
    title: "Las mejores tarjetas de crédito para estudiantes en México",
    description:
      "Descubre las mejores tarjetas de crédito para estudiantes en México. Compara opciones sin historial crediticio, sin anualidad y con beneficios exclusivos.",
    image:
      "https://media.topfinanzas.com/images/Top_Finanzas_Top_tarjeta_de_credito_para_estudiantes-820x547.jpg",
    category: "finanzas-personales",
    contentType: "credit-card",
  },
  "/finanzas-personales/tuyo-mio-o-nuestro-como-unir-finanzas-estrategicamente-despues-de-casarse-o-mudarse-juntos":
    {
      pathname:
        "/finanzas-personales/tuyo-mio-o-nuestro-como-unir-finanzas-estrategicamente-despues-de-casarse-o-mudarse-juntos",
      title:
        "¿Tuyo, Mío o Nuestro? Cómo Unir Finanzas Estratégicamente Después de Casarse (o Mudarse Juntos)",
      description:
        "Irse a vivir con tu pareja o casarse es un paso gigante y emocionante. Están uniendo sus vidas, sus muebles y hasta sus playlists. Pero, ¿qué pasa con el dinero? Para muchos, sobre todo si apenas están empezando su carrera con su primer trabajo, hablar de finanzas puede parecer un campo minado.",
      image:
        "https://media.topfinanzas.com/images/tuyo-mio-o-nuestro-como-unir-finanzas-estrategicamente-despues-de-casarse-o-mudarse-juntos.webp",
      category: "finanzas-personales",
      contentType: "article",
      date: "29 December 2025",
    },
  "/soluciones-financieras/analisis-tarjeta-de-credito-bbva-oro": {
    pathname: "/soluciones-financieras/analisis-tarjeta-de-credito-bbva-oro",
    title: "Beneficios de la tarjeta de crédito BBVA Oro",
    description:
      "La tarjeta de crédito BBVA Oro es una opción de alto nivel que ofrece múltiples beneficios a los usuarios que buscan maximizar sus compras y disfrutar de ventajas exclusivas.",
    image: "https://media.topfinanzas.com/images/bbva-oro.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/banregio-platinum-analisis": {
    pathname: "/soluciones-financieras/banregio-platinum-analisis",
    title: "Beneficios de la Tarjeta de Crédito Banregio Platinum",
    description:
      "Conoce en esta guía un análisis de la tarjeta de crédito Banregio Platinum y aprende si es la ideal para tu estilo de vida.",
    image: "https://media.topfinanzas.com/images/download-1-1024x536.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/beneficios-tarjetas-credito-aeromexico-santander": {
    pathname:
      "/soluciones-financieras/beneficios-tarjetas-credito-aeromexico-santander",
    title: "Beneficios de las tarjetas de crédito Aeroméxico Santander",
    description:
      "Descubre los beneficios exclusivos de las tarjetas Aeroméxico Santander: Puntos Rewards, acceso a Salones Premier y meses sin intereses.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/cual-es-el-mejor-prestamo-personal": {
    pathname: "/soluciones-financieras/cual-es-el-mejor-prestamo-personal",
    title:
      "¿Cuál es el mejor préstamo personal? Explorando opciones en el mundo Fintech",
    description:
      "Analizamos las mejores opciones de préstamos personales en el mundo Fintech de México. Compara tasas, requisitos y beneficios.",
    image:
      "https://media.topfinanzas.com/images/Top_Finanzas_Prestamo_personal-820x547.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "25 July 2025",
  },
  "/soluciones-financieras/didi-prestamos": {
    pathname: "/soluciones-financieras/didi-prestamos",
    title: "Beneficios de solicitar un préstamo con DiDi Préstamos",
    description:
      "Descubre los beneficios de DiDi Préstamos: financiamiento rápido, digital, seguro y accesible para todos, con la confianza de una plataforma global.",
    image: "https://media.topfinanzas.com/images/didi-1-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/gold-card-american-express-aeromexico": {
    pathname: "/soluciones-financieras/gold-card-american-express-aeromexico",
    title: "Beneficios de la Gold Card American Express® Aeroméxico",
    description:
      "Descubre los beneficios de la Gold Card American Express Aeroméxico: acumula Puntos Premier, acceso a Salas Premier y seguros de viaje exclusivos.",
    image: "https://media.topfinanzas.com/images/download-4-1.webp",
    category: "soluciones-financieras",
    contentType: "financial-product",
    date: "29 December 2025",
  },
  "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank": {
    pathname: "/soluciones-financieras/guia-tarjeta-de-credito-nu-bank",
    title: "NuBank: La tarjeta de crédito ideal para ti",
    description:
      "La Tarjeta de Crédito NuBank, conocida por su accesibilidad y transparencia, se adapta a cualquier estilo de vida.",
    image: "https://media.topfinanzas.com/images/download-9-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/kueski-prestamos": {
    pathname: "/soluciones-financieras/kueski-prestamos",
    title: "Kueski préstamos: crédito fácil y seguro sin buró",
    description:
      "Kueski ofrece préstamos en línea rápidos y seguros sin necesidad de historial crediticio. Solicita desde $400 hasta $24,500 MXN con respuesta en minutos.",
    image: "https://media.topfinanzas.com/images/download-7-2.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/moneyman-prestamos-guia": {
    pathname: "/soluciones-financieras/moneyman-prestamos-guia",
    title: "Moneyman: tu préstamo ideal",
    description:
      "La solución rápida y sin complicaciones que necesitas para acceder a fondos de manera inmediata con Moneyman.",
    image: "https://media.topfinanzas.com/images/moneyman-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "24 July 2025",
  },
  "/soluciones-financieras/prestamos-afluenta": {
    pathname: "/soluciones-financieras/prestamos-afluenta",
    title: "Beneficios de los préstamos de Afluenta",
    description:
      "Descubre los beneficios de los préstamos P2P de Afluenta: tasas competitivas, 100% digital y sin bancos.",
    image: "https://media.topfinanzas.com/images/download-6.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "14 July 2025",
  },
  "/soluciones-financieras/prestamos-baubap": {
    pathname: "/soluciones-financieras/prestamos-baubap",
    title: "Beneficios de los préstamos con Baubap",
    description:
      "Descubre los beneficios de los préstamos Baubap: 100% digital, rápido y sin historial crediticio riguroso.",
    image: "https://media.topfinanzas.com/images/baubap-1-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "15 July 2025",
  },
  "/soluciones-financieras/prestamos-coppel": {
    pathname: "/soluciones-financieras/prestamos-coppel",
    title: "Préstamo Coppel: Solución flexible para lo que necesitas",
    description:
      "Descubre los Préstamos Personales Coppel: montos flexibles, plazos a tu medida y solicitud 100% digital.",
    image: "https://media.topfinanzas.com/images/download-4.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "16 July 2025",
  },
  "/soluciones-financieras/prestamos-de-kubo-financiero": {
    pathname: "/soluciones-financieras/prestamos-de-kubo-financiero",
    title: "Beneficios de los préstamos con Kubo Financiero",
    description:
      "Kubo Financiero facilita préstamos en línea con tasas competitivas, flexibilidad de pago y seguridad total. Conoce sus beneficios aquí.",
    image: "https://media.topfinanzas.com/images/kubo-2.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "17 July 2025",
  },
  "/soluciones-financieras/prestamos-digit": {
    pathname: "/soluciones-financieras/prestamos-digit",
    title: "Beneficios de los préstamos con Digitt",
    description:
      "Digitt es una plataforma digital que ofrece préstamos personales rápidos, seguros y con tasas competitivas. Conoce todos sus beneficios aquí.",
    image: "https://media.topfinanzas.com/images/download-7.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "18 July 2025",
  },
  "/soluciones-financieras/prestamos-doopla": {
    pathname: "/soluciones-financieras/prestamos-doopla",
    title: "Beneficios de los Préstamos Doopla",
    description:
      "Doopla ofrece préstamos personales P2P con tasas desde 12% anual, montos hasta $350,000 MXN y trámite 100% en línea. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/download-5.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "19 July 2025",
  },
  "/soluciones-financieras/prestamos-en-linea-solo-con-ine": {
    pathname: "/soluciones-financieras/prestamos-en-linea-solo-con-ine",
    title:
      "¿Buscas préstamos en línea solo con INE? ¡Descubre todo lo que debes saber!",
    description:
      "Los préstamos en línea solo con INE son la opción más rápida y sencilla para obtener financiamiento en México. Descubre cómo solicitarlos aquí.",
    image: "https://media.topfinanzas.com/images/download-1-820x547.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "20 July 2025",
  },
  "/soluciones-financieras/prestamos-feliz": {
    pathname: "/soluciones-financieras/prestamos-feliz",
    title: "Beneficios y características clave de Préstamos Feliz",
    description:
      "Préstamos Feliz ofrece créditos de hasta $500,000 MXN con aprobación en 15 minutos. Conoce sus tasas, ventajas y si es la opción ideal para ti.",
    image: "https://media.topfinanzas.com/images/download-11.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "21 July 2025",
  },
  "/soluciones-financieras/prestamos-la-tasa": {
    pathname: "/soluciones-financieras/prestamos-la-tasa",
    title:
      "Préstamos La Tasa: Una alternativa innovadora para reducir intereses",
    description:
      "Descubre los préstamos personales de La Tasa: tasas desde 16.9%, montos hasta $350,000, sin aval y proceso 100% en línea.",
    image: "https://media.topfinanzas.com/images/latasa-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "22 July 2025",
  },
  "/soluciones-financieras/prestamos-lime": {
    pathname: "/soluciones-financieras/prestamos-lime",
    title: "Préstamos Lime: Microcréditos para tus emergencias financieras",
    description:
      "Accede a microcréditos de manera rápida y completamente en línea con Préstamos Lime. Obtén aprobación en minutos y plazos flexibles.",
    image: "https://media.topfinanzas.com/images/download-10.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "23 July 2025",
  },
  "/soluciones-financieras/prestamos-personales": {
    pathname: "/soluciones-financieras/prestamos-personales",
    title:
      "Préstamos personales: ¿Cómo pueden ser tu mejor estrategia para manejar deudas?",
    description:
      "Descubre qué son los préstamos personales, sus ventajas y cómo utilizarlos para gestionar deudas y financiar proyectos. Guía completa en Top Finanzas MX.",
    image:
      "https://media.topfinanzas.com/images/Top-Finanzas_prestamos_personales.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/prestamos-personales-credilikeme": {
    pathname: "/soluciones-financieras/prestamos-personales-credilikeme",
    title: "Credilikeme: Préstamos rápidos y flexibles",
    description:
      "¿Necesitas un préstamo rápido y flexible? Credilikeme te ofrece créditos accesibles incluso sin historial. Conoce sus beneficios, montos y programa de recompensas.",
    image: "https://media.topfinanzas.com/images/banner-credilikeme.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/prestamos-personales-rapidos-creditea": {
    pathname: "/soluciones-financieras/prestamos-personales-rapidos-creditea",
    title: "Beneficios de los préstamos personales rápidos de Creditea México",
    description:
      "Descubre los beneficios de los préstamos rápidos de Creditea: montos hasta $70,000 MXN, plazos flexibles y aprobación en menos de 24 horas. Todo 100% en línea.",
    image: "https://media.topfinanzas.com/images/creditea-1-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/prestamos-prestadero": {
    pathname: "/soluciones-financieras/prestamos-prestadero",
    title: "Beneficios de solicitar un préstamo con Prestadero",
    description:
      "Conoce los beneficios de Prestadero: tasas desde 8.9%, proceso 100% online y sin penalizaciones por pago anticipado. Préstamos de $10k a $300k.",
    image: "https://media.topfinanzas.com/images/prestadero-1-2-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/prestamos-soy-claire": {
    pathname: "/soluciones-financieras/prestamos-soy-claire",
    title: "Préstamos Soy Claire: Consolida tus deudas de tarjetas de crédito",
    description:
      "Consolida tus deudas de tarjetas Visa y MasterCard con Soy Claire. Préstamos hasta $150,000 MXN, plazos flexibles y sin penalización por pago anticipado.",
    image: "https://media.topfinanzas.com/images/download-8.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/prestamos-tala": {
    pathname: "/soluciones-financieras/prestamos-tala",
    title: "Préstamos Tala: Una solución financiera a tu alcance",
    description:
      "Descubre Tala, la app de préstamos rápidos en México. Desde $500 hasta $10,000 pesos, sin aval ni historial crediticio. ¡Solicita en 5 minutos!",
    image: "https://media.topfinanzas.com/images/download-9.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/prestamos-vivus-mexico": {
    pathname: "/soluciones-financieras/prestamos-vivus-mexico",
    title: "Préstamos personales Vivus: Rápidos y seguros",
    description:
      "Solicita préstamos rápidos con Vivus: hasta $3,000 MXN al instante, 100% online y sin papeleo. Dinero en tu cuenta en menos de 1 hora.",
    image: "https://media.topfinanzas.com/images/vivus.jpg",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/rappicard": {
    pathname: "/soluciones-financieras/rappicard",
    title: "Beneficios de la RappiCard",
    description:
      "Descubre los beneficios de la RappiCard: sin anualidad, cashback en todas tus compras y gestión 100% digital. ¡Solicítala hoy mismo!",
    image: "https://media.topfinanzas.com/images/rappicard-1.jpg",
    category: "soluciones-financieras",
    contentType: "financial-product",
    date: "29 December 2025",
  },
  "/soluciones-financieras/requisitos-de-la-tarjeta-vexi-american-express": {
    pathname:
      "/soluciones-financieras/requisitos-de-la-tarjeta-vexi-american-express",
    title: "Requisitos Tarjeta Vexi American Express",
    description:
      "Conoce los requisitos para solicitar la Tarjeta Vexi American Express. Ideal para iniciar o reconstruir tu historial crediticio con beneficios exclusivos.",
    image: "https://media.topfinanzas.com/images/VEXI-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-gold-card-american-express-aeromexico": {
    pathname:
      "/soluciones-financieras/requisitos-gold-card-american-express-aeromexico",
    title:
      "Requisitos para solicitar la Gold Card American Express® Aeroméxico",
    description:
      "Conoce los requisitos para solicitar la Gold Card American Express Aeroméxico, documentación necesaria, ingresos mínimos y ventajas adicionales.",
    image: "https://media.topfinanzas.com/images/download-4-1.webp",
    category: "soluciones-financieras",
    contentType: "financial-product",
  },
  "/soluciones-financieras/requisitos-moneyman-prestamos": {
    pathname: "/soluciones-financieras/requisitos-moneyman-prestamos",
    title: "Requisitos para solicitar un préstamo en Moneyman",
    description:
      "Moneyman ofrece préstamos rápidos y accesibles en línea. Conoce los requisitos y el proceso de solicitud.",
    image: "https://media.topfinanzas.com/images/download-3.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-afluenta": {
    pathname: "/soluciones-financieras/requisitos-prestamos-afluenta",
    title: "Requisitos de los préstamos de Afluenta",
    description:
      "Afluenta permite acceder a financiamiento P2P sin bancos tradicionales. Conoce los requisitos, documentación y proceso de solicitud.",
    image: "https://media.topfinanzas.com/images/download-6.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-baubap": {
    pathname: "/soluciones-financieras/requisitos-prestamos-baubap",
    title: "Requisitos para obtener un préstamo en Baubap",
    description:
      "Conoce los requisitos para solicitar un préstamo en Baubap. Proceso 100% digital, sin historial crediticio estricto y con respuesta rápida.",
    image: "https://media.topfinanzas.com/images/baubap-1-1-1.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-con-yotepresto": {
    pathname: "/soluciones-financieras/requisitos-prestamos-con-yotepresto",
    title: "Requisitos para solicitar un préstamo con Yotepresto",
    description:
      "Descubre los requisitos para solicitar un préstamo con Yotepresto en México. Guía detallada sobre historial crediticio, comprobantes de ingresos, y cuenta bancaria.",
    image: "https://media.topfinanzas.com/images/yotepretsto-1-1.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-prestamos-coppel": {
    pathname: "/soluciones-financieras/requisitos-prestamos-coppel",
    title: "Requisitos para solicitar un Préstamo Coppel",
    description:
      "Solicita tu Préstamo Personal Coppel fácil y rápido. Solo necesitas tu Crédito Coppel, Tarjeta BanCoppel y buen historial. Gestiona todo en línea.",
    image: "https://media.topfinanzas.com/images/download-4.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-credilikeme": {
    pathname: "/soluciones-financieras/requisitos-prestamos-credilikeme",
    title: "Requisitos para solicitar un préstamo en Credilikeme",
    description:
      "Conoce los requisitos para solicitar un préstamo en Credilikeme, una opción accesible para quienes necesitan dinero rápido, incluso sin historial crediticio.",
    image: "https://media.topfinanzas.com/images/banner-credilikeme2.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-prestamos-creditea": {
    pathname: "/soluciones-financieras/requisitos-prestamos-creditea",
    title: "Requisitos para solicitar un préstamo en Creditea México",
    description:
      "Conoce los requisitos para solicitar un préstamo en Creditea México. Una guía completa sobre cómo obtener financiamiento rápido, flexible y 100% en línea.",
    image: "https://media.topfinanzas.com/images/creditea-1-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-prestamos-didi": {
    pathname: "/soluciones-financieras/requisitos-prestamos-didi",
    title: "Requisitos para solicitar un préstamo con DiDi",
    description:
      "Conoce los requisitos para solicitar un préstamo con DiDi, una opción financiera rápida y segura para conductores y usuarios de la plataforma.",
    image: "https://media.topfinanzas.com/images/didi-1-1-1.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-prestamos-digitt": {
    pathname: "/soluciones-financieras/requisitos-prestamos-digitt",
    title: "Requisitos para solicitar un préstamo con Digitt",
    description:
      "Digitt ofrece préstamos personales rápidos y flexibles. Conoce los requisitos y el proceso de solicitud.",
    image: "https://media.topfinanzas.com/images/download-7.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-doopla": {
    pathname: "/soluciones-financieras/requisitos-prestamos-doopla",
    title: "Requisitos préstamo en Doopla",
    description:
      "Doopla ofrece préstamos P2P con tasas desde el 12% anual. Conoce los requisitos y beneficios de solicitar tu crédito en línea.",
    image: "https://media.topfinanzas.com/images/download-5.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-feliz": {
    pathname: "/soluciones-financieras/requisitos-prestamos-feliz",
    title: "Requisitos y proceso de solicitud de Préstamos Feliz",
    description:
      "Descubre los requisitos y el proceso para solicitar un préstamo con Préstamos Feliz. Aprobación en 15 minutos, sin largos trámites.",
    image: "https://media.topfinanzas.com/images/download-11.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-la-tasa": {
    pathname: "/soluciones-financieras/requisitos-prestamos-la-tasa",
    title: "Requisitos para solicitar un préstamo con La Tasa",
    description:
      "Conoce los requisitos para solicitar un préstamo con La Tasa. Proceso sencillo, 100% digital, sin avales y con depósito en menos de 48 horas.",
    image: "https://media.topfinanzas.com/images/latasa-1-1.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-lime": {
    pathname: "/soluciones-financieras/requisitos-prestamos-lime",
    title: "Requisitos de los préstamos con Lime",
    description:
      "Conoce los requisitos para solicitar un préstamo con Lime. Proceso 100% digital, sin avales y con respuesta inmediata para emergencias.",
    image: "https://media.topfinanzas.com/images/download-10.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-personal-kubo-financiero": {
    pathname:
      "/soluciones-financieras/requisitos-prestamos-personal-kubo-financiero",
    title: "Requisitos para solicitar un préstamo en Kubo Financiero",
    description:
      "Conoce los requisitos para solicitar un préstamo en Kubo Financiero. Proceso 100% en línea, tasas competitivas y flexibilidad en pagos.",
    image: "https://media.topfinanzas.com/images/kubo-2.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-personales-kueski": {
    pathname: "/soluciones-financieras/requisitos-prestamos-personales-kueski",
    title: "Requisitos para solicitar un préstamo en Kueski",
    description:
      "Solicitar un préstamo en Kueski es sencillo. Conoce los requisitos básicos, para quién es ideal y cómo empezar tu solicitud en minutos.",
    image: "https://media.topfinanzas.com/images/download-2.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-prestadero": {
    pathname: "/soluciones-financieras/requisitos-prestamos-prestadero",
    title: "Requisitos para solicitar un préstamo con Prestadero",
    description:
      "Conoce los requisitos para solicitar un préstamo en Prestadero, una plataforma P2P con tasas competitivas y proceso 100% online.",
    image: "https://media.topfinanzas.com/images/prestadero-1-2-1-1.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-prestamos-soy-claire": {
    pathname: "/soluciones-financieras/requisitos-prestamos-soy-claire",
    title: "Requisitos préstamo Soy Claire",
    description:
      "Simplifica tus pagos en un solo crédito, con plazos flexibles y sin penalizaciones por pagos anticipados. Conoce los requisitos del préstamo Soy Claire.",
    image: "https://media.topfinanzas.com/images/download-8.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-tala": {
    pathname: "/soluciones-financieras/requisitos-prestamos-tala",
    title: "Requisitos para solicitar un préstamo con Tala",
    description:
      "Conoce los requisitos para solicitar un préstamo en Tala. Sin historial crediticio, 100% digital y con depósito rápido en tu cuenta.",
    image: "https://media.topfinanzas.com/images/download-9.webp",
    category: "soluciones-financieras",
    contentType: "loan",
  },
  "/soluciones-financieras/requisitos-prestamos-vivus-mexico": {
    pathname: "/soluciones-financieras/requisitos-prestamos-vivus-mexico",
    title: "Requisitos préstamos Vivus México",
    description:
      "Obtén hasta $3,000 MXN en minutos. Con un proceso 100% en línea y sin papeleo, es ideal para cubrir emergencias o gastos pequeños.",
    image: "https://media.topfinanzas.com/images/vivus.webp",
    category: "soluciones-financieras",
    contentType: "loan",
    date: "06 Jan 2026",
  },
  "/soluciones-financieras/requisitos-rappicard": {
    pathname: "/soluciones-financieras/requisitos-rappicard",
    title: "Requisitos para solicitar la RappiCard",
    description:
      "Conoce los requisitos para solicitar la RappiCard, una tarjeta sin anualidad y con cashback. Descubre cómo obtenerla y sus beneficios.",
    image: "https://media.topfinanzas.com/images/rappicard-1.jpg",
    category: "soluciones-financieras",
    contentType: "financial-product",
  },
  "/soluciones-financieras/requisitos-tarjeta-bsmart-u-de-banamex": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-bsmart-u-de-banamex",
    title: "Requisitos Tarjeta Bsmart U Banamex",
    description:
      "Conoce los requisitos de la Tarjeta Bsmart U de Banamex para estudiantes universitarios. Inicia tu historial crediticio con beneficios exclusivos.",
    image: "https://media.topfinanzas.com/images/Citibanamex-B•Smart-U-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-azul-bbva",
    title: "Requisitos Tarjeta de Crédito Azul BBVA",
    description:
      "Conoce los Requisitos Tarjeta de Crédito Azul BBVA y descubre si es la opción ideal para ti.",
    image: "https://media.topfinanzas.com/images/TC_bbva-azul.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-bbva-oro": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-bbva-oro",
    title: "Requisitos para solicitar la tarjeta de crédito BBVA Oro",
    description:
      "La tarjeta de crédito BBVA Oro es una de las opciones más populares y versátiles que ofrece el banco BBVA en México. Conoce sus requisitos y beneficios.",
    image: "https://media.topfinanzas.com/images/bbva-oro.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-crecy": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-crecy",
    title: "Requisitos para solicitar la tarjeta de crédito Crecy",
    description:
      "Conoce los requisitos, ventajas y cómo solicitar la tarjeta de crédito Crecy, una opción flexible y sin anualidad.",
    image: "https://media.topfinanzas.com/images/download.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-hey-banco": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-hey-banco",
    title: "Requisitos de la tarjeta de crédito Hey Banco",
    description:
      "Conoce los requisitos para solicitar la tarjeta de crédito Hey Banco. Proceso 100% digital, sin anualidad y con beneficios exclusivos.",
    image: "https://media.topfinanzas.com/images/Hey-Banco-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-hsbc-viva": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-hsbc-viva",
    title: "Requisitos de la tarjeta de crédito HSBC Viva",
    description:
      "Conoce los requisitos de la tarjeta de crédito HSBC Viva, sus beneficios en viajes y cómo solicitarla fácilmente.",
    image: "https://media.topfinanzas.com/images/download-7-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-klar": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-klar",
    title: "Requisitos de la tarjeta de Crédito Klar",
    description:
      "Conoce los requisitos para solicitar la tarjeta de crédito Klar, una opción accesible sin comisiones ocultas y con trámite 100% digital.",
    image: "https://media.topfinanzas.com/images/KLAR-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-klu": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-klu",
    title: "Requisitos para solicitar la tarjeta de crédito Klu",
    description:
      "Conoce los requisitos, beneficios y proceso de solicitud de la tarjeta de crédito Klu. Una opción accesible sin anualidad para construir historial crediticio.",
    image: "https://media.topfinanzas.com/images/KLU-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-mercado-pago": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-de-credito-mercado-pago",
    title: "Requisitos para solicitar la tarjeta Mercado Pago",
    description:
      "Descubre los requisitos y beneficios de la tarjeta de crédito Mercado Pago. Sin anualidad, ideal para compras en línea y con gestión total desde la app.",
    image: "https://media.topfinanzas.com/images/mercadopago-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-nu": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-de-credito-nu",
    title: "Requisitos tarjeta de crédito Nu",
    description:
      "Descubre los pasos y requisitos esenciales para obtener tu Tarjeta de Crédito NuBank en México, con información sobre costos, CAT y proceso de solicitud.",
    image: "https://media.topfinanzas.com/images/download-2-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-platinum-american-express":
    {
      pathname:
        "/soluciones-financieras/requisitos-tarjeta-de-credito-platinum-american-express",
      title:
        "Requisitos para solicitar la tarjeta de Crédito Platinum American Express",
      description:
        "Conoce los requisitos, beneficios exclusivos y cómo solicitar la tarjeta de Crédito Platinum American Express.",
      image: "https://media.topfinanzas.com/images/download-7-min.webp",
      category: "soluciones-financieras",
      contentType: "credit-card",
    },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-de-credito-santander-likeu",
    title: "Requisitos de la tarjeta de crédito Santander LikeU",
    description:
      "Conoce los requisitos, costos y beneficios de la tarjeta de crédito Santander LikeU. Una opción socialmente responsable y personalizable.",
    image: "https://media.topfinanzas.com/images/download-3-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-tigres-afirme": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-de-credito-tigres-afirme",
    title: "Requisitos para la Tarjeta de Crédito Tigres Afirme",
    description:
      "Conoce los requisitos, costos y beneficios exclusivos de la Tarjeta de Crédito Tigres Afirme para aficionados.",
    image: "https://media.topfinanzas.com/images/download-6-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-vexi-carnet": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-de-credito-vexi-carnet",
    title: "Requisitos de la tarjeta de crédito Vexi Carnet",
    description:
      "Conoce los requisitos para solicitar la tarjeta de crédito Vexi Carnet, una opción ideal para iniciar tu historial crediticio sin comprobar ingresos.",
    image: "https://media.topfinanzas.com/images/vexicarnet-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-de-credito-volaris-invex-0": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-de-credito-volaris-invex-0",
    title: "Requisitos de la tarjeta de crédito Volaris INVEX",
    description:
      "Conoce los requisitos para solicitar la Tarjeta de Crédito Volaris INVEX y descubre si es la opción ideal para tus viajes.",
    image: "https://media.topfinanzas.com/images/Volaris-INVEX-0-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-hsbc-2now": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-hsbc-2now",
    title: "Requisitos para solicitar la tarjeta de crédito HSBC 2Now",
    description:
      "Conoce los requisitos, beneficios y proceso de solicitud de la tarjeta HSBC 2Now. Disfruta de beneficios exclusivos y sin anualidad el primer año.",
    image: "https://media.topfinanzas.com/images/HSBC-2Now-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-hsbc-air": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-hsbc-air",
    title: "Conoce los requisitos Tarjeta HSBC Air",
    description:
      "Conoce los requisitos, documentación necesaria y proceso de solicitud para obtener la Tarjeta HSBC Air. Descubre sus costos y comisiones.",
    image: "https://media.topfinanzas.com/images/HSBC-Air-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-hsbc-zero": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-hsbc-zero",
    title: "Requisitos Tarjeta HSBC Zero",
    description:
      "Conoce los requisitos para solicitar la Tarjeta HSBC Zero, una opción sin anualidad y con múltiples beneficios. Descubre si es ideal para ti.",
    image: "https://media.topfinanzas.com/images/HSBC-Zero-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-plata-card": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-plata-card",
    title: "Requisitos de la tarjeta Plata card",
    description:
      "Conoce los requisitos, proceso de solicitud y beneficios de la Tarjeta de Crédito Plata. Descubre si es la opción ideal para ti.",
    image: "https://media.topfinanzas.com/images/plata.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-platinum-de-banregio": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-platinum-de-banregio",
    title: "Requisitos para solicitar la Tarjeta Platinum de Banregio",
    description:
      "Conoce los requisitos para solicitar la Tarjeta Platinum de Banregio, documentación necesaria, ingresos mínimos y consejos para garantizar tu aprobación.",
    image: "https://media.topfinanzas.com/images/download-5-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-infinite": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-infinite",
    title: "Requisitos de la tarjeta de crédito Santander Aeroméxico Infinite",
    description:
      "Conoce los requisitos para solicitar la tarjeta Santander Aeroméxico Infinite, sus beneficios exclusivos y el proceso de solicitud.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Infinite-Santander-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-platinum": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-santander-aeromexico-platinum",
    title: "Requisitos de la tarjeta Santander Aeroméxico Platinum",
    description:
      "Conoce los requisitos, documentación y proceso de solicitud para la tarjeta de crédito Santander Aeroméxico Platinum. Descubre si es la tarjeta ideal para ti.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Platinum-Santander-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-santander-free": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-santander-free",
    title: "Requisitos para solicitar la tarjeta Santander Free",
    description:
      "Conoce los requisitos, beneficios y proceso de solicitud de la Tarjeta Santander Free. Una opción ideal sin anualidad bajo un consumo mínimo mensual.",
    image: "https://media.topfinanzas.com/images/Santander-Free-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-simplicity-citibanamex": {
    pathname:
      "/soluciones-financieras/requisitos-tarjeta-simplicity-citibanamex",
    title: "Requisitos Tarjeta de Crédito Joy Banamex",
    description:
      "Conoce los Requisitos Tarjeta Joy Banamex y conoce si se ajusta a tu estilo de vida y a tus finanzas personales",
    image: "https://media.topfinanzas.com/images/foto1-1180x618.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjeta-stori": {
    pathname: "/soluciones-financieras/requisitos-tarjeta-stori",
    title: "Requisitos para solicitar la Tarjeta Stori",
    description:
      "Conoce los requisitos, proceso de solicitud y ventajas de la Tarjeta Stori. Ideal para estudiantes y personas sin historial crediticio.",
    image: "https://media.topfinanzas.com/images/stori-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander": {
    pathname:
      "/soluciones-financieras/requisitos-tarjetas-credito-aeromexico-santander",
    title:
      "Requisitos para solicitar las tarjetas de crédito Aeroméxico Santander",
    description:
      "Las tarjetas de crédito Aeroméxico Santander ofrecen beneficios únicos para viajeros frecuentes. Conoce los requisitos y cómo solicitarlas.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/requisitos-tarjetas-kapital": {
    pathname: "/soluciones-financieras/requisitos-tarjetas-kapital",
    title: "Requisitos de las tarjetas de crédito Kapital",
    description:
      "Conoce los requisitos para solicitar las tarjetas de crédito Kapital. Proceso 100% en línea, sin historial crediticio y con beneficios exclusivos.",
    image: "https://media.topfinanzas.com/images/kapital-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-bsmart-u-de-banamex": {
    pathname: "/soluciones-financieras/tarjeta-bsmart-u-de-banamex",
    title: "Beneficios de la tarjeta Bsmart U de Banamex",
    description:
      "La tarjeta Bsmart U de Banamex es ideal para universitarios: sin historial previo, sin anualidad el primer año y beneficios exclusivos.",
    image:
      "https://media.topfinanzas.com/images/Citibanamex-B%E2%80%A2Smart-U-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-aeromexico-santander": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-aeromexico-santander",
    title: "Beneficios de la tarjeta Aeroméxico Santander",
    description:
      "Las tarjetas de crédito Aeroméxico Santander son una excelente opción para los viajeros frecuentes. Conoce sus beneficios, requisitos y características.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Santander-Blanca.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-azul-bbva": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-azul-bbva",
    title: "Tarjeta de crédito Azul de BBVA: Tu aliado en cada transacción",
    description:
      "La Tarjeta de Crédito Azul de BBVA es perfecta tanto para nuevos usuarios del crédito como para compradores y viajeros frecuentes.",
    image: "https://media.topfinanzas.com/images/download-5-2.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-crecy": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-crecy",
    title: "Beneficios de la tarjeta de crédito Crecy",
    description:
      "Descubre los beneficios de la tarjeta Crecy: crédito con criptomonedas, sin buró y liquidez sin vender tus activos.",
    image: "https://media.topfinanzas.com/images/crecy-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-hey-banco": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-hey-banco",
    title: "Beneficios de la tarjeta de crédito Hey Banco",
    description:
      "Descubre los beneficios de la tarjeta de crédito Hey Banco: sin anualidad, proceso 100% digital, recompensas cashback y control total desde la app.",
    image: "https://media.topfinanzas.com/images/Hey-Banco-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-hsbc-viva": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-hsbc-viva",
    title: "Beneficios de la tarjeta de crédito HSBC Viva",
    description:
      "Conoce la Tarjeta de Crédito HSBC Viva: sin anualidad, cashback en compras, meses sin intereses y acceso a promociones exclusivas.",
    image: "https://media.topfinanzas.com/images/TC_HSBC_VIVA_requisitos.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-klar": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-klar",
    title: "Beneficios de la tarjeta Klar",
    description:
      "La tarjeta de crédito Klar es una opción innovadora sin comisiones, ideal para quienes buscan construir historial crediticio. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/KLAR-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-klu": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-klu",
    title: "Beneficios de la tarjeta de crédito Klu",
    description:
      "La tarjeta de crédito Klu es una opción atractiva sin anualidad, fácil aprobación y control total desde tu móvil. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/KLU-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-likeu-de-santander": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-likeu-de-santander",
    title: "LikeU de Santander: innovación en tus manos",
    description:
      "Descubre la tarjeta de crédito LikeU de Santander: personalizable, sin anualidad, con cashback y seguridad avanzada. ¡Solicítala hoy!",
    image: "https://media.topfinanzas.com/images/download-1-3.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-mercado-pago": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-mercado-pago",
    title: "Beneficios principales de la tarjeta de crédito Mercado Pago",
    description:
      "La tarjeta de crédito Mercado Pago es ideal para compras en Mercado Libre sin anualidad y con control total desde la app. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/mercadopago-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-nubank-vcorta": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-nubank-vcorta",
    title: "Tarjeta de Crédito Nubank",
    description:
      "La Tarjeta de Crédito NuBank, conocida por su accesibilidad y transparencia, se adapta a cualquier estilo de vida.",
    image: "https://media.topfinanzas.com/images/download-9-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-platinum-american-express": {
    pathname:
      "/soluciones-financieras/tarjeta-de-credito-platinum-american-express",
    title: "Beneficios de la tarjeta de Crédito Platinum American Express",
    description:
      "La Tarjeta Platinum American Express ofrece acceso a salones VIP, concierge 24/7, puntos Membership Rewards y seguros de viaje completos.",
    image: "https://media.topfinanzas.com/images/download-7-min.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-tigres-afirme": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-tigres-afirme",
    title: "Beneficios de la Tarjeta de Crédito Tigres Afirme",
    description:
      "Descubre los beneficios, requisitos y costos de la Tarjeta de Crédito Tigres Afirme: puntos Bonus, meses sin intereses, anualidad y tasa de interés.",
    image: "https://media.topfinanzas.com/images/download-6-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-de-credito-vexi-carnet": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-vexi-carnet",
    title: "Beneficios de la tarjeta de crédito Vexi Carnet",
    description:
      "Conoce la tarjeta de crédito Vexi Carnet: sin anualidad, con programa de recompensas y ideal para iniciar tu historial crediticio.",
    image: "https://media.topfinanzas.com/images/vexicarnet-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-de-credito-volaris-invex-0": {
    pathname: "/soluciones-financieras/tarjeta-de-credito-volaris-invex-0",
    title: "Beneficios de la tarjeta de crédito Volaris INVEX 0",
    description:
      "Ideal para viajeros frecuentes, especialmente usuarios de Volaris, con beneficios que facilitan y mejoran cada viaje.",
    image: "https://media.topfinanzas.com/images/Volaris-INVEX-0-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-hsbc-air": {
    pathname: "/soluciones-financieras/tarjeta-hsbc-air",
    title: "Beneficios y características de la Tarjeta HSBC Air",
    description:
      "Descubre los beneficios de la Tarjeta HSBC Air: tasa de interés baja, meses sin intereses automáticos y transferencia de saldos.",
    image: "https://media.topfinanzas.com/images/HSBC-Air-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-hsbc-zero": {
    pathname: "/soluciones-financieras/tarjeta-hsbc-zero",
    title: "HSBC Zero: Ahorra en comisiones y maximiza tus recompensas",
    description:
      "La Tarjeta HSBC Zero ofrece libertad financiera con cero comisiones anuales, programa de recompensas y promociones exclusivas. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/download-4-2.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-plata-card": {
    pathname: "/soluciones-financieras/tarjeta-plata-card",
    title: "Tarjeta Plata Card: maximiza cada compra",
    description:
      "La Tarjeta de Crédito Plata ofrece hasta 15% de cashback, límite de crédito de hasta $200,000 y meses sin intereses. Conoce sus beneficios.",
    image: "https://media.topfinanzas.com/images/download-1-2.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-santander-aeromexico-infinite": {
    pathname: "/soluciones-financieras/tarjeta-santander-aeromexico-infinite",
    title: "Beneficios de la tarjeta de crédito Santander Aeroméxico Infinite",
    description:
      "La tarjeta de crédito Santander Aeroméxico Infinite ofrece una gama de beneficios exclusivos, ideal para viajeros frecuentes que buscan aprovechar al máximo cada vuelo y cada compra.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Infinite-Santander-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-santander-aeromexico-platinum": {
    pathname: "/soluciones-financieras/tarjeta-santander-aeromexico-platinum",
    title: "Beneficios de la tarjeta de crédito Santander Aeroméxico Platinum",
    description:
      "Descubre los beneficios de la tarjeta Santander Aeroméxico Platinum: vuelos con acompañante, Puntos Premier, acceso a Salones Premier y primer año sin anualidad.",
    image:
      "https://media.topfinanzas.com/images/Aeromexico-Platinum-Santander-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-santander-free": {
    pathname: "/soluciones-financieras/tarjeta-santander-free",
    title: "Beneficios destacados de la tarjeta Santander Free",
    description:
      "La Tarjeta Santander Free es una excelente opción sin anualidad si cumples el gasto mínimo. Conoce sus beneficios, seguros y promociones.",
    image: "https://media.topfinanzas.com/images/Santander-Free-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-simplicity-citibanamex": {
    pathname: "/soluciones-financieras/tarjeta-simplicity-citibanamex",
    title: "Beneficios de la Tarjeta de Crédito Joy Banamex",
    description:
      "Conoce todo sobre la tarjeta Joy Banamex (antes Simplicity): sin anualidad, seguridad sin números impresos y gestión total desde la app.",
    image: "https://media.topfinanzas.com/images/foto2-1024x536.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-spin-by-oxxo": {
    pathname: "/soluciones-financieras/tarjeta-spin-by-oxxo",
    title: "Tarjeta Spin by OXXO: ¿Es una buena opción para ti?",
    description:
      "Spin by OXXO es una solución financiera integral que ofrece una tarjeta Visa y app para enviar dinero, sin necesidad de cuenta bancaria tradicional.",
    image:
      "https://media.topfinanzas.com/images/Top_Finanzas_Top_tarjeta_Spin_by_OXXO-1-820x547.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjeta-stori-ventajas-desventajas": {
    pathname: "/soluciones-financieras/tarjeta-stori-ventajas-desventajas",
    title: "Tarjeta de Crédito Stori: Ideal para estudiantes",
    description:
      "Conoce las ventajas de la tarjeta Stori para estudiantes: sin anualidad, 100% digital, internacional y con detalles financieros como CAT y tasa anual fija.",
    image: "https://media.topfinanzas.com/images/download-15.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
    date: "29 December 2025",
  },
  "/soluciones-financieras/tarjeta-vexi-american-express": {
    pathname: "/soluciones-financieras/tarjeta-vexi-american-express",
    title: "Beneficios de la Tarjeta Vexi American Express",
    description:
      "La Vexi American Express es ideal para iniciar tu historial con beneficios exclusivos, meses sin intereses y cashback. Conoce más.",
    image: "https://media.topfinanzas.com/images/VEXI-1-1.webp",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjetas-de-credito-sin-anualidad": {
    pathname: "/soluciones-financieras/tarjetas-de-credito-sin-anualidad",
    title: "Top de las mejores tarjetas de crédito sin anualidad en México",
    description:
      "Conoce las mejores tarjetas de crédito sin anualidad en México. Ahorra dinero y disfruta de beneficios sin pagar cuotas anuales.",
    image:
      "https://media.topfinanzas.com/images/Top_Finanzas_tarjetas_de_credito_sin_anualidad-820x547.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
  "/soluciones-financieras/tarjetas-kapital": {
    pathname: "/soluciones-financieras/tarjetas-kapital",
    title: "Beneficios de las tarjetas de crédito Kapital",
    description:
      "Descubre los beneficios de las tarjetas de crédito Kapital: sin historial crediticio, cashback en compras, transparencia y proceso 100% digital.",
    image: "https://media.topfinanzas.com/images/kapital-1-1.jpg",
    category: "soluciones-financieras",
    contentType: "credit-card",
  },
} satisfies Record<string, RouteSeoEntry>;
