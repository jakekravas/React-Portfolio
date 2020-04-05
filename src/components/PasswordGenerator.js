import React from 'react'

const PasswordGenerator = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.passwordGeneratorImg} alt="password-generator" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>Password Generator</h3>
                <p className="py-4">One of my earlier projects. A mobile responsive password generator that gives the user a randomly generated password based on user-specified criteria.</p>
                <a href="https://jakekravas.github.io/Password-Generator/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/jakekravas/Password-Generator" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default PasswordGenerator;