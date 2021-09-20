import { styled } from '@linaria/react';
import * as React from 'react';

import { Theme } from '~ui/styles';

import { Color, Variant } from './facade';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color: Color;
  variant: Variant;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, color, variant, ...restProps } = props;

  switch (props.variant) {
    case 'outlined':
      return (
        <Outlined {...restProps} color={color} variant={variant}>
          {children}
        </Outlined>
      );
    case 'contained':
      return (
        <Contained {...restProps} color={color} variant={variant}>
          {children}
        </Contained>
      );
    case 'text':
      return (
        <Text {...restProps} color={color} variant={variant}>
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
  color: Props['color'];
  variant: Props['variant'];
};
const Base = styled.button<BaseProps>`
  padding: ${() => Theme.spacer(3)}px ${() => Theme.spacer(2)}px;
  border-radius: 6px;
  font-weight: bold;

  :disabled {
    cursor: not-allowed;
    color: ${() => Theme.palettes.brand.primary[200]} !important;
    background-color: ${() => Theme.palettes.brand.primary[900]} !important;
    border: 0 !important;
  }
`;

const Contained = styled(Base)`
  background-color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return Theme.palettes.brand.primary[100];

      case 'accent':
        return Theme.palettes.brand.accent.A200;
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return Theme.palettes.brand.primary[200];

        case 'accent':
          return Theme.palettes.brand.accent.A400;
      }
    }};
  }
`;
const Outlined = styled(Base)`
  border: 3px solid
    ${(props) => {
      switch (props.color) {
        case 'primary':
          return Theme.palettes.brand.primary[200];

        case 'accent':
          return Theme.palettes.brand.accent.A700;
      }
    }};

  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return Theme.palettes.brand.primary[100];

        case 'accent':
          return Theme.palettes.brand.accent.A200;
      }
    }};
  }
`;
const Text = styled(Base)`
  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return Theme.palettes.brand.primary[100];

        case 'accent':
          return Theme.palettes.brand.accent.A200;
      }
    }};
  }
`;
