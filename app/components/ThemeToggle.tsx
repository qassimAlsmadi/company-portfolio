'use client';

import { Sun, Moon, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = [
      'light',
      'dark',
      'system',
    ];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <Monitor className='w-4 h-4' />;
    }
    return resolvedTheme === 'dark' ? (
      <Moon className='w-4 h-4' />
    ) : (
      <Sun className='w-4 h-4' />
    );
  };

  const getLabel = () => {
    if (theme === 'system') return 'System';
    return resolvedTheme === 'dark' ? 'Dark' : 'Light';
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='relative w-10 h-10 rounded-full bg-bg-secondary border border-bg-border flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300 group'
      title={`Current theme: ${getLabel()}. Click to cycle through themes.`}
      aria-label={`Toggle theme. Current: ${getLabel()}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'system' ? 0 : resolvedTheme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className='flex items-center justify-center'
      >
        {getIcon()}
      </motion.div>

      {/* Theme indicator dot */}
      <motion.div
        className={`absolute bottom-1 right-1 w-2 h-2 rounded-full ${
          theme === 'system'
            ? 'bg-accent-tertiary'
            : resolvedTheme === 'dark'
              ? 'bg-accent-secondary'
              : 'bg-accent-primary'
        }`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glow effect on hover */}
      <motion.div
        className='absolute inset-0 rounded-full opacity-0'
        style={{
          background:
            theme === 'system'
              ? 'var(--accent-tertiary)'
              : resolvedTheme === 'dark'
                ? 'var(--accent-secondary)'
                : 'var(--accent-primary)',
        }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
