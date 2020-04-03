import React from 'react'

const BurgerLogger = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.burgerLoggerImg} alt="burger-logger" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>Burger Logger</h3>
                <p className="py-4">Allows the user to add burgers to the screen, and then "devour" then after they've been added. This is the first full stack web application that I've made on my own.</p>
                <a href="https://secure-reaches-77043.herokuapp.com/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/jakekravas/burger-logger" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default BurgerLogger;