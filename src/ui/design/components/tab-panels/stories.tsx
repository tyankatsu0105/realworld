import { ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tab, TabPanel, TabPanels, Tabs } from '~ui/design/components';

export default {
  title: 'Design/Components/TabPanels',
} as ComponentMeta<typeof TabPanels>;

export const Primary = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = React.useCallback((params: { index: number }) => {
    setValue(params.index);
  }, []);
  return (
    <>
      <Tabs value={value}>
        <Tab onClick={handleChange} tabIndex={0}>
          tab 1
        </Tab>
        <Tab onClick={handleChange} tabIndex={0}>
          tab 2
        </Tab>
        <Tab onClick={handleChange} tabIndex={0}>
          tab 3
        </Tab>
      </Tabs>

      <div>
        <TabPanels value={value}>
          <TabPanel>tab 1 content</TabPanel>
          <TabPanel>tab 2 content</TabPanel>
          <TabPanel>tab 3 content</TabPanel>
        </TabPanels>
      </div>
    </>
  );
};
