import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.subject || !formState.message) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030712]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display mb-4">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed font-sans mb-8">
              Feel free to reach out for project collaborations, internship opportunities, or career discussions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 shadow-md">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <FaUser />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-mono">Name</h4>
                  <p className="text-sm font-semibold text-white">Prashant Kumar Sinha</p>
                </div>
              </div>

              <a
                href="mailto:prashant2023@gift.edu.in"
                className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 shadow-md hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group block"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-105 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-mono">Email</h4>
                  <p className="text-sm font-semibold text-white">prashant2023@gift.edu.in</p>
                </div>
              </a>

              <a
                href="tel:+918252018124"
                className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 shadow-md hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group block"
              >
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-105 transition-transform">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-mono">Phone</h4>
                  <p className="text-sm font-semibold text-white">+91 8252018124</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass p-4 rounded-xl border border-white/5 shadow-md">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 uppercase tracking-wider font-mono">Location</h4>
                  <p className="text-sm font-semibold text-white">Ward No. 07, Chakla Waini, Samastipur, Bihar</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-gray-300 font-display mb-4">Connect with me:</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SinhaJi1902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-xl text-gray-400 hover:text-white hover:bg-purple-600/15 transition-all text-xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashant-kumar-sinha-190672234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-xl text-gray-400 hover:text-white hover:bg-purple-600/15 transition-all text-xl"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:prashant2023@gift.edu.in"
                  className="p-3 bg-white/5 border border-white/10 hover:border-purple-500/40 rounded-xl text-gray-400 hover:text-white hover:bg-purple-600/15 transition-all text-xl"
                  title="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl relative"
            >
              <h3 className="text-2xl font-bold text-white font-display mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Prashant Kumar Sinha"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="prashant2023@gift.edu.in"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Hi Prashant, I would love to connect..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 focus:bg-white/[0.07] transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 text-white font-medium rounded-xl text-sm transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-[0_4px_20px_rgba(168,85,247,0.25)] flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs" /> Send Message
                    </>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-4 left-4 right-4 bg-green-500/10 border border-green-500/30 text-green-400 text-xs py-3 px-4 rounded-xl text-center font-medium"
                  >
                    Thank you! Your message was submitted successfully.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
