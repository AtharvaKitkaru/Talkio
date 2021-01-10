import React, { Component } from "react";
import { auth } from "../../fbconfig";
import $ from "jquery";

export default class Home extends Component {
  componentDidMount() {
    $(`#interactive__section`).height(
      $(`body`).height() - $(`#infobar`).outerHeight(true)
    );
  }
  render() {
    return (
      <div id="Home">
        <p>{$(window).height()}</p>
        <p>{$(`#infobar`).outerHeight(true)}</p>
        <div id="infobar">
          <div className="d-flex align-items-center justify-content-around">
            <p className="p-0 m-0">{auth.currentUser.email}</p>
            <button
              onClick={() => auth.signOut()}
              type="button"
              name="sign__out"
              id="sign__out"
              className="btn btn- btn-sm shadow"
            >
              Sign out
            </button>
          </div>
          <div id="interactive__section" className="d-flex bg-warning">
            <div className="col-2 border">Main panel</div>
            <div className="col-2 border">Left panel</div>
            <div className="col-6 border">Chat box</div>
            <div className="col-2 border">Right panel</div>
          </div>
        </div>
      </div>
    );
  }
}
