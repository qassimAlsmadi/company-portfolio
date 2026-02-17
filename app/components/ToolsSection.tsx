'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Tools I Use',
    description: 'Meta Business Suite, CapCut, Canva, Notion, GA4 basics',
    tools: [
      {
        name: 'Meta Business Suite',
        desc: 'Scheduling, insights, and community management',
      },
      { name: 'CapCut', desc: 'Quick video edits and Reels production' },
      { name: 'Canva', desc: 'Visual templates and brand assets' },
      { name: 'Notion', desc: 'Content calendars and reporting dashboards' },
      {
        name: 'Google Analytics 4',
        desc: 'Basic traffic and conversion tracking',
      },
    ],
  },
  ar: {
    title: 'الأدوات التي أستخدمها',
    description: 'Meta Business Suite، CapCut، Canva، Notion، GA4 أساسيات',
    tools: [
      { name: 'Meta Business Suite', desc: 'الجدولة، الرؤى، وإدارة المجتمع' },
      { name: 'CapCut', desc: 'تعديل الفيديو السريع وإنتاج ريلز' },
      { name: 'Canva', desc: 'قوالب بصرية وأصول العلامة التجارية' },
      { name: 'Notion', desc: 'تقويمات المحتوى ولوحات التقارير' },
      { name: 'Google Analytics 4', desc: 'تتبع الزيارات والتحويلات الأساسية' },
    ],
  },
};

export default function ToolsSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      dir={dir}
      id='tools'
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {copy.title}
        </h2>
        <p className='text-center text-gray-300 mb-10'>{copy.description}</p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {copy.tools.map((tool) => (
            <div
              key={tool.name}
              className='bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'
            >
              <div className='text-lg font-semibold text-white'>
                {tool.name}
              </div>
              <div className='mt-2 text-sm text-gray-400'>{tool.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
