'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Case Studies (Before / After)',
    case1: {
      title: 'Instagram Growth — Fashion Brand',
      duration: '30 days',
      objective:
        'Objective: increase reach and engagement while keeping brand identity consistent.',
      metrics: ['Reach', 'Engagement rate', 'Saves'],
      actions: [
        'Content pillars + weekly content mix',
        'Reels hooks tailored to trends + audience pain points',
        'Caption frameworks (Hook → Value → Proof → CTA)',
        'Weekly reporting + iteration based on performance',
      ],
      note: 'Replace the KPIs with real metrics + add screenshots in the Analytics section.',
    },
    case2: {
      title: 'Lead-Gen Content System — Digital Agency',
      duration: 'Monthly',
      objective:
        'Objective: create a repeatable monthly plan to drive inquiries and build authority.',
      metrics: ['Profile visits', 'Inbound DMs', 'Conversion'],
      actions: [
        'Offer positioning + proof-led content',
        'Carousel templates + CTA testing',
        'Weekly check-ins with the team (remote)',
        'Reporting dashboard and action plan',
      ],
      note: 'Add “before/after” screenshots once you select a real client example.',
    },
  },
  ar: {
    title: 'دراسات الحالة (قبل / بعد)',
    case1: {
      title: 'نمو انستغرام — علامة أزياء',
      duration: '30 يوم',
      objective:
        'الهدف: زيادة الوصول والتفاعل مع الحفاظ على هوية العلامة التجارية.',
      metrics: ['الوصول', 'معدل التفاعل', 'الحفظ'],
      actions: [
        'أعمدة المحتوى + مزيج أسبوعي',
        'هوكات ريلز مخصصة للتريندز + نقاط الألم',
        'إطارات الكابتشن (Hook → Value → Proof → CTA)',
        'تقارير أسبوعية + تحسينات بناءً على الأداء',
      ],
      note: 'استبدل المقاييس بأرقام حقيقية + أضف لقطات شاشة في قسم التحليلات.',
    },
    case2: {
      title: 'نظام توليد العملاء — وكالة رقمية',
      duration: 'شهري',
      objective: 'الهدف: بناء خطة شهرية متكررة لجذب الاستفسارات وبناء السلطة.',
      metrics: ['زيارات الملف الشخصي', 'الرسائل الواردة', 'التحويل'],
      actions: [
        'تحديد العرض + محتوى قائم على الإثباتات',
        'قوالب كاروسيل + اختبار CTA',
        'اجتماعات أسبوعية مع الفريق (عن بعد)',
        'لوحة تقارير وخطة عمل',
      ],
      note: 'أضف لقطات “قبل/بعد” عند اختيار مثيل عميل حقيقي.',
    },
  },
};

export default function CaseStudies() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  return (
    <section
      dir={dir}
      id='case-studies'
      className='py-24 bg-slate-950 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {copy.title}
        </h2>

        <div className='grid md:grid-cols-2 gap-10'>
          <div className='bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'>
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-xl font-semibold text-indigo-300'>
                {copy.case1.title}
              </h3>
              <span className='text-xs text-slate-300/80 border border-white/10 bg-white/5 rounded-full px-3 py-1'>
                {copy.case1.duration}
              </span>
            </div>

            <p className='text-gray-300 mt-4'>{copy.case1.objective}</p>

            <div className='mt-6 grid sm:grid-cols-3 gap-4'>
              {copy.case1.metrics.map((m, i) => (
                <div
                  key={i}
                  className='rounded-xl border border-white/10 bg-white/5 p-4'
                >
                  <div className='text-xs text-gray-400'>{m}</div>
                  <div className='mt-1 text-lg font-semibold text-white'>
                    +XX%
                  </div>
                </div>
              ))}
            </div>

            <ul className='mt-6 text-gray-400 space-y-2 text-sm list-disc pl-5'>
              {copy.case1.actions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <p className='mt-6 text-xs text-gray-500'>{copy.case1.note}</p>
          </div>

          <div className='bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'>
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-xl font-semibold text-indigo-300'>
                {copy.case2.title}
              </h3>
              <span className='text-xs text-slate-300/80 border border-white/10 bg-white/5 rounded-full px-3 py-1'>
                {copy.case2.duration}
              </span>
            </div>

            <p className='text-gray-300 mt-4'>{copy.case2.objective}</p>

            <div className='mt-6 grid sm:grid-cols-3 gap-4'>
              {copy.case2.metrics.map((m, i) => (
                <div
                  key={i}
                  className='rounded-xl border border-white/10 bg-white/5 p-4'
                >
                  <div className='text-xs text-gray-400'>{m}</div>
                  <div className='mt-1 text-lg font-semibold text-white'>
                    +XX%
                  </div>
                </div>
              ))}
            </div>

            <ul className='mt-6 text-gray-400 space-y-2 text-sm list-disc pl-5'>
              {copy.case2.actions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>

            <p className='mt-6 text-xs text-gray-500'>{copy.case2.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
