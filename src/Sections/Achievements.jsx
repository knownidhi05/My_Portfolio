import React from 'react';
import { motion } from 'framer-motion';
import { 
  a1, a2, a3, a4, a5, a6, 
  a7, a8, a9, a10, a11, a12 
} from '../assets';

const Achievements = () => {
  const achievementsData = [
    { id: 1, img: a1, title: "IDE BOOTCAMP'25 WINNER", subtitle: "National Innovation" },
    { id: 7, img: a7, title: "REFLOW HACKATHON WINNER", subtitle: "IIT BHUBANESHWAR" },
    { id: 9, img: a9, title: "FELICITATED BY EDUCATION MINISTER", subtitle: "GOVERNMENT OF INDIA" },
    { id: 4, img: a4, title: "AWARDED 'TOP 100'", subtitle: "IIT DELHI" },
    { id: 12, img: a12, title: "INCUBATION SELECTION", subtitle: "AIC NALANDA × UNICEF" },
    { id: 8, img: a8, title: "REPRESENTED ODISHA AT NATIONALS", subtitle: "State Delegate" },
    { id: 3, img: a3, title: "INNOSPRINT'25 WINNER", subtitle: "CVRGU" },
    { id: 10, img: a10, title: "SUSTAINABLE SHARK TANK", subtitle: "RUNNER UP" },
    { id: 2, img: a2, title: "CIA'25 RUNNER UP", subtitle: "CVRGU" },
    { id: 5, img: a5, title: "CAMPUS AMBASSADOR", subtitle: "E-CELL, IIT BOMBAY" },
    { id: 6, img: a6, title: "GRAPHICS DESIGNER SELECTION", subtitle: "ECELL CVRGU" },
    { id: 11, img: a11, title: "GSSoC'26 CONTRIBUTOR", subtitle: "Open Source Engagement" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="achievements" className="py-24 bg-brand-bg text-brand-text px-6 border-t border-brand-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center flex flex-col items-center justify-center space-y-4"
        >
          <div className="relative w-fit">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-accent uppercase font-mono">
              Achievements
            </h2>
            <div className="h-[2px] w-1/2 bg-brand-accent mt-2 mx-auto rounded-full"></div>
          </div>
          <p className="text-brand-muted max-w-2xl text-base font-light italic mt-2">
            "Looking beyond the destination to measure the depth of the evolution."
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievementsData.map((data) => (
            <motion.div 
              variants={item}
              key={data.id} 
              className="group flex flex-col bg-brand-card/10 rounded-2xl border border-brand-border overflow-hidden transition-all duration-300 hover:border-brand-accent/50 shadow-xl hover:shadow-brand-accent/5"
            >
              <div className="w-full min-h-[260px] md:min-h-[280px] bg-brand-bg/50 overflow-hidden flex items-center justify-center p-4 border-b border-brand-border">
                <img 
                  src={data.img} 
                  alt={data.title}
                  loading="lazy"
                  className="max-w-full max-h-[260px] md:max-h-[280px] object-contain rounded-xl shadow-lg transition-transform duration-500 ease-out group-hover:scale-[1.02]" 
                />
              </div>
              <div className="p-6 flex flex-col justify-center flex-grow bg-brand-card/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-brand-card/30">
                <h3 className="text-base sm:text-lg md:text-xl font-black tracking-wide text-brand-text uppercase transition-colors duration-300 group-hover:text-brand-accent leading-snug">
                  {data.title}
                </h3>
                <p className="text-[12px] md:text-xs font-mono font-bold text-brand-muted uppercase tracking-[0.15em] mt-2 bg-brand-bg w-fit px-2.5 py-0.5 rounded border border-brand-border">
                  {data.subtitle}
                </p>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;