import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data';

const TypeWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText === word) setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-accent font-semibold">
      {currentText}
      <span className="text-primary animate-pulse font-light">|</span>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1] } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Gradient orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px] -top-25 -left-50 animate-float pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] -bottom-38 -right-25 animate-float-delay pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-accent-green/6 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-delay-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 relative z-1 w-full">
        {/* Text Content */}
        <motion.div
          className="flex-1 max-w-2xl text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading leading-[1.1] mb-5"
            variants={itemVariants}
          >
            <span className="text-text-secondary text-lg sm:text-xl lg:text-2xl font-medium block mb-2">
              Hi, I'm
            </span>
            <span className="text-gradient bg-[length:200%_auto] animate-gradient">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="text-lg sm:text-xl lg:text-2xl font-medium text-text-secondary mb-5 min-h-[40px]"
            variants={itemVariants}
          >
            <span className="text-text-muted">I'm a </span>
            <TypeWriter words={personalInfo.titles} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base lg:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {personalInfo.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex gap-4 flex-wrap justify-center lg:justify-start mb-8"
            variants={itemVariants}
          >
            <NavLink to="/projects">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-[0_4px_20px_rgba(108,99,255,0.4)] cursor-pointer border-none"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(108, 99, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            </NavLink>
            <a
              href={personalInfo.resumeLink}
              download="Bhautik_Rakhasiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-primary bg-transparent border-2 border-primary rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex gap-4 justify-center lg:justify-start mb-5"
            variants={itemVariants}
          >
            {[
              { icon: <FaGithub />, link: personalInfo.socials.github, label: 'GitHub' },
              { icon: <FaLinkedinIn />, link: personalInfo.socials.linkedin, label: 'LinkedIn' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-border rounded-xl text-text-secondary bg-white/2 hover:border-primary hover:text-primary hover:bg-primary/8 transition-all duration-300"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.6, 0, 0.2, 1] }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]">
            {/* Spinning rings */}
            <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-[36px] animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 border-2 border-dashed border-accent/10 rounded-[44px] animate-[spin_30s_linear_infinite_reverse]" />

            {/* Photo */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative z-2 border-[3px] border-primary/30 img-placeholder">
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-dark-card text-6xl">👨‍💻</div>`;
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator - arrow only, no text */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      ></motion.div>
    </section>
  );
};

export default Hero;
