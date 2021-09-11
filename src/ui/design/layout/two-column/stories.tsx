import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TwoColumn } from './index';

export default {
  title: 'Design/Layout/TwoColumn',
} as ComponentMeta<typeof TwoColumn>;

const Template: ComponentStory<typeof TwoColumn> = (args) => (
  <TwoColumn {...args} />
);

const renderMiddle = () => <div>middle</div>;
const renderRight = () => <div>right</div>;
const renderLeft = () => <div>left</div>;

export const WithLeft = Template.bind({});
WithLeft.args = {
  renderLeft,
  renderMiddle,
};

export const WithRight = Template.bind({});
WithRight.args = {
  renderMiddle,
  renderRight,
};
