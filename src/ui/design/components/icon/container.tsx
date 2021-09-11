import * as React from 'react';

import { useIcons } from './facade';
import { Component } from './presentational';
// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<React.ComponentPropsWithRef<typeof Component>, 'icons'>;

// ------------------------------------
// Component
// ------------------------------------

const Icon = (props: Props) => {
  const icons = useIcons();

  return <Component icons={icons} {...props} />;
};

export default Icon;
