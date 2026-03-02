'use client'

import { motion } from 'framer-motion'

interface GeometricPatternProps {
  variant?: 'circles' | 'squares' | 'dots' | 'grid'
  opacity?: number
}

export function GeometricPattern({ variant = 'circles', opacity = 0.08 }: GeometricPatternProps) {
  if (variant === 'circles') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-foreground"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              left: `${-200 + Math.sin(i * 0.7) * 300}px`,
              top: `${-200 + Math.cos(i * 0.5) * 400}px`,
              opacity: opacity / (i * 0.5 + 1),
              borderWidth: '1px',
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 3
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'squares') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-foreground"
            style={{
              width: `${60 + i * 30}px`,
              height: `${60 + i * 30}px`,
              left: `${5 + Math.sin(i * 1.2) * 90}%`, // Распределяем по всей ширине
              top: `${10 + Math.cos(i * 0.8) * 80}%`, // По всей высоте
              opacity: opacity * 0.8,
              transformOrigin: 'center',
              borderWidth: '1px',
            }}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 45, scale: 1 }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: i * 1.5
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
            backgroundSize: '60px 60px',
            opacity: opacity * 1.2,
            color: 'var(--foreground)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: opacity * 1.2 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: opacity * 1.5 }}>
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                color="var(--foreground)"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </svg>

        {/* Добавим движущиеся линии */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-foreground"
            style={{
              width: '100%',
              height: '1px',
              top: `${20 + i * 20}%`,
              opacity: opacity * 0.4,
            }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
          />
        ))}
      </div>
    )
  }

  return null
}
