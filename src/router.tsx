import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import "sass/global";

import { BodyContentLoader } from "components/ContentLoader";

const HomePage = lazy(
  () =>
    import(
      /*
    webpackChunkName: "home-page",
    webpackPreload: true
  */
      "pages/HomePage"
    )
);

export default (
  <Fragment>
    <Suspense fallback={<BodyContentLoader />}>
      <Switch>
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </Fragment>
);
