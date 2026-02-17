'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Analytics & Insights (Screenshots)',
    intro:
      'Add screenshots from Instagram Insights (Reach, Watch-time, Saves, and Profile Actions). If you can’t share real client data, use anonymized screenshots.',
    labels: ['Reach & Impressions', 'Reels Watch-time', 'Profile Actions'],
    placeholder: 'Drop a screenshot here later.',
    focusTitle: 'What hiring managers care about',
    focusList: [
      'Can you explain why a post performed?',
      'Do you turn insights into a clear next action?',
      'Do you track trends without breaking brand identity?',
      'Can you communicate results clearly to a remote team?',
    ],
  },
  ar: {
    title: 'التحليلات والرؤى (لقطات شاشة)',
    intro:
      'أضف لقطات شاشة من Instagram Insights (الوصول، وقت المشاهدة، الحفظ، وإجراءات الملف الشخصي). لو لا يمكنك مشاركة بيانات العميل الحقيقية، استخدم لقطات شاشة مجهولة المصدر.',
    labels: ['الوصول والانطباعات', 'وقت مشاهدة ريلز', 'إجراءات الملف الشخصي'],
    placeholder: 'اسقط لقطة شاشة هنا لاحقًا.',
    focusTitle: 'ماذا يهم مديري التوظيف',
    focusList: [
      'هل يمكنك شرح سبب أداء منشور؟',
      'هل تحول الرؤى إلى إجراء واضح؟',
      'هل تتتبع التريندز دون كسر هوية العلامة؟',
      'هل يمكنك توصيل النتائج بوضوح لفريق عن بعد؟',
    ],
  },
};

export default function AnalyticsInsights() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  return (
    <section
      dir={dir}
      id='analytics'
      className='py-24 bg-slate-950 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {copy.title}
        </h2>

        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-gray-300 text-lg leading-relaxed'>{copy.intro}</p>

          <div className='mt-10 grid sm:grid-cols-3 gap-6'>
            {copy.labels.map((label) => (
              <div
                key={label}
                className='rounded-2xl border border-white/10 bg-white/5 p-8 text-left'
              >
                <div className='text-sm text-gray-300 font-medium'>{label}</div>
                <div className='mt-6 h-24 rounded-xl border border-dashed border-white/20 bg-black/20' />
                <div className='mt-4 text-xs text-gray-500'>
                  {copy.placeholder}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-left'>
            <h3 className='text-xl font-semibold text-indigo-300'>
              {copy.focusTitle}
            </h3>
            <ul className='mt-4 text-gray-400 text-sm space-y-2 list-disc pl-5'>
              {copy.focusList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
