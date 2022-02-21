import React from "react";
import Combo from "./Combo";
import "./GridOptions.css"


export default function GridOptions (props) {
  //const {combos} = props;
  console.log('props reaching GridOptions component: ---',props)

  const { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, combos } = props;

  const comboData = combos.map((combo) => <Combo {...combo} />)

  
  return (
    <div className="container1">
    <h4>  Power needed by load in kW = {powerNeededByLoad}</h4>
    <h4>  AC power output from inverter = #{acPowerOutputFromInverter}</h4>
    <h4>  Input power to the inverter in kW = #{dcPowerInputToInverter}</h4>
    <h4>  Operations loss = #{operationsLoss}</h4>
    <h4>  Power plant capacity in kW = #{powerPlantCapacity}</h4>
    <h4>  Inverter's estimated rating in kW = #{inverterEstimatedRating}</h4>
    <ul>
      {comboData}
    </ul>
    </div>
   
  )
}

