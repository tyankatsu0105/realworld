import * as React from 'react';
import styled from 'styled-components';

import { Utilities } from '~ui/shared';

import { Color } from './facade';

// ------------------------------------
// Props
// ------------------------------------

export type FeatureProps = {
  color: Color;
};

export const DefaultElement = 'a';

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
  const { children, color, component, ...restProps } = props;

  return (
    <Link
      {...restProps}
      as={Utilities.Component.componentToAs(component)}
      color={color}
    >
      {children}
    </Link>
  );
};

export const Component: Utilities.Component.PolymorphicMemoExoticComponent<
  FeatureProps,
  typeof DefaultElement
> = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

type LinkProps = {
  color: FeatureProps['color'];
};
const Link = styled.a<LinkProps>`
  color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return props.theme.palettes.brand.primary[600];

      case 'accent':
        return props.theme.palettes.brand.accent[300];
    }
  }};

  &:hover {
    color: ${(props) => {
      switch (props.color) {
        case 'primary':
          return props.theme.palettes.brand.primary[900];

        case 'accent':
          return props.theme.palettes.brand.accent[600];
      }
    }};
  }
`;
