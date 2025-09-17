import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ONE default export only:
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // keep assets working when served at /konstructiq-landing-leap/*
  base: '',
  build: { outDir: 'dist' },
}))
