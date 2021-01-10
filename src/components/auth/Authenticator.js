import React from "react";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import { Switch, Route, Redirect } from "react-router-dom";

const Authenticator = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPass} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Authenticator;
