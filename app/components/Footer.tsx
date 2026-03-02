'use client'

import { motion } from 'framer-motion'
import { Linkedin, Send, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Logo and tagline */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="SpendWarden Logo"
              className="w-8 h-8"
            />
            <div>
              <h3 className="text-lg font-semibold text-foreground">SpendWarden</h3>
              <p className="text-sm text-muted">The ruthless AI tracker</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/potterbl/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors"
              aria-label="Follow on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>

            <a
              href="https://t.me/potter_bl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors"
              aria-label="Contact on Telegram"
            >
              <Send className="w-5 h-5" />
              <span className="text-sm">Telegram</span>
            </a>

            <a
              href="https://instagram.com/potter.bl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-muted hover:text-foreground transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} SpendWarden. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
