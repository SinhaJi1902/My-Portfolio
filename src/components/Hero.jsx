import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGitAlt } from 'react-icons/fa';
import profileImg from '../assets/Sinha_Profile.jpeg';
import resumePdf from '../assets/Prashant Kumar Sinha_B.Tech CSE.pdf';

const roles = ['MERN Stack Developer', 'Python Enthusiast', 'B.Tech CSE Student'];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pb-16 pt-24">
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left"
        >
          <span className="mb-4 inline-flex w-fit self-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 lg:self-start">
            Welcome to my portfolio
          </span>
          <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Prashant Kumar Sinha</span>
          </h1>

          <div className="mb-6 h-10 sm:h-12">
            <p className="text-xl font-medium text-slate-300 sm:text-2xl">
              <span className="mr-2">I Am</span>
              <span className="rounded-r-full border-r-2 border-cyan-400 pr-1 font-semibold text-cyan-300 animate-pulse">{currentText}</span>
            </p>
          </div>

          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
            A driven B.Tech CSE student crafting modern web experiences with React, Node.js, MongoDB, and a strong passion for problem solving and product-minded development.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <button
              onClick={() => handleScrollTo('projects')}
              className="cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-400"
            >
              View Projects
            </button>
            <a
              href="https://github.com/SinhaJi1902"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href={resumePdf}
              download="Prashant_Kumar_Sinha_Resume.pdf"
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 text-slate-400 lg:justify-start">
            <a href="https://github.com/SinhaJi1902" target="_blank" rel="noopener noreferrer" className="text-xl transition-all hover:scale-110 hover:text-cyan-300" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/prashant-kumar-sinha-190672234" target="_blank" rel="noopener noreferrer" className="text-xl transition-all hover:scale-110 hover:text-cyan-300" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:prashant2023@gift.edu.in" className="text-xl transition-all hover:scale-110 hover:text-cyan-300" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 flex items-center justify-center lg:order-2"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full sm:h-80 sm:w-80 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-30 blur-2xl animate-pulse" />
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-dashed border-purple-400/40 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-cyan-400/10" />

            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-300/50 bg-slate-950/30 shadow-[0_0_45px_rgba(34,211,238,0.4)] sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img src={profileImg} alt="Prashant Kumar Sinha" className="min-h-full min-w-full object-cover object-center transition-transform duration-500 hover:scale-110" />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
