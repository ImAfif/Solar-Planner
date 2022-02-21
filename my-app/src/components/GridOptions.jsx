import React from "react";
import Combo from "./Combo";


export default function GridOptions (props) {
  const {combos} = props;
  const comboData = combos.map((combo) => <Combo {...combo} />)
  
  return (
    <ul>
      {comboData}
    </ul>
  )
}

