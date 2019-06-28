import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import DonutsLogo from "../../../static/assets/images/donut-shop.png";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-donuts-wrapper">
        <h1 className="deez-nuts">Click My Nuts</h1>
        <FontAwesomeIcon icon="hand-point-down" className="fa-icon" />
        <div className="homepage-donuts">
          <NavLink to="/donuts">
            <img src={DonutsLogo} alt="logo" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Homepage;
