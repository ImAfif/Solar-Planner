import React from "react";
//import App from "../App";
import Navigation from "./Navigation";
import YoutubeEmbed from "./YoutubeEmbed";
import Showcase from "./Showcase";
import Input from "./Input";
import GridOptions from "./GridOptions";

export default function Home(props) {
  return (
    <>
    <Navigation />
    <YoutubeEmbed embedId="rokGy0huYEA" />
    <Showcase />
    <h1>Hi I am the home page</h1>
    <Input />
    <GridOptions {...props}/>
    </>
  )
}