import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/roles" component={Roles} />
        <Route path="/programs" component={Programs} />
        <Route path="/resources" component={Resources} />
        <Route path="/joinus" component={JoinUs} />
      </Switch>
    </Router>
  );
}
