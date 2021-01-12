import React, { Component } from "react";
import { auth } from "../../fbconfig";
import $ from "jquery";
import "./Home.scss";
import Chats from "./Chats";
export default class Home extends Component {
  componentDidMount() {
    // $("chat__selector").
  }

  toggleMenu = () => {
    // This Function will always return the initial font-size of the html element
    var rem = (function rem() {
      var html = document.getElementsByTagName("html")[0];

      return function () {
        return parseInt(window.getComputedStyle(html)["fontSize"]);
      };
    })();

    // This function will convert pixel to rem
    function toRem(length) {
      return parseInt(length) / rem();
    }
    let m = $("#menu");
    console.log(m.css(`width`));
    if (toRem(m.css(`width`)) === 4) {
      m.css("width", "8.5rem");
      // show labels
      $(".menu__labels").removeClass("d-none");
      $(`#menu`)
        .removeClass(`align-items-center`)
        .addClass(`align-items-start`)
        .addClass(`pl-3`);
      $(`.menu__labels`).fadeIn();
    } else {
      m.css("width", "4rem");
      $(`#menu`)
        .removeClass(`align-items-start`)
        .addClass(`align-items-center`)
        .removeClass(`pl-3`);
      $(`.menu__labels`).fadeOut();
      // show only icons
    }
  };
  render() {
    return (
      <div id="Home">
        <div id="infobar">
          <div className="d- align-items-center justify-content-around d-none">
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

          {/* <button id="chat__selector__toggle" className="btn d-none"><i class="fa fa-list" aria-hidden="true"></i></button> */}
          <div id="interactive__section" className="d-flex bg- min-vh-100">
            <div
              id="menu"
              className="bg-light d-flex flex-column align-items-center justify-content-start shadow pt-4"
              style={{
                width: `4rem`,
                transition: `all 300ms ease`,
              }}
            >
              <button
                id="menu__toggler"
                className="btn p-0 m-0"
                onClick={this.toggleMenu}
              >
                <i class="fa d-block fa-list" aria-hidden="true">
                  <span id="menu__label" className="ml-3 menu__labels d-none">
                    Menu
                  </span>
                </i>
              </button>
              <div className="separator" style={{ height: `30vh` }}></div>

              <i
                class="fa d-block text-center btn p-0 m-0 my-3 fa-home"
                aria-hidden="true"
              >
                <span id="home__label" className="ml-3 menu__labels d-none">
                  Home
                </span>
              </i>
              <i
                class="fa d-block text-center btn p-0 m-0 my-3 fa-gear"
                aria-hidden="true"
              >
                <span id="settings__label" className="ml-3 menu__labels d-none">
                  Settings
                </span>
              </i>

              <i
                class="fa d-block text-center btn p-0 m-0  my-3 fa-sign-out"
                aria-hidden="true"
                // onClick={() => auth.signOut()}
              >
                <span id="signout__label" className="ml-3 menu__labels d-none">
                  Sign out
                </span>
              </i>
            </div>
            <div
              id="chat__selector"
              className="col-4 bg- border position-relative bg-"
            >
              <form>
                <input
                  type="text"
                  class="form-control mx-auto  my-3"
                  style={{ width: "90%" }}
                  placeholder="Search chat..."
                />
              </form>

              <div className="chat__list overflow-auto">
                <Chats />
              </div>
            </div>
            <div className=" col">Chat box</div>
          </div>
        </div>
      </div>
    );
  }
}
