
INSERT INTO combos (
  inverter_id,
  solar_panel_id,
  total_modules,
  modules_in_string,
  combination_compatibility,
  total_strings,
  combo_price
)
VALUES (1, 3, 30, 10, true, 3, 4200),
  (3, 4, 33, 11, true, 3, 4300),
  (2, 4, 19, 9, false, 2, 2300),
  (3, 2, 20, 10, true, 2, 4100),
  (2, 2, 21, 10, true, 2, 4300),
  (1, 1, 9, 9, false, 1, 1100);


