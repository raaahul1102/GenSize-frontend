import React from "react";
import "./Navbar.css";
import logo from "./assets/logo2.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Website Logo" style={{ height: "100px" }} />{" "}
        {/* Adjust the height as needed */}
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
