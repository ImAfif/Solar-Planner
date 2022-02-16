import React from "react";
import "./App.css";
// import Navigation from "./components/Navigation";
// import Showcase from "./components/Showcase";
// import Input from "./components/Input";
import Combo from "./components/Combo";
import Home from "./components/Home";
import About from "./components/About";
//import YoutubeEmbed from "./components/YoutubeEmbed";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/combo/:id" element={<Combo />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;