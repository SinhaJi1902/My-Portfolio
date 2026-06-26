import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import Components
import Loading from './components/Loading';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import StrengthsHobbies from './components/StrengthsHobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VSCodeView from './components/VSCodeView';

const lightStreaks = [
  { left: '8%', top: '12%', width: '32rem', delay: '0s', color: 'from-cyan-400/20 via-sky-400/10 to-transparent' },
  { left: '55%', top: '24%', width: '24rem', delay: '2.5s', color: 'from-blue-500/18 via-indigo-400/10 to-transparent' },
  { left: '20%', top: '78%', width: '28rem', delay: '5s', color: 'from-purple-500/18 via-fuchsia-400/10 to-transparent' },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('standard');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (viewMode === 'vscode') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [viewMode]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.body.style.backgroundColor = theme === 'dark' ? '#030712' : '#f8fbff';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        viewMode === 'vscode' ? (
          <VSCodeView onViewModeChange={setViewMode} />
        ) : (
          <div className={`relative min-h-screen antialiased font-sans select-none transition-colors duration-500 ${theme === 'dark' ? 'bg-[#030712] text-slate-100' : 'bg-[#f8fbff] text-slate-900'}`}>
            <Background />

            <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
              {lightStreaks.map((streak, index) => (
                <motion.div
                  key={index}
                  className={`absolute h-40 rounded-full bg-gradient-to-r ${streak.color} blur-3xl opacity-70 animate-streak`}
                  style={{ left: streak.left, top: streak.top, width: streak.width }}
                  animate={{ x: ['-20%', '120%'], opacity: [0, 0.6, 0] }}
                  transition={{ duration: 14 + index * 2, repeat: Infinity, ease: 'linear', delay: index * 2.2 }}
                />
              ))}
            </div>

            <ScrollProgress />
            <Navbar onViewModeChange={setViewMode} viewMode={viewMode} theme={theme} onThemeToggle={toggleTheme} />

            <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Hero onViewModeChange={setViewMode} />
              <About />
              <Skills />
              <Education />
              <Achievements />
              <Projects />
              <Internship />
              <Certifications />
              <StrengthsHobbies />
              <Contact />
            </main>

            <Footer />
            <BackToTop />
          </div>
        )
      )}
    </>
  );
}
