import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <h1>Login</h1>
        <label>Email</label>
        <input name="email" type="text" placeholder="Email"></input>
        <label>Password</label>
        <input name="password" type="text" placeholder="Password"></input>
      </form>
    </div>
  )
}