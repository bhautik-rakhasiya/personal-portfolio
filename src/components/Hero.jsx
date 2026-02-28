import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { heroData, contactData } from '../data';
import './Hero.css';

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
          if (currentText === word) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
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
    <span className="typewriter">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0, 0.2, 1] },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-greeting">{heroData.greeting}</span>
            <br />
            <span className="hero-name">{heroData.name}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <span className="hero-role-prefix">I'm a </span>
            <TypeWriter words={heroData.titles} />
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            {heroData.description}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <Link to="projects" smooth={true} offset={-80} duration={500}>
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(108, 99, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span className="btn-arrow">→</span>
              </motion.button>
            </Link>
            <a href={heroData.resumeLink} target="_blank" rel="noopener noreferrer">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {[
              { icon: <FaGithub />, link: contactData.socials.github, label: 'GitHub' },
              { icon: <FaLinkedinIn />, link: contactData.socials.linkedin, label: 'LinkedIn' },
              { icon: <FaTwitter />, link: contactData.socials.twitter, label: 'Twitter' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.6, 0, 0.2, 1] }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-ring ring-2" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
              alt="John Doe"
              className="hero-image"
            />
            {/* Floating tech badges */}
            <motion.div
              className="floating-badge badge-1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ⚛️ React
            </motion.div>
            <motion.div
              className="floating-badge badge-2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              🟢 Node.js
            </motion.div>
            <motion.div
              className="floating-badge badge-3"
              animate={{ y: [-8, 12, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              🎨 UI/UX
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link to="about" smooth={true} offset={-80} duration={500}>
          <motion.div
            className="scroll-indicator-inner"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>Scroll Down</span>
            <FaArrowDown />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
