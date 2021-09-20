import * as React from 'react';

import { Tab, TabPanel, TabPanels, Tabs } from '~ui/design/components';
import { CardArticle } from '~ui/design/recipes';
// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Tabs value={0}>
      <Tab tabIndex={0}>Global Feed</Tab>
      <Tab tabIndex={0}>2</Tab>
    </Tabs>

    <TabPanels value={0}>
      <TabPanel>
        <CardArticle></CardArticle>
        <CardArticle></CardArticle>
        <CardArticle></CardArticle>
      </TabPanel>
    </TabPanels>
  </>
);

export const Component = React.memo(Presentational);
