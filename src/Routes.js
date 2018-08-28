import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import RouteNotFound from "./containers/RouteNotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";

export default ({ routeprops }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={routeprops} />
    <AppliedRoute path="/login" exact component={Login} props={routeprops} />
    <AppliedRoute path="/signup" exact component={Signup} props={routeprops} />
    <AppliedRoute
      path="/notes/new"
      exact
      component={NewNote}
      props={routeprops}
    />

    <Route component={RouteNotFound} />
  </Switch>
);
