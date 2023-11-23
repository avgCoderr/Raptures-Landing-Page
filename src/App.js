import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Background from "./components/Background";
import Technology from "./components/Technology";
import Features from "./components/Features";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Background />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tech" element={<Technology />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
