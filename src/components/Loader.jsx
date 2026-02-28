import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="loader-content">
        <motion.div
          className="loader-logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.68, -0.55, 0.27, 1.55] }}
        >
          <span className="loader-letter">J</span>
          <span className="loader-letter">D</span>
        </motion.div>
        <motion.div
          className="loader-bar-container"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="loader-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
