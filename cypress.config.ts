import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'nddj4g',
  e2e: {
    baseUrl: 'https://www.target.com'
  },
  viewportHeight: 800,
  viewportWidth: 1200,
  chromeWebSecurity: false,
  videoCompression: false,

})

