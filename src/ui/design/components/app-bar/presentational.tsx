import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {};

const Presentational: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <Wrap {...restProps}>{children}</Wrap>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  width: 100%;
  padding: ${() => Theme.spacer(5)}px ${() => Theme.spacer(25)}px;
  background-color: ${() => Theme.palettes.material.common.white};
`;
