
//const { Pool } = require("pg");
const router = require("express").Router();
const {
  powerNeededByLoad,
  acPowerOutputFromInverter,
  dcPowerInputToInverter,
  operationsLoss,
  powerPlantCapacity,
  inverterEstimatedRating,
  // selectedModulesFromDb,
  // totalModules,
  // selectedInvertersFromDb,
  // modulesInString,
  // combinationCompatibility,
  // totalStrings,
  // comboPrice,
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

  router.get("/griddata", ( req, res ) => {
    const comboById = getComboByUserId(user_id)
    res.json([
      {comboById, id: 1, user_id: 1, inverter_id: 3, solar_panel_id: 4, power_req_kw: 20, estimated_loss_kw: 5, power_capacity_kw: 8}
    ])
  })

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

    // const moduleDatafromDB = Promise.all([
    //   db.query(`SELECT * FROM solar_panel_tech WHERE max_power_Wp < 200`),
    //   db.query(`SELECT * FROM inverters WHERE max_power_Wp < 200`)])
    //   .then(results => {
    //   const solar_panels = results[0].rows
    //   const inverters = results[1].rows
    //   f7,
    //   f14
    // })



    // const f7 = selectedModulesFromDb(inputRange);
    // console.log(inputRange)
    // console.log('f7: ',f7);

    //db.query(`INSERT  `)

    //const panel = f7[2]
    //console.log('panel: --', panel)
    //const f8 = totalModules(panel, f6); // when calling in combo pass module as argument instead of panel
   // console.log('f8: ',f8);


    // const f9 = selectedInvertersFromDb(f6);
    // console.log('f9: ',f9);


    // //const inverter = f9[0]
    // const f10 = modulesInString(panel, inverter);
    // //console.log('f10: ',f10);


    // const f11 = combinationCompatibility(panel, inverter);
    // //console.log('f11: ',f11);


    // const f12 = totalStrings(f8, f10); //check edge cases with real db data

    // //console.log('f12: ',f12);


    // const f13 = comboPrice(panel, inverter, f8);
    //console.log('f13: ',f13);


    // const f14 = combo(f7, f9, f8, f10, f11, f12, f13);
    // console.log('f14: ',f14);

  })

  return router;
};
