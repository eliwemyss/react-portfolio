import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import WaitYouDidWhat from './components/WaitYouDidWhat';
import TheJourney from './components/TheJourney';
import WhatIActuallyDo from './components/WhatIActuallyDo';
import SkillsSection from './components/SkillsSection';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <WaitYouDidWhat />
      <TheJourney />
      <WhatIActuallyDo />
      <SkillsSection />
      <Contact />
    </div>
  );
}

export default App;
