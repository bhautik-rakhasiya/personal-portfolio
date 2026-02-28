import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { projectsData } from '../data';
import SectionHeader from '../components/ui/SectionHeader';

const ProjectCard = ({ project, index, detailed = false }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="bg-dark-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_rgba(108,99,255,0.15)] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent z-1" />

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-4 z-3 bg-dark/70 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-light transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-light transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={14} />
                Source
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon Badge */}
        <div className="absolute top-4 left-4 z-2 text-2xl">{project.icon}</div>
        {project.featured && (
          <span className="absolute top-4 right-4 z-2 px-3 py-1 gradient-bg text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
        <p className="text-sm font-medium text-primary mb-3">{project.subtitle}</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description}</p>

        {/* Detailed View: expandable long description */}
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
                      <span className="text-primary mt-0.5 text-xs">▸</span>
                      {point}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors mb-4 cursor-pointer bg-transparent border-none"
            >
              {expanded ? 'Show Less' : 'Read More'}
              {expanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
            </button>
          </>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold text-primary-light bg-primary/10 border border-primary/15 rounded-full"
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
          description="Real-world projects I've built at Kevit Technology"
        />
      )}

      <div className={`grid gap-8 ${detailed ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {projectsData.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} detailed={detailed} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
