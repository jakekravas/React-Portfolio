import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './reset.css';
import './bootstrap.min.css';
import './style.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import passwordGeneratorImg from "./images/Password-Generator.png";
import weatherImg from "./images/Weather-Web_app-a1.png";
import doubleMeaningDictionaryImg from "./images/DoubleMeaningDictionary.png";
import burgerLoggerImg from "./images/burger-logger.png";
import noteTakerImg from "./images/note-taker.png";
import rateYourRoommateImg from "./images/rateyourroommate.png";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <About/>
        <ProjectsSection
            passwordGeneratorImg={passwordGeneratorImg}
            weatherImg={weatherImg}
            doubleMeaningDictionaryImg={doubleMeaningDictionaryImg}
            burgerLoggerImg={burgerLoggerImg}
            noteTakerImg={noteTakerImg}
            rateYourRoommateImg={rateYourRoommateImg}
        />
        <ContactSection/>
    </div>       
  );
}

export default App;