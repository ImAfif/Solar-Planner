import React, { useEffect, useState } from "react";
import "./App.css";
// import Navigation from "./components/Navigation";
// import Showcase from "./components/Showcase";
// import Input from "./components/Input";
import Combo from "./components/Combo";
import Home from "./components/Home";
import About from "./components/About";
//import YoutubeEmbed from "./components/YoutubeEmbed";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import axios from "axios";



function App() {


  const [state, setState] = useState({
    users: [],
    modules: [],
    inverters: [],
    combos: {}
  })

  useEffect(() => {
    Promise.all([
      axios.get(`../back-end/db/schema/01_users.sql`),
      axios.get(`../back-end/db/schema/02_solar_panel.sql`),
      axios.get(`../back-end/db/schema/03_inverters.sql`),
      axios.get(`../back-end/db/schema/04_grid_options.sql`)
    ]).then(response => {
      setState(prev => ({ ...prev, 
        users: response[0].data, 
        modules: response[1].data, 
        inverters: response[2].data, 
        combos: response[3].data
      }))
    });
  }, []);

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