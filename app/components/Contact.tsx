'use client';

import { useState } from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useLang } from './LangProvider';

const t = {
  en: {
    title: 'Let’s Create Something Amazing',
    subtitle:
      'Ready to bring your creative vision to life with AI-powered design? Let’s collaborate and create something extraordinary.',
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Tell me about your project',
      submit: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent!',
    },
    contact: {
      email: 'qassemengineer651@gmail.com',
      phone: '+963 937 470 930',
    },
  },
  ar: {
    title: 'لنصنع شيءًا مذهلاً',
    subtitle:
      'مستعد لتحقيق رؤيتك الإبداعية بالتصميم المدعم بالذكاء الاصطناعي؟ لنتعاون ونصنع شيءًا استثنائيًا.',
    form: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'أخبرني عن مشروعك',
      submit: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      sent: 'تم إرسال الرسالة!',
    },
    contact: {
      email: 'kasemabdalmoutesmadi@gmail.com',
      phone: '+963 937 470 930',
    },
  },
};

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/qasim-al-smadi-23220824a',
    name: 'LinkedIn',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/share/1GowAwLJ57/',
    name: 'Facebook',
  },
  { icon: <FaXTwitter />, link: 'https://x.com/Eng_Qasim_23', name: 'X' },
  {
    icon: <FaInstagram />,
    link: 'https://instagram.com/qasim_alsmadi',
    name: 'Instagram',
  },
  {
    icon: <FaWhatsapp />,
    link: 'https://wa.me/963937470930',
    name: 'WhatsApp',
  },
  {
    icon: <FaTelegramPlane />,
    link: 'https://t.me/Eng_Qasim_ALSmadi',
    name: 'Telegram',
  },
];

export default function Contact() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      dir={dir}
      id='contact'
      className='relative py-24 px-4 sm:px-6 text-white overflow-hidden'
    >
      {/* Animated Gradient Background */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-slate-950 to-pink-900' />

      <div className='max-w-6xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'>
              {copy.title}
            </h2>

            <p className='text-gray-300 mb-12 text-lg leading-relaxed'>
              {copy.subtitle}
            </p>

            {/* Contact Info */}
            <div className='space-y-4 mb-12'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-300'>
                  <FaEnvelope />
                </div>
                <div>
                  <div className='text-sm text-gray-400'>Email</div>
                  <div className='text-white'>{copy.contact.email}</div>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-300'>
                  <FaPhone />
                </div>
                <div>
                  <div className='text-sm text-gray-400'>Phone</div>
                  <div className='text-white'>{copy.contact.phone}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className='text-lg font-semibold text-purple-300 mb-6'>
                {lang === 'en' ? 'Connect With Me' : 'تواصل معي'}
              </h3>
              <div className='flex flex-wrap gap-4'>
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className='group relative'
                  >
                    {/* Glow Ring */}
                    <div className='absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-0 group-hover:opacity-60 transition duration-500' />

                    {/* Button */}
                    <div className='relative w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-lg bg-white/5 border border-white/10 text-gray-300 text-lg transition-all duration-300 hover:bg-purple-500 hover:text-white'>
                      {item.icon}
                    </div>

                    {/* Tooltip */}
                    <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-black/70 px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap'>
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className='bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800'>
              <form
                onSubmit={handleSubmit}
                className='space-y-6'
              >
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    {copy.form.name}
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition'
                    placeholder={copy.form.name}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    {copy.form.email}
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition'
                    placeholder={copy.form.email}
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    {copy.form.message}
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none'
                    placeholder={copy.form.message}
                  />
                </div>

                <motion.button
                  type='submit'
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg border border-purple-500/50 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting
                    ? copy.form.sending
                    : isSubmitted
                      ? copy.form.sent
                      : copy.form.submit}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className='mt-20 text-center'>
          <p className='text-gray-400 text-sm'>
            © 2026 Qasim Al-Smadi.{' '}
            {lang === 'en'
              ? 'Crafted with AI-powered creativity'
              : 'مصنوع بإبداع معزز بالذكاء الاصطناعي'}
          </p>
        </div>
      </div>
    </section>
  );
}
