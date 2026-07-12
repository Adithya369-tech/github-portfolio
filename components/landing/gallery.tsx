'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { Reveal } from './reveal'

type Item = {
  src: string
  alt: string
  label: string
  className: string
  range: number
}

const items: Item[] = [
  {
    src: '/lifestyle-run.png',
    alt: 'Runner wearing Aura Pro earbuds at sunrise',
    label: 'Made for motion',
    className: 'md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto',
    range: 60,
  },
  {
    src: '/lifestyle-work.png',
    alt: 'Person focused at work wearing Aura Pro',
    label: 'Deep focus',
    className: 'aspect-[4/3]',
    range: 90,
  },
  {
    src: '/lifestyle-commute.png',
    alt: 'Commuter relaxing with Aura Pro earbuds',
    label: 'Your quiet space',
    className: 'aspect-[4/3]',
    range: 120,
  },
]

function ParallaxCard({ item }: { item: Item }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [item.range, -item.range])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.15])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 24px)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 24px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-border ${item.className}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-0">
        <Image
          src={item.src || '/placeholder.svg'}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      <span className="absolute bottom-6 left-6 text-lg font-medium text-background">
        {item.label}
      </span>
    </motion.div>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-24 md:py-32">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          A part of your day
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Wherever life takes you.
        </h2>
      </Reveal>

      <div className="mx-auto grid max-w-6xl auto-rows-[minmax(0,1fr)] grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((item) => (
          <ParallaxCard key={item.src} item={item} />
        ))}
      </div>
    </section>
  )
}
