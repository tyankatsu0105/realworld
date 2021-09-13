import * as React from 'react';

import { TabsContext } from '~ui/design/components';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<
  React.ComponentPropsWithRef<typeof Component>,
  'isActive' | 'childrenIndex'
> & {
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
    () => props.__internal__childrenIndex === currentTabValue,
    [props.__internal__childrenIndex, currentTabValue]
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

  return (
    <Component
      {...restProps}
      childrenIndex={childrenIndex}
      isActive={isActive}
      onClick={onClick}
    />
  );
};

export default Tab;
