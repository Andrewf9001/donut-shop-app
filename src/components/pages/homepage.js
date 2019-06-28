import React, { Component } from "react";
import { withRouter } from "react-router";

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavLink to="/donuts" activeClassName="nav-link-active">
          DONUTS
        </NavLink>
      </div>
    );
  }
}

export default withRouter(Homepage);
