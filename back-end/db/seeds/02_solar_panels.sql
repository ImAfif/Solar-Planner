INSERT INTO solar_panel_tech (technology)
VALUES ("Crystalline"), ("Thin-Film")

INSERT INTO solar_panels (
  type, manufacturer, model, max_power(Wp)Pm, max_current(A)Im, max_voltage(V)Vm, open_voltage(V)Voc, short_voltage(A)Isc, panel_area(㎡), price)
VALUES
(1, "Renogy", "Eclipse - 100 Watt", 100, 5.7, 600, 21.2, 6.1, 0.55, 219.99),
(1, "Renogy", "175 Watt", 175, 15, 1000, 21.6, 10.35, .89, 259.99),
(1, "Renogy", "200 Watt", 200, 15, 1000, 27, 9.66, 1.1, 299.99),
(1, "Black Sheep Solar", "Longi 315 Watt", 315, 9.36, 1000, 40.6, 9.94, 1.69, 229.00),
(1, "Black Sheep Solar", "Trina 400 Watt", 400, 9.92, 40.3, 49, 10.45, 2, 300),
(1, "First Solar", "FS-6420", 420, 2.33, 180.4, 218.5, 2.54, 2.47, 300),
(1, "First Solar", "FS-6445", 445, 2.4, 185.7, 2.55, 220, 2.47, 375),
(1, "First Solar", "FS-6440-P", 440, 2.38, 184.7, 2.55, 220, 2.52, 415),
(1, "First Solar", "FS-6465-P", 465, 2.46, 191.1, 2.61, 224.3, 2.52, 450)
