'use client';

import { useLang } from './LangProvider';

const captions = [
  {
    title: {
      en: 'Authority + Value',
      ar: 'سلطة + قيمة',
    },
    caption: {
      en: 'Most brands don’t have a content problem — they have a clarity problem.\n\nHere’s a simple fix: choose 3 content pillars, build a weekly mix, and repeat what performs.\n\nIf you want my monthly planning checklist, comment “PLAN”.',
      ar: 'معظم العلامات التجارية ليس لديها مشكلة محتوى — لديها مشكلة وضوح.\n\nالحل البسيط: اختر 3 أعمدة محتوى، ابنِ مزيجًا أسبوعيًا، وكرر ما ينجح.\n\nلو تريد قائمة التخطيط الشهرية الخاصة بي، علّق “خطة”.',
    },
  },
  {
    title: {
      en: 'Hook → Problem → Solution → CTA',
      ar: 'هوك → مشكلة → حل → CTA',
    },
    caption: {
      en: 'Stop posting randomly.\n\nIf your content doesn’t have a goal, it can’t have a result.\n\nTry this: 1) pick one KPI, 2) match it to a format (Reels/Carousel), 3) write a single clear CTA.\n\nWant me to audit your last 10 posts? DM me “AUDIT”.',
      ar: 'توقف عن النشر العشوائي.\n\nلو محتواك ليس لديه هدف، لن يكون له نتيجة.\n\nجرب هذا: 1) اختر مؤشر أداء واحد، 2) طابقه مع صيغة (ريلز/كاروسيل)، 3) اكتب CTA واحد واضح.\n\nتريدني أراجع آخر 10 منشورات لك؟ رسلني “مراجعة”.',
    },
  },
  {
    title: {
      en: 'Storytelling + Proof',
      ar: 'سرد القصص + إثبات',
    },
    caption: {
      en: 'We tested two hooks. Same topic. Same visuals. Different first line.\n\nResult: the stronger hook got 2.1x saves and higher watch-time.\n\nSmall changes compound.\n\nSave this if you’re building a content system that performs.',
      ar: 'اختبرنا هوكين. نفس الموضوع. نفس الصور. سطر مختلف.\n\nالنتيجة: الهوك الأقوى حصل على 2.1x حفظ ووقت مشاهدة أعلى.\n\nالتغييرات الصغيرة تتراكم.\n\nاحفظ هذا لو تبني نظام محتوى يؤدي.',
    },
  },
];

export default function SampleCaptions() {
  const { lang, dir } = useLang();
  return (
    <section
      dir={dir}
      id='captions'
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-indigo-400 mb-16'>
          {lang === 'en'
            ? 'Sample Captions (Copywriting)'
            : 'نماذج كابتشن (كتابة إعلانية)'}
        </h2>

        <div className='grid md:grid-cols-3 gap-6'>
          {captions.map((item, i) => (
            <div
              key={i}
              className='bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500 transition'
            >
              <h3 className='text-indigo-300 font-semibold'>
                {item.title[lang]}
              </h3>
              <p className='mt-4 text-gray-300 text-sm whitespace-pre-line leading-relaxed'>
                {item.caption[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
