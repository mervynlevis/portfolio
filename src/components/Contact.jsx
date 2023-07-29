import React from "react";
import { SocialIcon } from 'react-social-icons';

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <SocialIcon className="social-icon" url="https://github.com/mervynlevis" />
      <SocialIcon className="social-icon" url="https://www.linkedin.com/in/mervyn-levis/" />
      
      <p>mervynlevis at gmail dot com</p>
    </div>
  );
}

export default Contact;
