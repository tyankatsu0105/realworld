import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TabsFeed } from './index';

export default {
  title: 'Design/Recipes/TabsFeed',
} as ComponentMeta<typeof TabsFeed>;

const Template: ComponentStory<typeof TabsFeed> = () => <TabsFeed />;

export const Primary = Template.bind({});

Primary.args = {};
