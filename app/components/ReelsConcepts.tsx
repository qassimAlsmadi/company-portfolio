'use client';

import { useLang } from './LangProvider';

const reelsConcepts = [
  {
    title: {
      en: 'Hook-driven “Myth vs Fact” Reel',
      ar: 'ريلز “أسطورة مقابل حقيقة” مبني على الهوك',
    },
    hook: {
      en: 'Stop doing this if you want better engagement…',
      ar: 'توقف عن فعل هذا لو تريد تفاعل أفضل…',
    },
    structure: {
      en: 'Hook → 3 fast points → on-screen proof → CTA',
      ar: 'هوك → 3 نقاط سريعة → دليل على الشاشة → CTA',
    },
  },
  {
    title: {
      en: 'Trend Adaptation (brand-safe)',
      ar: 'تكيف مع التريندز (آمن للبراند)',
    },
    hook: {
      en: 'POV: you’re running social media and…',
      ar: 'نقطة نظر: أنت تدير السوشيال ميديا و…',
    },
    structure: {
      en: 'Trend audio → brand angle → value → CTA',
      ar: 'صوت تريند → زاوية البراند → قيمة → CTA',
    },
  },
  {
    title: {
      en: 'Behind-the-scenes “How we plan a month”',
      ar: 'خلف الكواليس “كيف نخطط لشهر”',
    },
    hook: {
      en: 'Here’s how we build a monthly content plan in 30 minutes',
      ar: 'هكذا نبني خطة محتوى شهري في 30 دقيقة',
    },
    structure: {
      en: 'Process → template → example → CTA',
      ar: 'عملية → قالب → مثال → CTA',
    },
  },
  {
    title: {
      en: 'Case study mini-story',
      ar: 'قصة مصغرة لدراسة حالة',
    },
    hook: {
      en: 'We changed one thing and reach jumped…',
      ar: 'غيرنا شيئًا واحدً وقفز الوصول…',
    },
    structure: {
      en: 'Before → change → after → lesson → CTA',
      ar: 'قبل → تغيير → بعد → درس → CTA',
    },
  },
  {
    title: {
      en: 'Comment-to-get template',
      ar: 'قالب “علّق لتأخذ”',
    },
    hook: {
      en: 'Comment “PLAN” and I’ll send the checklist',
      ar: 'علّق “خطة” وأرسل لك قائمة التحقق',
    },
    structure: {
      en: 'Value → social proof → CTA',
      ar: 'قيمة → إثبات اجتماعي → CTA',
    },
  },
  {
    title: {
      en: 'Offer clarity Reel',
      ar: 'ريلز وضوح العرض',
    },
    hook: {
      en: 'If your audience doesn’t understand your offer, they won’t buy',
      ar: 'لو جمهورك لا يفهم عرضك، لن يشتري',
    },
    structure: {
      en: 'Problem → fix → example → CTA',
      ar: 'مشكلة → حل → مثال → CTA',
    },
  },
];

export default function ReelsConcepts() {
  const { lang, dir } = useLang();
  return (
    <section
      dir={dir}
      id='reels'
      className='py-24 bg-slate-950 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {lang === 'en'
            ? 'Reels Concepts (Trend + Brand)'
            : 'أفكار ريلز (تريندز + براند)'}
        </h2>

        <div className='grid md:grid-cols-2 gap-8'>
          {reelsConcepts.map((item, i) => (
            <div
              key={i}
              className='bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'
            >
              <h3 className='text-xl font-semibold text-indigo-300'>
                {item.title[lang]}
              </h3>
              <p className='mt-4 text-gray-300 text-sm'>
                <span className='text-gray-400'>
                  {lang === 'en' ? 'Hook:' : 'الهوك:'}
                </span>{' '}
                {item.hook[lang]}
              </p>
              <p className='mt-2 text-gray-300 text-sm'>
                <span className='text-gray-400'>
                  {lang === 'en' ? 'Structure:' : 'الهيكل:'}
                </span>{' '}
                {item.structure[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
