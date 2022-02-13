const units_needed_per_day = 12;
const sunshine_hours_per_day = 3.3;
const crystaline_module = true;
//const crystaline_module = false;
const site_area = 15;

const power_needed_by_load = function (units, hours) {

  return units / hours
} 

console.log(power_needed_by_load(units_needed_per_day, sunshine_hours_per_day))

const ac_power_output_from_inverter = function() {
  const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
  const loss = assumption / 100;
  return (power_needed_by_load(units_needed_per_day, sunshine_hours_per_day) / (1 - loss))
}

console.log(ac_power_output_from_inverter())

const dc_power_input_to_inverter = function() {
  const assumption = 5;
  const loss = assumption / 100;
  return ac_power_output_from_inverter() / (1 - loss)
}
console.log(dc_power_input_to_inverter())


const operations_loss = function (crystaline_module) {

  if (!crystaline_module) {
    return 15.5;
  }
  return 19.25;
}
console.log(operations_loss(crystaline_module))

const power_plant_capacity = function () {
  const loss = operations_loss() / 100;
  return dc_power_input_to_inverter() / (1 - loss);
}
console.log("Plant capacity: ",power_plant_capacity())

/////////// module & inverter selections 

const avg = function (a, b) {
  return (a + b) / 2;
}

//Inverter Fake data
const inverters = {
  1: {'model name': 'model1', Vmax: 600, Vmpp: avg(400, 800), Imax: 35, Efficiency: 98.2, Pac: 17, Price: 1500},//Pac in kva
  2: {'model name': 'model2', Vmax: 400, Vmpp: avg(80, 100), Imax: 10, Efficiency: 98, Price: 1600},
  1: {'model name': 'model3', Vmax: 600, Vmpp: avg(100, 160), Imax: 75, Efficiency: 97.5, Pac: 10, Price: 1100}
}
//modules fake data
const modules = {
  1: {'model name': 'model1', Pm: 210, Voc: 41.59, Isc: 7.13, Vm: 33.81, Im: 6.21, Price: 100 },
  2: {'model name': 'model2', Pm: 350, Voc: 39, Isc: 8, Vm: 32, Im: 10, Price: 150 },
  3: {'model name': 'model3', Pm: 145, Voc: 22.4, Isc: 8.5, Vm: 18.35, Im: 7.9, Price: 85 },
  4: {'model name': 'model4', Pm: 240, Voc: 37.38, Isc: 8.45, Vm: 30.60, Im: 7.85, Price: 110 },
  5: {'model name': 'model5', Pm: 150, Voc: 21.4, Isc: 7.5, Vm: 19.35, Im: 6.9, Price: 90 },
}

const inverter_estimated_rating = function() {
  const assumption = 10
  const safety_factor = assumption / 100
  return dc_power_input_to_inverter() / (1 - safety_factor);
}
console.log(inverter_estimated_rating());

const input_range = 3;

//gives me set of modules based user input
const selected_modules_from_db = function () { 
  if (input_range === 1) {
    return modules.map(module => {module[Vm] < 200 && module[Vm] > 150})
  }
  if (input_range === 2)
  return modules.map(module => {module[Vm] < 250 && module[Vm] > 200}) 
  if (input_range === 3)
  return modules.map(module => {module[Vm] < 300 && module[Vm] > 250})
  if (input_range === 4)
  return modules.map(module => {module[Vm] < 350 && module[Vm] > 300})
  if (input_range === 5)
  return modules.map(module => {module[Vm] < 400 && module[Vm] > 350})
}
 // module1: modules[3], module2: modules[5]} //from input range
 
 //gives me set of inverters I need
 const selected_inverters_from_db = function () {
   return inverters.map(inverter => {inverter.Vmax > inverter_estimated_rating() && (inverter.Vmax < (inverter_estimated_rating() * 1.15)) })
 }

const total_modules = function(selected_module) {
  return power_plant_capacity() / selected_module[Vm]
}

const modules_in_string = function (selected_module, selected_inverters ) {
  return selected_inverters[Vmpp] / selected_module[Vm]
}

const combination_compatibility = function (module, inverter) {
  
  if (modules_in_string(module, inverter) * module[Vm] < inverter[Vmpp])
  return true //if changed Vmp is in range of the selected inverter's Vmp then fine else not compatible
  return false
}

const total_strings = function(module, inverter) {
  return total_modules(module) / modules_in_string(module, inverter)
}

const combo = function(modules, inverters) {
  
  Object.values(inverters).forEach(inverter => 
  Object.values(modules).forEach(module => { const all_number_of_modules = total_modules(module)
  const series_modules = modules_in_string(module, inverter) 
  if (!combination_compatibility) {
    console.log('Not compatible')
  } const modules_in_parallel = total_strings(module, inverter)
  return { module, inverter, all_number_of_modules, series_modules, modules_in_parallel };
}))

  // const selected_modules_from_db = modules.map(module => {
  //   (module.length * module.breadth) * total_modules(module) < site_area
  // });
  


}

combo(selected_modules_from_db, selected_inverters_from_db)

//area needed = power_needed_by_load * 95 sq mt
//number of panels = power_needed_by_load x 3
//const module_covered_area = module.length * modules_in_string * module.breadth * total_strings * 1.5;
// pseudo code herE:
// select all modules.----- no reduce the number of choice ---- by area? then build a counter table that matches the area of module with the area of site. 



