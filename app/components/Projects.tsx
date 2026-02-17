'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Portfolio',
    subtitle: 'AI-Assisted Design Projects',
    projects: [
      {
        title: 'Tech Startup Brand Identity',
        desc: 'Complete brand identity package created with AI assistance including logo, color palette, and brand guidelines.',
        tools: ['MidJourney', 'Canva AI', 'Adobe Illustrator'],
        category: 'Brand Identity',
        image: '/projects/tech-brand.jpg',
      },
      {
        title: 'E-commerce Social Media Campaign',
        desc: 'Series of AI-generated social media visuals for product launch campaign with consistent branding.',
        tools: ['DALL·E', 'Canva AI', 'Photoshop'],
        category: 'Digital Design',
        image: '/projects/ecommerce-social.jpg',
      },
      {
        title: 'Restaurant Menu Design',
        desc: 'Modern restaurant menu with AI-generated food photography and elegant typography.',
        tools: ['MidJourney', 'InDesign', 'Canva AI'],
        category: 'Print Design',
        image: '/projects/restaurant-menu.jpg',
      },
      {
        title: 'Mobile App UI Kit',
        desc: 'Complete UI kit for fitness app with AI-assisted icon design and color scheme.',
        tools: ['Figma AI', 'Adobe XD', 'Illustrator'],
        category: 'UI/UX Design',
        image: '/projects/app-ui-kit.jpg',
      },
      {
        title: 'Fashion Brand Lookbook',
        desc: 'Digital lookbook featuring AI-generated fashion photography and editorial layout.',
        tools: ['MidJourney', 'InDesign', 'Photoshop'],
        category: 'Fashion Design',
        image: '/projects/fashion-lookbook.jpg',
      },
      {
        title: 'Corporate Presentation Deck',
        desc: 'Professional presentation design with AI-generated charts, icons, and visual elements.',
        tools: ['Canva AI', 'PowerPoint', 'Illustrator'],
        category: 'Corporate Design',
        image: '/projects/corporate-deck.jpg',
      },
      {
        title: 'Music Festival Poster Series',
        desc: 'Vibrant poster series for music festival with AI-generated abstract artwork.',
        tools: ['MidJourney', 'Photoshop', 'After Effects'],
        category: 'Event Design',
        image: '/projects/festival-posters.jpg',
      },
      {
        title: 'Product Packaging Design',
        desc: 'Eco-friendly product packaging with AI-generated patterns and sustainable design elements.',
        tools: ['DALL·E', 'Illustrator', 'Dimension'],
        category: 'Packaging Design',
        image: '/projects/product-packaging.jpg',
      },
      {
        title: 'Real Estate Brochure',
        desc: 'Luxury real estate brochure with AI-enhanced property photography and elegant layout.',
        tools: ['Canva AI', 'Photoshop', 'InDesign'],
        category: 'Marketing Materials',
        image: '/projects/real-estate-brochure.jpg',
      },
    ],
  },
  ar: {
    title: 'معرض الأعمال',
    subtitle: 'مشاريع التصميم المدعمة بالذكاء الاصطناعي',
    projects: [
      {
        title: 'هوية بصرية لشركة تقنية ناشئة',
        desc: 'حزمة هوية بصرية كاملة منشأة بمساعدة الذكاء الاصطناعي تشمل الشعار، لوحة الألوان، وإرشادات العلامة التجارية.',
        tools: ['MidJourney', 'Canva AI', 'Adobe Illustrator'],
        category: 'الهوية البصرية',
        image: '/projects/tech-brand.jpg',
      },
      {
        title: 'حملة سوشيال ميديا للتجارة الإلكترونية',
        desc: 'سلسلة من التصاميم البصرية المولدة بالذكاء الاصطناعي لحملة إطلاق منتجات مع هوية بصرية متسقة.',
        tools: ['DALL·E', 'Canva AI', 'Photoshop'],
        category: 'التصميم الرقمي',
        image: '/projects/ecommerce-social.jpg',
      },
      {
        title: 'تصميم قائمة مطعم',
        desc: 'قائمة مطعم حديثة مع تصوير طعام مولد بالذكاء الاصطناعي وطباعة أنيقة.',
        tools: ['MidJourney', 'InDesign', 'Canva AI'],
        category: 'التصميم المطبوع',
        image: '/projects/restaurant-menu.jpg',
      },
      {
        title: 'مجموعة واجهة تطبيق جوال',
        desc: 'مجموعة واجهة كاملة لتطبيق اللياقة البدنية مع تصميم أيقونات ومخطط ألوان مدعم بالذكاء الاصطناعي.',
        tools: ['Figma AI', 'Adobe XD', 'Illustrator'],
        category: 'تصميم واجهة المستخدم',
        image: '/projects/app-ui-kit.jpg',
      },
      {
        title: 'كتاب أزياء للعلامة التجارية',
        desc: 'كتاب أزياء رقمي يعرض تصوير أزياء مولد بالذكاء الاصطناعي وتخطيط تحريري أنيق.',
        tools: ['MidJourney', 'InDesign', 'Photoshop'],
        category: 'تصميم الأزياء',
        image: '/projects/fashion-lookbook.jpg',
      },
      {
        title: 'عرض تقديمي للشركات',
        desc: 'تصميم عرض تقديمي احترافي مع رسوم بيانية وأيقونات وعناصر بصرية مولدة بالذكاء الاصطناعي.',
        tools: ['Canva AI', 'PowerPoint', 'Illustrator'],
        category: 'تصميم الشركات',
        image: '/projects/corporate-deck.jpg',
      },
      {
        title: 'سلسلة ملصقات مهرجان موسيقي',
        desc: 'سلسلة ملصقات نابضة بالحياة لمهرجان موسيقي مع فن مجرد مولد بالذكاء الاصطناعي.',
        tools: ['MidJourney', 'Photoshop', 'After Effects'],
        category: 'تصميم الفعاليات',
        image: '/projects/festival-posters.jpg',
      },
      {
        title: 'تغليف منتجات',
        desc: 'تغليف منتجات صديق للبيئة مع أنماط مولدة بالذكاء الاصطناعي وعناصر تصميم مستدامة.',
        tools: ['DALL·E', 'Illustrator', 'Dimension'],
        category: 'تصميم التغليف',
        image: '/projects/product-packaging.jpg',
      },
      {
        title: 'كتيب عقاري',
        desc: 'كتيب عقاري فاخر مع تصوير عقاري محسن بالذكاء الاصطناعي وتخطيط أنيق.',
        tools: ['Canva AI', 'Photoshop', 'InDesign'],
        category: 'المواد التسويقية',
        image: '/projects/real-estate-brochure.jpg',
      },
    ],
  },
};

export default function Projects() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      dir={dir}
      id='projects'
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

        <div className='columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6'>
          {copy.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className='break-inside-avoid group'
            >
              <div className='bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-purple-500 transition-all duration-300 hover:scale-105'>
                {/* Project Image Placeholder */}
                <div className='relative h-48 bg-linear-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center'>
                  <div className='text-6xl opacity-50'>🎨</div>
                  <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300' />
                  <div className='absolute top-3 right-3 bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-purple-300'>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 text-sm mb-4 leading-relaxed'>
                    {project.desc}
                  </p>

                  {/* Tools */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tools.map((tool, j) => (
                      <span
                        key={j}
                        className='px-2 py-1 bg-slate-800 text-xs text-gray-300 rounded-md border border-slate-700'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className='w-full py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-lg border border-purple-600/30 hover:border-purple-600/50 transition-all duration-300 text-sm font-medium'>
                    {lang === 'en' ? 'View Project' : 'عرض المشروع'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
