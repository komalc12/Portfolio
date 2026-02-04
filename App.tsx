
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Basic smooth entrance
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <section id="about" className="py-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-8">Professional Summary</p>
          <h2 className="text-2xl md:text-4xl text-white font-medium max-w-4xl mx-auto leading-relaxed italic">
            "I'm an Information Technology Engineer with expertise in <span className="text-cyan-400">Python, PHP, and Full-Stack development</span>. 
            I specialize in building enterprise solutions with <span className="text-white">ERPNext</span> and conducting 
            comprehensive QA testing."
          </h2>
        </div>
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
