import React from "react";
import "./Combo.css"



export default function Combo(props) {
  if (!props.combo) {
    return null;
  }

  const gridCombo = () => {

    const { module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice } = props.combo;
    
    return (
      <>
        <ul>
          <h5>  This combination of {module.model}, {module.max_power_wp} watt modules and {inverter.manufacturer}, {inverter.model}, {inverter.ac_ouput_power_kW} rating inverter is compatible </h5>
        </ul>
        <ul>
          <h5>  Total number of modules needed for the power plant = {allNumberOfModules}</h5>
        </ul>
        <ul>
          <h5>  Modules in series = {seriesModules}</h5>
        </ul>
        <ul>
          <h5>  Total number of modules in parallel = {modulesInParallel}</h5>
        </ul>
        <ul>
          <h5>  Combination Price in $ = {totalComboPrice}</h5>
        </ul>

      </>
    )
  }



  return (

    <div className="container2" name="container">
      <p>I am Combo component</p>

      {gridCombo()}

    </div>

  )
}