import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/i18n'],
  i18n: {
    lazy: true,
    langDir: resolve(__dirname, 'locales'),
    locales: [
      { code: 'fr', file: 'fr/_locale-fr.js' },
      { code: 'en', file: 'en/_locale-en.js' }
    ],
    defaultLocale: 'fr',
    vueI18n: './i18n/vueI18n.config.js'
  }
})