import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoutes } from "./routes-list";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {PublicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
