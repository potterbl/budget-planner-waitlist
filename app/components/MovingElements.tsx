'use client'

import { motion } from 'framer-motion'

export function MovingLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Горизонтальные движущиеся линии */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute bg-foreground opacity-10"
          style={{
            width: '120%',
            height: '1px',
            top: `${10 + i * 15}%`,
            left: '-10%',
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: '100%',
            opacity: [0, 0.15, 0.15, 0]
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: 0.1 + i * 0.1, // Минимальные задержки
            ease: 'linear'
          }}
        />
      ))}

      {/* Вертикальные движущиеся линии */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute bg-foreground opacity-8"
          style={{
            width: '1px',
            height: '120%',
            left: `${15 + i * 25}%`,
            top: '-10%',
          }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{
            y: '100%',
            opacity: [0, 0.12, 0.12, 0]
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            delay: 0.2 + i * 0.15, // Быстрый старт
            ease: 'linear'
          }}
        />
      ))}

      {/* Диагональные линии */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`d-${i}`}
          className="absolute bg-foreground opacity-6"
          style={{
            width: '140%',
            height: '1px',
            left: '-20%',
            top: `${30 + i * 20}%`,
            transformOrigin: 'center',
            transform: 'rotate(15deg)',
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: '100%',
            opacity: [0, 0.08, 0.08, 0]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: 0.3 + i * 0.2, // Быстрый старт
            ease: 'linear'
          }}
        />
      ))}
    </div>
  )
}

export function FloatingDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-foreground"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            opacity: [0, 0.3, 0.15, 0],
            scale: [0, 1, 1, 0],
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 0.05, // Максимальная задержка 0.1 секунды
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

