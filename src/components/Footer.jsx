import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-[#030712]/80 backdrop-blur-md relative z-10 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400 font-sans flex items-center gap-1.5 justify-center">
          Made with <FaHeart className="text-red-500 animate-pulse text-xs" /> by <span className="font-semibold text-white">Prashant Kumar Sinha</span>
        </p>

        <p className="text-xs text-gray-500 font-sans">
          &copy; {currentYear} Prashant Kumar Sinha. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
