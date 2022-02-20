/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const router = require("express").Router();
const {
  powerNeededByLoad,
  acPowerOutputFromInverter,
  dcPowerInputToInverter,
  operationsLoss,
  powerPlantCapacity,
  inverterEstimatedRating,
  selectedModulesFromDb,
  totalModules,
  selectedInvertersFromDb,
  modulesInString,
  combinationCompatibility,
  // totalStrings,
  // comboPrice,
  // combo
} = require("./helper_functions");

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

  router.post("/griddata", (req, res) => {
    console.log("We are reaching this function");
    console.log(req.body);
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


    const f7 = selectedModulesFromDb(inputRange);
    console.log(inputRange)
    console.log('f7: ',f7);

    const panel = f7[2]
    console.log('panel: --', panel)
    const f8 = totalModules(panel, f6); // when calling in combo pass module as argument instead of panel
    console.log('f8: ',f8);


    const f9 = selectedInvertersFromDb(f6);
    console.log('f9: ',f9);


    const inverter = f9[0]
    const f10 = modulesInString(panel, inverter);
    console.log('f10: ',f10);


    const f11 = combinationCompatibility(panel, inverter);
    console.log('f11: ',f11);
    // if (process.env.TEST_ERROR) {
    //   setTimeout(() => response.status(500).json({}), 1000);
    //   return;
    // }


    // // get data from input form
    // const energy_required = req.body.energy;
    // const area_available = req.body.area;
    // const price = req.body.price;
    // const low_range = 0;
    // const high_range = 0;
    // const panel_type = req.body.moduleType
    // const type = () => {
    //   if('abc' === 1) {
    //     panel_type += 1

    //   }
    // }

    // if (req.body.watts == 1) {
    //   low_range = 150;
    //   high_range = 200;
    // } else if (req.body.watts == 2) {
    //   low_range = 200;
    //   high_range = 250;
    // } else if (req.body.watts == 3) {
    //   low_range = 250;
    //   high_range = 300;
    // } else if (req.body.watts == 4) {
    //   low_range = 300;
    //   high_range = 350;
    // } else if (req.body.watts == 5) {
    //   low_range = 350;
    //   high_range = 400;
    // }

    // db.query(`SELECT * FROM solar_panels WHERE max_power > $1 AND max_power < $2;`, [low_range, high_range])
    // .then(({ rows: solar_panels }) => {
    //   res.json(solar_panels)
    // })

    // db.query(`SELECT * FROM inverters;`)
    // .then(({ rows: inverters }) => {
    //   res.json(inverters)
    // })

    // //impliment logic from Arvinds helper functions based upon input from user


    // db.query(
    //   `INSERT INTO grid_options
    //   VALUES`
    // )
  })

  return router;
};
