import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'z5u76a',
  e2e: {
    baseUrl: 'https://www.target.com'
  },
  viewportHeight: 800,
  viewportWidth: 1200,
  chromeWebSecurity: false,

})

