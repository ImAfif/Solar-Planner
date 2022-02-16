const router = require("express").Router();
import selectedInvertersFromDb from './my-app/src/helper_functions.js'

export default selectedInvertersFromDb = (db, inverterEstimatedRating) => {

  const inverterRating = inverterEstimatedRating();
  const inverterHighRange =  inverterRating * 1.25

  router.get("/inverters", (req, res) => {
    db.query(`SELECT * FROM inverters WHERE ac_output_power > $1 && ac_output_power < $2`, [inverterRating, inverterHighRange])
    .then(({ rows: inverters }) => {
    res.json(inverters)
  })
  });

  router.put('/inverters', (req, res) => {
    const
  })
  return router
}


