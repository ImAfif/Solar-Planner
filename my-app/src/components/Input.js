import axios from "axios";
import React, { useState } from "react";
import GridOptions from "./GridOptions";

function Input(props) {

  const [userInput, setUserInput] = useState({
    energyPerDay: '',
    inputRange: '',
    moduleType: ''
  })
  const [optionsStateValue, setOptionsStateValue] = useState(false);
  const [gridOptionsStateValues, setGridOptionsStateValues] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('name: ----', name, 'value: ----- ', value)
    setUserInput({ ...userInput, [name]: value })
    console.log("userInput: ----", userInput);

  }

  let results = [];
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/gridoptions/griddata', userInput)
      .then((response) => {
        console.log('from inside axios post: ----', response.data)
        // results.push(response.data);
        setOptionsStateValue(true);
        const gridOptionsValues = <GridOptions {...response.data} />
        setGridOptionsStateValues(gridOptionsValues)
      })//, 
    //console.log('results outside: ----', results);



  }

  return (
    <div className="container">
      <div className="input-form">
        <h2>Input Form</h2>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <span className="Watts">Choose the panel wattage
            <select className="input-range" name="inputRange" onChange={handleChange} required>
              <option value="" disabled selected>
                Choose panel wattage range
              </option>
              <option value="1">150 - 200</option>
              <option value="2">200 - 250 </option>
              <option value="3">250 - 300</option>
              <option value="4">300 - 350</option>
              <option value="5">350 - 400</option>
            </select>
          </span>
          <select className="module-type" name="moduleType" onChange={handleChange}
            required>
            <option value="" disabled selected>
              Choose a panel type
            </option>
            <option value="1">Crystaline modules</option>
            <option value="2">Thin film modules</option>
          </select>
          <p>
            <label className="Energy-required">Energy Required
              <input
                className="energy"
                name="energyPerDay"
                type="text"
                placeholder="Units per Day in kWh"
                onChange={handleChange}
                required
              />
            </label>
          </p>
          <button className="calculate"
            type="submit"
          >Calculate</button>
          <br />

        </form>
        {optionsStateValue && gridOptionsStateValues}
      </div>
    </div>
  );
}

export default Input;
