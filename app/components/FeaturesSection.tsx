'use client'

import { motion } from 'framer-motion'
import { Globe, Brain, FileText, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: "Multi-currency Engine",
    description: "Live exchange rates. No manual math."
  },
  {
    icon: Brain,
    title: "Honest AI Coach",
    description: "Warns you before you go broke. No fluff."
  },
  {
    icon: FileText,
    title: "One-Click Reports",
    description: "Export elegant PDF reports with attached receipts."
  },
  {
    icon: MessageSquare,
    title: "Telegram Companion",
    description: "Don't open the app. Just text our bot."
  }
]

export function FeaturesSection() {
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
            Features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 border border-border rounded-lg bg-background hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="mb-4">
                <feature.icon className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
