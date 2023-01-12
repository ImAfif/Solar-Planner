import React, { useState } from "react";
import "./Combo.css"




export default function Combo(props) {
  // const [nullCombo, setNullCombo] = useState(false);
  if (!props.combo) {
    // setNullCombo(true);
    return null;
  }

  const gridCombo = () => {

    const { module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice } = props.combo;
    
    return (
      <>
      {/* {nullCombo && <div><p> Sorry an error occuoured Plese try again</p></div>} */}
        <li>
          <h5>  This combination of {module.model}, {module.max_power_wp} watt modules and {inverter.manufacturer} make, {inverter.model} model, {inverter.ac_ouput_power_kW} rating inverter is compatible with the following design calculations.</h5>
        </li>
        <li>
          <h5>  Total number of solar panels needed for the power plant = {allNumberOfModules}</h5>
        </li>
        <li>
          <h5>  Solar panels in series = {seriesModules}</h5>
        </li>
        <li>
          <h5>  Total number of solar panels in parallel = {modulesInParallel}</h5>
        </li>
        <li>
          <h5>  Combination Price in $ = {totalComboPrice}</h5>
        </li>
        
      </>
    )
  }



  return (

    <div className="container2" name="container">

      {gridCombo()}

    </div>

  )
}
