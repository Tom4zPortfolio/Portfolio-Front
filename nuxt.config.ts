// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Tom.dev | Portfolio Premium - Designer & Développeur',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Découvrez le portfolio premium de Tom, designer et développeur spécialisé dans la création d\'expériences numériques immersives et performantes.' },
        { name: 'keywords', content: 'Développeur, Designer, Portfolio, Nuxt, Vue, UI/UX, Premium, Web Design' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tom.dev | Portfolio Premium' },
        { property: 'og:description', content: 'Designer & Développeur spécialisé dans les expériences web immersives.' },
        { property: 'og:image', content: '/og-image.png' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tom.dev | Portfolio Premium' },
        { name: 'twitter:description', content: 'Designer & Développeur spécialisé dans les expériences web immersives.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  modules: [
    '@nuxt/icon'
  ],

})