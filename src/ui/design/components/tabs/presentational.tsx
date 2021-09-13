import { styled } from '@linaria/react';
import * as React from 'react';

import { TabsContext } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement> & {
  childrenWithProps: {}[] | null | undefined;
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
  display: flex;
`;
