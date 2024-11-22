// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@core': path.resolve(__dirname, './src/core'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  }
})
