# 🎨 Professional Contact Section Implementation Prompt

## 📋 **Task Overview**
Create a professional contact section for a portfolio website with advanced animations, interactions, and modern UI/UX design. The section should include a contact form, social media links, and contact information with the same design quality and animations as the existing portfolio.

## 🎯 **Requirements**

### **1. Section Structure**
- **Section ID**: `id="contact"` for navigation linking
- **Layout**: Two-column grid layout (desktop) / single column (mobile)
- **Background**: Dark theme with slate-900 background
- **Responsive**: Mobile-first design with breakpoints
- **Bilingual Support**: English and Arabic with RTL/LTR

### **2. Left Column - Contact Information**
- **Contact Cards**: Professional cards with icons
  - Email card with envelope icon
  - Phone card with phone icon  
  - Location card with location pin icon
  - Social media card with network icons
- **Animated Entrance**: Staggered entrance animations
- **Hover Effects**: Scale and color transitions
- **Professional Design**: Consistent with existing portfolio style

### **3. Right Column - Contact Form**
- **Contact Form**: Modern, animated contact form
  - Name input with validation
  - Email input with validation
  - Message textarea with character count
  - Submit button with loading states
- **Form Validation**: Real-time validation feedback
- **Loading States**: Animated loading spinner
- **Success/Error Messages**: Animated toast notifications
- **Micro-interactions**: Focus states, hover effects

### **4. Social Media Integration**
- **Social Links**: LinkedIn, Facebook, Instagram, X, WhatsApp, Telegram
- **Animated Icons**: Hover effects with scale and color transitions
- **External Links**: Open in new tabs
- **Professional Styling**: Consistent with portfolio theme

### **5. Animations & Interactions**
- **Framer Motion**: Use for all animations
- **Entrance Animations**: Staggered entrance for elements
- **Hover Effects**: Scale, color transitions, shadows
- **Form Interactions**: Focus states, validation feedback
- **Scroll Animations**: `whileInView` with `viewport={{ once: true }}`
- **Reduced Motion**: Respect user preferences

## 🎨 **Design Specifications**

### **Color Scheme**:
- **Primary**: Purple, Pink, Indigo gradients (matching existing theme)
- **Background**: Slate-900 (dark)
- **Cards**: Slate-800 with slate-700 borders
- **Text**: White with opacity variations
- **Accent**: Purple-400, Pink-400 for highlights

### **Typography**:
- **Headings**: Bold, gradient text effects
- **Body Text**: Clean, readable fonts
- **Form Labels**: Medium weight, clear hierarchy
- **Button Text**: Semibold, good contrast

### **Spacing & Layout**:
- **Section Padding**: py-24 (96px)
- **Card Spacing**: gap-6 (24px)
- **Form Spacing**: space-y-4 (16px)
- **Responsive**: Mobile-first breakpoints

## 📱 **Responsive Design**
- **Mobile**: Single column, full-width cards
- **Tablet**: Adjusted spacing and sizing
- **Desktop**: Two-column grid with proper gap
- **All**: Touch-friendly buttons and interactions

## 🔧 **Implementation Code**

### **Component Structure**:
```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import { 
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaXTwitter,
  FaInstagram
} from 'react-icons/fa';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';

const t = {
  en: {
    title: 'Get In Touch',
    subtitle: "Let's discuss your next project or collaboration opportunity",
    email: 'your-email@example.com',
    phone: '+1234567890',
    social: {
      linkedin: 'https://linkedin.com/in/yourprofile',
      facebook: 'https://facebook.com/yourprofile',
      x: 'https://twitter.com/yourprofile',
      instagram: 'https://instagram.com/yourprofile',
      whatsapp: 'https://wa.me/1234567890',
      telegram: 'https://t.me/yourprofile',
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    footer: 'Crafted with AI-powered creativity and passion for excellence',
  },
  ar: {
    title: 'تواصل معي',
    subtitle: 'لنناقش مشروعك القادم أو فرصة التعاون',
    email: 'your-email@example.com',
    phone: '+1234567890',
    social: {
      linkedin: 'https://linkedin.com/in/yourprofile',
      facebook: 'https://facebook.com/yourprofile',
      x: 'https://twitter.com/yourprofile',
      instagram: 'https://instagram.com/yourprofile',
      whatsapp: 'https://wa.me/1234567890',
      telegram: 'https://t.me/yourprofile',
    },
    form: {
      name: 'اسمك',
      email: 'بريدك الإلكتروني',
      message: 'رسالتك',
      submit: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
    footer: 'صُنع بإبداع مدعم بالذكاء الاصطناعي وشغف للتميز',
  },
};

export default function ContactSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id='contact' dir={dir} className='py-24 bg-slate-900 text-white px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl font-bold bg-linear-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mb-4'
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

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                  <FaEnvelope className='text-white text-xl' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-1'>Email</h3>
                  <p className='text-gray-300'>{copy.email}</p>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className='bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                  <FaPhone className='text-white text-xl' />
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-white mb-1'>Phone</h3>
                  <p className='text-gray-300'>{copy.phone}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className='bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300'
            >
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center'>
                  <FaLinkedinIn className='text-white text-xl' />
                </div>
                <h3 className='text-lg font-semibold text-white'>Social Media</h3>
              </div>
              
              <div className='grid grid-cols-3 gap-4'>
                {[
                  { icon: <FaLinkedinIn />, link: copy.social.linkedin, name: 'LinkedIn' },
                  { icon: <FaFacebookF />, link: copy.social.facebook, name: 'Facebook' },
                  { icon: <FaXTwitter />, link: copy.social.x, name: 'X' },
                  { icon: <FaInstagram />, link: copy.social.instagram, name: 'Instagram' },
                  { icon: <FaWhatsapp />, link: copy.social.whatsapp, name: 'WhatsApp' },
                  { icon: <FaTelegramPlane />, link: copy.social.telegram, name: 'Telegram' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className='flex flex-col items-center gap-2 p-3 bg-slate-700 rounded-xl hover:bg-slate-600 transition-all duration-300'
                  >
                    <div className='text-purple-400 text-xl'>{social.icon}</div>
                    <span className='text-gray-300 text-sm'>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  {copy.form.name}
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300'
                  placeholder={copy.form.name}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  {copy.form.email}
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300'
                  placeholder={copy.form.email}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className='block text-sm font-medium text-gray-300 mb-2'>
                  {copy.form.message}
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none'
                  placeholder={copy.form.message}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type='submit'
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg flex items-center justify-center gap-3'
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                      />
                      <span>{copy.form.sending}</span>
                    </>
                  ) : (
                    <span>{copy.form.submit}</span>
                  )}
                </motion.button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300'
                >
                  {copy.form.success}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300'
                >
                  {copy.form.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className='mt-16 text-center text-gray-400 text-sm'
        >
          {copy.footer}
        </motion.div>
      </div>
    </section>
  );
}
```

## 🎯 **Key Features to Implement**

### **Animation Timing**:
- Section title: `delay: 0`, `duration: 0.6s`
- Subtitle: `delay: 0.1s`, `duration: 0.6s`
- Left column: `delay: 0.2s`, `duration: 0.8s`
- Right column: `delay: 0.3s`, `duration: 0.8s`
- Form elements: `delay: 0.4s - 0.7s` (staggered)
- Social icons: `delay: 0.6s + index * 0.1s`

### **Form Functionality**:
- Real-time validation feedback
- Loading states with spinner animation
- Success/error message animations
- Form reset on successful submission
- Accessible form labels and inputs

### **Social Media Integration**:
- 6 social platforms (LinkedIn, Facebook, Instagram, X, WhatsApp, Telegram)
- Hover effects with scale and color transitions
- External link handling with proper attributes
- Professional icon styling

### **Visual Effects**:
- Gradient backgrounds for icons
- Hover effects on all interactive elements
- Smooth transitions (300-500ms duration)
- Professional shadows and borders
- Consistent color scheme

## 📱 **Responsive Design**
- **Mobile**: Single column layout, full-width cards
- **Tablet**: Adjusted spacing and form sizing
- **Desktop**: Two-column grid with proper gap
- **All**: Touch-friendly buttons and form inputs

## 🎯 **Expected Outcome**
A professional contact section that:
- Provides multiple contact methods
- Features an animated, validated contact form
- Includes comprehensive social media integration
- Maintains design consistency with existing portfolio
- Supports both English and Arabic languages
- Works seamlessly across all devices
- Provides excellent user experience with micro-interactions

## 📁 **File Structure**
```
app/components/
└── ContactSection.tsx

public/
└── (no additional files needed)
```

## 🚀 **Integration**
Add to main page:
```tsx
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      {/* other sections */}
      <ContactSection />
    </main>
  );
}
```

Add to navbar:
```tsx
{ href: '#contact', label: { en: 'Contact', ar: 'التواصل' } }
```

## 🔧 **Dependencies Required**
```json
{
  "dependencies": {
    "react": "^18.0.0",
    "framer-motion": "^12.0.0",
    "react-icons": "^5.0.0"
  }
}
```

---

**This prompt provides complete instructions for implementing a professional contact section with advanced animations and interactions!** 🎨✨
