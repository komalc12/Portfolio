
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm font-mono">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript & Tailwind.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Github</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
