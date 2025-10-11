import React from 'react';
import './styles/Banner.css';
import { Link } from 'react-scroll';
import Reveal from 'react-reveal/Reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="banner">
            <div className="wrapper">
                    <h1 className="mainHeading">Eli Wemyss</h1>

                <Reveal effect="growSeparator">
                    <div className="separator"></div>
                </Reveal>
                    <h2 className="subHeading">FULL STACK WEB DEVELOPER</h2>
                    <div className="ctaRow">
                        <a className="ctaBtn" href="#projects">See Projects</a>
                        <a className="ctaGhost" href="#contact">Get in Touch</a>
                    </div>
            </div>
            <div className="downBtn">
                <Link to="scrollAbout" smooth={true} duration={500} offset={-25} tabIndex={0}>
                    <FontAwesomeIcon icon={faChevronDown} className="downBtnIcon" title={`Scroll to "About Section"`} />
                </Link>
            </div>
        </div>
    );
}

export default Banner;