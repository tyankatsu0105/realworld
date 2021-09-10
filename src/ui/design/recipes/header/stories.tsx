import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Header } from './index';

export default {
  title: 'Design/Recipes/Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});

Primary.args = {};
