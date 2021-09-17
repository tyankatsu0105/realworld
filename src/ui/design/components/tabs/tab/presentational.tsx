import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import * as React from 'react';

import { hasActiveClass } from '~ui/shared/utilities';
import { Theme } from '~ui/styles';
css;
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
  padding-bottom: ${() => Theme.spacer(1)}px;

  border-bottom: 0 solid ${() => Theme.palettes.brand.accent.A400};

  &:hover {
    border-bottom-width: 3px;
  }

  border-bottom-width: ${(props) =>
    hasActiveClass({
      activeClass: props.activeClass,
      className: props.className,
    })
      ? `3px`
      : 0};
  font-weight: ${(props) =>
    hasActiveClass({
      activeClass: props.activeClass,
      className: props.className,
    })
      ? `bold`
      : 'normal'};

  & + & {
    margin-left: ${() => Theme.spacer(5)}px;
  }
`;
