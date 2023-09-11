import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Icon from "@mui/icons-material/Icon";
import "./Skills.css";

function Skills() {
  const skillCardData = [
    {
      image: <CodeIcon />,
      title: "Frontend",
      text: "React, Javascript ES6",
      text2: "HTML, CSS, Unqork",
      text3: "Material UI, Bootstrap",
    },
    {
      image: <StorageIcon />,
      title: "Backend",
      text: "Python, Node.js,",
      text2: "Express",
      text3: "Flask, Jinja2",
    },
    {
      image: <MoreHorizIcon />,
      title: "Tools / Other",
      text: "Git, REST APIs",
      text2: "SQLite, MongoDB",
      text3: "Jira, Confluence, Figma",
    },
  ];

  const renderSkillCard = (card, index) => {
    return (
      <div className="skill-card" key={index}>
        <div>
          <svg className="skill-logo" fontSize="large">
            {card.image}
          </svg>
          <h3 className="skill-logo-title">{card.title}</h3>
          <div className="skillList">
            <p>{card.text}</p>
            <p>{card.text2}</p>
            <p>{card.text3}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills">
      {/* <h2 className="sectionHeading">
        <b>Skills</b>
      </h2> */}
      <div className="card-grid">{skillCardData.map(renderSkillCard)}</div>
    </div>
  );
}

export default Skills;
