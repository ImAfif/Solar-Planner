import React from "react";
function input() {
  return (
    <div class="container">
      <div class="green-background">
        <h2>Input Form</h2>
      </div>
      <span class="Watts">Choose the panel wattage
      </span>   
      <select class="Watts-select" name="input_range">
        <option value="" disabled selected>
          Choose panel wattage range
        </option>
        <option value="1">150 - 200</option>
        <option value="2">200 - 250 </option>
        <option value="3">250 - 300</option>
        <option value="4">300 - 350</option>
        <option value="5">350 - 400</option>
       </select>
      <p>
        <label class="Energy-required">Energy Required</label>
        <input class="energy" name="energy" type="text"></input>
      </p>
      <p>
        <label class="Area-available">
          Amount of area available in metres squared
        </label>
        <input class="area" name="area" type="text"></input>
      </p>
      <p>
        <label class="price-question">Price</label>
        <input class="price" name="price" type="text"></input>
      </p>
    </div>
  );
}

export default input;
