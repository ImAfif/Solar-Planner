const units_needed_per_day = 12;
const sunshine_hours_per_day = 3.3;
const crystaline_module = true;


const power_needed_by_load = function (units_needed_per_day, sunshine_hours_per_day) {

  return units_needed_per_day / sunshine_hours_per_day
} 

const ac_power_output_from_inverter = function() {
  const assumption = 5;
  const loss = assumption / 100;
  return power_needed_by_load() / (1 - loss)
}

const dc_power_input_to_inverter = function() {
  const assumption = 5;
  const loss = assumption / 100;
  return ac_power_output_from_inverter() / (1 - loss)
}



const operations_loss = function (crystaline_module) {

  if (!crystaline_module) {
    return 15.5;
  }
  return 19.25;
}

const power_plant_capacity = function () {
  const loss = operations_loss() / 100;
  return dc_power_input_to_inverter() / (1 - loss);
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
  if (inverter_estimated_rating() < )
  return { inverters: }
}

const modules_in_string = function () {

}