
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, User, BookOpen, Settings, Terminal as TerminalIcon } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCES, SKILL_CATEGORIES } from '../constants';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 rounded-2xl">
              <FileText className="text-cyan-400" size={32} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Resume</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded font-mono border border-green-500/20">DEBUG=False</span>
                <p className="text-slate-400 font-mono text-xs">Engine: Django/Frappe Template v3.0.1</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-cyan-50 transition-colors">
            <Download size={18} /> Export Profile
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Subtle Vector Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Resume Header Area */}
          <div className="p-8 md:p-12 border-b border-white/5 bg-gradient-to-br from-slate-900 to-slate-950 relative">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-black text-white">{PERSONAL_INFO.name}</h1>
                <p className="text-cyan-400 font-mono text-sm tracking-wide">{PERSONAL_INFO.title}</p>
                <p className="text-slate-400 max-w-xl text-sm leading-relaxed mt-4">
                  {PERSONAL_INFO.bio}
                </p>
              </div>
              <div className="space-y-3 text-right text-sm">
                <p className="text-slate-300 font-medium">{PERSONAL_INFO.location}</p>
                <p className="text-slate-500">{PERSONAL_INFO.email}</p>
                <p className="text-slate-500">{PERSONAL_INFO.phone}</p>
                <p className="text-cyan-500/80 underline decoration-cyan-500/20">{PERSONAL_INFO.linkedin}</p>
              </div>
            </div>
          </div>

          {/* Resume Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Sidebar Columns */}
            <div className="lg:col-span-1 p-8 bg-slate-900/30 border-r border-white/5 space-y-12">
              <div>
                <h3 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-6">
                  <BookOpen size={14} /> Education
                </h3>
                <div className="space-y-6">
                  {EDUCATION.map((edu, i) => (
                    <div key={i}>
                      <p className="text-white font-bold text-sm">{edu.institution}</p>
                      <p className="text-cyan-400 text-xs mt-1">{edu.degree}</p>
                      <p className="text-slate-500 text-[10px] uppercase tracking-tighter mt-1">{edu.period} • {edu.score || 'In Progress'}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-6">
                  <Settings size={14} /> Tech Stack
                </h3>
                <div className="space-y-4">
                  {SKILL_CATEGORIES.map((cat, i) => (
                    <div key={i}>
                      <p className="text-slate-300 text-[11px] font-bold uppercase mb-2">{cat.title}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-slate-400 font-mono">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <h3 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-4">
                   Specialization
                </h3>
                <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
                   <p className="text-[11px] text-slate-400 leading-relaxed font-mono">
                     <span className="text-cyan-400">class</span> SeniorEngineer: <br/>
                     &nbsp;&nbsp;core = <span className="text-yellow-400">"Python"</span><br/>
                     &nbsp;&nbsp;stack = [<span className="text-yellow-400">"Django"</span>, <span className="text-yellow-400">"Frappe"</span>]<br/>
                     &nbsp;&nbsp;focus = <span className="text-yellow-400">"Scalability"</span>
                   </p>
                </div>
              </div>
            </div>

            {/* Main Column */}
            <div className="lg:col-span-2 p-8 md:p-12 space-y-12">
              <div>
                <h3 className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest mb-8">
                  <User size={14} /> Professional Experience
                </h3>
                <div className="space-y-10">
                  {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-cyan-500 before:rounded-full">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-bold">{exp.role}</h4>
                        <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                      </div>
                      <p className="text-cyan-400 text-sm font-medium mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {exp.description.map((point, j) => (
                          <li key={j} className="text-sm text-slate-400 leading-relaxed">• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                <p className="text-slate-600 text-[10px] font-mono leading-relaxed">
                  Generated via IT_PORTFOLIO_ENGINE.templates.resume_v3. Render context: { PERSONAL_INFO.name.toUpperCase().replace(' ', '_') }_PROFILE.
                </p>
                <div className="flex gap-2 opacity-20 group-hover:opacity-50">
                  <TerminalIcon size={12} className="text-slate-500" />
                  <span className="text-[10px] text-slate-600 font-mono">EOF</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
