import { Meta } from '@storybook/react';
import * as React from 'react';

import { AppBar } from './index';

export default {
  title: 'Design/Components/AppBar',
} as Meta;

export const Primary = (): React.ReactElement => {
  return <AppBar />;
};
