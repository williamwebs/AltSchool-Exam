import React from "react";
import { NavBar } from "../pages";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import profile from "../assets/profile__img.png";
import profile2 from "../assets/image.jpg";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <NavBar />
        <div className="inner-container">
          <div className="hero">
            <div className="content">
              <h3>Hello!</h3>
              <p>
                Looking for a random user? I've got a hundred users you can
                check through
              </p>
              <NavLink to="/users" className="btn">
                Check Users
              </NavLink>
            </div>
            <div className="image">
              <div className="circle-container">
                <div className="outer-circle"></div>
                <div className="inner-circle"></div>
                <img
                  src={profile}
                  alt="image"
                  className="profile-img profile-1"
                />
                <img
                  src={profile6}
                  alt="image"
                  className="profile-img profile-2"
                />
                <img
                  src={profile4}
                  alt="image"
                  className="profile-img profile-3"
                />
                <img
                  src={profile5}
                  alt="image"
                  className="profile-img profile-4"
                />
                <img
                  src={profile3}
                  alt="image"
                  className="profile-img profile-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
