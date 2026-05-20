import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Graphic Designer",
      company: "Entrepreneurship Development Cell, C.V. Raman Global University",
      duration: "Nov 2025 – Present",
      desc: "Designing visual identity and creative assets for one of the university's most active student bodies, blending aesthetics with purpose."
    },
    {
      role: "Incubatee / Entrepreneur Trainee",
      company: "Atal Incubation Centre Nalanda",
      duration: "Nov 2025 – April 2026",
      desc: "Trained under a nationally recognized incubation program, developing entrepreneurial thinking, product ideation, and startup fundamentals."
    },
    {
      role: "Campus Ambassador",
      company: "E-Cell, IIT Bombay",
      duration: "June 2025 – Feb 2026",
      desc: "Bridged IIT Bombay's entrepreneurship ecosystem with local students — organizing events, spreading awareness, and building community at the grassroots."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-brand-bg text-brand-text px-6 border-t border-brand-border">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center space-y-4"
        >
          <div className="relative w-fit">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-accent uppercase font-mono">
              Experience
            </h2>
            <div className="h-[2px] w-1/2 bg-brand-accent mt-1 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl font-light text-brand-muted italic">
            "Every role taught me something no classroom ever could."
          </p>
        </motion.div>

        <div className="relative border-l border-brand-border pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx} 
              className="relative group"
            >
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-brand-bg border-2 border-brand-accent group-hover:bg-brand-accent transition-colors duration-300 shadow-[0_0_10px_rgba(192,125,155,0.1)] group-hover:shadow-[0_0_15px_rgba(192,125,155,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-text group-hover:text-brand-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-brand-muted mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono text-brand-muted bg-brand-card/20 px-3 py-1 rounded-md border border-brand-border w-fit shrink-0 mt-1 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm md:text-base text-brand-muted mt-4 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;