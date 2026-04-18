import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { educationData } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="mt-20 md:mt-28">
      <SectionHeader
        subtitle="Academic Background"
        title="Education"
        description="My academic journey and qualifications"
      />

      <div className="max-w-3xl mx-auto space-y-6" ref={ref}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)] transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.7, ease: [0.6, 0, 0.2, 1] }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl text-3xl border"
                style={{ background: `${edu.color}10`, borderColor: `${edu.color}25` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {edu.icon}
              </motion.div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{edu.degree}</h3>
                    <p className="text-sm font-semibold text-primary">{edu.field}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full">
                      {edu.degree.startsWith('Bachelor') ? 'CGPA: ' : ''}
                      {edu.cgpa}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted mb-4">
                  <span className="flex items-center gap-1">🏛️ {edu.institution}</span>
                  <span className="opacity-30">•</span>
                  <span className="flex items-center gap-1">📍 {edu.location}</span>
                  <span className="opacity-30">•</span>
                  <span className="flex items-center gap-1">📅 {edu.year}</span>
                </div>

                <ul className="flex flex-col gap-2">
                  {edu.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                      <span className="text-primary mt-1 text-xs">▸</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
