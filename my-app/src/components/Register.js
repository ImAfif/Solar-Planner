import React, {useEffect, useState} from "react";
import Axios from "axios";
import "../App.css";
import Navigation from "./Navigation";

export default function Register() {
  const [nameReg, setNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");




  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("/users/register", {
      name: nameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };



  return (
    <>
    <Navigation />
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input 
          name="name" 
          type="text" 
          placeholder="Name" 
          onChange={(e) => {
            setNameReg(e.target.value)
            }} 
          />
        <label>Email</label>
        <input 
          name="email" 
          type="text" 
          placeholder="Email" 
          onChange={(e) => {
            setEmailReg(e.target.value)
          }}
        />
        <label>Password</label>
        <input 
          name="password" 
          type="text" 
          placeholder="Password" 
          onChange={(e) => {
            setPasswordReg(e.target.value)
          }}
        />
        <button onClick={register}>Register</button>
      </form>
    </>
  )
}