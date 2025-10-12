import React, { useState, useEffect } from 'react';
import { Mountain, Plane, Code, Zap, MessageSquare, Mail, Linkedin, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Node.js', level: 80, color: '#68a063' },
    { name: 'MongoDB', level: 85, color: '#4db33d' },
    { name: 'Python', level: 75, color: '#3776ab' },
    { name: 'Git', level: 90, color: '#f05032' },
    { name: 'APIs', level: 95, color: '#ff6b6b' },
    { name: 'Troubleshooting', level: 98, color: '#4ecdc4' },
  ];

  const timeline = [
    { year: '2016-2019', title: 'Yakima Products', desc: 'Inside Sales', icon: '🚗' },
    { year: '2019-2020', title: 'Campaign Monitor', desc: 'Technical Support', icon: '📧' },
    { year: '2020-2021', title: 'Sailthru', desc: 'Support Engineer', icon: '⛵' },
    { year: '2021-2023', title: 'ChartHop', desc: 'Senior Support Engineer', icon: '🚀' },
    { year: '2024', title: 'Got My Wings', desc: 'Private Pilot License', icon: '✈️' },
    { year: '2025', title: 'Walked to Maine', desc: '2,190 miles on the AT', icon: '🥾' },
    { year: 'Now', title: "Let's Do This", desc: 'Ready for the next challenge', icon: '💪' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero Section */}
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
            Seven years debugging APIs. One year debugging my life on a mountain trail.
          </p>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Technical Support Engineer who spent 7 years solving impossible problems,
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

      {/* The Plot Twist Section */}
      <section id="journey" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">
            "Wait, you did <span className="text-emerald-400">what?</span>"
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Yeah, about that gap on my resume...
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-xl border-2 border-emerald-500/20 hover:border-emerald-500/50 transition-all">
              <Mountain className="text-emerald-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Thru-Hiked the AT</h3>
              <p className="text-slate-300 mb-4">
                2,190 miles from Georgia to Maine. Five months of daily problem-solving,
                resource management, and adapting to whatever nature threw at me.
              </p>
              <p className="text-sm text-slate-400">
                Turns out debugging production issues and figuring out how to cross a
                flooded river at 2am use the same mental muscles.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border-2 border-sky-500/20 hover:border-sky-500/50 transition-all">
              <Plane className="text-sky-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Earned My Wings</h3>
              <p className="text-slate-300 mb-4">
                FAA Private Pilot Certificate + working on Instrument Rating.
                Mastered complex systems, federal regulations, and making critical
                decisions when there's no undo button.
              </p>
              <p className="text-sm text-slate-400">
                Aviation and software engineering aren't that different: follow the
                checklists, know your systems, and don't panic when things get weird.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-sky-500/10 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4">Why This Actually Matters</h3>
            <p className="text-lg text-slate-300 mb-4">
              I didn't take two years off because I couldn't get a job. I took them because
              I had unfinished business with myself. Now I'm back, and I'm bringing:
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <Zap className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Proof I can commit to hard things and see them through to the end</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Enhanced problem-solving from 5 months of daily survival challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>Systems thinking from learning to fly aircraft safely</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="text-emerald-400 flex-shrink-0 mt-1" size={20} />
                <span>7 years of technical support experience that didn't evaporate</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">The Journey</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-sky-500 to-purple-500" />

            {timeline.map((item, idx) => (
              <div key={idx} className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-emerald-400 font-semibold mb-1">{item.year}</div>
                    <div className="text-xl font-bold mb-1">{item.title}</div>
                    <div className="text-slate-400">{item.desc}</div>
                  </div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900 z-10" />
                </div>

                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">What I Actually Do</h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            (Besides hiking and flying, obviously)
          </p>

          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-slate-400">
                    {activeSkill === skill.name ? `${skill.level}%` : ''}
                  </span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: activeSkill === skill.name ? `${skill.level}%` : '0%',
                      backgroundColor: skill.color,
                      boxShadow: activeSkill === skill.name ? `0 0 20px ${skill.color}50` : 'none'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">The Stuff That Actually Matters</h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <MessageSquare className="text-emerald-400 mb-2" size={32} />
                <h4 className="font-semibold mb-2">Translating Technical → Human</h4>
                <p className="text-sm text-slate-400">
                  Making engineers sound less like robots and customers feel heard
                </p>
              </div>
              <div>
                <Zap className="text-sky-400 mb-2" size={32} />
                <h4 className="font-semibold mb-2">Staying Calm When It's On Fire</h4>
                <p className="text-sm text-slate-400">
                  Production down? Customer screaming? I'm your guy.
                </p>
              </div>
              <div>
                <Code className="text-purple-400 mb-2" size={32} />
                <h4 className="font-semibold mb-2">Actually Understanding the Code</h4>
                <p className="text-sm text-slate-400">
                  Not just reading error messages - actually knowing what broke and why
                </p>
              </div>
              <div>
                <Mountain className="text-emerald-400 mb-2" size={32} />
                <h4 className="font-semibold mb-2">Finishing What I Start</h4>
                <p className="text-sm text-slate-400">
                  Whether it's a 2,000 mile hike or a gnarly production bug
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Talk</h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm looking for a team that values creative problem-solving,
            clear communication, and people who finish what they start.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:eliwemyss@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-colors"
            >
              <Mail size={20} />
              eliwemyss@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/eliwemyss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-slate-600 hover:border-sky-400 rounded-lg font-semibold transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <p className="text-slate-500 text-sm">(615) 618-6440</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-slate-500 border-t border-slate-800">
        <p className="mb-2">Built with React because I still remember how to code</p>
        <p className="text-sm">🥾 2,190 miles | ✈️ Licensed pilot | 💻 Support engineer</p>
      </footer>
    </div>
  );
};

export default App;
