'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme !== 'light';
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='relative w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-700 border border-slate-600 dark:border-slate-600 flex items-center justify-center text-slate-300 dark:text-slate-300 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300'
      aria-label='Toggle theme'
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <FaMoon className='w-4 h-4' />
        ) : (
          <FaSun className='w-4 h-4' />
        )}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className='absolute inset-0 rounded-full bg-purple-500 opacity-0'
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
