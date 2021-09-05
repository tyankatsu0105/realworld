import * as React from 'react';

import { AppBar, Progress } from '~ui/design/components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

export const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading AppBar...</div>}>
    <AppBar />
    <Progress />
  </React.Suspense>
);

export const Component = React.memo(Presentational);
