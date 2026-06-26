import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaCheckCircle } from 'react-icons/fa';

export default function Internship() {
  return (
    <section id="internship" className="py-24 relative overflow-hidden bg-[#030712]/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Professional <span className="text-gradient">Internship</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 sm:p-12 border border-white/5 hover:border-purple-500/20 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
            <div className="space-y-4 lg:col-span-1 lg:border-r lg:border-white/5 lg:pr-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xl text-purple-400">
                  <FaBuilding />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Company</h3>
                  <p className="text-sm text-gray-300 font-medium">Glucian India Pvt. Ltd.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xl text-blue-400">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Role</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400">
                    MERN Stack Intern
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xl text-cyan-400">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">Duration</h3>
                  <p className="text-sm text-gray-300 font-medium">26 May 2025 – 10 July 2025</p>
                  <p className="text-xs text-gray-400">46 days</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xl font-bold text-white font-display">Description & Key Contributions</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-sans">
                Completed a MERN-stack internship and built a responsive grocery website with seller and admin modules for streamlined product management and order handling.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                  <span>Developed a responsive UI using ReactJS, Bootstrap, and Reactstrap.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                  <span>Built backend APIs with ExpressJS and NodeJS for product, order, and user management.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                  <span>Implemented seller panel, admin panel, item add/remove actions, and order placement features.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}
