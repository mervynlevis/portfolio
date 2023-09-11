import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Links.css";

function Contact() {
  return (
    <div id="contact">
      {/* <h2>Links</h2> */}
      <div className="contactGridContainer">
        <div className="linkedInSection">
          {/* <h3>LinkedIn</h3> */}
          {/* <SocialIcon
            className="social-icon"
            url="https://github.com/mervynlevis"
          /> */}
        </div>
        <div className="gitHubSection">
          {/* <h3>Github</h3> */}
          {/* <SocialIcon
            className="social-icon"
            url="https://www.linkedin.com/in/mervyn-levis/"
          /> */}
        </div>
      </div>

      {/* <p>mervynlevis at gmail dot com</p> */}
    </div>
  );
}

export default Contact;
