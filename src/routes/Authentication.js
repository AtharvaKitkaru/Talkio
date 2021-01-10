import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPass from "../components/auth/ForgotPass";
import { Switch, Route, Redirect } from "react-router-dom";

const Authentication = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/forgot-password' component={ForgotPass} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Authentication;
