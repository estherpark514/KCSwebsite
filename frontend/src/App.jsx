import { HashRouter, Routes, Route } from "react-router-dom";
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
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profie";
import Reset from "./pages/Reset/Reset";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-gtkcs" element={<AboutGTKCS />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<Reset />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
