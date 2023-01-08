import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { GoSignIn, GoSignOut } from "react-icons/go";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="inner-container">
      <div className="nav">
        {/* <div className="logo">Randy Users</div> */}
        <div
          className="nav-links"
          // className={mobile ? "nav-links-mobile" : "nav-links"}
          // onClick={() => setMobile(false)}
        >
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { color: "white" }
                : { color: "rgba(255, 255, 255, 0.6)" }
            }
            className="nav-link"
          >
            <AiFillHome className="icon" />
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive
                ? { color: "white" }
                : { color: "rgba(255, 255, 255, 0.6)" }
            }
            className="nav-link"
          >
            <SiAboutdotme className="icon" />
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) =>
              isActive
                ? { color: "white" }
                : { color: "rgba(255, 255, 255, 0.6)" }
            }
            className="nav-link"
          >
            <FaUsers className="icon" />
          </NavLink>
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive
                ? { color: "white" }
                : { color: "rgba(255, 255, 255, 0.6)" }
            }
            className="nav-link login-btn"
          >
            <GoSignIn className="icon" />
          </NavLink>
        </div>
        {/* hamburger */}
        {/* <div className="hamburger" onClick={() => setMobile(!mobile)}>
          <span className="hamburger-span-top"></span>
          <span className="hamburger-span-middle"></span>
          <span className="hamburger-span-bottom"></span>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
