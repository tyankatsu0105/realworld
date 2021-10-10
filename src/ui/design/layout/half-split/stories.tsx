import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { HalfSplit } from './index';

export default {
  title: 'Design/Layout/HalfSplit',
} as ComponentMeta<typeof HalfSplit>;

const Template: ComponentStory<typeof HalfSplit> = (args) => (
  <HalfSplit {...args} />
);

export const Component = Template.bind({});
Component.args = {};
