import React from "react";
function input() {
  return (
    <div class="container">
      <div class="green-background">
        <h2>Input Form</h2>
      </div>
      <span class="Watts">Choose your watts</span>
      <select class="Watts-select" name="option">
        <option value="" disabled selected>
          Choose your option
        </option>
        <option value="1">150</option>
        <option value="2">200</option>
        <option value="3">250</option>
        <option value="1">300</option>
        <option value="2">350</option>
        <option value="3">400</option>
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
