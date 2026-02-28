import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';
import { contactData } from '../data';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! (Demo)');
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] },
    },
  };

  return (
    <section id="contact" className="section contact">
      {/* Background decoration */}
      <div className="contact-bg-orb orb-1" />
      <div className="contact-bg-orb orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Fill up the form and I'll get back to you within 24 hours. Or reach out directly through the info below.
            </p>

            <div className="contact-details">
              <motion.a
                href={`mailto:${contactData.email}`}
                className="contact-detail-item"
                whileHover={{ x: 8 }}
              >
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">{contactData.email}</span>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${contactData.phone}`}
                className="contact-detail-item"
                whileHover={{ x: 8 }}
              >
                <div className="contact-detail-icon">
                  <FaPhone />
                </div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <span className="contact-detail-value">{contactData.phone}</span>
                </div>
              </motion.a>

              <motion.div className="contact-detail-item" whileHover={{ x: 8 }}>
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">{contactData.location}</span>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              {[
                { icon: <FaGithub />, link: contactData.socials.github, label: 'GitHub' },
                { icon: <FaLinkedinIn />, link: contactData.socials.linkedin, label: 'LinkedIn' },
                { icon: <FaTwitter />, link: contactData.socials.twitter, label: 'Twitter' },
                { icon: <FaDribbble />, link: contactData.socials.dribbble, label: 'Dribbble' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form glass"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
                rows="5"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact-submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(108, 99, 255, 0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              {isSubmitting ? (
                <span className="submit-loading">Sending...</span>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
