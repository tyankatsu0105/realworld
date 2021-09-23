import { ComponentMeta } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';

import { useIcons } from './facade';
import { Icon } from './index';

export default {
  title: 'Design/Components/Icon',
} as ComponentMeta<typeof Icon>;

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
            <StyledIcon variant={key} />
            <p>{key}</p>
          </li>
        );
      })}
    </ul>
  );
};

const StyledIcon = styled(Icon)`
  width: 100px;
`;
