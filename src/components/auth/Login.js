import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fbconfig";
import $ from "jquery";
import LoginJPG from "../../assets/login.jpg";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleChange = (event) => {
    let { target } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user_creds) => {
        if (!user_creds.user.emailVerified) {
          auth.signOut().then(() => {
            this.setState({
              error: "Please verify your Email address to proceed.",
            });
            $(".alert-danger").removeClass("d-none");
            $("#resend__email__verification").show();
          });
        }
      })
      .catch((err) => {
        this.setState({ error: err.message });
        $(".alert-danger").removeClass("d-none");
      });
  };

  render() {
    return (
      <div
        id="signin"
        className="d-flex bg-white flex-xl-row min-vh-100 flex-column align-items-center noselect justify-content-center"
      >
        <div className="col-xl-6 col-12 bg- d-flex justify-content-center">
          <img
            src={LoginJPG}
            alt="login"
            style={{ height: `75vh` }}
            className=""
          />
        </div>
        <div className="col-xl-5 col-12 d-flex flex-column justify-content-center">
          <h1 className="text-center mb-4">Login</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fa fa-fw fa-envelope" /> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fa fa-fw fa-asterisk" /> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/forgot-password">Forgot password</Link>
              <Link to="/register">Register</Link>
            </div>

            <div class="alert alert-danger d-none my-5" role="alert">
              {this.state.error}
            </div>

            <div className="text-center my-3">
              <button type="submit" className="btn btn-success shadow">
                Login
              </button>
            </div>

            <div
              id="resend__email__verification"
              style={{ display: "none" }}
              onClick={() => {
                // alert("resend verification.");
                auth
                  .signInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                  )
                  .then((user_creds) => {
                    alert(`logged in`);
                    user_creds.user.sendEmailVerification().finally(() => {
                      auth.signOut().finally(() => {
                        alert("Verification link resent.");
                      });
                    });
                  });
              }}
            >
              Resend verification mail
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
