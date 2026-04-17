import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { aboutData, personalInfo } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
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
    <section id="about" className="py-20 md:py-28 bg-dark-secondary relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/3 -top-50 -right-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Get to know me"
          title="About Me"
          description="Know more about who I am, what I do, and what drives me"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Photo */}
          <motion.div className="flex justify-center lg:justify-start" variants={itemVariants}>
            <div className="relative">
              {/* Main portrait */}
              <div className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] rounded-3xl overflow-hidden border-[3px] border-primary/30 z-2 shadow-[0_20px_60px_rgba(108,99,255,0.2)]">
                <img
                  src={personalInfo.profilePhoto}
                  alt="Bhautik Rakhasiya"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-dark-card text-5xl">👨‍💻</div>`;
                  }}
                />
                {/* Photo overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
              </div>

              {/* Decorative offset border */}
              <div className="absolute top-5 -right-5 bottom-5 -left-5 border-2 border-primary/20 rounded-3xl -z-1" />

              {/* Experience badge */}
              <motion.div
                className="absolute -top-5 -left-5 bg-dark-card border border-border rounded-2xl px-5 py-4 flex items-center gap-3 z-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl font-black font-heading text-gradient">2+</span>
                <span className="text-xs text-text-secondary font-medium leading-tight">
                  Years of<br />Experience
                </span>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-dark-card border border-border rounded-2xl px-5 py-4 flex items-center gap-3 z-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl font-black font-heading text-gradient">4+</span>
                <span className="text-xs text-text-secondary font-medium leading-tight">
                  Projects<br />Delivered
                </span>
              </motion.div>
            </div>
          </motion.div>

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
                Building production-grade systems<br />
                <span className="text-gradient">end-to-end</span>
              </motion.h3>
            </div>

            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              {aboutData.paragraphs.map((para, i) => (
                <p key={i} className="text-text-secondary leading-relaxed text-base">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Key facts */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2" variants={itemVariants}>
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
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{fact.label}</span>
                  <span className="text-sm font-medium text-text-primary">{fact.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1" variants={itemVariants}>
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
        >
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl relative overflow-hidden cursor-default group flex items-center gap-6 px-8 py-7"
              whileHover={{ y: -6, boxShadow: '0 24px 50px rgba(108, 99, 255, 0.18)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-2xl shadow-lg">
                {stat.icon}
              </div>
              {/* Text */}
              <div>
                <div className="text-4xl md:text-5xl font-extrabold font-heading text-gradient leading-none mb-1">
                  {statsInView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      delay={i * 0.3}
                      separator=","
                    />
                  )}
                  <span className="text-gradient">{stat.suffix}</span>
                </div>
                <div className="text-base font-bold text-text-primary mb-0.5">{stat.label}</div>
                <div className="text-xs text-text-secondary">{stat.desc}</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
