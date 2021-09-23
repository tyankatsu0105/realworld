import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement>;

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <Backdrop {...restProps}>{children}</Backdrop>;
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Backdrop = styled.div`
  color: ${(props) => props.theme.palettes.material.common['white']};
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.color.transparentize({
      alpha: 0.5,
      color: props.theme.palettes.material.blueGray[900],
    })};
`;
