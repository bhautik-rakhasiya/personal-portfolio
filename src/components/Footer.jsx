import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble, FaHeart, FaArrowUp } from 'react-icons/fa';
import { navLinks, contactData } from '../data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="home" smooth={true} duration={500} className="footer-logo">
              {'<JD />'}
            </Link>
            <p className="footer-tagline">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="footer-link"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-socials">
              {[
                { icon: <FaGithub />, link: contactData.socials.github },
                { icon: <FaLinkedinIn />, link: contactData.socials.linkedin },
                { icon: <FaTwitter />, link: contactData.socials.twitter },
                { icon: <FaDribbble />, link: contactData.socials.dribbble },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="footer-heart" /> using React
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.div
        className="scroll-to-top"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="home" smooth={true} duration={800}>
          <FaArrowUp />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
