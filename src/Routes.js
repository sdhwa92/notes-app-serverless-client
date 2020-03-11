import React from "react";
import { Route, Switch } from "react-router-dom";

/*Components*/
import AppliedRoute from "./components/AppliedRoute";

/*Containers*/
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path={"/"} exact component={Home} appProps={appProps} />
      <AppliedRoute path={"/login"} exact component={Login} appProps={appProps} />
      <AppliedRoute path={"/login/reset"} exact component={ResetPassword} appProps={appProps} />

      /* Finally, catch all unmatched routes */
      <AppliedRoute component={NotFound} />
    </Switch>
  );
}