import React from "react";
import { NavBar } from "../pages";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <NavBar />
      <div className="inner-container">
        <h3>About Us</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          velit aut mollitia eligendi at ipsam quasi ea repellendus quam vitae
          in nulla, perspiciatis consequuntur delectus nam! Consectetur suscipit
          quae earum.
        </p>
      </div>
    </div>
  );
};

export default About;
