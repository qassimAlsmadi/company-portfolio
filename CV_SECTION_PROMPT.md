# 🎨 Professional CV Section Implementation Prompt

## 📋 **Task Overview**
Create a professional CV section for a portfolio website with advanced animations, interactions, and modern UI/UX design. The section should showcase a downloadable CV with engaging visual effects and user interactions.

## 🎯 **Requirements**

### **1. Section Structure**
- **Section ID**: `id="cv"` for navigation linking
- **Layout**: Two-column grid layout (desktop) / single column (mobile)
- **Background**: Dark theme with slate-900 background
- **Responsive**: Mobile-first design with breakpoints

### **2. Left Column - CV Preview**
- **CV Preview Frame**: Rounded container with border and shadow
- **Glowing Effect**: Animated gradient glow around the frame
- **PDF Icon**: Large animated icon with scale animation
- **CV Info**: Title, format, and year
- **Feature List**: Bullet points with animated entrance
- **Visual Elements**: Professional icons and typography

### **3. Right Column - Actions & Info**
- **Download Button**: 
  - Gradient background (purple to pink)
  - Download icon with bounce animation on hover
  - Click handler for PDF download
  - Scale animation on interaction
  
- **View Online Button**:
  - Secondary button style
  - External link icon
  - Opens portfolio in new tab
  
- **Info Cards Grid** (2x2):
  - Format card (📄 icon)
  - Focus card (🎨 icon) 
  - Status card (🚀 icon)
  - Language card (🌐 icon)
  - Each with animated entrance

### **4. Animations & Interactions**
- **Framer Motion**: Use for all animations
- **Entrance Animations**: Staggered entrance for elements
- **Hover Effects**: Scale, color transitions
- **Scroll Animations**: `whileInView` with `viewport={{ once: true }}`
- **Reduced Motion**: Respect user preferences

### **5. Download Functionality**
```javascript
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Qasim_Al_Smadi_CV.pdf';
  link.download = 'Qasim_Al_Smadi_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

### **6. Bilingual Support**
- **English & Arabic**: Dynamic content based on language
- **RTL/LTR Support**: Proper text direction
- **Language Hook**: Use `useLang()` from LangProvider

### **7. Visual Design**
- **Color Scheme**: Purple, pink, indigo gradients
- **Typography**: Clean, modern fonts
- **Spacing**: Consistent padding and margins
- **Borders**: Subtle borders with slate-700
- **Shadows**: Layered shadow effects

## 🎨 **Implementation Code**

### **Component Structure**:
```tsx
'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import { FaDownload, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const t = {
  en: {
    title: 'Professional CV',
    subtitle: 'Download my complete CV to learn more about my experience and skills',
    download: 'Download CV',
    viewOnline: 'View Online',
    features: [
      'AI-Assisted Design Experience',
      'Brand Identity Projects',
      'Digital Design Portfolio',
      'Technical Skills & Tools',
    ],
  },
  ar: {
    title: 'السيرة الذاتية',
    subtitle: 'حمل سيرتي الذاتية الكاملة للتعرف على خبرتي ومهاراتي',
    download: 'تحميل السيرة الذاتية',
    viewOnline: 'عرض أونلاين',
    features: [
      'خبرة في التصميم المدعم بالذكاء الاصطناعي',
      'مشاريع الهوية البصرية',
      'معرض التصميم الرقمي',
      'المهارات التقنية والأدوات',
    ],
  },
};

export default function CVSection() {
  const { lang, dir } = useLang();
  const copy = t[lang];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Qasim_Al_Smadi_CV.pdf';
    link.download = 'Qasim_Al_Smadi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='cv' dir={dir} className='py-24 bg-slate-900 text-white px-6'>
      {/* Full implementation with animations */}
    </section>
  );
}
```

## 🔧 **Key Features to Implement**

### **Animation Timing**:
- Title: `delay: 0`, `duration: 0.6s`
- Subtitle: `delay: 0.1s`, `duration: 0.6s`
- Left column: `delay: 0.2s`, `duration: 0.8s`
- Right column: `delay: 0.3s`, `duration: 0.8s`
- Info cards: `delay: 0.4s - 0.7s` (staggered)

### **Hover Effects**:
- Buttons: `scale: 1.05` on hover
- Icons: `animate-bounce` on button hover
- Cards: Subtle scale and shadow transitions

### **Visual Effects**:
- Glowing frames with `blur-xl` and gradient
- Animated PDF icon with continuous scale
- Smooth transitions (300-500ms duration)

## 📱 **Responsive Design**
- **Mobile**: Single column layout
- **Tablet**: Adjusted spacing and sizing
- **Desktop**: Two-column grid with gap
- **All**: Touch-friendly buttons and interactions

## 🎯 **Expected Outcome**
A professional, animated CV section that:
- Downloads CV on button click
- Shows online portfolio in new tab
- Displays CV information attractively
- Provides smooth user experience
- Supports both English and Arabic
- Works across all devices
- Respects accessibility preferences

## 📁 **File Structure**
```
app/components/
└── CVSection.tsx

public/
└── Qasim_Al_Smadi_CV.pdf
```

## 🚀 **Integration**
Add to main page:
```tsx
import CVSection from './components/CVSection';

export default function Home() {
  return (
    <main>
      {/* other sections */}
      <CVSection />
      {/* other sections */}
    </main>
  );
}
```

Add to navbar:
```tsx
{ href: '#cv', label: { en: 'CV', ar: 'السيرة الذاتية' } }
```

---

**This prompt provides complete instructions for implementing a professional CV section with advanced animations and interactions!** 🎨✨
