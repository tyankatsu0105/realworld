import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Avatar } from '~ui/design/components';

import { Chip } from './index';

export default {
  title: 'Design/Components/Chip',
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  return <Chip {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

const onClick = () => console.log('click element');

export const Clickable = Template.bind({});
Clickable.args = {
  children: 'Clickable',
  onClick,
};

const renderAvatar = () => (
  <StyledAvatar
    src="https://avatars.githubusercontent.com/u/28397593"
    variant="circle"
  />
);

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  children: 'WithAvatar',
  renderAvatar,
};

const renderClearButton = () => <button type="button">×</button>;

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  children: 'WithClearButton',
  renderAvatar,
  renderClearButton,
};

const StyledAvatar = styled(Avatar)`
  width: 20px;
  height: 20px;
`;
