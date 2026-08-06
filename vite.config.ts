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
      '/local': {
        target: 'http://lone-camping.local/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
