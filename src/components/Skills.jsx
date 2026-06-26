import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-blue-400" />,
    skills: [
      { name: 'Python', level: 80 },
      { name: 'JavaScript', level: 85 },
      
    ],
  },
  {
    title: 'Frontend Development',
    icon: <FaLaptopCode className="text-purple-400" />,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'ReactJS', level: 85 },
      { name: 'React-Strap', level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    icon: <FaServer className="text-cyan-400" />,
    skills: [
      { name: 'NodeJS', level: 80 },
      { name: 'ExpressJS', level: 80 },
    ],
  },
  {
    title: 'Database Management',
    icon: <FaDatabase className="text-emerald-400" />,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
    ],
  },
  {
    title: 'Tools & Version Control',
    icon: <FaTools className="text-orange-400" />,
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'MS Office', level: 80 },
    ],
  },
  {
    title: 'Core CS Concepts',
    icon: <FaBrain className="text-rose-400" />,
    skills: [
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Authentication', level: 80 },
      { name: 'CRUD Operations', level: 85 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xl">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white font-display">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-300 font-sans">{skill.name}</span>
                      <span className="text-purple-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
