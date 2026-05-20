import React from 'react';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Achievements from './Sections/Achievements';
import Experience from './Sections/Experience';
import Connect from './Sections/Connect';
function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="achievements"><Achievements /></div>
      <div id="experience"><Experience /></div>
      <div id="connect"><Connect /></div>
    </div>
  );
}

export default App;