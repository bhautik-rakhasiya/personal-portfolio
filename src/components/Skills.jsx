import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data';
import './Skills.css';

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            Technologies and tools I've been working with recently
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`skills-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="tab-indicator"
                  layoutId="skillTabIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid" ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills-grid-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card glass"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px ${skill.color}15`,
                    borderColor: `${skill.color}40`,
                  }}
                >
                  <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                    <skill.icon size={32} />
                  </div>
                  <h4 className="skill-name">{skill.name}</h4>
                  <div className="skill-progress-bar">
                    <motion.div
                      className="skill-progress-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: 'easeOut' }}
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
                      }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
