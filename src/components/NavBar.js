import React from 'react';
import styles from './styles/NavBar.css';
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <header className={styles.pageHeader}>
            <nav className={styles.flex}>
                <Link to="scrollAbout" smooth={true} duration={500} offset={-25} tabIndex={0}>
                    <span className={styles.navLink}>ABOUT</span>
                </Link>
                <Link to="scrollProjects" smooth={true} duration={500} offset={-25} tabIndex={0}>
                    <span className={styles.navLink}>PROJECTS</span>
                </Link>
                <Link to="scrollContact" smooth={true} duration={500} tabIndex={0}>
                    <span className={styles.navLink}>CONTACT</span>
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;