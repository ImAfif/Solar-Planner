const unitsNeededPerDay = 20;
const sunshineHoursPerDay = 3.3;
const crystalineModule = true;
//const crystalineModule = false;
const siteArea = 15;
//Bring inverter data from database in the inverters variable
//Bring the modules data from database in the module variable

const powerNeededByLoad = function (units, hours) {

  return units / hours
}

console.log(powerNeededByLoad(unitsNeededPerDay, sunshineHoursPerDay))

const acPowerOutputFromInverter = function() {
  const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
  const loss = assumption / 100;
  return (powerNeededByLoad(unitsNeededPerDay, sunshineHoursPerDay) / (1 - loss))
}

console.log(acPowerOutputFromInverter())

const dcPowerInputToInverter = function() {
  const assumption = 5;
  const loss = assumption / 100;
  return acPowerOutputFromInverter() / (1 - loss)
}
console.log('powert to inverter: ',dcPowerInputToInverter())


const operationsLoss = function (crystalineModule) {

  if (!crystalineModule) {
    return 15.5;
  }
  return 19.25;
}
console.log('op loss: ',operationsLoss(crystalineModule))

const powerPlantCapacity = function () {
  const loss = operationsLoss() / 100;
  return dcPowerInputToInverter() / (1 - loss);//.toFixed(1);//????????????
}
console.log("Plant capacity: ",powerPlantCapacity())


const inverterEstimatedRating = function() {
  const assumption = 10
  const safetyFactor = assumption / 100
  return (dcPowerInputToInverter() / (1 - safetyFactor));//.toFixed(1);
}
console.log("inverter capacity: ",inverterEstimatedRating());

const inputRange = 1;

//gives me set of modules based user input
// const selectedModulesFromDb = function (inputRange) {
//   if (inputRange === 1) {
//     return Object.values(modules).filter(module =>
//       module.Pm < 200 && module.Pm > 140)
//   }
//   if (inputRange === 2) {
//     return Object.values(modules).filter(module => module.Pm < 250 && module.Pm > 200)
//   }
//   if (inputRange === 3) {

//     return Object.values(modules).filter(module => module.Pm < 300 && module.Pm > 250)
//   }
//   if (inputRange === 4) {
//     return Object.values(modules).filter(module => module.Pm < 350 && module.Pm > 300)

//   }
//   if (inputRange === 5) {
//     return Object.values(modules).filter(module => module.Pm < 400 && module.Pm > 350)

//   }
// }

// console.log(selectedModulesFromDb(inputRange))
//  // module1: modules[3], module2: modules[5]} //from input range

//  //gives me set of inverters I need
//  const selectedInvertersFromDb = function () {
//    return Object.values(inverters).filter(inverter => {
//     //console.log('invert Pac: ',inverter.Pac)
//     return (
//       inverter.Pac > inverterEstimatedRating() &&
//       inverter.Pac < (inverterEstimatedRating() * 1.25)
//     )
//     })
//  }
 //console.log(selectedInvertersFromDb())

 module.exports = { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating}// selectedModulesFromDb, selectedInvertersFromDb }
