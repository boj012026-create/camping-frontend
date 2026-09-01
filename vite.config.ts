import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/wp-json': {
        target: 'http://lone-camping.local/',
        changeOrigin: true,
        secure: false,
      },
      '/graphql': {
        target: 'http://lone-camping.local/',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  base: "/camping-frontend/",
})
