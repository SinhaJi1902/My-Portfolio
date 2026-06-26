import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    type: 'Bachelor of Technology',
    major: 'Computer Science & Engineering',
    institution: 'GIFT Autonomous College, Bhubaneswar',
    details: 'Affiliated to Biju Patnaik University of Technology (BPUT)',
    score: 'CGPA: 8.23',
    period: '2023 - Present',
  },
  {
    type: 'Intermediate',
    major: 'Science Stream (PCM)',
    institution: 'DAV Public School, Jamshedpur',
    details: 'CBSE Board',
    period: '2021 - 2023',
  },
  {
    type: 'Matriculation',
    major: 'General Studies',
    institution: 'DAV Public School, Jamshedpur',
    details: 'CBSE Board',
    period: '2019 - 2021',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#030712]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Education <span className="text-gradient">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-8 w-8 h-8 rounded-full bg-gray-900 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center -translate-x-1/2 z-10 text-xs text-purple-400">
                    <FaGraduationCap />
                  </div>

                  <div className="w-full md:w-1/2 pr-0 md:pr-12 pl-12 md:pl-0 text-left md:text-right flex items-center justify-start md:justify-end">
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <EducationCard item={item} align="right" />
                      </motion.div>
                    )}
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-12 text-left flex items-center">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <EducationCard item={item} align="left" />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationCard({ item }) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/20 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors" />

      <span className="inline-block text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-purple-400 border border-white/5 mb-3 font-medium">
        {item.period}
      </span>

      <h3 className="text-xl font-bold text-white font-display mb-1">{item.type}</h3>
      <h4 className="text-base font-semibold text-purple-300 font-sans mb-3">{item.major}</h4>

      <p className="text-sm text-gray-300 mb-1 font-medium">{item.institution}</p>
      {item.details && <p className="text-xs text-gray-400 mb-2">{item.details}</p>}

      {item.score && (
        <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded text-cyan-400 border border-cyan-500/10 mt-2">
          {item.score}
        </span>
      )}
    </div>
  );
}
