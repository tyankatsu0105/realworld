import { StorybookConfig, CoreConfig, Options } from '@storybook/core-common';
import { UserConfig } from 'vite';

type Config = Omit<StorybookConfig, 'core'> & {
  core: Omit<CoreConfig, 'builder'> & {
    builder: CoreConfig['builder'] | 'storybook-builder-vite';
  };
  viteFinal?: (config: UserConfig, options: Options) => UserConfig;
};

const config: Config = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
};

export = config;
