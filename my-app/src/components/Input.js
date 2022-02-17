import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function Input(props) {
  
  const [energyPerDay, setEnergyPerDay ] = useState(props.energyPerDay)
  const [inputRange, setInputRange] = setInputRange(props.inputRange)
  const [moduleType, setModuleType] = useState(props.moduleType)


  const [userInput, setUserInput] = useState({ 
    energyPerDay: props.energyPerDay, 
    inputRange: props.inputRange,
    moduleType: props.moduleType 
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log('name: ----', name, 'value: ----- ', value)
    setUserInput({ ...userInput, [name]: value})
    console.log("userInput: ----",userInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("/api/gird_options", { energyPerDay, inputRange, moduleType })
    let navigate = useNavigate()
    navigate('/user/combo/:id')
  }
  
  return (
    <div className="container">
      <div className="input-form">
        <h2>Input Form</h2>
        {/* <form autoComplete='off' onSubmit= {e => e.preventDefault()}> */}
        <form autoComplete='off' onSubmit= {handleSubmit}>
          <span className="Watts">Choose the panel wattage
          </span>   
          {/* <select className="input-range" name="inputRange" onSelect={e => setInputRange(e.target.value)}> */}
          <select className="input-range" name="inputRange" onChange={handleChange}>
            <option value="" disabled selected>
              Choose panel wattage range
            </option>
            <option value="1">150 - 200</option>
            <option value="2">200 - 250 </option>
            <option value="3">250 - 300</option>
            <option value="4">300 - 350</option>
            <option value="5">350 - 400</option>
          </select>
          {/* <select className="module-type" name="moduleType" onSelect={e => setModuleType(e.target.value)}> */}
          <select className="module-type" name="moduleType" onChange={handleChange}>
            <option value="" disabled selected>
              Choose a panel type
            </option>
            <option value="1">Crystaline modules</option>
            <option value="2">Thin film modules</option>
            </select>
          <p>
            <label className="Energy-required">Energy Required
            {/* <input 
            className="energy" 
            name="energyPerDay"
            type="text" 
            placeholder="Units per Day in kWh"
            value={energyPerDay}
            onSubmit={e => setEnergyPerDay(e.target.value)} 
            /> */}
            <input 
            className="energy" 
            name="energyPerDay"
            type="text" 
            placeholder="Units per Day in kWh"
            value={userInput.energyPerDay}
            onChange={handleChange} 
            />
            </label>
          </p>
          {/* <p>
            <label className="Area-available">
              Amount of area available in metres squared
            </label>
            <input className="area" name="area" type="text"></input>
          </p> */}
          <button className="calculate" href="/user/combo/:id">Calculate</button>

          {/* <p>
            <label className="price-question">Price</label>
            <input className="price" name="price" type="text"></input>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Input;
