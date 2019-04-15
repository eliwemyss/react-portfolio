import React, { Component } from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';
import Contact from './components/Contact';

class App extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        };
    }

    updateScreenDimensions = () => {
        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
    }

    componentDidMount = () => {
        this.updateScreenDimensions();
        window.addEventListener("resize", this.updateScreenDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateScreenDimensions);
    }

    render() {
        return (
            <main>
                <Header />
                <Hero />
                <Element name="scrollAbout">
                    <About />
                </Element>
                <Element name="scrollProjects">
                    <ProjectContainer />
                </Element>
                <Element name="scrollContact">
                    <Contact />
                </Element>
            </main>
        );
    }
}

export default App;
