import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Background from "./components/Background";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Background />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
