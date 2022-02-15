-- Drop and recreate solar panels table

DROP TABLE IF EXISTS solar_panels CASCADE;
CREATE TABLE solar_panels (
  id SERIAL PRIMARY KEY NOT NULL,
  manufacturer varchar(255),
  model varchar(255),
  max_power(Wp) int NOT NULL,
  max_current(A) int NOT NULL,
  max_voltage(V) int NOT NULL,
  open_voltage(V) int NOT NULL,
  short_circuit_current(A) int NOT NULL,
  panel_area(㎡) int NOT NULL,
  price int NOT NULL
)
