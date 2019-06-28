import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory-wrapper">
        <h1>FUCKING DONUTS</h1>
      </div>
    );
  }
}

export default withRouter(Inventory);
