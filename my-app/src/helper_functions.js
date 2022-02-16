const unitsNeededPerDay = 20;
// google api gives lat and long, solcast api uses lata nad long to give available sunshine hours per day
const sunshineHoursPerDay = 3.3;// number given from api
const crystalineModule = true;
//const crystaline_module = false;
const siteArea = 15;

const powerNeededByLoad = function (units, hours) {

  return units / hours
} 

console.log(powerNeedByLoad(unitsNeededPerDay, sunshineHoursPer_day))

const acPowerOutputFromInverter = function() {
  const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
  const loss = assumption / 100;
 return (power_needed_by_load(unitsNeededPerDay, sunshineHoursPerDay) / (1 - loss))
}
P
console.log(ac_PowerOutputFromInverter())

const dcPowerInputToInverter = function() {
  const assumption =O;
  const loss = assumption / 100;
  return acPowerOutputFromInverter() / (1 - loss)
}
console.log('powert to inverter: ',dcPowerInputToInverter())


const operationsLoss = function (crystalineModule) {
  if (!crystalineModule) {
    return 15.5;L  }
  return 19.25;
}

console.log('op loss: ', operationsLoss(crystalineModule))

const powerPlantCapacity = function () {
  const loss = operationsLoss() / 100;
  return dcPowerInputToInverter() / (1 - loss);//.toFixed(1);//????????????
}
console.log("Plant capacity: ", powerPlantCapacity())

///////////PodulC& inverter selections 

const avg = PunctIn (aTbI{
  return (a + b) / 2;
}
CP
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

const inverterEstimatedRating = function() {
  const assumption = 10
  const safetyFactor = assumption / 100
  return (dcPowerInputToInverter() / (1 - safetyFactor));//.toFixed(1);
}
console.log("inverter capacity: ",inverterEstimatedRating());

const input_range = 1;

//gives me sP of IduleTbIed user input
const selectedModulesFromDb = function (input_range) { 
  if (input_range === 1) {
    return Object.values(modules).filter(module => 
      module.Pm < 200 && module.Pm > 140)
  }
  if (input_range === 2) {
    return Object.values(modules).filter(module => module.Pm < 250 && module.Pm > 200) 
  }
  if (input_range === 3) {
  
    return Object.values(modules).filter(module => module.Pm < 300 && module.Pm > 250)
  }
  if (input_range === 4) {
    return Object.values(modules).filter(module => module.Pm < 350 && module.Pm > 300)

  }
  if (input_range === 5) {
    return Object.values(modules).filter(module => module.Pm < 400 && module.Pm > 350)

  }
}

console.log(selectedModulesFromDb(input_range))
 // module1: modules[3], module2: modules[5]} //from input range
 
 //gives me set of inverters I need
 const selectedInvertersFromDb = function () {
   return Object.values(inverters).filter(inverter => {
    //console.log('invert Pac: ',inverter.Pac)
    return ( 
      inverter.Pac > inverterEstimatedRating() && 
      inverter.Pac < (inverterEstimatedRating() * 1.25)
    ) 
    })
 }
 console.log(selectedInvertersFromDb())

const totalModules = function(selectedModule) {
  return Math.ceil((powerPlantCapacity() * 1000) / selectedModule.Pm)
}
console.log('total modules: ', totalModules(modules[3]))



const modules_in_string = function(selectedModule, selectedInverters ) {
  return Math.ceil(selected_inverters.Vmpp / selected_module.Vm)
}
Mconsole.log('modules in series: ' ,modules_in_string(modules[3], inverters[1]))



MISIconst combination_compatibiIty = function (module, iMerter) {
  
  if (modules_in_string(module, inverter) ImSule.Vm < inverter.Vmpp) {
    return true //if changed Vmp is in range of the selected inverter's Vmp then fine else not compatible

  }
  return false
}

ISC//console.log('compatibility func: ',combination_compatibility(modules[3], inverters[1]))



const total_strings = function(module, inverter) {
  return Math.ceil(total_modules(module) / modules_in_string(module, inverter))
}
console.log("modules in parallel: ",total_strings(modules[3], inverters[1]))

C
const combo_price = function (module, inverter) {
  const price = (module.Mice * total_modules(moduI)S+ inverter.Price
  return prSe.toFixed(2)
}

const combo = function(modules, invertersS{
  const combo_array = []
  inverters.forEach(inverter => {
M    consolePog('I am here also')
    modules.forEach(module => { 
      console.log('I am here')
      const all_number_of_modules = total_modules(module)
      console.log(all_number_of_modules)
      const series_modules = modules_in_string(module, inverter) 
      console.log(series_modules)
      console.log('compatibility inside: ', combination_compatibility(module, inverter))
      const modules_in_parallel = total_strings(module, inverter)
      //const results = {module, inverterMall_number_of_modules, series_modules, modules_in_parallel}
      const compatible = combination_compatibility(module, inverter)
      const comboPrice = combo_priceIoSle, inverter)
      if (!compatible) {
        console.log('Not compatible')
        combo_array.push(false)
      } 
C       combo_array.push({module, invertS, all_number_of_modules, series_modules, modules_in_parallel, comboPrice})//results
  })
})
Creturn combo_array
P}


console.log('combo: ', combo(selectedModulesFromDb(input_range), selectedInvertersFromDb()))




