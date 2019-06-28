import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./pages/navigation";
import Homepage from "./pages/homepage";
import Inventory from "./pages/inventory";
import Icons from "../helpers/icons";

import Auth from "./pages/auth";

export default class App extends Component {
  constructor() {
    super();

    Icons();
  }
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/donuts" component={Inventory} />
              <Route path="/auth" component={Auth} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
