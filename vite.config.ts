import pluginLinaria from '@linaria/rollup';
import pluginSVGR from '@svgr/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import { defineConfig, Plugin, UserConfig } from 'vite';

// https://vitejs.dev/config/
export const createConfig = (rootPath: string): UserConfig => ({
  /**
   * NOTE: reactRefreshを必ず最初にする
   * storybookのmain.tsでreactRefreshを使わせないように弾いているため
   * `"prevRefreshReg" has already been declared`となる
   */
  plugins: [
    reactRefresh(),
    (pluginSVGR() as unknown) as Plugin,
    // (pluginSVGR() as unknown) as Plugin,
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
