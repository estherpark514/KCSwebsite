import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutGTKCS from "./pages/AboutGTKCS";
import Partners from "./pages/Partners";
import Executives from "./pages/Executives";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import JoinUs from "./pages/JoinUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import "./App.css"; // Ensure this contains the fade transition styles

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={600}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-gtkcs" element={<AboutGTKCS />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/executives" element={<Executives />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/reset-password" element={<Reset />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <HashRouter>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  );
}

export default App;
