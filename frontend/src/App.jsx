import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Roles from "./pages/Roles/Roles";
import Programs from "./pages/Programs/Programs";
import Resources from "./pages/Resources/Resources";
import JoinUs from "./pages/JoinUs/JoinUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/roles" component={Roles} />
        <Route path="/programs" component={Programs} />
        <Route path="/resources" component={Resources} />
        <Route path="/joinus" component={JoinUs} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
