'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href='https://wa.me/963937470930'
      target='_blank'
      rel='noopener noreferrer'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='
        fixed bottom-6 right-6
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-green-500
        text-white
        text-2xl
        shadow-lg
        hover:shadow-[0_0_30px_rgba(34,197,94,0.7)]
        transition
        z-50
      '
    >
      <FaWhatsapp />
    </motion.a>
  );
}
