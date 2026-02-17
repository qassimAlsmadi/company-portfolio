"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientPageTransition({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
