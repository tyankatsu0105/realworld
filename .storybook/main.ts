import * as path from 'path';
import { StorybookConfig, Options, CoreConfig } from '@storybook/core-common';
import { UserConfig } from 'vite';

import { createConfig } from '../vite.config';

type Config = Omit<StorybookConfig, 'core'> & {
  core: Omit<CoreConfig, 'builder'> & {
    builder: CoreConfig['builder'] | 'storybook-builder-vite';
  };
  viteFinal?: (config: UserConfig, options: Options) => UserConfig;
};

const rootPath = path.resolve(__dirname, '../');
const viteConfig = createConfig(rootPath);

const config: Config = {
  stories: ['../src/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
  viteFinal: (config) => {
    if (config.plugins && viteConfig.plugins) {
      const [, ...plugins] = viteConfig.plugins;
      config.plugins = [...config.plugins, ...plugins];
    }

    if (
      config.resolve &&
      config.resolve.alias &&
      viteConfig.resolve &&
      viteConfig.resolve.alias
    )
      config.resolve.alias = {
        ...config.resolve.alias,
        ...viteConfig.resolve.alias,
      };

    return config;
  },
};

export = config;
