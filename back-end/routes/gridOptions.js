const router = require("express").Router();
const {
  powerNeededByLoad,
  acPowerOutputFromInverter,
  dcPowerInputToInverter,
  operationsLoss,
  powerPlantCapacity,
  inverterEstimatedRating,
  //selectedModulesFromDb,
  totalModules,
  selectedInvertersFromDb,
  modulesInString,
  combinationCompatibility,
  totalStrings,
  comboPrice,
  // combo
} = require("./helper_functions");

const { getInverterArray, getPanelByInputRange, getComboByUserId, addCombo } = require('./helpers/selectors')

const combo = function (modulesPromise, inverters, value) {
console.log('invert -------', inverters)
  const comboArray = []
  inverters.forEach(inverter => {

  //  modulesPromise.then(result => {

    modulesPromise.map(module => {

        const allNumberOfModules = totalModules(module, value)
        console.log('total panels from inside func combo: ---',allNumberOfModules)

        const seriesModules = modulesInString(module, inverter)

        const modulesInParallel = totalStrings(allNumberOfModules, seriesModules)

        const compatible = combinationCompatibility(module, inverter)

        const totalComboPrice = comboPrice(module, inverter, modulesInParallel)

        if (!compatible) {

          comboArray.push(false)
        }
        comboArray.push({ module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice })//results
      })
    })
  // })
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

    const f7 = await getPanelByInputRange(inputRange, db);

    // console.log(inputRange)
    //console.log('f7: ', f7);

    // console.log('inverterArray: ----', getInverterArray(db))
    //  const f9 = getInverterArray(db).then(inverters => {
    //    console.log(inverters.forEach(inverter => inverter.VMpp_range_max_V))
    //  const selectedInvertersFromDb = function (value, promise) {
    //   //console.log('returning promise from func: -----', promise)
    //   return promise.then(result => {
    //     //console.log('inside helper func promise: ----',result)
    //       result.filter(inverter => {
    //         console.log(inverter.VMpp_range_max_V, inverter.VMpp_range_min_V)
    //           const avgRating = (inverter.VMpp_range_min_V + inverter.VMpp_range_max_V) / 2;
    //           console.log(avgRating);
    //           return (
    //               avgRating > value &&
    //               avgRating < (value * 1.25)
    //           )
    //       })
    //   })
    //  }
    //  selectedInvertersFromDb(f6, inverters)
    // })

    const f9 = selectedInvertersFromDb(f6)

    const f11 = combo(f7, f9, f6);

console.log('f11 ----',f11);



    res.send({ energyPerDay: energyPerDay, inputRange: inputRange, moduleType: moduleType, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6, f11: f11 })

  })

  // const combo = function(modulesPromise, invertersPromise) {

  //   const comboArray = []
  //   invertersPromise.forEach(inverter => {
  //     console.log('I am here also')
  //     modulesPromise.forEach(module => {
  //       console.log('I am here')
  //       const allNumberOfModules = totalModules(module, f6)
  //       console.log(allNumberOfModules)
  //       const seriesModules = modulesInString(module, inverter)
  //       console.log(seriesModules)
  //       console.log('compatibility inside: ', combinationCompatibility(module, inverter))
  //       const modulesInParallel = totalStrings(module, inverter)
  //       //const results = {module, inverter, allNumberOfModules, seriesModules, modulesInParallel}
  //       const compatible = combinationCompatibility(module, inverter)
  //       const totalComboPrice = comboPrice(module, inverter, f8)
  //       if (!compatible) {
  //         console.log('Not compatible')
  //         comboArray.push(false)
  //       }
  //        comboArray.push({module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice})//results
  //   })
  // })
  // return comboArray
  //}
  //console.log('combo func output: -----',combo(f7, f9))
  //const f11 = combo(f7, f9);
  // })
  return router;
};
