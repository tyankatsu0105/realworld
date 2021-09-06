import * as React from 'react';

import { AppBar } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading AppBar...</div>}>
    <AppBar />
  </React.Suspense>
);

export const Component = React.memo(Presentational);
