import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { aboutData } from '../data';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.6, 0, 0.2, 1] },
    },
  };

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Here you'll find more information about me, what I do, and my current skills
          </p>
        </motion.div>

        <motion.div
          className="about-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* About Image */}
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image-wrapper">
              <img
                src={aboutData.image}
                alt="About me"
                className="about-image"
              />
              <div className="about-image-decoration" />
              <div className="about-image-border" />

              {/* Experience Badge */}
              <motion.div
                className="experience-badge"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="experience-badge-number">5+</span>
                <span className="experience-badge-text">Years of<br />Experience</span>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div className="about-text" variants={itemVariants}>
            {aboutData.description.map((para, index) => (
              <motion.p
                key={index}
                className="about-paragraph"
                variants={itemVariants}
              >
                {para}
              </motion.p>
            ))}

            <motion.div className="about-highlights" variants={itemVariants}>
              {[
                { icon: '🎯', text: 'Problem Solver' },
                { icon: '🚀', text: 'Fast Learner' },
                { icon: '🤝', text: 'Team Player' },
                { icon: '💡', text: 'Creative Thinker' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="about-highlight-item"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <span className="about-highlight-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        >
          {aboutData.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(108, 99, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-number">
                {statsInView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={index * 0.2}
                  />
                )}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-decoration" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
