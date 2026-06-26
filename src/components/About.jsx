import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 hover:border-purple-500/20 transition-all duration-500"
        >
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-colors duration-500" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-colors duration-500" />

          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 relative z-10 font-display">
            Career Objective
          </h3>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-justify relative z-10 font-sans tracking-wide">
            Passionate Computer Science student with hands-on experience in building web applications using the MERN stack. Looking for an opportunity to utilize my technical skills and learn from industry professionals while contributing to organizational success.
          </p>

          <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
