import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOAD_PHRASES = ['Initializing...', 'Almost ready...'];

const Loader = ({ fullScreen = true, text = '' }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!fullScreen) return;
    const phraseTimer = setInterval(() => {
      setPhraseIndex((i) => Math.min(i + 1, LOAD_PHRASES.length - 1));
    }, 900);
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return p + Math.random() * 6 + 2;
      });
    }, 80);
    return () => {
      clearInterval(phraseTimer);
      clearInterval(progressTimer);
    };
  }, [fullScreen]);

  if (fullScreen) {
    return (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Background particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#6c63ff' : '#00d4ff',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Glow orbs */}
        <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-[120px] -top-20 -left-20 pointer-events-none" />
        <div className="absolute w-80 h-80 rounded-full bg-accent/8 blur-[100px] -bottom-20 -right-20 pointer-events-none" />

        <div className="flex flex-col items-center gap-8 relative z-10">
          {/* Logo mark with orbital rings */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border border-dashed border-primary/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
            {/* Middle ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full border border-dashed border-accent/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner glow circle */}
            <motion.div
              className="absolute w-16 h-16 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Hexagon SVG logo */}
            <motion.svg
              width="72"
              height="72"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ scale: 0, rotate: -60, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.68, -0.55, 0.27, 1.55] }}
            >
              <defs>
                <linearGradient
                  id="loaderGrad"
                  x1="0"
                  y1="0"
                  x2="48"
                  y2="48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#6c63ff" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
              <path
                d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z"
                fill="url(#loaderGrad)"
                fillOpacity="0.15"
                stroke="url(#loaderGrad)"
                strokeWidth="1.5"
              />
              <path
                d="M24 7L40 16.5V31.5L24 41L8 31.5V16.5L24 7Z"
                fill="none"
                stroke="url(#loaderGrad)"
                strokeWidth="0.75"
                strokeOpacity="0.35"
              />
              <text
                x="24"
                y="30"
                textAnchor="middle"
                fill="url(#loaderGrad)"
                fontFamily="'Space Grotesk', 'Inter', sans-serif"
                fontWeight="800"
                fontSize="17"
                letterSpacing="-0.5"
              >
                BR
              </text>
              <circle cx="38" cy="10" r="2.5" fill="#00d4ff" opacity="0.8" />
              <circle cx="10" cy="38" r="2" fill="#6c63ff" opacity="0.7" />
            </motion.svg>

            {/* Orbiting dot */}
            <motion.div
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                boxShadow: '0 0 8px rgba(108,99,255,0.8)',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              initial={{ x: 52, y: 0 }}
            />
          </div>

          {/* Name */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-2xl tracking-tight">
              <span
                style={{
                  background: 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {/* Bhautik Rakhasiya */}
              </span>
            </h2>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-56 h-[3px] rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
                  boxShadow: '0 0 8px rgba(108,99,255,0.6)',
                }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            {/* Glow pulse on progress end */}
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
              style={{
                right: `${100 - Math.min(progress, 100)}%`,
                boxShadow: '0 0 6px #00d4ff',
                opacity: progress < 100 ? 1 : 0,
              }}
            />
          </motion.div>

          {/* Animated phrase */}
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              className="text-[11px] tracking-[3px] uppercase text-text-muted"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              {text || LOAD_PHRASES[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  // Inline / section loader
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{ borderTopColor: '#6c63ff', borderRightColor: '#00d4ff' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-[6px] rounded-full bg-primary/5 flex items-center justify-center">
            <span
              className="text-[8px] font-black font-heading"
              style={{
                background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BR
            </span>
          </div>
        </div>
        {text && <p className="text-sm text-text-muted tracking-wide">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
