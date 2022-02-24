const router = require("express").Router();

module.exports = (db, inverterRating, inverterHighRange) => {

  router.get("/api/inverters", (req, res) => {
    db.query(`SELECT * FROM inverters WHERE ac_output_power > $1 && ac_output_power < $2`, [inverterRating, inverterHighRange])
      .then(({ rows: inverters }) => {
        res.json(inverters);
      })
      .catch((error) => {
        console.log(error);
      }
      );
  });


  return router
}


