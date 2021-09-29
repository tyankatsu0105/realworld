import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Footer } from './index';

export default {
  title: 'Design/Recipes/Footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});

Primary.args = {};
