'use client'

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Reveal } from './reveal'

const colors = [
  { id: 'white', name: 'Glacier White', src: '/earbuds-hero.png', swatch: '#f3f3f3' },
  { id: 'black', name: 'Midnight', src: '/earbuds-black.png', swatch: '#1a1a1a' },
  { id: 'blue', name: 'Cobalt', src: '/earbuds-blue.png', swatch: '#2563eb' },
]

const chapters = [
  {
    title: 'Designed to disappear',
    body: 'A featherlight shell contoured from a single piece of acoustic-grade polymer. It settles into your ear and simply vanishes.',
  },
  {
    title: 'Tuned by obsession',
    body: 'Dual custom drivers deliver deep, textured bass and crystalline highs — calibrated a thousand times over.',
  },
  {
    title: 'Silence, on command',
    body: 'Adaptive noise cancellation reads your environment 200 times a second and folds the world away.',
  },
]

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95])

  const current = colors[active]

  return (
    <section id="showcase" ref={ref} className="relative px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          The product
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Every detail, considered.
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
        {/* sticky product */}
        <div className="md:sticky md:top-24">
          <div className="relative overflow-hidden rounded-4xl border border-border bg-card p-8">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/60 to-transparent" />
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-16 rounded-[50%] bg-foreground/10 blur-2xl" />
            <motion.div style={{ rotate, scale }} className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={current.src || '/placeholder.svg'}
                    alt={`Aura Pro earbuds in ${current.name}`}
                    width={900}
                    height={700}
                    className="h-auto w-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <div className="relative mt-6 flex items-center justify-center gap-4">
              {colors.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => setActive(i)}
                  aria-label={color.name}
                  aria-pressed={active === i}
                  className={`size-9 rounded-full border transition-all duration-300 ${
                    active === i
                      ? 'scale-110 border-foreground ring-2 ring-foreground ring-offset-2 ring-offset-card'
                      : 'border-border hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.swatch }}
                />
              ))}
            </div>
            <p className="relative mt-4 text-center text-sm font-medium text-muted-foreground">
              {current.name}
            </p>
          </div>
        </div>

        {/* scrolling chapters */}
        <div className="flex flex-col gap-8 md:pt-4">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.title} delay={i * 0.05}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:-translate-y-1">
                <span className="text-sm font-mono text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {chapter.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {chapter.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
