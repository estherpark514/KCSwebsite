import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Roles from "./pages/Roles";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources";
import JoinUs from "./pages/JoinUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
