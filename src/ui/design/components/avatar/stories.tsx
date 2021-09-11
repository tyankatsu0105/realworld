import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { variant } from './facade';
import { Avator } from './index';

export default {
  argTypes: {
    variant: {
      control: { options: Object.values(variant), type: 'select' },
    },
  },
  title: 'Design/Components/Avator',
} as ComponentMeta<typeof Avator>;

const Template: ComponentStory<typeof Avator> = (args) => {
  const { children, ...restArgs } = args;

  return <Avator {...restArgs}>{children}</Avator>;
};

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://avatars.githubusercontent.com/u/28397593',
  variant: 'square',
};
