-- Drop and recreate grid options table

DROP TABLE IF EXISTS grid_options CASCADE;

CREATE TABLE grid_options (
  id SERIAL PRIMARY KEY NOT NULL,
  inverter_id int REFERENCES inverters(id) on DELETE CASCADE,
  solar_panel_id int REFERENCES solar_panels(id) on DELETE CASCADE,
  power_req_kW int NOT NULL,
  estimated_loss_kW int NOT NULL,
  power_capactiy_kW int NOT NULL,
  num_of_panels int NOT NULL,
  total_area_㎡ int NOT NULL,
  inverter_ac_output int NOT NULL,
  inverter_dc_input int NOT NULL,
  panels_dc_output int NOT NULL,
  price_of_setup int NOT NULL
)
