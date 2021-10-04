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
    <TwoColumn
      renderFooter={() => <Footer />}
      renderHeader={() => <Header />}
      renderLeft={renderLeft}
      renderMiddle={renderMiddle}
    />
  </>
);

export const Component = React.memo(Presentational);

const renderMiddle = () => <TabsFeed />;
const renderLeft = () => <TagList />;
