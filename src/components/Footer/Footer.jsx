import React from "react";
import './Footer.css';

function Footer() {
    let year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Mervyn Levis {year} </p>
    </div>
  );
}

export default Footer;
