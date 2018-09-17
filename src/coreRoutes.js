import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/home/index";
import SignIn from "./pages/sing-in/index.js";

class CoreRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="route-wrapper">
        <Route path="/home" component={Home} />
        <Route exact path="/" component={SignIn} />
      </div>
    );
  }
}

export default CoreRoutes;
