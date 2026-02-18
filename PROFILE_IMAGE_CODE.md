# 🖼️ كود الصورة الاحترافية المتحركة - قاسم السمادي

## 📍 **مكان الصورة**
```
public/images/profile.jpg
```

## 🎨 **الكود الكامل للصورة مع الأنيميشن والتفاعل**

### 📁 **المكون الرئيسي (Hero.tsx)**

```tsx
{/* Right Side - Profile Image */}
<motion.div
  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
  animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
  style={prefersReducedMotion ? undefined : { y }}
  className='relative'
>
  {/* Glowing Frame */}
  <div className='absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-60 animate-pulse' />
  
  {/* Rotating Border */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    className='absolute inset-0 rounded-full bg-linear-to-r from-purple-600 via-pink-600 to-indigo-600 p-1'
  >
    <div className='w-full h-full rounded-full bg-slate-950' />
  </motion.div>

  {/* Profile Image Container */}
  <div className='relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group'>
    {/* Hover Overlay */}
    <div className='absolute inset-0 bg-linear-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10' />
    
    {/* Profile Image */}
    <img
      src='/images/profile.jpg'
      alt='Qasim Al-Smadi - AI-Assisted Graphic Designer'
      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
      onError={(e) => {
        // Fallback to a placeholder if image not found
        const target = e.target as HTMLImageElement;
        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIyMDAiIGZpbGw9IiMxRTI5M0IiLz48dGV4dCB4PSIyMDAiIHk9IjIxMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UVwzYXNpbTwvdGV4dD48L3N2Zz4=';
      }}
    />

    {/* Floating Particles */}
    <div className='absolute inset-0 pointer-events-none'>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className='absolute w-2 h-2 bg-purple-400 rounded-full'
          style={{
            top: `${20 + (i * 15)}%`,
            left: `${10 + (i * 15)}%`,
          }}
        />
      ))}
    </div>
  </div>

  {/* Floating Icons */}
  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    className='absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-purple-300 text-2xl border border-purple-500/30'
  >
    🎨
  </motion.div>
  <motion.div
    animate={{ y: [10, -10, 10] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    className='absolute -bottom-8 -left-8 w-16 h-16 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-300 text-2xl border border-pink-500/30'
  >
    🤖
  </motion.div>
</motion.div>
```

## 🎯 **التخطيط الرئيسي للصفحة**

```tsx
<div className='max-w-6xl mx-auto w-full px-4 sm:px-6'>
  <div className='grid lg:grid-cols-2 gap-12 items-center'>
    {/* Left Side - Text Content */}
    <div className='max-w-3xl'>
      {/* النصوص والأزرار هنا */}
    </div>

    {/* Right Side - Profile Image */}
    {/* الكود أعلاه للصورة */}
  </div>
</div>
```

## ✨ **المميزات المضافة**

### 1. **🌟 الإطار المتوهج**
```css
bg-linear-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full blur-2xl opacity-60 animate-pulse
```
- إطار دائري متوهج بـ 3 ألوان
- تأثير ضبابي (blur) للإشعاع
- حركة نبضية (pulse) مستمرة

### 2. **🔄 الإطار الدوار**
```tsx
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
>
```
- إطار دوار كامل 360 درجة
- دورة كاملة كل 20 ثانية
- حركة سلسة ومستمرة

### 3. **🎯 تأثير Hover**
```tsx
<div className='... group-hover:opacity-100 transition-opacity duration-300 z-10' />
<img className='... group-hover:scale-105 transition-transform duration-500' />
```
- عند تمرير الماوس: ظهور طبقة لونية
- تكبير الصورة بنسبة 105%
- انتقال سلس 300-500ms

### 4. **✨ الجسيمات العائمة**
```tsx
{[...Array(6)].map((_, i) => (
  <motion.div
    animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
    transition={{
      duration: 2,
      delay: i * 0.3,
      repeat: Infinity,
      repeatDelay: 3,
    }}
  />
))}
```
- 6 جسيمات صغيرة حول الصورة
- حركة اختفاء وظهور متتالية
- تأخير زمني لكل جسيم

### 5. **🎨 الأيقونات العائمة**
```tsx
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
>
  🎨
</motion.div>
```
- أيقونتين عائمتين (🎨 و 🤖)
- حركة تصاعدية وتنازلية
- إطارات خلفية شفافة

## 📱 **التصميم المتجاوب**

```tsx
<div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group'>
```
- **Mobile**: 320x320px
- **Desktop**: 384x384px
- نسبة عرض إلى ارتفاع 1:1

## 🛡️ **الحماية من الأخطاء**

```tsx
onError={(e) => {
  const target = e.target as HTMLImageElement;
  target.src = 'data:image/svg+xml;base64,...';
}}
```
- صورة بديلة إذا لم يتم العثور على الصورة
- placeholder SVG احترافي
- يحافظ على مظهر الموقع

## 🎨 **الألوان المستخدمة**

### **الإطار المتوهج**:
- `from-purple-600` (بنفسجي غامق)
- `via-pink-600` (وردي متوسط)
- `to-indigo-600` (نيلي غامق)

### **الخلفية**:
- `bg-slate-950` (داكن جداً)
- `blur-2xl` (تأثير ضبابي قوي)

### **الجسيمات**:
- `bg-purple-400` (بنفسجي متوسط)
- `text-purple-300` (بنفسجي فاتح)

## 🚀 **الاعتمادات المطلوبة**

```json
{
  "dependencies": {
    "framer-motion": "^12.0.0",
    "react": "^18.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

## 📁 **هيكل الملفات**

```
public/
├── images/
│   └── profile.jpg    ← صورتك هنا
└── ...

app/components/
└── Hero.tsx          ← الكود الرئيسي
```

## 🔧 **التعديلات الممكنة**

### تغيير الألوان:
```tsx
// غير الألوان في الإطار
bg-linear-to-r from-blue-600 via-green-600 to-red-600
```

### تغيير سرعة الحركة:
```tsx
transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
// غير 20 إلى أي رقم بالثواني
```

### تغيير عدد الجسيمات:
```tsx
{[...Array(6)].map((_, i) => (
// غير 6 إلى أي رقم
```

---

**هذا الكود جاهز للنسخ واللصق في أي مشروع React/Next.js! 🎨✨**
