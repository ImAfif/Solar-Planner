import React, {useEffect, useState} from "react";
import Axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <form>
      <h1>Login</h1>
      <label>Email</label>
      <input 
        name="email" 
        type="text" 
        placeholder="Email" 
        onChange={(e) => {
          setEmail(e.target.value);
        }} 
      />
      <label>Password</label>
      <input 
        name="password" 
        type="text" 
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </form>
  )
}