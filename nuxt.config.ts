// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  alias: {
    '@components': resolve(__dirname, './components'),
    '@color': resolve(__dirname, './const/color.sass'),
    '@font': resolve(__dirname, './const/font.sass'),
    '@mixin': resolve(__dirname, './const/mixin.sass')
  },
  modules: ['nuxt-svgo', 'nuxt-swiper'],
  app: {
    baseURL: '/sheregesh/'
  },
  svgo: {
    autoImportPath: './assets/icons/',
    componentPrefix: 'Icon'
  },
})
