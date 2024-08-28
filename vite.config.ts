import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/jesuisleyanis.github.io/',  // Chemin de base pour les ressources
});
