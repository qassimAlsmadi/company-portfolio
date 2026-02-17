'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    cvBtn: 'Download CV',
    showcaseBtn: 'View Showcase',
    cvNote: 'PDF • 2+ years experience • Remote-ready',
    showcaseNote: 'Live project • Netlify • Full stack',
  },
  ar: {
    cvBtn: 'تحميل السيرة الذاتية',
    showcaseBtn: 'عرض المعرض',
    cvNote: 'PDF • أكثر من سنتين خبرة • جاهز للعمل عن بعد',
    showcaseNote: 'مشروع مباشر • Netlify • Full stack',
  },
};

export default function CVAndShowcase() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      dir={dir}
      className='py-16 bg-slate-950 text-white px-6'
    >
      <div className='max-w-6xl mx-auto text-center'>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <a
            href='/Qasim_Al_Smadi_CV.pdf'
            download
            className='inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-slate-950 bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
          >
            {copy.cvBtn}
          </a>
          <a
            href='https://qasim-al-smadi.netlify.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
          >
            {copy.showcaseBtn}
          </a>
        </div>
        <p className='mt-4 text-xs text-gray-500'>
          <span className='hidden sm:inline'>{copy.cvNote} • </span>
          <span>{copy.showcaseNote}</span>
        </p>
      </div>
    </section>
  );
}
