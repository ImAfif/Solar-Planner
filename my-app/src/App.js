import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Showcase />
      <Input />
    </div>
  );
}

export default App;
