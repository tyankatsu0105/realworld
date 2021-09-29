import * as React from 'react';

import { TwoColumn } from '~ui/design/layout';
import { Footer, Header, TabsFeed, TagList } from '~ui/design/recipes';

// ------------------------------------
// Props
// ------------------------------------

// ------------------------------------
// Component
// ------------------------------------

const Presentational = () => (
  <>
    <Header />
    <TwoColumn renderLeft={renderLeft} renderMiddle={renderMiddle} />
    <Footer />
  </>
);

export const Component = React.memo(Presentational);

const renderMiddle = () => <TabsFeed />;
const renderLeft = () => <TagList />;
