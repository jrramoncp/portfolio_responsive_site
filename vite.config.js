import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/portfolio_responsive_site/', // Necesario para despliegue en GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Entrada principal
      },
    },
  },
});