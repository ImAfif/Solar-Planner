const unitsNeededPerDay = 20;
const inputRange = 1;
const sunshineHoursPerDay = 3.3;
//const crystalineModule = true;
//const crystalineModule = false;
const siteArea = 15;


const powerNeededByLoad = function (units, hours) {
  return units / hours
}

//console.log(powerNeededByLoad(unitsNeededPerDay, sunshineHoursPerDay))

// const acPowerOutputFromInverter = function() {
//   const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
//   const loss = assumption / 100;
//   return (powerNeededByLoad(unitsNeededPerDay, sunshineHoursPerDay) / (1 - loss))
// }

const acPowerOutputFromInverter = function(callback) {
  const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
  const loss = assumption / 100;
  return (callback / (1 - loss))
}

//console.log(acPowerOutputFromInverter())

// const dcPowerInputToInverter = function() {
//   const assumption = 5;
//   const loss = assumption / 100;
//   return acPowerOutputFromInverter() / (1 - loss)
// }

const dcPowerInputToInverter = function(callback) {
  const assumption = 5;
  const loss = assumption / 100;
  return callback / (1 - loss)
}
//console.log('powert to inverter: ',dcPowerInputToInverter())


// const operationsLoss = function (crystalineModule) {

//   if (!crystalineModule) {
//     return 15.5;
//   }
//   return 19.25;
// }

const operationsLoss = function (crystalineModule) {
  //console.log('inside the funct moduleType: ', crystalineModule);
  if (crystalineModule !== '1') {
    return 15.5;
  } else {
    return 19.25;
  }
}
//console.log('op loss: ',operationsLoss(crystalineModule))

// const powerPlantCapacity = function () {
//   const loss = operationsLoss() / 100;
//   return dcPowerInputToInverter() / (1 - loss);
// }

const powerPlantCapacity = function (callback1, callback2) {
  const loss = callback1 / 100;
  return callback2 / (1 - loss);
}
//console.log("Plant capacity: ",powerPlantCapacity())

/////////// module & inverter selections

const avg = function (a, b) {
  return (a + b) / 2;
}

//Inverter Fake data
const inverters = {
  1: {'model name': 'model1', Vmax: 600, Vmpp: avg(400, 800), Imax: 35, Efficiency: 98.2, Pac: 5.6, Price: 1500},//Pac in kva
  2: {'model name': 'model2', Vmax: 400, Vmpp: avg(80, 100), Imax: 10, Efficiency: 98, Pac: 40, Price: 1600},
  3: {'model name': 'model3', Vmax: 600, Vmpp: avg(100, 160), Imax: 75, Efficiency: 97.5, Pac: 10, Price: 1100},
  4: {'model name': 'Pass4', Vmax: 600, Vmpp: avg(80, 120), Imax: 50, Efficiency: 97, Pac: 7.5, Price: 1200}
}
//modules fake data
const modules = {
  1: {'model name': 'model1', Pm: 210, Voc: 41.59, Isc: 7.13, Vm: 33.81, Im: 6.21, Price: 100 },
  2: {'model name': 'model2', Pm: 350, Voc: 39, Isc: 8, Vm: 32, Im: 10, Price: 150 },
  3: {'model name': 'model3', Pm: 151, Voc: 22.4, Isc: 8.5, Vm: 18.35, Im: 7.9, Price: 85 },
  4: {'model name': 'model4', Pm: 240, Voc: 37.38, Isc: 8.45, Vm: 30.60, Im: 7.85, Price: 110 },
  5: {'model name': 'model5', Pm: 150, Voc: 21.4, Isc: 7.5, Vm: 19.35, Im: 6.9, Price: 90 },
  6: {'model name': 'Pass6', Pm: 145, Voc: 22.4, Isc: 8.5, Vm: 18.35, Im: 7.9, Price: 80 },
}

// const inverterEstimatedRating = function() {
//   const assumption = 10
//   const safetyFactor = assumption / 100
//   return (dcPowerInputToInverter() / (1 - safetyFactor));
// }

const inverterEstimatedRating = function(callback) {
  const assumption = 10
  const safetyFactor = assumption / 100
  return (callback / (1 - safetyFactor));
}
//console.log("inverter capacity: ",inverterEstimatedRating());


const selectedModulesFromDb = function (inputRange) {
  if (inputRange === '1') {
    console.log('i am sending inputrange from inside the function: --', inputRange)
    return Object.values(modules).filter(module =>
      module.Pm <= 200 && module.Pm >= 140)
  }
  if (inputRange === '2') {
    console.log('i am sending inputrange from inside the function: --', inputRange)
    return Object.values(modules).filter(module => module.Pm <= 250 && module.Pm > 200)
  }
  if (inputRange === '3') {
    console.log('i am sending inputrange from inside the function: --', inputRange)
    return Object.values(modules).filter(module => module.Pm <= 300 && module.Pm > 250)
  }
  if (inputRange === '4') {
    console.log('i am sending inputrange from inside the function: --', inputRange)
    return Object.values(modules).filter(module => module.Pm <= 350 && module.Pm > 300)

  }
  if (inputRange === '5') {
    console.log('i am sending inputrange from inside the function: --', inputRange)
    return Object.values(modules).filter(module => module.Pm <= 400 && module.Pm > 350)

  }
}

//console.log(selectedModulesFromDb(inputRange))



const selectedInvertersFromDb = function () {
  return Object.values(inverters).filter(inverter => {
  //console.log('invert Pac: ',inverter.Pac)
  return (
    inverter.Pac > inverterEstimatedRating() &&
    inverter.Pac < (inverterEstimatedRating() * 1.25)
  )
  })
}
//console.log(selectedInvertersFromDb())



// const totalModules = function(selectedModule) {
//   return Math.ceil((powerPlantCapacity() * 1000) / selectedModule.Pm)
// }

const totalModules = function(module, callback) {
  console.log('inside funct module.pm:  ----', module.Pm)
  return Math.ceil((callback  * 1000) / module.Pm)
}
//console.log('total modules: ', totalModules(modules[3]))



const modulesInString = function (selectedModule, selectedInverters ) {
  return Math.ceil(selectedInverters.Vmpp / selectedModule.Vm)
}
//console.log('modules in series: ' ,modulesInString(modules[3], inverters[1]))



const combinationCompatibility = function (module, inverter) {

  if (modulesInString(module, inverter) * module.Vm < inverter.Vmpp) {
    return true //if changed Vmp is in range of the selected inverter's Vmp then fine else not compatible
  }
  return false
}

//console.log('compatibility func: ',combinationCompatibility(modules[3], inverters[1]))



const totalStrings = function(module, inverter) {
  return Math.ceil(totalModules(module) / modulesInString(module, inverter))
}
//console.log("modules in parallel: ",totalStrings(modules[3], inverters[1]))


const comboPrice = function (module, inverter) {
  const price = (module.Price * totalModules(module) )+ inverter.Price
  return price.toFixed(2)
}

const combo = function(modules, inverters) {
  const comboArray = []
  inverters.forEach(inverter => {
    console.log('I am here also')
    modules.forEach(module => {
      console.log('I am here')
      const allNumberOfModules = totalModules(module)
      console.log(allNumberOfModules)
      const seriesModules = modulesInString(module, inverter)
      console.log(seriesModules)
      console.log('compatibility inside: ', combinationCompatibility(module, inverter))
      const modulesInParallel = totalStrings(module, inverter)
      //const results = {module, inverter, allNumberOfModules, seriesModules, modulesInParallel}
      const compatible = combinationCompatibility(module, inverter)
      const totalComboPrice = comboPrice(module, inverter)
      if (!compatible) {
        console.log('Not compatible')
        comboArray.push(false)
      }
       comboArray.push({module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice})//results
  })
})
return comboArray
}


//console.log('combo: ', combo(selectedModulesFromDb(inputRange), selectedInvertersFromDb()))


module.exports = { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice, combo }




