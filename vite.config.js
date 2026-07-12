import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Fix applied here

export default defineConfig({
  plugins: [react()],
  base: '/cafecito/', // Matches your repository name
})
