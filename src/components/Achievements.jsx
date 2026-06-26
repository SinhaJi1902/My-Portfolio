import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaLaptopCode, FaChalkboardTeacher, FaCalendarAlt, FaCertificate } from 'react-icons/fa';

const achievementsData = [
  {
    title: 'IIT Bhubaneswar Web Hackathon ',
    subtitle: 'Participant • 2024',
    description: 'Attended 36 hours hackathon and developed a web application to solve real-world problems using innovative solutions.',
    icon: <FaCertificate className="text-purple-400" />,
    type: 'Achievement',
  },
  {
    title: 'GIET University Hackathon',
    subtitle: 'Participant • 2025',
    description: 'Atended 24 hours hackathon and worked on a team project to create a web application that addresses a specific challenge in the field of technology.',
    icon: <FaLaptopCode className="text-blue-400" />,
    type: 'Achievement',
  },
  {
    title: 'GOOGLE Devfest ',
    subtitle: 'Learner • 2025',
    description: 'Participated in Google Devfest and gained hands-on experience with Google technologies, including Firebase, cybersecurity, and Google Cloud Platform.',
    icon: <FaChalkboardTeacher className="text-cyan-400" />,
    type: 'Webinar',
  },
  {
    title: 'Introduction to Cybersecurity',
    subtitle: 'Learner',
    description: 'Earned certification on the fundamentals of cybersecurity, including network security, cryptography, and risk management.',
    icon: <FaCalendarAlt className="text-emerald-400" />,
    type: 'Workshop',
  },
  
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            My Achievements  <span className="text-gradient"></span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/20 shadow-xl relative overflow-hidden group flex flex-col sm:flex-row gap-5 items-start"
            >
              <span className={`absolute top-4 right-4 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold font-mono ${
                item.type === 'Certification'
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
              }`}>
                {item.type}
              </span>

              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-2xl flex-shrink-0 text-white shadow-md">
                {item.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-semibold text-purple-400 font-sans">
                  {item.subtitle}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
