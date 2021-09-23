import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement>;

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
  padding: ${(props) => props.theme.spacer(3)}px
    ${(props) => props.theme.spacer(25)}px;
  background-color: ${(props) => props.theme.palettes.material.common.white};
`;
