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
      '@utils': path.resolve(__dirname, './src/utils'),
      '@core': path.resolve(__dirname, './src/core'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})
