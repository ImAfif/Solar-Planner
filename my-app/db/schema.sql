CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name varchar(255) NOT NULL,
  email varchar(255),
  password varchar(255)
)

CREATE TABLE solar_panels (
  id SERIAL PRIMARY KEY NOT NULL,
  manufacturer varchar(255),
  model varchar(255),
  max_power(Wp) int NOT NULL,
  max_current(A) int NOT NULL,
  max_voltage(V) int NOT NULL,
  open_voltage(V) int NOT NULL,
  short_voltage(A) int NOT NULL,
  panel_area(㎡) int NOT NULL,
  price int NOT NULL
)

CREATE TABLE inverters (
  id SERIAL PRIMARY KEY NOT NULL,
  manufacturer varchar(255),
  model varchar(255),
  max_voltage(V) int NOT NULL,
  VMpp_range_min(V) int NOT NULL,
  VMpp_range_max(V) int NOT NULL,
  peak_efficiency(%) int NOT NULL,
  price int NOT NULL
)

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

