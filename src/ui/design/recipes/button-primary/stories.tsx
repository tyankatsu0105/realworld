import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ButtonPrimary } from './index';

export default {
  title: 'Design/Recipes/ButtonPrimary',
} as ComponentMeta<typeof ButtonPrimary>;

const Template: ComponentStory<typeof ButtonPrimary> = (args) => {
  const { children, ...restArgs } = args;

  return (
    <>
      <ButtonPrimary {...restArgs}>{children}</ButtonPrimary>
      <ButtonPrimary {...restArgs} disabled>
        disabled
      </ButtonPrimary>
    </>
  );
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
