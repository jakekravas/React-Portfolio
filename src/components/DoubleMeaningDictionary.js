import React from 'react'

const WeatherForecastApp = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.doubleMeaningDictionaryImg} alt="double-meaning-dictionary" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>DoubleMeaning Dictionary</h3>
                <p className="py-4">A fun little web application that will display two different definitions of a user-searched word, one from Meriam-Webster Dictionary and one from Urban Dictionary. Also has a section that displays a daily space fact from NASA.</p>
                <a href="https://andrewbergheim.github.io/dictionaryproject/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/AndrewBergheim/Project-1/tree/master2" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default WeatherForecastApp;