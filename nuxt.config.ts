// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: [
    '~/assets/global.scss',
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css'
  ],
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@unocss/nuxt']
});
