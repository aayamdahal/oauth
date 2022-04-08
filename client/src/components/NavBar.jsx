import React from "react";
import "../styles/index.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Logo</span>
      <ul className="list">
        <li className="listitem">
          <div className="avatar"></div>
        </li>
        <li className="listitem">Logout</li>
      </ul>
    </div>
  );
};

export default NavBar;
