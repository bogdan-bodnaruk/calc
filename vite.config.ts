import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    cssCodeSplit: false,
    outDir: 'build',
    target: 'esnext',
    minify: true,
  },
  plugins: [
    react(),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setupTests.ts'],
  }
});
