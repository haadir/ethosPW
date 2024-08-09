"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
  initialX: number;
  delay: number;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, initialX, delay }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 0, x: initialX }}
      animate={{ opacity: 1, y: 0, x:0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: delay, duration: 1 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;

