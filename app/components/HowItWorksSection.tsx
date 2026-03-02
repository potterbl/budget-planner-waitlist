'use client'

import { motion } from 'framer-motion'
import { GeometricPattern } from './GeometricPattern'
import { AnimatedNetwork } from './AnimatedNetwork'

const steps = [
  {
    number: "01",
    title: "Zero Friction",
    description: "Text 'Uber 40 PLN' or snap a receipt"
  },
  {
    number: "02",
    title: "AI Brain",
    description: "Extracts amount, currency, and categorizes"
  },
  {
    number: "03",
    title: "Live Conversion",
    description: "Auto-converts to your base USD balance"
  },
  {
    number: "04",
    title: "Absolute Control",
    description: "Clean charts and honest AI push-notifications"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <GeometricPattern variant="grid" opacity={0.08} />
      <AnimatedNetwork nodeCount={15} opacity={0.06} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            How it works
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* Left Steps */}
          <div className="space-y-12">
            {steps.slice(0, 2).map((step, index) => (
              <motion.div
                key={step.number}
                className="text-right lg:text-right"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-mono text-muted mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone shadow */}
              <div className="absolute inset-0 bg-foreground/5 blur-2xl transform translate-y-4 scale-105 rounded-3xl" />

              {/* Phone body */}
              <div className="relative w-48 h-96 border-2 border-border rounded-3xl bg-gradient-to-b from-background to-background/95 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Phone notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-border rounded-full" />

                {/* Screen content */}
                <div className="w-32 h-64 border border-border/50 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <motion.div
                      className="text-xs text-muted mb-4 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      Uber
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold text-foreground mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.3, type: 'spring' }}
                    >
                      40 PLN
                    </motion.div>
                    <motion.div
                      className="text-xs text-muted"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5, duration: 0.4 }}
                    >
                      ≈ $10.50 USD
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Steps */}
          <div className="space-y-12">
            {steps.slice(2).map((step, index) => (
              <motion.div
                key={step.number}
                className="text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-sm font-mono text-muted mb-2">Step {step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
