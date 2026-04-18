import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../sections/Experience';
import Education from '../sections/Education';

const ExperiencePage = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Career Journey
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            My professional journey as a Full Stack Developer and academic background in Computer
            Engineering.
          </p>
        </motion.div>
      </section>

      {/* Experience */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <Experience />
      </section>

      {/* Education */}
      <section className="py-12 pb-24 px-6 max-w-7xl mx-auto">
        <Education />
      </section>
    </>
  );
};

export default ExperiencePage;
