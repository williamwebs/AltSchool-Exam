import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="inner-container">
      <div className="nav">
        <div className="logo">Randy Users</div>
        <div
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { color: "darkred" } : { color: "whitee" }
            }
            className="nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { color: "darkred" } : { color: "whitee" }
            }
            className="nav-link"
          >
            About
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) =>
              isActive ? { color: "darkred" } : { color: "whitee" }
            }
            className="nav-link"
          >
            Users
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? { color: "darkred" } : { color: "whitee" }
            }
            className="nav-link login-btn"
          >
            Login
          </NavLink>
        </div>
        {/* hamburger */}
        <div className="hamburger" onClick={() => setMobile(!mobile)}>
          {/* {mobile? <ImgBars/> : <Imgcross/>} */}
          <span className="hamburger-span-top"></span>
          <span className="hamburger-span-middle"></span>
          <span className="hamburger-span-bottom"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
