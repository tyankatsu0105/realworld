import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import { color } from './facade';
import { Link } from './index';

export default {
  argTypes: {
    color: {
      control: { options: Object.values(color), type: 'select' },
    },
  },
  title: 'Design/Components/Link',
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  const { children, ...restArgs } = args;

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
        <Link {...restArgs}>{children}</Link> Minus repellat, quod eos ad magnam
        rem alias libero dolorem voluptas deserunt quasi possimus ducimus
        corrupti nisi consequatur vitae quia eum deleniti?
      </p>
    </>
  );
};

export const Component = Template.bind({});
Component.args = {
  children: 'Link',
  color: 'primary',
  href: '',
};

export const InjectedComponent = Template.bind({});
InjectedComponent.args = {
  as: ReactRouterDOM.Link,
  children: 'Link',
  color: 'primary',
  to: 'path/to',
};
