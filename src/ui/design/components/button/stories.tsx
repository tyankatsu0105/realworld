import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from './index';

export default {
  title: 'Design/Components/Button',
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children, ...restArgs } = args;

  return <Button {...restArgs}>{children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
};
