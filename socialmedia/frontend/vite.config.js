import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: { manifest: true },
  base: process.env.mode === "production" ? "/static/" : "/",
  root: "./src",
  server: {
    host: '0.0.0.0', // Allow connections from any IP
    port: 3000, // Use port 3000 (or any other port you prefer)
  },
  plugins: [react()],
})
