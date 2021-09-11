import * as React from 'react';

import { Button } from '~ui/design/components';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = React.ComponentPropsWithRef<typeof Button>;

// ------------------------------------
// Component
// ------------------------------------

const ButtonPrimary = (props: Props) => {
  return <Component {...props} />;
};

export default ButtonPrimary;
