import React from "react";

import { SocialIcon } from "react-social-icons";
import "./Home.css";

function Home(props) {
  const aboutButtonHandler = (event) => {
    // pass value of selection up to App.js to show selected content
    props.aboutButtonHandler(event.target.id);
  };

  return (
    <div className="homepage">
      <h1 className="homeText1">
        <b>Mervyn Levis</b>
      </h1>
      <h2 className="homeText2">Developer.</h2>
      <button className="myWorkBtn" id="AboutBtn" onClick={aboutButtonHandler}>
        <p className="myWorkBtnLink" id="AboutBtnText">
          About
        </p>
      </button>
      <div className="homePageIconContainer">
        <div className="homePageIcon">
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/in/mervyn-levis/"
          />
        </div>
        <div className="homePageIcon">
          <SocialIcon network="github" url="https://github.com/mervynlevis" />
        </div>
      </div>
    </div>
  );
}

export default Home;
