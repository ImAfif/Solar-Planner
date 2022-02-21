//const { Pool } = require("pg");


const getPanelByInputRange = (inputRange) => {
  const queryString = `SELECT * FROM solar_panels WHERE max_power_Wp > $1 AND max_power_Wp <= $2`

  if (inputRange === '1') {
    high_range = 200;
    low_range = 140
  }
  if (inputRange === '2') {
    high_range = 250;
    low_range = 200;
  }
  if (inputRange === '3') {
    high_range = 300;
    low_range = 250;
  }
  if (inputRange === '4') {
    high_range = 350;
    low_range = 300;
  }
  if (inputRange === '5') {
    high_range = 400;
    low_range = 350;

  return db
  .query(queryString, [low_range, high_range])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}
}



exports.getPanelByInputRange = getPanelByInputRange

const getInverterArray = (inverterEstimatedRating) => {
  const inverterUpperRange = inverterEstimatedRating * 1.25
  const queryString = `SELECT * FROM inverters WHERE AVG( VMpp_range_min_V, VMpp_range_max_V) > $1 AND AVG( VMpp_range_min_V, VMpp_range_max_V) < $2;`

  return db
  .query(queryString, [inverterEstimatedRating, inverterUpperRange])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}

exports.getInverterArray = getInverterArray

const getComboByUserId = (userId) => {
  const queryString = `SELECT * FROM grid_options WHERE user_id === $1`;

  return db
  .query(queryString, [userId])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}

exports.getComboByUserId = getComboByUserId


const addCombo = function() {
  //let queryParams = [];
  let queryString = `INSERT INTO grid_options (user_id, inverter_id, solar_panel_id, power_needed_by_load, ac_power_output_from_inverter, dc_power_input_to_inverter, operations_loss, power_plant_capacity, inverter_estimated_rating) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, ) `;

  let queryParams = [user_id, inverter_id, solar_panel_id, power_needed_by_load, ac_power_output_from_inverter, dc_power_input_to_inverter, operations_loss, power_plant_capacity, inverter_estimated_rating]

  // total_modules, modules_in_string, combination_compatibility, total_strings, combo_price, combo

  console.log(queryString, queryParams);

  queryString += ` RETURNING *;`;

  return pool
  .query(queryString, queryParams)
  .then(res => res.rows)
  .catch(e => console.error(e.message))

}
exports.addCombo = addCombo
