import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ButtonAccent } from './index';

export default {
  title: 'Design/Recipes/ButtonAccent',
} as ComponentMeta<typeof ButtonAccent>;

const Template: ComponentStory<typeof ButtonAccent> = (args) => {
  const { children, ...restArgs } = args;

  return <ButtonAccent {...restArgs}>{children}</ButtonAccent>;
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'outlined',
  variant: 'outlined',
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'contained',
  variant: 'contained',
};

export const Text = Template.bind({});
Text.args = {
  children: 'text',
  variant: 'text',
};
