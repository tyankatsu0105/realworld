import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { URI } from '~application/presenter/route';
import { PageLoader } from '~ui/design/recipes';
import * as Home from '~ui/pages/home';
import * as Login from '~ui/pages/login';

export const Component = () => (
  <React.Suspense fallback={<PageLoader />}>
    <Switch>
      <Route exact component={Login.Component} path={URI.login} />
      <Route exact component={Home.Component} path={URI.home} />
    </Switch>
  </React.Suspense>
);
