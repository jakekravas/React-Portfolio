import React from 'react'

const WeatherForecastApp = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.weatherImg} alt="weather-app" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>Weather Forecast App</h3>
                <p className="py-4">This project forced me to fully immerse myself me into the world of APIs. This app allows the user to search for any city they'd like and gives them both the current weather conditions as well as the five day forecast.</p>
                <a href="https://jakekravas.github.io/Weather-Forecast-Web-Application/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/jakekravas/Weather-Forecast-Web-Application" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default WeatherForecastApp;