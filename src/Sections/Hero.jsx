import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar2.png'; 

const Hero = () => {
  const words = [
    "entering the arena where ideas meet execution.",
    "showing up, participating, and evolving.",
    "exploring the infinite game of endless learning.",
    "shaping visual identities that speak."
  ];
  
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 500); 
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-brand-bg relative overflow-hidden">
      
      {/* --- LAYER 1: The Deeply Blurred Background --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={avatarImg} 
          alt="Atmosphere" 
          className="w-full h-full object-cover object-top blur-[80px] opacity-40 scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent"></div>
      </div>

      {/* --- LAYER 2: The Sharp Highlight (Faded on the Left) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none hidden md:block"
      >
        <img
          src={avatarImg}
          alt="Nidhi Sharma Profile"
          className="w-full h-full object-cover object-[80%_15%] opacity-90"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, black 80%, black 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, black 80%, black 100%)'
          }}
        />
      </motion.div>

      {/* Mobile-only background treatment */}
      <div className="absolute inset-0 z-0 pointer-events-none md:hidden opacity-30">
        <img
          src={avatarImg}
          alt="Nidhi"
          className="w-full h-full object-cover object-[80%_15%]"
          style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 20%, black 100%)' }}
        />
      </div>


      {/* --- LAYER 3: Navigation --- */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 py-6 px-6 md:px-12 flex justify-between items-center z-50 w-full"
      >
        {/* Left Side: Resume Button */}
        <div className="flex items-center justify-start w-auto md:w-32">
          <a href="#resume-link-placeholder" download className="flex items-center gap-2 bg-brand-accent/20 hover:bg-brand-accent text-brand-accent hover:text-brand-bg font-mono text-xs font-bold tracking-widest uppercase py-2 px-4 rounded-full border border-brand-accent/40 hover:border-brand-accent shadow-lg transition-all duration-300 group backdrop-blur-sm">
            <span>Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden sm:flex items-center gap-1 sm:gap-4 bg-brand-card/30 backdrop-blur-md px-4 py-2 rounded-full border border-brand-border shadow-lg">
          {['home', 'about', 'skills', 'achievements', 'experience', 'connect'].map((tab) => (
            <button
              key={tab}
              onClick={() => scrollToSection(tab)}
              className="text-xs uppercase tracking-wider text-brand-muted hover:text-white px-2.5 py-1.5 rounded-full hover:bg-brand-card/60 transition-all font-mono font-medium shadow-sm"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Side: Empty spacer to keep the center tabs perfectly centered */}
        <div className="w-auto md:w-32 hidden sm:block"></div>
      </motion.nav>


      {/* --- LAYER 4: The Content Grid --- */}
      {/* Widened max-w-[1400px] and adjusted padding to allow content to sit further left */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:pl-10 lg:pr-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-24 pb-12">
        
        {/* Text Column (Left Side) */}
        {/* Added xl:-ml-8 to specifically nudge the text block leftwards on larger screens */}
        <div className="text-left flex flex-col items-start mt-10 lg:mt-0 xl:-ml-8">
          <motion.span 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-xs md:text-sm font-mono tracking-widest text-brand-accent bg-brand-accent/15 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-accent/30 uppercase mb-6 shadow-xl"
          >
            CSE'28 · Designer · Innovator · Developer
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] font-black tracking-tight leading-[1.05] text-white drop-shadow-2xl whitespace-nowrap"
          >
            NIDHI SHARMA
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-light text-brand-text mt-8 max-w-lg tracking-wide leading-relaxed border-l-2 border-brand-accent pl-6 drop-shadow-md bg-brand-bg/20 backdrop-blur-sm py-2 rounded-r-xl"
          >
            "Looking beyond the destination to measure the depth of the evolution."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 h-12 flex items-center"
          >
            <p className={`font-sans text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-brand-accent select-none transition-all duration-500 transform drop-shadow-lg ${visible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-2 blur-md"}`}>
              {words[index]}
            </p>
          </motion.div>
        </div>

        {/* Empty Right Column */}
        <div className="hidden lg:block"></div>

      </div>
      
      {/* Scroll Down Indicator */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-text/60 text-sm font-mono hover:text-white transition-colors z-20 drop-shadow-md"
      >
        scroll down ↓
      </motion.button>
    </section>
  );
};

export default Hero;