import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Links from "./components/Links/Links";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [chosenContent, setChosenContent] = useState("Home");

  const contentChoiceHandler = (selection) => {
    console.log("Hello From App.js");
    console.log(selection);
    setChosenContent(selection);
  };

  return (
    <div className="App">
      <Nav navHandler={contentChoiceHandler} />
      {chosenContent === "Home" && <Home aboutButtonHandler={contentChoiceHandler}/>}

      {(chosenContent === "About" || chosenContent === 'AboutBtn' || chosenContent === 'AboutBtnText') && <About />}
      {chosenContent === "Skills" && <Skills />}
      {chosenContent === "Projects" && <Projects />}
      {/* {chosenContent === "Contact" && <Links />} */}

      <Footer />
    </div>
  );
}

export default App;
