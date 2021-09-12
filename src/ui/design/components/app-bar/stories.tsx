import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppBar } from './index';

export default {
  title: 'Design/Components/AppBar',
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'appbar',
};
