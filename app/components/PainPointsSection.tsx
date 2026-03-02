'use client'

import { motion } from 'framer-motion'

const painPoints = [
  "Bleeding money on forgotten subscriptions.",
  "Earning in USD but guessing your real spend in EUR or PLN.",
  "Wasting hours in spreadsheets instead of building your business.",
  "Using bloated finance apps to log a $3 coffee."
]

export function PainPointsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="p-6 border border-border rounded-lg bg-background hover:shadow-sm transition-shadow duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
            >
              <p className="text-lg text-foreground">{point}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

