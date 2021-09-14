import * as React from 'react';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLDivElement>;

// ------------------------------------
// Component
// ------------------------------------

const Presentational: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;

  return <div {...restProps}>{children}</div>;
};

export const Component = React.memo(Presentational);
