import React from "react";
import "./Combo.css"
import Navigation from "./Navigation";
//import { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } from '../helper_functions';


export default function Combo(props) {
  console.log('props reaching combo component: ---',props)
  const { totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } = props;

  // selectedModulesFromDb, selectedInvertersFromDb,  
  //const handleState 

  return (

    <div className="container2" name="container"><p>I am Combo component</p>
    
    <ul>
    <h5>  Total number of modules needed for the power plant = #{totalModules}</h5>
    </ul>
    <ul>
    <h5>  Modules in series = #{modulesInString}</h5>
    </ul>
    <ul>
    <h5>  Is this combination of modules and inverter compatible or not = #{combinationCompatibility}</h5>
    </ul>
    <ul>
    <h5>  Total number of modules in parallel = #{totalStrings}</h5>
    </ul>
    <ul>
    <h5>  Combination Price = #{comboPrice}</h5> 
    </ul>
    <ul>
    <h5>  Combo data = #{combo}</h5> 
    </ul>
    </div>

  )
} 