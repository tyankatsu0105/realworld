import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { URI } from '~application/presenter/route';
import { PageLoader } from '~ui/design/recipes';
import * as Home from '~ui/pages/home';

export const Component = () => (
  <React.Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact component={Home.Component} path={URI.home} />
    </Switch>
  </React.Suspense>
);
