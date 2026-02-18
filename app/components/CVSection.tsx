'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const t = {
  en: {
    title: 'Professional CV',
    subtitle:
      'Download my complete CV to learn more about my experience and skills',
    download: 'Download CV',
    viewOnline: 'View Online',
    features: [
      'AI-Assisted Design Experience',
      'Brand Identity Projects',
      'Digital Design Portfolio',
      'Technical Skills & Tools',
    ],
  },
  ar: {
    title: 'السيرة الذاتية',
    subtitle: 'حمل سيرتي الذاتية الكاملة للتعرف على خبرتي ومهاراتي',
    download: 'تحميل السيرة الذاتية',
    viewOnline: 'عرض أونلاين',
    features: [
      'خبرة في التصميم المدعم بالذكاء الاصطناعي',
      'مشاريع الهوية البصرية',
      'معرض التصميم الرقمي',
      'المهارات التقنية والأدوات',
    ],
  },
};

export default function CVSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Qasim_Al_Smadi_CV.pdf';
    link.download = 'Qasim_Al_Smadi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id='cv'
      dir={dir}
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mb-4'
          >
            {copy.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-lg text-gray-300 max-w-2xl mx-auto'
          >
            {copy.subtitle}
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - CV Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='relative'
          >
            {/* CV Preview Frame */}
            <div className='relative bg-slate-950 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl'>
              {/* Glowing Effect */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-indigo-600/20 rounded-2xl blur-xl' />

              {/* PDF Icon */}
              <div className='relative z-10 p-8 flex flex-col items-center justify-center min-h-[400px]'>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg'
                >
                  <FaFilePdf className='text-4xl text-white' />
                </motion.div>

                <h3 className='text-xl font-semibold text-white mb-2'>
                  Qasim Al-Smadi CV
                </h3>
                <p className='text-gray-400 text-sm mb-6'>
                  {lang === 'en' ? 'PDF Format • 2026' : 'صيغة PDF • 2026'}
                </p>

                {/* Quick Preview Features */}
                <div className='space-y-2 text-left w-full max-w-xs'>
                  {copy.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                      className='flex items-center gap-3 text-sm text-gray-300'
                    >
                      <div className='w-2 h-2 bg-purple-400 rounded-full shrink-0' />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Actions and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group'
            >
              <FaDownload className='text-xl group-hover:animate-bounce' />
              {copy.download}
            </motion.button>

            {/* View Online Button */}
            <motion.a
              href='https://qasim-al-smadi.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3 border border-slate-600'
            >
              <FaExternalLinkAlt className='text-xl' />
              {copy.viewOnline}
            </motion.a>

            {/* Info Cards */}
            <div className='grid grid-cols-2 gap-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-4 rounded-xl border border-slate-700'
              >
                <div className='text-3xl mb-2'>📄</div>
                <div className='text-sm font-medium text-white mb-1'>
                  {lang === 'en' ? 'Format' : 'الصيغة'}
                </div>
                <div className='text-xs text-gray-400'>PDF Document</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-4 rounded-xl border border-slate-700'
              >
                <div className='text-3xl mb-2'>🎨</div>
                <div className='text-sm font-medium text-white mb-1'>
                  {lang === 'en' ? 'Focus' : 'التركيز'}
                </div>
                <div className='text-xs text-gray-400'>
                  {lang === 'en' ? 'AI Design' : 'التصميم بالذكاء الاصطناعي'}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-4 rounded-xl border border-slate-700'
              >
                <div className='text-3xl mb-2'>🚀</div>
                <div className='text-sm font-medium text-white mb-1'>
                  {lang === 'en' ? 'Status' : 'الحالة'}
                </div>
                <div className='text-xs text-gray-400'>
                  {lang === 'en' ? 'Updated 2026' : 'محدث 2026'}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className='bg-slate-800 p-4 rounded-xl border border-slate-700'
              >
                <div className='text-3xl mb-2'>🌐</div>
                <div className='text-sm font-medium text-white mb-1'>
                  {lang === 'en' ? 'Language' : 'اللغة'}
                </div>
                <div className='text-xs text-gray-400'>
                  {lang === 'en' ? 'Bilingual' : 'ثنائي اللغة'}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
