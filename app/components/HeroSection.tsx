'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative">
      <div className="max-w-4xl mx-auto text-center flex-1 flex items-center">
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop losing money to currency math.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The minimalist AI expense tracker for expats & freelancers. Snap a receipt, let AI do the rest.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
