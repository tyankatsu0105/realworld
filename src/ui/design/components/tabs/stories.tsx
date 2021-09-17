import { styled } from '@linaria/react';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Tabs } from './index';
import { Tab } from './tab';

export default {
  title: 'Design/Components/Tabs',
} as ComponentMeta<typeof Tabs>;

export const Primary = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = React.useCallback((params: { index: number }) => {
    setValue(params.index);
  }, []);
  return (
    <Tabs value={value}>
      <Tab onClick={handleChange} tabIndex={0}>
        tab 1
      </Tab>
      <Tab onClick={handleChange} tabIndex={0}>
        tab 2
      </Tab>
      <Tab
        onClick={(i) => {
          handleChange(i);
          alert('a');
        }}
        tabIndex={0}
      >
        alert
      </Tab>
      <Tab onClick={handleChange}>
        <Link to="/">link</Link>
      </Tab>
    </Tabs>
  );
};
