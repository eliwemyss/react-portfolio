import React from 'react';
import { Mountain, Plane, Zap } from 'lucide-react';

const JourneySection = () => {
  return (
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
              <span>5 years of technical support experience that didn't evaporate</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
