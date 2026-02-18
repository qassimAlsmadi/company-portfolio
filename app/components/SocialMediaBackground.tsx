'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SocialMediaBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div
      aria-hidden='true'
      className='fixed inset-0 -z-20 overflow-hidden pointer-events-none'
    >
      {/* Base gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-purple-950/40' />

      {/* Social media themed floating icons */}
      <div className='absolute inset-0'>
        {[
          { icon: '📱', delay: 0, baseX: 10, baseY: 15, size: 40 },
          { icon: '📸', delay: 0.5, baseX: 80, baseY: 25, size: 36 },
          { icon: '💬', delay: 1, baseX: 25, baseY: 70, size: 32 },
          { icon: '📊', delay: 1.5, baseX: 70, baseY: 60, size: 38 },
          { icon: '🎯', delay: 2, baseX: 45, baseY: 40, size: 34 },
          { icon: '📈', delay: 2.5, baseX: 15, baseY: 45, size: 36 },
        ].map(({ icon, delay, baseX, baseY, size }) => (
          <motion.div
            key={icon}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0.4],
              scale: [0, 1, 1],
              x: `${baseX + mousePos.x * 2}%`,
              y: `${baseY + mousePos.y * 2}%`,
            }}
            transition={{
              opacity: { duration: 1, delay, repeat: Infinity, repeatDelay: 5 },
              scale: { duration: 0.6, delay, type: 'spring' },
              x: { type: 'spring', stiffness: 20, damping: 15 },
              y: { type: 'spring', stiffness: 20, damping: 15 },
            }}
            className='absolute text-white/10'
            style={{ fontSize: `${size}px` }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Subtle animated grid (social media feel) */}
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]'
          style={{ backgroundSize: '48px 48px' }}
        />
      </div>

      {/* Glow ring on mouse (soft, not eye-straining) */}
      <motion.div
        animate={{
          x: `${50 + mousePos.x * 8}%`,
          y: `${50 + mousePos.y * 8}%`,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 20 }}
        className='absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none'
      />
    </div>
  );
}
