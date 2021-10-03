import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CardArticle } from './index';

export default {
  title: 'Design/Recipes/CardArticle',
} as ComponentMeta<typeof CardArticle>;

const Template: ComponentStory<typeof CardArticle> = (args) => (
  <CardArticle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  article: {
    commentCount: 10,
    favoriteCount: 100,
    postedDate: 'September 18, 2021',
    slug: '79765AF2-8A27-466C-92CE-638E092152F5',
    tags: ['hoge', 'fuga', 'piyo', 'foo', 'bar'],
    title: 'Clean architecture best practice',
  },
  author: {
    avatarSrc: 'https://avatars.githubusercontent.com/u/28397593',
    name: 'Tyankatsu',
  },
};
