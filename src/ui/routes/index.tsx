import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { URI } from '~application/presenter/route';
import { Icon } from '~ui/design/components';
import * as Home from '~ui/pages/home';

export const Component = () => (
  <React.Suspense
    fallback={
      <section>
        <Icon variant="bars" />
      </section>
    }
  >
    <Switch>
      <Route exact component={Home.Component} path={URI.home} />
    </Switch>
  </React.Suspense>
);
