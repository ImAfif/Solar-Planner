import React from "react";
import "./Combo.css"



export default function Combo(props) {
  if(!props.combo) {
    return null;
  }
  console.log('props reaching combo component: ---', props)
  console.log('props.combo ------',props.combo)
 //const combo = props.combo;
 const gridCombo = () => {
  const { allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice } = props.combo;
  return (
    <>
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
      <h5>  Combination Price = {totalComboPrice}</h5>
    </ul>

    </>
  )
 }

  

  return (

    <div className="container2" name="container"><p>I am Combo component</p>
{/* 
      <ul>
        <h5>  This combination of {module.model}, {module.max_power_wp} watt modules and {inverter.manufacturer}, {inverter.model}, {inverter.ac_ouput_power_kW} rating inverter is compatible </h5>
      </ul> */}
      {/* <ul>
        <h5>  For inverter = {inverter}</h5>
      </ul>  */}
      {/* <ul>
        <h5>  Total number of modules needed for the power plant = {combo.allNumberOfModules}</h5>
      </ul> */}
      {/* <ul>
        <h5>  Modules in series = {seriesModules}</h5>
      </ul>
      <ul>
        <h5>  Total number of modules in parallel = {modulesInParallel}</h5>
      </ul>
      <ul>
        <h5>  Combination Price = {totalComboPrice}</h5> */}
      {/* </ul> */}
      {gridCombo()}

    </div>

  )
}