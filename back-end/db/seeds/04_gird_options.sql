INSERT VALUES INTO grid_options
VALUES(
  inverter_id,
  solar_panel_id,
  power_req(kW),
  estimated_loss(kW),
  power_capactiy(kW),
  num_of_panels,
  total_area(㎡),
  inverter_ac_output,
  inverter_dc_input,
  panels_dc_output,
  price_of_setup
)

(1, 2, 4000, 400, 700, 3, 15, 45, 45, 60, 2500);
