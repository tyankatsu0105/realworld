import * as React from 'react';

import { Header } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading header...</div>}>
    <Header />
  </React.Suspense>
);

export const Component = React.memo(Presentational);
