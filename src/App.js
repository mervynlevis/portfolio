import Homepage from "./components/Homepage";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
