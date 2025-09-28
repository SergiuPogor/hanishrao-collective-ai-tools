import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  server: {
    // API calls will be handled by Vercel functions in production
    // For local development, use pnpm dev:local to run with local API server
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})