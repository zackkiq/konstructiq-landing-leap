import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// ONE default export only
export default defineConfig({
  plugins: [react()],
  // keep assets working when hosted at /konstructiq-landing-leap/*
  base: '',
  build: { outDir: 'dist' },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
