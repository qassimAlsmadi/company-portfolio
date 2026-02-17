'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Services',
    subtitle: 'AI-Powered Design Solutions for Modern Brands',
    services: [
      {
        title: 'AI-Enhanced Brand Identity',
        desc: 'Complete brand identity design using AI tools for logos, color palettes, typography, and brand guidelines that make your brand stand out.',
        icon: '🎨',
        features: [
          'AI Logo Design',
          'Brand Guidelines',
          'Color Systems',
          'Typography',
        ],
      },
      {
        title: 'Digital Design with AI',
        desc: 'Stunning digital designs created with AI assistance for social media, web, and advertising that capture attention and drive engagement.',
        icon: '💻',
        features: [
          'AI Social Media Graphics',
          'Web Design',
          'Digital Ads',
          'Email Templates',
        ],
      },
      {
        title: 'AI-Powered Creative Direction',
        desc: 'Strategic creative direction using AI tools to ensure visual consistency and brand excellence across all platforms.',
        icon: '🤖',
        features: [
          'AI Art Direction',
          'Creative Strategy',
          'Visual Storytelling',
          'Campaign Concepts',
        ],
      },
      {
        title: 'AI-Assisted Video Content',
        desc: 'Engaging video content and motion graphics created with AI tools that bring your brand story to life and captivate your audience.',
        icon: '🎬',
        features: [
          'AI Motion Graphics',
          'Video Editing',
          'Animation',
          'Visual Effects',
        ],
      },
      {
        title: 'AI-Generated Illustration',
        desc: 'Custom illustrations and digital artwork created with AI tools that add personality and uniqueness to your brand communications.',
        icon: '🖌️',
        features: [
          'AI Digital Illustration',
          'Character Design',
          'Infographics',
          'Custom Artwork',
        ],
      },
      {
        title: 'AI-Enhanced Advertising',
        desc: 'Compelling advertising materials and marketing collateral created with AI assistance that drive conversions and build brand recognition.',
        icon: '📢',
        features: [
          'AI Print Ads',
          'Brochures',
          'Posters',
          'Marketing Materials',
        ],
      },
    ],
  },
  ar: {
    title: 'الخدمات',
    subtitle: 'حلول تصميم معززة بالذكاء الاصطناعي للعلامات التجارية الحديثة',
    services: [
      {
        title: 'الهوية البصرية المعززة بالذكاء الاصطناعي',
        desc: 'تصميم هوية بصرية كاملة باستخدام أدوات الذكاء الاصطناعي للشعارات، لوحات الألوان، الطباعة، وإرشادات العلامة التجارية التي تجعل علامتك مميزة.',
        icon: '🎨',
        features: [
          'تصميم الشعارات بالذكاء الاصطناعي',
          'إرشادات العلامة',
          'أنظمة الألوان',
          'الطباعة',
        ],
      },
      {
        title: 'التصميم الرقمي بالذكاء الاصطناعي',
        desc: 'تصاميم رقمية مذهلة منشأة بمساعدة الذكاء الاصطناعي للسوشيال ميديا، الويب، والإعلانات التي تجذب الانتباه وتزيد التفاعل.',
        icon: '💻',
        features: [
          'رسومات السوشيال ميديا بالذكاء الاصطناعي',
          'تصميم الويب',
          'الإعلانات الرقمية',
          'قوالب البريد الإلكتروني',
        ],
      },
      {
        title: 'الإبداع الفني المدعم بالذكاء الاصطناعي',
        desc: 'إشراف فني استراتيجي باستخدام أدوات الذكاء الاصطناعي لضمان الاتساق البصري والتميز عبر جميع المنصات.',
        icon: '🤖',
        features: [
          'الإشراف الفني بالذكاء الاصطناعي',
          'الاستراتيجية الإبداعية',
          'سرد القصص البصرية',
          'مفاهيم الحملات',
        ],
      },
      {
        title: 'محتوى الفيديو المدعم بالذكاء الاصطناعي',
        desc: 'محتوى فيديو جذاب ورسوم متحركة منشأة بأدوات الذكاء الاصطناعي تروي قصة علامتك التجارية وتأسر جمهورك.',
        icon: '🎬',
        features: [
          'الرسوم المتحركة بالذكاء الاصطناعي',
          'تحرير الفيديو',
          'الرسوم المتحركة',
          'المؤثرات البصرية',
        ],
      },
      {
        title: 'الرسوم التوضيحية المولدة بالذكاء الاصطناعي',
        desc: 'رسوم توضيحية مخصصة وأعمال فنية رقمية منشأة بأدوات الذكاء الاصطناعي تضيف شخصية وتميز لاتصالات علامتك التجارية.',
        icon: '🖌️',
        features: [
          'الرسوم التوضيحية الرقمية بالذكاء الاصطناعي',
          'تصميم الشخصيات',
          'الرسوم البيانية',
          'الأعمال الفنية المخصصة',
        ],
      },
      {
        title: 'الدعاية المعززة بالذكاء الاصطناعي',
        desc: 'مواد دعاية مقنعة ومواد تسويقية منشأة بمساعدة الذكاء الاصطناعي تزيد التحويلات وبناء الاعتراف بالعلامة التجارية.',
        icon: '📢',
        features: [
          'الإعلانات المطبوعة بالذكاء الاصطناعي',
          'الكتيبات',
          'الملصقات',
          'المواد التسويقية',
        ],
      },
    ],
  },
};

export default function Services() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      dir={dir}
      id='services'
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-purple-400 mb-4'>
            {copy.title}
          </h2>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            {copy.subtitle}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {copy.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-purple-500 transition-all hover:scale-105 group'
            >
              <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold text-purple-300 mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-400 mb-6 leading-relaxed'>
                {service.desc}
              </p>
              <ul className='space-y-2'>
                {service.features.map((feature, j) => (
                  <li
                    key={j}
                    className='flex items-center text-sm text-gray-300'
                  >
                    <span className='w-2 h-2 bg-purple-400 rounded-full mr-3 shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
