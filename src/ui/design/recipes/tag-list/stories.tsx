import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TagList } from './index';

export default {
  title: 'Design/Recipes/TagList',
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = () => <TagList />;

export const Primary = Template.bind({});
