const router = require("express").Router();

export default selectedModulesFromDb = db => {

  router.get("/solarpanels", (req, res) => {

    db.query((`SELECT * FROM solar_panels WHERE max_power > $1 AND max_power < $2`, [low_range, high_range]))
      .then(({ rows: solar_panels}) => {
        res.json(solar_panels)
      })
    });
}
