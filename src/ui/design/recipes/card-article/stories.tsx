import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CardArticle } from './index';

export default {
  title: 'Design/Recipes/CardArticle',
} as ComponentMeta<typeof CardArticle>;

const Template: ComponentStory<typeof CardArticle> = () => <CardArticle />;

export const Primary = Template.bind({});
