'use client'

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react'
import { useEffect, useRef } from 'react'
import { Reveal, staggerContainer, staggerItem } from './reveal'

type Spec = {
  value: number
  suffix: string
  decimals?: number
  label: string
}

const specs: Spec[] = [
  { value: 50, suffix: 'h', label: 'Total battery life' },
  { value: 45, suffix: 'dB', label: 'Noise cancelled' },
  { value: 5.4, suffix: '', decimals: 1, label: 'Bluetooth version' },
  { value: 4, suffix: 'g', label: 'Per earbud' },
]

function Counter({ value, suffix, decimals = 0 }: Spec) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    latest.toFixed(decimals),
  )

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [inView, count, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function Specs() {
  return (
    <section id="specs" className="relative bg-foreground px-6 py-24 text-background md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent-foreground/70">
          By the numbers
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Spec sheet worth reading.
        </h2>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {specs.map((spec) => (
          <motion.div
            key={spec.label}
            variants={staggerItem}
            className="rounded-3xl border border-background/15 bg-background/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-background/10"
          >
            <div className="text-5xl font-semibold tracking-tight sm:text-6xl">
              <Counter {...spec} />
            </div>
            <p className="mt-4 text-sm text-background/60">{spec.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
