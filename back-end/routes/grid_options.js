/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const router = require("express").Router();

module.exports = db => {


  //logic to get user id from session

  const user_id = //placeholder for logic

  //show user a list of their solar grid options
  router.get("/grid-options", (req, res) => {
    db.query(`SELECT * FROM grid_options WHERE user_id = $1`, [user_id]).then(({ rows: grid_options }) => {
      res.json(
        grid_options.reduce (
          //impliment logic to pass gir option data to front end

        )
      )
    })
  });

  router.put("/grid-options", (req, res) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }

    // get data from input form
    const energy_required = req.body.energy;
    const area_available = req.body.area;
    const price = req.body.price;
    const watts = 0;

    if (req.body.watts == 1) {
      watts += 1;
    } else if (req.body.watts == 2) {
      watts += 2;
    } else if (req.body.watts == 3) {
      watts += 3;
    } else if (req.body.watts == 4) {
      watts += 4;
    } else if (req.body.watts == 5) {
      watts += 5;
    }

    //impliment logic from Arvinds helper functions based upon input from user


    db.query(

      `INSERT INTO grid_options
      VALUES
    )
  })

  return router;
};
