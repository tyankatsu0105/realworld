import * as React from 'react';

import { Lazy } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading header...</div>}>
    <Lazy.Header />
  </React.Suspense>
);

export const Component = React.memo(Presentational);
