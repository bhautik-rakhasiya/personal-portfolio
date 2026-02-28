import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData } from '../data';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className={`project-card ${project.featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.6, 0, 0.2, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="project-image-overlay" />

        {/* Hover Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="project-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
                <span>Source</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {project.featured && (
          <div className="project-featured-badge">Featured</div>
        )}
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projectsData
    : projectsData.filter((p) => p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of projects that showcase my skills and passion
          </p>
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="projects-toggle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-outline"
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'Show Featured' : 'View All Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
