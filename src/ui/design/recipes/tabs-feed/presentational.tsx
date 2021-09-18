import * as React from 'react';

import { Tab, TabPanel, TabPanels, Tabs } from '~ui/design/components';
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
      <TabPanel>Global Feed</TabPanel>
    </TabPanels>
  </>
);

export const Component = React.memo(Presentational);
