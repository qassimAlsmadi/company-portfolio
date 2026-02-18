# قاسم السمادي - معرض المصمم الجرافيك والمطور الشامل

## 📋 **نظرة عامة على المشروع**

هذا معرض احترافي شامل لـ "قاسم السمادي" يجمع بين التصميم الجرافيكي المدعم بالذكاء الاصطناعي والخبرة البرمجية المتقدمة. الموقع مبنى بـ Next.js 16، Tailwind CSS 4، و Framer Motion.

## 🎨 **التركيز الأساسي**

- **AI-Assisted Graphic Design** - تصميم جرافيك مدعم بالذكاء الاصطناعي
- **Full-Stack Development** - تطوير شامل (Frontend + Backend)
- **Visual Storytelling** - سرد القصص البصرية
- **Brand Identity** - الهوية البصرية للعلامات التجارية
- **Digital Security** - أمن وحماية المواقع
- **DevOps & Automation** - أتمتة وتشغيل الأنظمة
- **Bilingual Support** - دعم اللغتين العربية والإنجليزية

## 🛠️ **التقنيات المستخدمة**

- **Frontend**: Next.js 16 (App Router), React 18, TypeScript 5
- **Backend**: PHP, Laravel, Node.js, Python
- **Database**: MySQL, Database Design
- **DevOps**: Docker, Linux, Git, AWS
- **Security**: Web Security, Authentication
- **Styling**: Tailwind CSS 4, Framer Motion 12
- **Icons**: React Icons (Font Awesome)
- **Deployment**: جاهز للنشر على Netlify

## 📁 **هيكل المشروع**

```
qasim-portfolio/
├── app/
│   ├── components/          # مكونات React
│   │   ├── Hero.tsx        # القسم الرئيسي مع صورة البروفايل
│   │   ├── About.tsx       # قسم عني
│   │   ├── Services.tsx    # الخدمات
│   │   ├── Projects.tsx    # معرض المشاريع
│   │   ├── SkillsSection.tsx    # المهارات التقنية
│   │   ├── ExperienceSection.tsx # الخبرة المهنية
│   │   ├── CVSection.tsx   # السيرة الذاتية
│   │   ├── Contact.tsx     # التواصل
│   │   ├── Navbar.tsx      # شريط التنقل
│   │   ├── ThemeToggle.tsx # تبديل الوضع الليلي/النهاري
│   │   └── LangProvider.tsx # مزود اللغة
│   ├── layout.tsx         # التخطيط الرئيسي
│   ├── page.tsx           # الصفحة الرئيسية
│   └── globals.css        # الأنماط العامة
├── public/
│   ├── images/             # الصور
│   │   └── profile.jpg     # صورة البروفايل
│   └── Qasim_Al_Smadi_CV.pdf
└── package.json
```

## 🎯 **المكونات الرئيسية**

### 1. **Hero.tsx** - القسم الرئيسي

- صورة بروفايل دائرية مع إطار متوهج ودوار
- نصوص متحركة مع تأثيرات gradient
- أزرار CTA تفاعلية
- دعم ثنائي اللغة

### 2. **About.tsx** - قسم عني

- نبذة عن الخبرة الشاملة (تصميم + برمجة)
- التركيز على الذكاء الاصطناعي والأمن
- مهارات متنوعة

### 3. **Services.tsx** - الخدمات

- خدمات تصميم مدعمة بالذكاء الاصطناعي
- خدمات تطوير وحماية المواقع
- بطاقات متحركة مع hover effects
- أيقونات وأدوات مستخدمة لكل خدمة

### 4. **Projects.tsx** - معرض المشاريع

- تخطيط masonry grid
- مشاريع متنوعة (branding, digital, security, etc.)
- hover overlays مع تفاصيل المشروع
- أدوات الذكاء الاصطناعي المستخدمة

### 5. **SkillsSection.tsx** - المهارات التقنية

- 6 فئات: Backend, Frontend, DevOps, AI, Database, Marketing
- أيقونات متحركة مع progress bars
- تقنيات: PHP, Laravel, React, Docker, MySQL, Python, etc.
- إحصائيات: سنوات خبرة، مشاريع، تقنيات

### 6. **ExperienceSection.tsx** - الخبرة المهنية

- Timeline احترافي مع خط زمني متحرك
- خبرتين رئيسيتين:
  - Samemli Advertising (Technical Support & Advertising)
  - StyleGenie E-Commerce (Laravel Developer & AI Automation)
- الإنجازات والتقنيات المستخدمة
- تصميم متجاوب مع تأثيرات hover

### 7. **CVSection.tsx** - السيرة الذاتية

- معاينة CV احترافية
- زر تحميل مباشر
- معلومات إضافية (Format, Focus, Status, Language)
- رابط للمعرض أونلاين

### 8. **Contact.tsx** - التواصل

- نموذج تواصل تفاعلي
- أيقونات وسائل التواصل الاجتماعي
- معلومات الاتصال (إيميل، هاتف)
- رسائل نجاح/خطأ

## 🌐 **اللغات والتوجيه**

- **English**: LTR (left-to-right)
- **Arabic**: RTL (right-to-left)
- **Language Toggle**: زر تبديل اللغة في Navbar
- **Dynamic Direction**: تغيير اتجاه الصفحة ديناميكياً

## 🎨 **نظام الألوان**

- **Primary**: Purple, Pink, Indigo (تدرجات)
- **Background**: Slate-950 (داكن)
- **Text**: White with opacity variations
- **Accent**: Purple-400, Pink-400

## ⚡ **الأداء والتحسين**

- **Images**: WebP format موصى به
- **Animations**: Framer Motion مع reduced motion support
- **SEO**: Meta tags مخصصة لـ AI-assisted designer & developer
- **Responsive**: Mobile-first design

## 🔧 **التعديلات الشائعة**

### إضافة مشروع جديد:

```tsx
// في Projects.tsx - أضف كائن جديد إلى مصفوفة projects
{
  title: 'Project Name',
  desc: 'Project description',
  tools: ['Tool1', 'Tool2'],
  category: 'Category',
  image: '/projects/project-image.jpg',
}
```

### تعديل النصوص:

```tsx
// في أي مكون - عدل في const t
const t = {
  en: {
    title: 'English Title',
    // ...
  },
  ar: {
    title: 'العنوان العربي',
    // ...
  },
};
```

## 🚀 **النشر والتشغيل**

### التشغيل المحلي:

```bash
npm run dev    # خادم التطوير
npm run build  # بناء للإنتاج
npm run start  # تشغيل الإنتاج
npm run lint   # فحص الكود
```

### النشر على Netlify:

1. Connect repository إلى Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. Environment variables: إذا لزم الأمر

## 📱 **ملاحظات مهمة**

### صورة البروفايل:

- **المسار**: `public/images/profile.jpg`
- **الحجم الموصى**: 400x400px أو أعلى
- **البديل**: WebP format لأداء أفضل
- **Fallback**: placeholder SVG مدمج

### الخبرة المعروضة:

- **Graphic Design**: AI-assisted design, brand identity
- **Backend Development**: PHP, Laravel, MySQL
- **Frontend Development**: React, TypeScript
- **Security**: Web protection, authentication
- **DevOps**: Docker, Linux, deployment

### مستوى الخبرة:

- **Design**: Beginner to Intermediate (مبتدئ إلى متوسط)
- **Development**: 5+ years experience
- **Security**: Database protection, web security
- **AI**: 20+ AI-assisted projects

## 🔍 **الـ SEO والكلمات المفتاحية**

- "AI-Assisted Graphic Designer"
- "Full-Stack Developer"
- "Web Security Specialist"
- "Laravel Developer"
- "Visual Storyteller"
- "Brand Identity Design"
- "Digital Design with AI"
- "MidJourney Designer"
- "Modern Graphic Design"
- "Database Security"

## 🎯 **الجمهور المستهدف**

- شركات تسويق تبحث عن مصممين
- عملاء يحتاجون هوية بصرية
- شركات تحتاج تطوير وحماية مواقع
- فرق تسويق تحتاج محتوى رقمي
- شركات ناشئة تحتاج حلول شاملة

## 📞 **معلومات التواصل**

- **Email**: qasim.alsmadi@example.com
- **Phone**: +963 937 470 930
- **Social**: LinkedIn, Facebook, Instagram, X, WhatsApp, Telegram

---

**ملاحظة**: هذا المشروع يعرض القدرات الشاملة لقاسم السمادي كمصمم جرافيكي ومطور برمجيات ومتخصص أمن، مع التركيز على استخدام أدوات الذكاء الاصطناعي في التصميم وتقنيات البرمجة الحديثة في التطوير.
