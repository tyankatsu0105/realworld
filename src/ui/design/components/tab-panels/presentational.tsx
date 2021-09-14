import * as React from 'react';

import { TabPanelsContext } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  childrenWithProps: Record<string, unknown>[] | null | undefined;
  value: number;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { childrenWithProps, value, ...restProps } = props;

  return (
    <div {...restProps}>
      <TabPanelsContext.Provider value={value}>
        {childrenWithProps}
      </TabPanelsContext.Provider>
    </div>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------
