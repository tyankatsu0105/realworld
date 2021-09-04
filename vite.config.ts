import pluginLinaria from '@linaria/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    pluginLinaria({
      displayName: process.env.NODE_ENV !== 'production',
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
  ],
  resolve: {
    alias: {
      '~api': path.resolve(__dirname, './src/api'),
      '~application': path.resolve(__dirname, './src/application'),
      '~ui': path.resolve(__dirname, './src/ui'),
    },
  },
});
