import React from 'react'

const NoteTaker = (props) => {
    return (
        <div className="row py-5">
            <div className="col-md-6">
                <img src={props.noteTakerImg} alt="note-taker" className="img-fluid"/>
            </div>
            <div className="col-md-6">
                <h3>Note Taker</h3>
                <p class="py-4">Allows the user to create, read, edit, and delete notes through a webpage. Any changes they make are reflected in a MySQL database.</p>
                <a href="https://jakekravas.github.io/Note-Taker/" target="_blank" className="btn btn-link mb-3">Deployed Web Application</a>
                <br/>
                <a href="https://github.com/jakekravas/Note-Taker" target="_blank" className="btn btn-link">GitHub Repository Link</a>
            </div>
        </div>
    )
}

export default NoteTaker;