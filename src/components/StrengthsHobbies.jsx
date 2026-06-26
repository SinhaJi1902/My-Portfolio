import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaCheckDouble, FaHourglassHalf, FaBolt, FaUserFriends, FaLightbulb, FaUtensils, FaTableTennis } from 'react-icons/fa';

const strengthsData = [
  { name: 'Proactive', icon: <FaUserPlus className="text-blue-400" />, desc: 'Takes initiative and remains active in learning and execution.' },
  { name: 'Teamwork & Collaboration', icon: <FaUserFriends className="text-purple-400" />, desc: 'Works effectively with peers and contributes to shared goals.' },
  { name: 'Problem Solving', icon: <FaLightbulb className="text-yellow-400" />, desc: 'Analyzes challenges and develops innovative solutions.' },
  { name: 'Quick Learner', icon: <FaBolt className="text-emerald-400" />, desc: 'Adapts rapidly to new technologies and concepts.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function StrengthsHobbies() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
              My Core <span className="text-gradient">Strengths</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {strengthsData.map((str, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-purple-500/20 shadow-lg text-center flex flex-col items-center justify-center relative overflow-hidden group"
              >
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 text-xl mb-4 group-hover:scale-110 transition-transform">
                  {str.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white font-display mb-2">{str.name}</h3>
                <p className="text-[11px] sm:text-xs text-gray-400 font-sans leading-normal">{str.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
              Hobbies & <span className="text-gradient">Interests</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-1/2 glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 shadow-lg flex items-center gap-4 group"
            >
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 text-2xl text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <FaUtensils />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Cooking</h3>
                <p className="text-xs text-gray-400 font-sans">Creative and relaxing hobby</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-1/2 glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 shadow-lg flex items-center gap-4 group"
            >
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-2xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <FaTableTennis />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Table Tennis</h3>
                <p className="text-xs text-gray-400 font-sans">Competitive and energetic hobby</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
