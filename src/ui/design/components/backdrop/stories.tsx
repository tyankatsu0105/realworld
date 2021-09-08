import { Meta } from '@storybook/react';
import * as React from 'react';

import { Backdrop } from './index';

export default {
  title: 'Design/Components/Backdrop',
} as Meta;

export const Primary = (): React.ReactElement => {
  return (
    <>
      <Backdrop>contents</Backdrop>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque
        quaerat officia repudiandae. Debitis molestias reiciendis eligendi!
        Repellendus explicabo porro, magnam exercitationem amet magni facere
        quasi provident, molestias, libero similique!
      </p>
    </>
  );
};
