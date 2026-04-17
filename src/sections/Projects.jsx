import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLock, FaChevronDown, FaChevronUp, FaEnvelope } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { projectsData } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const ConfidentialOverlay = ({ color }) => (
  <motion.div
    className="absolute inset-0 z-3 flex flex-col items-center justify-center gap-4"
    style={{
      background: `linear-gradient(135deg, ${color}cc 0%, rgba(10,10,15,0.92) 60%)`,
      backdropFilter: 'blur(6px)',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {/* Lock icon */}
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0.4, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0.4, rotate: 15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: `${color}25`, border: `2px solid ${color}60` }}
      >
        <FaLock size={24} style={{ color }} />
      </div>
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ border: `2px solid ${color}40` }}
        animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>

    {/* Badge */}
    <motion.div
      className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white"
      style={{ background: `${color}40`, border: `1px solid ${color}60` }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
    >
      <HiShieldCheck size={13} />
      Confidential Project
    </motion.div>

    {/* Sub text */}
    <motion.p
      className="text-xs text-white/60 text-center px-6 leading-relaxed"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.14 }}
    >
      NDA protected · Details available on request
    </motion.p>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <NavLink to="/contact">
        <motion.span
          className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white rounded-full cursor-pointer"
          style={{ background: color, boxShadow: `0 4px 20px ${color}60` }}
          whileHover={{ scale: 1.07, boxShadow: `0 8px 30px ${color}80` }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope size={11} />
          Discuss This Project
        </motion.span>
      </NavLink>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, index, detailed = false }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group bg-dark-card border border-border rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        boxShadow: isHovered
          ? `0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px ${project.color}30, 0 0 40px ${project.color}12`
          : '0 4px 20px rgba(0,0,0,0.2)',
        borderColor: isHovered ? `${project.color}40` : undefined,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image area */}
      <div className="relative w-full h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Always-visible bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent z-1 pointer-events-none" />

        {/* Tinted color wash on hover */}
        <motion.div
          className="absolute inset-0 z-2 pointer-events-none"
          style={{ background: `${project.color}18` }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Confidential overlay */}
        <AnimatePresence>
          {isHovered && <ConfidentialOverlay color={project.color} />}
        </AnimatePresence>

        {/* Top-left icon */}
        <motion.div
          className="absolute top-4 left-4 z-4 w-10 h-10 flex items-center justify-center rounded-xl text-xl border"
          style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}
          animate={{ scale: isHovered ? 1.15 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {project.icon}
        </motion.div>

        {/* Private badge - top right */}
        <div className="absolute top-4 right-4 z-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{ background: 'rgba(10,10,15,0.75)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(4px)' }}
        >
          <FaLock size={8} />
          Private
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Title + color accent line */}
        <div className="flex items-start gap-3 mb-1">
          <div
            className="mt-1.5 w-1 h-4 rounded-full flex-shrink-0"
            style={{ background: project.color }}
          />
          <h3 className="text-lg font-bold text-text-primary leading-tight">{project.title}</h3>
        </div>
        <p className="text-sm font-medium mb-3 ml-4" style={{ color: project.color }}>
          {project.subtitle}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description}</p>

        {/* Expandable details */}
        {detailed && project.longDescription && (
          <>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  className="flex flex-col gap-2 mb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.longDescription.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-0.5 text-xs flex-shrink-0" style={{ color: project.color }}>▸</span>
                      {point}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity mb-4 cursor-pointer bg-transparent border-none"
              style={{ color: project.color }}
            >
              {expanded ? 'Show Less' : 'Read More'}
              {expanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>
          </>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full border transition-all duration-200 group-hover:border-opacity-40"
              style={{
                color: project.color,
                background: `${project.color}10`,
                borderColor: `${project.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ detailed = false, showHeader = true }) => {
  return (
    <div>
      {showHeader && (
        <SectionHeader
          subtitle="My Work"
          title="Featured Projects"
          description="Real-world projects built at Kevit.io — hover to learn more"
        />
      )}

      <div className={`grid gap-8 ${detailed ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
        {projectsData.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} detailed={detailed} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
