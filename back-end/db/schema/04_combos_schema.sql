

DROP TABLE IF EXISTS combos CASCADE;

CREATE TABLE combos (
  id SERIAL PRIMARY KEY NOT NULL,
  inverter_id int REFERENCES inverters(id) on DELETE CASCADE,
  solar_panel_id int REFERENCES solar_panels(id) on DELETE CASCADE,
  total_modules int NOT NULL,
  modules_in_string int NOT NULL,
  combination_compatibility boolean NOT NULL,
  total_strings int NOT NULL,
  combo_price int NOT NULL
)
