import { styled } from '@linaria/react';
import * as React from 'react';

import { Button } from '~ui/design/components';
import { Theme } from '~ui/styles';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Button>;

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { children, ...restProps } = props;

  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
const StyledButton = styled(Button)`
  background-color: ${() => Theme.palettes.brand.primary[100]};
  color: ${() => Theme.palettes.brand.text.primary};

  &:hover {
    background-color: ${() => Theme.palettes.brand.primary[200]};
  }
`;
