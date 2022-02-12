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
  1: {'model name': 'model1', Vmax: 450, Vmpp: avg(120, 150), Imax: 12, Efficiency: 97},
  2: {'model name': 'model2', Vmax: 400, Vmpp: avg(80, 100), Imax: 10, Efficiency: 98}
}
//modules fake data
const modules = {
  1: {'model name': 'model1', Pm: 380, Voc: 24, Isc: 10, Vm: 40, Im: 12, length: 6, breadth: 3},
  2: {name: 'model2', Pm: 350, Voc: 24, Isc: 8, Vm: 39, Im: 10, length: 6, breadth: 3}
}

const inverter_estimated_rating = function() {
  const assumption = 10
  const safety_factor = assumption / 100
  return dc_power_input_to_inverter() / (1 - safety_factor);
}
console.log(inverter_estimated_rating());


const selected_modules = function() {
  
  return ;
}

const total_modules = function(selected_module) {
  return power_plant_capacity() / selected_module[Vm]
}

const combo = function() {

  //gives me set of modules 
  const selected_modules_from_db = modules.map(module => {
    (module.length * module.breadth) * total_modules(module) < site_area
  });
  //gives me set of inverters I need
  const selected_inverters_from_db = function () {
    return inverters.map(inverter => {inverter.Vmax > inverter_estimated_rating() && (inverter.Vmax < (inverter_estimated_rating() * 1.15)) })
    
  }
  
  const modules_in_string = function () {
    selected_inverters[Vmpp] / selected_module[Vm]
  }


}

//area needed = power_needed_by_load * 95 sq mt
//number of panels = power_needed_by_load x 3
//const module_covered_area = module.length * modules_in_string * module.breadth * total_strings * 1.5;
// pseudo code herE:
// select all modules.----- no reduce the number of choice ---- by area? then build a counter table that matches the area of module with the area of site. 



