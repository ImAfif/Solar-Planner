//const { Pool } = require("pg");


const getPanelByInputRange = (inputRange) => {
  const queryString = `SELECT * FROM solar_panels WHERE max_power_Wp < `

  return db
  .query(queryString, [low_range, high_range])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}

exports.getPanelByInputRange = getPanelByInputRange

const getInverterArray = (inverterEstimatedRating) => {
  const inverterUpperRange = inverterEstimatedRating * 1.25
  const queryString = `SELECT * FROM inverters WHERE AVG( VMpp_range_min_V, VMpp_range_max_V) > $1 AND AVG( VMpp_range_min_V, VMpp_range_max_V) < $2`

  return db
  .query(queryString, [inverterEstimatedRating, inverterUpperRange])
  .then(res => res.rows)
  .catch(e => console.log(e.message))
}

exports.getInverterArray = getInverterArray
