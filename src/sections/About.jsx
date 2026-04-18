import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { aboutData, personalInfo } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [expanded, setExpanded] = useState(false);
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.6, 0, 0.2, 1] } },
  };

  return (
    <section id="about" className="py-10 md:py-10 bg-dark-secondary relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/3 -top-50 -right-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Get to know me"
          title="About Me"
          description="Know more about who I am, what I do, and what drives me"
        />

        <motion.div
          className="flex flex-col gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Text Content */}
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <div>
              <motion.span
                className="inline-block text-xs font-semibold tracking-[3px] uppercase text-primary mb-3"
                variants={itemVariants}
              >
                Software Developer @ Kevit.io
              </motion.span>
              <motion.h3
                className="text-2xl sm:text-3xl font-bold font-heading text-text-primary mb-4 leading-tight"
                variants={itemVariants}
              >
                Building production-grade systems
                <br />
                <span className="text-gradient">end-to-end</span>
              </motion.h3>
            </div>

            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              {aboutData.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-text-secondary leading-relaxed text-base${
                    i >= 2 && !expanded ? ' hidden sm:block' : ''
                  }`}
                >
                  {para}
                </p>
              ))}
              {!expanded ? (
                <button
                  className="sm:hidden self-start text-sm font-semibold text-primary mt-1 cursor-pointer"
                  onClick={() => setExpanded(true)}
                >
                  Show more...
                </button>
              ) : (
                <button
                  className="sm:hidden self-start text-sm font-semibold text-primary mt-1 cursor-pointer"
                  onClick={() => setExpanded(false)}
                >
                  Show less
                </button>
              )}
            </motion.div>

            {/* Key facts */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2"
              variants={itemVariants}
            >
              {[
                { label: 'Location', value: '📍 Rajkot, Gujarat, India' },
                { label: 'Education', value: '🎓 B.E. Computer Engineering' },
                { label: 'Company', value: '💼 Kevit.io (Jun 2024 – Present)' },
                { label: 'Focus', value: '🚀 Full Stack Development' },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 px-4 py-3 bg-primary/5 border border-border rounded-xl"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium text-text-primary line-clamp-2">
                    {fact.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1"
              variants={itemVariants}
            >
              {aboutData.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2 px-3 py-3 bg-dark-card border border-border rounded-xl text-sm font-medium text-text-primary cursor-default hover:border-primary hover:bg-primary/10 transition-all duration-300 text-center"
                  whileHover={{ scale: 1.04, y: -2 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
