import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import "./About.css";

const About = () => {
  const [experienceSelect, setExperienceSelect] = useState(true);

  const expBtnHandler = () => {
    console.log("Hello Exp");
    setExperienceSelect(true);
  };
  const eduBtnHandler = () => {
    console.log("Hello Edu");
    setExperienceSelect(false);
  };

  return (
    <div id="about">
      {/* <h1 className="aboutHeading">
        <b>About</b>
      </h1> */}
      <div className="aboutSelect">
        <button onClick={expBtnHandler} className="aboutSelectBtn">
          <h2>Experience</h2>
        </button>
        <button onClick={eduBtnHandler} className="aboutSelectBtn">
          <h2>Education</h2>
        </button>
      </div>
      <div className="aboutSection">
        {experienceSelect && <Experience />}
        {!experienceSelect && <Education />}
      </div>
    </div>
  );
};

export default About;
