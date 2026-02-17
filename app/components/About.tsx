'use client';

import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'About',
    intro:
      'Creative Graphic Designer specializing in AI-assisted visual design. I leverage cutting-edge AI tools like MidJourney, DALL·E, and Canva AI to create stunning visuals efficiently. My approach combines artistic vision with AI technology to deliver professional designs that stand out.',
    skills: {
      branding: {
        title: 'Brand Identity',
        desc: 'AI-enhanced logo design, brand guidelines, visual systems',
        icon: '🎨',
      },
      digital: {
        title: 'Digital Design',
        desc: 'Social media graphics, web design, digital advertising with AI tools',
        icon: '💻',
      },
      creative: {
        title: 'AI-Powered Creativity',
        desc: 'MidJourney, DALL·E, Canva AI, Runway for visual content',
        icon: '🤖',
      },
      tools: {
        title: 'Design Tools',
        desc: 'Adobe Suite, Figma, AI platforms, motion graphics',
        icon: '🛠️',
      },
    },
    achievements: [
      '20+ AI-Assisted Projects',
      '50+ Digital Designs Created',
      'Multiple AI Design Tools Mastered',
      'Growing Creative Portfolio',
    ],
  },
  ar: {
    title: 'عني',
    intro:
      'مصمم جرافيك مبدع متخصص في التصميم البصري المدعم بالذكاء الاصطناعي. أستخدم أدوات الذكاء الاصطناعي المتقدمة مثل MidJourney و DALL·E و Canva AI لإنشاء تصاميم مذهلة بكفاءة. تجمع طريقتي بين الرؤية الفنية وتكنولوجيا الذكاء الاصطناعي لتقديم تصاميم احترافية مميزة.',
    skills: {
      branding: {
        title: 'الهوية البصرية',
        desc: 'تصميم شعارات معزز بالذكاء الاصطناعي، إرشادات، أنظمة بصرية',
        icon: '🎨',
      },
      digital: {
        title: 'التصميم الرقمي',
        desc: 'رسومات السوشيال ميديا، تصميم الويب، الإعلان الرقمي بأدوات الذكاء الاصطناعي',
        icon: '💻',
      },
      creative: {
        title: 'الإبداع المدعم بالذكاء الاصطناعي',
        desc: 'MidJourney، DALL·E، Canva AI، Runway للمحتوى البصري',
        icon: '🤖',
      },
      tools: {
        title: 'أدوات التصميم',
        desc: 'Adobe Suite، Figma، منصات الذكاء الاصطناعي، الرسوم المتحركة',
        icon: '🛠️',
      },
    },
    achievements: [
      'أكثر من 20 مشروع مدعم بالذكاء الاصطناعي',
      'أكثر من 50 تصميم رقمي',
      'إتقان أدوات تصميم متعددة بالذكاء الاصطناعي',
      'معرض إبداعي متنامٍ',
    ],
  },
};

export default function About() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  return (
    <section
      dir={dir}
      id='about'
      className='py-24 bg-slate-950 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center text-purple-400 mb-16'>
          {copy.title}
        </h2>

        <div className='max-w-3xl mx-auto text-center mb-16'>
          <p className='text-lg text-gray-300 leading-relaxed'>{copy.intro}</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {Object.values(copy.skills).map((skill, i) => (
            <div
              key={i}
              className='bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all hover:scale-105'
            >
              <div className='text-3xl mb-3'>{skill.icon}</div>
              <h3 className='text-lg font-semibold text-purple-300 mb-2'>
                {skill.title}
              </h3>
              <p className='text-sm text-gray-400'>{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className='bg-slate-900 p-8 rounded-2xl border border-slate-800'>
          <h3 className='text-xl font-semibold text-purple-300 mb-6'>
            {lang === 'en' ? 'Key Achievements' : 'الإنجازات الرئيسية'}
          </h3>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {copy.achievements.map((achievement, i) => (
              <div
                key={i}
                className='text-center'
              >
                <div className='text-2xl font-bold text-white mb-1'>
                  {achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
