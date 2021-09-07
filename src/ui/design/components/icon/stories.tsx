import { Meta } from '@storybook/react';
import * as React from 'react';

import { useIcons } from './facade';
import { Icon } from './index';

export default {
  title: 'Design/Components/Icon',
} as Meta;

export const Primary = (): React.ReactElement => {
  const icons = useIcons();
  const keys = (Object.keys(icons) as unknown) as [
    keyof ReturnType<typeof useIcons>
  ];
  return (
    <ul>
      {keys.map((key) => {
        return (
          <li key={key}>
            <Icon variant={key} />
            <p>{key}</p>
          </li>
        );
      })}
    </ul>
  );
};
