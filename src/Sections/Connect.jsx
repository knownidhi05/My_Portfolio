import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Connect = () => {
  return (
    <section id="connect" className="pt-24 bg-brand-bg text-brand-text flex flex-col items-center justify-between min-h-[70vh] border-t border-brand-border relative">
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl px-6 pb-16">
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-black tracking-tight text-center bg-gradient-to-br from-brand-text via-white to-brand-muted bg-clip-text text-transparent mb-8"
        >
          LET'S CONNECT.
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 bg-brand-card/20 border border-brand-border px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg mb-10"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_rgba(192,125,155,0.6)]"></div>
          <span className="text-xs md:text-sm font-mono font-medium text-brand-muted uppercase tracking-widest">
            System Status: <span className="text-brand-accent ml-1">Ready to build.</span>
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-2xl font-light text-brand-muted text-center max-w-2xl italic leading-relaxed mb-12"
        >
          "Drop a message to collaborate on the next venture"
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          <a href="https://www.linkedin.com/in/nidhi0504" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-brand-card/10 border border-brand-border rounded-xl hover:bg-brand-card/30 hover:border-brand-accent/50 transition-all duration-300 group">
  <FaLinkedin className="text-xl text-brand-muted group-hover:text-brand-accent transition-colors" />
  <span className="font-mono text-sm tracking-wide text-brand-text group-hover:text-white">LinkedIn</span>
</a>

          <a href="mailto:nidhi.jsr0504@gmail.com" className="flex items-center gap-3 px-6 py-3 bg-brand-accent text-brand-bg border border-brand-accent rounded-xl hover:bg-transparent hover:text-brand-accent transition-all duration-300 shadow-[0_0_20px_rgba(192,125,155,0.2)] group">
            <FaEnvelope className="text-xl" />
            <span className="font-mono text-sm font-bold tracking-wide">Email Me</span>
          </a>

          <a href="https://github.com/knownidhi05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-brand-card/10 border border-brand-border rounded-xl hover:bg-brand-card/30 hover:border-brand-accent/50 transition-all duration-300 group">
            <FaGithub className="text-xl text-brand-muted group-hover:text-brand-accent transition-colors" />
            <span className="font-mono text-sm tracking-wide text-brand-text group-hover:text-white">GitHub</span>
          </a>
        </motion.div>
      </div>

      <footer className="w-full bg-brand-accent/10 border-t border-brand-accent/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm font-mono text-brand-accent/80 tracking-widest uppercase">
            © 2026 Nidhi Sharma
          </p>
          <p className="text-xs font-mono text-brand-muted tracking-wide flex items-center gap-2">
            Built with <span className="text-brand-accent font-bold animate-pulse">❤</span> React & Tailwind
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Connect;