'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLang } from './LangProvider';
import ThemeToggle from './ThemeToggle';

type NavItem = {
  href: string;
  label: { en: string; ar: string };
};

export default function Navbar() {
  const { lang, setLang, dir } = useLang();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(
    () => [
      { href: '#about', label: { en: 'About', ar: 'عني' } },
      { href: '#services', label: { en: 'Services', ar: 'الخدمات' } },
      { href: '#projects', label: { en: 'Projects', ar: 'المشاريع' } },
      { href: '#skills', label: { en: 'Skills', ar: 'المهارات' } },
      { href: '#experience', label: { en: 'Experience', ar: 'الخبرة' } },
      { href: '#cv', label: { en: 'CV', ar: 'السيرة الذاتية' } },
      { href: '#contact', label: { en: 'Contact', ar: 'التواصل' } },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <motion.nav
      aria-label='Primary'
      dir={dir}
      initial={prefersReducedMotion ? false : { y: -24, opacity: 0 }}
      animate={prefersReducedMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-slate-950/60 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='h-16 flex items-center justify-between'>
          <a
            href='#'
            className='font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 rounded-md'
          >
            <span className='bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent'>
              Qasim Al-Smadi
            </span>
          </a>

          <div className='hidden md:flex items-center gap-2'>
            <ThemeToggle />
            <ul className='flex items-center gap-1'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='px-3 py-2 text-sm text-slate-200/90 hover:text-white hover:bg-white/5 rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
                  >
                    {item.label[lang]}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href='#contact'
              className='ml-2 inline-flex items-center justify-center rounded-md px-3.5 py-2 text-sm font-medium text-slate-950 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
            >
              {lang === 'en' ? "Let's talk" : 'لنتحدث'}
            </a>
            <button
              type='button'
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className='ml-2 inline-flex items-center justify-center rounded-md px-3 py-2 text-xs font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          <div className='md:hidden flex items-center gap-2'>
            <ThemeToggle />
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:text-white hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls='mobile-nav'
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                aria-hidden='true'
                className='text-xl leading-none'
              >
                {mobileOpen ? '×' : '☰'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id='mobile-nav'
            dir={dir}
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={
              prefersReducedMotion ? undefined : { height: 'auto', opacity: 1 }
            }
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur-xl'
          >
            <div className='max-w-6xl mx-auto px-4 sm:px-6 py-3'>
              <ul className='flex flex-col gap-1'>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className='block px-3 py-2.5 rounded-md text-sm text-slate-200 hover:text-white hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
                    >
                      {item.label[lang]}
                    </a>
                  </li>
                ))}
                <li className='pt-1'>
                  <button
                    type='button'
                    onClick={() => setMobileOpen(false)}
                    className='block text-center rounded-md px-3.5 py-2.5 text-sm font-medium text-slate-950 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
                  >
                    {lang === 'en' ? "Let's talk" : 'لنتحدث'}
                  </button>
                </li>
                <li className='pt-1'>
                  <button
                    type='button'
                    onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                    className='w-full text-center rounded-md px-3.5 py-2.5 text-sm font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
                  >
                    {lang === 'en' ? 'العربية' : 'English'}
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
