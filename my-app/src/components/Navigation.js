import React from "react";
function Navigation() {
  return (
    <nav>
      <span class="solar">Solar 🌞 Planner</span>
      <div class="btn btn--scroll">
        <a href="/Login" class="Login" title="Login">
          Login
        </a>
        <a href="/Register" class="Register" title="Register">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
