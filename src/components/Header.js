import React from 'react';
import './styles/Header.css';
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header className="pageHeader">
            <nav className="flex">
                <Link to="scrollAbout" smooth={true} duration={500} offset={-25} tabIndex={0}>
                    <span className="navLink">ABOUT</span>
                </Link>
                <Link to="scrollProjects" smooth={true} duration={500} offset={-25} tabIndex={0}>
                    <span className="navLink">PROJECTS</span>
                </Link>
                     <Link to="" smooth={true} duration={500} tabIndex={0}>
                    <span className="navLink">BLOG</span>
                </Link>
                <Link to="scrollContact" smooth={true} duration={500} tabIndex={0}>
                    <span className="navLink">CONTACT</span>
                </Link>
             
            </nav>
        </header>
    );
}

export default Header;