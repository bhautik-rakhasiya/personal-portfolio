import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experienceData } from '../data';
import './Experience.css';

const TimelineItem = ({ item, index, isLeft }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.6, 0, 0.2, 1] }}
    >
      <div className="timeline-content glass">
        <div className="timeline-header">
          <span className="timeline-icon" style={{ background: `${item.color}20`, borderColor: `${item.color}40` }}>
            {item.icon}
          </span>
          <div className="timeline-meta">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <div className="timeline-info">
              <span className="timeline-date">{item.date}</span>
              <span className="timeline-dot-sep">•</span>
              <span className="timeline-location">{item.location}</span>
            </div>
          </div>
        </div>
        <ul className="timeline-description">
          {item.description.map((desc, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              {desc}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="timeline-node" style={{ borderColor: item.color }}>
        <div className="timeline-node-inner" style={{ background: item.color }} />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            A timeline of my professional journey and career growth
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
