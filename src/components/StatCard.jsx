import React from 'react';

const StatCard = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 bg-brand-card/20 border border-brand-border rounded-2xl hover:bg-brand-card/40 hover:border-brand-accent/50 transition-all duration-300 shadow-lg group">
      
      {/* Changed from bright blue to your Dusty Pink accent color */}
      <span className="text-2xl md:text-3xl font-black text-brand-accent font-mono group-hover:scale-110 transition-transform duration-300">
        {number}
      </span>
      
      {/* Changed to your muted cream color */}
      <span className="text-xs md:text-sm font-medium tracking-wide text-brand-muted mt-2 uppercase text-center">
        {text}
      </span>
      
    </div>
  );
};

export default StatCard;