import React from 'react'

const NoteTaker = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.rateYourRoommateImg} alt="rate-your-roommate" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>Rate Your Roommate</h3>
                <p class="py-4">Very similar to the popular ratemyprofessors.com, only we applied the concept to roommates instead. This group project really forced us to work together and sharpen our full-stack development abilities, particularly on the back-end, since we had just recently learned that area of the stack. We used essentially every technology that we've learned up to this point and then some to get the site fully functional.</p>
                <a href="https://aqueous-shelf-03682.herokuapp.com/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/kodypbishop/Project_2" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default NoteTaker;