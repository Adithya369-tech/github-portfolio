'use client'

import { motion } from 'motion/react'
import {
  BatteryFull,
  Bluetooth,
  Droplets,
  Gamepad2,
  PhoneCall,
  Waves,
  Zap,
} from 'lucide-react'
import { Reveal, staggerContainer, staggerItem } from './reveal'

const features = [
  {
    icon: Waves,
    title: 'Active Noise Cancellation',
    body: 'Adaptive ANC silences up to 45dB of ambient noise in real time.',
  },
  {
    icon: BatteryFull,
    title: '50-Hour Battery',
    body: '8 hours per charge, 50 hours total with the pocketable case.',
  },
  {
    icon: PhoneCall,
    title: 'Crystal Clear Calls',
    body: 'Six beam-forming mics isolate your voice from the chaos.',
  },
  {
    icon: Bluetooth,
    title: 'Bluetooth 5.4',
    body: 'Rock-solid, low-latency connection with multipoint pairing.',
  },
  {
    icon: Zap,
    title: 'Fast Charging',
    body: '10 minutes in the case gives you 4 hours of playback.',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Mode',
    body: '45ms low-latency mode keeps audio locked to the action.',
  },
  {
    icon: Droplets,
    title: 'Water Resistance',
    body: 'IPX5 rated to shrug off sweat, rain, and everyday spills.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative bg-secondary px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Engineered to perform
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Seven reasons to never take them out.
        </h2>
      </Reveal>

      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, i) => (
          <motion.li
            key={feature.title}
            variants={staggerItem}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-40px_rgba(37,99,235,0.5)] ${
              i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/15"
            />
            <div className="relative">
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-foreground transition-colors duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.body}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
