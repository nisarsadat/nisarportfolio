import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the built site works when
// uploaded to any folder on shared hosting or a subpath
export default defineConfig({
  plugins: [react()],
  base: './',
})
