import * as React from 'react';
import styled from 'styled-components';

import { Types } from '~ui/shared';

// ------------------------------------
// Props
// ------------------------------------

export type FeatureProps = {};

export const DefaultElement = 'div';

export type Props<
  Element extends React.ElementType = typeof DefaultElement,
  Props = Record<string, unknown>
> = Types.Component.PolymorphicPropsWithRef<Props, Element>;

const Presentational = <
  Element extends React.ElementType = typeof DefaultElement
>(
  props: Props<Element, FeatureProps>
) => {
  const { children, ...restProps } = props;

  return <Wrap {...restProps}>{children}</Wrap>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacer(3)}px
    ${(props) => props.theme.spacer(25)}px;
  background-color: ${(props) => props.theme.palettes.material.common.white};
`;
