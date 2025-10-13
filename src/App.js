import React from 'react';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import TimelineSection from './components/TimelineSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <HeroSection />
      <JourneySection />
      <TimelineSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
