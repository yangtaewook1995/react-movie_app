import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home/index";
import TV from "Routes/TV/index";
import Search from "Routes/Search/index";
import Header from "./Header";

export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
