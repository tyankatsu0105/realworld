import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { variant } from './facade';
import { Avatar } from './index';

export default {
  argTypes: {
    variant: {
      control: { options: Object.values(variant), type: 'select' },
    },
  },
  title: 'Design/Components/Avatar',
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://avatars.githubusercontent.com/u/28397593',
  variant: 'square',
};
