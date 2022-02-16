INSERT INTO solar_panel_tech (technology)
VALUES
('Crystalline'),
('Thin-Film');

INSERT INTO solar_panels (
  technology, manufacturer, model, max_power_Wp, max_current_A, max_voltage_V, open_voltage_V, short_circuit_current_A, panel_area_㎡, price)
VALUES
(1, 'Renogy', 'Eclipse - 100 Watt', 100, 5.7, 600, 21.2, 6.1, 0.55, 219.99),
(1, 'Renogy', '175 Watt', 175, 15, 1000, 21.6, 10.35, .89, 259.99),
(1, 'Renogy', '200 Watt', 200, 15, 1000, 27, 9.66, 1.1, 299.99),
(1, 'Black Sheep Solar', 'Longi 315 Watt', 315, 9.36, 1000, 40.6, 9.94, 1.69, 229.00),
(1, 'Black Sheep Solar', 'Trina 400 Watt', 400, 9.92, 40.3, 49, 10.45, 2, 300),
(1, 'First Solar', 'FS-6420', 420, 2.33, 180.4, 218.5, 2.54, 2.47, 300),
(1, 'First Solar', 'FS-6445', 445, 2.4, 185.7, 220, 2.55, 2.47, 375),
(1, 'First Solar', 'FS-6440-P', 440, 2.38, 184.7, 2.55, 220, 2.52, 415),
(1, 'First Solar', 'FS-6465-P', 465, 2.46, 191.1, 2.61, 224.3, 2.52, 450),
(2, 'GH Energy Tech Co.', 'XLS22-144', 144, 4.09, 35.2, 48.4, 5.1, 1, 230),
(2, 'GH Energy Tech Co.', 'XLS44-288', 288, 8.18, 35.2, 48.4, 10.2, 1, 350),
(2, 'PuDu Green Energy Co.', 'a-si thinfilm130W', 130, 2.23, 58.23, 74.6, 2.64, 1.43, 150),
(2, 'Just Solar Co.', 'JST360TF', 360, 2.5, 147.6, 193.96, 3, 5.72, 490),
(2, 'Just Solar Co.', 'JST400TF', 400, 2.62, 154.58, 198.42, 3.04, 5.72, 575),
(2, 'Shandong Sinoltech Intl Co', 'Flex-03W-2.6M-500W', 500, 8.03, 62.4, 77.2, 9.07, 3.34, 700),
(1, 'Test Data', 'model1- PASSED', 210, 6.21, 33.81, 41.59, 7.13, 2, 100),
(1, 'Test Data', 'model2- PASSED', 350, 10, 32, 39, 8, 2, 150),
(1, 'Test Data', 'model3- PASSED', 151, 7.9, 18.35, 22.4, 8.5, 2, 85),
(1, 'Test Data','model4- PASSED', 240, 7.85, 30.6, 37.38, 8.45, 2, 110),
(1, 'Test Data', 'model5- PASSED', 150, 6.9, 19.35, 21.4, 7.5, 2, 90),
(1, 'Test Data', 'model6- PASSED', 145, 7.9, 18.35, 22.4, 8.5, 2, 80);
