'use client'

import { motion } from 'framer-motion'
import { Linkedin, MessageCircle, Instagram } from 'lucide-react'
import { FloatingBlob } from './FloatingBlob'

export function BuilderSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <FloatingBlob size="lg" position="top-left" delay={2} />
      <FloatingBlob size="md" position="bottom-right" delay={5} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet the Builder
        </motion.h2>

        <div className="flex flex-col items-center">
          <motion.div
            className="w-24 h-24 rounded-full bg-border border border-border mb-6 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-muted">V</div>
          </motion.div>

          <motion.h3
            className="text-xl font-semibold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Vladislav, CEO & Full-Stack Engineer
          </motion.h3>

          <motion.p
            className="text-muted max-w-2xl leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I earn in USD and spend locally. Existing apps were too bloated for multi-currency tracking.
            So I built SpendWarden - the ruthless AI tracker to fix my own problem. Now I'm opening it up.
          </motion.p>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/potterbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://t.me/potter_bl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-foreground transition-colors duration-300"
              aria-label="Telegram"
            >
              <MessageCircle className="w-5 h-5 text-muted hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://instagram.com/potter.bl"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:border-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-muted hover:text-foreground transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
