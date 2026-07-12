'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from './reveal'

const reviews = [
  {
    name: 'Maya Chen',
    role: 'Music producer',
    quote:
      'The soundstage is unreal for something this small. Mixing on the go finally feels honest.',
  },
  {
    name: 'David Okafor',
    role: 'Frequent flyer',
    quote:
      'ANC turns a red-eye into a private studio. I forget the engines are even running.',
  },
  {
    name: 'Priya Nair',
    role: 'Marathon runner',
    quote:
      'They never budge, never cut out, and the battery outlasts my longest runs by a mile.',
  },
  {
    name: 'Lucas Meyer',
    role: 'Remote engineer',
    quote:
      'Call quality is genuinely the best I have used. Nobody can tell I am in a busy cafe.',
  },
  {
    name: 'Sofia Rossi',
    role: 'Podcaster',
    quote:
      'Fast charge saved me before a session — ten minutes and I was good for hours.',
  },
]

const row = [...reviews, ...reviews]

export function Reviews() {
  const [paused, setPaused] = useState(false)

  return (
    <section className="relative overflow-hidden px-0 py-24 md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl px-6 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          Loved by listeners
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Rated 4.9 by 12,000+ people.
        </h2>
      </Reveal>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex w-max gap-5 px-6"
          animate={{ x: paused ? undefined : ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {row.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="group w-[320px] shrink-0 rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.5)]"
            >
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground transition-colors">
                “{review.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-secondary text-sm font-semibold">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
