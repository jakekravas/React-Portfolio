import React from 'react'

const Navbar = () => {
    return (
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
    )
}

export default Navbar;