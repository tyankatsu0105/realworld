import pluginLinaria from '@linaria/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import { defineConfig, UserConfig } from 'vite';

// https://vitejs.dev/config/
export const createConfig = (rootPath: string): UserConfig => ({
  plugins: [
    reactRefresh(),
    pluginLinaria({
      displayName: process.env.NODE_ENV !== 'production',
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
  ],
  resolve: {
    alias: {
      '~api': path.resolve(rootPath, 'src/api'),
      '~application': path.resolve(rootPath, 'src/application'),
      '~ui': path.resolve(rootPath, 'src/ui'),
    },
  },
});

const config = createConfig(__dirname);

export default defineConfig(config);
