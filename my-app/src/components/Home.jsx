import React from "react";
import Navigation from "./Navigation";
import YoutubeEmbed from "./YoutubeEmbed";
import Showcase from "./Showcase";
import Input from "./Input";


export default function Home(props) {
  console.log('home props: ---', props)
  return (
    <>
      <Navigation />
      <YoutubeEmbed embedId="HciKU63dLtA" />
      <h1 className="solar-calculator">Solar Calculator</h1>
      <Input />
    </>
  )
}