// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './',

  server: {
    host: '0.0.0.0' // Makes the server accessible externally
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
