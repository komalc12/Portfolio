
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Terminal, TestTube, Server, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const iconMap: Record<string, any> = {
  Code2,
  Layout,
  Terminal,
  Database,
  TestTube,
  Server,
  Cpu
};

// Updated proficiency data for modern Python-centric skills
const proficiencyLevels: Record<string, number> = {
  "Python (Core)": 95,
  "Django": 90,
  "Flask": 85,
  "RESTful API": 92,
  "FastAPI": 75,
  "Frappe Framework": 88,
  "ERPNext": 90,
  "Custom Workflows": 85,
  "Hooks": 82,
  "MySQL": 85,
  "PostgreSQL": 80,
  "Git & GitHub": 90,
  "Docker": 70,
  "Linux": 78,
  "React.js": 75,
  "Tailwind CSS": 85,
  "Bootstrap": 90,
  "HTML5": 95,
  "CSS3": 92,
  "Functional Testing": 95,
  "Pytest": 80,
  "Regression Testing": 88,
  "Code Quality": 92
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Vector Graphics */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] border border-cyan-500/10 rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] border border-indigo-500/5 rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">Technical Arsenal</h2>
            <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-2xl">
              Specialized in modern backend engineering, enterprise automation, and clean architecture within the Python ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <IconComponent className="text-cyan-400" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-300 font-medium">{skill}</span>
                        <span className="text-slate-500 text-xs font-mono">{proficiencyLevels[skill] || 50}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${proficiencyLevels[skill] || 50}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
