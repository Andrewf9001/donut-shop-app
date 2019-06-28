import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-wrapper">
        <div className="homepage-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            HOME
          </NavLink>
        </div>
        <div className="auth-wrapper">
          <NavLink exact to="/auth" activeClassName="nav-link-active">
            LOGIN
          </NavLink>
        </div>
        <div className="donuts-wrapper">
          <NavLink to="/donuts" activeClassName="nav-link-active">
            DONUTS
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
