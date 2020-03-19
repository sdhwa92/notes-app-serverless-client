import React from "react";
import { Route, Switch } from "react-router-dom";

/*Components*/
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

/*Containers*/
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import ResetPassword from "./containers/ResetPassword";
import Settings from "./containers/Settings";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Payment from "./containers/Payment";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path={"/"} exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path={"/login"} exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path={"/login/reset"} exact component={ResetPassword} appProps={appProps} />
      <AuthenticatedRoute path={"/settings"} exact component={Settings} appProps={appProps}/>
      <AuthenticatedRoute path={"/settings/password"} exact component={ChangePassword} appProps={appProps} />
      <AuthenticatedRoute path={"/settings/email"} exact component={ChangeEmail} appProps={appProps} />
      <AuthenticatedRoute path={"/settings/payment"} exact component={Payment} appProps={appProps} />
      <UnauthenticatedRoute path={"/signup"} exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />

      /* Finally, catch all unmatched routes */
      <AppliedRoute component={NotFound} />
    </Switch>
  );
}
