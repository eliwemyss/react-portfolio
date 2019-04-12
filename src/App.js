import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectContainer from './components/ProjectContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <About />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
