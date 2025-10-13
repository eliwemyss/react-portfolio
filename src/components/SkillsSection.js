import React, { useState } from 'react';
import { MessageSquare, Zap, Code, Mountain } from 'lucide-react';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

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

  return (
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
  );
};

export default SkillsSection;
