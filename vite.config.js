import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For local development, use '/'
  // For GitHub Pages, change to '/Wedding_web/' before building
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

