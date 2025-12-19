# Top Finanzas MX - Proyecto Next.js

Este es un proyecto Next.js para Top Finanzas México, un sitio web de servicios financieros. Incluye un blog, herramientas de comparación de tarjetas de crédito y otros servicios financieros.

## Configuración del Entorno

1. Copia `.env.example` a `.env.production`
2. Completa los valores correspondientes
3. Nunca subas archivos con información sensible al repositorio
4. En el servidor, los archivos de entorno se almacenan en `/opt/app` con permisos restringidos

## Despliegue

Para desplegar la aplicación:

```bash
pm2 start ecosystem.config.js --env production
```

## Gestión de Claves API

Todas las claves API e información sensible se gestionan a través de variables de entorno y nunca deben incluirse directamente en el código de la aplicación.
