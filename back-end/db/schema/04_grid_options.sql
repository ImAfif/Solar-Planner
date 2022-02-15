-- Drop and recreate grid options table

DROP TABLE IF EXISTS grid_options CASCADE;

CREATE TABLE grid_options (
  id SERIAL PRIMARY KEY NOT NULL,
  inverter_id FOREIGN KEY REFERENCES inverters(id),
  solar_panel_id FOREIGN KEY REFERENCES solar_panels(id),
  power_req(kW) int NOT NULL,
  estimated_loss(kW) int NOT NULL,
  power_capactiy(kW) int NOT NULL,
  num_of_panels int NOT NULL,
  total_area(㎡) int NOT NULL,
  inverter_ac_output int NOT NULL,
  inverter_dc_input int NOT NULL,
  panels_dc_output int NOT NULL,
  price_of_setup int NOT NULL
)
