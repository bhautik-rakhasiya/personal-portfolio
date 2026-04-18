import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description }) => (
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {subtitle && (
      <span className="inline-block text-xs font-semibold uppercase tracking-[3px] text-primary mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gradient mb-4">{title}</h2>
    {description && (
      <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;
