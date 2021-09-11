import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ButtonPrimary } from './index';

export default {
  title: 'Design/Recipes/ButtonPrimary',
} as ComponentMeta<typeof ButtonPrimary>;

const Template: ComponentStory<typeof ButtonPrimary> = (args) => {
  const { children, ...restArgs } = args;

  return <ButtonPrimary {...restArgs}>{children}</ButtonPrimary>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'ButtonPrimary',
};
