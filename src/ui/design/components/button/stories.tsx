import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { color, variant } from './facade';
import { Button } from './index';

export default {
  argTypes: {
    color: {
      control: { options: Object.values(color), type: 'select' },
    },
    variant: {
      control: { options: Object.values(variant), type: 'select' },
    },
  },
  title: 'Design/Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children, ...restArgs } = args;

  return <Button {...restArgs}>{children}</Button>;
};

export const Component = Template.bind({});
Component.args = {
  as: 'a',
  children: 'button',
  color: 'primary',
  variant: 'contained',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  color: 'primary',
  disabled: true,
  variant: 'contained',
};
