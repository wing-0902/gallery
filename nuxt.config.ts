// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: [
    '~/assets/global.scss',
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css'
  ],
  devtools: { enabled: true },
  image: {
    format: ['avif'],
    screens: {
      mobile: 512,
      desktop: 1024
    }
  },
  modules: ['@nuxt/image', '@unocss/nuxt', 'nuxt-og-image'],
  ogImage: {
    enabled: true
  },
  site: {
    url: 'https://gallery.wing.osaka',
    name: 'Gallery by Wing'
  }
});