
DROP TABLE IF EXISTS inverters CASCADE;
CREATE TABLE inverters (
  id SERIAL PRIMARY KEY NOT NULL,
  manufacturer varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  max_input_voltage int NOT NULL,
  VMpp_range_min_V int NOT NULL,
  VMpp_range_max_V int NOT NULL,
  peak_efficiency int NOT NULL,
  max_current int NOT NULL,
  ac_ouput_power_kW int NOT NULL,
  price int NOT NULL
)
