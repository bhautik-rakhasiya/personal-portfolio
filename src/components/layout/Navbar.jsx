import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { HiDownload } from 'react-icons/hi';
import { navLinks, personalInfo } from '../../data';
import Logo from '../common/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? 'py-3 bg-dark/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo size="sm" animated={true} asLink={true} />

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 gradient-bg rounded-full"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <motion.div
          className="hidden lg:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {/* Download CV */}
          <a
            href={personalInfo.resumeLink}
            download="Bhautik_Rakhasiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary border-2 border-primary/40 rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDownload size={15} />
              Download CV
            </motion.span>
          </a>
          {/* Let's Talk */}
          <NavLink to="/contact">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-[0_4px_20px_rgba(108,99,255,0.4)] hover:shadow-[0_8px_30px_rgba(108,99,255,0.6)] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.span>
          </NavLink>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="flex lg:hidden bg-transparent border-none text-text-primary p-2 rounded-lg hover:bg-primary/10 transition-all z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </motion.button>
      </div>

      {/* Mobile Sidebar Drawer — rendered via portal to escape motion.nav transform context */}
      {createPortal(
        <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar panel - slides from left */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-72 bg-dark-secondary border-r border-border z-[999] flex flex-col overflow-y-auto shadow-[4px_0_40px_rgba(0,0,0,0.5)]"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.6, 0, 0.2, 1] }}
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <Logo size="sm" animated={false} asLink={false} />
                <motion.button
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all bg-transparent border-none cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <HiX size={22} />
                </motion.button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-4 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.path}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.07, duration: 0.35 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                            isActive
                              ? 'text-primary bg-primary/10 border border-primary/20'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                          }`
                        }
                      >
                        <span className="text-xs text-primary font-heading font-bold">0{index + 1}.</span>
                        {link.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom actions */}
              <motion.div
                className="px-4 py-6 border-t border-border flex flex-col gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.35 }}
              >
                <a
                  href={personalInfo.resumeLink}
                  download="Bhautik_Rakhasiya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary border-2 border-primary/40 rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <HiDownload size={16} />
                  Download CV
                </a>
                <NavLink to="/contact">
                  <span className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white gradient-bg rounded-xl w-full">
                    Let's Talk
                  </span>
                </NavLink>
              </motion.div>
            </motion.div>
          </>
        )}      </AnimatePresence>,
        document.body,
      )}
    </motion.nav>
  );
};

export default Navbar;
