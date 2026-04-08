import React from 'react';
import { ExternalLink, Github, Users, Repeat, Tag } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Rollout',
      tagline: 'Group ride RSVP — no account required',
      description:
        'Built for the Nashville cycling community. Organizers create recurring weekly rides, share the link, and see who\'s rolling. Guests can RSVP with just a name — no Strava account needed. Features recurring series that auto-generate a fresh RSVP list each week, ride tagging, and an admin dashboard.',
      tech: ['React', 'TypeScript', 'Supabase', 'Vercel'],
      highlights: [
        { icon: Users, text: 'Guest RSVP without signup' },
        { icon: Repeat, text: 'Auto-generating weekly rides' },
        { icon: Tag, text: 'Ride categorization & filtering' },
      ],
      liveUrl: 'https://rollout.himynameiseli.com',
      githubUrl: 'https://github.com/eliwemyss/rollout',
      accentColor: '#00ff87',
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">What I'm Building</h2>
        <p className="text-xl text-slate-400 text-center mb-16">
          Real problems, real users, shipped code
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                  <div>
                    <h3 className="text-3xl font-bold mb-1">{project.title}</h3>
                    <p className="text-slate-400">{project.tagline}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                      style={{
                        backgroundColor: project.accentColor + '20',
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}40`,
                      }}
                    >
                      <ExternalLink size={14} />
                      Live App
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold text-sm transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {project.highlights.map((h, hIdx) => {
                    const Icon = h.icon;
                    return (
                      <div
                        key={hIdx}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <Icon
                          size={16}
                          className="flex-shrink-0"
                          style={{ color: project.accentColor }}
                        />
                        {h.text}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-900 text-slate-400 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
