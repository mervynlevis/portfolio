import React from "react";

function Nav() {


  return (
    <div className="menu">
      <div className="label"><b>+</b></div>
      <div className="spacer"></div>
      <div className="item">
        <a href='#experience' className='topNavLink'>About</a>
      </div>
      <div className="item">
        <a href="#skills" className='topNavLink'>Skills</a>
      </div>
      {/* <div className="item">
        <a href='#education' className='topNavLink'>Education</a>
      </div> */}
      <div className="item">
        <a href='#projects' className='topNavLink'>Projects</a>
      </div>
      <div className="item">
        <a href='#contact' className='topNavLink'>Contact</a>
      </div>
    </div>
  );
}

export default Nav;
