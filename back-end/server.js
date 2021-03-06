// load .env data into process.env
require("dotenv").config();


// Web server config
const PORT = process.env.PORT || 3004;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(cookieParser()); //fixed the object passing to backend
const jsonParser = bodyParser.json();
app.use(jsonParser); // use it globally
//app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");
// const solarPanelRoutes = require("./routes/solar_panels");
// const inverterRoutes = require("./routes/inverters");
// const comboRoutes = require("./routes/grid_options");


// // Mount all resource routes
// // Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/solarpanels", solarPanelRoutes(db));
// app.use("/api/inverters", inverterRoutes(db));
// app.use("/api/combos", comboRoutes(db));
const usersRoutes = require("./routes/users");
const solarPanelRoutes = require("./routes/solarPanels");
const inverterRoutes = require("./routes/inverters");
const gridOptionRoutes = require("./routes/gridOptions");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/solarpanels", solarPanelRoutes(db));
app.use("/api/inverters", inverterRoutes(db));
app.use("/api/gridoptions", gridOptionRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  console.log("HELLO we are in the main server path");


  //res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
