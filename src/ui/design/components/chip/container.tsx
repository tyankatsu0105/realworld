import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.ComponentPropsWithRef<typeof Component>, 'isClickable'>;

// ------------------------------------
// Component
// ------------------------------------

const Chip: React.FC<Props> = (props) => {
  const isClickable = React.useMemo(() => 'onClick' in props, [props]);

  return <Component {...props} isClickable={isClickable} />;
};

export default Chip;
