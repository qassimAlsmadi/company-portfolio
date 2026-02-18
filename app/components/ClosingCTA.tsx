'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Let’s Grow Your Brand',
    description:
      'If you’re hiring a Social Media Specialist who can ship consistently, collaborate remotely, and improve performance through weekly insights—let’s talk.',
    cta1: 'Contact me',
    cta2: 'Review case studies',
    note: 'Remote-ready. Deadline-driven. Outcome-focused.',
  },
  ar: {
    title: 'لننمو علامتك التجارية',
    description:
      'لو توظف أخصائي وسائل التواصل الاجتماعي الذي يمكنه الشحن بانتظام، التعاون عن بعد، وتحسين الأداء عبر رؤى أسبوعية—لنتحدث.',
    cta1: 'تواصل معي',
    cta2: 'راجع دراسات الحالة',
    note: 'جاهز للعمل عن بعد. ملتزم بالمواعيد النهائية. مركز على النتائج.',
  },
};

export default function ClosingCTA() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  return (
    <section
      dir={dir}
      className='py-24 px-6 text-white bg-slate-900'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-10 sm:p-12 overflow-hidden relative'>
          <div
            aria-hidden='true'
            className='absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl'
          />
          <div
            aria-hidden='true'
            className='absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl'
          />

          <div className='relative max-w-3xl'>
            <h2 className='text-3xl sm:text-5xl font-semibold tracking-tight'>
              {copy.title}
            </h2>
            <p className='mt-5 text-slate-200/80 leading-relaxed'>
              {copy.description}
            </p>

            <div className='mt-8 flex flex-col sm:flex-row gap-3'>
              <a
                href='#contact'
                className='inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-slate-950 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 hover:from-indigo-200 hover:via-purple-200 hover:to-pink-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
              >
                {copy.cta1}
              </a>
              <a
                href='#case-studies'
                className='inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white border border-white/15 bg-white/5 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
              >
                {copy.cta2}
              </a>
            </div>

            <p className='mt-6 text-xs text-slate-300/80'>{copy.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
