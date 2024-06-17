import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  export default defineConfig({
  base: 'project-management',  // Replace 'your-repo-name' with your actual repository name
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
