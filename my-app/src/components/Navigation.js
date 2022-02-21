import React from "react";
function Navigation() {
  return (
    <nav>
      <titles>
        <span className="solar">🌞 Solar Planner</span>
        <a href="/" className="link">
          Home
        </a>
        <a href="/About" className="link">
          About
        </a>
        {/* <a href="/Store" class="Store">
          Store
        </a> */}
        <a href="/Login" className="link">
          Login
        </a>

        <a href="/Register" className="link">
          Register
        </a>
      </titles>
    </nav>
  );
}

export default Navigation;
