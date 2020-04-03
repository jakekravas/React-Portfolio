import React from 'react';
import './reset.css';
import './bootstrap.min.css';
import './style.css';
import passwordGeneratorImg from "./images/Password-Generator.png";
import weatherImg from "./images/Weather-Web_app-a1.png";
import doubleMeaningDictionaryImg from "./images/DoubleMeaningDictionary.png";
import burgerLoggerImg from "./images/burger-logger.png";
import noteTakerImg from "./images/note-taker_.png";
import rateYourRoommateImg from "./images/rateyourroommate.png";

function App() {
  return (
    <div>
        <nav id="nav-main" className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <div className="container">
                <a href="#about-section" className="navbar-brand ss">Jake Kravas</a>
                <button className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false"><span className="navbar-toggler-icon"></span></button>
                <div className="navbar-collapse collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#about-section" className="nav-link ss active">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects-section" className="nav-link ss">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact-section" className="nav-link ss">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/jake-kravas-80b02719b/" target="_blank" className="nav-link"><i className="fab fa-linkedin-in sm-link"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/jakekravas" target="_blank" className="nav-link"><i className="fab fa-github sm-link"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <section id="about-section">
            <div className="dark-overlay">
                <div className="about-inner container">
                    <div className="row">
                        <div className="col text-white">
                            <h1 className="display-4">Aspiring <strong>Full-Stack</strong> Web Developer</h1>
                            <div className="p4 my-4">Currently studying full-stack web development at The University of Arizona Boot Camp. Specializing in HTML, CSS, JavaScript, Node.js, Express as well as well learning some more of the most modern and in-demand back-end web technologies available.</div>
                            <a href="./pdf/Jake-Resume.pdf" target="_blank" className="btn btn-primary btn-lg mr-2 ss">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* PROJECTS */}
        <section id="projects-section">
            <div className="container text-white">
                <div className="row">
                    <div className="col text-center text-white my-5">
                        <h1 className="display-4">My Projects</h1>
                    </div>
                </div>

                {/* PASSWORD GENERATOR */}
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={passwordGeneratorImg} alt="password-generator" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                    <h3>Password Generator</h3>
                    <p className="py-4">One of my earlier projects. A mobile responsive password generator that gives the user a randomly generated password based on user-specified criteria.</p>
                    <a href="https://jakekravas.github.io/Password-Generator/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                    <br/>
                    <a href="https://github.com/jakekravas/Password-Generator" target="_blank" className="btn btn-link">GitHub Repository Link</a>
                    </div>
                </div>

                {/* WEATHER FORECAST APP */}
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={weatherImg} alt="weather-app" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                    <h3>Weather Forecast App</h3>
                    <p className="py-4">This project forced me to fully immerse myself me into the world of APIs. This app allows the user to search for any city they'd like and gives them both the current weather conditions as well as the five day forecast.</p>
                    <a href="https://jakekravas.github.io/Weather-Forecast-Web-Application/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                    <br/>
                    <a href="https://github.com/jakekravas/Weather-Forecast-Web-Application" target="_blank" className="btn btn-link">GitHub Repository Link</a>
                    </div>
                </div>

                {/* DOUBLEMEANING DICTIONARY */}
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={doubleMeaningDictionaryImg} alt="double-meaning-dictionary" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h3>DoubleMeaning Dictionary</h3>
                        <p className="py-4">A fun little web application that will display two different definitions of a user-searched word, one from Meriam-Webster Dictionary and one from Urban Dictionary. Also has a section that displays a daily space fact from NASA.</p>
                        <a href="https://andrewbergheim.github.io/dictionaryproject/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                        <br/>
                        <a href="https://github.com/AndrewBergheim/Project-1/tree/master2" target="_blank" className="btn btn-link">GitHub Repository Link</a>
                    </div>
                </div>

                {/* BURGER LOGGER */}
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={burgerLoggerImg} alt="burger-logger" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h3>Burger Logger</h3>
                        <p className="py-4">Allows the user to add burgers to the screen, and then "devour" then after they've been added. This is the first full stack web application that I've made on my own.</p>
                        <a href="https://secure-reaches-77043.herokuapp.com/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                        <br/>
                        <a href="https://github.com/jakekravas/burger-logger" target="_blank" className="btn btn-link">GitHub Repository Link</a>
                    </div>
                </div>

                {/* DOUBLEMEANING DICTIONARY */}
                <div className="row py-5">
                    <div className="col-md-6">
                        <img src={doubleMeaningDictionaryImg} alt="double-meaning-dictionary" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h3>DoubleMeaning Dictionary</h3>
                        <p className="py-4">A fun little web application that will display two different definitions of a user-searched word, one from Meriam-Webster Dictionary and one from Urban Dictionary. Also has a section that displays a daily space fact from NASA.</p>
                        <a href="https://andrewbergheim.github.io/dictionaryproject/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                        <br/>
                        <a href="https://github.com/AndrewBergheim/Project-1/tree/master2" target="_blank" className="btn btn-link">GitHub Repository Link</a>
                    </div>
                </div>
            </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact-section" className="pb-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="display-4 mt-5 text-white">Contact Me</div>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col-sm-3 mt-5">
                        <i className="fas fa-phone contact-icon"></i>
                        <h4 className="pt-2">Phone Number</h4>
                        <p>(630) 621-6609</p>
                    </div>
                    <div className="col-sm-3 mt-5">
                        <i className="fas fa-envelope contact-icon"></i>
                        <h4 className="pt-2">Email Address</h4>
                        <p>jakekravas7@gmail.com</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  );
}

export default App;