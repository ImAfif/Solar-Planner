import React from "react";
import Combo from "./Combo";


export default GridOptions(props) {
  
  const { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo } = props

  return (
    combo.map(e => {   //iterate over each true combo
    if (e) {
      <Combo {...props}/>
    }
    }) 
  )
}