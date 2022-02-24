import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login"
import Register from "./components/Register"
import About from "./components/About"
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Register" element={<Register />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;