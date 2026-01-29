import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js and related libraries into a separate chunk
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          // Split other vendor libraries
          vendor: ['react', 'react-dom', 'motion'],
        },
      },
    },
  },
})
