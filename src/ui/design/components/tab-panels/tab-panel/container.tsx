import * as React from 'react';

import { TabPanelsContext } from '../facade';
import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component> & {
  __internal__childrenIndex?: number;
};

// ------------------------------------
// Component
// ------------------------------------

const TabPanel: React.FC<Props> = (props: Props) => {
  const { __internal__childrenIndex, ...restProps } = props;
  const currentTabPanelValue = React.useContext(TabPanelsContext);

  const isActive = React.useMemo(
    () => __internal__childrenIndex === currentTabPanelValue,
    [__internal__childrenIndex, currentTabPanelValue]
  );

  return isActive ? <Component {...restProps} /> : <></>;
};

export default TabPanel;
