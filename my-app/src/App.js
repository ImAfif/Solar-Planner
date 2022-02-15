import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";
import Input from "./components/Input";
import YoutubeEmbed from "./components/YoutubeEmbed";

function App() {
  return (
    <div className="App">
      <Navigation />
      <YoutubeEmbed embedId="rokGy0huYEA" />
      <Showcase />
      <Input />
    </div>
  );
}

export default App;
