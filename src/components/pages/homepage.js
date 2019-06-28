import React, { Component } from "react";

import DonutsLogo from "../../../static/assets/images/donut-shop.png";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-donuts">
        <a href="/donuts">
          <img src={DonutsLogo} alt="logo" />
        </a>
      </div>
    );
  }
}

export default Homepage;
