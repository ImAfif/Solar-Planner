import React from "react";
import "./Combo.css"
import Navigation from "./Navigation";
//import { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } from '../helper_functions';


export default function Combo(props) {
  console.log('props reaching combo component: ---', props)
  //const { totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } = props;
  const { module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice } = props;
  // selectedModulesFromDb, selectedInvertersFromDb,  
  //const handleState 

  return (

    <div className="container2" name="container"><p>I am Combo component</p>

      <ul>
        <h5>  This combination of {module.manufacturer}, {module.model}, {module.max_power_wp} watt modules and {inverter.manufacturer}, {inverter.model}, {inverter.ac_ouput_power_kW} rating inverter is compatible </h5>
      </ul>
      <ul>
        <h5>  For inverter = {inverter}</h5>
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
        <h5>  Combination Price = {totalComboPrice}</h5>
      </ul>

    </div>

  )
}