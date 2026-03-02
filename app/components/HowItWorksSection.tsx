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
                <div className="w-32 h-64 border border-border/50 rounded-2xl bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center shadow-inner pt-6 px-4 pb-4">
                  {/* Image placeholder 9:16 - larger size */}
                  <div className="w-24 h-36 bg-gradient-to-b from-muted/20 to-muted/10 border border-border/30 rounded-lg flex items-center justify-center relative mb-4">
                    {/* Image icon placeholder */}
                    <div className="w-8 h-8 border border-muted/40 border-dashed rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-muted/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Text content below image */}
                  <div className="text-center">
                    <div className="text-xs text-muted mb-1 font-medium">Receipt</div>
                    <div className="text-sm font-semibold text-foreground mb-1">Uber ride</div>
                    <div className="text-xs text-muted">Auto-categorized</div>
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
