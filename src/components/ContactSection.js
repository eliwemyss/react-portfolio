import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Talk</h2>
        <p className="text-xl text-slate-400 mb-12">
          I'm looking for a team that values creative problem-solving,
          clear communication, and people who finish what they start.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:eli@himynameiseli.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-colors"
          >
            <Mail size={20} />
            eli@himynameiseli.com
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
      </div>
    </section>
  );
};

export default ContactSection;
