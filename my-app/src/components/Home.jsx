import React from "react";
//import App from "../App";
import Navigation from "./Navigation";
import YoutubeEmbed from "./YoutubeEmbed";
import Showcase from "./Showcase";
import Input from "./Input";

export default function Home() {
  return (
    <>
    <Navigation />
    <YoutubeEmbed embedId="rokGy0huYEA" />
    <Showcase />
    <h1>Hi I am the home page</h1>
    <Input />
    </>
  )
}