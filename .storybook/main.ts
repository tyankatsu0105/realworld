import { StorybookConfig, CoreConfig } from '@storybook/core-common';

type Config = Omit<StorybookConfig, 'core'> & {
  core: Omit<CoreConfig, 'builder'> & {
    builder: CoreConfig['builder'] | 'storybook-builder-vite';
  };
};

const config: Config = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite',
  },
};

export = config;
