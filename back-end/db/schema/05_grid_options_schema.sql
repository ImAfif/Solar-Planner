-- Drop and recreate grid options table


DROP TABLE IF EXISTS grid_options CASCADE;

CREATE TABLE grid_options (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id int REFERENCES users(id) on DELETE CASCADE,
  -- inverter_id int REFERENCES inverters(id) on DELETE CASCADE,
  -- solar_panel_id int REFERENCES solar_panels(id) on DELETE CASCADE,
  power_needed_by_load int NOT NULL,
  ac_power_output_from_inverter int NOT NULL,
  dc_power_input_to_inverter int NOT NULL,
  operations_loss int NOT NULL,
  power_plant_capacity int NOT NULL,
  inverter_estimated_rating int NOT NULL,
  combos_id integer[] NOT NULL
  -- total_modules int NOT NULL,
  -- modules_in_string int NOT NULL,
  -- combination_compatibility int NOT NULL,
  -- total_strings int NOT NULL,
  -- combo_price int NOT NULL,
  -- combo int NOT NULL
);


