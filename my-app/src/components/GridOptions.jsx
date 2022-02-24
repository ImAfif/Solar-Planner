import React from "react";
import Combo from "./Combo";
import "./GridOptions.css";


export default function GridOptions(props) {

  
  const { energyPerDay, f1, f2, f3, f4, f5, f6, f11 } = props;

  const newF11 = f11.filter(item => item !== false)
  console.log('newF11: ----', newF11);
  const comboData = newF11.map((combo) => {

    return (
      <div className="comboComponent">
        <Combo combo={combo} />
      </div>

    )

  })



  return (
    <div className="container1">
      <h4>  Solar Power Plant Design for a {energyPerDay} units per day requirement:</h4>
      <h4>  Calculated Power Plant Capacity in kW = {f5}</h4>
      <h4>  Calculated Inverter estimated rating in kW = {f6}</h4>
      <h4>  Operations loss = {f4}</h4>
      <h4>  Input power to the inverter in kW = {f3}</h4>
      <h4>  AC power output from inverter = {f2}</h4>
      <h4>  Power needed by load in kW = {f1}</h4>
      <ul>
        {comboData}
      </ul>
    </div>

  )
}

