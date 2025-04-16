import React from "react";
import { image } from "../data/data.js";

function About() {
  return ( 
  <div id="about">
    <h2>About Me</h2>
      <p>
        I’m a passionate web developer who loves building sleek, responsive, and
        user-friendly websites.
      </p>
      <img src={image} alt="I made this" />

  </div>

  );
}

export default About;
