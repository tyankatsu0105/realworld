import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Backdrop } from './index';

export default {
  title: 'Design/Components/Backdrop',
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = () => (
  <>
    <Backdrop>contents</Backdrop>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque
      quaerat officia repudiandae. Debitis molestias reiciendis eligendi!
      Repellendus explicabo porro, magnam exercitationem amet magni facere quasi
      provident, molestias, libero similique!
    </p>
  </>
);

export const Primary = Template.bind({});

Primary.args = {};
