import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const categories = ['All', 'Frontend', 'Backend', 'Cloud', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/3 blur-[100px] -bottom-50 -left-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="What I Know"
          title="Skills & Technologies"
          description="Technologies and tools I've been working with"
        />

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center gap-3 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              className={`relative px-6 py-2.5 text-sm font-semibold rounded-full border cursor-pointer transition-all duration-300 overflow-hidden ${
                activeCategory === cat
                  ? 'text-white border-transparent'
                  : 'text-text-secondary border-border hover:text-text-primary hover:border-primary bg-transparent'
              }`}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="absolute inset-0 gradient-bg rounded-full -z-1"
                  layoutId="skillTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="min-h-[200px]" ref={ref}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass flex flex-col items-center gap-3 px-4 py-7 rounded-2xl text-center cursor-default transition-all duration-300 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.04, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px ${skill.color}15`,
                    borderColor: `${skill.color}40`,
                  }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/3 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    <skill.icon size={28} />
                  </div>
                  <h4 className="text-sm font-semibold text-text-primary">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
