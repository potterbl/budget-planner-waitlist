'use client'

import { motion } from 'framer-motion'

export function TimelineSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Official Launch: June 2026. Just 3 months away.
        </motion.h2>

        <motion.p
          className="text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am building this in public. The V1 drops in June. But if this waitlist hits 500 people,
          I will accelerate development and ship in April. Your move.
        </motion.p>
      </div>
    </section>
  )
}

