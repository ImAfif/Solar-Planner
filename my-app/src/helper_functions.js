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
  return dc_power_input_to_inverter() / operations_loss();
}

