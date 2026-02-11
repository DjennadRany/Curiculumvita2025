import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({ include: /\.(jsx|tsx|js)$/ }),
  ],
  base: '/Curiculumvita2025/',
  assetsInclude: ['**/*.PNG'],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
