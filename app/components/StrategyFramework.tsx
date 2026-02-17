'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Content Strategy Framework',
    steps: [
      {
        title: '1) Diagnose',
        desc: 'Audit the account, audience, competitors, and best-performing content. Define baseline KPIs.',
      },
      {
        title: '2) Design',
        desc: 'Create pillars, formats, hook library, and monthly content plan aligned to brand identity and goals.',
      },
      {
        title: '3) Execute',
        desc: 'Coordinate with design/marketing, publish consistently, and keep deadlines—remote-ready workflow.',
      },
      {
        title: '4) Improve',
        desc: 'Weekly reporting, insights, tests (hooks/CTAs), and iteration based on real performance signals.',
      },
    ],
    tracking: {
      title: 'What I track weekly',
      list: [
        'Reach, impressions, watch-time, saves, shares',
        'Engagement rate by format (Reels vs. Carousel vs. Static)',
        'Profile actions (visits, link clicks, DMs) and content-to-inquiry rate',
        'Top hooks and CTAs (what to repeat / what to cut)',
      ],
    },
  },
  ar: {
    title: 'إطار استراتيجية المحتوى',
    steps: [
      {
        title: '1) التشخيص',
        desc: 'مراجعة الحساب، الجمهور، المنافسين، وأفضل المحتوى أداءً. تحديد مؤشرات الأداء الأساسية.',
      },
      {
        title: '2) التصميم',
        desc: 'إنشاء الأعمدة، الصيغ، مكتبة الهوكات، وخطة محتوى شهرية متوافقة مع هوية العلامة والأهداف.',
      },
      {
        title: '3) التنفيذ',
        desc: 'التنسيق مع التصميم/التسويق، النشر بانتظام، والالتزام بالمواعيد النهائية—سير عمل جاهز للعمل عن بعد.',
      },
      {
        title: '4) التحسين',
        desc: 'تقارير أسبوعية، رؤى، اختبارات (هوكات/CTAs)، وتكرار بناءً على إشارات الأداء الحقيقية.',
      },
    ],
    tracking: {
      title: 'ماذا أتتبع أسبوعيًا',
      list: [
        'الوصول، الانطباعات، وقت المشاهدة، الحفظ، المشاركات',
        'معدل التفاعل حسب الصيغة (ريلز مقابل كاروسيل مقابل ثابت)',
        'إجراءات الملف الشخصي (زيارات، نقرات الروابط، الرسائل) ومعدل المحتوى إلى الاستفسار',
        'أفضل الهوكات والـ CTAs (ماذا نكرر / ماذا نقطع)',
      ],
    },
  },
};

export default function StrategyFramework() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  return (
    <section
      dir={dir}
      id='framework'
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {copy.title}
        </h2>

        <div className='grid md:grid-cols-4 gap-6'>
          {copy.steps.map((step) => (
            <div
              key={step.title}
              className='bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'
            >
              <div className='text-indigo-300 font-semibold'>{step.title}</div>
              <p className='mt-2 text-gray-400 text-sm leading-relaxed'>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-10 bg-slate-950 p-8 rounded-2xl border border-slate-800'>
          <h3 className='text-xl font-semibold text-indigo-300'>
            {copy.tracking.title}
          </h3>
          <ul className='mt-4 text-gray-400 text-sm space-y-2 list-disc pl-5'>
            {copy.tracking.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
