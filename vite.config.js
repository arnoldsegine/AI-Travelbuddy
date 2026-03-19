import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/travelbuddy-search/', // 👈 CHANGE THIS to match your exact GitHub repo name
})
