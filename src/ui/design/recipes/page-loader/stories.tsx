import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { PageLoader } from './index';

export default {
  title: 'Design/Recipes/PageLoader',
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Primary = Template.bind({});

Primary.args = {};
