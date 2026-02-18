'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import {
  FaBuilding,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCode,
  FaLaravel,
} from 'react-icons/fa';

const t = {
  en: {
    title: 'Professional Experience',
    subtitle: 'Software Engineering & Digital Security Expert',
    experiences: [
      {
        company: 'Samemli Advertising Company',
        position: 'Advertising & Technical Support',
        period: '2023 – 2024',
        location: 'Damascus, Syria',
        description:
          'Designed and managed digital advertising campaigns for multiple clients, including content strategy and performance tracking.',
        achievements: [
          'Managed and developed social media accounts across platforms (Facebook, X, Instagram)',
          'Created engaging content aligned with brand identity, including posts, carousels, and Reels',
          'Wrote persuasive marketing captions to increase engagement and audience reach',
          'Implemented monthly content plans and coordinated with design teams',
          'Optimized engagement with data-driven strategies, resulting in measurable audience growth',
        ],
        technologies: [
          'PHP',
          'Laravel',
          'Content Strategy',
          'Social Media Management',
        ],
        type: 'work',
      },
      {
        company: 'StyleGenie E-Commerce',
        position: 'Laravel Backend Developer & Content Automation',
        period: '2025 – 2026',
        location: 'Remote',
        description:
          'Built a secure Laravel backend while integrating content automation workflows using AI.',
        achievements: [
          'Developed secure Laravel backend with advanced authentication',
          'Created structured content generation systems for marketing campaigns',
          'Implemented AI-powered content automation workflows',
          'Designed scalable database architecture for e-commerce platform',
          'Integrated payment gateways and security protocols',
        ],
        technologies: ['Laravel', 'PHP', 'MySQL', 'AI Automation', 'Docker'],
        type: 'project',
      },
    ],
  },
  ar: {
    title: 'الخبرة المهنية',
    subtitle: 'هندسة البرمجيات وأمن المعلومات المتخصص',
    experiences: [
      {
        company: 'شركة سماملي للإعلان',
        position: 'الدعم الفني والإعلان',
        period: '2023 – 2024',
        location: 'دمشق، سوريا',
        description:
          'صممت وأدرت حملات إعلانية رقمية لعدة عملاء، بما في ذلك استراتيجية المحتوى وتتبع الأداء.',
        achievements: [
          'أدرت وطورت حسابات وسائل التواصل الاجتماعي عبر المنصات (فيسبوك، تويتر، انستغرام)',
          'أنشأت محتوى جذاب متوافق مع هوية العلامة التجارية، بما في ذلك المنشورات والكاروسيلات والرييلز',
          'كتبت عناوين تسويقية مقنعة لزيادة التفاعل ووصول الجمهور',
          'نفذت خطط محتوى شهرية وتنسيقت مع فرق التصميم',
          'حسنت التفاعل باستراتيجيات قائمة على البيانات، مما أدى إلى نمو قابل للقياس في الجمهور',
        ],
        technologies: [
          'PHP',
          'Laravel',
          'استراتيجية المحتوى',
          'إدارة وسائل التواصل الاجتماعي',
        ],
        type: 'work',
      },
      {
        company: 'StyleGenie للتجارة الإلكترونية',
        position: 'مطور Laravel Backend وأتمتة المحتوى',
        period: '2025 – 2026',
        location: 'عن بعد',
        description:
          'بنيت واجهة خلفية آمنة لـ Laravel مع دمج سير عمل أتمتة المحتوى باستخدام الذكاء الاصطناعي.',
        achievements: [
          'طورت واجهة خلفية آمنة لـ Laravel مع مصادقة متقدمة',
          'أنشأت أنظمة إنشاء محتوى منظم لحملات التسويق',
          'نفذت سير عمل أتمتة المحتوى المدعومة بالذكاء الاصطناعي',
          'صممت بنية قاعدة بيانات قابلة للتوسع لمنصة التجارة الإلكترونية',
          'دمجت بوابات الدفع وبروتوكولات الأمان',
        ],
        technologies: [
          'Laravel',
          'PHP',
          'MySQL',
          'أتمتة الذكاء الاصطناعي',
          'Docker',
        ],
        type: 'project',
      },
    ],
  },
};

export default function ExperienceSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      id='experience'
      dir={dir}
      className='py-24 bg-slate-900 text-white px-6'
    >
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mb-4'
          >
            {copy.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-lg text-gray-300 max-w-2xl mx-auto'
          >
            {copy.subtitle}
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className='space-y-12'>
          {copy.experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              {/* Timeline Line */}
              {index < copy.experiences.length - 1 && (
                <div className='absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500' />
              )}

              <div className='flex gap-8'>
                {/* Timeline Dot */}
                <div className='shrink-0'>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg'
                  >
                    {exp.type === 'work' ? (
                      <FaBuilding className='text-xl' />
                    ) : (
                      <FaCode className='text-xl' />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className='flex-1 bg-slate-950 rounded-2xl border border-slate-800 p-8 hover:border-purple-500/50 transition-all duration-300'>
                  {/* Header */}
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {exp.position}
                      </h3>
                      <div className='flex items-center gap-2 text-purple-400'>
                        <FaBuilding className='text-sm' />
                        <span className='font-semibold'>{exp.company}</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-4 text-gray-400 text-sm mt-2 sm:mt-0'>
                      <div className='flex items-center gap-1'>
                        <FaCalendarAlt className='text-xs' />
                        <span>{exp.period}</span>
                      </div>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-300 mb-6 leading-relaxed'>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      {lang === 'en'
                        ? 'Key Achievements:'
                        : 'الإنجازات الرئيسية:'}
                    </h4>
                    <ul className='space-y-2'>
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + achIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className='flex items-start gap-3 text-gray-300'
                        >
                          <div className='w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0' />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30'
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
