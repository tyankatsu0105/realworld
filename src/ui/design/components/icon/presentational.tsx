import * as React from 'react';

import { useIcons } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = {
  icons: ReturnType<typeof useIcons>;
  variant: keyof ReturnType<typeof useIcons>;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const Component = props.icons[props.variant];

  return <Component />;
};

export const Component = React.memo(Presentational);
