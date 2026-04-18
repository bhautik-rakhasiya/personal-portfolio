import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const addHover = () => {
      document
        .querySelectorAll('a, button, .hover-target, input, textarea, [role="button"]')
        .forEach((el) => {
          el.addEventListener('mouseenter', () => setIsHovering(true));
          el.addEventListener('mouseleave', () => setIsHovering(false));
        });
    };
    addHover();
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] rounded-full"
        style={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
          background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
          boxShadow: isHovering ? '0 0 12px rgba(108,99,255,0.8)' : '0 0 6px rgba(108,99,255,0.5)',
        }}
        animate={{
          x: position.x - (isHovering ? 6 : 4),
          y: position.y - (isHovering ? 6 : 4),
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30, mass: 0.4 }}
      />

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          borderColor: isHovering ? 'rgba(0,212,255,0.6)' : 'rgba(108,99,255,0.35)',
          background: isHovering ? 'rgba(108,99,255,0.06)' : 'transparent',
        }}
        animate={{
          x: position.x - (isHovering ? 22 : 16),
          y: position.y - (isHovering ? 22 : 16),
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 22, mass: 0.6 }}
      />
    </>
  );
};

export default CustomCursor;
