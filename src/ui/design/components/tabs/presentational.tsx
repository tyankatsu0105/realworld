import * as React from 'react';
import styled from 'styled-components';

import { TabsContext } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  activeClass?: string;
  childrenWithProps: Record<string, unknown>[] | null | undefined;
  value: number;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { childrenWithProps, value, ...restProps } = props;

  return (
    <Wrap {...restProps}>
      <TabsContext.Provider value={value}>
        {childrenWithProps}
      </TabsContext.Provider>
    </Wrap>
  );
};

export const Component = React.memo(Presentational);

// ------------------------------------
// styles
// ------------------------------------

const Wrap = styled.div`
  display: inline-flex;
`;
