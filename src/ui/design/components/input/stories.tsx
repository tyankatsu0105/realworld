import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { availableTypes } from './facade';
import { Input } from './index';

export default {
  argTypes: {
    type: {
      control: { options: Object.values(availableTypes), type: 'select' },
    },
  },

  title: 'Design/Components/Input',
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Component = Template.bind({});
Component.args = {
  defaultValue: 'input component',
  type: 'text',
};
