import * as React from 'react';
import styled from 'styled-components';

import { Utilities } from '~ui/shared';

import { Color, Variant } from './facade';

// ------------------------------------
// Props
// ------------------------------------

export type FeatureProps = {
  color: Color;
  variant: Variant;
};

export const DefaultElement = 'button';

export type Props<
  Element extends React.ElementType = typeof DefaultElement,
  Props = Record<string, unknown>
> = Utilities.Component.PolymorphicPropsWithRef<Props, Element>;

// ------------------------------------
// Component
// ------------------------------------

const Presentational = <
  Element extends React.ElementType = typeof DefaultElement
>(
  props: Props<Element, FeatureProps>
) => {
  const { children, color, component, variant, ...restProps } = props;

  switch (props.variant) {
    case 'outlined':
      return (
        <Outlined
          {...restProps}
          as={Utilities.Component.componentToAs(component)}
          color={color}
          variant={variant}
        >
          {children}
        </Outlined>
      );
    case 'contained':
      return (
        <Contained
          {...restProps}
          as={Utilities.Component.componentToAs(component)}
          color={color}
          variant={variant}
        >
          {children}
        </Contained>
      );
    case 'text':
      return (
        <Text
          {...restProps}
          as={Utilities.Component.componentToAs(component)}
          color={color}
          variant={variant}
        >
          {children}
        </Text>
      );
  }
};

export const Component: Utilities.Component.PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof DefaultElement
> = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

type BaseProps = {
  color: FeatureProps['color'];
  variant: FeatureProps['variant'];
};
const Base = styled.button<BaseProps>`
  padding: ${(props) => props.theme.spacer(3)}px
    ${(props) => props.theme.spacer(2)}px;
  border-radius: 6px;
  font-weight: bold;
  display: inline-block;

  :disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.palettes.brand.primary[200]} !important;
    background-color: ${(props) =>
      props.theme.palettes.brand.primary[900]} !important;
    border: 0 !important;
  }
`;

const Contained = styled(Base)`
  background-color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return props.theme.palettes.brand.primary[100];

      case 'accent':
        return props.theme.palettes.brand.accent.A200;
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return props.theme.palettes.brand.primary[200];

        case 'accent':
          return props.theme.palettes.brand.accent.A400;
      }
    }};
  }
`;
const Outlined = styled(Base)`
  border: 3px solid
    ${(props) => {
      switch (props.color) {
        case 'primary':
          return props.theme.palettes.brand.primary[200];

        case 'accent':
          return props.theme.palettes.brand.accent.A700;
      }
    }};

  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return props.theme.palettes.brand.primary[100];

        case 'accent':
          return props.theme.palettes.brand.accent.A200;
      }
    }};
  }
`;
const Text = styled(Base)`
  &:hover {
    background-color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return props.theme.palettes.brand.primary[100];

        case 'accent':
          return props.theme.palettes.brand.accent.A200;
      }
    }};
  }
`;
