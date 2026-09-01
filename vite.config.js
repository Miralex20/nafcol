import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Multi-page app — each page is an independent HTML entry point
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        about:   resolve(__dirname, 'src/pages/about/index.html'),
        schools: resolve(__dirname, 'src/pages/schools/index.html'),
        news:    resolve(__dirname, 'src/pages/news/index.html'),
        gallery: resolve(__dirname, 'src/pages/gallery/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
      },
    },
  },
})
