import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import AboutGTKCS from "./pages/AboutGTKCS/AboutGTKCS";
import Partners from "./pages/Partners/Partners";
import Executives from "./pages/Executives/Executives";
import Programs from "./pages/Programs/Programs";
import Resources from "./pages/Resources/Resources";
import JoinUs from "./pages/JoinUs/JoinUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-gtkcs" element={<AboutGTKCS />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
