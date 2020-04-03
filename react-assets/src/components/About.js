import React from 'react'

const About = () => {
    return (
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
    )
}

export default About;