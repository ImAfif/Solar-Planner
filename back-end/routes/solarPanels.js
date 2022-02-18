const router = require("express").Router();

module.exports = (db) => {

  router.get("/api/solarpanels", (req, res) => {

    db.query((`SELECT * FROM solar_panels WHERE max_power > $1 AND max_power < $2`, [low_range, high_range]))
      .then(({ rows: solar_panels}) => {
        res.json(solar_panels)
      })
      .catch((error) => {
        console.log(error);
      })
    });

  router.put("/:id/solarpanels", (req, res) => {
    const { input } = req.body.technology;


    db.query((`INSERT INTO solar_panels VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [input.technology, input.manufacturer, input.model, input.max_power_Wp, input.max_current_A, input.max_voltage_V, input.open_voltage_V, input.short_circuit_current_A, input.panel_area, input.price] ))


  })
    return router
}
