import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

/**
 * BR Logo component — a geometric SVG logo using the site's purple/cyan theme.
 * size: 'sm' | 'md' | 'lg' | 'xl'
 * animated: whether to apply hover animation
 * asLink: whether to wrap in a NavLink to "/"
 */
const Logo = ({ size = 'md', animated = true, asLink = true, className = '' }) => {
  const sizes = {
    sm: { width: 36, height: 36, fontSize: 13, offset: 11 },
    md: { width: 48, height: 48, fontSize: 17, offset: 15 },
    lg: { width: 64, height: 64, fontSize: 22, offset: 20 },
    xl: { width: 90, height: 90, fontSize: 30, offset: 29 },
  };
  const { width, height, fontSize, offset } = sizes[size] || sizes.md;

  const logoContent = (
    <motion.div
      className={`inline-flex items-center gap-2 select-none ${className}`}
      whileHover={animated ? { scale: 1.05 } : undefined}
      whileTap={animated ? { scale: 0.95 } : undefined}
    >
      {/* SVG Mark */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BR Logo"
      >
        <defs>
          <linearGradient id="brGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6c63ff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <linearGradient
            id="brGradStroke"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Hexagon background */}
        <path
          d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z"
          fill="url(#brGrad)"
          fillOpacity="0.12"
          stroke="url(#brGradStroke)"
          strokeWidth="1.5"
        />

        {/* Inner hexagon glow ring */}
        <path
          d="M24 7L40 16.5V31.5L24 41L8 31.5V16.5L24 7Z"
          fill="none"
          stroke="url(#brGrad)"
          strokeWidth="0.75"
          strokeOpacity="0.3"
        />

        {/* "BR" text */}
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill="url(#brGrad)"
          fontFamily="'Space Grotesk', 'Inter', sans-serif"
          fontWeight="800"
          fontSize="17"
          letterSpacing="-0.5"
        >
          BR
        </text>

        {/* Accent dot top-right */}
        <circle cx="38" cy="10" r="2.5" fill="#00d4ff" opacity="0.7" />
        {/* Accent dot bottom-left */}
        <circle cx="10" cy="38" r="2" fill="#6c63ff" opacity="0.6" />
      </svg>

      {/* Wordmark */}
      <span
        className="font-heading font-extrabold leading-none"
        style={{ fontSize: `${fontSize}px` }}
      >
        <span
          style={{
            background: 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Bhautik
        </span>
      </span>
    </motion.div>
  );

  if (asLink) {
    return <NavLink to="/">{logoContent}</NavLink>;
  }
  return logoContent;
};

export default Logo;
