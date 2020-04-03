import React from 'react'
import PasswordGenerator from "./PasswordGenerator";
import WeatherForecastApp from "./WeatherForecastApp";
import DoubleMeaningDictionary from "./DoubleMeaningDictionary";
import BurgerLogger from "./BurgerLogger";
import NoteTaker from "./NoteTaker";
import RateYourRoommate from "./RateYourRoommate";

const ProjectsSection = (props) => {
    return (
        <section id="projects-section">
            <div className="container text-white">
                <div className="row">
                    <div className="col text-center text-white my-5">
                        <h1 className="display-4">My Projects</h1>
                    </div>
                </div>
                <PasswordGenerator passwordGeneratorImg={props.passwordGeneratorImg}/>
                <WeatherForecastApp weatherImg={props.weatherImg}/>
                <DoubleMeaningDictionary doubleMeaningDictionaryImg={props.doubleMeaningDictionaryImg}/>
                <BurgerLogger burgerLoggerImg={props.burgerLoggerImg}/>
                <NoteTaker noteTakerImg={props.noteTakerImg}/>
                <RateYourRoommate rateYourRoommateImg={props.rateYourRoommateImg}/>
            </div>
        </section>
    )
}

export default ProjectsSection;