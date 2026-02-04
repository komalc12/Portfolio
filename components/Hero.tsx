
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-[150px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-cyan-400 text-sm mb-4 tracking-widest uppercase">
            &lt; Hello, World /&gt;
          </p>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
            I'm <span className="bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-xl md:text-3xl text-slate-400 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            {PERSONAL_INFO.title} specialized in <span className="text-white">Python, PHP</span> and building <span className="text-white">Enterprise Ecosystems</span>.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-50 transition-colors shadow-lg shadow-white/10"
            >
              View Work <ChevronRight size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900/50 backdrop-blur border border-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors"
            >
              Download Resume <FileText size={18} />
            </motion.button>
          </div>

          <div className="mt-12 flex justify-center gap-6 text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
