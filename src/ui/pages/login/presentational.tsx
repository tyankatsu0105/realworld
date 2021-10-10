import * as React from 'react';

import { HalfSplit } from '~ui/design/layout';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <HalfSplit />
  </>
);

export const Component = React.memo(Presentational);
