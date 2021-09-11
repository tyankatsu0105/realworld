import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Component>;

// ------------------------------------
// Component
// ------------------------------------

const PageLoader = (props: Props) => {
  return <Component />;
};

export default PageLoader;
