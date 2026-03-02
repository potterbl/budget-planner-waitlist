'use client'

import { motion } from 'framer-motion'

interface FloatingBlobProps {
  size?: 'sm' | 'md' | 'lg'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  delay?: number
}

export function FloatingBlob({ size = 'md', position = 'top-right', delay = 0 }: FloatingBlobProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  }

  const positionClasses = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${positionClasses[position]} pointer-events-none`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.02, 0.01, 0.03, 0.01],
        scale: [0.8, 1.1, 0.9, 1.05, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut'
      }}
    >
      <div
        className="w-full h-full rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, var(--foreground) 0%, transparent 70%)`
        }}
      />
    </motion.div>
  )
}
