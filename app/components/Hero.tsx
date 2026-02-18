'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useLang } from './LangProvider';

const t = {
  en: {
    badge: 'Graphic Designer | Visual Storyteller | AI-Assisted Designer',
    title: 'Qasim Al-Smadi',
    subtitle: 'Crafting Visual Stories With AI-Powered Creativity',
    description:
      'Creative Graphic Designer leveraging AI tools to produce stunning visuals efficiently. Specializing in brand identity, digital design, and motion graphics. I transform ideas into compelling visual experiences using cutting-edge AI technology.',
    cta1: 'View My Work',
    cta2: 'Contact Me',
    tags: [
      'AI-Enhanced Design',
      'Brand Identity',
      'Digital Art',
      'Motion Graphics',
    ],
  },
  ar: {
    badge: 'مصمم جرافيك | راوي قصص بصرية | مصمم مدعم بالذكاء الاصطناعي',
    title: 'قاسم الصمادي',
    subtitle: 'أصنع قصصًا بصرية بإبداع معزز بالذكاء الاصطناعي',
    description:
      'مصمم جرافيك مبدع يستخدم أدوات الذكاء الاصطناعي لإنتاج تصاميم مذهلة بكفاءة. متخصص في الهوية البصرية، التصميم الرقمي، والرسوم المتحركة. أحول الأفكار إلى تجارب بصرية جذابة باستخدام أحدث تقنيات الذكاء الاصطناعي.',
    cta1: 'شاهد أعمالي',
    cta2: 'تواصل معي',
    tags: [
      'تصميم معزز بالذكاء الاصطناعي',
      'الهوية البصرية',
      'الفن الرقمي',
      'الرسوم المتحركة',
    ],
  },
};

export default function Hero() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      dir={dir}
      className='relative min-h-[92vh] pt-24 flex items-center overflow-hidden'
    >
      <motion.div
        aria-hidden='true'
        style={prefersReducedMotion ? undefined : { y }}
        className='absolute inset-0 -z-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900'
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 -z-10'
      >
        <div className='absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-3xl' />
        <div className='absolute -bottom-40 right-1/3 h-[520px] w-[520px] rounded-full bg-pink-500/10 blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[28px_28px] opacity-30' />
      </div>

      <div className='max-w-6xl mx-auto w-full px-4 sm:px-6'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Text Content */}
          <div className='max-w-3xl'>
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm text-slate-200'
            >
              <span className='h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_24px_rgba(168,85,247,0.55)]' />
              {copy.badge}
            </motion.p>

            <motion.h1
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className='mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white'
            >
              <span className='bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent'>
                {copy.title}
              </span>
              <span className='block mt-3 text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200/90'>
                {copy.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
              className='mt-6 text-base sm:text-lg text-slate-200/80 leading-relaxed max-w-2xl'
            >
              {copy.description}
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className='mt-8 flex flex-col sm:flex-row gap-3'
            >
              <a
                href='#projects'
                className='inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-slate-950 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 hover:from-purple-200 hover:via-pink-200 hover:to-indigo-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
              >
                {copy.cta1}
              </a>
              <a
                href='#contact'
                className='inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70'
              >
                {copy.cta2}
              </a>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
              className='mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300/80'
            >
              {copy.tags.map((tag, i) => (
                <span key={i}>
                  {tag}
                  {i < copy.tags.length - 1 && (
                    <span className='text-white/25 mx-2'>/</span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={
              prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            style={prefersReducedMotion ? undefined : { y }}
            className='relative'
          >
            {/* Glowing Frame */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-60 animate-pulse' />

            {/* Rotating Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-1'
            >
              <div className='w-full h-full rounded-full bg-slate-950' />
            </motion.div>

            {/* Profile Image Container */}
            <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group'>
              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />

              {/* Profile Image */}
              <img
                src='/images/profile.jpg'
                alt='Qasim Al-Smadi - Backend Developer & AI Automation Specialist'
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                loading='lazy'
                decoding='async'
                onError={(e) => {
                  // Fallback to a placeholder if image not found
                  const target = e.target as HTMLImageElement;
                  target.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIyMDAiIGZpbGw9IiMxRTI5M0IiLz48dGV4dCB4PSIyMDAiIHk9IjIxMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UVwzYXNpbTwvdGV4dD48L3N2Zz4=';
                }}
              />

              {/* Floating Particles */}
              <div className='absolute inset-0 pointer-events-none'>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className='absolute w-2 h-2 bg-purple-400 rounded-full'
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-300 text-2xl border border-purple-500/30'
            >
              🎨
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className='absolute -bottom-8 -left-8 w-16 h-16 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-300 text-2xl border border-pink-500/30'
            >
              🤖
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
