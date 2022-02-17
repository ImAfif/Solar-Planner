const router = require("express").Router();
const { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb } = require('./helpers_backend.js');

module.exports = (db) => {

  const inverterRating = inverterEstimatedRating();
  const inverterHighRange =  inverterRating * 1.25

  router.get("/api/inverters", (req, res) => {
    db.query(`SELECT * FROM inverters WHERE ac_output_power > $1 && ac_output_power < $2`, [inverterRating, inverterHighRange])
    .then(({ rows: inverters }) => {
    res.json(inverters)
  })
  });

  return router
}



// module.exports = function selectedInvertersFromDb (db) {


//   router.get("/inverters", (req, res) => {
//     db.query(`SELECT * FROM inverters`)
//     .then(({ rows: inverters }) => {
//     res.json(inverters)
//   })
//   });

//   return router
// }
