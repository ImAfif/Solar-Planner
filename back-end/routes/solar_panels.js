const router = require("express").Router();

export default selectedModulesFromDb = (db, ) => {

  router.get("/solarpanels", (req, res) => {

    const low_range = 0;
    const high_range = 0;

    if (req.body.Input_range == 1) {
      low_range = 150;
      high_range = 200;
    } else if (req.body.Input_range == 2) {
      low_range = 200;
      high_range = 250;
    } else if (req.body.Input_range == 3) {
      low_range = 250;
      high_range = 300;
    } else if (req.body.Input_range == 4) {
      low_range = 300;
      high_range = 350;
    } else if (req.body.Input_range == 5) {
      low_range = 350;
      high_range = 400;
    }

    db.query((`SELECT * FROM solar_panels WHERE max_power > $1 AND max_power < $2`, [low_range, high_range]))
      .then(({ rows: solar_panels}) => {
        res.json(solar_panels)
      })
    });
}
