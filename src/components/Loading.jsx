import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Cap at 100
  const displayPercent = percent > 100 ? 100 : percent;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 bg-[#030712] z-50 flex flex-col justify-center items-center font-sans"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow Effects */}
        <div className="absolute w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -top-20"></div>
        <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -bottom-20"></div>

        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 border-2 border-transparent border-t-purple-500 border-b-cyan-500 rounded-full mb-6"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-display font-black tracking-widest text-gradient mb-2 uppercase">
            Prashant Kumar Sinha
          </h1>
          <p className="text-sm font-light text-gray-500 tracking-widest uppercase mb-4">
            System Initializing...
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-gray-900 rounded-full overflow-hidden border border-white/5 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
            initial={{ width: '0%' }}
            animate={{ width: `${displayPercent}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <span className="text-xs text-purple-400 mt-2 font-mono tracking-wider">
          {displayPercent}%
        </span>
      </div>
    </motion.div>
  );
}
