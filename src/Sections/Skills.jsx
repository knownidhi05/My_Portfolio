import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { name: "Graphic Design", icon: "🎨", level: "Intermediate" },
    { name: "React.js", icon: "⚛️", level: "Intermediate" },
    { name: "Computer Science (CSE)", icon: "💻", level: "Core" },
    { name: "Web Development", icon: "🌐", level: "FrontEnd" },
    { name: "Agile & Software Engineering", icon: "🧠", level: "Process" },
    { name: "Community Building", icon: "🤝", level: "Growth" },
    { name: "Brand Communication", icon: "📢", level: "Creative" },
    { name: "Entrepreneurship", icon: "📊", level: "Strategy" },
    { name: "Deep Learning (Intro)", icon: "🔗", level: "Exploring" },
    { name: "Leadership & Strategy", icon: "🎯", level: "Core" },
  ];

  // Motion variants for staggering
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // 0.1 seconds between each card appearing
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-24 bg-brand-bg text-brand-text px-6 border-t border-brand-border relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="relative w-fit">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-accent uppercase font-mono">
              Skills
            </h2>
            <div className="h-[2px] w-1/2 bg-brand-accent mt-1 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl font-light text-brand-muted italic">
            "In the infinite game of creation, every skill is an asset I intend to leverage."
          </p>
        </motion.div>

        {/* Skill Cards Grid with Staggering */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {skillsList.map((skill, idx) => (
            <motion.div 
              variants={item}
              key={idx} 
              className="p-5 bg-brand-card/20 border border-brand-border rounded-xl flex flex-col justify-between hover:bg-brand-card/40 hover:border-brand-accent/40 transition-all duration-300 group shadow-lg"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform w-fit drop-shadow-md">
                {skill.icon}
              </div>
              <div>
                <h4 className="font-semibold text-brand-text text-sm md:text-base">
                  {skill.name}
                </h4>
                <p className="text-xs text-brand-muted font-mono mt-1 uppercase tracking-wider">
                  {skill.level}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;