import React from 'react'
import ContactPhone from "./ContactPhone";
import ContactEmail from "./ContactEmail";
import ContactLinkedin from "./ContactLinkedin";
import ContactGithub from "./ContactGithub";

const ContactSection = () => {
    return (
        <section id="contact-section" className="pb-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <div className="display-4 mt-5 text-white">Contact Me</div>
                    </div>
                </div>
                <div className="row text-white">
                    <ContactPhone/>
                    <ContactEmail/>
                    <ContactLinkedin/>
                    <ContactGithub/>
                </div> 
            </div>
        </section>
    )
}

export default ContactSection;