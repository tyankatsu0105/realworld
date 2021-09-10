import * as React from 'react';

import { useIcons } from './facade';
// ------------------------------------
// Props
// ------------------------------------

type Props = React.HTMLAttributes<HTMLElement> & {
  icons: ReturnType<typeof useIcons>;
  variant: keyof ReturnType<typeof useIcons>;
};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => {
  const { icons, variant, ...restProps } = props;
  const Component = icons[variant];

  return (
    <div {...restProps}>
      <Component style={{ width: '100%' }} />
    </div>
  );
};

export const Component = React.memo(Presentational);
