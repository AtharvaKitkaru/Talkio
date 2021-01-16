import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.scss";
import { HashRouter, Route } from "react-router-dom";
// import { auth } from "./fbconfig";
// import Authenticator from "./components/auth/Authenticator";
// import Home from "./components/main/Home";

// auth.onAuthStateChanged((user) => {
//   if (user && user.emailVerified) {
//     //home
//     ReactDOM.render(
//       <HashRouter>
//         <Route component={Home}/>
//       </HashRouter>,
//       document.getElementById("root")
//     );
//   } else {
//     // no user
//     ReactDOM.render(
//       <HashRouter>
//         <Route component={Authenticator} />
//       </HashRouter>,
//       document.getElementById("root")
//     );
//   }
// });

import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
