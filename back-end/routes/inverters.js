const router = require("express").Router();
const { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedModulesFromDb, selectedInvertersFromDb } = require('./helpers_backend.js');

module.exports = (db) => {



  const inverterRating = inverterEstimatedRating();
  const inverterHighRange =  inverterRating * 1.25

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

  // router.put('/api/:id/inverters', (req, res) => {
  //   const manufacturer = req.body.manufacturer;
  //   const model = req.body.model;
  //   const max_input_voltage = req.body.max_input_voltage;
  //   const Vmpp_range_min_V = req.body.Vmpp_range_min_V;
  //   const Vmpp_range_max_V = req.body.Vmpp_range_max_V;
  //   const peak_efficency = req.body.peak_efficency;
  //   const max_current = req.body.max_current;
  //   const ac_output_power_kW = req.body.ac_output_power_kW
  //   const price = req.body.price;

  //   db.query(`INSERT INTO inverters VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
  //   [manufacturer, model, max_input_voltage, Vmpp_range_min_V, Vmpp_range_max_V, peak_efficency, max_current, ac_output_power_kW, price],
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   }
  //   );
  // })
  return router
}


