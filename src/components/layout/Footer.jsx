import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedinIn,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
} from 'react-icons/fa';
import { personalInfo, footerData } from '../../data';
import Logo from '../common/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-1 border-t border-border bg-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="sm" animated={true} asLink={true} />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-xs">
              {footerData.tagline}
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, link: personalInfo.socials.github },
                { icon: <FaLinkedinIn />, link: personalInfo.socials.linkedin },
                { icon: <FaEnvelope />, link: personalInfo.socials.email },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-5 flex items-center gap-2">
              <span className="w-8 h-[2px] gradient-bg rounded-full" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-5 flex items-center gap-2">
              <span className="w-8 h-[2px] gradient-bg rounded-full" />
              What I Do
            </h4>
            <ul className="flex flex-col gap-3">
              {footerData.services.map((service, i) => (
                <li
                  key={i}
                  className="text-sm text-text-secondary flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-5 flex items-center gap-2">
              <span className="w-8 h-[2px] gradient-bg rounded-full" />
              Get In Touch
            </h4>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Have a project idea? Let's turn it into reality.
            </p>
            <NavLink to="/contact">
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-[0_4px_15px_rgba(108,99,255,0.3)] hover:shadow-[0_8px_25px_rgba(108,99,255,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="text-xs" />
                Contact Me
              </motion.span>
            </NavLink>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center gradient-bg text-white rounded-xl shadow-[0_4px_20px_rgba(108,99,255,0.4)] hover:shadow-[0_8px_30px_rgba(108,99,255,0.6)] transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
