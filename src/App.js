/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import CoursesAndCertifications from './components/CoursesAndCertifications';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import ContactInfo from './components/ContactInfo';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header id="header" />
      <Summary id="summary" />
      <Education id="education" />
      <Skills id="skills" />
      <CoursesAndCertifications id="courses" />
      <Projects id="projects" />
      <Hobbies id="hobbies" />
      <ContactInfo id="contact-info" />
    </div>
  );
};

export default App;







