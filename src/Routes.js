import React from "react";
import { Route, Switch } from "react-router-dom";

/*Components*/
import AppliedRoute from "./components/AppliedRoute";

/*Containers*/
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path={"/"} exact component={Home} appProps={appProps} />
      <AppliedRoute path={"/login"} exact component={Login} appProps={appProps} />
      <AppliedRoute path={"/login/reset"} exact component={ResetPassword} appProps={appProps} />
      <AppliedRoute path={"/settings"} exact component={Settings} appProps={appProps}/>
      <AppliedRoute path={"/settings/password"} exact component={ChangePassword} appProps={appProps} />
      <AppliedRoute path={"/settings/email"} exact component={ChangeEmail} appProps={appProps} />

      /* Finally, catch all unmatched routes */
      <AppliedRoute component={NotFound} />
    </Switch>
  );
}
