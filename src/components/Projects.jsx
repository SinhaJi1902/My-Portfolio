import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Smart Alumni Platform',
    category: 'Full Stack Web Application',
    description: 'A full-stack platform that connects students and alumni for mentorship, career guidance, and skill growth through secure role-based dashboards.',
    tech: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Socket.io', 'Naive Bayes'],
    features: [
      'Role-based dashboards for Admin, Alumni, and Student',
      'CV Analyzer and skill improvement suggestions',
      'Career roadmap generator',
      'Real-time chat and wallet system',
      'Secure payment workflow',
    ],
    github: 'https://github.com/SinhaJi1902/smart_alumini_platform',
    demo: 'https://github.com/SinhaJi1902/smart_alumini_platform',
  },
  {
    title: 'Grocery Website',
    category: 'Internship Project • Glucian India Pvt. Ltd.',
    description: 'A polished grocery web experience built during internship with dedicated seller and admin workflows for product and order management.',
    tech: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', 'Reactstrap', 'Bootstrap'],
    features: [
      'Seller panel and admin panel',
      'Add and remove product actions',
      'Responsive shopping experience',
      'Order placement flow',
      'Clean UI for product browsing',
    ],
    github: 'https://github.com/SinhaJi1902/Grocery-App',
    demo: 'https://github.com/SinhaJi1902/Grocery-App',
  },
  {
    title: 'E-Learning Platform',
    category: 'Full Stack Learning Portal',
    description: 'A responsive educational platform with role-based access for learners, instructors, and administrators focused on seamless course delivery.',
    tech: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB', 'Axios', 'CRUD'],
    features: [
      'Course creation and management',
      'Student enrollment and progress tracking',
      'Teacher verification workflow',
      'Admin dashboard insights',
      'JWT-secured access control',
    ],
    github: 'https://github.com/SinhaJi1902/E-Learning-Platform',
    demo: 'https://github.com/SinhaJi1902/E-Learning-Platform',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_20px_80px_rgba(2,6,23,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.14)] sm:p-10"
            >
              <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/0 blur-3xl transition-all duration-500 group-hover:from-purple-500/20" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/0 blur-3xl transition-all duration-500 group-hover:from-cyan-500/20" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-4 text-lg text-slate-400">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" title="GitHub Repository">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" title="Live Demo">
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                <h3 className="mb-3 font-display text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-semibold text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mb-6 h-px w-full bg-white/5" />

                <h4 className="mb-4 font-display text-sm font-semibold text-slate-300">Key Highlights</h4>
                <ul className="mb-8 grid grid-cols-1 gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400 sm:text-sm">
                      <FaCheckCircle className="mt-0.5 flex-shrink-0 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center text-sm font-semibold text-white shadow-[0_4px_15px_rgba(34,211,238,0.16)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt className="text-xs" /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
