import * as React from 'react';

import { TwoColumn } from '~ui/design/layout';
import { Header } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const renderMiddle = () => <div>middle</div>;
const renderRight = () => <div>right</div>;

const Presentational = () => (
  <>
    <Header />
    <TwoColumn renderMiddle={renderMiddle} renderRight={renderRight} />
  </>
);

export const Component = React.memo(Presentational);
