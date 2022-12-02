import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.hotstar.com/in'
  },
  viewportHeight: 800,
  viewportWidth: 1200,
  chromeWebSecurity: false,

})
