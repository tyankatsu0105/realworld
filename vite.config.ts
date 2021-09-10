import pluginLinaria from '@linaria/rollup';
import pluginSVGR from '@svgr/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';
import * as path from 'path';
import { defineConfig, Plugin, UserConfig } from 'vite';

/**
 * https://vitejs.dev/config/
 */
export const createConfig = (rootPath: string): UserConfig => {
  const alias = {
    '~api': path.resolve(rootPath, 'src/api'),
    '~application': path.resolve(rootPath, 'src/application'),
    '~ui': path.resolve(rootPath, 'src/ui'),
  };

  return {
    plugins: [
      reactRefresh(),
      (pluginSVGR() as unknown) as Plugin,
      pluginLinaria({
        /**
         * NOTE: https://github.com/callstack/linaria/issues/811#issuecomment-890926268
         * https://github.com/callstack/linaria/issues/630
         */
        babelOptions: {
          plugins: [
            [
              require.resolve('babel-plugin-module-resolver'),
              {
                alias,
                root: ['./'],
              },
            ],
          ],
          presets: [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-typescript'),
            require.resolve('@linaria/babel-preset'),
          ],
        },
        displayName: process.env.NODE_ENV !== 'production',
        sourceMap: process.env.NODE_ENV !== 'production',
      }),
    ],

    resolve: {
      alias,
    },
  };
};

const config = createConfig(__dirname);

export default defineConfig(config);
