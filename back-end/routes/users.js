/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const router  = require('express').Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`,
      [email, password],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if(result.length > 0) {
          req.session.user = result;
          console.log('req session:', req.session.user)
          res.send (result);
        } else {
          res.send({message: "Wrong username/password combination"})
        }
      }
    );
  });


  router.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query(`INSERT INTO users VALUES ($1, $2, $3)`,
      [name, email, password],
      (err, result) => {
        console.log(err);
      }
    );
  });
  return router;
};
