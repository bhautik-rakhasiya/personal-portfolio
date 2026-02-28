import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = true, text = '' }) => {
  if (fullScreen) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            className="flex gap-1 font-heading text-6xl font-black"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
          >
            <span className="text-gradient">B</span>
            <span className="text-gradient">R</span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="h-[3px] rounded-full overflow-hidden bg-primary/15"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="h-full gradient-bg rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Text */}
          <motion.p
            className="text-xs tracking-[3px] uppercase text-text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {text || 'Loading...'}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // Inline / section loader
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
        </div>
        {text && (
          <p className="text-sm text-text-muted tracking-wide">{text}</p>
        )}
      </div>
    </div>
  );
};

export default Loader;
