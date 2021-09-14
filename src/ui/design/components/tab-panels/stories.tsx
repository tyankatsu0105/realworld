import { styled } from '@linaria/react';
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
        <StyledTab onClick={handleChange} tabIndex={0}>
          tab 1
        </StyledTab>
        <StyledTab onClick={handleChange} tabIndex={0}>
          tab 2
        </StyledTab>
        <StyledTab onClick={handleChange} tabIndex={0}>
          tab 3
        </StyledTab>
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

const StyledTab = styled(Tab)`
  &.active {
    color: red;
  }
`;
