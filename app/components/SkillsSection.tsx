'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import {
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaNodeJs,
  FaAws,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaRobot,
  FaProjectDiagram,
} from 'react-icons/fa';
import { SiMysql, SiPython } from 'react-icons/si';

const t = {
  en: {
    title: 'Technical Expertise',
    subtitle: 'Backend Development & AI Automation Specialist',
    categories: {
      backend: 'Backend Development',
      devops: 'DevOps & Security',
      ai: 'AI & Automation',
      database: 'Database Management',
      api: 'API Development',
    },
  },
  ar: {
    title: 'الخبرة التقنية',
    subtitle: 'تطوير الواجهات الخلفية وأتمتة الذكاء الاصطناعي',
    categories: {
      backend: 'تطوير الواجهات الخلفية',
      devops: 'DevOps والأمن',
      ai: 'الذكاء الاصطناعي والأتمتة',
      database: 'إدارة قواعد البيانات',
      api: 'تطوير واجهات برمجة التطبيقات',
    },
  },
};

const skills = {
  backend: [
    { name: 'PHP', icon: FaPhp, level: 90 },
    { name: 'Laravel', icon: FaLaravel, level: 85 },
    { name: 'Node.js', icon: FaNodeJs, level: 80 },
    { name: 'Python', icon: SiPython, level: 75 },
  ],
  devops: [
    { name: 'Docker', icon: FaDocker, level: 80 },
    { name: 'Linux', icon: FaLinux, level: 85 },
    { name: 'Git', icon: FaGitAlt, level: 90 },
    { name: 'AWS', icon: FaAws, level: 70 },
  ],
  ai: [
    { name: 'N8N Automation', icon: FaProjectDiagram, level: 85 },
    { name: 'Prompt Engineering', icon: FaCode, level: 80 },
    { name: 'AI Integration', icon: FaRobot, level: 90 },
    { name: 'Machine Learning', icon: FaChartLine, level: 75 },
  ],
  database: [
    { name: 'MySQL', icon: SiMysql, level: 90 },
    { name: 'Database Design', icon: FaDatabase, level: 85 },
  ],
  api: [
    { name: 'REST APIs', icon: FaCode, level: 90 },
    { name: 'GraphQL', icon: FaShieldAlt, level: 75 },
    { name: 'API Security', icon: FaShieldAlt, level: 85 },
  ],
};

export default function SkillsSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  return (
    <section
      id='skills'
      dir={dir}
      className='py-24 bg-slate-950 text-white px-6'
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

        {/* Skills Grid */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
          {Object.entries(skills).map(
            ([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className='bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-purple-500/50 transition-all duration-300'
              >
                {/* Category Header */}
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                    {category === 'backend' && (
                      <FaCode className='text-white text-xl' />
                    )}
                    {category === 'api' && (
                      <FaCode className='text-white text-xl' />
                    )}
                    {category === 'devops' && (
                      <FaDocker className='text-white text-xl' />
                    )}
                    {category === 'ai' && (
                      <FaRobot className='text-white text-xl' />
                    )}
                    {category === 'database' && (
                      <FaDatabase className='text-white text-xl' />
                    )}
                  </div>
                  <h3 className='text-xl font-semibold text-white'>
                    {copy.categories[category as keyof typeof copy.categories]}
                  </h3>
                </div>

                {/* Skills List */}
                <div className='space-y-4'>
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className='space-y-2'
                    >
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <skill.icon className='text-purple-400 text-lg' />
                          <span className='text-gray-300 font-medium'>
                            {skill.name}
                          </span>
                        </div>
                        <span className='text-purple-400 text-sm font-semibold'>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className='w-full bg-slate-800 rounded-full h-2 overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          }}
                          viewport={{ once: true }}
                          className='h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full'
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'
        >
          {[
            {
              number: '5+',
              label: lang === 'en' ? 'Years Experience' : 'سنوات خبرة',
            },
            {
              number: '50+',
              label: lang === 'en' ? 'Projects Completed' : 'مشاريع مكتملة',
            },
            { number: '15+', label: lang === 'en' ? 'Technologies' : 'تقنيات' },
            {
              number: '100%',
              label: lang === 'en' ? 'Client Satisfaction' : 'رضا العملاء',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className='text-center p-6 bg-slate-900 rounded-2xl border border-slate-800'
            >
              <div className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2'>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
