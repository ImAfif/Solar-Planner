

const getPanelByInputRange = (inputRange, db) => {

  const queryString = `SELECT * FROM solar_panels WHERE max_power_Wp > $1 AND max_power_Wp <= $2;`

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
  }

  return db
  .query(queryString, [low_range, high_range])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}





const getInverterArray = (db) => {

  const queryString = `SELECT * FROM inverters;`

  // WHERE (SELECT AVG(VMpp_range_min_V, VMpp_range_max_V) as avgRating WHERE avgRating > $1 AND avgRating <= $2)

  return db
  .query(queryString)
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}




const getComboByUserId = (userId, db) => {
  const queryString = `SELECT * FROM grid_options WHERE user_id === $1`;

  return db.query(queryString, [userId])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}




const addCombo = (db) => { //  <--- enter parameter
  //let queryParams = [];
  let queryString = `INSERT INTO grid_options (user_id, power_needed_by_load, ac_power_output_from_inverter, dc_power_input_to_inverter, operations_loss, power_plant_capacity, inverter_estimated_rating, combos_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) `;

  let queryParams = [db.user_id, db.power_needed_by_load, db.ac_power_output_from_inverter, db.dc_power_input_to_inverter, db.operations_loss, db.power_plant_capacity, db.inverter_estimated_rating, db.combos_id]

  // total_modules, modules_in_string, combination_compatibility, total_strings, combo_price, combo

  console.log(queryString, queryParams);

  return db
  .query(queryString, queryParams)
  .then(res => res.rows)
  .catch(e => console.error(e.message))

}
exports.addCombo = addCombo;
exports.getPanelByInputRange = getPanelByInputRange
exports.getComboByUserId = getComboByUserId
exports.getInverterArray = getInverterArray
