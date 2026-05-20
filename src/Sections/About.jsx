import React from 'react';
import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';

// 🛑 IMPORTANT: If your images are PNGs, change .jpg to .png below!
import i1 from '../assets/i1.jpg'; 
import i2 from '../assets/i3.jpg';
import i3 from '../assets/i2.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg text-brand-text px-6 border-t border-brand-border relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* --- LEFT COLUMN: Typography --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 pt-16 lg:pt-0 z-20"
        >
          <div className="relative w-fit">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-brand-accent uppercase font-mono">
              About
            </h2>
            <div className="h-[2px] w-1/2 bg-brand-accent mt-1 rounded-full"></div>
          </div>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-white pt-2 leading-tight drop-shadow-lg">
            "Turning internal transformation<br/> into external solutions."
          </h3>
          
          <div className="text-brand-muted space-y-5 leading-relaxed text-base font-light max-w-xl pr-4">
            <p>
              I am a Computer Science student at C.V. Raman Global University and a graphic designer, operating at the intersection of logic and creativity. Beyond the titles, my philosophy is simple: COMPETE ONLY WITH WHO I WAS YESTERDAY.
            </p>
            <p>
              I don't measure success against others; I focus inward on compounding my growth by 1% every single day. By treating code as a canvas and technology as a lever, I turn raw ideas into intentional, real-world solutions that carry true human impact.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <StatCard number="3+" text="Roles" />
            <StatCard number="10+" text="Achievements" />
            <StatCard number="20+" text="Events" />
            <StatCard number="∞" text="Endless Learning" />
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: The Overlapping 3-Image Layout --- */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[450px] sm:h-[550px] w-full mt-10 lg:mt-0">
          
          {/* Image 1 (Left - Lower) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 sm:left-4 w-40 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-2 border-brand-card/50 translate-y-8"
          >
            <img src={i1} alt="Nidhi 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay"></div>
          </motion.div>

          {/* Image 2 (Center - Higher & Prominent) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-[25%] sm:left-[30%] w-48 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-20 border-2 border-brand-accent/30 -translate-y-10 group"
          >
            <img src={i2} alt="Nidhi 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          {/* Image 3 (Right - Lower) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-0 sm:right-4 w-40 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl z-10 border-2 border-brand-card/50 translate-y-12"
          >
            <img src={i3} alt="Nidhi 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-bg/20 mix-blend-overlay"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;