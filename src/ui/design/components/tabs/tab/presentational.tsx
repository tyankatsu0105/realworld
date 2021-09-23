import * as React from 'react';
import styled from 'styled-components';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  activeClass: string;
  childrenIndex: number;
  onClick?: (
    params: {
      index: number;
    },
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { activeClass, children, childrenIndex, ...restProps } = props;

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) =>
      props.onClick && props.onClick({ index: childrenIndex }, event),
    [childrenIndex, props]
  );

  return (
    <StyledTab
      {...restProps}
      activeClass={activeClass}
      className={props.className}
      onClick={onClick}
    >
      {children}
    </StyledTab>
  );
};

export const Component = React.memo(Presentational);

type StyledTabProps = {
  activeClass: Props['activeClass'];
};
const StyledTab = styled.div<StyledTabProps>`
  font-size: 20px;
  cursor: pointer;
  padding-bottom: ${(props) => props.theme.spacer(1)}px;

  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom-color: ${(props) =>
      props.theme.color.transparentize({
        alpha: 0.5,
        color: props.theme.palettes.brand.accent.A400,
      })};
  }

  &.${(props) => props.activeClass} {
    border-bottom-color: ${(props) => props.theme.palettes.brand.accent.A400};
    font-weight: bold;
  }

  & + & {
    margin-left: ${(props) => props.theme.spacer(5)}px;
  }
`;
