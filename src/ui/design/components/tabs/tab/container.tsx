import * as React from 'react';

import { TabsContext } from '../facade';
import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<
  React.ComponentPropsWithRef<typeof Component>,
  'isActive' | 'childrenIndex'
> & {
  __internal__activeClass?: string;
  __internal__childrenIndex?: number;
};

// ------------------------------------
// Component
// ------------------------------------

const Tab: React.FC<Props> = (props: Props) => {
  const { __internal__childrenIndex, ...restProps } = props;
  const childrenIndex = __internal__childrenIndex || 0;
  const currentTabValue = React.useContext(TabsContext);

  const isActive = React.useMemo(
    () => __internal__childrenIndex === currentTabValue,
    [__internal__childrenIndex, currentTabValue]
  );

  const onClick = React.useCallback(
    (
      params: {
        index: number;
      },
      event: React.MouseEvent<HTMLDivElement>
    ) => props.onClick && props.onClick(params, event),
    [props]
  );

  const className = React.useMemo(
    () => `${props.className} ${isActive ? props.__internal__activeClass : ''}`,
    [isActive, props.className, props.__internal__activeClass]
  );

  return (
    <Component
      {...restProps}
      childrenIndex={childrenIndex}
      className={className}
      onClick={onClick}
    />
  );
};

export default Tab;