import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Education', id: 'education' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Projects', id: 'projects' },
  { name: 'Internship', id: 'internship' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar({ onViewModeChange, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#030712]/80 py-3 shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick('home');
          }}
          className="font-display text-2xl font-extrabold tracking-[0.25em] text-gradient"
        >
          PKS.
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 -z-10 rounded-full border border-cyan-400/40 bg-gradient-to-r from-blue-600/30 to-purple-600/30"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {link.name}
            </button>
          ))}

          <button
            onClick={onThemeToggle}
            className="ml-1 flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition-all hover:border-cyan-300/40 hover:text-white"
            title="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>

        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onThemeToggle}
            className="rounded-full border border-cyan-400/20 bg-slate-900/70 p-2.5 text-sm text-cyan-200"
            title="Toggle theme"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-2.5 text-xl text-gray-300 hover:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 top-full w-full overflow-hidden border-b border-white/5 bg-[#030712]/95 shadow-2xl backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`rounded-lg px-4 py-2.5 text-left text-sm font-medium tracking-wide transition-colors ${
                    activeSection === link.id
                      ? 'border-l-2 border-purple-500 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
