-- INSERT VALUES INTO grid_options
-- VALUES(
--   inverter_id,
--   solar_panel_id,
--   power_req(kW),
--   estimated_loss(kW),
--   power_capactiy(kW),
--   num_of_panels,
--   total_area(㎡),
--   inverter_ac_output,
--   inverter_dc_input,
--   panels_dc_output,
--   price_of_setup
-- )

-- (1, 2, 4000, 400, 700, 3, 15, 45, 45, 60, 2500);
INSERT INTO grid_options (
  -- inverter_id,
  -- solar_panel_id,
  power_needed_by_load,
  ac_power_output_from_inverter,
  dc_power_input_to_inverter,
  operations_loss,
  power_plant_capacity,
  inverter_estimated_rating,
  combos_id
)
VALUES ( 5.6, 6, 6.3, 19.25, 7.2, 600, '{1, 2, 3}'
),
(6, 7, 7.2, 19.25, 8.2, 400, '{4, 5, 6}'
);
