import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import DisplayDonuts from "../da-donuts/display-donuts";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory-wrapper">
        <DisplayDonuts showUpdate={false} />
      </div>
    );
  }
}

export default withRouter(Inventory);
