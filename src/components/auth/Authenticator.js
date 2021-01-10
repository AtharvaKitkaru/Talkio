import React from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import { Switch, Route, Redirect } from "react-router-dom";

const Authenticator = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={ForgotPass} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Authenticator;
