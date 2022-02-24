const router = require("express").Router();
const {
  powerNeededByLoad,
  acPowerOutputFromInverter,
  dcPowerInputToInverter,
  operationsLoss,
  powerPlantCapacity,
  inverterEstimatedRating,
  totalModules,
  selectedInvertersFromDb,
  modulesInString,
  combinationCompatibility,
  totalStrings,
  comboPrice
} = require("./helpers/helper_functions");

const { getPanelByInputRange } = require('./helpers/selectors')

const combo = function (modulesPromise, inverters, value) {

  const comboArray = []
  inverters.forEach(inverter => {

    modulesPromise.map(module => {

      const allNumberOfModules = totalModules(module, value)

      const seriesModules = modulesInString(module, inverter)

      const modulesInParallel = totalStrings(allNumberOfModules, seriesModules)

      const compatible = combinationCompatibility(module, inverter)

      const totalComboPrice = comboPrice(module, inverter, allNumberOfModules)

      if (!compatible) {

        comboArray.push(false)
      }
      comboArray.push({ module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice })
    })
  })
  return comboArray
}

module.exports = db => {

  router.get("/:id/grid-options", (req, res) => {
    const user_id = req.params.id
    db.query(`SELECT * FROM grid_options WHERE user_id = $1`, [user_id])
      .then(({ rows: grid_options }) => {
        res.json(
          grid_options.reduce(
          )
        )
      })
  });


  router.post("/griddata", async (req, res) => {

    const { energyPerDay, inputRange, moduleType } = req.body;

    const sunshineHoursPerDay = 3.3;

    const f1 = powerNeededByLoad(energyPerDay, sunshineHoursPerDay).toFixed(2)

    const f2 = acPowerOutputFromInverter(f1).toFixed(2);

    const f3 = dcPowerInputToInverter(f2).toFixed(2);

    const f4 = operationsLoss(moduleType).toFixed(2);

    const f5 = powerPlantCapacity(f4, f3).toFixed(2);

    const f6 = inverterEstimatedRating(f5).toFixed(2);

    const f7 = await getPanelByInputRange(inputRange, moduleType, db);

    const f9 = selectedInvertersFromDb(f6)

    const f11 = combo(f7, f9, f6);

    res.send({ energyPerDay: energyPerDay, inputRange: inputRange, moduleType: moduleType, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6, f11: f11 })

  })

  return router;
};
