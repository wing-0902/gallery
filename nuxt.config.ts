// https://nuxt.com/docs/api/configuration/nuxt-config

import photoList from './assets/list.json'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      }
    }
  },
  compatibilityDate: '2025-07-15',
  css: [
    '~/assets/global.scss',
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css'
  ],
  devtools: { enabled: true },
  fonts: {
    families: [{ name: 'Kiwi Maru', weights: [400, 500], global: true }]
  },
  image: {
    format: ['avif', 'webp'],
    screens: {
      mobile: 512,
      desktop: 1024
    }
  },
  modules: [
    '@nuxt/image',
    '@unocss/nuxt',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],
  nitro: {
    prerender: {
      routes: photoList.map(photo => `/photo/${photo}`)
    }
  },
  ogImage: {
    enabled: true
  },
  site: {
    url: 'https://gallery.wing.osaka',
    name: 'Gallery by Wing'
  }
});
