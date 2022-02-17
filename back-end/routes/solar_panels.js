router.get("/grid-options", (req, res) => {
  db.query(`SELECT * FROM solar_panels`, [user_id]).then(
    ({ rows: grid_options }) => {
      res.json(grid_options.reduce());
    }
  );
});

router.get("/solar-panels", (req, res) => {
  db.query(`SELECT * FROM solar_panels`, [user_id]).then(
    ({ rows: grid_options }) => {
      res.json(grid_options.reduce());
    }
  );
});
