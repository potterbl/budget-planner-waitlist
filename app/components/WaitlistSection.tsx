'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { submitWaitlistForm } from '../actions/waitlist'
import toast from 'react-hot-toast'

export function WaitlistSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [remainingSpots] = useState(88) // 500 - 412 = 88

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)

    try {
      const result = await submitWaitlistForm(formData)

      if (result.success) {
        toast.success(result.message)
        // Reset form
        const form = document.getElementById('waitlist-form') as HTMLFormElement
        form?.reset()
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Lock in your Lifetime Deal.
          </h2>
          <p className="text-lg text-muted mb-8">
            Retail will be $12/month. The first 500 early adopters get the Lifetime Deal for $69.
            Pay once, use forever.
          </p>

          <div className="inline-flex items-center space-x-2 text-sm text-muted">
            <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-foreground rounded-full transition-all duration-500"
                style={{ width: `${((500 - remainingSpots) / 500) * 100}%` }}
              />
            </div>
            <span>Only {remainingSpots} out of 500 Lifetime spots remaining.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            id="waitlist-form"
            action={handleSubmit}
            className="space-y-6 p-8 border border-border rounded-lg bg-background"
          >
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <div>
              <label htmlFor="messenger" className="sr-only">Messenger Username</label>
              <input
                id="messenger"
                type="text"
                name="messenger"
                placeholder="Telegram/WhatsApp Username (Optional)"
                className="w-full p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted focus:outline-none focus:border-foreground transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 bg-accent text-background font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Securing Your Spot...' : 'Secure My $69 Lifetime Spot'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

