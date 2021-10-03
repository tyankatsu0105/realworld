import * as React from 'react';

import { Tab, TabPanel, TabPanels, Tabs } from '~ui/design/components';
import { CardArticle } from '~ui/design/recipes';
// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const cardArticleProps = {
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

const Presentational = () => (
  <>
    <Tabs value={0}>
      <Tab tabIndex={0}>Global Feed</Tab>
      <Tab tabIndex={0}>2</Tab>
    </Tabs>

    <TabPanels value={0}>
      <TabPanel>
        <CardArticle {...cardArticleProps} />
        <CardArticle {...cardArticleProps} />
        <CardArticle {...cardArticleProps} />
      </TabPanel>
    </TabPanels>
  </>
);

export const Component = React.memo(Presentational);
