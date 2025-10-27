import React, { useState, useEffect } from 'react';
import { Mountain, Plane, Code, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background mountains */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute bottom-0 left-0 right-0 h-96"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            background: 'linear-gradient(to top, #1e293b 0%, transparent 100%)'
          }}
        />
        <Mountain
          size={800}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-700"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <Mountain className="text-emerald-400" size={48} />
          <Plane className="text-sky-400" size={48} />
          <Code className="text-purple-400" size={48} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          Eli Wemyss
        </h1>

        <p className="text-2xl md:text-3xl mb-4 text-slate-300">
          Five years debugging APIs. One year debugging my life on a mountain trail.
        </p>

        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Technical Support Engineer who spent 5 years solving impossible problems,
          then hiked 2,190 miles and got a pilot's license just to prove I finish what I start.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-colors">
            Let's Talk
          </a>
          <a href="#journey" className="px-8 py-3 border-2 border-slate-600 hover:border-emerald-400 rounded-lg font-semibold transition-colors">
            The Story
          </a>
        </div>

        <ChevronDown className="animate-bounce mx-auto text-slate-500" size={32} />
      </div>
    </div>
  );
};

export default HeroSection;
