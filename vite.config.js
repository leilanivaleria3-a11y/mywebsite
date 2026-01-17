import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),tailwindcss(),],
base: "website-test",
=======
  plugins: [react()],
  base: "mywebsite",
>>>>>>> cab4faf1368f7ff2df089615ff31b4ec15b6eae5
})
