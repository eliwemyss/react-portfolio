import React from 'react';

const TimelineSection = () => {
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
  );
};

export default TimelineSection;
