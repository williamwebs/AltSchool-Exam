import React from "react";
import { NavBar } from "../pages";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import profile from "../assets/profile__img.png";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="inner-container">
        <div className="hero">
          <div className="content">
            <h3>Hello!</h3>
            <p>
              Looking for a random user? I've got a hundred users you can check
              through
            </p>
            <NavLink to="/users" className="btn">
              Check Users
            </NavLink>
          </div>
          <div className="image">
            <div className="circle-container">
              <div className="outer-circle"></div>
              <div className="inner-circle"></div>
              <img src={profile} alt="image"  className="profile-img profile-1"/>
              <img src={profile} alt="image"  className="profile-img profile-2"/>
              <img src={profile} alt="image"  className="profile-img profile-3"/>
              <img src={profile} alt="image"  className="profile-img profile-4"/>
              <img src={profile} alt="image"  className="profile-img profile-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
