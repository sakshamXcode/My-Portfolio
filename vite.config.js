import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      // Exclude specific modules from the build
      external: ['some-module', 'another-module'],
  plugins: [react()],
}
}});
