import React from "react";
import "./Combo.css"
import Navigation from "./Navigation";
//import { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } from '../helper_functions';


export default function Combo(props) {
  console.log('props reaching combo component: ---',props)
  const { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, } = props;

  // selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo 
  //const handleState 

  return (
    <>
    <div className="container2" name="container"><p>I am Combo component</p></div>
    
    {/* <h4>  Power needed by load in kW = {powerNeededByLoad}</h4>
    <h4>  AC power output from inverter = #{acPowerOutputFromInverter}</h4>
    <h4>  Input power to the inverter in kW = #{dcPowerInputToInverter}</h4>
    <h4>  Operations loss = #{operationsLoss}</h4>
    <h4>  Power plant capacity in kW = #{powerPlantCapacity}</h4>
    <h4>  Inverter's estimated rating in kW = #{inverterEstimatedRating}</h4> */}
    
    {/* <h4>  Array of selected modules from the data base = #{selectedModulesFromDb}</h4>
    <h4>  Array of selected inverters from data base for combination = #{selectedInvertersFromDb}</h4>
    <h4>  Total number of modules needed for the power plant = #{totalModules}</h4>
    <h4>  Modules in series = #{modulesInString}</h4>
    <h4>  Is this combination of modules and inverter compatible or not = #{combinationCompatibility}</h4>
    <h4>  Total number of modules in parallel = #{totalStrings}</h4>
    <h4>  Combination Price = #{comboPrice}</h4> 
    <h4>  Combo data = #{combo}</h4> */}
    </>
  )
} 