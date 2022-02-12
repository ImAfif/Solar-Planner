const units_needed_per_day = 12;
const sunshine_hours_per_day = 3.3;
const crystaline_module = true;
//const crystaline_module = false;

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
console.log(operations_loss())

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


const selected_modules = 1;
const total_modules = function() {
  return power_plant_capacity() / selected_modules[Vmp]
}

const selecter_inverters_from_db = function () {
  inverters.map(inverter => {inverter.Vmax > inverter_estimated_rating() && (inverter.Vmax < (inverter_estimated_rating() * 1.1)) })
  
}

const modules_in_string = function () {
  
}