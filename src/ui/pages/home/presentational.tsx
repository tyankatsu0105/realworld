import * as React from 'react';

import { HeaderLazy } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

type Props = {};

// ------------------------------------
// Component
// ------------------------------------

const Presentational = (props: Props) => (
  <React.Suspense fallback={<div>loading header...</div>}>
    <HeaderLazy />
  </React.Suspense>
);

export const Component = React.memo(Presentational);
