INSERT INTO inverters (
  manufacturer varchar(255) NOT NULL,
  model varchar(255) NOT NULL,
  max_voltage(V) int NOT NULL,
  VMpp_range_min(V) int NOT NULL,
  VMpp_range_max(V) int NOT NULL,
  peak_efficiency(%) int NOT NULL
)
