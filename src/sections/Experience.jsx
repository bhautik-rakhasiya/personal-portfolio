import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative w-full md:w-1/2 pb-12 md:pb-16 ${
        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
      } pl-12 md:pl-0 text-left`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.6, 0, 0.2, 1] }}
    >
      <div className="glass p-6 md:p-7 rounded-2xl hover:border-primary/30 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] transition-all duration-300">
        <div className={`flex items-start gap-4 mb-5 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
          <span
            className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-xl border"
            style={{ background: `${item.color}15`, borderColor: `${item.color}30` }}
          >
            {item.icon}
          </span>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-text-primary">{item.role}</h3>
            <p className="text-sm font-semibold text-primary">{item.company}</p>
            <div
              className={`flex items-center gap-2 text-xs text-text-muted mt-1 ${isLeft ? 'md:justify-end' : ''}`}
            >
              <span>{item.period}</span>
              <span className="opacity-50">•</span>
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
          {item.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/15 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline node */}
      <div
        className={`absolute top-8 w-4 h-4 rounded-full border-[3px] z-2 bg-dark-secondary ${
          isLeft ? 'right-auto left-0 md:left-auto md:-right-[8px]' : 'left-0 md:-left-[8px]'
        }`}
        style={{ borderColor: item.color }}
      >
        <div
          className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: item.color }}
        />
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <div>
    <SectionHeader
      subtitle="My Journey"
      title="Work Experience"
      description="My professional career timeline"
    />
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />
      {experienceData.map((item, i) => (
        <TimelineItem key={i} item={item} index={i} />
      ))}
    </div>
  </div>
);

export default Experience;
