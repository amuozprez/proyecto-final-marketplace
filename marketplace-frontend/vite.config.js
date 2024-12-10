import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Mantén la base como raíz del dominio
  server: {
    port: 3000, // Opcional, para desarrollo local
  },
});
