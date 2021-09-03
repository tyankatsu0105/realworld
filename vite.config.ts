import pluginLinaria from '@linaria/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), pluginLinaria()],
  resolve: {
    alias: {
      '~ui': path.resolve(__dirname, './src/ui'),
    },
  },
});
