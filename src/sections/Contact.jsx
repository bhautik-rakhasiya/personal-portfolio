import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaPaperPlane,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';
import { contactData, personalInfo } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject}`,
          message: formData.message,
          from_name: formData.name,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Form submit error:', err);
      setErrorMsg('Something went wrong. Please try emailing me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const contactMethods = [
    { icon: <FaEnvelope />, label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
    { icon: <FaPhoneAlt />, label: 'Phone', value: contactData.phone, href: `tel:${contactData.phone}` },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: personalInfo.socials?.linkedin || '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: personalInfo.socials?.github || '#', label: 'GitHub' },
    { icon: <FaInstagram />, href: personalInfo.socials?.instagram || '#', label: 'Instagram' },
  ];

  const isSending = status === 'sending';
  const isSent    = status === 'success';
  const isError   = status === 'error';

  return (
    <div ref={ref}>
      <SectionHeader
        subtitle="Get In Touch"
        title="Let's Work Together"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-8"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Methods */}
          <div className="flex flex-col gap-5">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 p-4 bg-dark-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group no-underline"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 text-lg">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">
                    {method.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Follow me
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-dark-card border border-border text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Decorative */}
          <motion.div
            className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/15 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <p className="text-text-primary font-semibold mb-1">🚀 Open to Opportunities</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              I'm always interested in new projects and collaborations. Whether it's a full-time role, freelance gig, or side project — let's connect!
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:col-span-3 flex flex-col gap-5 p-8 bg-dark-card border border-border rounded-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-dark border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-dark border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Collaboration"
              className="w-full px-4 py-3 bg-dark border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 bg-dark border border-border rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-y min-h-[120px]"
            />
          </div>

          {/* Status messages */}
          {isSent && (
            <motion.div
              className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaCheckCircle />
              <span>Message sent! I'll get back to you soon. ✨</span>
            </motion.div>
          )}
          {isError && (
            <motion.div
              className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <FaExclamationCircle />
              <span>{errorMsg}</span>
            </motion.div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSending}
            className="flex items-center justify-center gap-2 w-full py-4 gradient-bg text-white rounded-xl font-semibold cursor-pointer border-none text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={!isSending ? { scale: 1.02 } : {}}
            whileTap={!isSending ? { scale: 0.98 } : {}}
          >
            {isSending ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : isSent ? (
              <>
                <FaCheckCircle size={14} />
                Message Sent!
              </>
            ) : (
              <>
                <FaPaperPlane size={14} />
                Send Message
              </>
            )}
          </motion.button>

          <p className="text-center text-xs text-text-muted">
            I'll get back to you as soon as possible.
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
