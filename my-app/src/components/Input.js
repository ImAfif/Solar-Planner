import React, { useState } from "react";
export default function Input() {
  const [state, setState] = useState({
    Watts: "",
    energy: "",
    area: "",
    price: "",
  });

  return (
    <div class="container">
      <div class="green-background">
        <h2>Input Form</h2>
      </div>
      <span class="Watts">Choose your watts</span>
      <select
        class="Watts-select"
        name="option"
        value={state.Watts}
        onChange={(event) => setState({ ...state, Watts: event.target.value })}
      >
        <option value="1">150</option>
        <option value="2">200</option>
        <option value="3">250</option>
        <option value="4">300</option>
        <option value="5">350</option>
        <option value="6">400</option>
      </select>

      <p>
        <label class="Energy-required">Energy Required</label>
        <input
          class="energy"
          name="energy"
          type="text"
          value={state.energy}
          onChange={(event) =>
            setState({ ...state, energy: event.target.value })
          }
        ></input>
      </p>
      <p>
        <label class="Area-available">
          Amount of area available in metres squared
        </label>
        <input
          class="area"
          name="area"
          type="text"
          value={state.area}
          onChange={(event) => setState({ ...state, area: event.target.value })}
        ></input>
      </p>
      <p>
        <label class="price-question">Price</label>
        <input
          class="price"
          name="price"
          type="text"
          value={state.price}
          onChange={(event) =>
            setState({ ...state, price: event.target.value })
          }
        ></input>
      </p>
    </div>
  );
}

//set up a submit button
//on clickon do an axios to my backend
//my query will be an AND condition
//search express post request
//make form params required
//make axios to connect to the backend (router)
