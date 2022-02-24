const avg = function (a, b) {
  return (a + b) / 2;
}


//Inverter Fake data
const inverters = {
  1: { 'manufacturer': 'abc', 'model name': 'model1', max_input_voltage: 600, Vmpp: avg(400, 800), Imax: 35, Efficiency: 98.2, ac_ouput_power_kW: 5.6, Price: 1500 },//ac_ouput_power_kW in kva
  2: { 'manufacturer': 'abc', 'model name': 'model2', max_input_voltage: 400, Vmpp: avg(80, 100), Imax: 10, Efficiency: 98, ac_ouput_power_kW: 40, Price: 1600 },
  3: { 'manufacturer': 'abc', 'model name': 'model3', max_input_voltage: 600, Vmpp: avg(100, 160), Imax: 75, Efficiency: 97.5, ac_ouput_power_kW: 10, Price: 1100 },
  4: { 'manufacturer': 'abc', 'model name': 'Pass4', max_input_voltage: 600, Vmpp: avg(80, 120), Imax: 50, Efficiency: 97, ac_ouput_power_kW: 7.5, Price: 1200 },
  5: { 'manufacturer': 'Must Energy Tech Co.', 'model': 'PH50-2500', max_input_voltage: 550, Vmpp: avg(80, 550), Imax: 11, Efficiency: 97.2, ac_ouput_power_kW: 5, price: 357 },
  6: { 'manufacturer': 'K & C Solar', 'model': 'Fornius Primo UL', max_input_voltage: 1000, Vmpp: avg(220, 800), Imax: 51, Efficiency: 96.7, ac_ouput_power_kW: 35, price: 3100 },
  7: { 'manufacturer': 'K & C Solar', 'model': 'SE3000H', max_input_voltage: 480, Vmpp: avg(150, 480), Imax: 13.5, Efficiency: 99.2, ac_ouput_power_kW: 8.6, price: 1600 },
  8: { 'manufacturer': 'Huayu', 'model': 'HYH-7.6K-NA', max_input_voltage: 600, Vmpp: avg(60, 480), Imax: 15, Efficiency: 98, ac_ouput_power_kW: 25, price: 2550 },
  9: { 'manufacturer': 'Test Data1', 'model': 'model1', max_input_voltage: 600, Vmpp: avg(400, 800), Efficiency: 98.2, Imax: 35, ac_ouput_power_kW: 5.6, price: 1500 },
  10: { 'manufacturer': 'Test Data2', 'model': 'model2', max_input_voltage: 400, Vmpp: avg(80, 100), Efficiency: 98, Imax: 10, ac_ouput_power_kW: 40, price: 1600 },
  11: { 'manufacturer': 'Test Data3', 'model': 'model3', max_input_voltage: 600, Vmpp: avg(100, 160), Efficiency: 97.5, Imax: 10, ac_ouput_power_kW: 15, price: 1100 },
  12: { 'manufacturer': 'Test Data4', 'model': 'Pass4', max_input_voltage: 600, Vmpp: avg(80, 120), Efficiency: 97, Imax: 7.5, ac_ouput_power_kW: 30, price: 1200 }
};


const powerNeededByLoad = function (units, hours) {
  return units / hours
}


const acPowerOutputFromInverter = function (value) {
  const assumption = 5; // adding assumptions seprately to display them while displaying the function values, maybe below the displayed value
  const loss = assumption / 100;
  return (value / (1 - loss))
}


const dcPowerInputToInverter = function (value) {
  const assumption = 5;
  const loss = assumption / 100;
  return value / (1 - loss)
}


const operationsLoss = function (moduleType) {
  if (moduleType !== '1') {
    return 15.5;
  } else {
    return 19.25;
  }
}


const powerPlantCapacity = function (value1, value2) {
  const loss = value1 / 100;
  return value2 / (1 - loss);
}


const inverterEstimatedRating = function (value) {
  const assumption = 10
  const safetyFactor = assumption / 100
  return (value / (1 - safetyFactor));
}


const totalModules = function (module, value) {
  return Math.ceil((value * 1000) / module.max_power_wp)
}


const selectedInvertersFromDb = function (value) {
  return Object.values(inverters).filter(inverter => {

    return (
      inverter.ac_ouput_power_kW > value &&
      inverter.ac_ouput_power_kW < (value * 1.25)
    )
  })
}


const modulesInString = function (selectedModule, selectedInverters) {
  return Math.ceil(selectedInverters.Vmpp / selectedModule.max_voltage_v)
}


const combinationCompatibility = function (module, inverter) {

  if (modulesInString(module, inverter) * module.max_voltage_V < inverter.Vmpp) {
    return true //if changed Vmp is in range of the selected inverter's Vmp then fine else not compatible
  }
  return false
}


const totalStrings = function (value1, value2) {
  return Math.ceil(value1 / value2)
}


const comboPrice = function (module, inverter, value) {
  const price = (module.price * value) + inverter.Price
  return price.toFixed(2)
}


module.exports = { powerNeededByLoad, acPowerOutputFromInverter, dcPowerInputToInverter, operationsLoss, powerPlantCapacity, inverterEstimatedRating, selectedInvertersFromDb, totalModules, modulesInString, combinationCompatibility, totalStrings, comboPrice }
