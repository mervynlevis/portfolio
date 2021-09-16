import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import records from "../images/mervs-records.png";
import kanyequotes from "../images/kanye-quotes.png";
import catcommando from "../images/cat-commando.png";
import weatherpal from "../images/weatherpal.png";
import notekeeper from "../images/notekeeper.png";
import meditation from "../images/meditation.png";
import swanson from "../images/swanson.png";
import facefinder from "../images/facefinder.png";

function Projects() {
  const cardData = [
    {
      image: facefinder,
      title: "Face Finder",
      text: "Full Stack web application with user authentication, sign in, register functionality. Users enter an image url and the app finds any faces in the image using the Clarifai API. User entries logged and displayed for the user on signin to the app. Built using React, Node, Express, PostgreSQL. Hosted on Heroku.",
      link: "https://mlfacefinder.herokuapp.com/",
      repo: "https://github.com/mervynlevis/facerecognition-backend",
    },
    {
      image: records,
      title: "Mervs Records",
      text: "Record store and review site. Flask, Python, SQLite, Jinja2. Features user login, register, authentication and sessions. Hosted on Heroku.",
      link: "https://still-springs-48646.herokuapp.com/",
      repo: "https://github.com/mervynlevis/MervsRecords",
    },
    {
      image: kanyequotes,
      title: "Kanye Quotes",
      text: "React App using Kanye Rest API, bootstrap and material UI. Generates random Kanye West Quote when API called.",
      link: "https://mervynlevis.github.io/kanye-quotes/",
      repo: "https://github.com/mervynlevis/kanye-quotes",
    },
    {
      image: notekeeper,
      title: "Note Keeper",
      text: "Google keep clone built with React.js. Front end application, add and delete notes features.",
      link: "https://mervynlevis.github.io/notekeeper/",
    },
    {
      image: weatherpal,
      title: "Weather Pal",
      text: "React Weather App. Uses the openweather api, gets users location, renders weather info. Returns the weather to compare with user location with details upon a user search.",
      link: "https://mervynlevis.github.io/weather/",
    },
    {
      image: meditation,
      title: "Meditation",
      text: "Meditation app built with React.js. Uses vanilla CSS animation for breathing exercise. Hosted on github pages.",
      link: "https://mervynlevis.github.io/meditation/",
    },
    {
      image: swanson,
      title: "Swanson Quotes",
      text: "React app. Fetches api using axios, and displays Ron Swanson quote for the user. Hosted on github pages. React, Material UI icons.",
      link: "https://mervynlevis.github.io/swanson-quotes/",
    },
    {
      image: catcommando,
      title: "Cat Commando",
      text: "Vanilla Javascript top down shooter game. Three levels of increasing difficulty with scoring and lives/HP system.",
      link: "https://mervynlevis.github.io/cat-commando/",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card className="card" key={index}>
        <Card.Img className="card-img" variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <div className="projectBtnGroup">
            <Button className="projectBtn" href={card.link} variant="light">
              Live
            </Button>
            <Button className="projectBtn" href={card.repo} variant="light">
              Code
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div id="projects">
      <h2 className="projectsHeading">
        <b>Projects</b>
      </h2>
      <div className="card-grid">{cardData.map(renderCard)}</div>
    </div>
  );
}

export default Projects;
