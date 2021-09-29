import * as React from 'react';

import { TwoColumn } from '~ui/design/layout';
import { Header, TabsFeed, TagList } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Header />
    <TwoColumn renderMiddle={renderMiddle} renderRight={renderRight} />
  </>
);

export const Component = React.memo(Presentational);

const renderMiddle = () => <TabsFeed />;
const renderRight = () => <TagList />;
