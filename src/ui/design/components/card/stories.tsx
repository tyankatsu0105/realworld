import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Card } from './index';

export default {
  title: 'Design/Components/Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  renderBody: () => <div>body</div>,
  renderFooter: () => <div>footer</div>,
  renderHeader: () => <div>header</div>,
};
