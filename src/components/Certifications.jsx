import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaMedal } from 'react-icons/fa';

const certificationsData = [
  {
    title: 'Fundamentals of Data Analytics',
    authority: 'Infosys Springboard',
    type: 'Certification',
    status: 'Completed',
    description: 'Completed a course on the fundamentals of data analytics and analytical problem solving.',
  },
  {
    title: 'Introduction to Internet of Things',
    authority: 'NPTEL • IIT Kharagpur',
    type: 'Course Certificate',
    status: 'Elite',
    description: 'Cleared with 68% and gained a strong understanding of IoT systems and applications.',
  },
  {
    title: 'Computer Networks and Internet Protocols',
    authority: 'NPTEL • IIT Kharagpur',
    type: 'Course Certificate',
    status: 'Completed',
    description: 'Developed comprehensive knowledge of networking concepts, protocols, and internet architecture.',
  },
  {
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    authority: 'NPTEL • IIT Kharagpur',
    type: 'Course Certificate',
    status: 'Completed',
    description: 'Explored industrial automation, smart systems, and emerging technologies in connected manufacturing.',
  },
  {
    title: 'Introduction to Large Language Models',
    authority: 'Google Cloud',
    type: 'Certification',
    status: 'Completed',
    description: 'Learned the core concepts of large language models and their practical use cases.',
  },
  {
    title: 'Introduction to Generative AI',
    authority: 'Google Cloud',
    type: 'Certification',
    status: 'Completed',
    description: 'Gained a strong foundation in generative AI concepts and modern AI workflows.',
  },
  {
    title: 'Anatomization of 5G Communication ',
    authority: 'Infosys Springboard',
    type: 'Certification',
    status: 'Completed',
    description: 'Completed a course on 5G communication technologies and their applications in modern networks.',
  },
  {
    title: 'Internet of Things 101',
    authority: 'Infosys Springboard',
    type: 'Certification',
    status: 'Completed',
    description: 'Completed a course on the fundamentals of IoT, including sensors, connectivity, and data processing.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#030712]/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Certifications <span className="text-gradient">& Courses</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-purple-500/20 shadow-xl relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xl text-purple-400">
                    <FaCertificate />
                  </div>
                  {cert.status === 'Elite' && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">
                      <FaMedal className="text-[10px]" /> Elite
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-gray-400 mb-4">{cert.authority}</p>

                <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Credential Type</span>
                <span className="font-semibold text-purple-400">{cert.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
