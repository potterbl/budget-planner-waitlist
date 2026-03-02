'use client'

import { motion } from 'framer-motion'

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
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
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
            <div className="w-48 h-96 border border-border rounded-3xl bg-background shadow-sm flex items-center justify-center">
              <div className="w-32 h-64 border border-border rounded-2xl bg-background/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xs text-muted mb-4">Uber</div>
                  <div className="text-2xl font-bold text-foreground mb-2">40 PLN</div>
                  <div className="text-xs text-muted">≈ $10.50 USD</div>
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
