
//const { Pool } = require("pg");
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


module.exports = db => {


  //logic to get user id from session


  //show user a list of their solar grid options
  // router.get("/api/grid-options", (req, res) => {
  router.get("/:id/grid-options", (req, res) => {
    const user_id = req.params.id
    db.query(`SELECT * FROM grid_options WHERE user_id = $1`, [user_id])
    .then(({ rows: grid_options }) => {
      res.json(
        grid_options.reduce (
        )
      )
    })
  });

  let results = {};


  //const arr1 = [];
  //const arr2 = [];
  // router.get("/griddata", ( req, res ) => {
  //   const userId = req.cookies.userId
  //   const comboById = getComboByUserId(userId, db)
  //   res.json([
  //     {arr1, comboById, id: 1, user_id: 1, inverter_id: 3, solar_panel_id: 4, power_req_kw: 20, estimated_loss_kw: 5, power_capacity_kw: 8}
  //   ])
  // })

  router.post("/griddata", (req, res) => {
    // console.log("We are reaching this function");
    // console.log(req.body);
    const { energyPerDay, inputRange, moduleType } = req.body;
    console.log('engy type: -----', energyPerDay);
    const sunshineHoursPerDay = 3.3;
    //const epd = Number(energyPerDay);

    const f1 = powerNeededByLoad(energyPerDay, sunshineHoursPerDay)
    console.log('First func:   ---', f1);

    const f2 = acPowerOutputFromInverter(f1);
    console.log('f2: ',f2);

    const f3 = dcPowerInputToInverter(f2);
    console.log('f3: ',f3);

    //console.log('moduleType: ',moduleType);
    const f4 = operationsLoss(moduleType);
    console.log('f4: ',f4);

    const f5 = powerPlantCapacity(f4, f3);
    console.log('f5: ',f5);

    const f6 = inverterEstimatedRating(f5);
    console.log('f6: ',f6);

    //arr1.push(energyPerDay, inputRange, moduleType, f1, f2, f3, f4, f5, f6);


    //results = {energyPerDay: energyPerDay, inputRange: inputRange, moduleType: moduleType, f1: f1, f2: f2, f3: f3, f4: f4, f5: f5, f6: f6}
    const sendValuesToDb = (db) => {
      db.query(`INSERT INTO grid_options ( power_needed_by_load,
        ac_power_output_from_inverter,
        dc_power_input_to_inverter,
        operations_loss,
        power_plant_capacity,
        inverter_estimated_rating,
        combos_id) VALUES ($1, $2, $3, $5, $6, $7)`, [f1, f2, f3, f4, f5, f6, 1])
        return db
        .query(queryString, queryParams)
        .then(res => res.rows)
        .catch(e => console.error(e.message))
        ))

    }

    const f7 = getPanelByInputRange(inputRange, db).then(panels => console.log(panels))

    console.log(inputRange)
    console.log('f7: ',f7);

    // addCombo();

    // console.log('inverterArray: ----',getInverterArray(db))
    // const f9 = selectedInvertersFromDb(f6, getInverterArray(db))

    // console.log('f9: ',f9);

    // const combo = function(modulesPromise, invertersPromise) {

    //   console.log("inside combo: ---",invertersPromise);
    //   const comboArray = []
    //   return invertersPromise.then(result => {

    //   result.forEach(inverter => {
    //     console.log('I am here ')
    //     modulesPromise.then(result => {
    //       result.forEach(module => {
    //         console.log('I am here also')

    //         const allNumberOfModules = totalModules(module, f6)
    //         console.log(allNumberOfModules)

    //         const seriesModules = modulesInString(module, inverter)
    //         console.log(seriesModules)
    //         //console.log('compatibility inside: ', combinationCompatibility(module, inverter))

    //         const modulesInParallel = totalStrings(module, inverter)
    //         //const results = {module, inverter, allNumberOfModules, seriesModules, modulesInParallel}

    //         const compatible = combinationCompatibility(module, inverter)

    //         const totalComboPrice = comboPrice(module, inverter, f8)

    //         if (!compatible) {
    //           console.log('Not compatible')
    //           comboArray.push(false)
    //         } else {
    //           comboArray.push({module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice})//results

    //         }
    //       })
    //     })
    //   })
    // })
    // return comboArray
    // }
    // console.log('combo func output: -----',combo(f7, f9))

  })

  router.get("/griddata", ( req, res ) => {
    res.json([
      {results: results}
    ])
  })

//   const combo = function(modulesPromise, invertersPromise) {

//     const comboArray = []
//     invertersPromise.forEach(inverter => {
//       console.log('I am here also')
//       modulesPromise.forEach(module => {
//         console.log('I am here')
//         const allNumberOfModules = totalModules(module, f6)
//         console.log(allNumberOfModules)
//         const seriesModules = modulesInString(module, inverter)
//         console.log(seriesModules)
//         console.log('compatibility inside: ', combinationCompatibility(module, inverter))
//         const modulesInParallel = totalStrings(module, inverter)
//         //const results = {module, inverter, allNumberOfModules, seriesModules, modulesInParallel}
//         const compatible = combinationCompatibility(module, inverter)
//         const totalComboPrice = comboPrice(module, inverter, f8)
//         if (!compatible) {
//           console.log('Not compatible')
//           comboArray.push(false)
//         }
//          comboArray.push({module, inverter, allNumberOfModules, seriesModules, modulesInParallel, totalComboPrice})//results
//     })
//   })
//   return comboArray
//   }
//   console.log('combo func output: -----',combo(f7, f9))
// })
  return router;
};
