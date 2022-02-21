-- Drop and recreate solar panels table

DROP TABLE IF EXISTS solar_panel_tech CASCADE;

CREATE TABLE solar_panel_tech (
  id SERIAL PRIMARY KEY NOT NULL,
  technology varchar(255)
);

DROP TABLE IF EXISTS solar_panels CASCADE;

CREATE TABLE solar_panels (
  id SERIAL PRIMARY KEY NOT NULL,
  technology int REFERENCES solar_panel_tech(id) on DELETE CASCADE,
  manufacturer varchar(255),
  model varchar(255),
  max_power_Wp int NOT NULL,
  max_current_A int NOT NULL,
  max_voltage_V int NOT NULL,
  open_voltage_V int NOT NULL,
  short_circuit_current_A int NOT NULL,
  panel_area int NOT NULL,
  price int NOT NULL
);
