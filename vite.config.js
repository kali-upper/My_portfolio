import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use conditional base path based on deployment platform
  base: process.env.GITHUB_ACTIONS ? '/My_portfolio/' : '/',
})
