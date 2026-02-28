import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../sections/Contact';

const ContactPage = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Say Hello
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24 px-6 max-w-7xl mx-auto">
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
