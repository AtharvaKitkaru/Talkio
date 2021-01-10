import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fbconfig";
import $ from "jquery";
import RegisterImg from "../../assets/register.jpg";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  passwordSecure = () => {
    return this.state.password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/
    )
      ? true
      : false;
  };

  handleChange = (e) => {
    let event = e.target;
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (event.name === "password") {
          if (
            this.passwordSecure() &&
            this.state.password === this.state.confirmPassword
          ) {
            $("#confirmPassword")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#confirmPassword")
              .addClass("is-invalid")
              .removeClass("is-valid");
          }
          if (this.passwordSecure()) {
            $("#password").removeClass("is-invalid").addClass("is-valid");
          } else {
            $("#password").addClass("is-invalid").removeClass("is-valid");
          }
        }
        if (event.name === "confirmPassword") {
          if (
            this.passwordSecure() &&
            this.state.password === this.state.confirmPassword
          ) {
            $("#confirmPassword")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#confirmPassword")
              .addClass("is-invalid")
              .removeClass("is-valid");
          }
        }
      }
    );
  };

  render() {
    return (
      <div
        id="signup"
        className="min-vh-100 bg-white d-flex flex-xl-row flex-column mx-auto align-items-center justify-content-center"
      >
        <div className="col-xl-6 col-12 bg- d-flex justify-content-center">
          <img
            src={RegisterImg}
            alt="login"
            style={{ height: `75vh` }}
            className=""
          />
        </div>
        <div className="col-xl-5 col-12 d-flex flex-column justify-content-center">
          <h1 style={{fontFamily: `SF Pro Rounded`, fontWeight: `bold`}} className="text-center mb-4"> Register </h1>
          <form autoComplete="off">
            <div className="form-group">
              <label htmlFor="email">
                <i className="fa fa-fw fa-envelope" /> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                autoFocus
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
            <small className="form-text text-muted mb-3">
              At least 8 characters—the more characters, the better.
              <br /> A mixture of both uppercase and lowercase letters.
              <br /> A mixture of letters and numbers.
              <br /> Inclusion of at least one special character, e.g., ! @ # ?
              &#93;
            </small>
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <i className="fa fa-fw fa-rocket" /> Re-enter password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                required
                disabled={!this.passwordSecure()}
                onChange={this.handleChange}
              />
            </div>

            <div
              class="alert alert-danger d-none mb-0 "
              role="alert"
              style={{ fontSize: "0.9em" }}
            >
              {this.state.error}
            </div>
            <div class="alert alert-success d-none mb-0 " role="alert">
              Verification mail has been sent to your mail id.
            </div>
            <div className="form-group d-flex justify-content-between my-5 text-center">
              <Link to="/login" className="text-decoration-none">
                <button className="btn btn-light text-primary">
                  <span className="fa fa-fw mr-2 fa-chevron-left"></span>
                  Login
                </button>
              </Link>
              <button
                className="btn btn-success shadow-sm px-3"
                disabled={
                  this.passwordSecure() &&
                  this.state.confirmPassword === this.state.password
                    ? false
                    : true
                }
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;  