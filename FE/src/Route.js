import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./route/Home";
import Signup from "./route/Signup";
import Signin from "./route/Signin";
// import Dashboard from "./route/Dashboard";
// import PrivateRoute from "./route/PrivateRoute";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </BrowserRouter>
  );
}