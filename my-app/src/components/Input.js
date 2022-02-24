import axios from "axios";
import React, { useState } from "react";
import GridOptions from "./GridOptions";
import Combo from "./Combo";

function Input() {

  const [userInput, setUserInput] = useState({
    energyPerDay: '',
    inputRange: '',
    moduleType: ''
  })
  const [optionsStateValue, setOptionsStateValue] = useState(false);
  const [gridOptionsStateValues, setGridOptionsStateValues] = useState(null);
  const [comboOptionsValue, setComboOptionsValue] = useState(null);
  const [comboStateValue, setComboStateValue] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('name: ----', name, 'value: ----- ', value)
    setUserInput({ ...userInput, [name]: value })
    console.log("userInput: ----", userInput);

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/gridoptions/griddata', userInput)
      .then((response) => {
        
        setOptionsStateValue(true);
        setComboStateValue(true);
        const gridOptionsValues = <GridOptions {...response.data} />
        const comboOptionsValues = <Combo {...response.data.f11} />
        setGridOptionsStateValues(gridOptionsValues);
        setComboOptionsValue(comboOptionsValues);
        
      })

  }

  return (
    <div className="container">
      <div className="input-form">
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label className="label">Choose Panel Wattage</label>
            <select className="input-range" name="inputRange" onChange={handleChange} required>
              <option value="" disabled selected>
                Please choose wattage...
              </option>
              <option value="1">150W - 200W</option>
              <option value="2">200W - 250W</option>
              <option value="3">250W - 300W</option>
              <option value="4">300W - 350W</option>
              <option value="5">350W - 400W</option>
            </select>
          <label>Choose Panel Type</label>
          <select className="module-type" name="moduleType" onChange={handleChange}
            required>
            <option value="" disabled selected>
              Please choose type...
            </option>
            <option value="1">Crystaline modules</option>
            <option value="2">Thin film modules</option>
          </select>
          <p>
            <label className="Energy-required">Energy Required (kWh)</label>
              <input
                className="energy"
                name="energyPerDay"
                type="text"
                placeholder="Units per Day in kWh"
                onChange={handleChange}
                required
              />
          </p>
          <button className="calculate"
            type="submit"
          >Calculate</button>
          <br />

        </form>
        {optionsStateValue && gridOptionsStateValues}
        {comboStateValue && comboOptionsValue}
      </div>
    </div>
  );
}

export default Input;
