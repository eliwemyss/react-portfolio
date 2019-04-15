import React, { Component } from 'react';
import ContactLink from './ContactLink';
import { animateScroll as scroll } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './styles/Contact.css';
import data from '../info/contactInfo';

class Contact extends Component {

    scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    }

    render() {
        return (
            <section id="contact" className="contactSection">
                <h2>CONTACT</h2>
                <div className="contactList">
                        <ContactLink linkTarget={`mailto:${data.email}`} icon={faEnvelope} label="Email" />
                        <ContactLink linkTarget={data.linkedInLink} icon={faLinkedin} label="LinkedIn" />
                        <ContactLink linkTarget={data.gitHubLink} icon={faGithubSquare} label="GitHub" />
                </div>
                <button onClick={this.scrollToTop} className="topButton">
                    <FontAwesomeIcon icon={faChevronUp} className="icon" />
                    TOP
                </button>

            </section>
        );
    }
}

export default Contact;