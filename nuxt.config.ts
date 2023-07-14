import shiki from 'shiki'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [    
    '@nuxt/content',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  telemetry: false,
  css: [
    "vuetify/lib/styles/main.sass", 
    "@mdi/font/css/materialdesignicons.min.css"
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      //theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})