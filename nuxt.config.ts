// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      AUTH0_CLIENT_ID: process.env.NUXT_AUTH0_CLIENT_ID || '',
      AUTH0_DOMAIN: process.env.NUXT_AUTH0_DOMAIN || '',
      AUTH0_CALLBACK_URL: process.env.NUXT_AUTH0_CALLBACK_URL || 'http://localhost:3000/api/auth/callback',
      },
    AUTH0_SECRET: process.env.NUXT_AUTH0_CLIENT_SECRET || '',
    ISSUER: process.env.NUXT_AUTH0_ISSUER || '',
    BASEURL: process.env.BASEURL || 'http://localhost:3000/',
    },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  router: {
    middleware: ['auth']
  }
})
