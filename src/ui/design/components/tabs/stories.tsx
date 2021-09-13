import { styled } from '@linaria/react';
import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Link } from 'react-router-dom';

import { Tab } from '~ui/design/components';

import { Tabs } from './index';

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
      <StyledTab onClick={handleChange} tabIndex={0}>
        tab 1
      </StyledTab>
      <StyledTab onClick={handleChange} tabIndex={0}>
        tab 2
      </StyledTab>
      <StyledTab onClick={() => alert('a')} tabIndex={0}>
        alert
      </StyledTab>
      <StyledTab>
        <Link to="/">link</Link>
      </StyledTab>
    </Tabs>
  );
};

const StyledTab = styled(Tab)`
  &.active {
    color: red;
  }
`;
