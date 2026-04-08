import React from 'react';
import { Terminal, Database, Users, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const groups = [
    {
      title: 'Languages & Frameworks',
      icon: Terminal,
      color: 'emerald',
      skills: ['JavaScript', 'React', 'TypeScript', 'Python', 'Node.js', 'HTML/CSS'],
    },
    {
      title: 'Data & APIs',
      icon: Database,
      color: 'sky',
      skills: ['REST APIs', 'SQL', 'MongoDB', 'JSON/XML', 'Postman', 'Supabase'],
    },
    {
      title: 'Support & Ops',
      icon: Users,
      color: 'purple',
      skills: ['Incident Response', 'Root-Cause Analysis', 'Customer Communication', 'Technical Documentation', 'Escalation Management', 'SLA Tracking'],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'amber',
      skills: ['Git', 'Jira', 'Zendesk', 'Vercel', 'Vite', 'Stripe'],
    },
  ];

  const colorMap = {
    emerald: { icon: 'text-emerald-400', border: 'border-emerald-500/20', hoverBorder: 'hover:border-emerald-500/50', pill: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
    sky: { icon: 'text-sky-400', border: 'border-sky-500/20', hoverBorder: 'hover:border-sky-500/50', pill: 'text-sky-300 bg-sky-500/10 border-sky-500/20' },
    purple: { icon: 'text-purple-400', border: 'border-purple-500/20', hoverBorder: 'hover:border-purple-500/50', pill: 'text-purple-300 bg-purple-500/10 border-purple-500/20' },
    amber: { icon: 'text-amber-400', border: 'border-amber-500/20', hoverBorder: 'hover:border-amber-500/50', pill: 'text-amber-300 bg-amber-500/10 border-amber-500/20' },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">What I Work With</h2>
        <p className="text-xl text-slate-400 text-center mb-16">
          Five years in support means I've touched every layer of the stack — usually while it's on fire.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            const colors = colorMap[group.color];
            return (
              <div
                key={idx}
                className={`bg-slate-800 p-6 rounded-xl border ${colors.border} ${colors.hoverBorder} transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <Icon className={colors.icon} size={22} />
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${colors.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
