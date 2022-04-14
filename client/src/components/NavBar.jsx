import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import img from "../styles/img.png";
const NavBar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        Logo
      </Link>
      {user ? (
        <ul className="list">
          <li className="listitem">
            <img src={img} className="avatar" alt="test" />
          </li>
          <li className="listitem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
