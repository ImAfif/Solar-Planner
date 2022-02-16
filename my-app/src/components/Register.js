import React from "react";

export default function Register() {
  return (
    <div>
      <form>
        <h1>Register</h1>
        <label>Name</label>
        <input name="name" type="text" placeholder="Name"></input>
        <label>Email</label>
        <input name="email" type="text" placeholder="Email"></input>
        <label>Password</label>
        <input name="password" type="text" placeholder="Password"></input>
      </form>
    </div>
  )
}