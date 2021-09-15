import * as React from 'react';

import { Component } from './presentational';

// ------------------------------------
// Props
// ------------------------------------

type Props = Omit<
  React.ComponentPropsWithRef<typeof Component>,
  'childrenWithProps'
>;

// ------------------------------------
// Component
// ------------------------------------

const Tabs: React.FC<Props> = (props) => {
  const childrenWithProps = React.Children.map(
    props.children,
    (child, __internal__childrenIndex) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          __internal__activeClass: props.activeClass || 'active',
          __internal__childrenIndex,
        });
      }

      return child;
    }
  );

  return <Component {...props} childrenWithProps={childrenWithProps} />;
};

export default Tabs;
