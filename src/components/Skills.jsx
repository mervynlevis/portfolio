import React from "react";
import Card from "react-bootstrap/Card";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import StorageIcon from '@material-ui/icons/Storage';
import CodeIcon from '@material-ui/icons/Code';
import QueueIcon from '@material-ui/icons/Queue';
import Icon from '@material-ui/core/Icon';

function Skills() {
  const skillCardData = [
    {
      image: <CodeIcon/>,
      title: "Frontend",
      text: "HTML, CSS, Bootstrap",
      text2: "React, Javascript ES6",
      text3:  "JQuery",
      link: "https://still-springs-48646.herokuapp.com/",
    },
    {
      image: <StorageIcon/>,
      title: "Backend",
      text: "Python, Node.js, Express",
      text2: "SQLite, MongoDB, PostgreSQL",
      text3: "Flask, Jinja2",
      link: "https://mervynlevis.github.io/kanye-quotes/",
    },
    {
      image: <QueueIcon/>,
      title: "Other",
      text: "RESTful APIs, Git",
      text2: "GIMP, Inkscape",
      text3: "Audacity",
      link: "https://mervynlevis.github.io/kanye-quotes/",
    },
  ];

  const renderSkillCard = (card, index) => {
    return (
      <Card className="skill-card" key={index}>
        <Card.Body>
          <Icon className="skill-logo">{card.image}</Icon>
          <Card.Title className="skill-logo-title">{card.title}</Card.Title>
          <div className="skillList">
          <Card.Text>{card.text}</Card.Text>
          <Card.Text>{card.text2}</Card.Text>
          <Card.Text>{card.text3}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div id="skills">
    <h2 className="sectionHeading"><b>Skills</b></h2>
      <div className="card-grid">{skillCardData.map(renderSkillCard)}</div>
    </div>
  );
}

export default Skills;
