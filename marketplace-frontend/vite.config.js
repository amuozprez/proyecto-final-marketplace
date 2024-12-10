import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/marketplace-frontend/', // Asegúrate de que Render pueda resolver rutas relativas
  server: {
    port: 3000, // Render expone este puerto automáticamente
  },
});
