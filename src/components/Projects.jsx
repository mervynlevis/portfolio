import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import gamegroups from "../images/gamegroups.png";
import records from "../images/mervs-records.png";
import weather from "../images/weather.png";
import facefinder from "../images/facefinder.png";
import catcommando from "../images/cat-commando.png";
import notekeeper from "../images/notekeeper.png";
import quotes from "../images/quotes.png";

function Projects() {
  //eslint-disable-next-line
  const [viewMore, setViewMore] = useState(false);
  const [projectBtnValue, setProjectButtonValue] = useState("More");
  const [projectsDisplayed, setProjectsDisplayed] = useState(3);

  const projData = [
    {
      image: gamegroups,
      title: "Game Groups",
      text: "Full Stack Web app. Video Game/Board Game group app, registered users can create, join, leave, like groups. Features google sign in, user authentication and conditional rendering. User can edit or delete their own groups, and can also delete their accounts. Frontend hosted on netlify, backend hosted on heroku.",
      stack: "React, Node, Express, MongoDB, Material UI",
      link: "https://gamegroups.netlify.app/",
      repo: "https://github.com/mervynlevis/gamegroups",
    },
    {
      image: facefinder,
      title: "Face Finder",
      text: "Full Stack web application with user authentication, sign in, register functionality. Users enter an image url and the app finds any faces in the image using the Clarifai facial recognition API. User entries logged and displayed for the user on signin to the app. Hosted on Heroku.",
      stack: "React, Node, Express, PostgreSQL",
      link: "https://mlfacefinder.herokuapp.com/",
      repo: "https://github.com/mervynlevis/facerecognition-backend",
    },
    {
      image: weather,
      title: "Weather Pal",
      text: "React Weather App. Uses the openweather api. The app fetches the users location and renders their weather info. Returns the weather to compare with user location with details upon a user search.",
      stack: "React, Node",
      link: "https://mervynlevis.github.io/weather/",
      repo: "https://github.com/mervynlevis/weather",
    },
    {
      image: records,
      title: "Mervs Records",
      text: "Full Stack Record store and review site. Features user login, register, authentication and sessions. Hosted on Heroku. Has admin features for updating the database and managing the users and stock information. Student project.",
      stack: "Python, Flask, SQLite, Jinja2, Bootstrap",
      link: "https://still-springs-48646.herokuapp.com/",
      repo: "https://github.com/mervynlevis/MervsRecords",
    },
    {
      image: quotes,
      title: "Quotes",
      text: "React App using Kanye Rest API, bootstrap and material UI. Generates random Kanye West Quote when API called. React app. Fetches api using axios, and displays Ron Swanson quote for the user. Hosted on github pages. React, Material UI icons.",
      stack: "React, Node, React-bootstrap",
      link: "https://mlquotes.herokuapp.com/",
      repo: "https://github.com/mervynlevis/quotes/tree/main",
    },
    {
      image: notekeeper,
      title: "Note Keeper",
      text: "Google keep clone built with React.js. Front end application, add and delete notes features.",
      stack: "React, Node",
      link: "https://mervynlevis.github.io/notekeeper/",
      repo: "https://github.com/mervynlevis/notekeeper",
    },
    {
      image: catcommando,
      title: "Cat Commando",
      text: "Vanilla Javascript top down shooter game. Three levels of increasing difficulty with scoring and lives/HP system.",
      stack: "Javascript, HTML, CSS, Bootstrap",
      link: "https://mervynlevis.github.io/cat-commando/",
      repo: "https://github.com/mervynlevis/cat-commando"
    },
  ];

  const projectRedirect = () => {};

  const renderProj = (project, index) => {
    return (
      <div className="projectContainer" onClick={projectRedirect} key={index}>
        <div className="projectLeftText">
          <h2>{project.title}</h2>
          <p>{project.text}</p>
          <p>{project.stack}</p>
          <Button className="projectBtn" href={project.link} variant="light">
            Live
          </Button>
          <Button className="projectBtn" href={project.repo} variant="light">
            GitHub
          </Button>
        </div>
        <div className="projectLeftImg">
          <img className="projectImg" src={project.image} alt="proj" />
        </div>
      </div>
    );
  };

  const viewMoreOrLess = () => {
    if (projectBtnValue === "More") {
      setViewMore(true);
      setProjectButtonValue("Less");
      setProjectsDisplayed(projData.length);
    } else {
      setViewMore(false);
      setProjectButtonValue("More");
      setProjectsDisplayed(3);
    }
  };

  return (
    <div id="projects">
      <h2 className="projectsHeading">
        <b>Projects</b>
      </h2>
      <div className="proj">
        {projData.slice(0, projectsDisplayed).map(renderProj)}
      </div>
      <Button className="projectBtn" variant="light" onClick={viewMoreOrLess}>
        {projectBtnValue} Projects
      </Button>
    </div>
  );
}

export default Projects;
