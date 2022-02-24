import React from "react";
import Combo from "./Combo";
import "./GridOptions.css";


export default function GridOptions(props) {

  const calculatedValues = [];
  const { f1, f2, f3, f4, f5, f6, f11 } = props;
 
  const newF11 = f11.filter(item => item !== false)
  console.log('newF11: ----', newF11);
  const comboData = newF11.map((combo) => {
  

    return <Combo combo={combo} />

  })



  return (
    <div className="container1">
      <h4>  Power needed by load in kW = {f1}</h4>
      <h4>  AC power output from inverter = {f2}</h4>
      <h4>  Input power to the inverter in kW = {f3}</h4>
      <h4>  Operations loss = {f4}</h4>
      <h4>  Power plant capacity in kW = {f5}</h4>
      <h4>  Inverter's estimated rating in kW = {f6}</h4>
      <ul>
        {comboData}
      </ul>
    </div>

  )
}

