import React from "react";
import Combo from "./Combo";
import "./GridOptions.css";
// import axios from "axios";
// import { useState } from "react";

export default function GridOptions (props) {
  //const {combos} = props;
  console.log('props reaching GridOptions component: ---',props)

  const calculatedValues = [];
  const { f1, f2, f3, f4, f5, f6 } = props;

  //const comboData = combos.map((combo) => <Combo {...combo} />)

  // const [results, setResults] = useState('');

  // axios.post('/api/gridoptions/griddata')
  // .then((response) => {
  //   console.log(response.data)
  //   setResults(response.data)
  // })//, 

  // console.log(results); 
  
  return (
    <div className="container1">
      {/* <h4>  Power needed by load in kW = {results} </h4> */}
    <h4>  Power needed by load in kW = {f1}</h4>
    <h4>  AC power output from inverter = {f2}</h4>
    <h4>  Input power to the inverter in kW = {f3}</h4>
    <h4>  Operations loss = {f4}</h4>
    <h4>  Power plant capacity in kW = {f5}</h4>
    <h4>  Inverter's estimated rating in kW = {f6}</h4>
    {/* <ul>
      {comboData}
    </ul> */}
    </div>
   
  )
}

