import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./fbconfig";
import Authenticator from "./components/auth/Authenticator";

auth.onAuthStateChanged((user) => {
  if (user) {
    if (!user.emailVerified) {
      console.log(`user not verified`);
      auth.signOut();
    } else {
      //home
      ReactDOM.render(
        <BrowserRouter>
          <p>{auth.currentUser.displayName}</p>
          <button
            onClick={() => auth.signOut()}
            type="button"
            name="sign__out"
            id="sign__out"
            class="btn btn-primary btn-lg btn-block"
          >
            Sign out
          </button>
        </BrowserRouter>,
        document.getElementById("root")
      );
    }
  } else {
    // no user
    ReactDOM.render(
      <BrowserRouter>
        <Authenticator />
      </BrowserRouter>,
      document.getElementById("root")
    );
  }
});
