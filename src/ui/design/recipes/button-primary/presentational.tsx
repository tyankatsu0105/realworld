import { styled } from '@linaria/react';
import * as React from 'react';

import { Button } from '~ui/design/components';
import { Theme } from '~ui/styles';
// ------------------------------------
// Props
// ------------------------------------

type Variant = 'outlined' | 'contained' | 'text';

type Props = React.ComponentPropsWithRef<typeof Button> & {
  variant: Variant;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { children, variant, ...restProps } = props;

  switch (props.variant) {
    case 'outlined':
      return (
        <Outlined {...restProps} variant={variant}>
          {children}
        </Outlined>
      );
    case 'contained':
      return (
        <Contained {...restProps} variant={variant}>
          {children}
        </Contained>
      );
    case 'text':
      return (
        <Text {...restProps} variant={variant}>
          {children}
        </Text>
      );
  }
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
type BaseProps = {
  variant: Props['variant'];
};
const Base = styled(Button)<BaseProps>`
  color: ${() => Theme.palettes.brand.text.primary};
`;

const Contained = styled(Base)`
  background-color: ${() => Theme.palettes.brand.primary[100]};

  &:hover {
    background-color: ${() => Theme.palettes.brand.primary[200]};
  }
`;
const Outlined = styled(Base)`
  border: 3px solid ${() => Theme.palettes.brand.primary[200]};

  &:hover {
    background-color: ${() => Theme.palettes.brand.primary[100]};
  }
`;
const Text = styled(Base)`
  &:hover {
    background-color: ${() => Theme.palettes.brand.primary[100]};
  }
`;
