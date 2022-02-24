import React from "react";
import "./Combo.css"



export default function Combo(props) {
  console.log('props reaching combo component: ---', props)
  console.log('props.combo ------',props.combo)
 const {combo} = props.combo;
//  const gridCombo = combo.map(com => {
//const { allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice } = combo;
//     return (
//       <>
//       <ul>
//         <h5>  Total number of modules needed for the power plant = {com.allNumberOfModules}</h5>
//       </ul>
//       <ul>
//         <h5>  Modules in series = {com.seriesModules}</h5>
//       </ul>
//       <ul>
//         <h5>  Total number of modules in parallel = {com.modulesInParallel}</h5>
//       </ul>
//       <ul>
//         <h5>  Combination Price = {com.totalComboPrice}</h5>
//       </ul>

//       </>
//     )
//   }) 
  console.log('num panels: -----', combo.allNumberOfModules);
  

  return (

    <div className="container2" name="container"><p>I am Combo component</p>
{/* 
      <ul>
        <h5>  This combination of {module.model}, {module.max_power_wp} watt modules and {inverter.manufacturer}, {inverter.model}, {inverter.ac_ouput_power_kW} rating inverter is compatible </h5>
      </ul> */}
      {/* <ul>
        <h5>  For inverter = {inverter}</h5>
      </ul>  */}
      <ul>
        <h5>  Total number of modules needed for the power plant = {combo.allNumberOfModules}</h5>
      </ul>
      {/* <ul>
        <h5>  Modules in series = {seriesModules}</h5>
      </ul>
      <ul>
        <h5>  Total number of modules in parallel = {modulesInParallel}</h5>
      </ul>
      <ul>
        <h5>  Combination Price = {totalComboPrice}</h5> */}
      {/* </ul> */}
      {/* {gridCombo} */}

    </div>

  )
}