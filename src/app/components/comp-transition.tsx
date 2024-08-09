"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;
