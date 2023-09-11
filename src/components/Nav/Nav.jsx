import React from "react";
import "./Nav.css";

function Nav(props) {
  const navSelection = (event) => {
    // pass value of selection up to App.js to show selected content

    props.navHandler(event.target.id);
  };

  return (
    <div className="menu">
      {/* <div className="label">
        <b>...</b>
      </div> */}
      <div className="spacer"></div>
      <div id="Home" className="item topNavLink" onClick={navSelection}>
        Home
      </div>
      <div id="About" className="item topNavLink" onClick={navSelection}>
        About
      </div>
      <div id="Skills" className="item topNavLink" onClick={navSelection}>
        Skills
      </div>
      <div id="Projects" className="item topNavLink" onClick={navSelection}>
        Projects
      </div>
    </div>
  );
}

export default Nav;
