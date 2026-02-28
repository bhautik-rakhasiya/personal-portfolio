import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { aboutData, personalInfo } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Photo Gallery */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="relative">
              {/* Main image */}
              <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[430px] rounded-2xl overflow-hidden border-[3px] border-primary/30 z-2">
                <img
                  src={personalInfo.photos[0] || personalInfo.profilePhoto}
                  alt="About me"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-dark-card text-5xl">👨‍💻</div>`;
                  }}
                />
              </div>

              {/* Offset decoration */}
              <div className="absolute top-4 -right-4 bottom-4 -left-4 border-2 border-primary rounded-2xl -z-1 opacity-20" />

              {/* Small floating photo */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-accent/40 z-3 shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={personalInfo.photos[1] || personalInfo.profilePhoto}
                  alt="Photo 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-dark-card text-2xl">📸</div>`;
                  }}
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-4 -left-4 bg-dark-card border border-border rounded-2xl px-5 py-4 flex items-center gap-3 z-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl font-black font-heading text-gradient">2+</span>
                <span className="text-xs text-text-secondary font-medium leading-tight">
                  Years of<br />Experience
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            {aboutData.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-text-secondary leading-relaxed text-base"
                variants={itemVariants}
              >
                {para}
              </motion.p>
            ))}

            {/* Highlights */}
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4" variants={itemVariants}>
              {aboutData.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 bg-primary/5 border border-border rounded-xl text-sm font-medium text-text-primary cursor-default hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        >
          {aboutData.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="glass text-center px-5 py-8 rounded-2xl relative overflow-hidden cursor-default group"
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(108, 99, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold font-heading text-gradient leading-none mb-2">
                {statsInView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    delay={i * 0.2}
                    decimals={stat.number % 1 !== 0 ? 2 : 0}
                  />
                )}
                <span className="text-gradient">{stat.suffix}</span>
              </div>
              <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
